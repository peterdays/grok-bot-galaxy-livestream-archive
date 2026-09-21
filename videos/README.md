# Local videos

Downloaded broadcasts live in this directory. Everything here except this file
is ignored by Git, so multi-gigabyte media cannot be committed accidentally.

Expected filenames are listed in [`../broadcasts.json`](../broadcasts.json).
Download a public broadcast with:

```bash
scripts/download_broadcast.sh "https://x.com/i/broadcasts/BROADCAST_ID"
```

To request a specific X replay format, pass it as the second argument. The Day
3 archive used `replay-1200` (480p):

```bash
scripts/download_broadcast.sh \
  "https://x.com/i/broadcasts/1YGNrbXEeazGw" replay-1200
```
