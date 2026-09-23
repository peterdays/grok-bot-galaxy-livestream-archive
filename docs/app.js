"use strict";

const daySpecs = {
  day1: {
    label: "Day 1",
    duration: "08:45:12",
    video: "Day 1： Grok Bot Galaxy Livestream [1AxRnZbVpjaxl].mp4",
    transcript: "data/transcripts/day1.md",
    chapters: [
      ["opening", "00:00–00:30", 0, 1800, "day1_chunk_notes.md"],
      ["0030", "00:30–01:30", 1800, 5400, "day1_00h30_01h30.md"],
      ["0130", "01:30–02:00", 5400, 7200, "day1_01h30_02h00.md"],
      ["0200", "02:00–02:30", 7200, 9000, "day1_02h00_02h30.md"],
      ["0230", "02:30–03:00", 9000, 10800, "day1_02h30_03h00.md"],
      ["0300", "03:00–03:30", 10800, 12600, "day1_03h00_03h30.md"],
      ["0330", "03:30–04:00", 12600, 14400, "day1_03h30_04h00.md"],
      ["0400", "04:00–04:30", 14400, 16200, "day1_04h00_04h30.md"],
      ["0430", "04:30–05:00", 16200, 18000, "day1_04h30_05h00.md"],
      ["0500", "05:00–05:30", 18000, 19800, "day1_05h00_05h30.md"],
      ["0530", "05:30–06:00", 19800, 21600, "day1_05h30_06h00.md"],
      ["0600", "06:00–06:30", 21600, 23400, "day1_06h00_06h30.md"],
      ["0630", "06:30–07:00", 23400, 25200, "day1_06h30_07h00.md"],
      ["0700", "07:00–07:30", 25200, 27000, "day1_07h00_07h30.md"],
      ["0730", "07:30–08:00", 27000, 28800, "day1_07h30_08h00.md"],
      ["0800", "08:00–08:30", 28800, 30600, "day1_08h00_08h30.md"],
      ["0830", "08:30–08:45", 30600, 31512, "day1_08h30_end.md"]
    ]
  },
  day2: {
    label: "Day 2",
    duration: "08:23:18",
    video: "Day 2: Grok Bot builds a Game Studio LIVE [1PKqrNyvmYwGb].mp4",
    transcript: "data/transcripts/day2.md",
    chapters: [
      ["0000", "00:00–00:30", 0, 1800, "day2_00h00_00h30.md"],
      ["0030", "00:30–01:00", 1800, 3600, "day2_00h30_01h00.md"],
      ["0100", "01:00–01:30", 3600, 5400, "day2_01h00_01h30.md"],
      ["0130", "01:30–02:00", 5400, 7200, "day2_01h30_02h00.md"],
      ["0200", "02:00–02:30", 7200, 9000, "day2_02h00_02h30.md"],
      ["0230", "02:30–03:00", 9000, 10800, "day2_02h30_03h00.md"],
      ["0300", "03:00–03:30", 10800, 12600, "day2_03h00_03h30.md"],
      ["0330", "03:30–04:00", 12600, 14400, "day2_03h30_04h00.md"],
      ["0400", "04:00–04:30", 14400, 16200, "day2_04h00_04h30.md"],
      ["0430", "04:30–05:00", 16200, 18000, "day2_04h30_05h00.md"],
      ["0500", "05:00–05:30", 18000, 19800, "day2_05h00_05h30.md"],
      ["0530", "05:30–06:00", 19800, 21600, "day2_05h30_06h00.md"],
      ["0600", "06:00–06:30", 21600, 23400, "day2_06h00_06h30.md"],
      ["0630", "06:30–07:00", 23400, 25200, "day2_06h30_07h00.md"],
      ["0700", "07:00–07:30", 25200, 27000, "day2_07h00_07h30.md"],
      ["0730", "07:30–08:00", 27000, 28800, "day2_07h30_08h00.md"],
      ["0800", "08:00–08:23", 28800, 30198, "day2_08h00_end.md"]
    ]
  },
  day3: {
    label: "Day 3",
    duration: "07:58:22",
    video: "Day 3: Building a company in 3 days - launching today! [1YGNrbXEeazGw].mp4",
    transcript: "data/transcripts/day3.md",
    chapters: [
      ["0000", "00:00–00:30", 0, 1800, "day3_00h00_00h30.md"],
      ["0030", "00:30–01:00", 1800, 3600, "day3_00h30_01h00.md"],
      ["0100", "01:00–01:30", 3600, 5400, "day3_01h00_01h30.md"],
      ["0130", "01:30–02:00", 5400, 7200, "day3_01h30_02h00.md"],
      ["0200", "02:00–02:30", 7200, 9000, "day3_02h00_02h30.md"],
      ["0230", "02:30–03:00", 9000, 10800, "day3_02h30_03h00.md"],
      ["0300", "03:00–03:30", 10800, 12600, "day3_03h00_03h30.md"],
      ["0330", "03:30–04:00", 12600, 14400, "day3_03h30_04h00.md"],
      ["0400", "04:00–04:30", 14400, 16200, "day3_04h00_04h30.md"],
      ["0430", "04:30–05:00", 16200, 18000, "day3_04h30_05h00.md"],
      ["0500", "05:00–05:30", 18000, 19800, "day3_05h00_05h30.md"],
      ["0530", "05:30–06:00", 19800, 21600, "day3_05h30_06h00.md"],
      ["0600", "06:00–06:30", 21600, 23400, "day3_06h00_06h30.md"],
      ["0630", "06:30–07:00", 23400, 25200, "day3_06h30_07h00.md"],
      ["0700", "07:00–07:30", 25200, 27000, "day3_07h00_07h30.md"],
      ["0730", "07:30–07:58", 27000, 28702, "day3_07h30_end.md"]
    ]
  }
};

