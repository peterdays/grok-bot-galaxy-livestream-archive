#!/usr/bin/env python3
"""Checkpointed transcription for long videos using faster-whisper.

The script decodes one chunk at a time in memory, appends timestamped segments to
JSONL, and can safely resume at the next unfinished chunk after interruption.
"""

from __future__ import annotations

import argparse
import json
import subprocess
import sys
import time
from pathlib import Path

import numpy as np
from faster_whisper import WhisperModel


SAMPLE_RATE = 16_000


def media_duration(path: Path) -> float:
    result = subprocess.run(
        [
            "ffprobe",
            "-v",
            "error",
            "-show_entries",
            "format=duration",
            "-of",
            "default=noprint_wrappers=1:nokey=1",
            str(path),
        ],
        check=True,
        capture_output=True,
        text=True,
    )
    return float(result.stdout.strip())


def decode_audio(path: Path, start: float, duration: float) -> np.ndarray:
    command = [
        "ffmpeg",
        "-nostdin",
        "-loglevel",
        "error",
        "-ss",
        str(start),
        "-t",
        str(duration),
        "-i",
        str(path),
        "-vn",
        "-ac",
        "1",
        "-ar",
        str(SAMPLE_RATE),
        "-f",
        "s16le",
        "pipe:1",
    ]
    result = subprocess.run(command, check=True, stdout=subprocess.PIPE)
    return np.frombuffer(result.stdout, dtype=np.int16).astype(np.float32) / 32768.0


def completed_chunks(path: Path) -> set[int]:
    done: set[int] = set()
    if not path.exists():
        return done
    with path.open(encoding="utf-8") as handle:
        for line in handle:
            record = json.loads(line)
            if record.get("kind") == "chunk_complete":
                done.add(int(record["chunk_index"]))
    return done


def append_record(handle, record: dict) -> None:
    handle.write(json.dumps(record, ensure_ascii=False) + "\n")
    handle.flush()


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("video", type=Path)
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--model", default="distil-large-v3")
    parser.add_argument("--chunk-minutes", type=float, default=30)
    parser.add_argument("--limit-minutes", type=float)
    parser.add_argument("--threads", type=int, default=8)
    parser.add_argument("--beam-size", type=int, default=5)
    parser.add_argument(
        "--model-cache",
        type=Path,
        default=Path(".cache/models"),
        help="Directory used for downloaded Whisper models (default: .cache/models)",
    )
    args = parser.parse_args()

    video = args.video.resolve()
    output = args.output.resolve()
    output.parent.mkdir(parents=True, exist_ok=True)
    total_duration = media_duration(video)
    if args.limit_minutes is not None:
        total_duration = min(total_duration, args.limit_minutes * 60)
    chunk_seconds = args.chunk_minutes * 60
    total_chunks = int((total_duration + chunk_seconds - 1) // chunk_seconds)
    done = completed_chunks(output)

    print(f"Loading {args.model} (CPU int8, {args.threads} threads)...", flush=True)
    model = WhisperModel(
        args.model,
        device="cpu",
        compute_type="int8",
        cpu_threads=args.threads,
        num_workers=1,
        download_root=str(args.model_cache.resolve()),
    )

    prompt = (
        "A software engineering livestream from xAI about Grok Bot, coding agents, "
        "game development, TypeScript, JavaScript, React, APIs, debugging, terminals, "
        "GitHub, prompts, tools, architecture, implementation, and deployment."
    )

    with output.open("a", encoding="utf-8") as handle:
        if output.stat().st_size == 0:
            append_record(
                handle,
                {
                    "kind": "metadata",
                    "video": video.name,
                    "duration": total_duration,
                    "model": args.model,
                    "chunk_seconds": chunk_seconds,
                },
            )

        for index in range(total_chunks):
            if index in done:
                print(f"Chunk {index + 1}/{total_chunks}: already complete", flush=True)
                continue
            start = index * chunk_seconds
            duration = min(chunk_seconds, total_duration - start)
            wall_start = time.monotonic()
            print(
                f"Chunk {index + 1}/{total_chunks}: decoding {start:.1f}-{start + duration:.1f}s",
                flush=True,
            )
            audio = decode_audio(video, start, duration)
            segments, info = model.transcribe(
                audio,
                language="en",
                beam_size=args.beam_size,
                vad_filter=True,
                vad_parameters={"min_silence_duration_ms": 500},
                condition_on_previous_text=True,
                initial_prompt=prompt,
                word_timestamps=False,
            )
            count = 0
            for segment in segments:
                append_record(
                    handle,
                    {
                        "kind": "segment",
                        "chunk_index": index,
                        "start": round(start + segment.start, 3),
                        "end": round(start + segment.end, 3),
                        "text": segment.text.strip(),
                        "avg_logprob": round(segment.avg_logprob, 4),
                        "no_speech_prob": round(segment.no_speech_prob, 4),
                    },
                )
                count += 1
            elapsed = time.monotonic() - wall_start
            append_record(
                handle,
                {
                    "kind": "chunk_complete",
                    "chunk_index": index,
                    "start": start,
                    "end": start + duration,
                    "segments": count,
                    "elapsed_seconds": round(elapsed, 2),
                },
            )
            speed = duration / elapsed if elapsed else 0
            print(
                f"Chunk {index + 1}/{total_chunks}: {count} segments in {elapsed / 60:.1f}m "
                f"({speed:.1f}x realtime)",
                flush=True,
            )
    return 0


if __name__ == "__main__":
    sys.exit(main())
