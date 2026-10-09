import { useEffect, useMemo, useState } from "react";
import { EXPO_ROWS } from "../../generated/expoData";
import { ArrowUpRight, ChevronLeft, ChevronRight, Linkedin, Play, Video, X, Youtube } from "lucide-react";

// The expo photo wall. Everything it shows comes from
// public/expo/photos.csv — a plain CSV anyone can edit (add a photo, change the
// event name, move shots between expos) without touching any code.
//
// Each expo is its own block: its own accent colour, its own photo count, and
// its own "see more" tile that expands just that expo. Expand all / collapse all
// sits underneath.

const PUBLIC = process.env.PUBLIC_URL || "";
const FRONT_LIMIT = 7; // photographs per expo, then its own "see more" tile as the 8th cell

// one accent per expo, in the order they appear in the CSV
const ACCENTS = [
  { key: "#ef7b23", soft: "rgba(239,123,35,.12)", wash: "linear-gradient(180deg, rgba(239,123,35,.07) 0%, rgba(239,123,35,0) 72%)" },
  { key: "#16283c", soft: "rgba(22,40,60,.10)", wash: "linear-gradient(180deg, rgba(22,40,60,.06) 0%, rgba(22,40,60,0) 72%)" },
  { key: "#0f766e", soft: "rgba(15,118,110,.12)", wash: "linear-gradient(180deg, rgba(15,118,110,.07) 0%, rgba(15,118,110,0) 72%)" },
];

// the band can sit on the light page or a dark panel; the viewer is always dark
const DARK = {
  head: "#ffffff", sub: "rgba(255,255,255,.45)", badge: "rgba(255,255,255,.35)",
  divider: "rgba(255,255,255,.12)", count: "rgba(255,255,255,.45)",
  tileBg: "rgba(255,255,255,.04)", tileBorder: "rgba(255,255,255,.12)",
};
const LIGHT = {
  head: "#16283c", sub: "#94a3b8", badge: "#9aa3b2",
  divider: "rgba(15,23,42,.10)", count: "#6b7280",
  tileBg: "#ffffff", tileBorder: "rgba(15,23,42,.08)",
};

// A LinkedIn post URL can be shown as a live embed — no API key involved.
// The post id is in the URL, e.g. .../ugcPost-7421905759585808384-7yfx/
function linkedinEmbed(link) {
  if (!link) return null;
  const withType = link.match(/urn:li:(ugcPost|activity|share):(\d+)/i);
  if (withType) return `https://www.linkedin.com/embed/feed/update/urn:li:${withType[1]}:${withType[2]}?collapsed=1`;
  const bare = link.match(/(?:ugcPost|activity|share)-?(\d{10,})/i);
  if (bare) return `https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:${bare[1]}?collapsed=1`;
  return null;
}

// A YouTube URL can be embedded directly: youtu.be/ID, watch?v=ID, or an
// embed URL that is already correct.
function youtubeEmbed(url) {
  if (!url) return null;
  const id = url.match(/(?:youtu\.be\/|v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{6,})/);
  return id ? `https://www.youtube.com/embed/${id[1]}` : null;
}

const VIDEO_RE = /\.(mp4|webm|mov|m4v|ogv)$/i;
const isVideo = (file) => VIDEO_RE.test(file || "");

// a photograph lives in its expo folder; a clip is a path under public/
function srcFor(item) {
  if (!item || !item.file) return "";
  if (item.folder) return `${PUBLIC}/expo/${item.folder}/${item.file}`;
  return /^https?:/i.test(item.file) ? item.file : `${PUBLIC}/${item.file}`;
}

function groupRows(rows) {
  const groups = [];
  rows.forEach((r) => {
    const key = `${r.event}||${r.year}`;
    const last = groups[groups.length - 1];
    if (last && last.key === key) last.items.push(r);
    else groups.push({ key, event: r.event, year: r.year, items: [r] });
  });
  return groups;
}

