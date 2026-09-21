# Contributing

Contributions that correct transcription errors, improve chapter boundaries,
or make the viewer easier to use are welcome.

## Ground rules

- Do not commit broadcast video or audio.
- Do not commit browser cookies, access tokens, or model caches.
- Preserve timestamps when correcting transcript text.
- Mark claims as demonstrated, asserted, or inferred where that distinction
  matters.
- Use the source video to verify exact quotations and proper nouns.

## Updating generated viewer data

After editing a guide, chapter, or raw transcript, run:

```bash
scripts/sync_viewer_data.sh
```