// Editorial wayfinding sits beside the archival half-hour notes. These are
// deliberately short, exact moments; use Timeline for complete coverage.
const formatMoments = [
  ["presentation", "day1", 1825, 3555, "Grokbot 101: persistent teammates, computer use, approvals, and learned skills"],
  ["presentation", "day1", 14047, 1442, "Grok Bot for Engineers: orchestration, verification, and the engineering workflow", "Ling Shi"],
  ["presentation", "day1", 9950, 930, "Launch metrics and distribution: Codie’s operating-model session"],
  ["presentation", "day2", 1800, 3250, "Sales-engineering workshop: teach a browser task, create specialist bots, and discuss safety"],
  ["presentation", "day2", 19331, 469, "Document-workshop demo: research, generate, critique, and improve a PDF"],
  ["build", "day3", 731, 608, "Live launch review: software factory, event-driven QA, and the current game", "Lauren Tan & team"],
  ["presentation", "day3", 14233, 1966, "Customer-success workshop: post-call pack, ROI form, and multi-agent staff meeting"],
  ["build", "day1", 5720, 2000, "Hackathon kickoff: market research, idea selection, and first specialist bots"],
  ["build", "day1", 13820, 211, "Factory review automation and handoff back to the hackathon", "Matt and the founder team"],
  ["build", "day1", 7200, 2100, "Build the pop-up MVP: prototype, repo, deployment, database, and cloud agents"],
  ["build", "day1", 17036, 1644, "Founders at the controls: Slack review channels, verification skill, and live data path"],
  ["discussion", "day2", 5050, 1441, "Founder-team planning and setup before the Cursor coding session", "Lauren Tan & team"],
  ["build", "day2", 6491, 2272, "Lauren’s Cursor session: prototype scope, game-variable controls, and first playable variants", "Lauren Tan"],
  ["build", "day2", 11464, 2496, "tldraw flow, design corrections, animation experiments, and testing", "Lauren Tan"],
  ["build", "day2", 23000, 4000, "Playable game iteration: balance, effects, leaderboard, and browser verification"],
  ["build", "day3", 5701, 2415, "Launch rehearsal: reproduce bugs, redesign combat clarity, ship, and watch the pulse", "Lauren Tan & team"],
  ["build", "day3", 18000, 1749, "Live mobile play test: four parallel fixes, browser proof, and a reviewed merge", "Lauren Tan & team"],
  ["presentation", "day3", 22231, 3469, "Marketing workflow workshop: research, positioning, landing-page work, and ad iteration"],
  ["discussion", "day1", 495, 1185, "Founders frame the challenge: what to build, why, and the initial operating model"],
  ["discussion", "day1", 5892, 1108, "Three-person product debate: choose the pop-up loop, scope it, and divide ownership"],
  ["discussion", "day1", 18000, 1880, "Founder decisions while agents work: first step, manual discovery, scope, and positioning"],
  ["discussion", "day2", 604, 1190, "Pivot discussion: abandon the pop-up and define the game’s core loop and MVP"],
  ["discussion", "day2", 8763, 1005, "Team play test: discover strategy and economy failures, then decide what to change"],
  ["discussion", "day2", 28200, 1450, "End-of-day retrospective: what shipped, what broke, and what the game still needs"],
  ["build", "day3", 8100, 1850, "Live game play test, feedback triage, and production-autopilot setup", "Lauren Tan & team"],
  ["discussion", "day3", 24714, 3188, "Candid launch review: matchmaking, project debt, auto-merge, and distribution lessons"]
].map(function (item, index) {
  return { id: "moment" + index, format: item[0], day: item[1], start: item[2], end: item[2] + item[3], label: item[4], speakers: item[5] || "", thumb: "assets/thumbnails/moment" + index + ".jpg" };
});


