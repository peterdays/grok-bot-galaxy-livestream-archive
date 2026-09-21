# Day 3 viewing guide

Day 3 runs **07:58:22**. The transcript and subtitles are machine-generated with `small.en`; names such as **xAI**, **Grokbot**, **Cursor**, **Potato Mode**, and product names are occasionally mistranscribed.

## Files

- [Timestamped transcript](transcript.md) — click a timestamp to open the local video there
- [Plain-text transcript](transcript.txt)
- [WebVTT subtitles](transcript.vtt)
- [SRT subtitles](transcript.srt)
- [Raw checkpointed segments](transcript.raw.jsonl)
- [Video](../../videos/Day%203:%20Building%20a%20company%20in%203%20days%20-%20launching%20today!%20[1YGNrbXEeazGw].mp4)

The matching `.srt` is also beside the video, so players such as VLC/mpv should detect it automatically.

## Best parts, ranked

Scores are relative to this broadcast: **N** = novelty, **U** = practical usefulness. The ranking favors live implementation, debugging, verification, and candid failure analysis over presentations and product promotion.

| Rank | Time | Topic | N | U | Why it matters |
|---:|---|---|---:|---:|---|
| 1 | [07:50:12–07:57:35](../../videos/Day%203:%20Building%20a%20company%20in%203%20days%20-%20launching%20today!%20[1YGNrbXEeazGw].mp4#t=28212) | Final metrics → bad SQL takes down production → recovery → broken ad moderation and only “theoretical” revenue | 5 | 5 | The clearest evidence that fast autonomous merging needs database safeguards, staged rollout, and rollback. |
| 2 | [05:00:00–05:09:46](../../videos/Day%203:%20Building%20a%20company%20in%203%20days%20-%20launching%20today!%20[1YGNrbXEeazGw].mp4#t=18000) | Mobile play test finds regressions; four scoped agents reproduce, fix, and verify separate UI/features | 5 | 5 | Best live example of turning observed product behavior into parallel, evidence-producing engineering work. |
| 3 | [01:35:01–01:44:09](../../videos/Day%203:%20Building%20a%20company%20in%203%20days%20-%20launching%20today!%20[1YGNrbXEeazGw].mp4#t=5701) | Pre-launch play test exposes unknown cards and unreadable combat; team redesigns the interaction instead of polishing around it | 5 | 5 | Strong product-debug loop that changes the design based on actual use. |
| 4 | [00:12:11–00:18:55](../../videos/Day%203:%20Building%20a%20company%20in%203%20days%20-%20launching%20today!%20[1YGNrbXEeazGw].mp4#t=731) | Overnight software factory, small PRs, verification/fuzzing workers, and event-driven browser QA | 5 | 5 | Compact explanation of the multi-agent build-and-test architecture used all day. |
| 5 | [02:07:18–02:12:45](../../videos/Day%203:%20Building%20a%20company%20in%203%20days%20-%20launching%20today!%20[1YGNrbXEeazGw].mp4#t=7638) | Investigation-only production bug prompt plus authenticated, rate-limited, validated feedback intake | 5 | 5 | Excellent separation of diagnosis from mutation and of untrusted user input from the coding loop. |
| 6 | [02:24:40–02:33:32](../../videos/Day%203:%20Building%20a%20company%20in%203%20days%20-%20launching%20today!%20[1YGNrbXEeazGw].mp4#t=8680) | Triage/play-test separation, reproduction gates, isolated verification swarms, and external production signals | 5 | 5 | Best system-level treatment of feedback becoming fixes without trusting the first agent. |
| 7 | [07:12:22–07:15:37](../../videos/Day%203:%20Building%20a%20company%20in%203%20days%20-%20launching%20today!%20[1YGNrbXEeazGw].mp4#t=25942) | Cursor Projects coordinator, parallel cloud agents, screenshots/preview verification, and human-owned social posting | 5 | 5 | Clear deep dive into durable orchestration with a sensible public-action boundary. |
| 8 | [01:50:32–01:57:16](../../videos/Day%203:%20Building%20a%20company%20in%203%20days%20-%20launching%20today!%20[1YGNrbXEeazGw].mp4#t=6632) | Launch-pulse metrics and runtime validation of backend/frontend REST contracts with Zod | 5 | 5 | Connects observability with an explicit cross-system type-safety correction. |
| 9 | [05:19:01–05:22:30](../../videos/Day%203:%20Building%20a%20company%20in%203%20days%20-%20launching%20today!%20[1YGNrbXEeazGw].mp4#t=19141) | Watch an agent reproduce/test a responsive fix, encode testing as a reusable skill, and challenge suspicious history data | 5 | 5 | Verification is visible, reusable, and paired with healthy skepticism about product data. |
| 10 | [05:27:34–05:29:09](../../videos/Day%203:%20Building%20a%20company%20in%203%20days%20-%20launching%20today!%20[1YGNrbXEeazGw].mp4#t=19654) | Reproducible preview environments, elicitation-first UI planning, and review/merge of the live ability-display fix | 5 | 5 | Shows the complete path from a defect found minutes earlier to an accepted PR. |
| 11 | [00:46:08–00:52:12](../../videos/Day%203:%20Building%20a%20company%20in%203%20days%20-%20launching%20today!%20[1YGNrbXEeazGw].mp4#t=2768) | Requirements bot asks about CRM semantics, offline actions, and confirmation boundaries, then hands a spec to engineering | 5 | 5 | Strong example of product clarification before implementation rather than prompt-and-pray building. |
| 12 | [04:23:58–04:27:09](../../videos/Day%203:%20Building%20a%20company%20in%203%20days%20-%20launching%20today!%20[1YGNrbXEeazGw].mp4#t=15838) | Compare generated drafts with what the human actually sent and feed the edit delta into writing rules | 5 | 5 | One of the best closed-loop self-improvement patterns, with a useful rate limit on changes. |
| 13 | [06:10:31–06:17:30](../../videos/Day%203:%20Building%20a%20company%20in%203%20days%20-%20launching%20today!%20[1YGNrbXEeazGw].mp4#t=22231) | Browser research → positioning document → human comments → ad variants → repo-connected landing-page work | 5 | 5 | A real cross-functional handoff whose artifacts and revision surface are shown. |
| 14 | [01:27:42–01:35:00](../../videos/Day%203:%20Building%20a%20company%20in%203%20days%20-%20launching%20today!%20[1YGNrbXEeazGw].mp4#t=5262) | Slack report → reproduce → logs → owner/decision → PR, followed by production OAuth and launch-checklist work | 5 | 5 | A practical production-issue loop with clear boundaries and operational follow-through. |
| 15 | [06:51:54–07:00:00](../../videos/Day%203:%20Building%20a%20company%20in%203%20days%20-%20launching%20today!%20[1YGNrbXEeazGw].mp4#t=24714) | Leaderboard-grinding bot, neglected project board, unresolved matchmaking, and candid production-vs-demo code-review standards | 5 | 5 | Exposes abuse, coordination debt, and the danger of mistaking PR volume for quality. |
| 16 | [07:30:55–07:32:04](../../videos/Day%203:%20Building%20a%20company%20in%203%20days%20-%20launching%20today!%20[1YGNrbXEeazGw].mp4#t=27055) | Deduplicated feedback/repro pipeline running in blanket “YOLO” auto-merge mode | 5 | 5 | Valuable precisely as an anti-pattern; the later production outage shows the missing controls matter. |
| 17 | [04:10:04–04:21:33](../../videos/Day%203:%20Building%20a%20company%20in%203%20days%20-%20launching%20today!%20[1YGNrbXEeazGw].mp4#t=15004) | Post-call pack, browser-built ROI form, account reset, and multi-agent staff meeting with designed disagreement | 5 | 5 | Best non-coding demonstration of coordinated specialists returning reviewable work. |
| 18 | [03:36:32–03:40:02](../../videos/Day%203:%20Building%20a%20company%20in%203%20days%20-%20launching%20today!%20[1YGNrbXEeazGw].mp4#t=12992) | Installed marketplace template lacks the advertised ICP skill; team verifies the artifact and recovers from first principles | 5 | 5 | A useful supply-chain reality check: the marketplace description is not proof of installed behavior. |
| 19 | [03:47:05–03:52:33](../../videos/Day%203:%20Building%20a%20company%20in%203%20days%20-%20launching%20today!%20[1YGNrbXEeazGw].mp4#t=13625) | GTM bot pulls live product metrics, revises human audience hypotheses, and receives blunt feedback on “AI sloppy” copy | 5 | 5 | Good combination of cross-agent evidence and human editorial judgment. |
| 20 | [07:41:04–07:46:36](../../videos/Day%203:%20Building%20a%20company%20in%203%20days%20-%20launching%20today!%20[1YGNrbXEeazGw].mp4#t=27664) | Honest retrospective on stream-driven distribution, manual learning before automation, workflow flywheels, and feature restraint | 5 | 5 | The strongest strategic summary and a needed antidote to the broadcast's raw velocity metrics. |

## Full chapter analysis

Each file contains finer time ranges, novelty/usefulness scores, concise takeaways, caveats, and a condensed narrative:

| Range | Notes |
|---|---|
| 00:00–00:30 | [chapters/day3_00h00_00h30.md](chapters/day3_00h00_00h30.md) |
| 00:30–01:00 | [chapters/day3_00h30_01h00.md](chapters/day3_00h30_01h00.md) |
| 01:00–01:30 | [chapters/day3_01h00_01h30.md](chapters/day3_01h00_01h30.md) |
| 01:30–02:00 | [chapters/day3_01h30_02h00.md](chapters/day3_01h30_02h00.md) |
| 02:00–02:30 | [chapters/day3_02h00_02h30.md](chapters/day3_02h00_02h30.md) |
| 02:30–03:00 | [chapters/day3_02h30_03h00.md](chapters/day3_02h30_03h00.md) |
| 03:00–03:30 | [chapters/day3_03h00_03h30.md](chapters/day3_03h00_03h30.md) |
| 03:30–04:00 | [chapters/day3_03h30_04h00.md](chapters/day3_03h30_04h00.md) |
| 04:00–04:30 | [chapters/day3_04h00_04h30.md](chapters/day3_04h00_04h30.md) |
| 04:30–05:00 | [chapters/day3_04h30_05h00.md](chapters/day3_04h30_05h00.md) |
| 05:00–05:30 | [chapters/day3_05h00_05h30.md](chapters/day3_05h00_05h30.md) |
| 05:30–06:00 | [chapters/day3_05h30_06h00.md](chapters/day3_05h30_06h00.md) |
| 06:00–06:30 | [chapters/day3_06h00_06h30.md](chapters/day3_06h00_06h30.md) |
| 06:30–07:00 | [chapters/day3_06h30_07h00.md](chapters/day3_06h30_07h00.md) |
| 07:00–07:30 | [chapters/day3_07h00_07h30.md](chapters/day3_07h00_07h30.md) |
| 07:30–07:58 | [chapters/day3_07h30_end.md](chapters/day3_07h30_end.md) |

## Suggested viewing paths

- **Coding/debugging only:** ranks 1–10, 14–16; also [01:38:21–01:44:09](../../videos/Day%203:%20Building%20a%20company%20in%203%20days%20-%20launching%20today!%20[1YGNrbXEeazGw].mp4#t=5901) and [07:05:35–07:06:58](../../videos/Day%203:%20Building%20a%20company%20in%203%20days%20-%20launching%20today!%20[1YGNrbXEeazGw].mp4#t=25535).
- **Agent orchestration:** ranks 4–7, 9–14, 16–19.
- **Reliability/security:** ranks 1–10, 14–18; pay special attention to investigation-only prompts, credential exposure, leaderboard automation, auto-merge, and the SQL outage.
- **Business/marketing workflows:** ranks 11–13 and 17–20; [05:31:31–05:36:38](../../videos/Day%203:%20Building%20a%20company%20in%203%20days%20-%20launching%20today!%20[1YGNrbXEeazGw].mp4#t=19891) covers agent-payment controls.
- **Short version:** watch the top 10; read the condensed narratives for every other half hour.
