import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, Facebook, Instagram, Linkedin, Minus, Menu, Plus, Star, Twitter, X } from "lucide-react";
import { toast } from "sonner";
import { HOME30, FAQS, PLANS, SERVING_BRANDS, formatINR } from "../../mock";
import TwSignupForm from "./TwSignupForm";
import HomeLayoutNav from "./HomeLayoutNav";
import { useGoTo } from "./crmStore";

// Layout 30 — after Vixcra, kept in its creative-studio register: white canvas
// with a graph-paper grid, light violet #f1aaff accent, Syne display type, a
// staggered hero headline, a marquee, animated counters, an image accordion of
// services, a filterable project grid and a monthly/yearly pricing toggle.
// Tailwind only, no Bootstrap.
const VIOLET = "#f1aaff";

const NAV = [
  { label: "Home", target: "#top" },
  { label: "About Us", target: "#why" },
  { label: "Service", target: "#features" },
  { label: "Project", target: "#modules" },
  { label: "Pricing Table", target: "#pricing" },
];

const GridLines = ({ className = "" }) => (
  <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
    <div className="absolute inset-0 ffh-h30-grid-lines" />
  </div>
);

const Label = ({ children, className = "" }) => (
  <span className={`font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-black/55 ${className}`}>_{children}</span>
);

const Counter = ({ value, suffix = "" }) => {
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
  const shown = target % 1 === 0 ? Math.round(n) : n.toFixed(0);
  return <span ref={ref}>{shown}{String(value).replace(/[\d.]/g, "")}{suffix}</span>;
};

