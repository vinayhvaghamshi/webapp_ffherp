import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, ChevronDown, Facebook, IndianRupee, Instagram, Linkedin, Menu, Minus, Pause, Play, Plus, Star, TrendingUp, Twitter, Users, X, Youtube } from "lucide-react";
import Icon from "./TwIcon";
import { HOME37, HOME30, FAQS, PLANS, TOOLS, WHY_FEATURES, formatINR } from "../../mock";
import { LiveCRMWindow } from "./LiveCRM";
import TwSignupForm from "./TwSignupForm";
import HomeLayoutNav from "./HomeLayoutNav";
import SupportChat from "./SupportChat";
import { useGoTo } from "./crmStore";

// Layout 37 — the home1 "FFH|ERP · Live CRM" widget in the hero (replacing the
// "Today at a glance" panel), a deliberately smaller "Let's get started" block,
// no white band in Our services, a livelier hero and tighter mobile behaviour.
// hero (cursor tilt + "serving 350K businesses for 21 years"), a stacked-wordmark
// client wall and a cloud-integrations grid with a cursor spotlight. every open/close animates
// smoothly (services accordion, FAQ, mobile nav), the deployments cards are
// twice the size with hover reveals, client satisfaction is a click-through
// slider, and the popular plan is deliberately bigger than the rest. the "Let's get started" block becomes a
// full-width, logo-themed section with a large form, and the services accordion
// opens on hover as well as on click. The live panel returns to the hero.
//   · Home30's creative structure (graph-paper grid, Syne display type, staggered
//     headline, marquee, counters, image accordion, filterable grid, billing toggle)
//   · Home12's logo theme (brand #ef7b23, cream #fff6ec, gradient #f7a52a → #f0452c,
//     navy #16283c) together with its motif bars and live KPI panel
// Tailwind only, no Bootstrap.
const BRAND = "#ef7b23";
const BRAND_DARK = "#cf5f12";
const NAVY = "#16283c";
const CREAM = "#fdeedd";
const SOFT = "#fff6ec";
const LINE = "#f4e2ce";
const GRAD = "bg-gradient-to-r from-[#f7a52a] to-[#f0452c]";
const GRAD_TEXT = "bg-gradient-to-r from-[#f7a52a] to-[#f0452c] bg-clip-text text-transparent";

const HEALTH_AREAS = ["Sales", "Finance", "Support", "Projects"];

const NAV = [
  { label: "Home", target: "#top" },
  { label: "About Us", target: "#why" },
  { label: "Service", target: "#features" },
  { label: "Project", target: "#modules" },
  { label: "Pricing Table", target: "#pricing" },
];


