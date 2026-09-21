# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A static, reproducible archive of the three-day X livestream event "Grok Bot Galaxy." It contains machine-generated transcripts, chapter-by-chapter analysis/guides, and a dependency-free static viewer. Source videos are never committed — `videos/` is gitignored, and downloads/transcription are meant to be reproduced locally by anyone with the original broadcast URLs (listed in `broadcasts.json`).

## Commands

Browse the viewer locally:

```bash
make run
# open http://localhost:8000/docs/
```

Reproduce the pipeline for a broadcast (day N):

```bash
# 1. Download broadcast into ignored videos/ dir
scripts/download_broadcast.sh "https://x.com/i/broadcasts/BROADCAST_ID" replay-1200

# 2. Local transcription env
python3 -m venv .venv
.venv/bin/python -m pip install -r requirements.txt

# 3. Resume-safe transcription (checkpointed JSONL, safe to interrupt/resume)
.venv/bin/python scripts/transcribe.py \
  "videos/Your broadcast [BROADCAST_ID].mp4" \
  --output content/day-N/transcript.raw.jsonl \
  --model small.en --chunk-minutes 30 --threads 8 --beam-size 5

# 4. Render Markdown/TXT/SRT/VTT from the raw JSONL checkpoints
.venv/bin/python scripts/render_transcript.py \
  content/day-N/transcript.raw.jsonl \
  --title "Day N — Broadcast title" \
  --video "../../videos/Your broadcast [BROADCAST_ID].mp4" \
  --output-prefix content/day-N/transcript

# 5. Sync content/ into the static viewer's docs/data/ (required after any content edit)
scripts/sync_viewer_data.sh
```

The full pipeline walkthrough lives in `docs/WORKFLOW.md`.

There is no build, lint, or test suite — this is a content archive, not an application. "Correctness" is validated by re-running `render_transcript.py`/`sync_viewer_data.sh` and checking the viewer renders, plus manually verifying transcript/chapter text against the source video.

## Architecture

- `broadcasts.json` — single source of truth for broadcast metadata (slug, day, title, duration, X broadcast ID, source URL, expected video filename, content dir, chapter glob). Scripts and viewer data derive from this.
- `content/day-N/` — per-day content:
  - `transcript.raw.jsonl` — checkpointed Faster-Whisper output (metadata record + segment records); the canonical source transcript, resumable across interruptions.
  - `transcript.md` / `.txt` / `.srt` / `.vtt` — rendered from the raw JSONL by `render_transcript.py`. Never hand-edit these without also fixing `transcript.raw.jsonl` (or accept the edit will be lost on next render) — see chapter/transcript correction workflow below.
  - `chapters/*.md` — hand/LLM-authored scored sections, takeaways, caveats, and narrative per 30-minute time range, matching each day's `chapter_glob` in `broadcasts.json`.
  - `README.md` — per-day guide, ranking notable segments.
- `docs/` — static, dependency-free viewer (plain HTML/CSS/JS, no build step). `docs/data/` is a **generated mirror** of `content/`, populated by `scripts/sync_viewer_data.sh`:
  - `content/day-N/README.md` → `docs/data/DAYN_GUIDE.md`
  - `content/day-N/chapters/*.md` → `docs/data/analysis/`
  - `content/day-N/transcript.md` → `docs/data/transcripts/dayN.md`
  - Do not hand-edit files under `docs/data/` — edit the corresponding file in `content/` and re-run the sync script.
- `scripts/` — the reproduction pipeline, meant to be run in order: `download_broadcast.sh` (yt-dlp wrapper with resumable/concurrent fragment download and ffmpeg MP4 merge) → `transcribe.py` (checkpointed Faster-Whisper transcription) → `render_transcript.py` (JSONL → Markdown/TXT/SRT/VTT) → `sync_viewer_data.sh` (refresh viewer from content/).

## Content conventions

- Preserve timestamps when correcting transcript text.
- Mark claims as demonstrated, asserted, or inferred where that distinction matters (this repo evaluates livestream claims, not just transcribes them).
- Verify exact quotations and proper nouns against the source video — Faster-Whisper `small.en` output is unedited and has known recurring errors (e.g. "SpaceX AI" for "xAI", "RockBot/Grokbat" for "Grok Bot").
- Do not commit broadcast video/audio, browser cookies, access tokens, or model caches — `.gitignore` already excludes `videos/*` and working artifacts; run `git status` before publishing to confirm nothing sensitive is staged.
- After editing any guide, chapter, or raw transcript in `content/`, run `scripts/sync_viewer_data.sh` before considering the change done.
