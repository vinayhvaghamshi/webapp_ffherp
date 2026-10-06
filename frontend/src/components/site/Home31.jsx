import React, { useEffect, useState } from "react";
import { ArrowUpRight, Award, Check, Instagram, Linkedin, Menu, Quote, Star, Twitter, X, Youtube } from "lucide-react";
import { toast } from "sonner";
import { HOME31, PLANS, SERVING_BRANDS, formatINR } from "../../mock";
import Icon from "./TwIcon";
import TwSignupForm from "./TwSignupForm";
import HomeLayoutNav from "./HomeLayoutNav";
import { useGoTo } from "./crmStore";

// Layout 31 — after Awake, kept in its creative-studio register: pastel gradient
// canvas, floating pill navigation, Inter Tight display type with an italic
// serif accent word, pastel chips, a logo marquee, counters, work grid, team,
// testimonial with a stat, plans, FAQ and awards. Tailwind only, no Bootstrap.
const NAV = [
  { label: "Home", target: "#top" },
  { label: "About us", target: "#why" },
  { label: "Services", target: "#features" },
  { label: "Work", target: "#modules" },
  { label: "Team", target: "#team" },
  { label: "Pricing", target: "#pricing" },
  { label: "Awards", target: "#award" },
];

const CHIP_TONES = {
  lavender: "bg-[#efe3ff] text-[#7c3aed] ring-[#e0ccff]",
  blue: "bg-[#e0f0ff] text-[#0b72c4] ring-[#c9e4ff]",
  peach: "bg-[#ffe9d9] text-[#c2591f] ring-[#ffd9bf]",
};

