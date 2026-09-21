#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat >&2 <<'HELP'
Usage: scripts/download_broadcast.sh URL [FORMAT]

Downloads one X broadcast into videos/ with resumable, concurrent fragments.
FORMAT defaults to the best available video/audio combination. Use `yt-dlp -F
URL` first if you want an explicit replay format such as replay-1200.

Environment:
  YTDLP_BIN        yt-dlp executable (default: yt-dlp)
  YTDLP_FRAGMENTS  concurrent HLS fragments (default: 4)
HELP
}

if [[ $# -lt 1 || $# -gt 2 ]]; then
  usage
  exit 2
fi

url=$1
format=${2:-bestvideo*+bestaudio/best}
yt_dlp=${YTDLP_BIN:-yt-dlp}
fragments=${YTDLP_FRAGMENTS:-4}

if ! command -v "$yt_dlp" >/dev/null 2>&1; then
  echo "yt-dlp was not found. Install it from https://github.com/yt-dlp/yt-dlp" >&2
  exit 1
fi

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "ffmpeg is required to merge streams into MP4." >&2
  exit 1
fi

mkdir -p videos

"$yt_dlp" \
  --no-playlist \
  --newline \
  --continue \
  --concurrent-fragments "$fragments" \
  --progress-delta 30 \
  --format "$format" \
  --merge-output-format mp4 \
  --output 'videos/%(title).150B [%(id)s].%(ext)s' \
  "$url"