const formatMap = [
  ["other", 0, 731, "Pre-show and launch introduction"],
  ["build", 731, 1339, "Live launch review: factory, QA, and game state"],
  ["other", 1339, 1800, "Giveaway, logistics, and transition"],
  ["presentation", 1800, 4262, "Sales/operations workshop and Q&A"],
  ["other", 4262, 4863, "Promotion and intermission"],
  ["build", 4863, 9212, "Launch hardening, play test, release, and feedback system"],
  ["presentation", 9212, 9491, "Nokia engineering case study"],
  ["other", 9491, 9854, "Intermission"],
  ["discussion", 9854, 11476, "Founder growth and product discussion"],
  ["other", 11476, 12188, "Promotion and stage transition"],
  ["presentation", 12188, 17149, "Marketing-operations and customer-success workshops"],
  ["other", 17149, 17600, "Stage handoff and launch transition"],
  ["build", 17600, 19800, "Responsive game test, parallel fixes, and verification"],
  ["presentation", 19800, 24177, "Payments and marketing workflow workshops"],
  ["other", 24177, 24298, "Return-to-studio transition"],
  ["build", 24298, 26292, "Live engineering review, gameplay, and production fixes"],
  ["other", 26292, 27054, "Break and limited-time promotion"],
  ["discussion", 27054, 28702, "Final product review, retrospective, and launch results"]
].map(function (item, index) {
  return { id: "day3map" + index, format: item[0], day: "day3", start: item[1], end: item[2], label: item[3], thumb: "assets/thumbnails/day3-map" + index + ".jpg" };
});
const day1FormatMap = [
  ["discussion", 0, 1825, "Opening, host introductions, and the build challenge"],
  ["presentation", 1825, 5380, "Grokbot 101: product model and live demonstrations"],
  ["other", 5380, 5464, "Transition and workspace reset"],
  ["build", 5464, 7200, "Market-research bot setup and live ideation"],
  ["discussion", 7200, 9000, "Founder product discovery, MVP scope, and bot-team design"],
  ["build", 9000, 10526, "Prototype, repository, deployment, and cloud-agent setup"],
  ["presentation", 10526, 11968, "Codie’s launch-metrics and distribution session"],
  ["other", 11968, 13820, "Break and workshop handoff"],
  ["build", 13820, 14047, "Factory review automation and hackathon handoff"],
  ["presentation", 14047, 16812, "Ling Shi: Grok Bot for Engineers workshop"],
  ["other", 16812, 17036, "Workshop close and return to founders"],
  ["build", 17036, 19800, "Slack automation, verification, and the live product data path"],
  ["discussion", 19800, 21252, "Founder scope, venue, customer, and product decisions"],
  ["presentation", 21252, 23400, "Product-manager workshop and data-bot demonstration"],
  ["other", 23400, 24074, "Promotion, Q&A, and break"],
  ["discussion", 24074, 26580, "Founder product scope, visual prototyping, and merchandise discussion"],
  ["presentation", 26580, 30010, "Founder workflows workshop and Q&A"],
  ["presentation", 30010, 31320, "Guest fleet walkthrough and venue-planning session"],
  ["discussion", 31320, 31460, "Day 1 retrospective"],
  ["other", 31460, 31512, "Contest reminder and sign-off"]
].map(function (item, index) {
  return { id: "day1map" + index, format: item[0], day: "day1", start: item[1], end: item[2], label: item[3], thumb: "assets/thumbnails/day1-map" + index + ".jpg" };
});
const day2FormatMap = [
  ["other", 0, 604, "Pre-stream and opening slate"],
  ["discussion", 604, 1800, "Team pivot and whiteboard: replace the pop-up with a bot-battle game"],
  ["presentation", 1800, 5050, "Sales-engineering workshop: specialist bots, browser work, and safety"],
  ["discussion", 5050, 6491, "Team planning, visual direction, and prototype setup"],
  ["build", 6491, 8763, "Lauren builds the first playable game in Cursor"],
  ["discussion", 8763, 9000, "Play-test review: strategy, rarity, and MVP changes"],
  ["other", 9000, 9543, "Break and guest handoff"],
  ["presentation", 9543, 11026, "Personal-agent workshop: morning newspaper, package tracking, and templates"],
  ["other", 11026, 11464, "Break and return to the build"],
  ["build", 11464, 14400, "Game UX, animation, security fixes, and browser verification"],
  ["presentation", 14400, 16370, "Sales operations workshop: bot teams, routing, and workflow design"],
  ["other", 16370, 17029, "Intermission and guest handoff"],
  ["presentation", 17029, 19800, "Personal operations and job-search automation workshops"],
  ["discussion", 19800, 20138, "Go-to-market discussion and work-log review"],
  ["presentation", 20138, 21600, "Remotion ads workshop, career Q&A, and code-native creative workflow"],
  ["presentation", 21600, 23988, "SDR workshop: orchestration, prospecting, and specialist routing"],
  ["other", 23988, 24061, "Workshop handoff"],
  ["build", 24061, 27000, "Game architecture, agent fleet, Cursor Projects, and prototype review"],
  ["presentation", 27000, 29439, "Customer-support workshop: safe autonomy, evidence, and approvals"],
  ["build", 29439, 29634, "Music and game-asset review"],
  ["discussion", 29634, 29949, "Candid app status, play-test results, and fleet retrospective"],
  ["other", 29949, 30198, "Sign-off and end slate"]
].map(function (item, index) {
  return { id: "day2map" + index, format: item[0], day: "day2", start: item[1], end: item[2], label: item[3], thumb: "assets/thumbnails/day2-map" + index + ".jpg" };
});

