import React, { useEffect, useState } from "react";
import {
  ArrowRight, ArrowUpRight, Check, Facebook, Instagram, Linkedin, Mail, MapPin, Minus, Phone, Plus, Star, Twitter, Youtube,
} from "lucide-react";
import { ABOUT_18, ABOUT_12, ABOUT_15, FAQS, HOME36, HOME39_MORE, HOME39_SIGNUP, TEAM } from "../../mock";
import AboutLayoutNav from "./AboutLayoutNav";
import TwSignupForm from "./TwSignupForm";
import { Icon } from "./Trusted";
import { useGoTo } from "./crmStore";

// About layout 18 — the flagship. Everything an IT company's About page is asked
// for, in the order a buyer reads it: positioning and proof, mission and vision,
// what we sell and the services around it, the technology, security and
// compliance, the story, leadership, culture and careers, customer proof, the
// questions that block a decision, and finally the sign-up block. A sticky
// sub-nav shows where you are.
const INK = "#0b1a2b";
const MUTED = "#54606f";
const PAPER = "#f8f6f3";
const HAIR = "#e6e1da";
const BRAND = "#ef7b23";
const BRAND_DARK = "#cf5f12";
const MONO = { fontFamily: '"JetBrains Mono", ui-monospace, monospace' };
const SOCIAL = { Instagram, Facebook, LinkedIn: Linkedin, Twitter, YouTube: Youtube };