const Chip = ({ label, tone, className = "" }) => (
  <span className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 ring-1 ${CHIP_TONES[tone]} ${className}`}>
    <Icon name={label === "Clarity" ? "Sparkles" : label === "Control" ? "ShieldCheck" : "TrendingUp"} size={17} />
    <em className="ffh-serif-accent text-[19px] not-italic">{label}</em>
  </span>
);

export default function Home31() {
  const goTo = useGoTo();
  const [open, setOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(0);

  useEffect(() => { document.title = "FFH|ERP — Run a sharper business with one system"; }, []);
  const go = (e, t) => { e.preventDefault(); setOpen(false); goTo(t); };

  const H2 = ({ children, className = "" }) => (
    <h2 className={`text-4xl font-medium leading-[1.06] tracking-[-0.03em] text-[#1b1d1e] sm:text-5xl lg:text-[62px] ${className}`}>{children}</h2>
  );

  return (
    <div className="ffh-tw ffh-h31 min-h-screen bg-white font-['Inter_Tight'] text-[#333333] antialiased" data-testid="home31-page">
      {/* ---------- nav ---------- */}
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8" data-testid="h31-nav">
        <div className="mx-auto flex max-w-[1400px] items-center gap-4">
          <a href="#top" onClick={(e) => go(e, "#top")} className="flex items-center gap-2.5">
            <img src="/ffh-logo.png" alt="FFH ERP" width="34" height="34" className="h-[34px] w-[34px] rounded-full ring-1 ring-black/10" />
            <span className="text-[21px] font-semibold tracking-[-0.02em] text-[#1b1d1e]">FFH|ERP</span>
          </a>

          <nav className="mx-auto hidden items-center gap-1 rounded-full bg-white/70 p-1.5 ring-1 ring-black/5 backdrop-blur-md xl:flex">
            {NAV.map((l, i) => (
              <a key={l.label} href={l.target} onClick={(e) => go(e, l.target)}
                className={`rounded-full px-4 py-2 text-[14px] transition ${i === 0 ? "bg-white font-medium text-[#1b1d1e] shadow-sm" : "text-[#4b4f52] hover:text-[#1b1d1e]"}`}>
                {l.label}
              </a>
            ))}
          </nav>

          <button onClick={(e) => go(e, "#contact")} data-testid="h31-cta"
            className="ml-auto hidden items-center gap-2 rounded-full bg-[#1b1d1e] px-5 py-3 text-[14px] font-medium text-white transition hover:bg-black lg:inline-flex">
            Let's Collaborate
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15"><ArrowUpRight className="h-3.5 w-3.5" /></span>
          </button>
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" data-testid="h31-burger"
            className="ml-auto bg-transparent p-2 text-[#1b1d1e] lg:hidden">{open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</button>
        </div>
        {open && (
          <div className="mx-auto mt-3 max-w-[1400px] rounded-2xl bg-white p-4 ring-1 ring-black/5" data-testid="h31-mobile">
            {NAV.map((l) => (
              <a key={l.label} href={l.target} onClick={(e) => go(e, l.target)} className="block rounded-lg px-3 py-3 text-[15px] text-[#333] hover:bg-black/5">{l.label}</a>
            ))}
            <button onClick={(e) => go(e, "#contact")} className="mt-2 w-full rounded-full bg-[#1b1d1e] px-5 py-3 text-[14px] font-medium text-white">Let's Collaborate</button>
          </div>
        )}
      </header>

      {/* ---------- hero ---------- */}
      <section id="top" className="relative overflow-hidden px-5 pb-16 pt-32 sm:px-8 sm:pt-36">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true"
          style={{ background: "radial-gradient(900px 520px at 12% -5%, #dbeafe 0%, transparent 58%), radial-gradient(880px 520px at 88% 2%, #fde8d7 0%, transparent 55%), linear-gradient(180deg, #ffffff 0%, #fdfcfa 70%, #ffffff 100%)" }} />
        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="text-[13vw] font-medium leading-[1.03] tracking-[-0.04em] text-[#1b1d1e] sm:text-[8vw] lg:text-[100px]">
            {HOME31.titleA} <em className="ffh-serif-accent">{HOME31.titleB}</em>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-[16px] leading-relaxed text-[#4b4f52]">{HOME31.lead}</p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-5">
            <button onClick={(e) => go(e, "#signup")} data-testid="home31-cta-trial"
              className="inline-flex items-center gap-3 rounded-full bg-[#4f46e5] py-2.5 pl-6 pr-2.5 text-[15px] font-medium text-white shadow-lg shadow-indigo-600/20 transition hover:bg-[#4338ca]">
              Get Started
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20"><ArrowUpRight className="h-4 w-4" /></span>
            </button>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {HOME31.team.map((m) => (
                  <img key={m.name} src={`https://i.pravatar.cc/80?img=${m.img}`} alt="" width="36" height="36" loading="lazy"
                    className="h-9 w-9 rounded-full object-cover ring-2 ring-white" />
                ))}
              </div>
              <span className="text-left text-[13px] leading-tight text-[#4b4f52]">
                <span className="flex text-amber-400">{[0, 1, 2, 3, 4].map((i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}</span>
                {HOME31.trust.note}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- brand marquee ---------- */}
      <section className="relative px-5 pb-16 sm:px-8">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex items-center gap-6">
            <span className="hidden h-px flex-1 bg-black/10 sm:block" />
            <p className="text-center text-[13.5px] text-[#6b7075]">{HOME31.trust.brands}</p>
            <span className="hidden h-px flex-1 bg-black/10 sm:block" />
          </div>
          <div className="mt-8 overflow-hidden">
            <div className="ffh-marquee flex w-max items-center gap-16">
              {[...SERVING_BRANDS, ...SERVING_BRANDS].map((b, i) => (
                <span key={i} className="flex shrink-0 items-center gap-3 text-[19px] font-semibold tracking-[-0.01em] text-[#2b2f33]">
                  <span className="h-7 w-7 rounded-full bg-black/10" />{b.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- pastel chips + counters ---------- */}
      <section id="why" className="relative px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-[1400px] text-center">
          <H2 className="mx-auto max-w-4xl text-[#9aa0a6]">
            Crafting exceptional, well-run and technology-driven operations to drive <span className="text-[#1b1d1e]">impactful results with</span>
          </H2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {HOME31.chips.map((c) => <Chip key={c.label} label={c.label} tone={c.tone} />)}
          </div>

          <div className="mt-16 grid grid-cols-1 divide-y divide-black/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {HOME31.counters.map((c) => (
              <div key={c.label} className="px-6 py-6">
                <strong className="block text-[64px] font-medium leading-none tracking-[-0.04em] text-[#1b1d1e]">
                  <span className="text-[#9aa0a6]">+</span>{c.value}
                </strong>
                <span className="mt-3 block text-[14.5px] text-[#6b7075]">{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- services ---------- */}
      <section id="features" className="relative border-y border-black/5 bg-[#fbfbfc] px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[1400px]">
          <H2 className="max-w-2xl">Where innovation meets <em className="ffh-serif-accent">aesthetics</em></H2>
          <div className="mt-14 grid grid-cols-12 gap-12">
            <div className="col-span-12 lg:col-span-7">
              <div className="divide-y divide-black/10 border-y border-black/10">
                {HOME31.services.map((s, i) => (
                  <div key={s.title} data-testid={`home31-service-${i}`} className="group flex items-center gap-5 py-6">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#4f46e5] ring-1 ring-black/5">
                      <Icon name={s.icon} size={21} />
                    </span>
                    <div className="flex-1">
                      <h3 className="text-[21px] font-medium tracking-[-0.02em] text-[#1b1d1e]">{s.title}</h3>
                      <p className="mt-1 text-[14px] leading-relaxed text-[#6b7075]">{s.text}</p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-[#9aa0a6] transition group-hover:text-[#1b1d1e]" />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-12 flex flex-col justify-center gap-5 lg:col-span-5">
              <p className="text-[26px] font-medium leading-snug tracking-[-0.02em] text-[#1b1d1e]">
                See our work in action. Start your journey with us.
              </p>
              <div className="flex flex-wrap gap-3">
                <button onClick={(e) => go(e, "#contact")}
                  className="inline-flex items-center gap-2 rounded-full bg-[#1b1d1e] px-6 py-3.5 text-[14px] font-medium text-white transition hover:bg-black">
                  Let's Collaborate <ArrowUpRight className="h-4 w-4" />
                </button>
                <button onClick={(e) => go(e, "#modules")}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[14px] font-medium text-[#1b1d1e] ring-1 ring-black/10 transition hover:bg-black/5">
                  View Portfolio <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- work ---------- */}
      <section id="modules" className="relative px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[1400px]">
          <H2 className="max-w-3xl">How we transformed a small business's <em className="ffh-serif-accent">online presence</em></H2>
          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
            {HOME31.work.map((w, i) => (
              <article key={w.title} data-testid={`home31-work-${i}`} className="group">
                <div className="relative overflow-hidden rounded-[25px]">
                  <img src={`https://picsum.photos/id/${w.img}/900/640`} alt={w.title} width="900" height="640" loading="lazy"
                    className="h-[280px] w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
                  <button onClick={(e) => go(e, "#contact")} aria-label={`Open ${w.title}`}
                    className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#1b1d1e] opacity-0 transition group-hover:opacity-100">
                    <ArrowUpRight className="h-5 w-5" />
                  </button>
                </div>
                <div className="mt-5 flex items-center justify-between gap-4">
                  <h3 className="text-[24px] font-medium tracking-[-0.02em] text-[#1b1d1e]">{w.title}</h3>
                  <span className="flex flex-wrap gap-2">
                    {w.tags.map((t) => (
                      <span key={t} className="rounded-full bg-black/5 px-3 py-1.5 text-[12.5px] text-[#4b4f52]">{t}</span>
                    ))}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- team ---------- */}
      <section id="team" className="relative border-y border-black/5 bg-[#fbfbfc] px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[1400px]">
          <H2 className="max-w-2xl">Meet the creative minds behind <em className="ffh-serif-accent">our success</em></H2>
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {HOME31.team.map((m, i) => (
              <article key={m.name} data-testid={`home31-team-${i}`} className="group">
                <div className="overflow-hidden rounded-[25px] bg-black/5">
                  <img src={`https://i.pravatar.cc/600?img=${m.img}`} alt={m.name} width="600" height="600" loading="lazy"
                    className="h-[300px] w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
                </div>
                <div className="mt-4 flex items-start justify-between gap-3">
                  <span>
                    <h3 className="text-[19px] font-medium tracking-[-0.02em] text-[#1b1d1e]">{m.name}</h3>
                    <span className="text-[13.5px] text-[#6b7075]">{m.role}</span>
                  </span>
                  <span className="flex gap-1.5">
                    {[Twitter, Linkedin].map((I, k) => (
                      <a key={k} href="#top" onClick={(e) => e.preventDefault()}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-black/5 text-[#4b4f52] transition hover:bg-[#1b1d1e] hover:text-white">
                        <I className="h-3.5 w-3.5" />
                      </a>
                    ))}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- testimonial + stat ---------- */}
      <section className="relative px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[1400px]">
          <H2 className="max-w-3xl">What our satisfied customers are <em className="ffh-serif-accent">saying about us</em></H2>
          <div className="mt-14 grid grid-cols-12 gap-8">
            <figure className="col-span-12 rounded-[25px] bg-[#f7f7f9] p-8 lg:col-span-7 sm:p-10" data-testid="home31-quote">
              <span className="text-[12.5px] font-medium uppercase tracking-[0.16em] text-[#6b7075]">Customer stories</span>
              <Quote className="mt-6 h-6 w-6 text-[#c7cbd0]" />
              <blockquote className="mt-4 text-[22px] font-medium leading-snug tracking-[-0.02em] text-[#1b1d1e]">
                “{HOME31.testimonial.quote}”
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3">
                <img src={`https://picsum.photos/id/${HOME31.testimonial.img}/120/120`} alt={HOME31.testimonial.person} width="48" height="48" loading="lazy"
                  className="h-12 w-12 rounded-full object-cover" />
                <span>
                  <strong className="block text-[15px] font-medium text-[#1b1d1e]">{HOME31.testimonial.person}</strong>
                  <span className="text-[13.5px] text-[#6b7075]">{HOME31.testimonial.role}</span>
                </span>
              </figcaption>
            </figure>
            <div className="col-span-12 flex flex-col justify-center gap-6 lg:col-span-5">
              <div className="rounded-[25px] bg-[#1b1d1e] p-8 text-white sm:p-10" data-testid="home31-stat">
                <span className="text-[12.5px] font-medium uppercase tracking-[0.16em] text-white/60">Facts &amp; numbers</span>
                <strong className="mt-4 block text-[72px] font-medium leading-none tracking-[-0.04em]">{HOME31.testimonial.stat}</strong>
                <p className="mt-3 text-[15px] leading-relaxed text-white/75">{HOME31.testimonial.statNote}</p>
              </div>
              <button onClick={(e) => go(e, "#contact")}
                className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[14px] font-medium text-[#1b1d1e] ring-1 ring-black/10 transition hover:bg-black/5">
                Read more customer stories <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- pricing ---------- */}
      <section id="pricing" className="relative border-y border-black/5 bg-[#fbfbfc] px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[1400px]">
          <H2 className="max-w-2xl">Pick the plan that fits your <em className="ffh-serif-accent">start-up</em></H2>
          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {PLANS.map((p) => (
              <div key={p.name} data-testid={`home31-plan-${p.name.toLowerCase()}`}
                className={`flex flex-col rounded-[25px] p-8 ${p.popular ? "bg-[#1b1d1e] text-white" : "bg-white ring-1 ring-black/10"}`}>
                <div className="flex items-center justify-between">
                  <h3 className={`text-[22px] font-medium tracking-[-0.02em] ${p.popular ? "text-white" : "text-[#1b1d1e]"}`}>{p.name}</h3>
                  {p.popular && <span className="rounded-full bg-white/15 px-3 py-1 text-[11.5px] font-medium uppercase tracking-[0.14em]">Most popular</span>}
                </div>
                <p className={`mt-2 text-[14px] ${p.popular ? "text-white/70" : "text-[#6b7075]"}`}>{p.sub}</p>
                <div className="mt-6 flex items-baseline gap-2">
                  <strong className={`text-[44px] font-medium leading-none tracking-[-0.04em] ${p.popular ? "text-white" : "text-[#1b1d1e]"}`}>{formatINR(p.monthly)}</strong>
                  <span className={p.popular ? "text-white/60" : "text-[#6b7075]"}>/month</span>
                </div>
                <button onClick={(e) => go(e, "#signup")}
                  className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[14px] font-medium transition ${p.popular ? "bg-white text-[#1b1d1e] hover:bg-white/90" : "bg-[#1b1d1e] text-white hover:bg-black"}`}>
                  Let's Collaborate <ArrowUpRight className="h-4 w-4" />
                </button>
                <ul className={`mt-8 flex-1 space-y-3.5 border-t pt-7 ${p.popular ? "border-white/15" : "border-black/10"}`}>
                  {p.features.map((f) => (
                    <li key={f} className={`flex items-start gap-3 text-[14px] ${p.popular ? "text-white/80" : "text-[#4b4f52]"}`}>
                      <Check className={`mt-0.5 h-4 w-4 shrink-0 ${p.popular ? "text-white" : "text-[#4f46e5]"}`} strokeWidth={3} />{f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- faq ---------- */}
      <section className="relative px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-12">
          <div className="col-span-12 lg:col-span-4">
            <H2>Got questions? <em className="ffh-serif-accent">We've got answers</em></H2>
            <p className="mt-6 text-[15px] leading-relaxed text-[#6b7075]">
              Still deciding? Talk to someone who knows the product — 24/7, in six languages.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="tel:+919284162015" className="rounded-full bg-white px-5 py-3 text-[14px] font-medium text-[#1b1d1e] ring-1 ring-black/10 transition hover:bg-black/5">+91 92841 62015</a>
              <a href="mailto:ffhsales@kriskrossinc.com" className="rounded-full bg-white px-5 py-3 text-[14px] font-medium text-[#1b1d1e] ring-1 ring-black/10 transition hover:bg-black/5">Email us</a>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <div className="space-y-3">
              {HOME31.faqs.map((f, i) => (
                <div key={f.q} data-testid={`home31-faq-${i}`} className="rounded-[20px] bg-[#f7f7f9] px-6 py-5">
                  <button onClick={() => setFaqOpen(faqOpen === i ? -1 : i)} className="flex w-full items-center justify-between gap-6 text-left">
                    <span className="text-[16.5px] font-medium tracking-[-0.01em] text-[#1b1d1e]">{f.q}</span>
                    <ArrowUpRight className={`h-5 w-5 shrink-0 text-[#6b7075] transition ${faqOpen === i ? "rotate-45" : ""}`} />
                  </button>
                  {faqOpen === i && <p className="mt-4 text-[14.5px] leading-relaxed text-[#6b7075]">{f.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- awards ---------- */}
      <section id="award" className="relative border-y border-black/5 bg-[#fbfbfc] px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[1400px]">
          <H2 className="max-w-3xl">Accolades and achievements celebrating our <em className="ffh-serif-accent">design excellence</em></H2>
          <div className="mt-14 divide-y divide-black/10 border-y border-black/10">
            {HOME31.awards.map((a, i) => (
              <div key={a.title} data-testid={`home31-award-${i}`} className="group flex flex-wrap items-center gap-6 py-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#4f46e5] ring-1 ring-black/5"><Award className="h-5 w-5" /></span>
                <div className="min-w-[240px] flex-1">
                  <h3 className="text-[21px] font-medium tracking-[-0.02em] text-[#1b1d1e]">{a.title}</h3>
                  <p className="mt-1 text-[14px] leading-relaxed text-[#6b7075]">{a.text}</p>
                </div>
                <span className="text-[15px] font-medium text-[#6b7075]">{a.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- closing CTA + form ---------- */}
      <section id="contact" className="relative px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-12 items-center gap-12">
            <div className="col-span-12 lg:col-span-5">
              <H2>Innovative solutions for <em className="ffh-serif-accent">bold brands</em></H2>
              <p className="mt-6 text-[15px] leading-relaxed text-[#6b7075]">
                Looking to run a sharper operation? We build platforms that hold up on the busiest day of the month — and stay with you after go-live.
              </p>
              <div className="mt-8"><HomeLayoutNav /></div>
            </div>
            <div className="col-span-12 flex justify-center lg:col-span-7 lg:justify-end">
              <TwSignupForm variant="light" title="Let's craft together" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- footer ---------- */}
      <footer className="bg-[#1b1d1e] px-5 pb-10 pt-16 text-white sm:px-8" data-testid="h31-footer">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 lg:col-span-4">
              <div className="flex items-center gap-2.5">
                <img src="/ffh-logo.png" alt="FFH ERP" width="34" height="34" className="h-[34px] w-[34px] rounded-full" />
                <span className="text-[21px] font-semibold tracking-[-0.02em]">FFH|ERP</span>
              </div>
              <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-white/65">
                Empowering businesses with one database. Let's build something that lasts together.
              </p>
              <div className="mt-6 flex gap-2">
                {[Twitter, Linkedin, Instagram, Youtube].map((I, i) => (
                  <a key={i} href="#top" onClick={(e) => e.preventDefault()}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition hover:bg-white hover:text-[#1b1d1e]">
                    <I className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
            {[
              { t: "Sitemap", l: ["About us", "Work", "Services", "Pricing"] },
              { t: "Other pages", l: ["Contact us", "Customers", "Careers", "Newsletter"] },
            ].map((c) => (
              <div key={c.t} className="col-span-6 sm:col-span-4 lg:col-span-2">
                <h6 className="text-[13px] font-medium uppercase tracking-[0.14em] text-white/60">{c.t}</h6>
                <ul className="mt-5 space-y-3">
                  {c.l.map((l) => (
                    <li key={l}>
                      <button onClick={(e) => go(e, l === "About us" ? "/about" : l === "Pricing" ? "#pricing" : l === "Contact us" ? "#contact" : "#modules")}
                        className="bg-transparent text-[14px] text-white/70 transition hover:text-white">{l}</button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="col-span-12 sm:col-span-4 lg:col-span-4">
              <h6 className="text-[13px] font-medium uppercase tracking-[0.14em] text-white/60">Contact details</h6>
              <ul className="mt-5 space-y-3 text-[14px] text-white/70">
                <li>KrisKross Inc., Pune, India</li>
                <li><a href="mailto:ffhsales@kriskrossinc.com" className="hover:text-white">ffhsales@kriskrossinc.com</a></li>
                <li><a href="tel:+919284162015" className="hover:text-white">+91 92841 62015</a></li>
              </ul>
              <form onSubmit={(e) => { e.preventDefault(); toast.success("Thanks — we'll be in touch."); }} className="mt-6 flex max-w-sm gap-3">
                <input placeholder="Your email" className="w-full rounded-full bg-white/10 px-5 py-3 text-[14px] text-white placeholder-white/45 ring-1 ring-white/15 outline-none focus:ring-white/40" />
                <button type="submit" className="rounded-full bg-white px-5 py-3 text-[14px] font-medium text-[#1b1d1e] transition hover:bg-white/90">Send</button>
              </form>
            </div>
          </div>
          <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-[12.5px] text-white/50">
            <span>© 2025 FFH|ERP by KrisKross Inc. All rights reserved.</span>
            <span>Built in India</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
