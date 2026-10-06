import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, IndianRupee, Menu, Minus, Plus, Star, TrendingUp, Users, X } from "lucide-react";
import { HOME32, HOME30, FAQS, PLANS, CRM_SEED, SERVING_BRANDS, formatINR } from "../../mock";
import TwSignupForm from "./TwSignupForm";
import HomeLayoutNav from "./HomeLayoutNav";
import { useGoTo } from "./crmStore";

// Layout 32 — a merge of two approved pages:
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

const NAV = [
  { label: "Home", target: "#top" },
  { label: "About Us", target: "#why" },
  { label: "Service", target: "#features" },
  { label: "Project", target: "#modules" },
  { label: "Pricing Table", target: "#pricing" },
];

const Motif = ({ className = "" }) => (
  <span className={`ffh-h32-motif ${className}`} aria-hidden="true"><i /><i /><i /><i /></span>
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
        const p = Math.min((t - t0) / 1300, 1);
        setN(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); if (raf) cancelAnimationFrame(raf); };
  }, [target]);
  // keep however many decimals the source value has ("2.5K" must not read "3K")
  const decimals = (String(value).match(/\.(\d+)/) || ["", ""])[1].length;
  return <span ref={ref}>{n.toFixed(decimals)}{String(value).replace(/[\d.]/g, "")}</span>;
};