export default function About18() {
  const goTo = useGoTo();
  const [here, setHere] = useState(ABOUT_18.nav[0].id);
  const [openFaq, setOpenFaq] = useState(0);
  const A = ABOUT_18;

  useEffect(() => { document.title = "About FFH|ERP — the operating system for growing businesses | FFH|ERP"; }, []);

  // sub-nav scroll spy
  useEffect(() => {
    const onScroll = () => {
      const line = window.scrollY + window.innerHeight * 0.35;
      let cur = A.nav[0].id;
      for (const n of A.nav) {
        const el = document.getElementById(n.id);
        if (el && el.offsetTop <= line) cur = n.id;
      }
      setHere(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [A.nav]);

  const external = (path) => { window.location.assign(`${process.env.PUBLIC_URL}${path}`); };
  const jump = (e, t) => { e.preventDefault(); goTo(t); };
  const goto = (path) => (path.startsWith("#") ? external(path) : external(path));

  return (
    <div className="ffh-tw ffh-a18 min-h-screen bg-white" style={{ color: INK, fontFamily: 'Inter, system-ui, sans-serif' }} data-testid="about18-page">
      {/* ---------- nav ---------- */}
      <header className="sticky top-0 z-50 border-b bg-white/94 backdrop-blur" style={{ borderColor: HAIR }} data-testid="a18-nav">
        <div className="mx-auto flex max-w-[1300px] items-center gap-6 px-5 py-3.5 sm:px-8">
          <a href="#top" onClick={(e) => jump(e, "#top")} className="flex items-center gap-2.5">
            <img src={`${process.env.PUBLIC_URL}/ffh-logo.png`} alt="FFH ERP" width="30" height="30" className="h-[30px] w-[30px] rounded-full" />
            <span className="text-[17px] font-extrabold tracking-[-0.02em]">FFH|ERP</span>
          </a>
          <nav className="ml-auto hidden items-center gap-6 lg:flex">
            <button onClick={(e) => jump(e, "#top")} className="text-[13.5px] font-medium transition-opacity hover:opacity-60" style={{ color: MUTED }}>Home</button>
            <button onClick={() => external("/home39")} className="text-[13.5px] font-medium transition-opacity hover:opacity-60" style={{ color: MUTED }}>Product</button>
            <button onClick={() => external("/home39#pricing")} className="text-[13.5px] font-medium transition-opacity hover:opacity-60" style={{ color: MUTED }}>Pricing</button>
            <span className="text-[13.5px] font-semibold" style={{ color: INK }}>About</span>
          </nav>
          <button onClick={() => external(A.cta.path)} data-testid="a18-cta"
            className="ml-auto rounded-full px-5 py-2.5 text-[13.5px] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 lg:ml-0"
            style={{ background: INK }}>
            {A.cta.label}
          </button>
        </div>

        {/* sub-nav: where you are in the page */}
        <div className="border-t" style={{ borderColor: HAIR }}>
          <div className="mx-auto flex max-w-[1300px] gap-1 overflow-x-auto px-3 py-1.5 sm:px-6" data-testid="a18-subnav">
            {A.nav.map((n) => (
              <button key={n.id} onClick={(e) => jump(e, `#${n.id}`)}
                className="whitespace-nowrap rounded-full px-3.5 py-1.5 text-[12.5px] font-medium transition-colors duration-200"
                style={here === n.id ? { background: PAPER, color: BRAND_DARK } : { color: "#8a94a3" }}>
                {n.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* ---------- hero ---------- */}
      <section id="top" className="px-5 pb-14 pt-14 sm:px-8 sm:pt-18">
        <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-[0.18em]" style={{ ...MONO, color: BRAND_DARK }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: BRAND }} />{A.hero.eyebrow}
            </span>
            <h1 className="mt-6 text-[9vw] font-extrabold leading-[1.03] tracking-[-0.04em] sm:text-[5.4vw] lg:text-[56px]" data-testid="a18-title"
              style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>
              {A.hero.title}
            </h1>
            <p className="mt-7 max-w-2xl text-[16.5px] leading-[1.75]" style={{ color: MUTED }}>{A.hero.lead}</p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <button onClick={(e) => jump(e, "#signup")} data-testid="a18-hero-cta"
                className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-[14.5px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: `linear-gradient(135deg,#f7a52a,${BRAND_DARK})`, boxShadow: "0 20px 44px -26px rgba(207,95,18,.9)" }}>
                {A.hero.primary} <ArrowRight className="h-4 w-4" />
              </button>
              <button onClick={() => external("/home39#contact")}
                className="inline-flex items-center gap-2 rounded-full border bg-white px-7 py-4 text-[14.5px] font-semibold transition-all duration-300 hover:-translate-y-0.5"
                style={{ borderColor: HAIR, color: INK }}>
                {A.hero.secondary}
              </button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-[13.5px]" style={{ color: MUTED }}>
              <span className="flex text-amber-500">{[0, 1, 2, 3, 4].map((i) => <Star key={i} className="h-4 w-4 fill-current" />)}</span>
              <span><strong style={{ color: INK }}>4.9 / 5.0</strong> — Top-rated ERP platform, built in India for growing businesses.</span>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl" style={{ background: HAIR, border: `1px solid ${HAIR}` }} data-testid="a18-proof">
              {A.proof.map((p) => (
                <div key={p.l} className="bg-white px-5 py-6 transition-colors duration-300 hover:bg-[#fdfbf9]">
                  <strong className="block text-[26px] font-extrabold leading-none tracking-[-0.03em]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>{p.v}</strong>
                  <span className="mt-2.5 block text-[12.5px] leading-snug" style={{ color: MUTED }}>{p.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- mission & vision ---------- */}
      <section className="px-5 py-14 sm:px-8 sm:py-18" style={{ background: PAPER, borderTop: `1px solid ${HAIR}`, borderBottom: `1px solid ${HAIR}` }} data-testid="a18-mission">
        <div className="mx-auto max-w-[1300px]">
          <span className="text-[11.5px] font-semibold uppercase tracking-[0.18em]" style={{ ...MONO, color: BRAND_DARK }}>{A.mission.eyebrow}</span>
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {[A.mission.mission, A.mission.vision].map((m, i) => (
              <div key={m.t} className="rounded-3xl bg-white p-7 transition-transform duration-300 hover:-translate-y-1" style={{ border: `1px solid ${HAIR}` }} data-testid={`a18-mv-${i}`}>
                <h2 className="text-[22px] font-bold tracking-[-0.02em]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>{m.t}</h2>
                <p className="mt-4 text-[15px] leading-[1.8]" style={{ color: MUTED }}>{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- what we do ---------- */}
      <section id="what" className="px-5 py-16 sm:px-8 sm:py-20" data-testid="a18-what">
        <div className="mx-auto max-w-[1300px]">
          <span className="text-[11.5px] font-semibold uppercase tracking-[0.18em]" style={{ ...MONO, color: BRAND_DARK }}>{A.what.eyebrow}</span>
          <h2 className="mt-5 max-w-3xl text-[32px] font-extrabold leading-[1.08] tracking-[-0.035em] sm:text-[42px]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>
            {A.what.title}
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-x-16">
            <div className="lg:col-span-5">
              <h3 className="text-[17px] font-bold tracking-[-0.02em]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>{A.what.product.t}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {A.what.product.items.map((it) => (
                  <span key={it} className="rounded-full bg-white px-3.5 py-2 text-[13px] font-medium transition-all duration-300 hover:-translate-y-0.5"
                    style={{ border: `1px solid ${HAIR}`, color: INK }}>{it}</span>
                ))}
              </div>
              <div className="mt-7 rounded-2xl p-5" style={{ background: PAPER, border: `1px solid ${HAIR}` }}>
                <p className="text-[13.5px] leading-relaxed" style={{ color: MUTED }}>
                  <strong style={{ color: INK }}>One database.</strong> Sales, stock, accounts, AMC and tickets read the same records, so the figures cannot disagree.
                </p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <h3 className="text-[17px] font-bold tracking-[-0.02em]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>{A.what.services.t}</h3>
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {A.what.services.items.map((s, i) => (
                  <div key={s.t} className="rounded-2xl bg-white p-5 transition-all duration-300 hover:-translate-y-1" style={{ border: `1px solid ${HAIR}` }} data-testid={`a18-service-${i}`}>
                    <strong className="block text-[14.5px] font-bold tracking-[-0.01em]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>{s.t}</strong>
                    <p className="mt-2 text-[13.5px] leading-[1.7]" style={{ color: MUTED }}>{s.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- technology ---------- */}
      <section id="technology" className="px-5 py-16 sm:px-8 sm:py-20" style={{ background: PAPER, borderTop: `1px solid ${HAIR}`, borderBottom: `1px solid ${HAIR}` }} data-testid="a18-technology">
        <div className="mx-auto max-w-[1300px]">
          <span className="text-[11.5px] font-semibold uppercase tracking-[0.18em]" style={{ ...MONO, color: BRAND_DARK }}>{A.technology.eyebrow}</span>
          <h2 className="mt-5 max-w-3xl text-[32px] font-extrabold leading-[1.08] tracking-[-0.035em] sm:text-[42px]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>
            {A.technology.title}
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {A.technology.items.map((t) => (
              <div key={t.t} className="rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-1" style={{ border: `1px solid ${HAIR}` }}>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: PAPER, border: `1px solid ${HAIR}`, color: BRAND_DARK }}>
                  <Icon name="Cpu" size={18} />
                </span>
                <h3 className="mt-5 text-[16px] font-bold tracking-[-0.02em]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>{t.t}</h3>
                <p className="mt-2 text-[13.5px] leading-[1.7]" style={{ color: MUTED }}>{t.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- security ---------- */}
      <section id="security" className="ffh-on-dark px-5 py-16 text-white sm:px-8 sm:py-20" style={{ background: INK }} data-testid="a18-security">
        <div className="mx-auto max-w-[1300px]">
          <span className="text-[11.5px] font-semibold uppercase tracking-[0.18em]" style={{ ...MONO, color: "#f7a52a" }}>{A.security.eyebrow}</span>
          <h2 className="mt-5 max-w-3xl text-[32px] font-extrabold leading-[1.08] tracking-[-0.035em] sm:text-[42px]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>
            {A.security.title}
          </h2>
          <p className="mt-5 max-w-2xl text-[15.5px] leading-relaxed text-white/65">{A.security.lead}</p>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {HOME39_MORE.security.items.map((it) => (
              <div key={it.title} className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.12)" }}>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: "rgba(239,123,35,.16)", color: BRAND }}>
                  <Icon name={it.icon} size={18} />
                </span>
                <h3 className="mt-5 text-[16px] font-bold text-white" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>{it.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-white/60">{it.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- story ---------- */}
      <section id="story" className="px-5 py-16 sm:px-8 sm:py-20" data-testid="a18-story">
        <div className="mx-auto max-w-[1300px]">
          <span className="text-[11.5px] font-semibold uppercase tracking-[0.18em]" style={{ ...MONO, color: BRAND_DARK }}>{A.story.eyebrow}</span>
          <div className="mt-5 grid grid-cols-1 gap-y-6 lg:grid-cols-12 lg:gap-x-16">
            <h2 className="text-[32px] font-extrabold leading-[1.08] tracking-[-0.035em] sm:text-[42px] lg:col-span-7" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>
              {A.story.title}
            </h2>
            <p className="text-[15.5px] leading-[1.75] lg:col-span-5" style={{ color: MUTED }}>{A.story.lead}</p>
          </div>
          <ol className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5" data-testid="a18-milestones">
            {ABOUT_15.story.milestones.map((m, i) => (
              <li key={m.y} className="border-t pt-5" style={{ borderColor: HAIR }} data-testid={`a18-mile-${i}`}>
                <span className="text-[13px] font-bold" style={{ ...MONO, color: BRAND }}>{m.y}</span>
                <h3 className="mt-3 text-[16px] font-bold leading-snug tracking-[-0.02em]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>{m.t}</h3>
                <p className="mt-2 text-[13px] leading-[1.65]" style={{ color: MUTED }}>{m.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- leadership ---------- */}
      <section id="leadership" className="px-5 py-16 sm:px-8 sm:py-20" style={{ background: PAPER, borderTop: `1px solid ${HAIR}`, borderBottom: `1px solid ${HAIR}` }} data-testid="a18-leadership">
        <div className="mx-auto max-w-[1300px]">
          <span className="text-[11.5px] font-semibold uppercase tracking-[0.18em]" style={{ ...MONO, color: BRAND_DARK }}>{A.leadership.eyebrow}</span>
          <div className="mt-5 grid grid-cols-1 gap-y-5 lg:grid-cols-12 lg:gap-x-16">
            <h2 className="text-[32px] font-extrabold leading-[1.08] tracking-[-0.035em] sm:text-[42px] lg:col-span-6" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>
              {A.leadership.title}
            </h2>
            <p className="text-[15.5px] leading-[1.75] lg:col-span-6" style={{ color: MUTED }}>{A.leadership.lead}</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((m) => (
              <figure key={m.name} className="group rounded-2xl bg-white p-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg" style={{ border: `1px solid ${HAIR}` }} data-testid={`a18-person-${m.name.split(" ")[0].toLowerCase()}`}>
                <img src={`https://i.pravatar.cc/400?img=${m.img}`} alt={m.name} width="400" height="400" loading="lazy"
                  className="h-[190px] w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
                <figcaption className="mt-4">
                  <strong className="block text-[16px] font-bold tracking-[-0.02em]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>{m.name}</strong>
                  <span className="mt-1 block text-[11.5px]" style={{ ...MONO, color: BRAND_DARK }}>{m.role}</span>
                  <p className="mt-2.5 text-[13px] leading-[1.65]" style={{ color: MUTED }}>{m.bio}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- culture & careers ---------- */}
      <section id="careers" className="px-5 py-16 sm:px-8 sm:py-20" data-testid="a18-careers">
        <div className="mx-auto max-w-[1300px]">
          <span className="text-[11.5px] font-semibold uppercase tracking-[0.18em]" style={{ ...MONO, color: BRAND_DARK }}>{A.culture.eyebrow}</span>
          <h2 className="mt-5 max-w-3xl text-[32px] font-extrabold leading-[1.08] tracking-[-0.035em] sm:text-[42px]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>
            {A.culture.title}
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
                {ABOUT_12.culture.values.map((v, i) => (
                  <div key={v.n} className="border-t pt-5" style={{ borderColor: HAIR }} data-testid={`a18-value-${i}`}>
                    <span className="text-[12px] font-semibold" style={{ ...MONO, color: BRAND }}>{v.n}</span>
                    <h3 className="mt-2.5 text-[17px] font-bold tracking-[-0.02em]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>{v.title}</h3>
                    <p className="mt-2 text-[13.5px] leading-[1.7]" style={{ color: MUTED }}>{v.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="rounded-3xl p-6" style={{ background: PAPER, border: `1px solid ${HAIR}` }} data-testid="a18-hiring">
                <h3 className="text-[19px] font-bold tracking-[-0.02em]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>We are hiring in Chennai</h3>
                <p className="mt-3 text-[13.5px] leading-[1.7]" style={{ color: MUTED }}>
                  Engineers, implementation leads and support specialists who like talking to the people using the software they build.
                </p>
                <a href="mailto:ffhsales@kriskrossinc.com" className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-3 text-[13.5px] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
                  style={{ background: INK }}>
                  Write to us <ArrowUpRight className="h-4 w-4" />
                </a>
                <div className="mt-7 space-y-4 border-t pt-5" style={{ borderColor: HAIR }}>
                  {A.offices.map((o) => (
                    <div key={o.city} className="flex gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0" style={{ color: BRAND }} />
                      <span>
                        <strong className="block text-[13.5px] font-semibold">{o.city}</strong>
                        <span className="block text-[12px]" style={{ color: MUTED }}>{o.role}</span>
                        <span className="block text-[11.5px]" style={{ ...MONO, color: "#9aa3b2" }}>{o.d}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- reviews ---------- */}
      <section className="px-5 py-16 sm:px-8 sm:py-20" style={{ background: PAPER, borderTop: `1px solid ${HAIR}`, borderBottom: `1px solid ${HAIR}` }} data-testid="a18-reviews">
        <div className="mx-auto max-w-[1300px]">
          <span className="text-[11.5px] font-semibold uppercase tracking-[0.18em]" style={{ ...MONO, color: BRAND_DARK }}>{A.reviews.eyebrow}</span>
          <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
            <h2 className="max-w-2xl text-[32px] font-extrabold leading-[1.08] tracking-[-0.035em] sm:text-[42px]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>
              {A.reviews.title}
            </h2>
            <span className="text-[12.5px]" style={{ color: MUTED }}>{A.reviews.note}</span>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {HOME36.testimonials.slice(0, 6).map((t, i) => (
              <figure key={t.person + i} className="flex h-full flex-col rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
                style={{ border: `1px solid ${HAIR}` }} data-testid={`a18-review-${i}`}>
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

      {/* ---------- recognition ---------- */}
      <section className="px-5 py-14 sm:px-8 sm:py-16" data-testid="a18-recognition">
        <div className="mx-auto max-w-[1300px]">
          <span className="text-[11.5px] font-semibold uppercase tracking-[0.18em]" style={{ ...MONO, color: BRAND_DARK }}>{A.recognition.eyebrow}</span>
          <h2 className="mt-4 text-[24px] font-bold tracking-[-0.025em]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>{A.recognition.title}</h2>
          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl sm:grid-cols-3 lg:grid-cols-5" style={{ background: HAIR, border: `1px solid ${HAIR}` }}>
            {(HOME36.brands || []).map((b) => (
              <div key={b.name} className="flex items-center justify-center bg-white px-4 py-6 text-center transition-colors duration-300 hover:bg-[#fdfbf9]">
                <span className="text-[14px] font-bold uppercase leading-tight tracking-[0.08em]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif', color: "#8a94a3" }}>
                  {(b.lines || [b.name]).join(" ")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- faq ---------- */}
      <section className="px-5 py-16 sm:px-8 sm:py-20" style={{ background: PAPER, borderTop: `1px solid ${HAIR}`, borderBottom: `1px solid ${HAIR}` }} data-testid="a18-faq">
        <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-4">
            <span className="text-[11.5px] font-semibold uppercase tracking-[0.18em]" style={{ ...MONO, color: BRAND_DARK }}>{A.faq.eyebrow}</span>
            <h2 className="mt-5 text-[32px] font-extrabold leading-[1.08] tracking-[-0.035em] sm:text-[40px]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>{A.faq.title}</h2>
            <p className="mt-5 text-[15px] leading-relaxed" style={{ color: MUTED }}>
              Or call <a href="tel:+914448585100" className="font-semibold underline decoration-2 underline-offset-4" style={{ color: BRAND_DARK }}>+91 44 4858 5100</a>.
            </p>
          </div>
          <div className="lg:col-span-8">
            {FAQS.map((f, i) => {
              const on = openFaq === i;
              return (
                <div key={f.q} style={{ borderTop: `1px solid ${HAIR}` }} data-testid={`a18-faq-${i}`}>
                  <button onClick={() => setOpenFaq(on ? -1 : i)} aria-expanded={on} className="flex w-full items-center gap-5 py-5 text-left">
                    <span className="text-[12px] font-semibold" style={{ ...MONO, color: on ? BRAND : "#9aa3b2" }}>{String(i + 1).padStart(2, "0")}</span>
                    <span className="flex-1 text-[16.5px] font-bold tracking-[-0.01em]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>{f.q}</span>
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

      {/* ---------- sign up ---------- */}
      <section id="signup" className="px-5 py-16 sm:px-8 sm:py-20" data-testid="a18-signup">
        <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-start gap-y-12 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-6">
            <h2 className="text-[36px] font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-[46px]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>
              {A.signup.title}
            </h2>
            <p className="mt-4 text-[15px] font-semibold" style={{ color: BRAND_DARK }}>{A.signup.sub}</p>
            <ul className="mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              {A.signup.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-[15px]" style={{ color: "#44505f" }}>
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
      <footer className="px-5 py-14 sm:px-8" style={{ background: INK }} data-testid="a18-footer">
        <div className="mx-auto max-w-[1300px]">
          <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-12">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2.5">
                <img src={`${process.env.PUBLIC_URL}/ffh-logo.png`} alt="FFH ERP" width="34" height="34" className="h-[34px] w-[34px] rounded-full" />
                <span className="text-[19px] font-extrabold tracking-[-0.02em] text-white">FFH|ERP</span>
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
              <div className="mt-6 space-y-2 text-[12.5px] text-white/55">
                <p className="flex items-center gap-2"><Mail className="h-3.5 w-3.5" style={{ color: BRAND }} />ffhsales@kriskrossinc.com</p>
                <p className="flex items-center gap-2"><Phone className="h-3.5 w-3.5" style={{ color: BRAND }} />+91 44 4858 5100</p>
                <p className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" style={{ color: BRAND }} />KrisKross Inc., Chennai, India</p>
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
            <div className="lg:col-span-2">
              <h4 className="text-[11.5px] font-semibold uppercase tracking-[0.14em]" style={{ ...MONO, color: "#f7a52a" }}>Offices</h4>
              <ul className="mt-4 space-y-3">
                {A.offices.map((o) => (
                  <li key={o.city} className="text-[13px] text-white/60">
                    <strong className="block text-white/80">{o.city}</strong>{o.role}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t pt-6 text-[12.5px] text-white/45" style={{ borderColor: "rgba(255,255,255,.14)" }}>
            <span>{A.footer.legal}</span>
            <span style={MONO}>14 years · 2.5K+ active users · 20+ countries</span>
          </div>
        </div>
      </footer>

      <AboutLayoutNav dark />
    </div>
  );
}
