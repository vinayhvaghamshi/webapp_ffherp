import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight, ArrowUpRight, Check, Facebook, Instagram, Linkedin, Mail, MapPin, Minus, Phone, Plus, Star, Twitter, Youtube,
} from "lucide-react";
import { ABOUT_15, FAQS, HOME36, HOME39_MORE, HOME39_SIGNUP, TEAM } from "../../mock";
import AboutLayoutNav from "./AboutLayoutNav";
import TwSignupForm from "./TwSignupForm";
import { Icon } from "./Trusted";
import { useGoTo } from "./crmStore";

// About layout 15 — my own design. It is built around what has been asked for
// across this project: real numbers up front, the exact sign-up block with its
// heading, sub-line, four bullets and rating, no decorative block that carries
// no information, and the conversion moment at the end. Warm paper base, Inter
// Tight headings, JetBrains Mono labels and a sticky spine down the left.
const PAPER = "#f7f4ef";
const INK = "#171a22";
const MUTED = "#5c6270";
const NAVY = "#101828";
const HAIR = "#e6e0d6";
const BRAND = "#ef7b23";
const BRAND_DARK = "#cf5f12";
const MONO = { fontFamily: '"JetBrains Mono", ui-monospace, monospace' };
const SOCIAL = { Instagram, Facebook, LinkedIn: Linkedin, Twitter, YouTube: Youtube };

// a left-hand label that sticks while its section scrolls past
function Spine({ n, label }) {
  return (
    <div className="lg:sticky lg:top-28">
      <span className="flex items-center gap-3 text-[11.5px] font-medium uppercase tracking-[0.18em]" style={{ ...MONO, color: BRAND_DARK }}>
        <span style={{ color: BRAND }}>{n}</span>{label}
      </span>
      <span className="mt-4 hidden h-px w-full lg:block" style={{ background: HAIR }} />
    </div>
  );
}

