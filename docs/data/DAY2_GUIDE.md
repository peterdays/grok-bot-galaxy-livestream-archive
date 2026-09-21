# Day 2 viewing guide

Day 2 runs **08:23:18**. The transcript and subtitles are machine-generated with `small.en`; names such as **xAI**, **Grokbot**, **P-stack**, **Cursor**, and product names are occasionally mistranscribed.

## Files

- [Timestamped transcript](transcript.md) — click a timestamp to open the local video there
- [Plain-text transcript](transcript.txt)
- [WebVTT subtitles](transcript.vtt)
- [SRT subtitles](transcript.srt)
- [Raw checkpointed segments](transcript.raw.jsonl)
- [Video](../../videos/Day%202:%20Grok%20Bot%20builds%20a%20Game%20Studio%20LIVE%20[1PKqrNyvmYwGb].mp4)

The matching `.srt` is also beside the video, so players such as VLC/mpv should detect it automatically.

## Best parts, ranked

Scores are relative to this broadcast: **N** = novelty, **U** = practical usefulness. The ranking intentionally favors live coding, debugging, verification, and workflow design over talks.

| Rank | Time | Topic | N | U | Why it matters |
|---:|---|---|---:|---:|---|
| 1 | [02:05:28–02:09:57](../../videos/Day%202:%20Grok%20Bot%20builds%20a%20Game%20Studio%20LIVE%20[1PKqrNyvmYwGb].mp4#t=7528) | Decouple result computation from animation, simulate games, and verify advantage math | 5 | 5 | The clearest example of testing actual behavior instead of judging generated UI. |
| 2 | [03:42:03–03:44:14](../../videos/Day%202:%20Grok%20Bot%20builds%20a%20Game%20Studio%20LIVE%20[1PKqrNyvmYwGb].mp4#t=13323) | Client-side debug controls and game logic are a security flaw | 5 | 5 | A real architecture correction: delete shipped controls and make the server authoritative. |
| 3 | [07:20:20–07:24:29](../../videos/Day%202:%20Grok%20Bot%20builds%20a%20Game%20Studio%20LIVE%20[1PKqrNyvmYwGb].mp4#t=26420) | Cursor Projects: coordinator, shared worker memory, verification, and fuzzing agents | 5 | 5 | Best deep dive into their live multi-agent coding setup. |
| 4 | [03:34:46–03:38:43](../../videos/Day%202:%20Grok%20Bot%20builds%20a%20Game%20Studio%20LIVE%20[1PKqrNyvmYwGb].mp4#t=12886) | Rewrite brittle incident-specific skills into durable principles | 5 | 5 | Excellent treatment of how agent instructions decay into overfit “soup.” |
| 5 | [06:41:01–06:43:17](../../videos/Day%202:%20Grok%20Bot%20builds%20a%20Game%20Studio%20LIVE%20[1PKqrNyvmYwGb].mp4#t=24061) | Next.js/React client, authoritative server, and one API contract for multiple prototypes | 5 | 5 | The pivotal system-design decision for a competitive game. |
| 6 | [02:01:33–02:05:28](../../videos/Day%202:%20Grok%20Bot%20builds%20a%20Game%20Studio%20LIVE%20[1PKqrNyvmYwGb].mp4#t=7293) | Inspect the first playable build, find the stat-total bug, and target the broken slider in Design Mode | 5 | 5 | Shows the messy first-pass-to-debug loop rather than a polished demo. |
| 7 | [07:24:30–07:27:11](../../videos/Day%202:%20Grok%20Bot%20builds%20a%20Game%20Studio%20LIVE%20[1PKqrNyvmYwGb].mp4#t=26670) | Review agent-recorded prototypes; reject bad timing and weak “3D” | 5 | 5 | Concrete evidence-based review before merge. |
| 8 | [05:35:38–05:38:57](../../videos/Day%202:%20Grok%20Bot%20builds%20a%20Game%20Studio%20LIVE%20[1PKqrNyvmYwGb].mp4#t=20138) | Create a Remotion specialist and translate the design system into code-generated ads | 5 | 5 | Strong example of tool-specific skills plus reusable source assets. |
| 9 | [05:51:38–05:55:59](../../videos/Day%202:%20Grok%20Bot%20builds%20a%20Game%20Studio%20LIVE%20[1PKqrNyvmYwGb].mp4#t=21198) | Convert prototype to React; use code as the interface for motion graphics | 5 | 5 | Explains why structured/code-native workflows play to agent strengths. |
| 10 | [02:19:34–02:20:45](../../videos/Day%202:%20Grok%20Bot%20builds%20a%20Game%20Studio%20LIVE%20[1PKqrNyvmYwGb].mp4#t=8374) | Turn wrong agent reasoning into a reusable skill | 5 | 5 | Compact version of the durable feedback loop used throughout the broadcast. |
| 11 | [03:57:03–03:58:25](../../videos/Day%202:%20Grok%20Bot%20builds%20a%20Game%20Studio%20LIVE%20[1PKqrNyvmYwGb].mp4#t=14223) | Play testing exposes the unlimited-reroll rarity exploit | 5 | 5 | A product/economy failure that only becomes obvious through use. |
| 12 | [02:26:03–02:29:29](../../videos/Day%202:%20Grok%20Bot%20builds%20a%20Game%20Studio%20LIVE%20[1PKqrNyvmYwGb].mp4#t=8763) | Play the revised loop and discover that order has no strategy and weak cards have no purpose | 5 | 5 | Good example of validating whether a mechanic is actually fun. |
| 13 | [01:48:11–01:57:07](../../videos/Day%202:%20Grok%20Bot%20builds%20a%20Game%20Studio%20LIVE%20[1PKqrNyvmYwGb].mp4#t=6491) | Prototype prompt, P-stack routing, multi-model options, and deciding not to over-architect | 5 | 5 | Shows both the coding harness and judgment about which machinery not to use. |
| 14 | [01:25:24–01:29:26](../../videos/Day%202:%20Grok%20Bot%20builds%20a%20Game%20Studio%20LIVE%20[1PKqrNyvmYwGb].mp4#t=5124) | Commit the plan, apply reusable design skills, remove non-MVP work, and launch a cloud agent | 5 | 5 | Clean handoff from agreed specification to implementation. |
| 15 | [05:22:11–05:29:50](../../videos/Day%202:%20Grok%20Bot%20builds%20a%20Game%20Studio%20LIVE%20[1PKqrNyvmYwGb].mp4#t=19331) | Discovery → generator → deterministic PDF repo → independent critic → skill update | 5 | 5 | A non-code document example with an architecture directly transferable to coding agents. |
| 16 | [03:11:04–03:13:25](../../videos/Day%202:%20Grok%20Bot%20builds%20a%20Game%20Studio%20LIVE%20[1PKqrNyvmYwGb].mp4#t=11464) | Draw a product flow in tldraw; coding agent screenshots and implements from it | 5 | 5 | Novel, practical way to communicate spatial interaction intent. |
| 17 | [03:51:08–03:57:03](../../videos/Day%202:%20Grok%20Bot%20builds%20a%20Game%20Studio%20LIVE%20[1PKqrNyvmYwGb].mp4#t=13868) | Divide ownership, maintain Elo, and require browser self-verification | 4 | 5 | Useful pattern for parallel changes with an explicit proof obligation. |
| 18 | [08:13:54–08:17:37](../../videos/Day%202:%20Grok%20Bot%20builds%20a%20Game%20Studio%20LIVE%20[1PKqrNyvmYwGb].mp4#t=29634) | Candid app status, broken import/leaderboard, continuous play tester, and fleet retrospective | 5 | 5 | The best end-of-day reality check and bottleneck analysis. |
| 19 | [08:02:18–08:07:49](../../videos/Day%202:%20Grok%20Bot%20builds%20a%20Game%20Studio%20LIVE%20[1PKqrNyvmYwGb].mp4#t=28938) | Per-run traces plus Git/PR/eval-governed self-improvement | 5 | 5 | Strong production pattern for auditable agent changes. |
| 20 | [00:46:00–00:50:56](../../videos/Day%202:%20Grok%20Bot%20builds%20a%20Game%20Studio%20LIVE%20[1PKqrNyvmYwGb].mp4#t=2760) | Frontend/backend codebase agents investigate a race condition and compare it with competitor behavior | 5 | 5 | Early example of source-grounded multi-agent technical analysis. |

## Full chapter analysis

Each file contains finer time ranges, novelty/usefulness scores, concise takeaways, and a condensed narrative:

| Range | Notes |
|---|---|
| 00:00–00:30 | [chapters/day2_00h00_00h30.md](chapters/day2_00h00_00h30.md) |
| 00:30–01:00 | [chapters/day2_00h30_01h00.md](chapters/day2_00h30_01h00.md) |
| 01:00–01:30 | [chapters/day2_01h00_01h30.md](chapters/day2_01h00_01h30.md) |
| 01:30–02:00 | [chapters/day2_01h30_02h00.md](chapters/day2_01h30_02h00.md) |
| 02:00–02:30 | [chapters/day2_02h00_02h30.md](chapters/day2_02h00_02h30.md) |
| 02:30–03:00 | [chapters/day2_02h30_03h00.md](chapters/day2_02h30_03h00.md) |
| 03:00–03:30 | [chapters/day2_03h00_03h30.md](chapters/day2_03h00_03h30.md) |
| 03:30–04:00 | [chapters/day2_03h30_04h00.md](chapters/day2_03h30_04h00.md) |
| 04:00–04:30 | [chapters/day2_04h00_04h30.md](chapters/day2_04h00_04h30.md) |
| 04:30–05:00 | [chapters/day2_04h30_05h00.md](chapters/day2_04h30_05h00.md) |
| 05:00–05:30 | [chapters/day2_05h00_05h30.md](chapters/day2_05h00_05h30.md) |
| 05:30–06:00 | [chapters/day2_05h30_06h00.md](chapters/day2_05h30_06h00.md) |
| 06:00–06:30 | [chapters/day2_06h00_06h30.md](chapters/day2_06h00_06h30.md) |
| 06:30–07:00 | [chapters/day2_06h30_07h00.md](chapters/day2_06h30_07h00.md) |
| 07:00–07:30 | [chapters/day2_07h00_07h30.md](chapters/day2_07h00_07h30.md) |
| 07:30–08:00 | [chapters/day2_07h30_08h00.md](chapters/day2_07h30_08h00.md) |
| 08:00–08:23 | [chapters/day2_08h00_end.md](chapters/day2_08h00_end.md) |

## Suggested viewing paths

- **Coding/debugging only:** ranks 1–14, 16–20; skip the workshop blocks from roughly 00:30–01:24, 04:00–05:21, 06:00–06:40, and 07:30–08:10 except the ranked reliability sections.
- **Agent orchestration:** ranks 3–5, 8–10, 13–15, 17–20.
- **Game/product design:** ranks 1, 6, 7, 11, 12, 16, 18.
- **Reliability and security:** ranks 1–4, 7, 10, 17–20.
- **Short version:** watch the top 10; read the condensed narratives for every other half hour.
