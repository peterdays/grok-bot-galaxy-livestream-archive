# Day 3 — 07:30:00–07:58:22

## Recommended chapters

| Time | Segment | Novelty | Usefulness | Recommendation |
|---|---|---:|---:|---|
| 07:30:00–07:30:54 | End of limited-time credit promotion and return to team status | 1/5 | 1/5 | Skip |
| 07:30:55–07:32:04 | **Feedback factory postmortem:** deduplicate reports, attach repro/tests, then auto-merge in “YOLO” mode while overlapping human PRs become redundant | 5/5 | 5/5 | Must watch critically |
| 07:32:05–07:33:31 | Ad auction remains broken; team places a real $1 bid without understanding placement or auction behavior | 4/5 | 5/5 | Watch critically |
| 07:33:32–07:36:51 | Compare card designs, watch a weak recap bot, expose the cheater bot's falling score, add machine-readable rules, and auto-merge six PRs | 4/5 | 4/5 | Watch selectively |
| 07:36:52–07:41:03 | Product-state recap: theoretical ad slots, unresolved ELO concerns, repository access, broken ad-bid notifications, and the breadth of running a studio | 3/5 | 4/5 | Summarize |
| 07:41:04–07:44:10 | **Honest launch retrospective:** MVP alignment accelerated shipping, but stream distribution—not product demand—drove adoption; standard business work still mattered | 5/5 | 5/5 | Must watch |
| 07:44:11–07:46:36 | Learn the problem manually, encode the proven solution into a durable bot, build workflow flywheels, and remove feature bloat | 5/5 | 5/5 | Must watch |
| 07:46:37–07:50:11 | Final advice: work in a domain you understand, use external expertise for blind spots, and retain human vision, taste, judgment, and relentlessness | 4/5 | 5/5 | Watch |
| 07:50:12–07:51:39 | **Final-metrics reality check:** while discussing restraint and growth, the software factory takes production down with a bad SQL query | 5/5 | 5/5 | Must watch |
| 07:51:40–07:55:38 | Three-day recap: scope reduction, core loop, bot factory, integrations, and restoration of main | 3/5 | 4/5 | Watch selectively |
| 07:55:39–07:57:35 | **Last monetization test fails safely only by accident:** logo/upload/bid flow runs, moderation is broken, and revenue remains explicitly “theoretical” | 5/5 | 5/5 | Must watch critically |
| 07:57:36–07:58:22 | Farewell | 1/5 | 1/5 | Skip |

## Most useful takeaways

- Deduplication and reproduction are good foundations for automated issue handling, but they do not justify blanket auto-merge. The system needs risk classification, ownership, protected branches, independent validation, staged rollout, and rollback.
- Prevent duplicate human/agent work by atomically claiming an issue and attaching every PR, agent run, test result, and deployment to one canonical ticket.
- Never accept or charge an ad bid when auction rules, placement, moderation, notification, refund behavior, and the resulting user-visible state are not understood and verified.
- Machine-readable rules can help agents interact with a product, but they also lower the cost of automation and abuse. Pair agent-friendly interfaces with authentication, quotas, bot identification, and a separate policy for automated players.
- The stream's adoption data is not product-market-fit evidence. The team explicitly acknowledges that the broadcast supplied distribution and doubts many users would have arrived for the game alone.
- Automate a workflow after enough manual experience to understand its edge cases. Encoding a poorly understood process creates a fast, persistent source of error.
- Agent abundance increases the need for product restraint. Removing battlefields, stat complexity, and cosmetics was more important to shipping than generating more features.
- Domain expertise still governs task definition and review. Use specialists and external sources to fill gaps, but preserve provenance, test their advice, and do not confuse information retrieval with practiced judgment.
- Track success in product and reliability terms, not PR count: retained users, successful sessions, defect escape rate, rollback frequency, latency, spend, and incident recovery.
- A bad SQL query taking down production is the clearest counterexample to “verified auto-merge.” Database changes require safe query review, limits/timeouts, migration policy, backups, canaries, monitoring, and a tested recovery path.
- “Main is back up” confirms recovery, not harmlessness. Record incident duration, affected users/data, root cause, rollback/fix, and the new control that prevents recurrence.
- The closing sponsorship demo is admirably labeled theoretical, but broken moderation makes external launch unacceptable. User-submitted text, links, and logos need validation, malware/content checks, approval, disclosure, and a way to remove or refund placements.

## Condensed narrative

The finale works best as a reliability retrospective. The feedback factory deduplicates reports and attaches repro evidence, but it is also set to auto-merge broadly, creating overlapping work and pushing a bad SQL query that takes production down during the final metrics review. The ad auction is similarly premature: the team places a bid without understanding the placement, later walks through a partly working sponsorship flow, and admits moderation is broken and revenue is only theoretical. Between those failures, the team offers unusually honest conclusions. Broadcast distribution—not demonstrated product demand—drove the launch; standard sales, partnerships, operations, and maintenance work still mattered; and the reusable asset is the workflow only if problems are first understood manually. They also emphasize restraint, domain knowledge, and human taste. Main is restored before the end, but the incident is the strongest argument in the entire broadcast for layered review, staged deployment, and explicit rollback around autonomous software factories.
