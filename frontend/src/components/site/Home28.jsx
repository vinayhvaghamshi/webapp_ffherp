import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Facebook, Instagram, Linkedin, Menu, Minus, Plus, Quote, Star, X, Youtube } from "lucide-react";
import { toast } from "sonner";
import { HOME28, PLANS, SERVING_BRANDS, formatINR } from "../../mock";
import Icon from "./TwIcon";
import TwSignupForm from "./TwSignupForm";
import HomeLayoutNav from "./HomeLayoutNav";
import { useGoTo } from "./crmStore";

// Layout 28 — after the Semssy template: near-black #15141a, warm off-white
// type, DM Sans with italic Playfair accents on the second half of every
// heading, [ bracketed ] eyebrows, bullet-separated nav, square-dot buttons,
// a logo ticker, animated counters, tabs and a testimonial carousel.
// Tailwind only, no Bootstrap.
const NAV = [
  { label: "About", target: "#features" },
  { label: "Modules", target: "#modules" },
  { label: "Why us", target: "#why" },
  { label: "Pricing", target: "#pricing" },
];

const Eyebrow = ({ children }) => (
  <span className="block text-xs font-medium uppercase tracking-[0.24em] text-[#fffefc]/45">[ {children} ]</span>
);

// the template's signature: roman first half, italic serif second half
const Display = ({ a, b, className = "" }) => (
  <h2 className={`text-4xl font-medium leading-[1.06] tracking-[-0.02em] text-[#fffefc] sm:text-5xl lg:text-[56px] ${className}`}>
    {a} <em className="font-['Playfair_Display'] font-medium italic">{b}</em>
  </h2>
);

const Dot = () => <span className="ml-2 inline-block h-1.5 w-1.5 translate-y-[-1px] bg-current align-middle" />;

const Counter = ({ value, suffix }) => {
  const ref = useRef(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf;
    const io = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (t) => {
        const p = Math.min((t - start) / 1400, 1);
        setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); if (raf) cancelAnimationFrame(raf); };
  }, [value]);
  return <span ref={ref}>{n}{suffix}</span>;
};

