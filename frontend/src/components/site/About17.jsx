import React, { useEffect } from "react";
import { ArrowRight, ArrowUpRight, Check, Quote, Star } from "lucide-react";
import { ABOUT_17, FAQS, HOME36, HOME39_MORE, TEAM } from "../../mock";
import AboutLayoutNav from "./AboutLayoutNav";
import { Icon } from "./Trusted";
import { useGoTo } from "./crmStore";

// About layout 17 — "Proof first". A light, chart-led treatment where the page is
// assembled out of customer outcomes rather than self-description: before/after
// shifts with bars, the aggregate numbers, the reviews they came from, the trades
// it runs in, and only then who is behind it.
const INK = "#0f172a";
const MUTED = "#5b6472";
const PANEL = "#f6f8fa";
const HAIR = "#e4e8ee";
const BRAND = "#ef7b23";
const BRAND_DARK = "#cf5f12";
const GOOD = "#16a34a";
const MONO = { fontFamily: '"JetBrains Mono", ui-monospace, monospace' };

const pct = (from, to) => {
  const f = parseFloat(String(from).replace(/[^0-9.]/g, "")) || 1;
  const t = parseFloat(String(to).replace(/[^0-9.]/g, "")) || 0;
  return Math.max(6, Math.min(100, Math.round((t / f) * 100)));
};