const browseSpecs = {
  timeline: { kicker: "Timeline", title: "Chapters", description: "Fixed time windows, with the strongest moment in each shown as its label.", placeholder: "Filter this day…" },
  presentation: { kicker: "Watch by format", title: "Presentations & demos", description: "Product explanation, sponsored-style workshops, and standalone demonstrations across all three days.", placeholder: "Filter presentations…" },
  map: { kicker: "Format map", title: "Continuous format map", description: "A continuous visual guide to the broadcast. Breaks and transitions stay visible, and every section is tagged by type.", placeholder: "Filter this map…" },
  build: { kicker: "Hackathon", title: "Screen work", description: "The builders are driving Grokbot, Cursor, the game, or surrounding tools. These are the hands-on blocks.", placeholder: "Filter screen work…" },
  discussion: { kicker: "Hackathon", title: "Team discussion", description: "The three founders are brainstorming, making product calls, playing the build, or reflecting on what happened.", placeholder: "Filter discussions…" }
};

for (const [dayId, day] of Object.entries(daySpecs)) {
  day.id = dayId;
  day.chapters = day.chapters.map(function (values) {
    return {
      id: values[0], range: values[1], start: values[2], end: values[3],
      file: values[4], label: "Loading summary…"
    };
  });
}

const summaryCache = new Map();
const transcriptCache = new Map();
let renderToken = 0;

const els = {
  dayTabs: document.querySelector("#day-tabs"),
  chapterList: document.querySelector("#chapter-list"),
  chapterCount: document.querySelector("#chapter-count"),
  browseTabs: document.querySelector("#browse-tabs"),
  browseKicker: document.querySelector("#browse-kicker"),
  browseDescription: document.querySelector("#browse-description"),
  search: document.querySelector("#chapter-search"),
  loading: document.querySelector("#loading"),
  view: document.querySelector("#chapter-view"),
  kicker: document.querySelector("#chapter-kicker"),
  title: document.querySelector("#chapter-title"),
  range: document.querySelector("#chapter-range"),
  watch: document.querySelector("#watch-link"),
  videoDock: document.querySelector("#video-dock"),
  videoPlayer: document.querySelector("#video-player"),
  videoStatus: document.querySelector("#video-status"),
  openVideo: document.querySelector("#open-video"),
  summaryTab: document.querySelector("#summary-tab"),
  transcriptTab: document.querySelector("#transcript-tab"),
  summaryPanel: document.querySelector("#summary-panel"),
  transcriptPanel: document.querySelector("#transcript-panel"),
  transcriptStatus: document.querySelector("#transcript-status"),
  transcriptLines: document.querySelector("#transcript-lines"),
  copyLink: document.querySelector("#copy-link")
};