export default function Home28() {
  const goTo = useGoTo();
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState(0);
  const [slide, setSlide] = useState(0);

  useEffect(() => { document.title = "FFH|ERP — Run the whole business through one system"; }, []);
  const go = (e, t) => { e.preventDefault(); setOpen(false); goTo(t); };

  const active = HOME28.whyTabs[tab];
  const t = HOME28.testimonials[slide];

  return (
    <div className="ffh-tw ffh-h28 min-h-screen bg-[#15141a] font-['DM_Sans'] text-[#fffefc] antialiased" data-testid="home28-page">
      {/* ---------- nav ---------- */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#15141a]/90 backdrop-blur-xl" data-testid="h28-nav">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center gap-6 px-5 sm:px-8">
          <a href="#top" onClick={(e) => go(e, "#top")} className="flex items-center gap-2.5">
            <img src={`${process.env.PUBLIC_URL}/ffh-logo.png`} alt="FFH ERP" width="30" height="30" className="h-[30px] w-[30px] rounded-full" />
            <span className="text-xl font-semibold tracking-[-0.01em] text-[#fffefc]">FFH|ERP</span>
          </a>
          <nav className="mx-auto hidden items-center lg:flex">
            {NAV.map((l, i) => (
              <React.Fragment key={l.label}>
                {i > 0 && <span className="mx-4 h-1 w-1 rounded-full bg-[#fffefc]/25" />}
                <a href={l.target} onClick={(e) => go(e, l.target)}
                  className="text-sm font-medium text-[#fffefc]/70 transition hover:text-[#fffefc]">{l.label}</a>
              </React.Fragment>
            ))}
          </nav>
          <button onClick={(e) => go(e, "#contact")} data-testid="h28-cta"
            className="ml-auto hidden items-center border border-white/25 px-5 py-3 text-sm font-medium text-[#fffefc] transition hover:bg-white/10 lg:inline-flex">
            Get in touch <Dot />
          </button>
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" data-testid="h28-burger"
            className="ml-auto bg-transparent p-2 text-[#fffefc] lg:hidden">{open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</button>
        </div>
        {open && (
          <div className="border-t border-white/10 px-5 pb-6 pt-3 lg:hidden" data-testid="h28-mobile">
            {NAV.map((l) => (
              <a key={l.label} href={l.target} onClick={(e) => go(e, l.target)}
                className="block py-3 text-sm font-medium text-[#fffefc]/75">{l.label}</a>
            ))}
            <button onClick={(e) => go(e, "#contact")} className="mt-3 w-full border border-white/25 px-5 py-3 text-sm font-medium text-[#fffefc]">Get in touch</button>
          </div>
        )}
      </header>

      {/* ---------- hero ---------- */}
      <section id="top" className="relative overflow-hidden px-5 pb-20 pt-16 sm:px-8 sm:pt-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_520px_at_78%_18%,rgba(120,110,255,0.16),transparent_62%),radial-gradient(700px_500px_at_20%_0%,rgba(255,255,255,0.05),transparent_60%)]" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-12 items-start gap-12">
          <div className="col-span-12 lg:col-span-7">
            <h1 className="text-5xl font-medium leading-[1.02] tracking-[-0.03em] text-[#fffefc] sm:text-6xl lg:text-[96px]">
              {HOME28.heroTitleA}
              <em className="mt-2 block font-['Playfair_Display'] font-medium italic">{HOME28.heroTitleB}</em>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-[#fffefc]/65">{HOME28.heroLead}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <button onClick={(e) => go(e, "#signup")} data-testid="home28-cta-trial"
                className="inline-flex items-center bg-[#fffefc] px-6 py-4 text-sm font-medium text-[#15141a] transition hover:bg-white">
                Our modules <Dot />
              </button>
              <button onClick={(e) => go(e, "#pricing")} data-testid="home28-cta-pricing"
                className="inline-flex items-center border border-white/25 px-6 py-4 text-sm font-medium text-[#fffefc] transition hover:bg-white/10">
                See pricing <Dot />
              </button>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <div className="mb-4 flex flex-wrap gap-2">
              {HOME28.heroChips.map((c) => (
                <span key={c} className="border border-white/20 px-3.5 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[#fffefc]/75">{c}</span>
              ))}
            </div>
            <img src="https://picsum.photos/id/60/900/760" alt="Team running the business on FFH|ERP" width="900" height="760" loading="eager"
              className="h-[300px] w-full rounded-2xl object-cover ring-1 ring-white/10 sm:h-[400px]" />
          </div>
        </div>

        {/* rating + logo ticker */}
        <div className="relative mx-auto mt-16 grid max-w-7xl grid-cols-12 items-center gap-8">
          <div className="col-span-12 lg:col-span-3">
            <p className="text-2xl font-medium tracking-[-0.01em] text-[#fffefc]">
              {HOME28.rating.note.split(" ")[0]} <em className="font-['Playfair_Display'] italic">{HOME28.rating.note.split(" ")[1]}</em>
            </p>
            <div className="mt-2 flex text-[#fffefc]">{[0, 1, 2, 3, 4].map((i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
            <span className="mt-1 block text-xs text-[#fffefc]/50">{HOME28.rating.score}</span>
          </div>
          <div className="col-span-12 overflow-hidden lg:col-span-9">
            <div className="ffh-h28-marquee flex w-max gap-4">
              {[...SERVING_BRANDS, ...SERVING_BRANDS].map((b, i) => (
                <span key={i} className="flex h-[74px] w-[220px] shrink-0 items-center justify-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.03] px-5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white/10 text-[11px] font-semibold text-[#fffefc]/80">{b.name.charAt(0)}</span>
                  <span className="text-sm font-medium text-[#fffefc]/70">{b.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- services ---------- */}
      <section id="features" className="border-t border-white/5 px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-12 items-end gap-8">
            <div className="col-span-12 lg:col-span-7">
              <Eyebrow>Our services</Eyebrow>
              <Display a={HOME28.servicesTitleA} b={HOME28.servicesTitleB} className="mt-6" />
            </div>
            <div className="col-span-12 lg:col-span-5">
              <p className="text-base leading-relaxed text-[#fffefc]/65">{HOME28.servicesLead}</p>
              <button onClick={(e) => go(e, "#modules")}
                className="mt-5 inline-flex items-center border border-white/25 px-5 py-3.5 text-sm font-medium text-[#fffefc] transition hover:bg-white/10">
                Explore modules <Dot />
              </button>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {HOME28.services.map((s, i) => (
              <article key={s.title} data-testid={`home28-service-${i}`} className="group">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-[#fffefc]/80">
                    <Icon name={s.icon} size={19} />
                  </span>
                  <h3 className="text-xl font-medium tracking-[-0.01em] text-[#fffefc]">{s.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[#fffefc]/60">{s.text}</p>
                <img src={`https://picsum.photos/id/${s.seed}/700/460`} alt="" width="700" height="460" loading="lazy"
                  className="mt-5 h-[190px] w-full rounded-xl object-cover ring-1 ring-white/10 transition group-hover:ring-white/25" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- about + counters ---------- */}
      <section id="modules" className="border-y border-white/5 bg-white/[0.02] px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-12 items-center gap-12">
            <div className="col-span-12 lg:col-span-6">
              <Eyebrow>About us</Eyebrow>
              <Display a={HOME28.aboutTitleA} b={HOME28.aboutTitleB} className="mt-6" />
              <p className="mt-6 max-w-xl leading-relaxed text-[#fffefc]/65">{HOME28.aboutText}</p>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <img src="https://picsum.photos/id/5/900/620" alt="" width="900" height="620" loading="lazy"
                className="h-[300px] w-full rounded-2xl object-cover ring-1 ring-white/10" />
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
            {HOME28.stats.map((s) => (
              <div key={s.label} className="border-t border-white/15 pt-6" data-testid={`home28-stat-${s.label.split(" ")[0].toLowerCase()}`}>
                <strong className="block text-5xl font-medium tracking-[-0.03em] text-[#fffefc]">
                  <Counter value={s.value} suffix={s.suffix} />
                </strong>
                <span className="mt-2 block text-sm text-[#fffefc]/55">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- portfolio ---------- */}
      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-12 items-end gap-8">
            <div className="col-span-12 lg:col-span-8">
              <Eyebrow>Latest projects</Eyebrow>
              <Display a={HOME28.portfolioTitleA} b={HOME28.portfolioTitleB} className="mt-6" />
            </div>
            <div className="col-span-12 lg:col-span-4 lg:text-right">
              <button onClick={(e) => go(e, "#why")}
                className="inline-flex items-center border border-white/25 px-5 py-3.5 text-sm font-medium text-[#fffefc] transition hover:bg-white/10">
                Why choose us <Dot />
              </button>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {HOME28.portfolio.map((p, i) => (
              <article key={p.title} data-testid={`home28-case-${i}`} className="group">
                <img src={`https://picsum.photos/id/${p.seed}/800/560`} alt="" width="800" height="560" loading="lazy"
                  className="h-[230px] w-full rounded-2xl object-cover ring-1 ring-white/10 transition group-hover:ring-white/25" />
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((tg) => (
                    <span key={tg} className="border border-white/15 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#fffefc]/60">{tg}</span>
                  ))}
                </div>
                <h3 className="mt-4 text-2xl font-medium tracking-[-0.01em] text-[#fffefc]">{p.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#fffefc]/60">{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- why choose us (tabs) ---------- */}
      <section id="why" className="border-y border-white/5 bg-white/[0.02] px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <Eyebrow>Why choose us</Eyebrow>
            <Display a={HOME28.whyTitleA} b={HOME28.whyTitleB} className="mx-auto mt-6 max-w-2xl text-center" />
          </div>

          <div className="mt-16 grid grid-cols-12 items-center gap-10">
            <div className="col-span-12 space-y-2 lg:col-span-4">
              {HOME28.whyTabs.map((w, i) => (
                <button key={w.title} onClick={() => setTab(i)} data-testid={`home28-whytab-${i}`}
                  className={`flex w-full items-center gap-4 px-4 py-4 text-left transition ${i === tab ? "text-[#fffefc]" : "text-[#fffefc]/35 hover:text-[#fffefc]/60"}`}>
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${i === tab ? "border-white/40" : "border-white/10"}`}>
                    <Icon name={w.icon} size={18} />
                  </span>
                  <span className="text-xl font-medium tracking-[-0.01em]">{w.title}</span>
                </button>
              ))}
            </div>

            <div className="col-span-12 lg:col-span-4">
              <img key={active.seed} src={`https://picsum.photos/id/${active.seed}/800/760`} alt="" width="800" height="760" loading="lazy"
                className="h-[340px] w-full rounded-2xl object-cover ring-1 ring-white/10" />
            </div>

            <div className="col-span-12 rounded-2xl border border-white/10 p-8 lg:col-span-4" data-testid="home28-whypanel">
              <h3 className="text-xl font-medium tracking-[-0.01em] text-[#fffefc]">{active.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#fffefc]/60">{active.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- testimonials (carousel) ---------- */}
      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <Eyebrow>Testimonials</Eyebrow>
            <Display a="Real results that turn" b="clients into partners" className="mx-auto mt-6 max-w-2xl text-center" />
          </div>

          <div className="mt-14 grid grid-cols-12 items-stretch gap-0 overflow-hidden rounded-2xl border border-white/10">
            <div className="col-span-12 p-8 sm:p-10 lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="h-7 w-7 rounded-full bg-white/15" />
                <span className="text-base font-medium text-[#fffefc]/80">{t.company}</span>
              </div>
              <Quote className="mt-6 h-6 w-6 text-[#fffefc]/25" />
              <blockquote className="mt-4 text-lg leading-relaxed text-[#fffefc]/85 sm:text-xl">“{t.quote}”</blockquote>
              <div className="mt-8">
                <strong className="block text-base font-medium text-[#fffefc]">{t.person}</strong>
                <span className="text-sm text-[#fffefc]/50">{t.role}</span>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <button onClick={() => setSlide((slide - 1 + HOME28.testimonials.length) % HOME28.testimonials.length)} data-testid="h28-prev"
                  aria-label="Previous testimonial" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-transparent text-[#fffefc]/70 transition hover:bg-white/10 hover:text-[#fffefc]">
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button onClick={() => setSlide((slide + 1) % HOME28.testimonials.length)} data-testid="h28-next"
                  aria-label="Next testimonial" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-transparent text-[#fffefc]/70 transition hover:bg-white/10 hover:text-[#fffefc]">
                  <ArrowRight className="h-4 w-4" />
                </button>
                <span className="ml-2 text-xs text-[#fffefc]/40" data-testid="h28-slide-count">{slide + 1} / {HOME28.testimonials.length}</span>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <img key={t.img} src={`https://i.pravatar.cc/700?img=${t.img}`} alt={t.person} width="700" height="700" loading="lazy"
                className="h-[280px] w-full object-cover lg:h-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- process ---------- */}
      <section className="border-y border-white/5 bg-white/[0.02] px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <Eyebrow>Process</Eyebrow>
            <Display a={HOME28.processTitleA} b={HOME28.processTitleB} className="mx-auto mt-6 max-w-2xl text-center" />
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {HOME28.process.map((p, i) => (
              <div key={p.n} className="relative" data-testid={`home28-step-${p.n}`}>
                <span className="text-6xl font-medium leading-none tracking-[-0.04em] text-[#fffefc]/15">{p.n}</span>
                <span className="mt-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-[#fffefc]/80">
                  <Icon name={p.icon} size={19} />
                </span>
                <h3 className="mt-4 text-xl font-medium tracking-[-0.01em] text-[#fffefc]">{p.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#fffefc]/60">{p.text}</p>
                {i < HOME28.process.length - 1 && (
                  <span className="absolute right-[-14px] top-10 hidden h-px w-7 bg-white/15 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- team ---------- */}
      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <Eyebrow>Creative force</Eyebrow>
            <Display a={HOME28.teamTitleA} b={HOME28.teamTitleB} className="mx-auto mt-6 max-w-2xl text-center" />
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {HOME28.team.map((m, i) => (
              <article key={m.name} data-testid={`home28-team-${i}`} className="group">
                <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
                  <img src={`https://i.pravatar.cc/500?img=${m.img}`} alt={m.name} width="500" height="500" loading="lazy"
                    className="h-[280px] w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
                </div>
                <h3 className="mt-5 text-xl font-medium tracking-[-0.01em] text-[#fffefc]">{m.name}</h3>
                <span className="mt-1 block text-sm text-[#fffefc]/50">{m.role}</span>
                <p className="mt-3 text-sm leading-relaxed text-[#fffefc]/60">{m.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- pricing ---------- */}
      <section id="pricing" className="border-y border-white/5 bg-white/[0.02] px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-12 items-end gap-8">
            <div className="col-span-12 lg:col-span-8">
              <Eyebrow>Pricing</Eyebrow>
              <Display a={HOME28.pricingTitleA} b={HOME28.pricingTitleB} className="mt-6" />
              <p className="mt-5 max-w-2xl leading-relaxed text-[#fffefc]/65">{HOME28.pricingLead}</p>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:text-right">
              <button onClick={(e) => go(e, "#contact")}
                className="inline-flex items-center border border-white/25 px-5 py-3.5 text-sm font-medium text-[#fffefc] transition hover:bg-white/10">
                Get in touch <Dot />
              </button>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {PLANS.map((p, idx) => (
              <div key={p.name} data-testid={`home28-plan-${p.name.toLowerCase()}`}
                className={`flex flex-col rounded-2xl border p-8 ${p.popular ? "border-white/30 bg-white/[0.06]" : "border-white/10"}`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-medium tracking-[-0.01em] text-[#fffefc]">{p.name} plan</h3>
                  {p.popular && <span className="border border-white/25 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#fffefc]/70">Popular</span>}
                </div>
                <div className="mt-6 flex items-baseline gap-2">
                  <strong className="text-5xl font-medium tracking-[-0.03em] text-[#fffefc]">{formatINR(p.monthly)}</strong>
                  <span className="text-sm text-[#fffefc]/50">/month</span>
                </div>
                <p className="mt-3 text-sm text-[#fffefc]/60">{p.sub}</p>
                <button onClick={(e) => go(e, "#signup")}
                  className={`mt-6 inline-flex items-center justify-center px-5 py-3.5 text-sm font-medium transition ${p.popular ? "bg-[#fffefc] text-[#15141a] hover:bg-white" : "border border-white/25 text-[#fffefc] hover:bg-white/10"}`}>
                  Get a quote <Dot />
                </button>
                <ul className="mt-8 space-y-4 border-t border-white/10 pt-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-[#fffefc]/75">
                      <Plus className="mt-0.5 h-4 w-4 shrink-0 text-[#fffefc]/60" />{f}
                    </li>
                  ))}
                  {/* the template lists what a tier does not include — mirrored here */}
                  {PLANS[(idx + 1) % PLANS.length].features.slice(0, 2).map((f) => (
                    <li key={`x-${f}`} className="flex items-start gap-3 text-sm text-[#fffefc]/25 line-through">
                      <Minus className="mt-0.5 h-4 w-4 shrink-0" />{f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- contact + form ---------- */}
      <section id="contact" className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-12 items-center gap-12">
          <div className="col-span-12 lg:col-span-6">
            <Eyebrow>Contact</Eyebrow>
            <h2 className="mt-6 text-4xl font-medium leading-[1.06] tracking-[-0.02em] text-[#fffefc] sm:text-5xl">
              {HOME28.contactTitleA} <em className="font-['Playfair_Display'] font-medium italic">{HOME28.contactTitleB}</em>
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-[#fffefc]/65">{HOME28.contactText}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="tel:+919284162015" className="inline-flex items-center border border-white/25 px-5 py-3.5 text-sm font-medium text-[#fffefc] transition hover:bg-white/10">+91 92841 62015</a>
              <a href="mailto:ffhsales@kriskrossinc.com" className="inline-flex items-center border border-white/25 px-5 py-3.5 text-sm font-medium text-[#fffefc] transition hover:bg-white/10">Email us</a>
            </div>
            <div className="mt-10"><HomeLayoutNav /></div>
          </div>
          <div className="col-span-12 flex justify-center lg:col-span-6 lg:justify-end">
            <TwSignupForm variant="glass" title="Start free. No card." />
          </div>
        </div>
      </section>

      {/* ---------- footer ---------- */}
      <footer className="border-t border-white/10 px-5 pb-12 pt-16 sm:px-8" data-testid="h28-footer">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 lg:col-span-5">
              <div className="flex items-center gap-2.5">
                <img src={`${process.env.PUBLIC_URL}/ffh-logo.png`} alt="FFH ERP" width="30" height="30" className="h-[30px] w-[30px] rounded-full" />
                <span className="text-xl font-semibold tracking-[-0.01em] text-[#fffefc]">FFH|ERP</span>
              </div>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#fffefc]/55">
                We build for operators. Nine modules on one database, implemented by people who have run the businesses they build for.
              </p>
              <form onSubmit={(e) => { e.preventDefault(); toast.success("Thanks — we'll be in touch."); }} className="mt-7 flex max-w-sm gap-3">
                <input placeholder="Your email" className="w-full rounded-lg border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-[#fffefc] placeholder-[#fffefc]/35 outline-none focus:border-white/40" />
                <button type="submit" className="rounded-lg bg-[#fffefc] px-4 py-3 text-sm font-medium text-[#15141a] transition hover:bg-white">Send</button>
              </form>
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <h6 className="text-xs font-medium uppercase tracking-[0.18em] text-[#fffefc]">Pages</h6>
              <ul className="mt-5 space-y-3">
                {["About us", "Modules", "Pricing", "Contact"].map((l) => (
                  <li key={l}>
                    <button onClick={(e) => go(e, l === "About us" ? "/about" : l === "Pricing" ? "#pricing" : l === "Contact" ? "#contact" : "#modules")}
                      className="bg-transparent text-sm text-[#fffefc]/55 transition hover:text-[#fffefc]">{l}</button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <h6 className="text-xs font-medium uppercase tracking-[0.18em] text-[#fffefc]">Company</h6>
              <ul className="mt-5 space-y-3 text-sm text-[#fffefc]/55">
                <li><a href="mailto:ffhsales@kriskrossinc.com" className="hover:text-[#fffefc]">ffhsales@kriskrossinc.com</a></li>
                <li><a href="tel:+919284162015" className="hover:text-[#fffefc]">+91 92841 62015</a></li>
                <li>Pune, India</li>
              </ul>
            </div>

            <div className="col-span-12 sm:col-span-6 lg:col-span-3">
              <h6 className="text-xs font-medium uppercase tracking-[0.18em] text-[#fffefc]">Follow us on …</h6>
              <ul className="mt-5 space-y-3">
                {[["Facebook", Facebook], ["Instagram", Instagram], ["YouTube", Youtube], ["LinkedIn", Linkedin]].map(([label, I]) => (
                  <li key={label}>
                    <a href="#top" onClick={(e) => e.preventDefault()}
                      className="inline-flex items-center gap-3 text-sm text-[#fffefc]/55 transition hover:text-[#fffefc]">
                      <I className="h-4 w-4" />{label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-7 text-xs text-[#fffefc]/40">
            <span>© 2025 FFH|ERP by KrisKross Inc. All rights reserved.</span>
            <span>Built in India</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