export default function About17() {
  const goTo = useGoTo();
  const A = ABOUT_17;

  useEffect(() => { document.title = "About FFH|ERP — proof before promises | FFH|ERP"; }, []);

  const external = (path) => { window.location.assign(`${process.env.PUBLIC_URL}${path}`); };
  const jump = (e, t) => { e.preventDefault(); goTo(t); };

  return (
    <div className="ffh-tw ffh-a17 min-h-screen bg-white" style={{ color: INK, fontFamily: 'Inter, system-ui, sans-serif' }} data-testid="about17-page">
      {/* ---------- nav ---------- */}
      <header className="sticky top-0 z-50 border-b bg-white/92 backdrop-blur" style={{ borderColor: HAIR }} data-testid="a17-nav">
        <div className="mx-auto flex max-w-[1240px] items-center gap-6 px-5 py-4 sm:px-8">
          <a href="#top" onClick={(e) => jump(e, "#top")} className="flex items-center gap-2.5">
            <img src={`${process.env.PUBLIC_URL}/ffh-logo.png`} alt="FFH ERP" width="30" height="30" className="h-[30px] w-[30px] rounded-full" />
            <span className="text-[17px] font-bold tracking-[-0.02em]">FFH|ERP</span>
          </a>
          <nav className="ml-auto hidden items-center gap-1 lg:flex">
            {A.nav.map((l) => (
              <button key={l.label} onClick={(e) => (l.path.startsWith("#") ? jump(e, l.path) : external(l.path))}
                className="rounded-full px-4 py-2 text-[14px] font-medium transition-colors duration-200 hover:bg-black/[.04]" style={{ color: MUTED }}>{l.label}</button>
            ))}
          </nav>
          <button onClick={() => external("/home39#contact")} data-testid="a17-cta"
            className="ml-auto rounded-full px-5 py-3 text-[13.5px] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 lg:ml-0"
            style={{ background: `linear-gradient(135deg,#f7a52a,${BRAND_DARK})` }}>
            Start free trial
          </button>
        </div>
      </header>

      {/* ---------- hero ---------- */}
      <section id="top" className="px-5 pb-14 pt-16 sm:px-8 sm:pt-20">
        <div className="mx-auto max-w-[1240px]">
          <span className="inline-flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-[0.18em]" style={{ ...MONO, color: BRAND_DARK }}>
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: BRAND }} />{A.hero.eyebrow}
          </span>
          <h1 className="mt-6 max-w-4xl text-[9vw] font-bold leading-[1.02] tracking-[-0.035em] sm:text-[5.4vw] lg:text-[58px]" data-testid="a17-title"
            style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>
            {A.hero.title}
          </h1>
          <p className="mt-7 max-w-2xl text-[16.5px] leading-[1.75]" style={{ color: MUTED }}>{A.hero.lead}</p>
        </div>
      </section>

      {/* ---------- the shifts: before / after, with bars ---------- */}
      <section className="px-5 pb-16 sm:px-8" data-testid="a17-shifts">
        <div className="mx-auto max-w-[1240px] rounded-3xl p-6 sm:p-9" style={{ background: PANEL, border: `1px solid ${HAIR}` }}>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-[20px] font-bold tracking-[-0.02em]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>What changed after FFH|ERP</h2>
            <span className="text-[12.5px]" style={{ ...MONO, color: MUTED }}>reported by customers</span>
          </div>
          <div className="mt-8 space-y-8">
            {A.shifts.map((s, i) => (
              <div key={s.label} data-testid={`a17-shift-${i}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <span className="text-[14px] font-semibold">{s.label}</span>
                  <span className="text-[12.5px]" style={{ ...MONO, color: MUTED }}>{s.who}</span>
                </div>
                <div className="mt-3 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-[62px] shrink-0 text-[11.5px] uppercase tracking-[0.12em]" style={{ ...MONO, color: "#9aa3b2" }}>before</span>
                    <span className="h-3 flex-1 overflow-hidden rounded-full" style={{ background: "#e7eaf0" }}>
                      <span className="block h-full rounded-full" style={{ width: "100%", background: "#cfd6e0" }} />
                    </span>
                    <span className="w-[112px] shrink-0 text-right text-[13px] font-semibold" style={{ color: MUTED }}>{s.from}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-[62px] shrink-0 text-[11.5px] uppercase tracking-[0.12em]" style={{ ...MONO, color: BRAND_DARK }}>after</span>
                    <span className="h-3 flex-1 overflow-hidden rounded-full" style={{ background: "#e7eaf0" }}>
                      <span className="block h-full rounded-full" style={{ width: `${pct(s.from, s.to)}%`, background: `linear-gradient(90deg,#f7a52a,${BRAND_DARK})` }} />
                    </span>
                    <span className="w-[112px] shrink-0 text-right text-[13px] font-bold" style={{ color: INK }}>{s.to}</span>
                  </div>
                </div>
                <p className="mt-3 flex items-start gap-2 text-[13.5px] italic leading-relaxed" style={{ color: MUTED }}>
                  <Quote className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: BRAND }} />“{s.quote}”
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- outcomes ---------- */}
      <section id="outcomes" className="ffh-on-dark px-5 py-16 sm:px-8 sm:py-20" style={{ background: INK, color: "#fff" }} data-testid="a17-outcomes">
        <div className="mx-auto max-w-[1240px]">
          <span className="text-[11.5px] font-semibold uppercase tracking-[0.18em]" style={{ ...MONO, color: "#f7a52a" }}>{A.outcomes.eyebrow}</span>
          <h2 className="mt-5 max-w-2xl text-[30px] font-bold leading-[1.08] tracking-[-0.03em] sm:text-[40px]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>
            {A.outcomes.title}
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-9 sm:grid-cols-3 lg:grid-cols-6">
            {A.outcomes.items.map((n) => (
              <div key={n.l} className="border-t pt-5" style={{ borderColor: "rgba(255,255,255,.16)" }}>
                <strong className="block text-[28px] font-bold leading-none tracking-[-0.03em] tabular-nums" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>{n.v}</strong>
                <span className="mt-3 block text-[12.5px] font-semibold">{n.l}</span>
                <span className="mt-1 block text-[11.5px] leading-snug" style={{ color: "rgba(255,255,255,.55)" }}>{n.d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- customer stories ---------- */}
      <section className="px-5 py-16 sm:px-8 sm:py-20" data-testid="a17-stories">
        <div className="mx-auto max-w-[1240px]">
          <span className="text-[11.5px] font-semibold uppercase tracking-[0.18em]" style={{ ...MONO, color: BRAND_DARK }}>{A.stories.eyebrow}</span>
          <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
            <h2 className="max-w-2xl text-[30px] font-bold leading-[1.08] tracking-[-0.03em] sm:text-[40px]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>
              {A.stories.title}
            </h2>
            <span className="text-[12.5px]" style={{ color: MUTED }}>{A.stories.note}</span>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {HOME36.testimonials.slice(0, 6).map((t, i) => (
              <figure key={t.person + i} className="flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
                style={{ background: "#fff", border: `1px solid ${HAIR}` }} data-testid={`a17-story-${i}`}>
                <span className="flex gap-0.5 text-amber-500">{[0, 1, 2, 3, 4].map((k) => <Star key={k} className="h-3.5 w-3.5 fill-current" />)}</span>
                <blockquote className="mt-4 flex-1 text-[14.5px] leading-[1.75]" style={{ color: "#333a47" }}>“{t.text || t.quote}”</blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t pt-4" style={{ borderColor: HAIR }}>
                  <img src={`https://i.pravatar.cc/80?img=${t.img}`} alt={t.person} width="38" height="38" loading="lazy" className="h-[38px] w-[38px] rounded-full object-cover" />
                  <span>
                    <strong className="block text-[13.5px] font-semibold">{t.person}</strong>
                    <span className="text-[12px]" style={{ color: MUTED }}>{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- industries ---------- */}
      <section id="industries" className="px-5 py-16 sm:px-8 sm:py-20" style={{ background: PANEL, borderTop: `1px solid ${HAIR}`, borderBottom: `1px solid ${HAIR}` }} data-testid="a17-industries">
        <div className="mx-auto max-w-[1240px]">
          <span className="text-[11.5px] font-semibold uppercase tracking-[0.18em]" style={{ ...MONO, color: BRAND_DARK }}>{A.industries.eyebrow}</span>
          <h2 className="mt-5 text-[30px] font-bold leading-[1.08] tracking-[-0.03em] sm:text-[40px]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>{A.industries.title}</h2>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {HOME39_MORE.industries.items.map((it) => (
              <div key={it.name} className="rounded-2xl bg-white p-5 transition-transform duration-300 hover:-translate-y-1" style={{ border: `1px solid ${HAIR}` }}>
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ background: PANEL, border: `1px solid ${HAIR}`, color: BRAND_DARK }}>
                    <Icon name={it.icon} size={16} />
                  </span>
                  <strong className="text-[15px] font-bold tracking-[-0.01em]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>{it.name}</strong>
                </div>
                <p className="mt-3 text-[13.5px] leading-[1.7]" style={{ color: MUTED }}>{it.line}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {it.modules.map((m) => (
                    <span key={m} className="rounded-full px-2.5 py-1 text-[11px]" style={{ ...MONO, background: PANEL, border: `1px solid ${HAIR}`, color: MUTED }}>{m}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- how we work ---------- */}
      <section id="how" className="px-5 py-16 sm:px-8 sm:py-20" data-testid="a17-how">
        <div className="mx-auto max-w-[1240px]">
          <span className="text-[11.5px] font-semibold uppercase tracking-[0.18em]" style={{ ...MONO, color: BRAND_DARK }}>{A.how.eyebrow}</span>
          <h2 className="mt-5 text-[30px] font-bold leading-[1.08] tracking-[-0.03em] sm:text-[40px]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>
            Live in a day, <span style={{ color: BRAND }}>not a quarter.</span>
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {HOME39_MORE.how.steps.map((s, i) => (
              <div key={s.n} className="rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1" style={{ background: "#fff", border: `1px solid ${HAIR}` }} data-testid={`a17-step-${i}`}>
                <div className="flex items-center justify-between">
                  <span className="text-[12px] font-bold" style={{ ...MONO, color: BRAND }}>{s.n}</span>
                  <span className="text-[11.5px] uppercase tracking-[0.12em]" style={{ ...MONO, color: "#9aa3b2" }}>{s.when}</span>
                </div>
                <h3 className="mt-3 text-[17px] font-bold tracking-[-0.02em]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>{s.title}</h3>
                <p className="mt-2 text-[13.5px] leading-[1.7]" style={{ color: MUTED }}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- who is behind it + team ---------- */}
      <section className="px-5 py-16 sm:px-8 sm:py-20" style={{ background: PANEL, borderTop: `1px solid ${HAIR}`, borderBottom: `1px solid ${HAIR}` }} data-testid="a17-who">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-5">
            <span className="text-[11.5px] font-semibold uppercase tracking-[0.18em]" style={{ ...MONO, color: BRAND_DARK }}>{A.who.eyebrow}</span>
            <h2 className="mt-5 text-[30px] font-bold leading-[1.08] tracking-[-0.03em] sm:text-[36px]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>{A.who.title}</h2>
            <p className="mt-5 text-[15.5px] leading-[1.8]" style={{ color: MUTED }}>{A.who.body}</p>
          </div>
          <div className="lg:col-span-7">
            <span className="text-[11.5px] font-semibold uppercase tracking-[0.18em]" style={{ ...MONO, color: "#9aa3b2" }}>{A.team.title}</span>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {TEAM.map((m) => (
                <figure key={m.name} className="flex gap-4 rounded-2xl bg-white p-4" style={{ border: `1px solid ${HAIR}` }} data-testid={`a17-person-${m.name.split(" ")[0].toLowerCase()}`}>
                  <img src={`https://i.pravatar.cc/160?img=${m.img}`} alt={m.name} width="160" height="160" loading="lazy" className="h-[76px] w-[76px] shrink-0 rounded-xl object-cover" />
                  <figcaption>
                    <strong className="block text-[15px] font-bold tracking-[-0.01em]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>{m.name}</strong>
                    <span className="mt-0.5 block text-[11.5px]" style={{ ...MONO, color: BRAND_DARK }}>{m.role}</span>
                    <p className="mt-2 text-[12.5px] leading-[1.6]" style={{ color: MUTED }}>{m.bio}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- faq ---------- */}
      <section className="px-5 py-16 sm:px-8 sm:py-20" data-testid="a17-faq">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-4">
            <span className="text-[11.5px] font-semibold uppercase tracking-[0.18em]" style={{ ...MONO, color: BRAND_DARK }}>{A.faq.eyebrow}</span>
            <h2 className="mt-5 text-[30px] font-bold leading-[1.08] tracking-[-0.03em] sm:text-[36px]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>{A.faq.title}</h2>
            <p className="mt-5 text-[15px] leading-relaxed" style={{ color: MUTED }}>
              Or call <a href="tel:+914448585100" className="font-semibold underline decoration-2 underline-offset-4" style={{ color: BRAND_DARK }}>+91 44 4858 5100</a>.
            </p>
          </div>
          <div className="lg:col-span-8">
            {FAQS.map((f, i) => (
              <div key={f.q} className="border-t py-5" style={{ borderColor: HAIR }} data-testid={`a17-faq-${i}`}>
                <h3 className="flex items-start gap-3 text-[16px] font-semibold">
                  <Check className="mt-1 h-4 w-4 shrink-0" style={{ color: GOOD }} />{f.q}
                </h3>
                <p className="mt-2 pl-7 text-[14.5px] leading-[1.8]" style={{ color: MUTED }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- cta ---------- */}
      <section className="px-5 pb-20 sm:px-8">
        <div className="ffh-on-dark mx-auto max-w-[1240px] rounded-3xl px-8 py-12 text-center" style={{ background: INK }}>
          <h2 className="text-[28px] font-bold leading-tight tracking-[-0.03em] text-white sm:text-[38px]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>
            Bring us your worst month-end.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15.5px] leading-relaxed text-white/60">
            Free trial, setup in a day, no credit card. We will walk you through the module that hurts most first.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button onClick={() => external("/home39#signup")} data-testid="a17-final-cta"
              className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-[14.5px] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
              style={{ background: `linear-gradient(135deg,#f7a52a,${BRAND_DARK})` }}>
              Start free trial <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={() => external("/about18")}
              className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-[14.5px] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
              style={{ border: "1px solid rgba(255,255,255,.28)" }}>
              The full company story <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t px-5 py-10 sm:px-8" style={{ borderColor: HAIR }}>
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-4 text-[12.5px]" style={{ color: MUTED }}>
          <span>© 2026 KrisKross Inc. · FFH|ERP</span>
          <span style={MONO}>2.5K+ active users · 20+ countries · 14 years</span>
        </div>
      </footer>

      <AboutLayoutNav />
    </div>
  );
}
