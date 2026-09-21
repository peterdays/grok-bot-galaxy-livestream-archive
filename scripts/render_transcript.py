#!/usr/bin/env python3
"""Render checkpointed JSONL transcripts as Markdown, WebVTT, SRT, and text."""

from __future__ import annotations

import argparse
import json
from pathlib import Path


def clock(seconds: float, srt: bool = False) -> str:
    milliseconds = max(0, round(seconds * 1000))
    hours, milliseconds = divmod(milliseconds, 3_600_000)
    minutes, milliseconds = divmod(milliseconds, 60_000)
    secs, milliseconds = divmod(milliseconds, 1000)
    separator = "," if srt else "."
    return f"{hours:02d}:{minutes:02d}:{secs:02d}{separator}{milliseconds:03d}"


def short_clock(seconds: float) -> str:
    whole = max(0, int(seconds))
    hours, remainder = divmod(whole, 3600)
    minutes, secs = divmod(remainder, 60)
    return f"{hours:02d}:{minutes:02d}:{secs:02d}"


def records(path: Path) -> tuple[dict, list[dict]]:
    metadata: dict = {}
    segments: list[dict] = []
    with path.open(encoding="utf-8") as handle:
        for line in handle:
            record = json.loads(line)
            if record.get("kind") == "metadata" and not metadata:
                metadata = record
            elif record.get("kind") == "segment":
                segments.append(record)
    # Interrupted chunks can contain partial duplicated data. Prefer the last
    # instance of an identical timestamp/text tuple while retaining chronology.
    unique = {
        (item["start"], item["end"], item["text"]): item for item in segments
    }
    return metadata, sorted(unique.values(), key=lambda item: (item["start"], item["end"]))


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("jsonl", type=Path)
    parser.add_argument("--title", required=True)
    parser.add_argument("--video", required=True)
    parser.add_argument("--output-prefix", type=Path, required=True)
    args = parser.parse_args()

    metadata, segments = records(args.jsonl)
    prefix = args.output_prefix
    prefix.parent.mkdir(parents=True, exist_ok=True)

    with prefix.with_suffix(".vtt").open("w", encoding="utf-8") as out:
        out.write("WEBVTT\n\n")
        for index, item in enumerate(segments, 1):
            out.write(
                f"{index}\n{clock(item['start'])} --> {clock(item['end'])}\n"
                f"{item['text']}\n\n"
            )

    with prefix.with_suffix(".srt").open("w", encoding="utf-8") as out:
        for index, item in enumerate(segments, 1):
            out.write(
                f"{index}\n{clock(item['start'], True)} --> {clock(item['end'], True)}\n"
                f"{item['text']}\n\n"
            )

    with prefix.with_suffix(".txt").open("w", encoding="utf-8") as out:
        for item in segments:
            out.write(f"[{short_clock(item['start'])}] {item['text']}\n")

    # Keep the timestamp fragment readable while quoting spaces in local paths.
    quoted_video = args.video.replace(" ", "%20")
    with prefix.with_suffix(".md").open("w", encoding="utf-8") as out:
        out.write(f"# {args.title} — transcript\n\n")
        out.write(
            f"Source video: [{args.video}]({quoted_video})\n\n"
            f"Transcription model: `{metadata.get('model', 'unknown')}`\n\n"
            "Machine-generated transcript; technical names may need correction.\n\n"
        )
        current_bucket = -1
        for item in segments:
            bucket = int(item["start"] // 300)
            if bucket != current_bucket:
                current_bucket = bucket
                out.write(f"\n## {short_clock(bucket * 300)}\n\n")
            out.write(
                f"[{short_clock(item['start'])}]({quoted_video}#t={int(item['start'])}) "
                f"{item['text']}\n\n"
            )

    print(f"Rendered {len(segments)} segments to {prefix}.[md,txt,vtt,srt]")


if __name__ == "__main__":
    main()