export default function ExpoGallery({ testid = "expo", theme = "light" }) {
  const C = theme === "light" ? LIGHT : DARK;
  // Baked in from data/expo/photos.csv at build time — an editable CSV that is
  // never reachable at a URL.
  const [groups] = useState(() => groupRows(EXPO_ROWS));
  const [total] = useState(EXPO_ROWS.length);
  const [openKeys, setOpenKeys] = useState([]); // which expos are fully expanded
  const [active, setActive] = useState(null);   // index into the flat list

  const flat = useMemo(() => groups.flatMap((g) => g.items.map((p) => ({ ...p, event: g.event, year: g.year }))), [groups]);
  const indexOf = useMemo(() => {
    const m = new Map();
    flat.forEach((p, i) => m.set(`${p.folder}/${p.file}`, i));
    return m;
  }, [flat]);

  // One shared budget of FRONT_LIMIT photographs across all expos, in CSV order.
  // Each later expo keeps at least one slot, so no expo disappears while
  // collapsed and the total shown is exactly the limit.
  // Every expo gets the same treatment: up to FRONT_LIMIT photographs, then its
  // own "see more" tile. An expo with fewer photographs simply shows them all.
  const blocks = useMemo(() => groups.map((g, gi) => {
    const open = openKeys.includes(g.key);
    const shown = open ? g.items : g.items.slice(0, FRONT_LIMIT);
    const clips = g.items.filter((it) => isVideo(it.file)).length;
    const link = (g.items.find((it) => it.link) || {}).link || null;
    const embed = linkedinEmbed(link);
    const video = (g.items.find((it) => it.video) || {}).video || null;
    const videoEmbed = youtubeEmbed(video);
    const clipItem = g.items.find((it) => it.clip) || {};
    const clip = clipItem.clip || null;
    const clipLabel = clipItem.clipLabel || "Expo clip";
    const clipSrc = clip ? (/^https?:/i.test(clip) ? clip : `${PUBLIC}/${clip}`) : null;
    return { ...g, open, shown, hidden: g.items.length - shown.length, photos: g.items.length - clips, clips, accent: ACCENTS[gi % ACCENTS.length], link, embed, video, videoEmbed, clip, clipLabel, clipSrc };
  }), [groups, openKeys]);

  const anyHidden = blocks.some((b) => b.hidden > 0);
  const allOpen = blocks.length > 0 && blocks.every((b) => b.open || b.hidden === 0);

  // viewer: keyboard control, no background scrolling
  useEffect(() => {
    if (active === null) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
      else if (e.key === "ArrowRight") setActive((a) => (a + 1) % flat.length);
      else if (e.key === "ArrowLeft") setActive((a) => (a - 1 + flat.length) % flat.length);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  }, [active, flat.length]);

  if (!groups.length) return null;
  const shot = active === null ? null : flat[active];

  return (
    <div data-testid={testid}>
      {blocks.map((g) => (
        <div key={g.key} className="mt-10 first:mt-0 rounded-2xl px-4 pb-6 pt-5 sm:px-6" data-testid={`${testid}-group`}
          style={{ background: g.accent.wash, border: `1px solid ${C.divider}`, borderLeft: `3px solid ${g.accent.key}` }}>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 pb-4">
            <h3 className="flex items-baseline gap-2.5 text-[19px] font-semibold tracking-[-0.01em]" style={{ color: C.head }}>
              {g.event}
              {g.year ? (
                <span className="rounded-full px-2.5 py-1 text-[11.5px] font-bold tracking-[0.08em]"
                  style={{ background: g.accent.soft, color: g.accent.key }}>{g.year}</span>
              ) : null}
            </h3>
            <span className="flex items-center gap-3">
              <span className="font-mono text-[11.5px] uppercase tracking-[0.14em]" style={{ color: C.badge }}>
                {g.hidden > 0 ? `${g.shown.length} of ${g.items.length}` : `${g.items.length}`} {g.items.length === 1 ? "item" : "items"}
                {g.clips > 0 ? ` · ${g.photos} photos · ${g.clips} ${g.clips === 1 ? "clip" : "clips"}` : ""}
              </span>
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {g.shown.map((p) => (
              <button key={p.file} type="button" onClick={() => setActive(indexOf.get(`${p.folder}/${p.file}`))}
                title={p.caption || "Open photograph"} data-testid={`${testid}-photo-${p.file.replace(/\.[a-z0-9]+$/i, "").replace(/[^a-z0-9]+/gi, "-")}`}
                className="group relative block aspect-[4/3] cursor-pointer overflow-hidden rounded-xl"
                style={{ border: `1px solid ${C.tileBorder}`, background: C.tileBg }}>
                {isVideo(p.file) ? (
                  <>
                    <video src={srcFor(p)} muted playsInline preload="metadata" aria-label={p.caption || `Clip from ${g.event}`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]" />
                    <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm">
                        <Play className="ml-0.5 h-4 w-4" fill="currentColor" />
                      </span>
                    </span>
                  </>
                ) : (
                  <img src={srcFor(p)} alt={p.caption || `${g.event} ${g.year}`}
                    loading="lazy" decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]" />
                )}
                <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,.6), transparent 55%)" }} />
                {p.caption ? (
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 px-3 pb-2.5 text-left text-[12px] font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {p.caption}
                  </span>
                ) : null}
              </button>
            ))}

            {g.hidden > 0 ? (
              /* this expo's own "see more" tile — the 8th cell of its row, blurred */
              <button type="button" onClick={() => setOpenKeys((k) => [...k, g.key])}
                aria-label={`See ${g.hidden} more photographs from ${g.event}`} data-testid={`${testid}-see-more`}
                className="group relative block aspect-[4/3] cursor-pointer overflow-hidden rounded-xl"
                style={{ border: `1px solid ${C.tileBorder}`, boxShadow: "0 18px 38px -20px rgba(6,12,20,.5)" }}>
                <img src={`${PUBLIC}/expo/${g.shown[g.shown.length - 1].folder}/${g.shown[g.shown.length - 1].file}`} alt=""
                  loading="lazy" decoding="async" className="h-full w-full object-cover blur-[1.5px]"
                  style={{ transform: "scale(1.03)" }} />
                <span className="absolute inset-0 flex flex-col items-center justify-center gap-2"
                  style={{ background: "linear-gradient(to top, rgba(6,12,20,.72), rgba(6,12,20,.4))" }}>
                  <span className="text-[15px] font-semibold tracking-[-0.01em] text-white" style={{ textShadow: "0 2px 12px rgba(0,0,0,.6)" }}>
                    See more
                  </span>
                  <span className="rounded-full px-3.5 py-1.5 text-[12.5px] font-semibold text-white transition-transform duration-300 group-hover:scale-105"
                    style={{ background: g.accent.key, boxShadow: "0 12px 26px -10px rgba(6,12,20,.75)" }}>
                    +{g.hidden} photos
                  </span>
                </span>
              </button>
            ) : null}
          </div>

          {g.open && g.items.length > FRONT_LIMIT ? (
            <button type="button" onClick={() => setOpenKeys((k) => k.filter((x) => x !== g.key))}
              data-testid={`${testid}-collapse`}
              className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold transition hover:underline" style={{ color: g.accent.key }}>
              <ChevronLeft className="h-3.5 w-3.5" /> Show fewer from {g.event}
            </button>
          ) : null}
        </div>
      ))}

      {/* Two parts, side by side: the LinkedIn post, and the videos — the
          YouTube embed with the expo clip underneath it. */}
      {blocks.some((b) => b.embed || b.videoEmbed || b.clipSrc) ? (
        <div className="mt-8 grid gap-4 lg:grid-cols-2" data-testid={`${testid}-posts`}>
          {blocks.filter((b) => b.embed).map((b) => (
            <div key={`${b.key}-li`} className="flex flex-col rounded-2xl bg-white px-2 py-4 sm:px-5 sm:py-5"
              style={{ border: `1px solid ${C.tileBorder}` }} data-testid={`${testid}-embed`}>
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3">
                <span className="flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.16em]" style={{ color: b.accent.key }}>
                  <Linkedin className="h-3.5 w-3.5" /> {b.event}{b.year ? ` · ${b.year}` : ""}
                </span>
                <a href={b.link} target="_blank" rel="noopener noreferrer" data-testid={`${testid}-embed-link`}
                  className="inline-flex items-center gap-1 text-[12px] font-semibold transition hover:underline" style={{ color: C.count }}>
                  Open the post <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
              <div className="overflow-x-auto overscroll-x-contain">
                <iframe
                  src={b.embed}
                  title="Embedded post"
                  loading="lazy"
                  height="895"
                  width="504"
                  frameBorder="0"
                  allowFullScreen
                  className="mx-auto block rounded-xl sm:w-full sm:max-w-[552px]"
                  style={{ border: 0, background: "#fff", minWidth: 504 }}
                  data-testid={`${testid}-embed-frame`}
                />
              </div>
            </div>
          ))}

          {blocks.filter((b) => b.videoEmbed || b.clipSrc).map((b) => (
            <div key={`${b.key}-videos`} className="flex flex-col gap-5 rounded-2xl bg-white px-2 py-4 sm:px-5 sm:py-5"
              style={{ border: `1px solid ${C.tileBorder}` }} data-testid={`${testid}-videos`}>
              {b.videoEmbed ? (
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3">
                    <span className="flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.16em]" style={{ color: b.accent.key }}>
                      <Youtube className="h-3.5 w-3.5" /> Watch
                    </span>
                    <a href={b.video} target="_blank" rel="noopener noreferrer" data-testid={`${testid}-video-link`}
                      className="inline-flex items-center gap-1 text-[12px] font-semibold transition hover:underline" style={{ color: C.count }}>
                      Open on YouTube <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </div>
                  <iframe
                    src={b.videoEmbed}
                    title={`Video — ${b.event}${b.year ? ` ${b.year}` : ""}`}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="block aspect-video w-full rounded-xl"
                    style={{ border: 0, background: "#000" }}
                    data-testid={`${testid}-video-frame`}
                  />
                </div>
              ) : null}

              {b.clipSrc ? (
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3">
                    <span className="flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.16em]" style={{ color: b.accent.key }}>
                      <Video className="h-3.5 w-3.5" /> {b.clipLabel}
                    </span>
                    <a href={b.clipSrc} target="_blank" rel="noopener noreferrer" data-testid={`${testid}-clip-link`}
                      className="inline-flex items-center gap-1 text-[12px] font-semibold transition hover:underline" style={{ color: C.count }}>
                      Open the file <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </div>
                  <video controls playsInline preload="metadata" data-testid={`${testid}-clip-video`}
                    className="block aspect-video w-full rounded-xl" style={{ background: "#000" }}>
                    <source src={b.clipSrc} type={`video/${(b.clip.split(".").pop() || "mp4").replace("mov", "quicktime")}`} />
                    Your browser cannot play this video.
                  </video>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      ) : null}
      <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
        {anyHidden || allOpen ? (
          <button type="button" data-testid={`${testid}-toggle`}
            onClick={() => setOpenKeys(allOpen ? [] : blocks.filter((b) => b.hidden > 0 || b.open).map((b) => b.key))}
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[13.5px] font-semibold text-white transition-all duration-300 hover:brightness-110"
            style={{ background: "var(--brand)" }}>
            {allOpen ? (
              <><ChevronLeft className="h-4 w-4" /> Show fewer photographs</>
            ) : (
              <>Show all {total} photographs <ChevronRight className="h-4 w-4" /></>
            )}
          </button>
        ) : null}
        <span className="text-[12.5px]" style={{ color: C.count }} data-testid={`${testid}-count`}>
          {total} {total === 1 ? "photograph" : "photographs"}
          {anyHidden ? " · open an expo with its tile, or every one with the button" : " · click any photo to view it here"}
        </span>
      </div>

      {/* viewer: a fixed stage, so the arrows never move between photographs */}
      {shot ? (
        <div className="fixed inset-0 z-[90] flex flex-col" style={{ background: "rgba(6,12,20,.95)" }}
          role="dialog" aria-modal="true" aria-label={shot.caption || `${shot.event} ${shot.year}`}
          data-testid={`${testid}-viewer`} onClick={() => setActive(null)}>
          <div className="flex h-[56px] shrink-0 items-center justify-between gap-4 px-5 sm:px-8">
            <span className="truncate text-[13px] font-medium text-white/70">
              {shot.event}{shot.year ? ` · ${shot.year}` : ""}
            </span>
            <div className="flex items-center gap-4">
              <span className="font-mono text-[12px] text-white/50" data-testid={`${testid}-viewer-count`}>{active + 1} / {flat.length}</span>
              <button type="button" onClick={() => setActive(null)} aria-label="Close photograph" data-testid={`${testid}-viewer-close`}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20">
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* the stage keeps one height whatever the photograph's shape */}
          <div className="relative min-h-0 flex-1" onClick={(e) => e.stopPropagation()} data-testid={`${testid}-stage`}>
            {isVideo(shot.file) ? (
              <video src={srcFor(shot)} controls playsInline data-testid={`${testid}-viewer-video`}
                className="absolute inset-0 m-auto max-h-[calc(100%-24px)] max-w-[calc(100%-140px)] rounded-xl"
                style={{ boxShadow: "0 40px 90px -40px rgba(0,0,0,.9)" }} />
            ) : (
              <img src={srcFor(shot)} alt={shot.caption || `${shot.event} ${shot.year}`} data-testid={`${testid}-viewer-image`}
                className="absolute inset-0 m-auto max-h-[calc(100%-24px)] max-w-[calc(100%-140px)] rounded-xl object-contain"
                style={{ boxShadow: "0 40px 90px -40px rgba(0,0,0,.9)" }} />
            )}

            {/* arrows pinned to the stage, never to the photograph */}
            <button type="button" aria-label="Previous photograph" data-testid={`${testid}-viewer-prev`}
              onClick={() => setActive((a) => (a - 1 + flat.length) % flat.length)}
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25 sm:left-6">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button type="button" aria-label="Next photograph" data-testid={`${testid}-viewer-next`}
              onClick={() => setActive((a) => (a + 1) % flat.length)}
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25 sm:right-6">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="flex h-[58px] shrink-0 items-center justify-center px-5 sm:px-8">
            {shot.caption ? <p className="truncate text-[13.5px] text-white/70">{shot.caption}</p> : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
