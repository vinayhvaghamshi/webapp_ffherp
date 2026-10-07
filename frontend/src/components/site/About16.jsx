import React, { useEffect } from "react";
import { ArrowRight, ArrowUpRight, Check, Mail, MapPin, Phone } from "lucide-react";
import { ABOUT_16, FAQS, HOME39_MORE, TEAM } from "../../mock";
import AboutLayoutNav from "./AboutLayoutNav";
import { Icon } from "./Trusted";
import { useGoTo } from "./crmStore";

// About layout 16 — "Engineered". A dark, technical treatment: mono breadcrumb and
// spec tables, a status strip, the pipeline a customer request travels, then the
// security, people and careers of the team that ships it. Built for the technical
// buyer who wants to know how it works before who we are.
const BG = "#0e1116";
const CARD = "#151a21";
const LINE = "rgba(255,255,255,.10)";
const TEXT = "rgba(255,255,255,.66)";
const BRAND = "#ef7b23";
const OK = "#22c55e";
const MONO = { fontFamily: '"JetBrains Mono", ui-monospace, monospace' };

export default function About16() {
  const goTo = useGoTo();
  const A = ABOUT_16;

  useEffect(() => { document.title = "About FFH|ERP — engineered in Chennai since 2012 | FFH|ERP"; }, []);

  const external = (path) => { window.location.assign(`${process.env.PUBLIC_URL}${path}`); };

  return (
    <div className="ffh-tw ffh-a16 min-h-screen" style={{ background: BG, color: "#fff", fontFamily: 'Inter, system-ui, sans-serif' }} data-testid="about16-page">
      {/* ---------- nav ---------- */}
      <header className="sticky top-0 z-50 border-b backdrop-blur" style={{ borderColor: LINE, background: "rgba(14,17,22,.86)" }} data-testid="a16-nav">
        <div className="mx-auto flex max-w-[1280px] items-center gap-6 px-5 py-4 sm:px-8">
          <a href="#top" onClick={(e) => { e.preventDefault(); goTo("#top"); }} className="flex items-center gap-2.5">
            <img src={`${process.env.PUBLIC_URL}/ffh-logo.png`} alt="FFH ERP" width="30" height="30" className="h-[30px] w-[30px] rounded-full" />
            <span className="text-[16px] font-semibold tracking-[-0.01em]">FFH|ERP</span>
            <span className="ml-1 hidden text-[11.5px] sm:inline" style={{ ...MONO, color: "rgba(255,255,255,.4)" }}>v2026</span>
          </a>
          <nav className="ml-auto hidden items-center gap-6 lg:flex">
            {A.nav.map((l) => (
              <button key={l.label} onClick={() => external(l.path)} className="text-[13.5px] transition-colors duration-200 hover:text-white" style={{ color: TEXT }}>{l.label}</button>
            ))}
          </nav>
          <button onClick={() => external("/home39#contact")} data-testid="a16-cta"
            className="ml-auto rounded-full px-5 py-2.5 text-[13px] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 lg:ml-0"
            style={{ background: `linear-gradient(135deg,#f7a52a,${BRAND})` }}>
            Talk to an engineer
          </button>
        </div>
      </header>

      {/* ---------- hero ---------- */}
      <section id="top" className="px-5 pb-16 pt-16 sm:px-8 sm:pt-20">
        <div className="mx-auto max-w-[1280px]">
          <p className="text-[12px]" style={{ ...MONO, color: "rgba(255,255,255,.4)" }}>
            <span style={{ color: OK }}>●</span> {A.hero.path}
          </p>
          <h1 className="mt-7 max-w-4xl text-[8.4vw] font-semibold leading-[1.06] tracking-[-0.03em] sm:text-[5vw] lg:text-[52px]" data-testid="a16-title"
            style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>
            {A.hero.title}
          </h1>
          <p className="mt-7 max-w-2xl text-[16px] leading-[1.75]" style={{ color: TEXT }}>{A.hero.lead}</p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <button onClick={() => external("/home39#top")} data-testid="a16-hero-cta"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: `linear-gradient(135deg,#f7a52a,${BRAND})` }}>
              {A.hero.primary} <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={() => external("/home39#contact")}
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{ border: `1px solid ${LINE}` }}>
              {A.hero.secondary}
            </button>
          </div>

          {/* status strip */}
          <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-6 rounded-2xl p-6 sm:grid-cols-3 lg:grid-cols-6" style={{ background: CARD, border: `1px solid ${LINE}` }} data-testid="a16-status">
            {A.status.map((s) => (
              <div key={s.k}>
                <span className="block text-[11px] uppercase tracking-[0.14em]" style={{ ...MONO, color: "rgba(255,255,255,.4)" }}>{s.k}</span>
                <strong className="mt-2 block text-[22px] font-semibold tracking-[-0.02em]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>{s.v}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- what it is made of ---------- */}
      <section className="border-t px-5 py-16 sm:px-8 sm:py-20" style={{ borderColor: LINE }}>
        <div className="mx-auto max-w-[1280px]">
          <span className="text-[11.5px] uppercase tracking-[0.18em]" style={{ ...MONO, color: BRAND }}>{A.made.eyebrow}</span>
          <h2 className="mt-5 max-w-3xl text-[30px] font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[40px]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>
            {A.made.title}
          </h2>
          <div className="mt-12 overflow-hidden rounded-2xl" style={{ border: `1px solid ${LINE}` }} data-testid="a16-spec">
            {A.made.rows.map((r, i) => (
              <div key={r.k} className="grid grid-cols-1 gap-x-8 gap-y-2 px-6 py-5 transition-colors duration-200 hover:bg-white/[.03] sm:grid-cols-12"
                style={{ borderTop: i === 0 ? "none" : `1px solid ${LINE}` }}>
                <span className="text-[11.5px] uppercase tracking-[0.14em] sm:col-span-3" style={{ ...MONO, color: "rgba(255,255,255,.42)" }}>{r.k}</span>
                <strong className="text-[16px] font-semibold sm:col-span-4" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>{r.v}</strong>
                <span className="text-[13.5px] leading-relaxed sm:col-span-5" style={{ color: TEXT }}>{r.d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- the pipeline ---------- */}
      <section className="border-t px-5 py-16 sm:px-8 sm:py-20" style={{ borderColor: LINE, background: "#0b0e12" }}>
        <div className="mx-auto max-w-[1280px]">
          <span className="text-[11.5px] uppercase tracking-[0.18em]" style={{ ...MONO, color: BRAND }}>{A.pipeline.eyebrow}</span>
          <h2 className="mt-5 max-w-3xl text-[30px] font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[40px]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>
            {A.pipeline.title}
          </h2>
          <p className="mt-5 max-w-2xl text-[15.5px] leading-relaxed" style={{ color: TEXT }}>{A.pipeline.lead}</p>

          <ol className="mt-12 space-y-0" data-testid="a16-pipeline">
            {A.pipeline.stages.map((s, i) => (
              <li key={s.n} className="group grid grid-cols-1 gap-x-8 gap-y-2 border-t py-6 transition-colors duration-200 hover:bg-white/[.03] sm:grid-cols-12"
                style={{ borderColor: LINE }}>
                <span className="flex items-center gap-3 sm:col-span-3">
                  <span className="text-[12px] font-semibold" style={{ ...MONO, color: BRAND }}>{s.n}</span>
                  <span className="h-px flex-1" style={{ background: "rgba(255,255,255,.14)" }} />
                </span>
                <strong className="text-[17px] font-semibold sm:col-span-4" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>{s.t}</strong>
                <span className="text-[13.5px] leading-relaxed sm:col-span-5" style={{ color: TEXT }}>{s.d}</span>
                {i === A.pipeline.stages.length - 1 && <span className="sm:col-span-12" />}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- security ---------- */}
      <section id="security" className="border-t px-5 py-16 sm:px-8 sm:py-20" style={{ borderColor: LINE }}>
        <div className="mx-auto max-w-[1280px]">
          <span className="text-[11.5px] uppercase tracking-[0.18em]" style={{ ...MONO, color: BRAND }}>{A.security.eyebrow}</span>
          <h2 className="mt-5 max-w-3xl text-[30px] font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[40px]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>
            {A.security.title}
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" data-testid="a16-security">
            {HOME39_MORE.security.items.map((it) => (
              <div key={it.title} className="rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1" style={{ background: CARD, border: `1px solid ${LINE}` }}>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: "rgba(34,197,94,.12)", color: OK }}>
                  <Icon name={it.icon} size={18} />
                </span>
                <h3 className="mt-5 text-[16px] font-semibold" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>{it.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed" style={{ color: TEXT }}>{it.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- team ---------- */}
      <section id="team" className="border-t px-5 py-16 sm:px-8 sm:py-20" style={{ borderColor: LINE, background: "#0b0e12" }} data-testid="a16-team">
        <div className="mx-auto max-w-[1280px]">
          <span className="text-[11.5px] uppercase tracking-[0.18em]" style={{ ...MONO, color: BRAND }}>{A.team.eyebrow}</span>
          <h2 className="mt-5 text-[30px] font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[40px]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>{A.team.title}</h2>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((m) => (
              <div key={m.name} className="group rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1" style={{ background: CARD, border: `1px solid ${LINE}` }} data-testid={`a16-person-${m.name.split(" ")[0].toLowerCase()}`}>
                <div className="flex items-center gap-3">
                  <img src={`https://i.pravatar.cc/120?img=${m.img}`} alt={m.name} width="120" height="120" loading="lazy" className="h-11 w-11 rounded-lg object-cover" />
                  <span>
                    <strong className="block text-[14.5px] font-semibold">{m.name}</strong>
                    <span className="text-[11.5px]" style={{ ...MONO, color: BRAND }}>{m.role}</span>
                  </span>
                </div>
                <p className="mt-4 text-[13px] leading-relaxed" style={{ color: TEXT }}>{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- careers + faq ---------- */}
      <section className="border-t px-5 py-16 sm:px-8 sm:py-20" style={{ borderColor: LINE }} data-testid="a16-careers">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-5">
            <div className="rounded-2xl p-7" style={{ background: CARD, border: `1px solid ${LINE}` }}>
              <span className="text-[11.5px] uppercase tracking-[0.18em]" style={{ ...MONO, color: OK }}>Open roles</span>
              <h2 className="mt-4 text-[26px] font-semibold leading-[1.15] tracking-[-0.02em]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>{A.careers.title}</h2>
              <p className="mt-3 text-[14px] leading-relaxed" style={{ color: TEXT }}>{A.careers.lead}</p>
              <a href="mailto:ffhsales@kriskrossinc.com" className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-3 text-[13.5px] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
                style={{ background: `linear-gradient(135deg,#f7a52a,${BRAND})` }}>
                {A.careers.cta} <ArrowUpRight className="h-4 w-4" />
              </a>
              <div className="mt-7 space-y-2.5 border-t pt-5 text-[13px]" style={{ borderColor: LINE, color: TEXT }}>
                <p className="flex items-center gap-2.5"><MapPin className="h-3.5 w-3.5" style={{ color: BRAND }} />KrisKross Inc., Chennai, Tamil Nadu</p>
                <p className="flex items-center gap-2.5"><Mail className="h-3.5 w-3.5" style={{ color: BRAND }} /><a href="mailto:ffhsales@kriskrossinc.com" className="hover:text-white">ffhsales@kriskrossinc.com</a></p>
                <p className="flex items-center gap-2.5"><Phone className="h-3.5 w-3.5" style={{ color: BRAND }} /><a href="tel:+914448585100" className="hover:text-white">+91 44 4858 5100</a></p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <span className="text-[11.5px] uppercase tracking-[0.18em]" style={{ ...MONO, color: BRAND }}>{A.faq.eyebrow}</span>
            <h2 className="mt-5 text-[26px] font-semibold leading-[1.15] tracking-[-0.02em]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>{A.faq.title}</h2>
            <dl className="mt-8 space-y-5">
              {FAQS.map((f) => (
                <div key={f.q} className="border-t pt-5" style={{ borderColor: LINE }}>
                  <dt className="flex items-start gap-3 text-[15px] font-semibold">
                    <Check className="mt-1 h-4 w-4 shrink-0" style={{ color: OK }} />{f.q}
                  </dt>
                  <dd className="mt-2 pl-7 text-[13.5px] leading-[1.75]" style={{ color: TEXT }}>{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ---------- cta + footer ---------- */}
      <section className="border-t px-5 py-16 sm:px-8" style={{ borderColor: LINE, background: "#0b0e12" }}>
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-6">
          <div>
            <h2 className="text-[26px] font-semibold leading-tight tracking-[-0.02em]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>
              See the platform running with your numbers.
            </h2>
            <p className="mt-2 text-[14px]" style={{ color: TEXT }}>Free trial, setup in a day, no credit card. Or a walkthrough with the people who build it.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button onClick={() => external("/home39#signup")} data-testid="a16-final-cta"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[14px] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
              style={{ background: `linear-gradient(135deg,#f7a52a,${BRAND})` }}>
              Start free trial <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={() => external("/about18")}
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[14px] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
              style={{ border: `1px solid ${LINE}` }}>
              Read the full company story
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t px-5 py-10 sm:px-8" style={{ borderColor: LINE }}>
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-4 text-[12.5px]" style={{ ...MONO, color: "rgba(255,255,255,.42)" }}>
          <span>© 2026 KrisKross Inc. · FFH|ERP</span>
          <span>Chennai · Dubai · Singapore · 2.5K+ active users · 20+ countries</span>
        </div>
      </footer>

      <AboutLayoutNav dark />
    </div>
  );
}