export default function Home32() {
  const goTo = useGoTo();
  const [open, setOpen] = useState(false);
  const [openService, setOpenService] = useState(0);
  const [filter, setFilter] = useState("All");
  const [yearly, setYearly] = useState(false);

  useEffect(() => { document.title = "FFH|ERP — See today's business, not last month's report"; }, []);
  const go = (e, t) => { e.preventDefault(); setOpen(false); goTo(t); };

  const won = CRM_SEED.leads.filter((l) => l.stage === "Won").reduce((s, l) => s + l.value, 0);
  const openLeads = CRM_SEED.leads.filter((l) => l.stage !== "Won").length;
  const openTickets = CRM_SEED.tickets.filter((t) => t.open).length;
  const bars = CRM_SEED.finance.slice(0, 6).map((f) => f.amount);
  const maxBar = Math.max(...bars, 1);
  const projects = filter === "All" ? HOME30.projects : HOME30.projects.filter((p) => p.tag === filter);
  const active = HOME30.services[openService] || HOME30.services[0];

  return (
    <div className="ffh-tw ffh-h32 ffh-logo-theme min-h-screen bg-white font-[Poppins] antialiased" data-testid="home32-page">
      {/* ---------- nav ---------- */}
      <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md" style={{ borderColor: LINE }} data-testid="h32-nav">
        <div className="mx-auto flex h-[70px] max-w-[1400px] items-center gap-6 px-5 sm:px-8">
          <a href="#top" onClick={(e) => go(e, "#top")} className="flex items-center gap-3">
            <img src={`${process.env.PUBLIC_URL}/ffh-logo.png`} alt="FFH ERP" width="34" height="34" className="h-[34px] w-[34px] rounded-full" />
            <Motif />
            <span className="text-[19px] font-bold tracking-tight" style={{ color: NAVY }}>FFH|ERP</span>
          </a>
          <nav className="mx-auto hidden items-center gap-8 lg:flex">
            {NAV.map((l) => (
              <a key={l.label} href={l.target} onClick={(e) => go(e, l.target)} className="text-[13.5px] font-medium transition hover:opacity-70" style={{ color: NAVY }}>
                {l.label}
              </a>
            ))}
          </nav>
          <button onClick={(e) => go(e, "#contact")} data-testid="h32-cta"
            className={`ml-auto hidden items-center gap-2 rounded-full ${GRAD} px-5 py-3 text-[13.5px] font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:brightness-105 lg:inline-flex`}>
            Contact Us <ArrowUpRight className="h-4 w-4" />
          </button>
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" data-testid="h32-burger"
            className="ml-auto bg-transparent p-2 lg:hidden" style={{ color: NAVY }}>{open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</button>
        </div>
        {open && (
          <div className="bg-white px-5 pb-6 pt-2 lg:hidden" style={{ borderTop: `1px solid ${LINE}` }}>
            {NAV.map((l) => (
              <a key={l.label} href={l.target} onClick={(e) => go(e, l.target)} className="block py-3 text-sm font-medium" style={{ color: NAVY }}>{l.label}</a>
            ))}
            <button onClick={(e) => go(e, "#contact")} className={`mt-3 w-full rounded-full ${GRAD} px-5 py-3 text-sm font-semibold text-white`}>Contact Us</button>
          </div>
        )}
      </header>

      {/* ---------- hero: logo theme + creative stagger ---------- */}
      <section id="top" className="relative overflow-hidden px-5 pb-16 pt-14 sm:px-8" style={{ background: `linear-gradient(160deg, ${SOFT} 0%, #ffffff 55%, ${CREAM} 100%)` }}>
        <GridLines />
        <div className="relative mx-auto max-w-[1400px]">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[13px] font-medium shadow-sm" style={{ color: NAVY, border: `1px solid ${LINE}` }}>
            <span className="h-2 w-2 rounded-full" style={{ background: BRAND }} />{HOME32.eyebrow}
          </span>

          <h1 className="mt-8 text-[12vw] font-semibold leading-[0.98] tracking-[-0.04em] sm:text-[8vw] lg:text-[92px]" style={{ color: NAVY }}>
            {HOME32.titleA}
            <span className={`block lg:ml-[12%] ${GRAD_TEXT}`}>{HOME32.titleB}</span>
          </h1>

          <div className="mt-12 grid grid-cols-12 gap-10">
            <div className="col-span-12 lg:col-span-6">
              <p className="max-w-xl text-[15.5px] leading-relaxed" style={{ color: "#4a5568" }}>{HOME32.lead}</p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button onClick={(e) => go(e, "#signup")} data-testid="home32-cta-trial"
                  className={`inline-flex items-center gap-2 rounded-full ${GRAD} px-7 py-4 text-[14px] font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:brightness-105`}>
                  Start free trial <ArrowUpRight className="h-4 w-4" />
                </button>
                <button onClick={(e) => go(e, "#modules")} data-testid="home32-cta-modules"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-[14px] font-semibold transition hover:bg-black/5"
                  style={{ color: NAVY, border: `1px solid ${LINE}` }}>
                  Explore more <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {HOME32.chips.map((c) => (
                  <div key={c.label} className="rounded-2xl bg-white p-5" style={{ border: `1px solid ${LINE}` }}>
                    <strong className="block text-2xl font-semibold tracking-tight" style={{ color: BRAND }}>{c.value}</strong>
                    <span className="mt-1 block text-[12.5px] leading-snug" style={{ color: "#6b7280" }}>{c.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex items-center gap-3">
                <span className="flex text-amber-500">{[0, 1, 2, 3, 4].map((i) => <Star key={i} className="h-4 w-4 fill-current" />)}</span>
                <span className="text-[13px]" style={{ color: "#6b7280" }}><strong style={{ color: NAVY }}>{HOME32.rating.score}</strong> — {HOME32.rating.text}</span>
              </div>
            </div>

            {/* Home12's live panel, in the logo theme */}
            <div className="col-span-12 lg:col-span-6">
              <div className="rounded-[22px] bg-white p-6" data-testid="home32-panel"
                style={{ border: `1px solid ${LINE}`, boxShadow: "0 36px 70px -42px rgba(207,95,18,.55)" }}>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-[15px] font-semibold" style={{ color: NAVY }}>
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />{HOME32.panel.title}
                  </span>
                  <span className="text-[12px]" style={{ color: "#9ca3af" }}>just now</span>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3">
                  {[{ icon: IndianRupee, l: "Revenue (won)", v: formatINR(won) }, { icon: Users, l: "Open leads", v: openLeads }, { icon: TrendingUp, l: "Open tickets", v: openTickets }].map((k) => (
                    <div key={k.l} className="rounded-2xl p-4" style={{ background: SOFT, border: `1px solid ${LINE}` }}>
                      <k.icon size={15} style={{ color: BRAND_DARK }} />
                      <span className="mt-2 block text-[11px] leading-tight" style={{ color: "#9a8471" }}>{k.l}</span>
                      <strong className="mt-1 block text-[19px] font-bold" style={{ color: NAVY }}>{k.v}</strong>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex h-[150px] items-end gap-3">
                  {bars.map((b, i) => (
                    <span key={i} className="flex-1 rounded-t-lg" title={formatINR(b)}
                      style={{ height: `${Math.max(18, (b / maxBar) * 100)}%`, background: i === bars.length - 1 ? `linear-gradient(180deg,#f7a52a,#f0452c)` : i % 2 ? "#fbd9b4" : "#f9c78d" }} />
                  ))}
                </div>

                <ul className="mt-6 space-y-3 border-t pt-5" style={{ borderColor: LINE }}>
                  {HOME32.feed.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[13px]" style={{ color: "#4a5568" }}>
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: BRAND }} />{f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- marquee ---------- */}
      <section className="overflow-hidden border-y py-8" style={{ borderColor: LINE, background: SOFT }}>
        <div className="ffh-marquee flex w-max items-center gap-14">
          {[...SERVING_BRANDS, ...SERVING_BRANDS].map((b, i) => (
            <span key={i} className="flex shrink-0 items-center gap-3 text-[21px] font-semibold tracking-[-0.02em]" style={{ color: NAVY }}>
              <span className="h-7 w-7 rounded-full" style={{ background: CREAM, border: `1px solid ${LINE}` }} />{b.name}
            </span>
          ))}
        </div>
      </section>

      {/* ---------- about + counters ---------- */}
      <section id="why" className="relative px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[1400px]">
          <Label>About us</Label>
          <div className="mt-8 grid grid-cols-12 items-end gap-10">
            <h2 className="col-span-12 text-3xl font-semibold leading-[1.14] tracking-[-0.03em] sm:text-4xl lg:col-span-9 lg:text-[44px]" style={{ color: NAVY }}>
              {HOME32.aboutTitle}
            </h2>
            <div className="col-span-12 lg:col-span-3 lg:text-right">
              <button onClick={(e) => go(e, "#contact")} className={`inline-flex items-center gap-2 rounded-full ${GRAD} px-6 py-3.5 text-[14px] font-semibold text-white transition hover:brightness-105`}>
                Contact <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {HOME30.stats.map((s, i) => (
              <div key={s.label} data-testid={`home32-stat-${i}`}>
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

      {/* ---------- services accordion ---------- */}
      <section id="features" className="relative border-y px-5 py-20 sm:px-8 sm:py-24" style={{ borderColor: LINE, background: SOFT }}>
        <div className="mx-auto max-w-[1400px]">
          <Label>Our services</Label>
          <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.06] tracking-[-0.03em] sm:text-5xl lg:text-[54px]" style={{ color: NAVY }}>
            {HOME32.servicesTitle}
          </h2>

          <div className="mt-14 border-y" style={{ borderColor: LINE }}>
            {HOME30.services.map((s, i) => {
              const isOpen = openService === i;
              return (
                <div key={s.name} className="border-b last:border-b-0" style={{ borderColor: LINE }} data-testid={`home32-service-${i}`}>
                  <button onClick={() => setOpenService(isOpen ? -1 : i)} className="flex w-full items-center gap-6 py-7 text-left transition hover:opacity-80">
                    <span className="font-mono text-[12px]" style={{ color: BRAND_DARK }}>{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-2xl font-semibold tracking-[-0.02em] sm:text-3xl lg:text-[32px]" style={{ color: NAVY }}>{s.name}</span>
                    <span className="ml-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-full" style={{ border: `1px solid ${LINE}`, background: "#fff", color: BRAND_DARK }}>
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="grid grid-cols-12 items-center gap-8 pb-9">
                      <p className="col-span-12 text-[15px] leading-relaxed lg:col-span-4" style={{ color: "#4a5568" }}>{s.text}</p>
                      <img src={`https://picsum.photos/id/${s.img}/1000/560`} alt="" width="1000" height="560" loading="lazy"
                        className="col-span-12 h-[240px] w-full rounded-2xl object-cover lg:col-span-6" />
                      <div className="col-span-12 lg:col-span-2 lg:text-right">
                        <button onClick={(e) => go(e, "#contact")} className={`inline-flex items-center gap-2 rounded-full ${GRAD} px-5 py-3 text-[13.5px] font-semibold text-white transition hover:brightness-105`}>
                          Contact Us <ArrowUpRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- filterable projects ---------- */}
      <section id="modules" className="relative px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[1400px]">
          <Label>Project</Label>
          <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.06] tracking-[-0.03em] sm:text-5xl lg:text-[54px]" style={{ color: NAVY }}>
            {HOME32.projectsTitle}
          </h2>

          <div className="mt-10 flex flex-wrap gap-2.5">
            {HOME30.filters.map((f) => (
              <button key={f} onClick={() => setFilter(f)} data-testid={`home32-filter-${f.toLowerCase()}`}
                className="rounded-full px-4 py-2 text-[13px] font-medium transition"
                style={filter === f ? { background: NAVY, color: "#fff", border: `1px solid ${NAVY}` } : { border: `1px solid ${LINE}`, color: "#6b7280", background: "#fff" }}>
                {f}
              </button>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <article key={`${p.title}-${i}`} data-testid={`home32-project-${i}`} className="group">
                <div className="overflow-hidden rounded-2xl">
                  <img src={`https://picsum.photos/id/${p.img}/900/640`} alt={p.title} width="900" height="640" loading="lazy"
                    className="h-[240px] w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
                </div>
                <div className="mt-5 flex items-center justify-between text-[12px] font-semibold uppercase tracking-[0.14em]" style={{ color: BRAND_DARK }}>
                  <span>{p.tag}</span><span style={{ color: "#9ca3af" }}>{p.meta}</span>
                </div>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em]" style={{ color: NAVY }}>{p.title}</h3>
                <span className="mt-2 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[13px] font-semibold" style={{ background: CREAM, color: BRAND_DARK }}>{p.price}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- testimonials ---------- */}
      <section className="relative border-y px-5 py-20 sm:px-8 sm:py-24" style={{ borderColor: LINE, background: SOFT }}>
        <div className="mx-auto max-w-[1400px]">
          <Label>Client satisfaction</Label>
          <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.06] tracking-[-0.03em] sm:text-5xl lg:text-[54px]" style={{ color: NAVY }}>
            {HOME32.clientsTitle}
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {HOME30.testimonials.map((t, i) => (
              <figure key={t.person} data-testid={`home32-quote-${i}`} className="flex h-full flex-col rounded-2xl bg-white p-7" style={{ border: `1px solid ${LINE}` }}>
                <div className="flex text-amber-500">{[0, 1, 2, 3, 4].map((s) => <Star key={s} className="h-4 w-4 fill-current" />)}</div>
                <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed" style={{ color: "#4a5568" }}>“{t.text}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t pt-5" style={{ borderColor: LINE }}>
                  <img src={`https://i.pravatar.cc/100?img=${t.img}`} alt={t.person} width="44" height="44" loading="lazy" className="h-11 w-11 rounded-full object-cover" />
                  <span>
                    <strong className="block text-[14.5px] font-semibold" style={{ color: NAVY }}>{t.person}</strong>
                    <span className="text-[13px]" style={{ color: "#6b7280" }}>{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- pricing + billing toggle ---------- */}
      <section id="pricing" className="relative px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[1400px]">
          <Label>Pricing table</Label>
          <div className="mt-6 flex flex-wrap items-end justify-between gap-8">
            <h2 className="max-w-2xl text-4xl font-semibold leading-[1.06] tracking-[-0.03em] sm:text-5xl lg:text-[54px]" style={{ color: NAVY }}>
              {HOME32.pricingTitle}
            </h2>
            <div className="inline-flex rounded-full p-1" style={{ border: `1px solid ${LINE}`, background: "#fff" }} data-testid="home32-billing-toggle">
              {[["Monthly", false], ["Yearly", true]].map(([label, val]) => (
                <button key={label} onClick={() => setYearly(val)}
                  className="rounded-full px-5 py-2.5 text-[13.5px] font-semibold transition"
                  style={yearly === val ? { background: NAVY, color: "#fff" } : { color: "#6b7280" }}>
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {PLANS.map((p) => (
              <div key={p.name} data-testid={`home32-plan-${p.name.toLowerCase()}`}
                className="flex flex-col rounded-2xl p-8"
                style={p.popular ? { border: `2px solid ${BRAND}`, background: SOFT, boxShadow: "0 30px 60px -40px rgba(207,95,18,.6)" } : { border: `1px solid ${LINE}`, background: "#fff" }}>
                {p.popular && <span className={`mb-4 w-fit rounded-full ${GRAD} px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white`}>Most popular</span>}
                <h3 className="text-2xl font-semibold tracking-[-0.02em]" style={{ color: NAVY }}>{p.name} plan</h3>
                <p className="mt-2 text-[14px]" style={{ color: "#6b7280" }}>{p.sub}</p>
                <div className="mt-6 flex items-baseline gap-2">
                  <strong className="text-4xl font-semibold tracking-[-0.03em]" style={{ color: NAVY }}>{formatINR(yearly ? p.monthly * 10 : p.monthly)}</strong>
                  <span className="text-[14px]" style={{ color: "#6b7280" }}>/{yearly ? "year" : "month"}</span>
                </div>
                {yearly && <span className="mt-1 text-[12.5px] font-semibold" style={{ color: BRAND }}>Two months free</span>}
                <button onClick={(e) => go(e, "#signup")}
                  className={`mt-6 rounded-full px-6 py-3.5 text-[14px] font-semibold transition hover:brightness-105 ${p.popular ? `${GRAD} text-white` : "bg-white"}`}
                  style={p.popular ? {} : { color: NAVY, border: `1px solid ${LINE}` }}>
                  {p.cta}
                </button>
                <ul className="mt-8 flex-1 space-y-3.5 border-t pt-7" style={{ borderColor: LINE }}>
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[14px]" style={{ color: "#4a5568" }}>
                      <Plus className="mt-0.5 h-4 w-4 shrink-0" style={{ color: BRAND }} />{f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- faq + form ---------- */}
      <section id="contact" className="relative border-t px-5 py-20 sm:px-8 sm:py-24" style={{ borderColor: LINE, background: SOFT }}>
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-12">
          <div className="col-span-12 lg:col-span-5">
            <Label>FAQ</Label>
            <h2 className="mt-6 text-4xl font-semibold leading-[1.06] tracking-[-0.03em] sm:text-5xl" style={{ color: NAVY }}>Get in touch with us</h2>
            <div className="mt-8 space-y-3">
              {FAQS.map((f, i) => (
                <details key={f.q} open={i === 0} className="group rounded-2xl bg-white px-5 py-4" style={{ border: `1px solid ${LINE}` }}>
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-[15px] font-medium [&::-webkit-details-marker]:hidden" style={{ color: NAVY }}>
                    {f.q}<ChevronDown className="h-4 w-4 shrink-0 transition group-open:rotate-180" style={{ color: BRAND_DARK }} />
                  </summary>
                  <p className="mt-3 text-[14px] leading-relaxed" style={{ color: "#6b7280" }}>{f.a}</p>
                </details>
              ))}
            </div>
            <div className="mt-8"><HomeLayoutNav /></div>
          </div>
          <div className="col-span-12 flex justify-center lg:col-span-7 lg:justify-end">
            <TwSignupForm variant="light" title="Let's get started" />
          </div>
        </div>
      </section>

      {/* ---------- footer ---------- */}
      <footer className="px-5 pb-10 pt-14 sm:px-8" style={{ background: NAVY }} data-testid="h32-footer">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-12 gap-10">
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
              <div className="mt-4 flex gap-2">
                {["Instagram", "Twitter", "LinkedIn", "Facebook"].map((s) => (
                  <span key={s} title={s} className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[11px] font-semibold text-white/80">{s[0]}</span>
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
    </div>
  );
}
