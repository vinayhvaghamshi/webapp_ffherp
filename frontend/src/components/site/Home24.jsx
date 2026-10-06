import React, { useEffect } from "react";
import { ArrowRight, Check, Quote } from "lucide-react";
import { HOME24, PLANS, FAQS, TESTIMONIALS, formatINR } from "../../mock";
import Icon from "./TwIcon";
import TwPillHeader from "./TwPillHeader";
import TwFooter from "./TwFooter";
import TwSignupForm from "./TwSignupForm";
import HomeLayoutNav from "./HomeLayoutNav";
import { useGoTo } from "./crmStore";

// Layout 24 — the reference navbar in its glass form over an Apple-glass page:
// the floating pill is frosted, every surface is bg-white/10 with a white ring
// and backdrop blur, all in Tailwind.
export default function Home24() {
  const goTo = useGoTo();

  useEffect(() => {
    document.title = "FFH|ERP — One glass-clear pane over the whole business";
  }, []);

  const glass = "rounded-3xl bg-white/10 ring-1 ring-white/20 backdrop-blur-2xl";

  return (
    <div className="ffh-tw min-h-screen bg-slate-950 text-white antialiased" data-testid="home24-page">
      <TwPillHeader variant="glass" />

      {/* ---------- hero ---------- */}
      <section id="top" className="relative overflow-hidden px-5 pb-36 pt-44 sm:px-8">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(1200px_620px_at_15%_-10%,#1e3a8a_0%,transparent_60%),radial-gradient(900px_520px_at_95%_5%,#6d28d9_0%,transparent_58%),linear-gradient(160deg,#05070f_0%,#0b1220_55%,#141f38_100%)]" />
          <div className="absolute -left-20 top-10 h-[420px] w-[420px] rounded-full bg-sky-500/25 blur-3xl" />
          <div className="absolute -right-16 top-0 h-[460px] w-[460px] rounded-full bg-violet-500/25 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-[360px] w-[360px] rounded-full bg-amber-400/15 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/80 ring-1 ring-white/20 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />{HOME24.badge}
          </span>
          <h1 className="mt-8 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
            {HOME24.titleLead}{" "}
            <span className="bg-gradient-to-r from-sky-300 via-violet-300 to-amber-200 bg-clip-text text-transparent">{HOME24.titleAccent}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">{HOME24.lead}</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <button onClick={() => goTo("#signup")} data-testid="home24-cta-trial"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 shadow-2xl shadow-black/40 transition hover:bg-white/90">
              Start free 7 days <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={() => goTo("#contact")} data-testid="home24-cta-meeting"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3.5 text-sm font-semibold text-white ring-1 ring-white/25 backdrop-blur-xl transition hover:bg-white/20">
              Book a meeting
            </button>
          </div>

          <dl className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            {HOME24.stats.map((s) => (
              <div key={s.label} className={`${glass} px-6 py-6`}>
                <dt className="text-3xl font-bold tracking-tight text-white">{s.value}</dt>
                <dd className="mt-1 text-sm text-white/60">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------- frosted sheet with the form ---------- */}
      <section className="relative -mt-24 px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[34px] bg-white/70 p-2 ring-1 ring-white/70 backdrop-blur-3xl sm:p-3">
            <div className="grid grid-cols-12 items-center gap-8 rounded-[26px] bg-white/60 px-6 py-8 sm:px-10">
              <div className="col-span-12 lg:col-span-5">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">Free 7-day trial</span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Start with your own numbers</h2>
                <p className="mt-4 leading-relaxed text-slate-600">
                  Load a month of real sales, purchases and tickets. No credit card, and our team migrates your data with you.
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

      {/* ---------- glass tiles ---------- */}
      <section id="features" className="relative px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">Why it feels different</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Designed to disappear</h2>
          </div>
          <div className="mt-10 grid grid-cols-12 gap-5">
            {HOME24.tiles.map((t) => (
              <article key={t.title} className={`${glass} col-span-12 p-7 sm:col-span-6 lg:col-span-4`} data-testid={`home24-tile-${t.title.toLowerCase().replace(/\s/g, "-")}`}>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-sky-300 ring-1 ring-white/20">
                  <Icon name={t.icon} size={22} />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-white">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{t.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- glass modules ---------- */}
      <section id="modules" className="relative px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">Modules</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Nine modules behind one pane</h2>
            </div>
            <button onClick={() => goTo("#pricing")} className="inline-flex items-center gap-2 bg-transparent text-sm font-semibold text-sky-300 hover:text-sky-200">
              See pricing <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {["Market", "Sales", "Purchase", "Bill", "Spend", "AMC", "Support", "Work", "Project"].map((m) => (
              <div key={m} className="rounded-2xl bg-white/[0.07] px-5 py-4 text-center text-sm font-medium text-white/85 ring-1 ring-white/15 backdrop-blur-xl transition hover:bg-white/15">{m}</div>
            ))}
            <div className="rounded-2xl bg-gradient-to-br from-sky-400/20 to-violet-500/20 px-5 py-4 text-center text-sm font-semibold text-white ring-1 ring-white/25 backdrop-blur-xl">+ 1 database</div>
          </div>
        </div>
      </section>

      {/* ---------- glass stats + quotes ---------- */}
      <section id="why" className="relative px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className={`${glass} grid grid-cols-1 gap-8 px-8 py-10 sm:grid-cols-3`}>
            {[{ v: "2.5K+", l: "Active users" }, { v: "20+", l: "Countries" }, { v: "14", l: "Years in software" }].map((s) => (
              <div key={s.l} className="text-center">
                <strong className="block bg-gradient-to-r from-sky-300 to-violet-300 bg-clip-text text-4xl font-bold tracking-tight text-transparent">{s.v}</strong>
                <span className="mt-2 block text-sm text-white/60">{s.l}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-12 gap-5">
            {TESTIMONIALS.slice(0, 2).map((q) => (
              <figure key={q.name} className={`${glass} col-span-12 p-7 sm:col-span-6`}>
                <Quote className="h-5 w-5 text-sky-300/70" />
                <blockquote className="mt-4 text-[15px] leading-relaxed text-white/85">“{q.text}”</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <img src={`https://i.pravatar.cc/80?img=${q.img}`} alt={q.name} width="36" height="36" loading="lazy" className="h-9 w-9 rounded-full ring-1 ring-white/25" />
                  <span><strong className="block text-sm font-semibold text-white">{q.name}</strong><small className="text-xs text-white/55">{q.company}</small></span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- glass pricing ---------- */}
      <section id="pricing" className="relative px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">Pricing</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Clear glass, clear price</h2>
          </div>
          <div className="mt-12 grid grid-cols-12 gap-6">
            {PLANS.map((p) => (
              <div key={p.name}
                className={`col-span-12 rounded-3xl p-7 sm:col-span-6 lg:col-span-4 ${p.popular ? "bg-gradient-to-b from-white/20 to-white/10 ring-1 ring-white/30 backdrop-blur-2xl" : "bg-white/[0.06] ring-1 ring-white/15 backdrop-blur-xl"}`}>
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
                  className={`mt-7 w-full rounded-full px-5 py-3 text-sm font-semibold transition ${p.popular ? "bg-white text-slate-900 hover:bg-white/90" : "bg-white/10 text-white ring-1 ring-white/25 hover:bg-white/20"}`}>
                  {p.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- glass faq ---------- */}
      <section id="contact" className="relative px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">Support</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Book a meeting</h2>
            <p className="mt-4 leading-relaxed text-white/65">A 20-minute walkthrough on your own numbers, with the people who build the product.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="tel:+919284162015" className="rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/25 backdrop-blur-xl transition hover:bg-white/20">+91 92841 62015</a>
              <a href="mailto:ffhsales@kriskrossinc.com" className="rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/25 backdrop-blur-xl transition hover:bg-white/20">Email support</a>
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

      <TwFooter variant="glass" />
    </div>
  );
}
