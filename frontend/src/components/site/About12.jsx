import React, { useEffect } from "react";
import { ArrowRight, ArrowUpRight, Quote, Star } from "lucide-react";
import { ABOUT_11, ABOUT_12, ABOUT_ALT, HOME37, TEAM } from "../../mock";
import AboutLayoutNav from "./AboutLayoutNav";
import TwPillHeader from "./TwPillHeader";
import { useGoTo } from "./crmStore";

// About layout 12 — modelled on wittypen.com/about: editorial and light, with a
// floating pill nav, mono eyebrows over numbered sections, big Newsreader serif
// headings carrying an orange italic accent, an expanding-mandate timeline, a
// values grid, a statement block, client proof, numbers, the leadership team and
// a closing CTA.
const SERIF = { fontFamily: '"Newsreader", Georgia, serif' };
const MONO = { fontFamily: '"JetBrains Mono", ui-monospace, monospace' };
const INK = "#16283c";
const MUTED = "#5b6472";
const BRAND = "#ef7b23";
const BRAND_DARK = "#cf5f12";
const HAIR = "#efe6db";
const CREAM = "#fffaf4";

function Eyebrow({ no, children }) {
  return (
    <p className="flex items-center gap-3 text-[11.5px] font-medium uppercase tracking-[0.18em]" style={{ ...MONO, color: BRAND_DARK }}>
      {no && <span style={{ color: BRAND }}>{no}</span>}
      {children}
    </p>
  );
}

