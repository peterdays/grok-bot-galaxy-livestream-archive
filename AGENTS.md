# Repository Guidelines

## Project Structure & Module Organization

This repository is a static archive of the three-day Grok Bot Galaxy livestream.
Canonical research lives in `content/day-1/` through `content/day-3/`: each day
contains a guide, transcript formats, and `chapters/*.md` notes. `docs/` is the
dependency-free viewer and its mirrored data; edit source material under
`content/`, then refresh `docs/data/` with `scripts/sync_viewer_data.sh`.

Automation is in `scripts/`: `serve.py` provides byte-range video serving,
`download_broadcast.sh` retrieves public recordings, and the Python scripts
transcribe and render transcript formats. Keep large media only in `videos/`;
it is intentionally Git-ignored. Screenshots for the README live in
`docs/screenshots/`.

## Build, Test, and Development Commands

- `make run` starts the local viewer at `http://localhost:8000/docs/`.
- `make run PORT=8080` uses a different local port.
- `scripts/sync_viewer_data.sh` copies updated content into the viewer.
- `python3 -m py_compile scripts/serve.py` checks server syntax.
- `node --check docs/app.js` checks viewer JavaScript syntax.

There is no build step, package manager, or automated test suite. Verify UI
changes locally with `make run`; ensure chapter and transcript links still load
and local video seeks work when a matching file exists in `videos/`.

## Coding Style & Naming Conventions

Use four spaces for Python and two spaces for HTML/CSS/JavaScript. Keep the
viewer dependency-free and use browser-native APIs. Name chapter files by time
range, such as `day1_03h30_04h00.md`; preserve timestamps when editing prose or
correcting transcripts. Prefer direct Markdown headings, short paragraphs, and
relative links.

## Content, Security, and Configuration

Treat transcripts as machine-generated until verified against the recording.
Distinguish demonstrated behavior from assertions, and retain reliability or
security caveats in chapter notes. Never commit videos, cookies, tokens, model
caches, virtual environments, or partial downloads. Run `git status --ignored`
before publishing if you handled local media or credentials.

## Commit & Pull Request Guidelines

Use short imperative commit subjects, for example `Add make run shortcut for
local viewer` or `Fix local video server noise`. Keep commits focused. Pull
requests should describe the affected day or viewer behavior, link relevant
issues when available, and include screenshots for visible UI changes. State
the validation commands you ran and flag any unverified transcript edits.
