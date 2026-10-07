import React, { useEffect, useState } from "react";
import { ArrowRight, Check, ChevronRight, Facebook, Instagram, Linkedin, Mail, MapPin, Minus, Phone, Plus, Star, Twitter, Youtube } from "lucide-react";
import { ABOUT_13, FAQS, TEAM } from "../../mock";
import AboutLayoutNav from "./AboutLayoutNav";
import { Icon } from "./Trusted";
import { useGoTo } from "./crmStore";

// About layout 13 — modelled on mindsignal.webflow.io/about-us: a minimal white
// nav, a centred hero with a pill eyebrow and a wide rounded image, a three-stat
// strip, a grey story band with a milestone timeline, a black team band, a white
// feature trio and a numbered FAQ accordion. Manrope throughout.
const INK = "#0b0b0b";
const MUTED = "#797676";
const GREY = "#f9f9f9";
const BRAND = "#ef7b23";
const BRAND_DARK = "#cf5f12";
const HAIR = "#e9e6e2";
const SOCIAL = { Instagram, Facebook, LinkedIn: Linkedin, Twitter, YouTube: Youtube };

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-[13px] font-medium"
      style={{ borderColor: HAIR, color: MUTED }}>
      <span className="h-4 w-4 rounded-full" style={{ background: `linear-gradient(135deg,#f7a52a,${BRAND_DARK})` }} />
      {children}
    </span>
  );
}

