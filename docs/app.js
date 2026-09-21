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
  return { day: dayId, chapter: chapter, tab: tab };
}

function navigate(next) {
  const current = route();
  const dayId = next.day || current.day;
  const spec = daySpecs[dayId];
  const chapter = next.chapter || (dayId !== current.day ? spec.chapters[0] : current.chapter);
  const tab = next.tab || current.tab;
  location.hash = new URLSearchParams({ day: dayId, chapter: chapter.id, tab: tab }).toString();
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
    button.addEventListener("click", function () { navigate({ day: day.id, chapter: day.chapters[0] }); });
    els.dayTabs.append(button);
  });
}

function renderChapterList(day, activeChapter) {
  const query = els.search.value.trim().toLowerCase();
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
  if (route().day === day.id) renderChapterList(day, activeChapter);
}

async function render() {
  const token = ++renderToken;
  const current = route();
  const day = daySpecs[current.day];
  const chapter = current.chapter;
  renderDayTabs(day);
  renderChapterList(day, chapter);
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
    renderChapterList(day, chapter);

    els.kicker.textContent = day.label + " · " + day.duration + " total";
    els.title.textContent = chapter.label;
    els.range.textContent = chapter.range;
    els.watch.querySelector("span").textContent = "Play from " + chapter.range.split("–")[0];
    els.openVideo.href = videoUrl(day, chapter.start);
    if (!els.videoDock.hidden) {
      if (els.videoPlayer.dataset.day === day.id) {
        seekVideo(day, chapter.start, false);
      } else {
        els.videoPlayer.pause();
        els.videoDock.hidden = true;
      }
    }
    els.summaryPanel.innerHTML = renderMarkdown(summary);

    const lines = transcript.filter(function (item) {
      return item.seconds >= chapter.start && item.seconds < chapter.end;
    });
    els.transcriptStatus.textContent = lines.length.toLocaleString() + " transcript segments in this chapter";
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
    document.title = day.label + " " + chapter.range + " · Grokbot Broadcast Digest";
    loadLabels(day, chapter);
  } catch (error) {
    if (token !== renderToken) return;
    els.loading.textContent = error.message + ". Serve this folder over HTTP (see README.md).";
  }
}

els.watch.addEventListener("click", function () {
  const current = route();
  const day = daySpecs[current.day];
  seekVideo(day, current.chapter.start, true);
  els.videoPlayer.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

els.videoPlayer.addEventListener("error", function () {
  els.videoStatus.textContent = "Local video unavailable. Add the matching MP4 to videos/.";
});

els.search.addEventListener("input", function () {
  const current = route();
  renderChapterList(daySpecs[current.day], current.chapter);
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
  navigate({ day: "day1", chapter: daySpecs.day1.chapters[0], tab: "summary" });
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