// Simple geometric marks so each client card carries a logo, not just a wordmark.
const BrandMark = ({ kind }) => (
  <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
    style={{ background: CREAM, color: BRAND_DARK, border: `1px solid ${LINE}` }}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {kind === "star" && (<><circle cx="12" cy="12" r="9" /><path d="M12 12V3.6M12 12l-7.3 4.2M12 12l7.3 4.2" /></>)}
      {kind === "force" && (<><rect x="3.5" y="3.5" width="17" height="17" rx="4" /><path d="M9.5 16.5V8h5M9.5 12.2h4" /></>)}
      {kind === "shiji" && (<><path d="M4 19.5h16" /><path d="M7 19.5V13M12 19.5V9.5M17 19.5V5.5" /></>)}
      {kind === "ada" && (<><path d="M12 3.2l7.6 4.6v8.4L12 20.8 4.4 16.2V7.8z" /><circle cx="12" cy="12" r="2.2" /></>)}
      {kind === "arch" && (<><path d="M4 20h16" /><path d="M6.5 20v-6a5.5 5.5 0 0 1 11 0v6" /></>)}
      {kind === "brick" && (<><rect x="3" y="6" width="18" height="5" rx="1" /><rect x="3" y="13" width="18" height="5" rx="1" /><path d="M9 6v5M15 13v5" /></>)}
      {kind === "peak" && (<><path d="M3 19.5h18" /><path d="M5 19.5l6-9.5 3 4.2 2-2.8 3 8.1" /></>)}
      {kind === "bag" && (<><path d="M5 8h14l-1.2 11.5H6.2z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></>)}
      {kind === "orbit" && (<><circle cx="12" cy="12" r="3" /><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(-28 12 12)" /></>)}
    </svg>
  </span>
);

const Motif = ({ className = "" }) => (
  <span className={`ffh-h37-motif ${className}`} aria-hidden="true"><i /><i /><i /><i /></span>
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

const Counter = ({ value }) => {
  const ref = useRef(null);
  const [n, setN] = useState(0);
  const target = parseFloat(String(value).replace(/[^\d.]/g, "")) || 0;
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = (t) => {
        const p = Math.min((t - t0) / 2600, 1);   // slower roll-up
        setN(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); if (raf) cancelAnimationFrame(raf); };
  }, [target]);
  return <span ref={ref}>{Math.round(n)}{String(value).replace(/[\d.]/g, "")}</span>;
};

export default function Home37() {
  const goTo = useGoTo();
  const [open, setOpen] = useState(false);
  const [openService, setOpenService] = useState(0);
  const [filter, setFilter] = useState("All");
  const [yearly, setYearly] = useState(false);
  const [faqOpen, setFaqOpen] = useState(0);
  const [slide, setSlide] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [spot, setSpot] = useState({ x: 50, y: 50 });
  const [heroSpot, setHeroSpot] = useState({ x: 50, y: 20 });
  // On touch screens a tap fires mouseenter before click, so hover-opening the
  // accordion made the first tap close it again. Only bind hover where it exists.
  const [canHover, setCanHover] = useState(false);
  const [areas, setAreas] = useState({ Sales: true, Finance: true, Support: true, Projects: true });
  const [activeNav, setActiveNav] = useState("#top");
  const [healthShown, setHealthShown] = useState(82);
  const [autoplay, setAutoplay] = useState(true);
  const [hovering, setHovering] = useState(false);
  const swipeX = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setCanHover(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // client-satisfaction slider: autoplay until the pointer rests on it (or the
  // visitor pauses it), with a swipe on touch and arrow keys on desktop
  const slideCount = HOME37.testimonials.length;
  const nextSlide = () => setSlide((v) => (v + 1) % slideCount);
  const prevSlide = () => setSlide((v) => (v - 1 + slideCount) % slideCount);
  useEffect(() => {
    if (!autoplay || hovering) return;
    const id = setInterval(() => setSlide((v) => (v + 1) % slideCount), 6500);
    return () => clearInterval(id);
  }, [autoplay, hovering, slideCount]);

  // the business-health score eases between values instead of jumping
  const healthPct = 52 + Object.values(areas).filter(Boolean).length * 7.5;
  const healthStatus = healthPct >= 80 ? "Excellent" : healthPct >= 65 ? "Good" : "Needs focus";
  useEffect(() => {
    const from = healthShown, to = healthPct, t0 = performance.now();
    let raf;
    const step = (t) => {
      const p = Math.min((t - t0) / 650, 1);
      setHealthShown(from + (to - from) * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [healthPct]);   // eslint-disable-line react-hooks/exhaustive-deps

  // nav highlight follows the section you are reading
  useEffect(() => {
    const els = NAV.map((l) => document.getElementById(l.target.replace("#", ""))).filter(Boolean);
    if (!els.length) return;
    const io = new IntersectionObserver((entries) => {
      const on = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (on) setActiveNav(`#${on.target.id}`);
    }, { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.2, 0.5, 1] });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => { document.title = "FFH|ERP — See today's business, not last month's report"; }, []);
  const go = (e, t) => { e.preventDefault(); setOpen(false); goTo(t); };

  const projects = filter === "All" ? HOME30.projects : HOME30.projects.filter((p) => p.tag === filter);

  return (
    <div className="ffh-tw ffh-h37 ffh-logo-theme min-h-screen bg-white font-[Poppins] antialiased" data-testid="home37-page">
      {/* ---------- nav ---------- */}
      <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md" style={{ borderColor: LINE }} data-testid="h37-nav">
        <div className="mx-auto flex h-[70px] max-w-[1400px] items-center gap-6 px-5 sm:px-8">
          <a href="#top" onClick={(e) => go(e, "#top")} className="flex items-center gap-3">
            <img src={`${process.env.PUBLIC_URL}/ffh-logo.png`} alt="FFH ERP" width="34" height="34" className="h-[34px] w-[34px] rounded-full" />
            <Motif />
            <span className="text-[19px] font-bold tracking-tight" style={{ color: NAVY }}>FFH|ERP</span>
          </a>
          <nav className="mx-auto hidden items-center gap-1 lg:flex" data-testid="h37-navlinks">
            {NAV.map((l) => {
              const on = activeNav === l.target;
              return (
                <a key={l.label} href={l.target} onClick={(e) => go(e, l.target)}
                  data-testid={`h37-nav-${l.label.toLowerCase().replace(/\s+/g, "-")}`} data-active={on ? "true" : "false"}
                  className="group relative rounded-full px-4 py-2 text-[13.5px] font-medium transition-all duration-300 hover:-translate-y-0.5"
                  style={{ color: on ? BRAND_DARK : NAVY }}>
                  {/* soft wash that pops in behind the label (classes drive the transform) */}
                  <span className={`absolute inset-0 rounded-full transition-all duration-300 ${on ? "scale-100 opacity-100" : "scale-[.88] opacity-[0] group-hover:scale-100 group-hover:opacity-100"}`}
                    style={{ background: on ? "#fdeedd" : SOFT }} />
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-[#cf5f12]">{l.label}</span>
                  {/* line only on the tab you are actually on */}
                  <span className={`absolute bottom-1 left-4 right-4 h-[2px] origin-left rounded-full transition-transform duration-500 ${on ? "scale-x-100" : "scale-x-0"}`}
                    style={{ background: `linear-gradient(90deg, ${BRAND}, ${BRAND_DARK})` }} />
                </a>
              );
            })}
          </nav>
          <button onClick={(e) => go(e, "#contact")} data-testid="h37-cta"
            className={`ml-auto hidden items-center gap-2 rounded-full ${GRAD} px-5 py-3 text-[13.5px] font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:brightness-105 lg:inline-flex`}>
            Contact Us <ArrowUpRight className="h-4 w-4" />
          </button>
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" data-testid="h37-burger"
            className="ml-auto bg-transparent p-2 lg:hidden" style={{ color: NAVY }}>{open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</button>
        </div>
        <div className={`grid transition-[grid-template-rows] duration-500 ease-out lg:hidden`} style={{ gridTemplateRows: open ? "1fr" : "0fr" }}>
          <div className="overflow-hidden">
            <div className={`bg-white px-5 pb-6 pt-2 transition-opacity duration-300 ${open ? "opacity-100" : "pointer-events-none opacity-[0]"}`} style={{ borderTop: `1px solid ${LINE}` }}>
            {NAV.map((l) => (
              <a key={l.label} href={l.target} onClick={(e) => go(e, l.target)} className="block py-3 text-sm font-medium" style={{ color: NAVY }}>{l.label}</a>
            ))}
            <button onClick={(e) => go(e, "#contact")} className={`mt-3 w-full rounded-full ${GRAD} px-5 py-3 text-sm font-semibold text-white`}>Contact Us</button>
            </div>
          </div>
        </div>
      </header>

      {/* ---------- hero: animated, with the home1 "FFH|ERP · Live CRM" widget ---------- */}
      <section id="top" className="relative overflow-hidden px-5 pb-16 pt-14 sm:px-8"
        style={{ background: `linear-gradient(160deg, ${SOFT} 0%, #ffffff 55%, ${CREAM} 100%)` }}
        onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); setHeroSpot({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 }); }}>
        <div className="ffh-h37-spot pointer-events-none absolute inset-0" style={{ "--mx": `${heroSpot.x}%`, "--my": `${heroSpot.y}%` }} aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <span className="ffh-h26-float absolute -left-10 top-24 h-40 w-40 rounded-full" style={{ background: "rgba(247,165,42,.20)", filter: "blur(28px)" }} />
          <span className="ffh-h26-float d2 absolute right-[8%] top-10 h-32 w-32 rounded-full" style={{ background: "rgba(240,69,44,.16)", filter: "blur(26px)" }} />
          <span className="ffh-h26-float d3 absolute bottom-10 left-[42%] h-28 w-28 rounded-full" style={{ background: "rgba(239,123,35,.14)", filter: "blur(24px)" }} />
        </div>
        <GridLines />
        <div className="relative mx-auto max-w-[1400px]">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[13px] font-medium shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md" style={{ color: NAVY, border: `1px solid ${LINE}` }}>
              <span className="h-2 w-2 animate-pulse rounded-full" style={{ background: BRAND }} />{HOME37.eyebrow}
            </span>
          </div>
          <div className="reveal delay-1">
            <h1 className="mt-8 text-[11vw] font-semibold leading-[0.98] tracking-[-0.04em] sm:text-[7.5vw] lg:text-[88px]" style={{ color: NAVY }}>
              {HOME37.titleA}
              <span className={`block lg:ml-[12%] ${GRAD_TEXT}`}>{HOME37.titleB}</span>
            </h1>
          </div>
          <div className="mt-10 grid grid-cols-12 gap-x-0 gap-y-10 sm:gap-x-10">
            <div className="col-span-12 lg:col-span-6">
              <div className="reveal delay-2">
                <p className="max-w-xl text-[15.5px] leading-relaxed" style={{ color: "#4a5568" }}>{HOME37.lead}</p>
                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <button onClick={(e) => go(e, "#signup")} data-testid="home37-cta-trial"
                    className={`group inline-flex items-center gap-2 rounded-full ${GRAD} px-8 py-4 text-[15px] font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/40`}>
                    {HOME37.ctaMain}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1" />
                  </button>
                  <button onClick={(e) => go(e, "#live")} data-testid="home37-cta-live"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-[14px] font-semibold transition-all duration-300 hover:-translate-y-1"
                    style={{ color: NAVY, border: `1px solid ${LINE}` }}>
                    Try the live CRM
                  </button>
                </div>
              </div>
              <div className="reveal delay-3 mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-2xl bg-white px-6 py-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ border: `1px solid ${LINE}` }} data-testid="home37-serving">
                <span className="flex -space-x-3">
                  {[12, 14, 18, 60].map((n) => (
                    <img key={n} src={`https://i.pravatar.cc/80?img=${n}`} alt="" width="34" height="34" loading="lazy"
                      className="h-[34px] w-[34px] rounded-full object-cover transition-transform duration-300 hover:scale-110" style={{ border: "2px solid #fff" }} />
                  ))}
                </span>
                <p className="text-[15px]" style={{ color: "#6b7280" }}>
                  {HOME37.stat.lead}{" "}<strong className="text-[19px] font-bold" style={{ color: BRAND }}><Counter value={HOME37.stat.a} /></strong>{" "}
                  {HOME37.stat.mid}{" "}<strong className="text-[19px] font-bold" style={{ color: BRAND }}><Counter value={HOME37.stat.b} /></strong>{" "}
                  {HOME37.stat.tail}
                </p>
                <span className="ml-auto hidden text-amber-500 sm:flex">{[0, 1, 2, 3, 4].map((i) => <Star key={i} className="h-4 w-4 fill-current" />)}</span>
              </div>
            </div>
            <div className="col-span-12 min-w-0 max-w-full lg:col-span-6"
              onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); setTilt({ x: (e.clientX - r.left) / r.width - 0.5, y: (e.clientY - r.top) / r.height - 0.5 }); }}
              onMouseLeave={() => setTilt({ x: 0, y: 0 })} style={{ perspective: "1200px" }}>
              <div className="transition-transform duration-300 ease-out will-change-transform"
                style={{ transform: `rotateY(${tilt.x * 5}deg) rotateX(${tilt.y * -5}deg)` }}>
                <LiveCRMWindow />
              </div>
            </div>
          </div>
        </div>
      </section>

{/* ---------- big "Let's get started" section (logo theme) ---------- */}
      <section className="relative overflow-hidden border-y px-5 py-16 sm:px-8 sm:py-20"
        style={{ borderColor: LINE, background: `linear-gradient(135deg, ${CREAM} 0%, #ffffff 45%, ${SOFT} 100%)` }} data-testid="home37-signup-section">
        <GridLines />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-y-14 lg:grid-cols-2 lg:gap-x-32">
          <div className="lg:order-2">
            <Motif />
            <h2 className="mt-6 text-4xl font-semibold leading-[1.02] tracking-[-0.035em] sm:text-5xl lg:text-[60px]" style={{ color: NAVY }}>
              Let's get started
            </h2>
            <p className="mt-4 text-[15px] font-semibold" style={{ color: BRAND_DARK }}>
              No credit card. Setup in a day. Cancel any time.
            </p>
            <ul className="mt-8 space-y-4">
              {["Nine modules on one database", "We migrate your data with you", "Training for every team included", "Everything you enter stays yours"].map((b) => (
                <li key={b} className="flex items-start gap-3 text-[15px]" style={{ color: "#4a5568" }}>
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: BRAND }} />{b}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap items-center gap-5 text-[13px]" style={{ color: "#6b7280" }}>
              <span className="flex text-amber-500">{[0, 1, 2, 3, 4].map((i) => <Star key={i} className="h-4 w-4 fill-current" />)}</span>
              <span><strong style={{ color: NAVY }}>4.9 / 5.0</strong> — {HOME37.rating.text}</span>
            </div>
          </div>
          <div className="flex justify-center lg:order-1 lg:justify-start">
            <TwSignupForm variant="light" spacing="roomy" glow title="Create your account" />
          </div>
        </div>
      </section>

      {/* ---------- EVERYTHING IN SYNC — lifted from home1 ---------- */}
      <section id="sync" className="relative border-y px-5 py-20 sm:px-8 sm:py-24" style={{ borderColor: LINE, background: "#fff" }}>
        <div className="mx-auto max-w-[1400px]">
          <div className="reveal">
            <Label>Everything in sync</Label>
            <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.06] tracking-[-0.03em] sm:text-5xl lg:text-[54px]" style={{ color: NAVY }}>
              {HOME37.syncTitleA} <em className="font-['Playfair_Display'] font-medium italic" style={{ color: BRAND }}>{HOME37.syncTitleB}</em>
            </h2>
            <p className="mt-5 max-w-2xl text-[15.5px] leading-relaxed" style={{ color: "#4a5568" }}>{HOME37.syncCopy}</p>
          </div>
        </div>
        <div className="ffh-tools-marquee reveal -mx-[40px]" data-testid="home37-tools-marquee">
          <div className="ffh-tools-track">
            {[...TOOLS, ...TOOLS].map((tl, i) => {
              const first = i < TOOLS.length;
              return (
                <div className="ffh-tool ffh-tool-mq" key={`${tl.name}-${i}`} aria-hidden={first ? undefined : "true"}
                  data-testid={first ? `home37-tool-${tl.name.toLowerCase()}` : undefined}>
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="ffh-tool-icon"><Icon name={tl.icon} size={26} /></div>
                    <span className="ffh-tool-num">{String((i % TOOLS.length) + 1).padStart(2, "0")}</span>
                  </div>
                  <h6>{tl.name}</h6>
                  <p>{tl.desc}</p>
                  <span className="ffh-tool-more">Learn more <ArrowRight size={15} /></span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- client wall: stacked wordmarks, hover lift ---------- */}
      <section id="trusted" className="relative px-5 py-20 sm:px-8 sm:py-24" style={{ background: SOFT }}>
        <div className="mx-auto max-w-[1400px]">
          <div className="reveal">
            <Label>Trusted by</Label>
            <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.06] tracking-[-0.03em] sm:text-5xl" style={{ color: NAVY }}>
              Serving <span style={{ color: BRAND }}>350K</span> businesses for <span style={{ color: BRAND }}>21</span> years
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {HOME37.brands.map((b, i) => (
              <div key={b.name} className="reveal" style={{ transitionDelay: `${i * 40}ms` }}>
              <div data-testid={`home37-brand-${i}`}
                className="group flex h-full min-h-[168px] flex-col items-center justify-center rounded-2xl bg-white px-4 py-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                style={{ border: `1px solid ${LINE}` }}>
                <BrandMark kind={b.mark} />
                {b.lines.map((line, k) => (
                  <span key={line}
                    className={`font-semibold uppercase leading-tight tracking-[0.06em] transition-colors duration-300 group-hover:text-[#cf5f12] ${b.lines.length > 2 ? "text-[12.5px]" : k === 0 ? "text-[17px]" : "text-[13px]"}`}
                    style={{ color: k === 0 ? NAVY : "#9ca3af" }}>
                    {line}
                  </span>
                ))}
                <span className="mt-3 h-[2px] w-0 rounded-full transition-all duration-500 group-hover:w-10" style={{ background: BRAND }} />
              </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- integrations: cursor spotlight + hover tiles ---------- */}
      <section id="integrations" className="relative overflow-hidden border-y px-5 py-20 sm:px-8 sm:py-24" style={{ borderColor: LINE, background: "#fff" }}
        onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); setSpot({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 }); }}>
        <div className="ffh-h37-spot pointer-events-none absolute inset-0" style={{ "--mx": `${spot.x}%`, "--my": `${spot.y}%` }} aria-hidden="true" />
        <div className="relative mx-auto max-w-[1400px]">
          <div className="reveal max-w-3xl">
            <Label>Connect your stack</Label>
            <h2 className="mt-6 text-4xl font-semibold leading-[1.06] tracking-[-0.03em] sm:text-5xl lg:text-[54px]" style={{ color: NAVY }}>
              {HOME37.integrationsTitle}
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed" style={{ color: "#4a5568" }}>{HOME37.integrationsCopy}</p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {HOME37.integrations.map((app, i) => (
              <div key={app.name} className="reveal" style={{ transitionDelay: `${i * 35}ms` }}>
              <div data-testid={`home37-app-${app.name.toLowerCase()}`}
                className="group flex h-full cursor-pointer flex-col items-center justify-center gap-1.5 rounded-2xl bg-white px-2.5 py-3.5 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:flex-row sm:items-center sm:justify-start sm:gap-3 sm:px-5 sm:py-4 sm:text-left"
                style={{ border: `1px solid ${LINE}` }}>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110 sm:h-11 sm:w-11 sm:rounded-xl"
                  style={{ background: `${app.color}1a`, color: app.color }}>
                  <Icon name={app.icon} size={21} className="h-4 w-4 sm:h-[21px] sm:w-[21px]" />
                </span>
                <span className="w-full min-w-0 truncate text-center text-[12.5px] font-semibold sm:w-auto sm:text-left sm:text-[15px]" style={{ color: NAVY }} title={app.name}>{app.name}</span>
              </div>
              </div>
            ))}
          </div>
          <p className="reveal mt-10 text-center text-[13.5px]" style={{ color: "#9ca3af" }}>
            Two-way sync with the tools your teams already live in — connected in minutes, monitored by us.
          </p>
        </div>
      </section>

{/* ---------- about + counters ---------- */}
      <section id="why" className="relative px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[1400px]">
          <Label>About us</Label>
          <div className="mt-8 grid grid-cols-12 items-end gap-x-0 gap-y-10 sm:gap-x-10">
            <h2 className="col-span-12 text-3xl font-semibold leading-[1.14] tracking-[-0.03em] sm:text-4xl lg:col-span-9 lg:text-[44px]" style={{ color: NAVY }}>
              {HOME37.aboutTitle}
            </h2>
            <div className="col-span-12 lg:col-span-3 lg:text-right">
              <button onClick={(e) => go(e, "#contact")} className={`inline-flex items-center gap-2 rounded-full ${GRAD} px-6 py-3.5 text-[14px] font-semibold text-white transition hover:brightness-105`}>
                Contact <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {HOME30.stats.map((s, i) => (
              <div key={s.label} data-testid={`home37-stat-${i}`}>
                <strong className="block text-5xl font-semibold tracking-[-0.04em] sm:text-6xl" style={{ color: BRAND }}>
                  <Counter value={s.value} />
                </strong>
                <span className="mt-2 block text-[15px] font-semibold" style={{ color: NAVY }}>{s.label}</span>
                <span className="mt-5 block text-[12px] font-semibold uppercase tracking-[0.12em]" style={{ color: BRAND_DARK }}>{s.note}</span>
                <p className="mt-2 text-[13.5px] leading-relaxed" style={{ color: "#6b7280" }}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- services accordion (hover or click, animated) ---------- */}
      <section id="features" className="relative border-y px-5 py-20 sm:px-8 sm:py-24" style={{ borderColor: LINE, background: SOFT }}>
        <div className="mx-auto max-w-[1400px]">
          <Label>Our services</Label>
          <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.06] tracking-[-0.03em] sm:text-5xl lg:text-[54px]" style={{ color: NAVY }}>
            {HOME37.servicesTitle}
          </h2>
          <div className="mt-14 border-y" style={{ borderColor: LINE }} data-testid="home37-accordion">
            {HOME30.services.map((s, i) => {
              const isOpen = openService === i;
              return (
                <div key={s.name} className="border-b last:border-b-0" style={{ borderColor: LINE }} data-testid={`home37-service-${i}`}>
                  <button
                    onClick={() => setOpenService((prev) => (prev === i ? -1 : i))}
                    onMouseEnter={canHover ? () => setOpenService(i) : undefined}
                    aria-expanded={isOpen}
                    className="group/row -mx-2 flex w-full items-center gap-6 rounded-2xl px-2 py-7 text-left transition-colors duration-300 hover:bg-[#fdeedd]">
                    <span className="font-mono text-[12px] transition-colors duration-300" style={{ color: isOpen ? BRAND : BRAND_DARK }}>{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-2xl font-semibold tracking-[-0.02em] transition-transform duration-300 group-hover/row:translate-x-1 sm:text-3xl lg:text-[32px]" style={{ color: NAVY }}>{s.name}</span>
                    <span className="ml-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover/row:scale-110"
                      style={{ border: `1px solid ${isOpen ? BRAND : LINE}`, background: isOpen ? BRAND : "#fff", color: isOpen ? "#fff" : BRAND_DARK }}>
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  <div className={`grid transition-[grid-template-rows] duration-500 ease-out`} style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
                    <div className="overflow-hidden">
                      <div className={`grid grid-cols-12 items-center gap-x-0 gap-y-8 pb-9 transition-all duration-500 sm:gap-x-8 ${isOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-[0]"}`}>
                        <p className="col-span-12 text-[15.5px] leading-relaxed lg:col-span-5" style={{ color: "#4a5568" }}>{s.text}</p>
                        <img src={`https://picsum.photos/id/${s.img}/1000/620`} alt="" width="1000" height="620" loading="lazy"
                          className="col-span-12 h-[170px] w-full rounded-2xl object-cover transition-transform duration-700 hover:scale-[1.02] sm:h-[190px] lg:col-span-5 lg:h-[200px]" />
                        <div className="col-span-12 lg:col-span-2 lg:text-right">
                          <button onClick={(e) => go(e, "#contact")} className={`inline-flex items-center gap-2 rounded-full ${GRAD} px-5 py-3 text-[13.5px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105`}>
                            Contact Us <ArrowUpRight className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- why teams choose FFH|ERP — carried over from home1 ---------- */}
      <section id="capabilities" className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-24" style={{ background: SOFT }}>
        <GridLines />
        <div className="relative mx-auto max-w-[1400px]">
          {/* heading sits top-left, with the health card directly under it */}
          <div className="grid grid-cols-12 items-start gap-x-0 gap-y-10 lg:gap-x-16">
            <div className="col-span-12 lg:col-span-6">
              <div className="reveal">
                <Label>Why FFH|ERP</Label>
                <h2 className="mt-6 text-4xl font-semibold leading-[1.06] tracking-[-0.03em] sm:text-5xl" style={{ color: NAVY }}>
                  Why teams choose <span className={GRAD_TEXT}>FFH|ERP</span>
                </h2>
                <p className="mt-4 max-w-xl text-[15.5px]" style={{ color: "#4a5568" }}>
                  Powerful capabilities that keep your whole team productive.
                </p>
              </div>

              {/* Business health — tap an area and the score moves */}
              <div className="reveal mt-8">
              <div className="rounded-3xl bg-white p-6 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl sm:p-7"
                style={{ border: `1px solid ${LINE}` }} data-testid="home37-health-card">
                <div className="flex items-end justify-between gap-6">
                  <div>
                    <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: "#9ca3af" }}>Business health</span>
                    <h4 className="mt-2 text-2xl font-semibold transition-colors duration-500" style={{ color: healthStatus === "Excellent" ? "#0f9d58" : healthStatus === "Good" ? BRAND : "#f0452c" }} data-testid="home37-health-status">
                      {healthStatus}
                    </h4>
                  </div>
                  <div className="relative flex h-[104px] w-[104px] items-center justify-center">
                    <svg viewBox="0 0 100 100" className="absolute inset-0 -rotate-90">
                      <circle cx="50" cy="50" r="43" fill="none" stroke={LINE} strokeWidth="9" />
                      <circle cx="50" cy="50" r="43" fill="none" stroke={BRAND} strokeWidth="9" strokeLinecap="round"
                        strokeDasharray={2 * Math.PI * 43} strokeDashoffset={2 * Math.PI * 43 * (1 - healthPct / 100)}
                        style={{ transition: "stroke-dashoffset .9s cubic-bezier(.2,.7,.2,1)" }} />
                    </svg>
                    <strong className="text-[26px] font-semibold tabular-nums" style={{ color: NAVY }} data-testid="home37-health-pct">{Math.round(healthShown)}%</strong>
                  </div>
                </div>

                <div className="mt-6 h-2.5 w-full overflow-hidden rounded-full" style={{ background: LINE }}>
                  <div className="h-full rounded-full" style={{ width: `${healthPct}%`, background: `linear-gradient(90deg, #f7a52a, #f0452c)`, transition: "width .9s cubic-bezier(.2,.7,.2,1)" }} />
                </div>
                <p className="mt-3 text-[13.5px]" style={{ color: "#6b7280" }}>{Math.round(healthShown)}% of monthly targets achieved</p>

                <div className="mt-6 grid grid-cols-2 gap-2.5">
                  {HEALTH_AREAS.map((a) => (
                    <button key={a} onClick={() => setAreas((p) => ({ ...p, [a]: !p[a] }))}
                      data-testid={`home37-health-area-${a.toLowerCase()}`}
                      className="group flex items-center gap-2.5 rounded-xl px-3.5 py-3 text-left text-[14px] font-medium transition-all duration-300 hover:-translate-y-0.5"
                      style={areas[a] ? { background: "#fdeedd", color: NAVY, border: `1px solid ${LINE}` } : { background: "#f8fafc", color: "#6b7280", border: "1px solid #eef2f7" }}>
                      <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md transition-all duration-300 ${areas[a] ? "scale-100" : "scale-90"}`}
                        style={{ background: areas[a] ? BRAND : "#e2e8f0" }}>
                        {areas[a] && <Check size={13} strokeWidth={3.5} className="text-white" />}
                      </span>
                      {a}
                    </button>
                  ))}
                </div>
                <p className="mt-4 text-[12.5px]" style={{ color: "#9ca3af" }}>Tap an area to see how it moves your score.</p>
              </div>
              </div>
            </div>

            {/* capabilities */}
            <div className="col-span-12 lg:col-span-6">
              {WHY_FEATURES.map((w, i) => (
                <div key={w.title} className="reveal" style={{ transitionDelay: `${i * 70}ms` }}>
                  <div className="group mb-2.5 flex items-start gap-3 rounded-xl bg-white px-4 py-3.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:px-5 sm:py-4"
                    style={{ border: `1px solid ${LINE}` }} data-testid={`home37-why-feature-${i}`}>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                      style={{ background: CREAM, color: BRAND_DARK, border: `1px solid ${LINE}` }}>
                      <Icon name={w.icon} size={17} />
                    </span>
                    <div>
                      <h5 className="text-[14.5px] font-semibold leading-snug" style={{ color: NAVY }}>{w.title}</h5>
                      <p className="mt-0.5 text-[13px] leading-snug" style={{ color: "#6b7280" }}>{w.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- deployments: bigger cards with hover reveal ---------- */}
      <section id="modules" className="relative px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[1400px]">
          <Label>Project</Label>
          <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.06] tracking-[-0.03em] sm:text-5xl lg:text-[54px]" style={{ color: NAVY }}>
            {HOME37.projectsTitle}
          </h2>
          <div className="mt-10 flex flex-wrap gap-2.5">
            {HOME30.filters.map((f) => (
              <button key={f} onClick={() => setFilter(f)} data-testid={`home37-filter-${f.toLowerCase()}`}
                className="rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-300 hover:-translate-y-0.5"
                style={filter === f ? { background: NAVY, color: "#fff", border: `1px solid ${NAVY}` } : { border: `1px solid ${LINE}`, color: "#6b7280", background: "#fff" }}>
                {f}
              </button>
            ))}
          </div>
          <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-14 lg:grid-cols-2">
            {projects.map((p, i) => (
              <article key={`${p.title}-${i}`} data-testid={`home37-project-${i}`} className="group">
                <div className="relative overflow-hidden rounded-[26px] transition-all duration-500 group-hover:-translate-y-1.5"
                  style={{ border: `1px solid ${LINE}`, boxShadow: "0 30px 60px -50px rgba(22,40,60,.5)" }}>
                  <img src={`https://picsum.photos/id/${p.img}/1400/1000`} alt={p.title} width="1400" height="1000" loading="lazy"
                    className="h-[300px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07] sm:h-[380px] lg:h-[420px]" />
                  <span className="pointer-events-none absolute inset-0 opacity-[0] transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: "linear-gradient(180deg, rgba(22,40,60,0) 30%, rgba(22,40,60,.85) 100%)" }} />
                  <span className="absolute right-5 top-5 rounded-full px-3.5 py-1.5 text-[12.5px] font-bold transition-transform duration-500 group-hover:scale-105"
                    style={{ background: CREAM, color: BRAND_DARK }}>{p.price}</span>
                  <span className="absolute bottom-6 left-6 right-6 flex translate-y-4 items-center justify-between gap-4 opacity-[0] transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="text-[15px] font-semibold text-white">{p.meta}</span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] font-semibold" style={{ color: NAVY }}>
                      View case study <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </span>
                </div>
                <div className="mt-6 flex items-center justify-between text-[12.5px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND_DARK }}>
                  <span>{p.tag}</span><span style={{ color: "#9ca3af" }}>{p.meta}</span>
                </div>
                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.02em] transition-colors duration-300 group-hover:text-[#cf5f12]" style={{ color: NAVY }}>{p.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- client satisfaction slider (one at a time, click to advance) ---------- */}
      <section className="relative border-y px-5 py-20 sm:px-8 sm:py-24" style={{ borderColor: LINE, background: SOFT }}>
        <div className="mx-auto max-w-[1400px]">
          <Label>Client satisfaction</Label>
          <div className="mt-6 flex flex-wrap items-end justify-between gap-8">
            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.06] tracking-[-0.03em] sm:text-5xl lg:text-[54px]" style={{ color: NAVY }}>
              {HOME37.clientsTitle}
            </h2>
            <div className="flex items-center gap-3">
              <button onClick={() => setAutoplay((a) => !a)} data-testid="home37-autoplay"
                aria-label={autoplay ? "Pause testimonial autoplay" : "Play testimonial autoplay"}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ border: `1px solid ${LINE}`, color: autoplay ? BRAND : "#9ca3af" }}>
                {autoplay ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </button>
              <button onClick={prevSlide} data-testid="home37-prev"
                aria-label="Previous testimonial"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ border: `1px solid ${LINE}`, color: BRAND_DARK }}>
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button onClick={nextSlide} data-testid="home37-next"
                aria-label="Next testimonial"
                className={`flex h-12 w-12 items-center justify-center rounded-full ${GRAD} text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg`}>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="mt-12 overflow-hidden rounded-[28px]" data-testid="home37-slider" tabIndex={0} role="region" aria-label="Client testimonials"
            onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}
            onFocus={() => setHovering(true)} onBlur={() => setHovering(false)}
            onKeyDown={(e) => { if (e.key === "ArrowRight") { nextSlide(); setAutoplay(false); } if (e.key === "ArrowLeft") { prevSlide(); setAutoplay(false); } }}
            onTouchStart={(e) => { swipeX.current = e.touches[0].clientX; }}
            onTouchEnd={(e) => {
              if (swipeX.current === null) return;
              const dx = e.changedTouches[0].clientX - swipeX.current;
              if (Math.abs(dx) > 45) { setAutoplay(false); if (dx < 0) nextSlide(); else prevSlide(); }
              swipeX.current = null;
            }}>
            <div className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${slide * 100}%)` }}>
              {HOME37.testimonials.map((t, i) => (
                <figure key={`${t.person}-${i}`} className="w-full shrink-0" data-testid={`home37-quote-${i}`}>
                  <div className="ffh-quote-card grid grid-cols-12 items-center gap-x-0 gap-y-8 overflow-hidden bg-white p-8 transition-all duration-700 ease-out sm:gap-x-8 sm:p-12"
                    style={{ border: `1px solid ${LINE}`, boxShadow: "0 40px 80px -60px rgba(207,95,18,.55)",
                      opacity: i === slide ? 1 : 0.45, scale: i === slide ? "1" : "0.965" }}>
                    <div className="col-span-12 lg:col-span-8">
                      <div className="flex items-center gap-4">
                        <span className="ffh-quote-stars flex text-amber-500">{[0, 1, 2, 3, 4].map((k) => <Star key={k} className="h-4 w-4 fill-current" />)}</span>
                        <span className="ffh-verified inline-flex items-center rounded-full px-3 py-1 text-[11.5px] font-bold uppercase tracking-[0.16em]" style={{ background: CREAM, color: BRAND_DARK }}>
                          <Check size={13} strokeWidth={3.5} />Verified
                        </span>
                      </div>
                      <blockquote className="mt-6 text-[21px] font-medium leading-snug tracking-[-0.01em] sm:text-[25px]" style={{ color: NAVY }}>
                        “{t.text}”
                      </blockquote>
                      <figcaption className="mt-7 flex items-center gap-4">
                        <img src={`https://i.pravatar.cc/120?img=${t.img}`} alt={t.person} width="56" height="56" loading="lazy"
                          className="ffh-quote-avatar h-14 w-14 rounded-full object-cover" style={{ border: `2px solid ${CREAM}` }} />
                        <span>
                          <strong className="block text-[15.5px] font-semibold" style={{ color: NAVY }}>{t.person}</strong>
                          <span className="text-[13.5px]" style={{ color: "#6b7280" }}>{t.role}</span>
                        </span>
                      </figcaption>
                    </div>
                    <div className="col-span-12 lg:col-span-4">
                      <img src={`https://picsum.photos/id/${["7","20","180","1067","22","431"][i % 6]}/700/560`} alt="" width="700" height="560" loading="lazy"
                        className="ffh-quote-photo h-[220px] w-full rounded-2xl object-cover lg:h-[280px]" />
                    </div>
                  </div>
                </figure>
              ))}
            </div>
          </div>

          {/* autoplay progress — restarts on every slide */}
          <div className="mt-5 h-1 w-full overflow-hidden rounded-full" style={{ background: "#f2e3d1" }}>
            <div key={`${slide}-${autoplay}-${hovering}`} className="h-full rounded-full"
              style={{ background: `linear-gradient(90deg, ${BRAND}, ${BRAND_DARK})`,
                animation: autoplay && !hovering ? "ffh-h37-bar 6.5s linear forwards" : "none",
                width: autoplay && !hovering ? undefined : "100%" }} />
          </div>

          <div className="mt-8 flex items-center justify-between gap-6">
            <div className="flex items-center gap-2.5" data-testid="home37-dots">
              {HOME37.testimonials.map((t, i) => (
                <button key={t.person + i} onClick={() => { setSlide(i); setAutoplay(false); }} aria-label={`Testimonial ${i + 1}`}
                  className="h-2.5 rounded-full transition-all duration-300 hover:scale-125"
                  style={i === slide ? { width: 26, background: BRAND } : { width: 10, background: "#e7d9c8" }} />
              ))}
            </div>
            <span className="text-[13px] font-semibold tabular-nums" style={{ color: "#9ca3af" }} data-testid="home37-count">
              {slide + 1} / {HOME37.testimonials.length}
            </span>
          </div>
        </div>
      </section>

      {/* ---------- pricing: the popular plan is bigger and set apart ---------- */}
      <section id="pricing" className="relative px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[1400px]">
          <Label>Pricing table</Label>
          <div className="mt-6 flex flex-wrap items-end justify-between gap-8">
            <h2 className="max-w-2xl text-4xl font-semibold leading-[1.06] tracking-[-0.03em] sm:text-5xl lg:text-[54px]" style={{ color: NAVY }}>
              {HOME37.pricingTitle}
            </h2>
            <div className="inline-flex max-w-full flex-wrap rounded-full p-1" style={{ border: `1px solid ${LINE}`, background: "#fff" }} data-testid="home37-billing-toggle">
              {[["Monthly", false], ["Yearly", true]].map(([label, val]) => (
                <button key={label} onClick={() => setYearly(val)}
                  className="rounded-full px-3.5 py-2.5 text-[13px] font-semibold transition-all duration-300 sm:px-5 sm:text-[13.5px]"
                  style={yearly === val ? { background: NAVY, color: "#fff" } : { color: "#6b7280" }}>
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
            {PLANS.map((p) => {
              const pop = p.popular;
              return (
                <div key={p.name} data-testid={`home37-plan-${p.name.toLowerCase()}`}
                  className={`relative flex flex-col rounded-[26px] transition-transform duration-500 hover:-translate-y-2 ${pop ? "p-10 lg:-mt-10 lg:scale-[1.05]" : "p-8"}`}
                  style={pop
                    ? { border: `2px solid ${BRAND}`, background: `linear-gradient(180deg, ${CREAM} 0%, #ffffff 42%)`, boxShadow: "0 55px 95px -55px rgba(207,95,18,.8)" }
                    : { border: `1px solid ${LINE}`, background: "#fff" }}>
                  {pop && (
                    <span className={`absolute -top-4 left-9 rounded-full ${GRAD} px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white shadow-lg`}>
                      Most popular
                    </span>
                  )}
                  <h3 className={`font-semibold tracking-[-0.02em] ${pop ? "text-3xl" : "text-2xl"}`} style={{ color: NAVY }}>{p.name} plan</h3>
                  <p className="mt-2 text-[14px]" style={{ color: "#6b7280" }}>{pop ? "Everything in the other plans, plus:" : p.sub}</p>
                  <div className="mt-6 flex items-baseline gap-2">
                    <strong className={`font-semibold tracking-[-0.03em] ${pop ? "text-5xl" : "text-4xl"}`} style={{ color: NAVY }}>
                      {formatINR(yearly ? p.monthly * 10 : p.monthly)}
                    </strong>
                    <span className="text-[14px]" style={{ color: "#6b7280" }}>/{yearly ? "year" : "month"}</span>
                  </div>
                  {yearly && <span className="mt-1 text-[12.5px] font-semibold" style={{ color: BRAND }}>Two months free</span>}
                  <button onClick={(e) => go(e, "#signup")}
                    className={`mt-6 rounded-full text-[14px] font-semibold transition-all duration-300 hover:brightness-105 ${pop ? `${GRAD} px-6 py-4 text-white` : "bg-white px-6 py-3.5"}`}
                    style={pop ? {} : { color: NAVY, border: `1px solid ${LINE}` }}>
                    {p.cta}
                  </button>
                  <ul className={`mt-8 flex-1 space-y-3.5 border-t ${pop ? "pt-8" : "pt-7"}`} style={{ borderColor: LINE }}>
                    {[...p.features, ...(pop ? ["Priority onboarding and a named contact"] : [])].map((f) => (
                      <li key={f} className={`flex items-start gap-3 ${pop ? "text-[15px]" : "text-[14px]"}`} style={{ color: "#4a5568" }}>
                        <Plus className="mt-0.5 h-4 w-4 shrink-0" style={{ color: BRAND }} />{f}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- faq (animated) + contact ---------- */}
      <section id="contact" className="relative border-t px-5 py-20 sm:px-8 sm:py-24" style={{ borderColor: LINE, background: SOFT }}>
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-x-0 gap-y-12 lg:gap-x-12">
          <div className="col-span-12 lg:col-span-5">
            <Label>FAQ</Label>
            <h2 className="mt-6 text-4xl font-semibold leading-[1.06] tracking-[-0.03em] sm:text-5xl" style={{ color: NAVY }}>Get in touch with us</h2>
            <div className="mt-8 space-y-3" data-testid="home37-faq">
              {FAQS.map((f, i) => {
                const isOpen = faqOpen === i;
                return (
                  <div key={f.q} className="rounded-2xl bg-white transition-shadow duration-300 hover:shadow-lg" style={{ border: `1px solid ${LINE}` }}>
                    <button onClick={() => setFaqOpen(isOpen ? -1 : i)} aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
                      <span className="text-[15px] font-medium" style={{ color: NAVY }}>{f.q}</span>
                      <ChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} style={{ color: BRAND_DARK }} />
                    </button>
                    <div className={`grid transition-[grid-template-rows] duration-500 ease-out`} style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 text-[14px] leading-relaxed" style={{ color: "#6b7280" }}>{f.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-8"><HomeLayoutNav /></div>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <div className="rounded-[22px] bg-white p-8 transition-shadow duration-300 hover:shadow-xl" style={{ border: `1px solid ${LINE}`, boxShadow: "0 36px 70px -42px rgba(207,95,18,.45)" }}>
              <h3 className="text-2xl font-semibold tracking-[-0.02em]" style={{ color: NAVY }}>Talk to a human</h3>
              <p className="mt-3 text-[15px] leading-relaxed" style={{ color: "#4a5568" }}>
                A helpdesk staffed by people who know the product, open 24/7 in six languages — or a 20-minute walkthrough on your own numbers.
              </p>
              <ul className="mt-7 space-y-4">
                {[["Phone", "+91 92841 62015", "tel:+919284162015"], ["Email", "ffhsales@kriskrossinc.com", "mailto:ffhsales@kriskrossinc.com"]].map(([label, value, href]) => (
                  <li key={label} className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-2xl px-5 py-4 transition-transform duration-300 hover:-translate-y-0.5" style={{ background: SOFT, border: `1px solid ${LINE}` }}>
                    <span className="text-[12px] font-semibold uppercase tracking-[0.14em]" style={{ color: BRAND_DARK }}>{label}</span>
                    <a href={href} className="min-w-0 break-all text-[15px] font-semibold hover:underline" style={{ color: NAVY }}>{value}</a>
                  </li>
                ))}
              </ul>
              <button onClick={(e) => go(e, "#signup")} data-testid="home37-cta-contact"
                className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full ${GRAD} px-6 py-4 text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105`}>
                Let's get started <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- footer ---------- */}
      <footer className="px-5 pb-10 pt-14 sm:px-8" style={{ background: NAVY }} data-testid="h37-footer">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-12 gap-x-0 gap-y-10 sm:gap-x-10">
            <div className="col-span-12 lg:col-span-5">
              <div className="flex items-center gap-3">
                <img src={`${process.env.PUBLIC_URL}/ffh-logo.png`} alt="FFH ERP" width="34" height="34" className="h-[34px] w-[34px] rounded-full" />
                <Motif />
                <span className="text-[19px] font-bold tracking-tight text-white">FFH|ERP</span>
              </div>
              <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-white/65">
                Nine connected modules for sales, marketing, finance, AMC, support and projects — on one database, implemented by operators.
              </p>
            </div>
            {[
              { t: "Product", l: ["Modules", "Service", "Project", "Pricing"] },
              { t: "Company", l: ["About us", "Customers", "Careers", "Contact"] },
            ].map((c) => (
              <div key={c.t} className="col-span-6 sm:col-span-4 lg:col-span-2">
                <h6 className="text-[13px] font-semibold text-white">{c.t}</h6>
                <ul className="mt-4 space-y-3">
                  {c.l.map((l) => (
                    <li key={l}>
                      <button onClick={(e) => go(e, l === "About us" ? "/about" : l === "Pricing" ? "#pricing" : l === "Contact" ? "#contact" : "#features")}
                        className="bg-transparent text-[14px] text-white/65 transition hover:text-white">{l}</button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="col-span-12 sm:col-span-4 lg:col-span-3">
              <h6 className="text-[13px] font-semibold text-white">Follow us</h6>
              <div className="mt-4 flex flex-wrap gap-2">
                {[[Instagram, "Instagram"], [Facebook, "Facebook"], [Linkedin, "LinkedIn"], [Twitter, "X (Twitter)"], [Youtube, "YouTube"]].map(([I, label]) => (
                  <a key={label} href="#top" onClick={(e) => e.preventDefault()} aria-label={label} title={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/25 hover:text-white">
                    <I className="h-[18px] w-[18px]" strokeWidth={1.8} />
                  </a>
                ))}
              </div>
              <button onClick={(e) => go(e, "#signup")} className={`mt-6 inline-flex items-center gap-2 rounded-full ${GRAD} px-5 py-3 text-[13.5px] font-semibold text-white`}>
                Book a 20-minute walkthrough <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-6 text-[12.5px] text-white/50">
            <span>© 2025 FFH|ERP by KrisKross Inc. All rights reserved.</span>
            <span>Built in India</span>
          </div>
        </div>
      </footer>
      <SupportChat />
    </div>
  );
}