export default function Home30() {
  const goTo = useGoTo();
  const [open, setOpen] = useState(false);
  const [openService, setOpenService] = useState(0);
  const [filter, setFilter] = useState("All");
  const [yearly, setYearly] = useState(false);

  useEffect(() => { document.title = "FFH|ERP — The complete business system"; }, []);
  const go = (e, t) => { e.preventDefault(); setOpen(false); goTo(t); };

  const projects = filter === "All" ? HOME30.projects : HOME30.projects.filter((p) => p.tag === filter);

  return (
    <div className="ffh-tw ffh-h30 min-h-screen bg-white font-[Poppins] text-black antialiased" data-testid="home30-page">
      {/* ---------- nav ---------- */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-md" data-testid="h30-nav">
        <div className="mx-auto flex h-[68px] max-w-[1400px] items-center gap-6 px-5 sm:px-8">
          <a href="#top" onClick={(e) => go(e, "#top")} className="text-[28px] font-semibold lowercase tracking-[-0.03em]">
            ffh<span className="text-[#d977f5]">|</span>erp
          </a>
          <nav className="mx-auto hidden items-center gap-8 lg:flex">
            {NAV.map((l) => (
              <a key={l.label} href={l.target} onClick={(e) => go(e, l.target)}
                className="text-[13.5px] font-medium text-black/70 transition hover:text-black">{l.label}</a>
            ))}
          </nav>
          <button onClick={(e) => go(e, "#contact")} data-testid="h30-cta"
            className="ml-auto hidden items-center gap-2 rounded-full px-5 py-3 text-[13.5px] font-medium text-black transition hover:brightness-105 lg:inline-flex"
            style={{ backgroundColor: VIOLET }}>
            Contact Us <ArrowUpRight className="h-4 w-4" />
          </button>
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" data-testid="h30-burger"
            className="ml-auto bg-transparent p-2 lg:hidden">{open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</button>
        </div>
        {open && (
          <div className="border-t border-black/5 bg-white px-5 pb-6 pt-2 lg:hidden">
            {NAV.map((l) => (
              <a key={l.label} href={l.target} onClick={(e) => go(e, l.target)} className="block py-3 text-sm font-medium text-black/75">{l.label}</a>
            ))}
            <button onClick={(e) => go(e, "#contact")} className="mt-3 w-full rounded-full px-5 py-3 text-sm font-medium" style={{ backgroundColor: VIOLET }}>Contact Us</button>
          </div>
        )}
      </header>

      {/* ---------- hero ---------- */}
      <section id="top" className="relative overflow-hidden px-5 pb-10 pt-12 sm:px-8">
        <GridLines />
        <div className="relative mx-auto max-w-[1400px]">
          <span className="inline-flex rounded-full px-5 py-2.5 text-[13px] font-medium" style={{ backgroundColor: VIOLET }}>
            {HOME30.badge}
          </span>
          <h1 className="mt-8 text-[13vw] font-semibold leading-[0.98] tracking-[-0.04em] sm:text-[9vw] lg:text-[105px]">
            {HOME30.titleA}
            <span className="block lg:ml-[13%]">{HOME30.titleB}</span>
          </h1>

          <div className="mt-14 grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8">
              <img src="https://picsum.photos/id/7/1200/860" alt="Team running the business on FFH|ERP" width="1200" height="860" loading="eager"
                className="h-[300px] w-full rounded-lg object-cover sm:h-[440px]" />
            </div>
            <div className="col-span-12 flex flex-col justify-between lg:col-span-4">
              <div className="relative overflow-hidden rounded-lg">
                <img src="https://picsum.photos/id/366/800/560?blur=3" alt="" width="800" height="560" loading="lazy"
                  className="h-[190px] w-full object-cover" />
                <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[12px] font-medium shadow-sm">
                  <Star className="h-3.5 w-3.5 fill-current text-[#d977f5]" />{HOME30.rating}
                </span>
              </div>
              <p className="mt-6 text-[15px] font-semibold leading-relaxed">{HOME30.ratingText}</p>
              <p className="mt-4 text-[14.5px] leading-relaxed text-black/65">{HOME30.lead}</p>
              <button onClick={(e) => go(e, "#contact")} data-testid="home30-cta-trial"
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-full px-6 py-3.5 text-[14px] font-medium transition hover:brightness-105"
                style={{ backgroundColor: VIOLET }}>
                {HOME30.cta} <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- brand marquee ---------- */}
      <section className="relative overflow-hidden border-y border-black/5 py-8">
        <div className="ffh-marquee flex w-max items-center gap-14">
          {[...SERVING_BRANDS, ...SERVING_BRANDS].map((b, i) => (
            <span key={i} className="flex shrink-0 items-center gap-3 text-[22px] font-semibold tracking-[-0.02em] text-black/70">
              <span className="h-7 w-7 rounded-full bg-black/10" />{b.name}
            </span>
          ))}
        </div>
      </section>

      {/* ---------- about + counters ---------- */}
      <section id="why" className="relative px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[1400px]">
          <Label>About us</Label>
          <div className="mt-8 grid grid-cols-12 items-end gap-10">
            <h2 className="col-span-12 text-3xl font-semibold leading-[1.14] tracking-[-0.03em] sm:text-4xl lg:col-span-9 lg:text-[46px]">
              We are an ERP team that has run the businesses we build for — we craft systems that hold up on the busiest day of the month, not just in the demo.
            </h2>
            <div className="col-span-12 lg:col-span-3 lg:text-right">
              <button onClick={(e) => go(e, "#contact")}
                className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[14px] font-medium transition hover:brightness-105"
                style={{ backgroundColor: VIOLET }}>
                Contact <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {HOME30.stats.map((s, i) => (
              <div key={s.label} data-testid={`home30-stat-${i}`}>
                <strong className="block text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">
                  <Counter value={s.value} />
                </strong>
                <span className="mt-2 block text-[15px] font-semibold">{s.label}</span>
                <span className="mt-5 block text-[13px] font-semibold uppercase tracking-[0.12em] text-black/45">{s.note}</span>
                <p className="mt-2 text-[13.5px] leading-relaxed text-black/60">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- services accordion ---------- */}
      <section id="features" className="relative border-y border-black/5 bg-[#fafafa] px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[1400px]">
          <Label>Our services</Label>
          <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.06] tracking-[-0.03em] sm:text-5xl lg:text-[56px]">
            Creative solutions for every business need
          </h2>

          <div className="mt-14 divide-y divide-black/10 border-y border-black/10">
            {HOME30.services.map((s, i) => {
              const isOpen = openService === i;
              return (
                <div key={s.name} data-testid={`home30-service-${i}`}>
                  <button onClick={() => setOpenService(isOpen ? -1 : i)}
                    className="flex w-full items-center gap-6 py-7 text-left transition hover:opacity-80">
                    <span className="font-mono text-[12px] text-black/40">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-2xl font-semibold tracking-[-0.02em] sm:text-3xl lg:text-[34px]">{s.name}</span>
                    <span className="ml-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/15">
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="grid grid-cols-12 items-center gap-8 pb-9">
                      <p className="col-span-12 text-[15px] leading-relaxed text-black/70 lg:col-span-4">{s.text}</p>
                      <img src={`https://picsum.photos/id/${s.img}/1000/560`} alt="" width="1000" height="560" loading="lazy"
                        className="col-span-12 h-[240px] w-full rounded-lg object-cover lg:col-span-6" />
                      <div className="col-span-12 lg:col-span-2 lg:text-right">
                        <button onClick={(e) => go(e, "#contact")}
                          className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-[13.5px] font-medium transition hover:brightness-105"
                          style={{ backgroundColor: VIOLET }}>
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

      {/* ---------- projects (filterable) ---------- */}
      <section id="modules" className="relative px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[1400px]">
          <Label>Project</Label>
          <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.06] tracking-[-0.03em] sm:text-5xl lg:text-[56px]">
            Deployments that deliver results
          </h2>

          <div className="mt-10 flex flex-wrap gap-2.5">
            {HOME30.filters.map((f) => (
              <button key={f} onClick={() => setFilter(f)} data-testid={`home30-filter-${f.toLowerCase()}`}
                className={`rounded-full border px-4 py-2 text-[13px] font-medium transition ${filter === f ? "border-black bg-black text-white" : "border-black/15 text-black/70 hover:border-black/40"}`}>
                {f}
              </button>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <article key={`${p.title}-${i}`} data-testid={`home30-project-${i}`} className="group">
                <div className="overflow-hidden rounded-lg">
                  <img src={`https://picsum.photos/id/${p.img}/900/640`} alt={p.title} width="900" height="640" loading="lazy"
                    className="h-[240px] w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
                </div>
                <div className="mt-5 flex items-center justify-between text-[12px] font-semibold uppercase tracking-[0.14em] text-black/45">
                  <span>{p.tag}</span><span>{p.meta}</span>
                </div>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em]">{p.title}</h3>
                <span className="mt-2 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[13px] font-medium" style={{ backgroundColor: VIOLET }}>
                  {p.price}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- testimonials ---------- */}
      <section className="relative border-y border-black/5 bg-[#fafafa] px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[1400px]">
          <Label>Client satisfaction</Label>
          <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.06] tracking-[-0.03em] sm:text-5xl lg:text-[56px]">
            What our clients say about us
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {HOME30.testimonials.map((t, i) => (
              <figure key={t.person} data-testid={`home30-quote-${i}`} className="flex h-full flex-col rounded-lg border border-black/10 bg-white p-7">
                <div className="flex text-[#d977f5]">{[0, 1, 2, 3, 4].map((s) => <Star key={s} className="h-4 w-4 fill-current" />)}</div>
                <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-black/75">“{t.text}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-black/5 pt-5">
                  <img src={`https://i.pravatar.cc/100?img=${t.img}`} alt={t.person} width="44" height="44" loading="lazy" className="h-11 w-11 rounded-full object-cover" />
                  <span>
                    <strong className="block text-[14.5px] font-semibold">{t.person}</strong>
                    <span className="text-[13px] text-black/55">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- pricing with monthly/yearly ---------- */}
      <section id="pricing" className="relative px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[1400px]">
          <Label>Pricing table</Label>
          <div className="mt-6 flex flex-wrap items-end justify-between gap-8">
            <h2 className="max-w-2xl text-4xl font-semibold leading-[1.06] tracking-[-0.03em] sm:text-5xl lg:text-[56px]">
              {HOME30.pricingNote}
            </h2>
            <div className="inline-flex rounded-full border border-black/15 p-1" data-testid="home30-billing-toggle">
              {[["Monthly", false], ["Yearly", true]].map(([label, val]) => (
                <button key={label} onClick={() => setYearly(val)}
                  className={`rounded-full px-5 py-2.5 text-[13.5px] font-medium transition ${yearly === val ? "bg-black text-white" : "text-black/60"}`}>
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {PLANS.map((p) => (
              <div key={p.name} data-testid={`home30-plan-${p.name.toLowerCase()}`}
                className={`flex flex-col rounded-lg border p-8 ${p.popular ? "border-black/25 bg-[#faf7ff]" : "border-black/10"}`}>
                {p.popular && <span className="mb-4 w-fit rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ backgroundColor: VIOLET }}>Most popular</span>}
                <h3 className="text-2xl font-semibold tracking-[-0.02em]">{p.name} plan</h3>
                <p className="mt-2 text-[14px] text-black/60">{p.sub}</p>
                <div className="mt-6 flex items-baseline gap-2">
                  <strong className="text-4xl font-semibold tracking-[-0.03em]">{formatINR(yearly ? p.monthly * 10 : p.monthly)}</strong>
                  <span className="text-[14px] text-black/55">/{yearly ? "year" : "month"}</span>
                </div>
                {yearly && <span className="mt-1 text-[12.5px] font-medium text-[#a855f7]">Two months free</span>}
                <button onClick={(e) => go(e, "#signup")}
                  className="mt-6 rounded-full px-6 py-3.5 text-[14px] font-medium transition hover:brightness-105"
                  style={{ backgroundColor: VIOLET }}>
                  {p.cta}
                </button>
                <ul className="mt-8 flex-1 space-y-3.5 border-t border-black/10 pt-7">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[14px] text-black/70">
                      <Plus className="mt-0.5 h-4 w-4 shrink-0 text-[#a855f7]" />{f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- faq + contact ---------- */}
      <section id="contact" className="relative border-t border-black/5 bg-[#fafafa] px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-12">
          <div className="col-span-12 lg:col-span-5">
            <Label>FAQ</Label>
            <h2 className="mt-6 text-4xl font-semibold leading-[1.06] tracking-[-0.03em] sm:text-5xl">Get in touch with us</h2>
            <div className="mt-8 space-y-3">
              {FAQS.map((f, i) => (
                <details key={f.q} open={i === 0} className="group rounded-lg border border-black/10 bg-white px-5 py-4">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-[15px] font-medium [&::-webkit-details-marker]:hidden">
                    {f.q}<ChevronDown className="h-4 w-4 shrink-0 transition group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 text-[14px] leading-relaxed text-black/65">{f.a}</p>
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
      <footer className="border-t border-black/10 px-5 pb-10 pt-14 sm:px-8" data-testid="h30-footer">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 lg:col-span-5">
              <span className="text-[32px] font-semibold lowercase tracking-[-0.03em]">ffh<span className="text-[#d977f5]">|</span>erp</span>
              <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-black/60">
                Nine connected modules for sales, marketing, finance, AMC, support and projects — on one database, implemented by operators.
              </p>
            </div>
            {[
              { t: "Product", l: ["Modules", "Service", "Project", "Pricing"] },
              { t: "Company", l: ["About us", "Customers", "Careers", "Contact"] },
            ].map((c) => (
              <div key={c.t} className="col-span-6 sm:col-span-4 lg:col-span-2">
                <h6 className="text-[13px] font-semibold">{c.t}</h6>
                <ul className="mt-4 space-y-3">
                  {c.l.map((l) => (
                    <li key={l}>
                      <button onClick={(e) => go(e, l === "About us" ? "/about" : l === "Pricing" ? "#pricing" : l === "Contact" ? "#contact" : "#features")}
                        className="bg-transparent text-[14px] text-black/60 transition hover:text-black">{l}</button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="col-span-12 sm:col-span-4 lg:col-span-3">
              <h6 className="text-[13px] font-semibold">Follow us</h6>
              <div className="mt-4 flex gap-2">
                {[Instagram, Twitter, Linkedin, Facebook].map((I, i) => (
                  <a key={i} href="#top" onClick={(e) => e.preventDefault()}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 text-black/70 transition hover:bg-black hover:text-white">
                    <I className="h-4 w-4" />
                  </a>
                ))}
              </div>
              <button onClick={() => toast("Thanks — we'll be in touch.")}
                className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-3 text-[13.5px] font-medium"
                style={{ backgroundColor: VIOLET }}>
                Book a 20-minute walkthrough <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-6 text-[12.5px] text-black/50">
            <span>© 2025 FFH|ERP by KrisKross Inc. All rights reserved.</span>
            <span>Built in India</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
