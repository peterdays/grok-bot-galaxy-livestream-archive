#!/usr/bin/env bash
set -euo pipefail

mkdir -p docs/data/analysis docs/data/transcripts

cp content/day-1/README.md docs/data/DAY1_GUIDE.md
cp content/day-2/README.md docs/data/DAY2_GUIDE.md
cp content/day-3/README.md docs/data/DAY3_GUIDE.md

cp content/day-1/chapters/*.md docs/data/analysis/
cp content/day-2/chapters/*.md docs/data/analysis/
cp content/day-3/chapters/*.md docs/data/analysis/

cp content/day-1/transcript.md docs/data/transcripts/day1.md
cp content/day-2/transcript.md docs/data/transcripts/day2.md
cp content/day-3/transcript.md docs/data/transcripts/day3.md

echo "Viewer data synchronized from content/."