function route() {
  const params = new URLSearchParams(location.hash.slice(1));
  const dayId = daySpecs[params.get("day")] ? params.get("day") : "day1";
  const spec = daySpecs[dayId];
  const requested = params.get("chapter");
  const chapter = spec.chapters.find(function (item) { return item.id === requested; }) || spec.chapters[0];
  const tab = params.get("tab") === "transcript" ? "transcript" : "summary";
  const browse = browseSpecs[params.get("browse")] ? params.get("browse") : "timeline";
  const moment = formatMoments.concat(formatMap, day1FormatMap).find(function (item) { return item.day === dayId && item.start === Number(params.get("start")); });
  return { day: dayId, chapter: chapter, tab: tab, browse: browse, moment: moment };
}

function navigate(next) {
  const current = route();
  const dayId = next.day || current.day;
  const spec = daySpecs[dayId];
  const chapter = next.chapter || (dayId !== current.day ? spec.chapters[0] : current.chapter);
  const tab = next.tab || current.tab;
  const browse = next.browse || current.browse;
  const params = new URLSearchParams({ day: dayId, chapter: chapter.id, tab: tab, browse: browse });
  if (next.moment) params.set("start", String(next.moment.start));
  location.hash = params.toString();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function plainText(markdown) {
  return markdown
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[*_#>]/g, "")
    .replace(/\x60/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function formatName(format) {
  return {
    presentation: "Presentation",
    build: "Screen work",
    discussion: "Team discussion",
    other: "Break / transition"
  }[format] || format;
}

function inline(markdown) {
  let value = escapeHtml(markdown);
  value = value.replace(/\[([^\]]+)\]\(([^)]+)\)/g, function (_match, label, href) {
    const safeHref = /^(https?:|\.\.\/|\.\/|#|[a-zA-Z0-9_-]+\/)/.test(href) ? href : "#";
    return '<a href="' + escapeHtml(safeHref) + '">' + label + "</a>";
  });
  return value
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\x60([^\x60]+)\x60/g, "<code>$1</code>");
}

function renderMarkdown(markdown) {
  const lines = markdown.replace(/\r/g, "").split("\n");
  const out = [];
  let listOpen = false;

  function closeList() {
    if (listOpen) out.push("</ul>");
    listOpen = false;
  }

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    if (/^\|/.test(line) && /^\|?\s*:?-{3}/.test(lines[i + 1] || "")) {
      closeList();
      const rows = [];
      while (i < lines.length && /^\|/.test(lines[i])) {
        rows.push(lines[i].replace(/^\||\|$/g, "").split("|").map(function (cell) { return cell.trim(); }));
        i += 1;
      }
      i -= 1;
      const headers = rows[0] || [];
      const body = rows.slice(2);
      out.push('<div class="table-wrap"><table><thead><tr>');
      headers.forEach(function (cell) { out.push("<th>" + inline(cell) + "</th>"); });
      out.push("</tr></thead><tbody>");
      body.forEach(function (row) {
        out.push("<tr>");
        row.forEach(function (cell) { out.push("<td>" + inline(cell) + "</td>"); });
        out.push("</tr>");
      });
      out.push("</tbody></table></div>");
      continue;
    }
    const heading = line.match(/^(#{1,4})\s+(.+)$/);
    if (heading) {
      closeList();
      const level = Math.min(heading[1].length, 3);
      out.push("<h" + level + ">" + inline(heading[2]) + "</h" + level + ">");
      continue;
    }
    const bullet = line.match(/^\s*-\s+(.+)$/);
    if (bullet) {
      if (!listOpen) out.push("<ul>");
      listOpen = true;
      let body = bullet[1];
      while (/^\s{2,}\S/.test(lines[i + 1] || "") && !/^\s*-\s+/.test(lines[i + 1])) {
        body += " " + lines[i + 1].trim();
        i += 1;
      }
      out.push("<li>" + inline(body) + "</li>");
      continue;
    }
    if (!line.trim()) {
      closeList();
      continue;
    }
    closeList();
    out.push("<p>" + inline(line) + "</p>");
  }
  closeList();
  return out.join("\n");
}

function chapterLabel(markdown) {
  const rows = markdown.split("\n").filter(function (line) { return /^\|\s*\d\d?:\d\d/.test(line); });
  const preferred = rows.find(function (line) { return /Must watch/i.test(line); })
    || rows.find(function (line) { return /Watch(?:\/read| selectively)?/i.test(line); })
    || rows[0];
  if (preferred) {
    const cells = preferred.replace(/^\||\|$/g, "").split("|").map(function (cell) { return cell.trim(); });
    if (cells[1]) return plainText(cells[1]).replace(/\.$/, "");
  }
  const boldBullet = markdown.match(/^-\s+\*\*[^\n]*?—\s*([^*]+?)(?:\.\*\*|\*\*)/m);
  if (boldBullet) return plainText(boldBullet[1]);
  const narrative = markdown.match(/## Condensed narrative\s+([^\n]+)/);
  if (narrative) return plainText(narrative[1]).split(/(?<=[.!?])\s/)[0];
  return "Chapter notes";
}

async function getSummary(chapter) {
  if (!summaryCache.has(chapter.file)) {
    summaryCache.set(chapter.file, fetch("data/analysis/" + chapter.file).then(async function (response) {
      if (!response.ok) throw new Error("Could not load " + chapter.file);
      return response.text();
    }));
  }
  return summaryCache.get(chapter.file);
}

async function getTranscript(day) {
  if (!transcriptCache.has(day.id)) {
    transcriptCache.set(day.id, fetch(day.transcript).then(async function (response) {
      if (!response.ok) throw new Error("Could not load " + day.transcript);
      const markdown = await response.text();
      const entries = [];
      const pattern = /^\[(\d\d:\d\d:\d\d)\]\([^\n)]*#t=(\d+)\)\s*(.*)$/gm;
      for (const match of markdown.matchAll(pattern)) {
        entries.push({ time: match[1], seconds: Number(match[2]), text: match[3].trim() });
      }
      return entries;
    }));
  }
  return transcriptCache.get(day.id);
}

function renderDayTabs(activeDay) {
  els.dayTabs.innerHTML = "";
  Object.values(daySpecs).forEach(function (day) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "day-tab";
    button.role = "tab";
    button.setAttribute("aria-selected", String(day.id === activeDay.id));
    button.textContent = day.label;
    button.addEventListener("click", function () {
      const current = route();
      const hasMap = formatMap.concat(day1FormatMap, day2FormatMap).some(function (moment) { return moment.day === day.id; });
      navigate({ day: day.id, chapter: day.chapters[0], browse: current.browse === "map" && !hasMap ? "timeline" : current.browse });
    });
    els.dayTabs.append(button);
  });
}

function renderBrowseTabs(activeBrowse) {
  els.browseTabs.querySelectorAll(".browse-tab").forEach(function (button) {
    const selected = button.dataset.browse === activeBrowse;
    button.setAttribute("aria-selected", String(selected));
    button.tabIndex = selected ? 0 : -1;
  });
  const spec = browseSpecs[activeBrowse];
  els.browseKicker.textContent = spec.kicker;
  document.querySelector("#chapter-list-title").textContent = spec.title;
  els.browseDescription.textContent = spec.description;
  els.search.placeholder = spec.placeholder;
}

function renderChapterList(day, activeChapter, browse) {
  const query = els.search.value.trim().toLowerCase();
  if (browse !== "timeline") {
    const candidates = browse === "map" ? formatMap.concat(day1FormatMap, day2FormatMap).filter(function (moment) { return moment.day === day.id; }) : formatMoments;
    const visibleMoments = candidates.filter(function (moment) {
      const text = daySpecs[moment.day].label + " " + clock(moment.start) + " " + moment.label;
      return (browse === "map" || moment.format === browse) && (!query || text.toLowerCase().includes(query));
    });
    els.chapterCount.textContent = visibleMoments.length + " moments";
    els.chapterList.innerHTML = "";
    visibleMoments.forEach(function (moment) {
      const destination = daySpecs[moment.day].chapters.find(function (item) { return moment.start >= item.start && moment.start < item.end; });
      const button = document.createElement("button");
      button.type = "button";
      button.className = "chapter-button";
      button.setAttribute("aria-current", String(moment.day === day.id && destination && destination.id === activeChapter.id));
      button.innerHTML = '<img class="moment-thumb" src="' + escapeHtml(moment.thumb) + '" alt="" loading="lazy"><span class="moment-copy"><time>' + escapeHtml(daySpecs[moment.day].label + " · " + clock(moment.start).slice(0, 5) + "–" + clock(moment.end).slice(0, 5) + (moment.speakers ? " · " + moment.speakers : "")) + "</time><span>" + escapeHtml(moment.label) + '</span><span class="moment-tags"><span class="format-tag format-' + escapeHtml(moment.format) + '">' + escapeHtml(formatName(moment.format)) + "</span></span></span>";
      button.addEventListener("click", function () { navigate({ day: moment.day, chapter: destination, browse: browse, moment: moment }); });
      const li = document.createElement("li");
      li.append(button);
      els.chapterList.append(li);
    });
    if (!visibleMoments.length) els.chapterList.innerHTML = '<li class="empty">No matching moments.</li>';
    return;
  }
  const visible = day.chapters.filter(function (chapter) {
    return !query || (chapter.range + " " + chapter.label).toLowerCase().includes(query);
  });
  els.chapterCount.textContent = visible.length + " / " + day.chapters.length;
  els.chapterList.innerHTML = "";
  visible.forEach(function (chapter) {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chapter-button";
    button.setAttribute("aria-current", String(chapter.id === activeChapter.id));
    button.innerHTML = "<time>" + escapeHtml(chapter.range) + "</time><span>" + escapeHtml(chapter.label) + "</span>";
    button.addEventListener("click", function () { navigate({ chapter: chapter }); });
    li.append(button);
    els.chapterList.append(li);
  });
  if (!visible.length) els.chapterList.innerHTML = '<li class="empty">No matching chapters.</li>';
}

function setActiveTab(tab) {
  const summary = tab === "summary";
  els.summaryTab.setAttribute("aria-selected", String(summary));
  els.summaryTab.tabIndex = summary ? 0 : -1;
  els.transcriptTab.setAttribute("aria-selected", String(!summary));
  els.transcriptTab.tabIndex = summary ? -1 : 0;
  els.summaryPanel.hidden = !summary;
  els.transcriptPanel.hidden = summary;
}

function videoUrl(day, seconds) {
  return "../videos/" + encodeURIComponent(day.video) + "#t=" + seconds;
}

async function loadLabels(day, activeChapter) {
  await Promise.all(day.chapters.map(async function (chapter) {
    try {
      chapter.label = chapterLabel(await getSummary(chapter));
    } catch {
      chapter.label = "Chapter notes unavailable";
    }
  }));
  if (route().day === day.id) renderChapterList(day, activeChapter, route().browse);
}

async function render() {
  const token = ++renderToken;
  const current = route();
  const day = daySpecs[current.day];
  const chapter = current.chapter;
  const moment = current.moment;
  const start = moment ? moment.start : chapter.start;
  const end = moment ? moment.end : chapter.end;
  const range = moment ? clock(start) + "–" + clock(end) : chapter.range;
  renderDayTabs(day);
  renderBrowseTabs(current.browse);
  renderChapterList(day, chapter, current.browse);
  setActiveTab(current.tab);
  els.loading.hidden = false;
  els.loading.textContent = "Loading chapter…";
  els.view.hidden = true;

  try {
    const results = await Promise.all([getSummary(chapter), getTranscript(day)]);
    if (token !== renderToken) return;
    const summary = results[0];
    const transcript = results[1];
    chapter.label = chapterLabel(summary);
    renderChapterList(day, chapter, current.browse);

    els.kicker.textContent = day.label + " · " + day.duration + " total";
    els.title.textContent = moment ? moment.label : chapter.label;
    els.range.textContent = range;
    els.watch.querySelector("span").textContent = "Play from " + range.split("–")[0];
    els.openVideo.href = videoUrl(day, start);
    if (!els.videoDock.hidden) {
      if (els.videoPlayer.dataset.day === day.id) {
        seekVideo(day, start, false);
      } else {
        els.videoPlayer.pause();
        els.videoDock.hidden = true;
      }
    }
    els.summaryPanel.innerHTML = renderMarkdown(summary);

    const lines = transcript.filter(function (item) {
      return item.seconds >= start && item.seconds < end;
    });
    els.transcriptStatus.textContent = lines.length.toLocaleString() + " transcript segments in this " + (moment ? "moment" : "chapter");
    els.transcriptLines.innerHTML = lines.length
      ? lines.map(function (item) {
        return '<div class="transcript-line"><time><button type="button" class="timestamp-button"'
          + ' data-seconds="' + item.seconds + '" aria-label="Play video at ' + item.time + '">'
          + item.time + '</button></time><p>'
          + escapeHtml(item.text) + "</p></div>";
      }).join("")
      : '<p class="empty">No speech was transcribed in this time range.</p>';

    els.transcriptLines.querySelectorAll(".timestamp-button").forEach(function (button) {
      button.addEventListener("click", function () {
        seekVideo(day, Number(button.dataset.seconds), true);
        els.videoPlayer.scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
    });

    els.loading.hidden = true;
    els.view.hidden = false;
    document.title = day.label + " " + chapter.range + " · Grok Bot Galaxy Archive";
    loadLabels(day, chapter);
  } catch (error) {
    if (token !== renderToken) return;
    els.loading.textContent = error.message + ". Serve this folder over HTTP (see README.md).";
  }
}

els.watch.addEventListener("click", function () {
  const current = route();
  const day = daySpecs[current.day];
  seekVideo(day, current.moment ? current.moment.start : current.chapter.start, true);
  els.videoPlayer.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

els.videoPlayer.addEventListener("error", function () {
  els.videoStatus.textContent = "Local video unavailable. Add the matching MP4 to videos/.";
});

els.search.addEventListener("input", function () {
  const current = route();
  renderChapterList(daySpecs[current.day], current.chapter, current.browse);
});
els.browseTabs.addEventListener("click", function (event) {
  const button = event.target.closest("[data-browse]");
  if (!button) return;
  const browse = button.dataset.browse;
  if (browse !== "map") return navigate({ browse: browse });
  const current = route();
  const mapDays = new Set(formatMap.concat(day1FormatMap, day2FormatMap).map(function (moment) { return moment.day; }));
  const day = mapDays.has(current.day) ? current.day : "day3";
  navigate({ browse: browse, day: day, chapter: daySpecs[day].chapters[0] });
});
els.summaryTab.addEventListener("click", function () { navigate({ tab: "summary" }); });
els.transcriptTab.addEventListener("click", function () { navigate({ tab: "transcript" }); });
els.copyLink.addEventListener("click", async function () {
  try {
    await navigator.clipboard.writeText(location.href);
    els.copyLink.textContent = "Copied";
    setTimeout(function () { els.copyLink.textContent = "Copy chapter link"; }, 1200);
  } catch {
    els.copyLink.textContent = "Copy unavailable";
  }
});

window.addEventListener("hashchange", render);
if (!location.hash) {
  navigate({ day: "day1", chapter: daySpecs.day1.chapters[0], tab: "summary", browse: "map" });
} else {
  render();
}

function baseVideoUrl(day) {
  return "../videos/" + encodeURIComponent(day.video);
}

function clock(seconds) {
  const whole = Math.max(0, Math.floor(seconds));
  const hours = String(Math.floor(whole / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((whole % 3600) / 60)).padStart(2, "0");
  const secs = String(whole % 60).padStart(2, "0");
  return hours + ":" + minutes + ":" + secs;
}

function seekVideo(day, seconds, autoplay) {
  const player = els.videoPlayer;
  const applySeek = function () {
    player.currentTime = seconds;
    els.videoStatus.textContent = "Ready at " + clock(seconds);
    if (autoplay) {
      player.play().catch(function () {
        els.videoStatus.textContent = "Ready at " + clock(seconds) + " — press play to continue";
      });
    }
  };

  els.videoDock.hidden = false;
  els.openVideo.href = videoUrl(day, seconds);
  els.videoStatus.textContent = "Loading " + day.label + " at " + clock(seconds) + "…";

  if (player.dataset.day !== day.id) {
    player.pause();
    player.dataset.day = day.id;
    player.src = baseVideoUrl(day);
    player.load();
    player.addEventListener("loadedmetadata", applySeek, { once: true });
  } else if (player.readyState >= 1) {
    applySeek();
  } else {
    player.addEventListener("loadedmetadata", applySeek, { once: true });
  }
}
