import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  ArrowRight, ArrowUpRight, BadgeCheck, Check, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube,
} from "lucide-react";
import { ABOUT_3, ABOUT_6, ABOUT_10, ABOUT_20, ABOUT_ALT, ABOUT_US, TEAM, WHY_FEATURES } from "../../mock";
import HomeLayoutNav from "./HomeLayoutNav";
import SiteHeader from "./SiteHeader";
import { Icon } from "./Trusted";
import SupportChat from "./SupportChat";
import { scrollToId, useGoTo } from "./crmStore";

// About layout 20 — the content of layouts 3, 6 and 10 in layout 39's logo theme:
// same palette, Poppins headings, cream/soft bands, the grid-line backdrop, the
// logo motif, the gradient rule and the reveal animations. The page runs hero →
// what sets us apart → mission and vision → leadership (signed by four people) →
// certified, compliant, accountable → how we got here with the five-turn journey
// → why → advertisement → footer.
const BRAND = "#ef7b23";
const BRAND_DARK = "#cf5f12";
const NAVY = "#16283c";
const CREAM = "#fdeedd";
const SOFT = "#fff6ec";
const LINE = "#f4e2ce";
const GRAD = "bg-gradient-to-r from-[#f7a52a] to-[#f0452c]";
const GRAD_TEXT = "bg-gradient-to-r from-[#f7a52a] to-[#f0452c] bg-clip-text text-transparent";
const SOCIAL = { Instagram, Facebook, LinkedIn: Linkedin, Twitter, YouTube: Youtube };
// a handwriting-ish face for the signatures, from the fonts already loaded
const SIGNATURE = { fontFamily: '"Newsreader", Georgia, serif', fontStyle: "italic", fontWeight: 500 };

const Motif = ({ className = "" }) => (
  <span className={`ffh-h39-motif ${className}`} aria-hidden="true"><i /><i /><i /><i /></span>
);