export default function About12() {
  const goTo = useGoTo();
  const A = ABOUT_12;

  useEffect(() => { document.title = "About FFH|ERP — fourteen years of business software | FFH|ERP"; }, []);

  const jump = (e, t) => { e.preventDefault(); goTo(t); };
  const external = (path) => { window.location.assign(`${process.env.PUBLIC_URL}${path}`); };

  return (
    <div className="ffh-tw ffh-a12 min-h-screen bg-white" style={{ color: INK }} data-testid="about12-page">
      <TwPillHeader variant="light" />

      {/* ---------- hero ---------- */}
      <section id="top" className="px-5 pb-16 pt-28 sm:px-8 sm:pt-36">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-[12px] tracking-[0.14em]" style={{ ...MONO, color: "#9aa3b2" }}>
            {A.crumb} <span className="mx-1">/</span> about
          </p>
          <h1 className="mt-8 text-[9.5vw] leading-[1.04] tracking-[-0.02em] sm:text-[6vw] lg:text-[68px]" style={SERIF}>
            {A.hero.titleTop}
            <span className="block">
              {A.hero.titleBottomLead}{" "}
              <em className="italic" style={{ color: BRAND, fontWeight: 500 }}>{A.hero.titleAccent}</em>.
            </span>
          </h1>
          <p className="mx-auto mt-9 max-w-3xl text-[16.5px] leading-[1.75]" style={{ color: MUTED }}>{A.hero.lead}</p>

          <div className="mt-14 grid grid-cols-2 gap-y-8 lg:grid-cols-4" data-testid="a12-stats">
            {A.hero.stats.map((s, i) => (
              <div key={s.l} className="px-4 lg:border-l" style={{ borderColor: i === 0 ? "transparent" : HAIR }}>
                <strong className="block text-[26px] font-semibold tracking-[-0.01em]" style={SERIF}>{s.v}</strong>
                <span className="mt-1 block text-[12.5px]" style={{ color: "#8b93a3" }}>{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- point of view ---------- */}
      <section className="border-t px-5 py-20 sm:px-8 sm:py-28" style={{ borderColor: HAIR }}>
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-y-8 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-5">
            <Eyebrow no={A.viewpoint.no}>{A.viewpoint.eyebrow}</Eyebrow>
            <h2 className="mt-6 text-[34px] leading-[1.12] tracking-[-0.02em] sm:text-[42px]" style={SERIF}>{A.viewpoint.title}</h2>
          </div>
          <div className="lg:col-span-7">
            {A.viewpoint.body.map((t, i) => (
              <p key={i} className={`text-[16.5px] leading-[1.8] ${i === 0 ? "" : "mt-6"}`} style={{ color: MUTED }}>{t}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- an expanding mandate ---------- */}
      <section className="border-t px-5 py-20 sm:px-8 sm:py-28" style={{ borderColor: HAIR, background: CREAM }}>
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-12 lg:gap-x-16">
            <div className="lg:col-span-5">
              <Eyebrow no={A.mandate.no}>{A.mandate.eyebrow}</Eyebrow>
              <h2 className="mt-6 text-[34px] leading-[1.12] tracking-[-0.02em] sm:text-[42px]" style={SERIF}>{A.mandate.title}</h2>
            </div>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-2">
            {A.mandate.steps.map((s) => (
              <div key={s.n} data-testid={`a12-step-${s.n}`} className="border-t pt-6" style={{ borderColor: "#e6d9c9" }}>
                <span className="text-[12px] font-medium" style={{ ...MONO, color: BRAND }}>{s.n}</span>
                <h3 className="mt-3 text-[23px] leading-snug tracking-[-0.01em]" style={SERIF}>{s.title}</h3>
                <p className="mt-3 max-w-xl text-[15px] leading-[1.75]" style={{ color: MUTED }}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- culture ---------- */}
      <section className="border-t px-5 py-20 sm:px-8 sm:py-28" style={{ borderColor: HAIR }}>
        <div className="mx-auto max-w-[1200px]">
          <Eyebrow no={A.culture.no}>{A.culture.eyebrow}</Eyebrow>
          <div className="mt-12 grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-2">
            {A.culture.values.map((v) => (
              <div key={v.n} data-testid={`a12-value-${v.n}`} className="group border-t pt-6 transition-colors duration-300" style={{ borderColor: HAIR }}>
                <span className="text-[12px] font-medium" style={{ ...MONO, color: BRAND }}>{v.n}</span>
                <h3 className="mt-3 text-[23px] leading-snug tracking-[-0.01em] transition-colors duration-300 group-hover:text-[#cf5f12]" style={SERIF}>{v.title}</h3>
                <p className="mt-3 max-w-xl text-[15px] leading-[1.75]" style={{ color: MUTED }}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- one team ---------- */}
      <section className="border-t px-5 py-20 sm:px-8 sm:py-28" style={{ borderColor: HAIR, background: CREAM }}>
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-y-8 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-5">
            <Eyebrow no={A.together.no}>{A.together.eyebrow}</Eyebrow>
            <h2 className="mt-6 text-[34px] leading-[1.12] tracking-[-0.02em] sm:text-[42px]" style={SERIF}>{A.together.title}</h2>
          </div>
          <div className="lg:col-span-7">
            {A.together.body.map((t, i) => (
              <p key={i} className={`text-[16.5px] leading-[1.8] ${i === 0 ? "" : "mt-6"}`} style={{ color: MUTED }}>{t}</p>
            ))}
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={(e) => jump(e, "#cta")} className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: `linear-gradient(135deg,#f7a52a,${BRAND_DARK})` }}>
                Start free trial <ArrowRight className="h-4 w-4" />
              </button>
              <button onClick={() => external("/home37")} className="inline-flex items-center gap-2 rounded-full border px-6 py-3.5 text-[14px] font-semibold transition-all duration-300 hover:-translate-y-0.5"
                style={{ borderColor: HAIR, color: INK }}>
                See the product
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- client proof ---------- */}
      <section className="border-t px-5 py-20 sm:px-8 sm:py-28" style={{ borderColor: HAIR }}>
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-12 lg:gap-x-16">
            <div className="lg:col-span-5">
              <Eyebrow no={A.proof.no}>{A.proof.eyebrow}</Eyebrow>
              <h2 className="mt-6 text-[34px] leading-[1.12] tracking-[-0.02em] sm:text-[42px]" style={SERIF}>{A.proof.title}</h2>
              <p className="mt-4 text-[14px]" style={{ color: "#8b93a3" }}>{A.proof.note}</p>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {HOME37.testimonials.slice(0, 6).map((t, i) => (
              <figure key={t.person + i} data-testid={`a12-proof-${i}`} className="border-t pt-6" style={{ borderColor: HAIR }}>
                <Quote className="h-4 w-4" style={{ color: BRAND }} />
                <blockquote className="mt-4 text-[15.5px] leading-[1.75]" style={{ color: "#3d4757" }}>“{t.quote}”</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <img src={`https://i.pravatar.cc/80?img=${t.img}`} alt={t.person} width="38" height="38" loading="lazy" className="h-[38px] w-[38px] rounded-full object-cover" />
                  <span>
                    <strong className="block text-[13.5px] font-semibold">{t.person}</strong>
                    <span className="text-[12px]" style={{ color: "#8b93a3" }}>{t.role}</span>
                  </span>
                  <span className="ml-auto flex text-amber-500">{[0, 1, 2, 3, 4].map((k) => <Star key={k} className="h-3 w-3 fill-current" />)}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- numbers ---------- */}
      <section className="px-5 py-20 text-white sm:px-8 sm:py-28" style={{ background: "#1c1024" }}>
        <div className="mx-auto max-w-[1200px]">
          <p className="flex items-center gap-3 text-[11.5px] font-medium uppercase tracking-[0.18em]" style={{ ...MONO, color: "#f7a52a" }}>
            <span>{A.numbers.no}</span>{A.numbers.eyebrow}
          </p>
          <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4" data-testid="a12-numbers">
            {A.numbers.items.map((n) => (
              <div key={n.l} className="border-t pt-6" style={{ borderColor: "rgba(255,255,255,.16)" }}>
                <strong className="block text-[40px] leading-none tracking-[-0.02em]" style={SERIF}>{n.v}</strong>
                <span className="mt-3 block text-[14px] font-semibold text-white">{n.l}</span>
                <p className="mt-1.5 text-[13.5px] leading-relaxed" style={{ color: "rgba(255,255,255,.6)" }}>{n.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- people ---------- */}
      <section className="border-t px-5 py-20 sm:px-8 sm:py-28" style={{ borderColor: HAIR }}>
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-12 lg:gap-x-16">
            <div className="lg:col-span-5">
              <Eyebrow no={A.people.no}>{A.people.eyebrow}</Eyebrow>
              <h2 className="mt-6 text-[34px] leading-[1.12] tracking-[-0.02em] sm:text-[42px]" style={SERIF}>{A.people.title}</h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-[16.5px] leading-[1.8]" style={{ color: MUTED }}>
                {ABOUT_11.who.paragraphs[2]}
              </p>
            </div>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((m) => (
              <div key={m.name} data-testid={`a12-person-${m.name.split(" ")[0].toLowerCase()}`} className="group">
                <img src={`https://i.pravatar.cc/300?img=${m.img}`} alt={m.name} width="300" height="300" loading="lazy"
                  className="h-[210px] w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
                <h3 className="mt-5 text-[20px] leading-tight" style={SERIF}>{m.name}</h3>
                <span className="mt-1 block text-[12.5px]" style={{ ...MONO, color: BRAND_DARK }}>{m.role}</span>
              </div>
            ))}
          </div>
          <p className="mt-10 text-[13.5px]" style={{ color: "#8b93a3" }}>{ABOUT_ALT.facts[1].v} · {ABOUT_ALT.facts[3].v}</p>
        </div>
      </section>

      {/* ---------- cta ---------- */}
      <section id="cta" className="border-t px-5 py-20 sm:px-8 sm:py-28" style={{ borderColor: HAIR, background: CREAM }}>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11.5px] font-medium uppercase tracking-[0.18em]" style={{ ...MONO, color: BRAND_DARK }}>{A.cta.eyebrow}</p>
          <h2 className="mt-6 text-[38px] leading-[1.1] tracking-[-0.02em] sm:text-[48px]" style={SERIF}>{A.cta.title}</h2>
          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-[1.8]" style={{ color: MUTED }}>{A.cta.lead}</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <button onClick={() => external("/home37#signup")} data-testid="a12-cta-trial"
              className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-[14.5px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: `linear-gradient(135deg,#f7a52a,${BRAND_DARK})` }}>
              {A.cta.primary} <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={() => external("/home37#contact")} className="inline-flex items-center gap-2 rounded-full border bg-white px-7 py-4 text-[14.5px] font-semibold transition-all duration-300 hover:-translate-y-0.5"
              style={{ borderColor: HAIR, color: INK }}>
              {A.cta.secondary} <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ---------- footer ---------- */}
      <footer className="border-t px-5 py-16 sm:px-8" style={{ borderColor: HAIR, background: "#1c1024" }}>
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-12">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3">
                <img src={`${process.env.PUBLIC_URL}/ffh-logo.png`} alt="FFH ERP" width="36" height="36" className="h-9 w-9 rounded-full" />
                <span className="text-[18px] font-bold text-white">FFH|ERP</span>
              </div>
              <p className="mt-5 max-w-md text-[14px] leading-relaxed" style={{ color: "rgba(255,255,255,.6)" }}>{A.footer.blurb}</p>
            </div>
            {A.footer.columns.map((c) => (
              <div key={c.title} className="lg:col-span-3">
                <h4 className="text-[11.5px] font-medium uppercase tracking-[0.16em]" style={{ ...MONO, color: "#f7a52a" }}>{c.title}</h4>
                <ul className="mt-4 space-y-2.5">
                  {c.items.map((it) => (
                    <li key={it.label}>
                      <a href={it.path} onClick={(e) => { e.preventDefault(); external(it.path); }}
                        className="text-[13.5px] transition hover:text-white" style={{ color: "rgba(255,255,255,.6)" }}>{it.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t pt-5 text-[12.5px]" style={{ borderColor: "rgba(255,255,255,.14)", color: "rgba(255,255,255,.45)" }}>
            <span>{A.footer.legal}</span>
            <span style={MONO}>14 years · 2.5K+ active users · 20+ countries</span>
          </div>
        </div>
      </footer>

      <AboutLayoutNav dark />
    </div>
  );
}
