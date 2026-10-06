import React, { useEffect } from "react";
import { ArrowRight, Check, Play, Quote } from "lucide-react";
import { HOME22, PLANS, FAQS, SERVING_BRANDS, formatINR } from "../../mock";
import Icon from "./TwIcon";
import TwHeader from "./TwHeader";
import TwFooter from "./TwFooter";
import TwSignupForm from "./TwSignupForm";
import HomeLayoutNav from "./HomeLayoutNav";
import { useGoTo } from "./crmStore";

// Layout 22 — the Apple-style glass page, rebuilt in Tailwind only: gradient
// mesh with blurred blooms, white/10 panels, ring-1 ring-white/20 and
// backdrop-blur throughout. No Bootstrap anywhere.
export default function Home22() {
  const goTo = useGoTo();

  useEffect(() => {
    document.title = "FFH|ERP — Everything your business runs on, beautifully clear";
  }, []);

  const glass = "rounded-3xl bg-white/10 ring-1 ring-white/20 backdrop-blur-2xl";

  return (
    <div className="ffh-tw min-h-screen bg-slate-950 text-white antialiased" data-testid="home22-page">
      <TwHeader variant="glass" />

      {/* ---------- hero ---------- */}
      <section id="top" className="relative overflow-hidden px-5 pb-40 pt-36 sm:px-8">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-10%,#1d3a7a_0%,transparent_60%),radial-gradient(900px_500px_at_90%_5%,#4c1d95_0%,transparent_58%),linear-gradient(160deg,#070b14_0%,#0b1220_60%,#111c33_100%)]" />
          <div className="absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full bg-sky-500/25 blur-3xl" />
          <div className="absolute -right-24 top-10 h-[460px] w-[460px] rounded-full bg-violet-500/25 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-[380px] w-[380px] rounded-full bg-amber-400/15 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/80 ring-1 ring-white/20 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {HOME22.badge}
          </span>
          <img src={`${process.env.PUBLIC_URL}/ffh-logo.png`} alt="FFH ERP" width="72" height="72" className="mx-auto mt-8 block h-[72px] w-[72px] rounded-full ring-4 ring-white/15" />
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
            {HOME22.titleLead}{" "}
            <span className="bg-gradient-to-r from-sky-300 via-violet-300 to-amber-200 bg-clip-text text-transparent">{HOME22.titleAccent}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">{HOME22.lead}</p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <button onClick={() => goTo("#signup")} data-testid="home22-cta-trial"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 shadow-2xl shadow-black/40 transition hover:bg-white/90">
              Start free 7 days <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={() => goTo("#modules")} data-testid="home22-cta-modules"
              className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-6 py-3.5 text-sm font-semibold text-white ring-1 ring-white/25 backdrop-blur-xl transition hover:bg-white/20">
              <Play className="h-3.5 w-3.5" /> See the modules
            </button>
          </div>

          <dl className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            {HOME22.stats.map((s) => (
              <div key={s.label} className={`${glass} px-6 py-6`}>
                <dt className="text-3xl font-bold tracking-tight text-white">{s.value}</dt>
                <dd className="mt-1 text-sm text-white/60">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------- glass sheet with the form ---------- */}
      <section className="relative -mt-28 px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[34px] bg-white/70 p-2 ring-1 ring-white/70 backdrop-blur-3xl sm:p-3">
            <div className="grid grid-cols-12 items-center gap-8 rounded-[26px] bg-white/60 px-6 py-8 sm:px-10">
              <div className="col-span-12 lg:col-span-5">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">Free 7-day trial</span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Start with your own numbers</h2>
                <p className="mt-4 leading-relaxed text-slate-600">
                  Load a month of real sales, purchases and tickets. No credit card, and our team migrates your data with
                  you.
                </p>
                <div className="mt-6"><HomeLayoutNav /></div>
              </div>
              <div className="col-span-12 flex justify-center lg:col-span-7 lg:justify-end">
                <TwSignupForm variant="light" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- glass features ---------- */}
      <section id="features" className="relative px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">Why it feels different</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Designed to disappear</h2>
          </div>
          <div className="mt-10 grid grid-cols-12 gap-5">
            {HOME22.features.map((f) => (
              <article key={f.title} className={`${glass} col-span-12 p-7 sm:col-span-6 lg:col-span-4`} data-testid={`home22-feature-${f.title.toLowerCase().replace(/\s/g, "-")}`}>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-sky-300 ring-1 ring-white/20">
                  <Icon name={f.icon} size={22} />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{f.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- glass modules ---------- */}
      <section id="modules" className="relative px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">Modules</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Nine modules behind one pane</h2>
            </div>
            <button onClick={() => goTo("#signup")} className="inline-flex items-center gap-2 bg-transparent text-sm font-semibold text-sky-300 hover:text-sky-200">
              Start free trial <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {["Market", "Sales", "Purchase", "Bill", "Spend", "AMC", "Support", "Work", "Project"].map((m) => (
              <div key={m} className="rounded-2xl bg-white/[0.07] px-5 py-4 text-center text-sm font-medium text-white/85 ring-1 ring-white/15 backdrop-blur-xl transition hover:bg-white/15">
                {m}
              </div>
            ))}
            <div className="rounded-2xl bg-gradient-to-br from-sky-400/20 to-violet-500/20 px-5 py-4 text-center text-sm font-semibold text-white ring-1 ring-white/25 backdrop-blur-xl">
              + 1 database
            </div>
          </div>
        </div>
      </section>

      {/* ---------- glass stats + quotes ---------- */}
      <section id="why" className="relative px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className={`${glass} grid grid-cols-1 gap-8 px-8 py-10 sm:grid-cols-3`}>
            {[{ v: "350K+", l: "Businesses served" }, { v: "20+", l: "Countries" }, { v: "24/7", l: "Support, six languages" }].map((s) => (
              <div key={s.l} className="text-center">
                <strong className="block bg-gradient-to-r from-sky-300 to-violet-300 bg-clip-text text-4xl font-bold tracking-tight text-transparent">{s.v}</strong>
                <span className="mt-2 block text-sm text-white/60">{s.l}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-12 gap-5">
            {HOME22.quotes.map((q) => (
              <figure key={q.person} className={`${glass} col-span-12 p-7 sm:col-span-6`} data-testid={`home22-quote-${q.person.split(" ")[0].toLowerCase()}`}>
                <Quote className="h-5 w-5 text-sky-300/70" />
                <blockquote className="mt-4 text-[15px] leading-relaxed text-white/85">“{q.text}”</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <img src={`https://i.pravatar.cc/80?img=${q.img}`} alt={q.person} width="36" height="36" loading="lazy" className="h-9 w-9 rounded-full ring-1 ring-white/25" />
                  <span><strong className="block text-sm font-semibold text-white">{q.person}</strong><small className="text-xs text-white/55">{q.role}</small></span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- glass pricing ---------- */}
      <section id="pricing" className="relative px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">Pricing</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Clear glass, clear price</h2>
          </div>
          <div className="mt-12 grid grid-cols-12 gap-6">
            {PLANS.map((p) => (
              <div key={p.name}
                className={`col-span-12 rounded-3xl p-7 sm:col-span-6 lg:col-span-4 ${p.popular ? "bg-gradient-to-b from-white/20 to-white/10 ring-1 ring-white/30 backdrop-blur-2xl" : "bg-white/[0.06] ring-1 ring-white/15 backdrop-blur-xl"}`}
                data-testid={`home22-plan-${p.name.toLowerCase()}`}>
                {p.popular && <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">Most popular</span>}
                <h3 className="mt-3 text-lg font-semibold text-white">{p.name}</h3>
                <p className="mt-1 text-sm text-white/55">{p.sub}</p>
                <div className="mt-5 flex items-baseline gap-1.5">
                  <strong className="text-4xl font-bold tracking-tight text-white">{formatINR(p.monthly)}</strong>
                  <span className="text-white/55">/month</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-white/75"><Check className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" />{f}</li>
                  ))}
                </ul>
                <button onClick={() => goTo("#signup")}
                  className={`mt-7 w-full rounded-xl px-5 py-3 text-sm font-semibold transition ${p.popular ? "bg-white text-slate-900 hover:bg-white/90" : "bg-white/10 text-white ring-1 ring-white/25 hover:bg-white/20"}`}>
                  {p.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- glass faq + contact ---------- */}
      <section id="contact" className="relative px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">Support</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Ask us anything</h2>
            <p className="mt-4 leading-relaxed text-white/65">A helpdesk staffed by people who know the product — open 24/7 in six languages.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="tel:+919284162015" className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/25 backdrop-blur-xl transition hover:bg-white/20">+91 92841 62015</a>
              <a href="mailto:ffhsales@kriskrossinc.com" className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/25 backdrop-blur-xl transition hover:bg-white/20">Email support</a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/45">
              {SERVING_BRANDS.slice(0, 4).map((b) => <span key={b.key}>{b.name}</span>)}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <div className="space-y-3">
              {FAQS.map((f, i) => (
                <details key={f.q} open={i === 0} className="group rounded-2xl bg-white/[0.07] p-5 ring-1 ring-white/15 backdrop-blur-xl">
                  <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-white [&::-webkit-details-marker]:hidden">
                    {f.q}<span className="text-sky-300 transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- closing ---------- */}
      <section className="relative px-5 pb-24 pt-6 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className={`${glass} relative overflow-hidden px-8 py-14 text-center sm:px-14`}>
            <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[600px] -translate-x-1/2 rounded-full bg-sky-400/20 blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">See it on your own numbers</h2>
              <p className="mx-auto mt-4 max-w-xl text-white/70">Free for 7 days, no credit card, and everything you enter stays yours.</p>
              <button onClick={() => goTo("#signup")} data-testid="home22-cta-bottom"
                className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-white/90">
                Start free 7 days <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <TwFooter variant="glass" />
    </div>
  );
}