const GridLines = () => (
  <div className="pointer-events-none absolute inset-0" aria-hidden="true">
    <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(to right, ${LINE} 1px, transparent 1px)`, backgroundSize: "25% 100%" }} />
    <div className="absolute inset-x-0 top-[62%] h-px" style={{ background: LINE }} />
  </div>
);

const Label = ({ children }) => (
  <span className="font-mono text-[11px] font-medium uppercase tracking-[0.22em]" style={{ color: BRAND_DARK }}>_{children}</span>
);

const Rule = () => <span className="mt-5 block h-[3px] w-16 rounded-full" style={{ background: `linear-gradient(90deg, #f7a52a, #f0452c)` }} />;

const Counter = ({ value }) => {
  const ref = useRef(null);
  const [n, setN] = useState(0);
  const text = String(value);
  const num = parseFloat(text.replace(/[^0-9.]/g, ""));
  const suffix = text.replace(/[0-9.,]/g, "");
  const decimals = (text.split(".")[1] || "").replace(/[^0-9]/g, "").length;
  useEffect(() => {
    const el = ref.current;
    if (!el || Number.isNaN(num)) return;
    let raf = 0;
    const run = () => {
      const t0 = performance.now();
      const step = (t) => {
        const p = Math.min(1, (t - t0) / 1100);
        setN(num * (1 - Math.pow(1 - p, 3)));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };
    const io = new IntersectionObserver((e) => { if (e[0].isIntersecting) { run(); io.disconnect(); } }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [num]);
  return <span ref={ref}>{Number.isNaN(num) ? text : `${n.toFixed(decimals)}${suffix}`}</span>;
};

export default function About20() {
  const goTo = useGoTo();
  const location = useLocation();
  const A = ABOUT_20;

  useEffect(() => { document.title = "About FFH|ERP — the system businesses run on | FFH|ERP"; }, []);

  // Landing here from the home page with a section target (the header sets state.scrollTo).
  useEffect(() => {
    const id = location.state?.scrollTo;
    if (!id) return;
    const t = setTimeout(() => scrollToId(id), 160);
    return () => clearTimeout(t);
  }, [location.state]);

  const go = (e, t) => { e.preventDefault(); goTo(t); };
  const external = (path) => { window.location.assign(`${process.env.PUBLIC_URL}${path}`); };
  const open = (path) => (path.startsWith("#") ? goTo(path) : external(path));

  return (
    <div className="ffh-tw ffh-h39 ffh-logo-theme min-h-screen bg-white font-[Poppins] antialiased" data-testid="about20-page">
      {/* the site navigator — the same header the home page uses */}
      <SiteHeader />

      {/* ---------- hero ---------- */}
      <section id="top" className="relative overflow-hidden px-5 pb-14 pt-16 sm:px-8 sm:pt-20">
        <GridLines />
        <div className="relative mx-auto max-w-[1400px]">
          <div className="reveal">
            <span className="flex items-center gap-3">
              <img src={`${process.env.PUBLIC_URL}/ffh-logo.png`} alt="" width="52" height="52" className="h-[52px] w-[52px] rounded-full" />
              <Label>About FFH|ERP</Label>
            </span>
            <h1 className="mt-7 max-w-4xl text-[10vw] font-semibold leading-[1.03] tracking-[-0.04em] sm:text-[6.4vw] lg:text-[64px]" data-testid="a20-title" style={{ color: NAVY }}>
              {ABOUT_3.title} <span className={GRAD_TEXT}>{ABOUT_3.titleAccent}</span>
            </h1>
            <Rule />
            <p className="mt-7 max-w-2xl text-[16px] leading-relaxed" style={{ color: "#4a5568" }}>{ABOUT_3.lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={(e) => go(e, "#signup")} data-testid="a20-hero-cta"
                className={`inline-flex items-center gap-2 rounded-full ${GRAD} px-6 py-3.5 text-[14.5px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5`}>
                Try free for 7 days <ArrowRight className="h-4 w-4" />
              </button>
              <button onClick={(e) => go(e, "#journey")}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[14.5px] font-semibold transition-all duration-300 hover:-translate-y-0.5"
                style={{ color: NAVY, border: `1px solid ${LINE}` }}>
                How we got here
              </button>
            </div>
          </div>

          {/* the metrics strip, from layout 10 */}
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6" data-testid="a20-metrics">
            {ABOUT_10.metrics.map((m, i) => (
              <div key={m.label} className="reveal rounded-2xl bg-white px-5 py-5" style={{ border: `1px solid ${LINE}`, transitionDelay: `${i * 40}ms` }}>
                <strong className="block text-[26px] font-semibold leading-none tracking-[-0.02em]" style={{ color: BRAND }}>
                  <Counter value={m.value} />
                </strong>
                <span className="mt-2 block text-[12.5px] leading-snug" style={{ color: "#6b7280" }}>{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 1. what sets us apart ---------- */}
      <section id="apart" className="relative border-y px-5 py-20 sm:px-8 sm:py-24" style={{ borderColor: LINE, background: SOFT }} data-testid="a20-apart">
        <div className="relative mx-auto max-w-[1400px]">
          <div className="reveal">
            <Label>{A.apart.eyebrow}</Label>
            <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.06] tracking-[-0.03em] sm:text-5xl" style={{ color: NAVY }}>{A.apart.title}</h2>
            <p className="mt-5 max-w-2xl text-[15.5px] leading-relaxed" style={{ color: "#4a5568" }}>{A.apart.lead}</p>
          </div>
          <div className="mt-14 space-y-6">
            {ABOUT_3.pillars.map((p, i) => (
              <div key={p.title} className="reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className={`group grid grid-cols-1 items-start gap-6 rounded-3xl bg-white p-7 transition-all duration-300 hover:-translate-y-1 lg:grid-cols-12 lg:gap-x-10`}
                  style={{ border: `1px solid ${LINE}` }} data-testid={`a20-pillar-${i}`}>
                  <div className="lg:col-span-3">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-500 group-hover:rotate-6 group-hover:scale-110"
                      style={{ background: CREAM, color: BRAND_DARK, border: `1px solid ${LINE}` }}>
                      <Icon name={p.icon} size={26} />
                    </span>
                    <span className="mt-4 block font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: "#a8a29e" }}>{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="lg:col-span-9">
                    <h3 className="text-[22px] font-semibold leading-snug tracking-[-0.02em]" style={{ color: NAVY }}>{p.title}</h3>
                    <p className="mt-3 text-[15px] leading-[1.8]" style={{ color: "#4a5568" }}>{p.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 2. mission and vision ---------- */}
      <section className="relative px-5 py-20 sm:px-8 sm:py-24" style={{ background: "#fff" }} data-testid="a20-mv">
        <GridLines />
        <div className="relative mx-auto max-w-[1400px]">
          <div className="reveal">
            <Label>{A.mv.eyebrow}</Label>
            <h2 className="mt-6 text-4xl font-semibold leading-[1.06] tracking-[-0.03em] sm:text-5xl" style={{ color: NAVY }}>{A.mv.title}</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-x-16">
            <div className="reveal lg:col-span-7">
              <div className="h-full rounded-3xl p-8" style={{ background: SOFT, border: `1px solid ${LINE}` }} data-testid="a20-vision">
                <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11.5px] font-semibold uppercase tracking-[0.16em]" style={{ background: "#fff", color: BRAND_DARK, border: `1px solid ${LINE}` }}>{ABOUT_US.vision.title}</span>
                <p className="mt-6 text-[23px] leading-[1.5] tracking-[-0.01em] sm:text-[27px]" style={{ color: NAVY, ...SIGNATURE, fontStyle: "normal", fontFamily: '"Newsreader", Georgia, serif' }}>
                  {ABOUT_US.vision.text}
                </p>
              </div>
            </div>
            <div className="reveal lg:col-span-5" style={{ transitionDelay: "60ms" }}>
              <div className="h-full rounded-3xl bg-white p-8" style={{ border: `1px solid ${LINE}` }} data-testid="a20-mission">
                <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11.5px] font-semibold uppercase tracking-[0.16em]" style={{ background: CREAM, color: BRAND_DARK, border: `1px solid ${LINE}` }}>{ABOUT_US.mission.title}</span>
                <p className="mt-6 text-[15.5px] leading-[1.85]" style={{ color: "#4a5568" }}>{ABOUT_US.mission.text}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 3. leadership, signed by four people ---------- */}
      <section id="leadership" className="relative border-y px-5 py-20 sm:px-8 sm:py-24" style={{ borderColor: LINE, background: SOFT }} data-testid="a20-leadership">
        <div className="relative mx-auto max-w-[1400px]">
          <div className="reveal">
            <Label>{A.leadership.eyebrow}</Label>
            <h2 className="mt-6 text-4xl font-semibold leading-[1.06] tracking-[-0.03em] sm:text-5xl" style={{ color: NAVY }}>{A.leadership.title}</h2>
            <p className="mt-5 max-w-3xl text-[15.5px] leading-relaxed" style={{ color: "#4a5568" }}>{A.leadership.lead}</p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((t, i) => (
              <figure key={t.name} className="reveal flex h-full flex-col rounded-3xl bg-white p-6 transition-all duration-300 hover:-translate-y-1.5"
                style={{ border: `1px solid ${LINE}`, transitionDelay: `${i * 50}ms` }} data-testid={`a20-leader-${i}`}>
                <img src={`https://i.pravatar.cc/300?img=${t.img}`} alt={t.name} width="300" height="300" loading="lazy"
                  className="h-[150px] w-full rounded-2xl object-cover" />
                <figcaption className="mt-5 flex flex-1 flex-col">
                  <strong className="block text-[16.5px] font-semibold tracking-[-0.01em]" style={{ color: NAVY }}>{t.name}</strong>
                  <span className="mt-1 block text-[12.5px] font-medium" style={{ color: BRAND_DARK }}>{t.role}</span>
                  <p className="mt-3 flex-1 text-[13.5px] leading-[1.7]" style={{ color: "#6b7280" }}>{t.bio}</p>

                  {/* the signature */}
                  <span className="mt-5 block border-t pt-4" style={{ borderColor: LINE }}>
                    <span className="block font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: "#b8b1a9" }}>{A.leadership.signed}</span>
                    <span className="mt-1 block text-[22px] leading-none" style={{ ...SIGNATURE, color: NAVY }} data-testid={`a20-signature-${i}`}>
                      {t.name}
                    </span>
                    <span className="mt-2 block h-px w-full" style={{ background: LINE }} />
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 5. certified, compliant, accountable ---------- */}
      <section className="relative px-5 py-20 sm:px-8 sm:py-24" style={{ background: "#fff" }} data-testid="a20-certified">
        <div className="relative mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-16">
            <div className="reveal lg:col-span-5">
              <Label>{A.certified.eyebrow}</Label>
              <h2 className="mt-6 text-4xl font-semibold leading-[1.06] tracking-[-0.03em] sm:text-5xl" style={{ color: NAVY }}>{A.certified.title}</h2>
              <p className="mt-5 text-[15.5px] leading-relaxed" style={{ color: "#4a5568" }}>{A.certified.lead}</p>
            </div>
            <div className="reveal lg:col-span-7">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {ABOUT_3.certifications.map((c, i) => (
                  <div key={c} className="flex items-center gap-3 rounded-2xl px-5 py-4 transition-all duration-300 hover:-translate-y-0.5"
                    style={{ background: SOFT, border: `1px solid ${LINE}` }} data-testid={`a20-cert-${i}`}>
                    <BadgeCheck className="h-5 w-5 shrink-0" style={{ color: BRAND_DARK }} />
                    <span className="text-[14.5px] font-medium" style={{ color: NAVY }}>{c}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-[12.5px] leading-relaxed" style={{ color: "#9ca3af" }}>{A.certified.footnote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 6-9. how we got here, the five turns as a vertical timeline ---------- */}
      <section id="journey" className="relative border-y px-5 py-20 sm:px-8 sm:py-24" style={{ borderColor: LINE, background: SOFT }} data-testid="a20-journey">
        <div className="relative mx-auto max-w-[1400px]">
          <div className="reveal">
            <Label>{A.journey.eyebrow}</Label>
            <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.06] tracking-[-0.03em] sm:text-5xl lg:text-[54px]" style={{ color: NAVY }}>
              {A.journey.titleLead} <span className={GRAD_TEXT}>{A.journey.titleAccent}</span>
            </h2>
            <p className="mt-5 max-w-2xl text-[15.5px] leading-relaxed" style={{ color: "#4a5568" }}>{A.journey.lead}</p>
            <p className="mt-4 text-[15.5px] font-semibold" style={{ color: BRAND_DARK }}>{A.journey.note}</p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-16">
            <div className="reveal lg:col-span-4">
              <h3 className="text-[26px] font-semibold leading-snug tracking-[-0.02em]" style={{ color: NAVY }}>{A.journey.turns}</h3>
              <Rule />
              <p className="mt-5 text-[15px] leading-[1.8]" style={{ color: "#4a5568" }}>{A.journey.turnsLead}</p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {ABOUT_6.next.slice(0, 2).map((n) => (
                  <div key={n.title} className="rounded-2xl bg-white p-4" style={{ border: `1px solid ${LINE}` }}>
                    <strong className="block text-[13.5px] font-semibold" style={{ color: NAVY }}>{n.title}</strong>
                    <span className="mt-1 block text-[12.5px] leading-snug" style={{ color: "#6b7280" }}>{n.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* vertical so it reads the same on a phone as on a desktop */}
            <div className="lg:col-span-8">
              <ol className="relative" data-testid="a20-timeline">
                <span className="absolute bottom-3 left-[9px] top-3 w-[3px] rounded-full" aria-hidden="true"
                  style={{ background: `linear-gradient(180deg, #f7a52a, #f0452c)` , opacity: .35 }} />
                {ABOUT_ALT.story.map((s, i) => (
                  <li key={s.year} className="reveal relative pb-10 pl-12 last:pb-0" style={{ transitionDelay: `${i * 50}ms` }} data-testid={`a20-turn-${s.year}`}>
                    <span className="absolute left-0 top-1 flex h-[21px] w-[21px] items-center justify-center rounded-full bg-white"
                      style={{ border: `3px solid ${BRAND}` }}>
                      <span className="h-[7px] w-[7px] rounded-full" style={{ background: BRAND }} />
                    </span>
                    <div className="rounded-3xl bg-white p-6 transition-all duration-300 hover:-translate-y-1" style={{ border: `1px solid ${LINE}` }}>
                      <div className="flex flex-wrap items-baseline gap-x-3">
                        <span className="font-mono text-[15px] font-semibold" style={{ color: BRAND }}>{s.year}</span>
                        <h4 className="text-[19px] font-semibold tracking-[-0.02em]" style={{ color: NAVY }}>{s.title}</h4>
                      </div>
                      <p className="mt-2 text-[14.5px] leading-[1.75]" style={{ color: "#4a5568" }}>{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 10. why ---------- */}
      <section id="why" className="relative px-5 py-20 sm:px-8 sm:py-24" style={{ background: "#fff" }} data-testid="a20-why">
        <GridLines />
        <div className="relative mx-auto max-w-[1400px]">
          <div className="reveal">
            <Label>{A.why.eyebrow}</Label>
            <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.06] tracking-[-0.03em] sm:text-5xl" style={{ color: NAVY }}>{A.why.title}</h2>
            <p className="mt-5 max-w-2xl text-[15.5px] leading-relaxed" style={{ color: "#4a5568" }}>{A.why.lead}</p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4" data-testid="a20-why-grid">
            {WHY_FEATURES.slice(0, 4).map((w, i) => (
              <div key={w.title} className="reveal group flex h-full flex-col rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5"
                style={{ background: SOFT, border: `1px solid ${LINE}`, transitionDelay: `${i * 50}ms` }} data-testid={`a20-why-${i}`}>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white transition-all duration-500 group-hover:rotate-6 group-hover:scale-110"
                  style={{ color: BRAND_DARK, border: `1px solid ${LINE}` }}>
                  <Icon name={w.icon} size={22} />
                </span>
                <h3 className="mt-5 text-[18px] font-semibold tracking-[-0.01em]" style={{ color: NAVY }}>{w.title}</h3>
                <p className="mt-2 flex-1 text-[14px] leading-[1.75]" style={{ color: "#6b7280" }}>{w.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold" style={{ color: BRAND_DARK }}>
                  <Check className="h-4 w-4" />Included in every plan
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 11. advertisement ---------- */}
      <section className="px-5 pb-20 sm:px-8" data-testid="a20-ad">
        <div className="mx-auto max-w-[1400px]">
          <div className="reveal overflow-hidden rounded-[28px]" style={{ border: `1px solid ${LINE}` }}>
            <div className="flex items-center justify-between gap-4 px-6 pt-4">
              <span className="font-mono text-[10.5px] uppercase tracking-[0.28em]" style={{ color: "#a8a29e" }}>{A.ad.label}</span>
              <span className="font-mono text-[10.5px] uppercase tracking-[0.28em]" style={{ color: "#a8a29e" }}>KrisKross Inc.</span>
            </div>
            <div className="relative mt-3 px-6 pb-8 pt-6 sm:px-10 sm:pb-10" style={{ background: NAVY }}>
              <div className="pointer-events-none absolute inset-0 opacity-[.14]" aria-hidden="true"
                style={{ backgroundImage: "radial-gradient(rgba(255,255,255,.6) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
              <div className="relative grid grid-cols-1 items-center gap-y-8 lg:grid-cols-12 lg:gap-x-12">
                <div className="lg:col-span-8">
                  <h2 className="text-[32px] font-semibold leading-[1.1] tracking-[-0.03em] text-white sm:text-[42px]">
                    {A.ad.headline}
                  </h2>
                  <p className="mt-4 max-w-2xl text-[15.5px] leading-relaxed text-white/70">{A.ad.lead}</p>
                  <p className="mt-6 font-mono text-[12px] tracking-wide text-white/45">{A.ad.small}</p>
                </div>
                <div className="lg:col-span-4">
                  <div className="flex flex-col gap-3">
                    <button onClick={(e) => go(e, "#signup")} data-testid="a20-ad-cta"
                      className={`inline-flex items-center justify-center gap-2 rounded-full ${GRAD} px-6 py-4 text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-1`}>
                      {A.ad.primary} <ArrowRight className="h-4 w-4" />
                    </button>
                    <button onClick={(e) => go(e, "#contact")}
                      className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-1"
                      style={{ border: "1px solid rgba(255,255,255,.28)" }}>
                      {A.ad.secondary}
                    </button>
                    <span className="mt-1 text-center text-[12px] text-white/45">No credit card · setup in a day · cancel any time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- footer ---------- */}
      <footer className="px-5 pb-10 pt-14 sm:px-8" style={{ background: NAVY }} data-testid="a20-footer">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-12 gap-x-0 gap-y-10 sm:gap-x-10">
            <div className="col-span-12 lg:col-span-5">
              <div className="flex items-center gap-3">
                <img src={`${process.env.PUBLIC_URL}/ffh-logo.png`} alt="FFH ERP" width="34" height="34" className="h-[34px] w-[34px] rounded-full" />
                <Motif />
                <span className="text-[19px] font-bold tracking-tight text-white">FFH|ERP</span>
              </div>
              <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-white/65">{A.footer.blurb}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Instagram", "Facebook", "LinkedIn", "Twitter", "YouTube"].map((s) => {
                  const I = SOCIAL[s];
                  return (
                    <a key={s} href="#top" onClick={(e) => e.preventDefault()} aria-label={s} title={s}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/25 hover:text-white">
                      <I className="h-[18px] w-[18px]" strokeWidth={1.8} />
                    </a>
                  );
                })}
              </div>
            </div>
            {A.footer.columns.map((c) => (
              <div key={c.title} className="col-span-6 sm:col-span-4 lg:col-span-2">
                <h6 className="text-[13px] font-semibold text-white">{c.title}</h6>
                <ul className="mt-4 space-y-3">
                  {c.items.map(([label, path]) => (
                    <li key={label}>
                      <button onClick={() => open(path)} className="bg-transparent text-left text-[14px] text-white/65 transition hover:text-white">{label}</button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="col-span-12 sm:col-span-4 lg:col-span-3">
              <h6 className="text-[13px] font-semibold text-white">Reach us</h6>
              <ul className="mt-4 space-y-3 text-[13.5px] text-white/65">
                <li className="flex items-center gap-2"><Mail className="h-4 w-4" style={{ color: BRAND }} />ffhsales@kriskrossinc.com</li>
                <li className="flex items-center gap-2"><Phone className="h-4 w-4" style={{ color: BRAND }} />+91 44 4858 5100</li>
                <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" style={{ color: BRAND }} />KrisKross Inc., Chennai · Dubai · Singapore</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-6 text-[12.5px] text-white/50">
            <span>{A.footer.legal}</span>
            <span className="font-mono">14 years · 2.5K+ active users · 9 modules · 20+ countries</span>
          </div>
        </div>
      </footer>

      <div className="py-6 text-center"><HomeLayoutNav /></div>
      <SupportChat />
    </div>
  );
}
