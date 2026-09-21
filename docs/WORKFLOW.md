# Reproducing the archive

This is the workflow used for all three broadcasts: download with `yt-dlp`,
transcribe locally in restartable chunks with Faster-Whisper, render portable
formats, write chapter notes, then synchronize the static viewer.

## 1. Install tools

Install Python 3.11 or newer, `ffmpeg`/`ffprobe`, and the official `yt-dlp`
release. One supported installation is:

```bash
python3 -m pip install -U "yt-dlp[default]"
python3 -m venv .venv
.venv/bin/python -m pip install -r requirements.txt
```

The original run used yt-dlp `2026.08.19` and ffmpeg `6.1.1`. Transcription was
tested with Faster-Whisper `1.2.1`, CTranslate2 `4.8.2`, and NumPy `2.5.3`.

## 2. Download a broadcast

List X replay formats when disk size or resolution matters:

```bash
yt-dlp -F "https://x.com/i/broadcasts/BROADCAST_ID"
```

Then use the wrapper:

```bash
scripts/download_broadcast.sh \
  "https://x.com/i/broadcasts/BROADCAST_ID" \
  replay-1200
```

The wrapper preserves the recovered recipe: partial downloads resume, HLS
fragments download concurrently, ffmpeg merges to MP4, the broadcast ID stays
in the filename, and output goes only to the Git-ignored `videos/` directory.

Days 1 and 2 used yt-dlp's best-format selection. Day 3 used `replay-1200`
(480p) to fit available disk space. If X requires authentication, add
`--cookies-from-browser firefox` (or your browser) to your own command. Never
save or commit cookie files.

## 3. Transcribe locally

The transcriber decodes one 30-minute chunk at a time. It appends segments and a
`chunk_complete` checkpoint to JSONL. Re-running the same command skips finished
chunks, so Ctrl-C or a restart does not lose completed work.

```bash
.venv/bin/python scripts/transcribe.py \
  "videos/Your broadcast [BROADCAST_ID].mp4" \
  --output content/day-N/transcript.raw.jsonl \
  --model small.en \
  --chunk-minutes 30 \
  --threads 8 \
  --beam-size 5
```

Models are cached under `.cache/models/`, which is ignored by Git. These
transcripts used `small.en` with CPU `int8` inference.

## 4. Render transcript formats

Pass the video path as it should appear relative to the generated Markdown:

```bash
.venv/bin/python scripts/render_transcript.py \
  content/day-N/transcript.raw.jsonl \
  --title "Day N — Broadcast title" \
  --video "../../videos/Your broadcast [BROADCAST_ID].mp4" \
  --output-prefix content/day-N/transcript
```

This creates Markdown, plain text, WebVTT, and SRT. For automatic subtitles in a
local player, copy the SRT beside the ignored MP4 and give it the same basename.

## 5. Digest and verify

Write chapter notes in `content/day-N/chapters/`. Rank novelty and usefulness
separately; favor live implementation, debugging, and verification; distinguish
demonstrated behavior from assertion; and record security/reliability caveats.
Verify exact quotations against the recording.

After editing a guide, chapter, or transcript, refresh the viewer:

```bash
scripts/sync_viewer_data.sh
make run
```

Open `http://localhost:8000/docs/`. A local web server is required because
browsers block the viewer's Markdown requests from `file://` pages. Use the
included server instead of Python's basic `http.server`: its byte-range support
lets the player seek immediately in multi-gigabyte recordings.