export default function About15() {
  const goTo = useGoTo();
  const [openFaq, setOpenFaq] = useState(0);
  const [activeMile, setActiveMile] = useState(0);
  const mileRefs = useRef([]);
  const A = ABOUT_15;

  useEffect(() => { document.title = "About FFH|ERP — built in Chennai since 2012 | FFH|ERP"; }, []);

  // highlight the milestone you are reading
  useEffect(() => {
    const onScroll = () => {
      const line = window.scrollY + window.innerHeight * 0.45;
      let idx = 0;
      mileRefs.current.forEach((el, i) => { if (el && el.offsetTop <= line) idx = i; });
      setActiveMile(idx);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const external = (path) => { window.location.assign(`${process.env.PUBLIC_URL}${path}`); };
  const jump = (e, t) => { e.preventDefault(); goTo(t); };
  const goto = (path) => (path.startsWith("#") ? window.location.assign(`${process.env.PUBLIC_URL}${path}`) : external(path));

  return (
    <div className="ffh-tw ffh-a15 min-h-screen" style={{ background: PAPER, color: INK, fontFamily: 'Inter, system-ui, sans-serif' }} data-testid="about15-page">
      {/* ---------- thin contact strip ---------- */}
      <div className="border-b px-5 py-2.5 sm:px-8" style={{ borderColor: HAIR, background: PAPER }} data-testid="a15-topbar">
        <div className="mx-auto flex max-w-[1320px] flex-wrap items-center gap-x-6 gap-y-1 text-[12.5px]" style={{ color: MUTED }}>
          <a href={`mailto:${A.topbar.email}`} className="inline-flex items-center gap-2 hover:opacity-70"><Mail className="h-3.5 w-3.5" style={{ color: BRAND }} />{A.topbar.email}</a>
          <a href="tel:+914448585100" className="inline-flex items-center gap-2 hover:opacity-70"><Phone className="h-3.5 w-3.5" style={{ color: BRAND }} />{A.topbar.phone}</a>
          <span className="inline-flex items-center gap-2"><MapPin className="h-3.5 w-3.5" style={{ color: BRAND }} />{A.topbar.place}</span>
        </div>
      </div>

      {/* ---------- nav ---------- */}
      <header className="sticky top-0 z-50 border-b backdrop-blur" style={{ borderColor: HAIR, background: "rgba(247,244,239,.88)" }} data-testid="a15-nav">
        <div className="mx-auto flex max-w-[1320px] items-center gap-6 px-5 py-4 sm:px-8">
          <a href="#top" onClick={(e) => jump(e, "#top")} className="flex items-center gap-2.5">
            <img src={`${process.env.PUBLIC_URL}/ffh-logo.png`} alt="FFH ERP" width="32" height="32" className="h-8 w-8 rounded-full" />
            <span className="text-[18px] font-bold tracking-[-0.02em]">FFH|ERP</span>
          </a>
          <nav className="ml-auto hidden items-center gap-1 lg:flex">
            {A.nav.map((l) => (
              <button key={l.label} onClick={() => goto(l.path)}
                className="rounded-full px-4 py-2 text-[14px] font-medium transition-colors duration-200 hover:bg-black/[.05]"
                style={{ color: MUTED }}>{l.label}</button>
            ))}
          </nav>
          <button onClick={(e) => jump(e, "#contact")} data-testid="a15-nav-cta"
            className="ml-auto rounded-full px-5 py-3 text-[13.5px] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 lg:ml-0"
            style={{ background: NAVY }}>
            Start free trial
          </button>
        </div>
      </header>

      {/* ---------- hero ---------- */}
      <section id="top" className="px-5 pb-16 pt-14 sm:px-8 sm:pt-20">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 text-[11.5px] font-medium uppercase tracking-[0.18em]" style={{ ...MONO, color: BRAND_DARK }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: BRAND }} />{A.hero.eyebrow}
            </span>
            <h1 className="mt-6 text-[9.5vw] font-bold leading-[1.02] tracking-[-0.035em] sm:text-[5.6vw] lg:text-[62px]" data-testid="a15-title"
              style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>
              {A.hero.title}
            </h1>
            <p className="mt-7 max-w-2xl text-[16.5px] leading-[1.75]" style={{ color: MUTED }}>{A.hero.lead}</p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <button onClick={(e) => jump(e, "#contact")} data-testid="a15-hero-cta"
                className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-[14.5px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: `linear-gradient(135deg,#f7a52a,${BRAND_DARK})`, boxShadow: "0 18px 40px -24px rgba(207,95,18,.85)" }}>
                {A.hero.main} <ArrowRight className="h-4 w-4" />
              </button>
              <button onClick={(e) => jump(e, "#numbers")}
                className="inline-flex items-center gap-2 rounded-full border bg-white px-7 py-4 text-[14.5px] font-semibold transition-all duration-300 hover:-translate-y-0.5"
                style={{ borderColor: HAIR, color: INK }}>
                {A.hero.alt} <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-[13.5px]" style={{ color: MUTED }}>
              <span className="flex text-amber-500">{[0, 1, 2, 3, 4].map((i) => <Star key={i} className="h-4 w-4 fill-current" />)}</span>
              <span>{A.hero.rating}</span>
            </div>
          </div>

          {/* the facts, in the order a buyer checks them */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-3xl bg-white" style={{ border: `1px solid ${HAIR}`, boxShadow: "0 50px 90px -70px rgba(23,26,34,.5)" }} data-testid="a15-facts">
              {A.hero.facts.map((f, i) => (
                <div key={f.k} className="flex items-baseline gap-4 px-6 py-4 transition-colors duration-300 hover:bg-black/[.02]"
                  style={{ borderTop: i === 0 ? "none" : `1px solid ${HAIR}` }}>
                  <span className="w-[92px] shrink-0 text-[11.5px] uppercase tracking-[0.12em]" style={{ ...MONO, color: "#9aa0ac" }}>{f.k}</span>
                  <strong className="text-[24px] font-bold tracking-[-0.02em]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>{f.v}</strong>
                  <span className="ml-auto text-right text-[12.5px]" style={{ color: MUTED }}>{f.d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- story with a sticky spine ---------- */}
      <section className="px-5 py-16 sm:px-8 sm:py-20" style={{ background: "#fff", borderTop: `1px solid ${HAIR}`, borderBottom: `1px solid ${HAIR}` }} data-testid="a15-story">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-4">
            <Spine n="01" label={A.story.eyebrow} />
            <h2 className="mt-6 text-[32px] font-bold leading-[1.1] tracking-[-0.03em] sm:text-[40px]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>
              {A.story.title}
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed" style={{ color: MUTED }}>{A.story.lead}</p>
          </div>
          <div className="lg:col-span-8">
            <ol className="relative" data-testid="a15-milestones">
              <span className="absolute left-[7px] top-2 bottom-2 w-px" style={{ background: HAIR }} aria-hidden="true" />
              {A.story.milestones.map((m, i) => {
                const on = activeMile === i;
                return (
                  <li key={m.y} ref={(el) => (mileRefs.current[i] = el)} data-testid={`a15-mile-${i}`}
                    className="relative pl-10 pb-10 last:pb-0 transition-opacity duration-300" style={{ opacity: on ? 1 : 0.72 }}>
                    <span className="absolute left-0 top-1.5 flex h-[15px] w-[15px] items-center justify-center rounded-full transition-all duration-300"
                      style={{ background: on ? BRAND : "#fff", border: `2px solid ${on ? BRAND : HAIR}` }} />
                    <div className="flex flex-wrap items-baseline gap-x-3">
                      <span className="text-[13px] font-semibold" style={{ ...MONO, color: BRAND_DARK }}>{m.y}</span>
                      <h3 className="text-[20px] font-bold tracking-[-0.02em]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>{m.t}</h3>
                    </div>
                    <p className="mt-2 max-w-2xl text-[15px] leading-[1.75]" style={{ color: MUTED }}>{m.d}</p>
                    <span className="mt-3 inline-block rounded-full px-3 py-1 text-[11.5px] font-medium" style={{ ...MONO, background: PAPER, color: BRAND_DARK, border: `1px solid ${HAIR}` }}>{m.tag}</span>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* ---------- numbers ---------- */}
      <section id="numbers" className="ffh-on-dark px-5 py-16 text-white sm:px-8 sm:py-20" style={{ background: NAVY }} data-testid="a15-numbers">
        <div className="mx-auto max-w-[1320px]">
          <span className="text-[11.5px] font-medium uppercase tracking-[0.18em]" style={{ ...MONO, color: "#f7a52a" }}>{A.numbers.eyebrow}</span>
          <h2 className="mt-5 max-w-2xl text-[32px] font-bold leading-[1.08] tracking-[-0.03em] sm:text-[40px]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>
            {A.numbers.title}
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
            {A.numbers.items.map((n) => (
              <div key={n.l} className="border-t pt-5" style={{ borderColor: "rgba(255,255,255,.16)" }}>
                <strong className="block text-[30px] font-bold leading-none tracking-[-0.03em]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>{n.v}</strong>
                <span className="mt-3 block text-[13px] font-semibold">{n.l}</span>
                <span className="mt-1 block text-[12px] leading-snug" style={{ color: "rgba(255,255,255,.55)" }}>{n.d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- how we work ---------- */}
      <section className="px-5 py-16 sm:px-8 sm:py-20" data-testid="a15-how">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-4">
            <Spine n="02" label={HOME39_MORE.how.eyebrow} />
            <h2 className="mt-6 text-[32px] font-bold leading-[1.1] tracking-[-0.03em] sm:text-[40px]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>
              Live in a day, <span style={{ color: BRAND }}>not a quarter.</span>
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed" style={{ color: MUTED }}>{HOME39_MORE.how.lead}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {HOME39_MORE.security.items.slice(0, 4).map((it) => (
                <span key={it.title} className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[12px] font-medium" style={{ border: `1px solid ${HAIR}`, color: MUTED }}>
                  <Icon name={it.icon} size={13} />{it.title}
                </span>
              ))}
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {HOME39_MORE.how.steps.map((s, i) => (
                <div key={s.n} className="rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-1" style={{ border: `1px solid ${HAIR}` }} data-testid={`a15-step-${i}`}>
                  <div className="flex items-center gap-3">
                    <span className="text-[12px] font-semibold" style={{ ...MONO, color: BRAND }}>{s.n}</span>
                    <span className="text-[11.5px] uppercase tracking-[0.14em]" style={{ ...MONO, color: "#9aa0ac" }}>{s.when}</span>
                  </div>
                  <h3 className="mt-3 text-[19px] font-bold tracking-[-0.02em]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>{s.title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.7]" style={{ color: MUTED }}>{s.text}</p>
                  <ul className="mt-4 space-y-1.5">
                    {s.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-[12.5px]" style={{ color: MUTED }}>
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: BRAND }} />{pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- what we will not do ---------- */}
      <section className="px-5 py-16 sm:px-8 sm:py-20" style={{ background: "#fff", borderTop: `1px solid ${HAIR}`, borderBottom: `1px solid ${HAIR}` }} data-testid="a15-nope">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-4">
            <Spine n="03" label={A.nope.eyebrow} />
            <h2 className="mt-6 text-[32px] font-bold leading-[1.1] tracking-[-0.03em] sm:text-[40px]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>{A.nope.title}</h2>
            <p className="mt-5 text-[15px] leading-relaxed" style={{ color: MUTED }}>{A.nope.lead}</p>
          </div>
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {A.nope.items.map((it, i) => (
                <div key={it.t} className="group rounded-2xl px-6 py-5 transition-all duration-300 hover:-translate-y-1" style={{ background: PAPER, border: `1px solid ${HAIR}` }} data-testid={`a15-nope-${i}`}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[13px] font-bold" style={{ border: `1px solid ${HAIR}`, color: BRAND_DARK }}>✕</span>
                    <h3 className="text-[17px] font-bold tracking-[-0.02em]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>{it.t}</h3>
                  </div>
                  <p className="mt-3 text-[13.5px] leading-[1.7]" style={{ color: MUTED }}>{it.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- team ---------- */}
      <section className="px-5 py-16 sm:px-8 sm:py-20" data-testid="a15-team">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-4">
            <Spine n="04" label={A.team.eyebrow} />
            <h2 className="mt-6 text-[32px] font-bold leading-[1.1] tracking-[-0.03em] sm:text-[40px]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>{A.team.title}</h2>
            <p className="mt-5 text-[15px] leading-relaxed" style={{ color: MUTED }}>{A.team.lead}</p>
          </div>
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {TEAM.map((m) => (
                <figure key={m.name} className="group flex gap-4 rounded-2xl bg-white p-4 transition-all duration-300 hover:-translate-y-1" style={{ border: `1px solid ${HAIR}` }} data-testid={`a15-person-${m.name.split(" ")[0].toLowerCase()}`}>
                  <img src={`https://i.pravatar.cc/200?img=${m.img}`} alt={m.name} width="200" height="200" loading="lazy"
                    className="h-[92px] w-[92px] shrink-0 rounded-xl object-cover" />
                  <figcaption>
                    <strong className="block text-[16px] font-bold tracking-[-0.02em]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>{m.name}</strong>
                    <span className="mt-0.5 block text-[12px]" style={{ ...MONO, color: BRAND_DARK }}>{m.role}</span>
                    <p className="mt-2 text-[13px] leading-[1.65]" style={{ color: MUTED }}>{m.bio}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- reviews ---------- */}
      <section className="px-5 py-16 sm:px-8 sm:py-20" style={{ background: "#fff", borderTop: `1px solid ${HAIR}`, borderBottom: `1px solid ${HAIR}` }} data-testid="a15-reviews">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-4">
            <Spine n="05" label={A.reviews.eyebrow} />
            <h2 className="mt-6 text-[32px] font-bold leading-[1.1] tracking-[-0.03em] sm:text-[40px]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>{A.reviews.title}</h2>
            <p className="mt-5 text-[15px] leading-relaxed" style={{ color: MUTED }}>{A.reviews.note}</p>
          </div>
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {HOME36.testimonials.slice(0, 6).map((t, i) => (
                <figure key={t.person + i} className="flex h-full flex-col rounded-2xl bg-white p-6" style={{ border: `1px solid ${HAIR}` }} data-testid={`a15-review-${i}`}>
                  <span className="flex gap-0.5 text-amber-500">{[0, 1, 2, 3, 4].map((k) => <Star key={k} className="h-3.5 w-3.5 fill-current" />)}</span>
                  <blockquote className="mt-4 flex-1 text-[14.5px] leading-[1.75]" style={{ color: "#333a47" }}>“{t.text || t.quote}”</blockquote>
                  <figcaption className="mt-5 flex items-center gap-3 pt-4" style={{ borderTop: `1px solid ${HAIR}` }}>
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
        </div>
      </section>

      {/* ---------- faq ---------- */}
      <section className="px-5 py-16 sm:px-8 sm:py-20" data-testid="a15-faq">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-4">
            <Spine n="06" label={A.faq.eyebrow} />
            <h2 className="mt-6 text-[32px] font-bold leading-[1.1] tracking-[-0.03em] sm:text-[40px]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>{A.faq.title}</h2>
            <p className="mt-5 text-[15px] leading-relaxed" style={{ color: MUTED }}>
              Anything else? Call <a href="tel:+914448585100" className="font-semibold underline decoration-2 underline-offset-4" style={{ color: BRAND_DARK }}>+91 44 4858 5100</a> or use the chat.
            </p>
          </div>
          <div className="lg:col-span-8">
            {FAQS.map((f, i) => {
              const on = openFaq === i;
              return (
                <div key={f.q} style={{ borderTop: `1px solid ${HAIR}` }} data-testid={`a15-faq-${i}`}>
                  <button onClick={() => setOpenFaq(on ? -1 : i)} aria-expanded={on} className="flex w-full items-center gap-5 py-5 text-left">
                    <span className="text-[12px] font-semibold" style={{ ...MONO, color: on ? BRAND : "#9aa0ac" }}>{String(i + 1).padStart(2, "0")}</span>
                    <span className="flex-1 text-[16px] font-semibold tracking-[-0.01em]">{f.q}</span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300"
                      style={{ background: on ? BRAND : "transparent", border: `1px solid ${on ? BRAND : HAIR}`, color: on ? "#fff" : INK }}>
                      {on ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  <div className="grid transition-[grid-template-rows] duration-500 ease-out" style={{ gridTemplateRows: on ? "1fr" : "0fr" }}>
                    <div className="overflow-hidden">
                      <p className={`pb-6 pl-[34px] pr-10 text-[14.5px] leading-[1.8] transition-all duration-500 ${on ? "translate-y-0 opacity-100" : "translate-y-1 opacity-[0]"}`}
                        style={{ color: MUTED }}>{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- the sign-up block, exactly as asked for ---------- */}
      <section id="contact" className="px-5 py-16 sm:px-8 sm:py-20" style={{ background: "#fff", borderTop: `1px solid ${HAIR}` }} data-testid="a15-signup">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-start gap-y-12 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-6">
            <Spine n="07" label="Get started" />
            <h2 className="mt-6 text-[36px] font-bold leading-[1.06] tracking-[-0.035em] sm:text-[46px]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>
              {A.signup.title}
            </h2>
            <p className="mt-4 text-[15px] font-semibold" style={{ color: BRAND_DARK }}>{A.signup.sub}</p>
            <ul className="mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              {A.signup.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-[15px]" style={{ color: "#4a5568" }}>
                  <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: BRAND }} />{b}
                </li>
              ))}
            </ul>
            <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {HOME39_SIGNUP.included.map((it) => (
                <div key={it.title} className="flex gap-3 rounded-2xl px-4 py-3.5" style={{ background: PAPER, border: `1px solid ${HAIR}` }}>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white" style={{ color: BRAND_DARK, border: `1px solid ${HAIR}` }}>
                    <Icon name={it.icon} size={16} />
                  </span>
                  <span>
                    <strong className="block text-[13.5px] font-semibold">{it.title}</strong>
                    <span className="text-[12.5px] leading-snug" style={{ color: MUTED }}>{it.text}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6 lg:pl-10">
            <TwSignupForm variant="light" spacing="roomy" glow title="Create your account" />
          </div>
        </div>
      </section>

      {/* ---------- footer ---------- */}
      <footer className="px-5 py-14 sm:px-8" style={{ background: NAVY }} data-testid="a15-footer">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-12">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2.5">
                <img src={`${process.env.PUBLIC_URL}/ffh-logo.png`} alt="FFH ERP" width="34" height="34" className="h-[34px] w-[34px] rounded-full" />
                <span className="text-[19px] font-bold tracking-[-0.02em] text-white">FFH|ERP</span>
              </div>
              <p className="mt-4 max-w-sm text-[13.5px] leading-relaxed text-white/60">{A.footer.blurb}</p>
              <div className="mt-5 flex gap-2">
                {["Instagram", "Facebook", "LinkedIn", "Twitter", "YouTube"].map((s) => {
                  const I = SOCIAL[s];
                  return (
                    <a key={s} href="#top" onClick={(e) => e.preventDefault()} aria-label={s}
                      className="flex h-9 w-9 items-center justify-center rounded-full text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:text-white"
                      style={{ background: "rgba(255,255,255,.08)" }}>
                      <I className="h-4 w-4" strokeWidth={1.8} />
                    </a>
                  );
                })}
              </div>
            </div>
            {A.footer.columns.map((col) => (
              <div key={col.title} className="lg:col-span-2">
                <h4 className="text-[11.5px] font-semibold uppercase tracking-[0.14em]" style={{ ...MONO, color: "#f7a52a" }}>{col.title}</h4>
                <ul className="mt-4 space-y-2.5">
                  {col.items.map(([label, path]) => (
                    <li key={label}><button onClick={() => goto(path)} className="text-left text-[13.5px] text-white/60 transition hover:text-white">{label}</button></li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="lg:col-span-1" />
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t pt-6 text-[12.5px] text-white/45" style={{ borderColor: "rgba(255,255,255,.14)" }}>
            <span>{A.footer.legal}</span>
            <span style={{ ...MONO }}>14 years · 2.5K+ active users · 20+ countries</span>
          </div>
        </div>
      </footer>

      <AboutLayoutNav dark />
    </div>
  );
}