export default function About13() {
  const goTo = useGoTo();
  const [open, setOpen] = useState(0);
  const A = ABOUT_13;

  useEffect(() => { document.title = "About FFH|ERP — nine modules, one system | FFH|ERP"; }, []);

  const external = (path) => { window.location.assign(`${process.env.PUBLIC_URL}${path}`); };
  const jump = (e, t) => { e.preventDefault(); goTo(t); };

  return (
    <div className="ffh-tw ffh-a13 min-h-screen bg-white" style={{ color: INK, fontFamily: '"Manrope", Inter, system-ui, sans-serif' }} data-testid="about13-page">
      {/* ---------- minimal nav ---------- */}
      <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur" style={{ borderColor: HAIR }} data-testid="a13-nav">
        <div className="mx-auto flex max-w-[1280px] items-center gap-6 px-5 py-4 sm:px-8">
          <a href="#top" onClick={(e) => jump(e, "#top")} className="flex items-center gap-2.5">
            <img src={`${process.env.PUBLIC_URL}/ffh-logo.png`} alt="FFH ERP" width="32" height="32" className="h-8 w-8 rounded-full" />
            <span className="text-[17px] font-extrabold tracking-tight">FFH|ERP</span>
          </a>
          <nav className="ml-auto hidden items-center gap-1 lg:flex">
            {A.nav.map((l) => (
              <button key={l.label} onClick={() => external(l.path)}
                className="rounded-full px-4 py-2 text-[14px] font-medium transition-colors duration-200 hover:bg-black/5"
                style={{ color: MUTED }}>
                {l.label}
              </button>
            ))}
          </nav>
          <button onClick={() => external(A.cta.path)} data-testid="a13-cta"
            className="ml-auto rounded-full px-5 py-3 text-[13.5px] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 lg:ml-0"
            style={{ background: INK }}>
            {A.cta.label}
          </button>
        </div>
      </header>

      {/* ---------- hero ---------- */}
      <section id="top" className="px-5 pb-16 pt-20 sm:px-8 sm:pt-24">
        <div className="mx-auto max-w-[1000px] text-center">
          <Pill>{A.hero.eyebrow}</Pill>
          <h1 className="mt-7 text-[9vw] font-extrabold leading-[1.06] tracking-[-0.03em] sm:text-[5.4vw] lg:text-[58px]"
            data-testid="a13-title">
            {A.hero.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-[1.75]" style={{ color: MUTED }}>{A.hero.lead}</p>
          <button onClick={() => external(A.hero.button.path)} data-testid="a13-hero-cta"
            className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-4 text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: `linear-gradient(135deg,#f7a52a,${BRAND_DARK})`, boxShadow: "0 18px 40px -22px rgba(207,95,18,.9)" }}>
            {A.hero.button.label} <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        <div className="mx-auto mt-14 max-w-[1280px]">
          <img src="https://picsum.photos/id/1067/1600/760" alt="" width="1600" height="760" loading="lazy"
            className="h-[240px] w-full rounded-[28px] object-cover sm:h-[380px] lg:h-[460px]" />
        </div>
      </section>

      {/* ---------- stats ---------- */}
      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-6 rounded-[28px] px-8 py-9 sm:grid-cols-3"
          style={{ background: GREY }} data-testid="a13-stats">
          {A.stats.map((s) => (
            <div key={s.l} className="text-center">
              <strong className="block text-[40px] font-extrabold leading-none tracking-[-0.02em]">{s.v}</strong>
              <span className="mt-2 block text-[13.5px]" style={{ color: MUTED }}>{s.l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- our story ---------- */}
      <section className="px-5 py-20 sm:px-8 sm:py-24" style={{ background: GREY }}>
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-2xl">
            <Pill>{A.story.eyebrow}</Pill>
            <h2 className="mt-6 text-[34px] font-extrabold leading-[1.1] tracking-[-0.025em] sm:text-[44px]">{A.story.title}</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-y-8 lg:grid-cols-12 lg:gap-x-16">
            <div className="lg:col-span-7">
              {A.story.paragraphs.map((t, i) => (
                <p key={i} className={`text-[16px] leading-[1.8] ${i === 0 ? "" : "mt-5"}`} style={{ color: MUTED }}>{t}</p>
              ))}
            </div>
            <div className="lg:col-span-5">
              <ol className="space-y-5" data-testid="a13-milestones">
                {A.story.milestones.map((m) => (
                  <li key={m.y} className="flex gap-4 border-t pt-4" style={{ borderColor: "#e4e0db" }}>
                    <span className="w-[52px] shrink-0 text-[14px] font-extrabold" style={{ color: BRAND_DARK }}>{m.y}</span>
                    <span>
                      <strong className="block text-[15px] font-bold">{m.t}</strong>
                      <span className="mt-0.5 block text-[13.5px] leading-relaxed" style={{ color: MUTED }}>{m.d}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- team (black) ---------- */}
      <section className="px-5 py-20 text-white sm:px-8 sm:py-24" style={{ background: "#000" }} data-testid="a13-team">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-2xl">
            <Pill>{A.team.eyebrow}</Pill>
            <h2 className="mt-6 text-[34px] font-extrabold leading-[1.1] tracking-[-0.025em] text-white sm:text-[44px]">{A.team.title}</h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-white/60">{A.team.lead}</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((m) => (
              <div key={m.name} className="group" data-testid={`a13-person-${m.name.split(" ")[0].toLowerCase()}`}>
                <img src={`https://i.pravatar.cc/600?img=${m.img}`} alt={m.name} width="600" height="600" loading="lazy"
                  className="h-[260px] w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
                <div className="mt-4 flex items-start justify-between gap-3">
                  <span>
                    <strong className="block text-[16.5px] font-bold text-white">{m.name}</strong>
                    <span className="mt-0.5 block text-[13px]" style={{ color: "rgba(255,255,255,.6)" }}>{m.role}</span>
                  </span>
                  <span className="flex gap-1.5">
                    {[Linkedin, Twitter, Instagram].map((I, i) => (
                      <a key={i} href="#top" onClick={(e) => e.preventDefault()} aria-label={`${m.name} social ${i + 1}`}
                        className="flex h-8 w-8 items-center justify-center rounded-full border text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:text-white"
                        style={{ borderColor: "rgba(255,255,255,.28)" }}>
                        <I className="h-[13px] w-[13px]" strokeWidth={1.9} />
                      </a>
                    ))}
                  </span>
                </div>
                <p className="mt-3 text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,.5)" }}>{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- why teams stay ---------- */}
      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-2xl">
            <Pill>{A.why.eyebrow}</Pill>
            <h2 className="mt-6 text-[34px] font-extrabold leading-[1.1] tracking-[-0.025em] sm:text-[44px]">{A.why.title}</h2>
            <p className="mt-5 text-[16px] leading-relaxed" style={{ color: MUTED }}>{A.why.lead}</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4" data-testid="a13-why">
            {A.why.items.map((it) => (
              <div key={it.title} className="group">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-500 group-hover:-translate-y-1"
                  style={{ borderColor: HAIR, color: INK }}>
                  <Icon name={it.icon} size={20} />
                </span>
                <h3 className="mt-5 text-[18px] font-bold">{it.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.75]" style={{ color: MUTED }}>{it.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- faq ---------- */}
      <section className="px-5 py-20 sm:px-8 sm:py-24" style={{ background: GREY }} data-testid="a13-faq">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-5">
            <Pill>{A.faq.eyebrow}</Pill>
            <h2 className="mt-6 text-[34px] font-extrabold leading-[1.1] tracking-[-0.025em] sm:text-[44px]">{A.faq.title}</h2>
            <p className="mt-5 text-[15px] leading-relaxed" style={{ color: MUTED }}>
              Anything not answered here? Call <a href="tel:+914448585100" className="font-semibold underline" style={{ color: BRAND_DARK }}>+91 44 4858 5100</a> or ask in the chat.
            </p>
          </div>
          <div className="lg:col-span-7">
            {FAQS.slice(0, 6).map((f, i) => {
              const on = open === i;
              return (
                <div key={f.q} className="border-t" style={{ borderColor: "#e4e0db" }} data-testid={`a13-faq-${i}`}>
                  <button onClick={() => setOpen(on ? -1 : i)} aria-expanded={on}
                    className="flex w-full items-center gap-4 py-5 text-left">
                    <span className="text-[13px] font-extrabold" style={{ color: on ? BRAND : MUTED }}>{String(i + 1).padStart(2, "0")}</span>
                    <span className="flex-1 text-[16.5px] font-bold">{f.q}</span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300"
                      style={{ borderColor: on ? BRAND : HAIR, background: on ? BRAND : "transparent", color: on ? "#fff" : INK }}>
                      {on ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  <div className="grid transition-[grid-template-rows] duration-500 ease-out" style={{ gridTemplateRows: on ? "1fr" : "0fr" }}>
                    <div className="overflow-hidden">
                      <p className={`pb-6 pl-[30px] pr-12 text-[15px] leading-[1.8] transition-all duration-500 ${on ? "translate-y-0 opacity-100" : "translate-y-1 opacity-[0]"}`}
                        style={{ color: MUTED }}>{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- cta + footer ---------- */}
      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[1000px] rounded-[28px] px-8 py-14 text-center" style={{ background: INK }}>
          <h2 className="text-[30px] font-extrabold leading-tight tracking-[-0.02em] text-white sm:text-[40px]">
            Ready to run the whole business on one system?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15.5px] leading-relaxed text-white/60">
            Free trial, setup in a day, no credit card. Or ask us to walk you through the module that hurts most.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button onClick={() => external("/home38#signup")} data-testid="a13-final-cta"
              className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: `linear-gradient(135deg,#f7a52a,${BRAND_DARK})` }}>
              Start free trial <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={() => external("/home38#contact")}
              className="inline-flex items-center gap-2 rounded-full border px-7 py-4 text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{ borderColor: "rgba(255,255,255,.3)" }}>
              Talk to us
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t px-5 py-12 sm:px-8" style={{ borderColor: HAIR }}>
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-12 lg:gap-x-12">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2.5">
                <img src={`${process.env.PUBLIC_URL}/ffh-logo.png`} alt="FFH ERP" width="32" height="32" className="h-8 w-8 rounded-full" />
                <span className="text-[17px] font-extrabold tracking-tight">FFH|ERP</span>
              </div>
              <p className="mt-4 max-w-sm text-[14px] leading-relaxed" style={{ color: MUTED }}>
                Nine connected modules on one database, built in Chennai since 2012 and running in 20+ countries.
              </p>
              <div className="mt-5 flex gap-2">
                {["Instagram", "Facebook", "LinkedIn", "Twitter", "YouTube"].map((s) => {
                  const I = SOCIAL[s];
                  return (
                    <a key={s} href="#top" onClick={(e) => e.preventDefault()} aria-label={s}
                      className="flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 hover:-translate-y-0.5"
                      style={{ borderColor: HAIR, color: MUTED }}>
                      <I className="h-4 w-4" strokeWidth={1.8} />
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="lg:col-span-3">
              <h4 className="text-[12px] font-extrabold uppercase tracking-[0.14em]" style={{ color: MUTED }}>Product</h4>
              <ul className="mt-4 space-y-3 text-[14px]">
                {[["Live CRM", "/home38#top"], ["Services", "/home38#features"], ["Deployments", "/home38#modules"], ["Pricing", "/home38#pricing"]].map(([l, p]) => (
                  <li key={l}><button onClick={() => external(p)} className="transition hover:opacity-70" style={{ color: MUTED }}>{l}</button></li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-4">
              <h4 className="text-[12px] font-extrabold uppercase tracking-[0.14em]" style={{ color: MUTED }}>Contact</h4>
              <ul className="mt-4 space-y-3 text-[14px]" style={{ color: MUTED }}>
                <li className="flex items-start gap-2.5"><MapPin className="mt-0.5 h-4 w-4 shrink-0" style={{ color: BRAND }} />KrisKross Inc., Chennai, Tamil Nadu, India</li>
                <li className="flex items-center gap-2.5"><Mail className="h-4 w-4" style={{ color: BRAND }} /><a href="mailto:ffhsales@kriskrossinc.com" className="hover:underline">ffhsales@kriskrossinc.com</a></li>
                <li className="flex items-center gap-2.5"><Phone className="h-4 w-4" style={{ color: BRAND }} /><a href="tel:+914448585100" className="hover:underline">+91 44 4858 5100</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t pt-5 text-[12.5px]" style={{ borderColor: HAIR, color: MUTED }}>
            <span>© 2026 KrisKross Inc. All rights reserved.</span>
            <span className="flex items-center gap-2"><Star className="h-3.5 w-3.5" style={{ color: BRAND }} />4.9 / 5.0 — top-rated ERP platform, built in India</span>
          </div>
        </div>
      </footer>

      <AboutLayoutNav />
    </div>
  );
}
