import React, { useEffect } from "react";
import { ArrowRight, Check, Star } from "lucide-react";
import { HOME23, TOOLS, PLANS, FAQS, TESTIMONIALS, SERVING_BRANDS, formatINR } from "../../mock";
import Icon from "./TwIcon";
import TwPillHeader from "./TwPillHeader";
import TwFooter from "./TwFooter";
import TwSignupForm from "./TwSignupForm";
import HomeLayoutNav from "./HomeLayoutNav";
import { useGoTo } from "./crmStore";

// Layout 23 — the reference navbar, rebuilt in Tailwind: floating pill nav with
// centred caret menus, Log in and a dark "Book a meeting" pill over a clean,
// centred marketing page. No Bootstrap anywhere.
export default function Home23() {
  const goTo = useGoTo();

  useEffect(() => {
    document.title = "FFH|ERP — Run the whole business from one calm place";
  }, []);

  const Eyebrow = ({ children }) => (
    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">{children}</span>
  );

  return (
    <div className="ffh-tw min-h-screen bg-white text-slate-900 antialiased" data-testid="home23-page">
      <TwPillHeader variant="light" />

      {/* ---------- centred hero ---------- */}
      <section id="top" className="relative overflow-hidden px-5 pb-16 pt-40 sm:px-8 sm:pt-44">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-100 via-violet-100 to-sky-100 blur-3xl" />
        <div className="relative mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-medium text-slate-600 ring-1 ring-slate-200 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />{HOME23.badge}
          </span>
          <h1 className="mt-7 text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl">
            {HOME23.titleLead}{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 bg-clip-text text-transparent">{HOME23.titleAccent}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">{HOME23.lead}</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <button onClick={() => goTo("#signup")} data-testid="home23-cta-trial"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800">
              Book a meeting <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={() => goTo("#modules")} data-testid="home23-cta-modules"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 ring-1 ring-slate-300 transition hover:bg-slate-50">
              See the modules
            </button>
          </div>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm text-slate-500">
            {HOME23.trust.map((t) => (
              <span key={t} className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" />{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- logos ---------- */}
      <section className="border-y border-slate-100 px-5 py-10 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Trusted by teams at</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {SERVING_BRANDS.map((b) => (
              <span key={b.key} className="text-sm font-semibold text-slate-400 transition hover:text-slate-700">{b.name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- services ---------- */}
      <section id="features" className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Four jobs, one platform</h2>
            <p className="mt-4 text-slate-600">Most teams switch on one of these and add the rest when they are ready.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {HOME23.services.map((s) => (
              <div key={s.title} className="group rounded-3xl bg-white p-7 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
                  <Icon name={s.icon} size={22} />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {HOME23.metrics.map((m) => (
              <div key={m.label} className="rounded-2xl bg-slate-50 p-5 text-center ring-1 ring-slate-200/70">
                <strong className="block text-2xl font-bold tracking-tight text-slate-900">{m.value}</strong>
                <span className="mt-1 block text-xs uppercase tracking-wide text-slate-500">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- modules ---------- */}
      <section id="modules" className="border-y border-slate-100 bg-slate-50 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Eyebrow>Modules</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Nine modules, one database</h2>
            </div>
            <button onClick={() => goTo("#pricing")} className="inline-flex items-center gap-2 bg-transparent text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              See pricing <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TOOLS.map((t) => (
              <div key={t.name} className="flex items-start gap-4 rounded-2xl bg-white p-5 ring-1 ring-slate-200 transition hover:ring-indigo-300">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600"><Icon name={t.icon} size={19} /></span>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">{t.name}</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-slate-600">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- signup + why ---------- */}
      <section id="why" className="px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-12 items-center gap-10">
          <div className="col-span-12 lg:col-span-5">
            <Eyebrow>Why FFH|ERP</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Answers before the meeting</h2>
            <p className="mt-4 text-lg text-slate-600">
              Managers open one screen instead of four spreadsheets, and the numbers are the ones the business is
              actually running on.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {TESTIMONIALS.slice(0, 2).map((t) => (
                <figure key={t.name} className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
                  <span className="flex text-amber-500">{[0, 1, 2, 3, 4].map((i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}</span>
                  <blockquote className="mt-3 text-[13px] leading-relaxed text-slate-600">“{t.text}”</blockquote>
                </figure>
              ))}
            </div>
            <div className="mt-8"><HomeLayoutNav /></div>
          </div>
          <div className="col-span-12 flex justify-center lg:col-span-7 lg:justify-end">
            <TwSignupForm variant="light" title="Book a meeting or start free" />
          </div>
        </div>
      </section>

      {/* ---------- pricing ---------- */}
      <section id="pricing" className="border-y border-slate-100 bg-slate-50 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Pricing</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Printed on the page, like it should be</h2>
          </div>
          <div className="mt-12 grid grid-cols-12 gap-6">
            {PLANS.map((p) => (
              <div key={p.name}
                className={`col-span-12 rounded-3xl p-7 sm:col-span-6 lg:col-span-4 ${p.popular ? "bg-slate-900 text-white" : "bg-white ring-1 ring-slate-200"}`}>
                {p.popular && <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">Most popular</span>}
                <h3 className={`mt-3 text-lg font-semibold ${p.popular ? "text-white" : "text-slate-900"}`}>{p.name}</h3>
                <p className={`mt-1 text-sm ${p.popular ? "text-slate-400" : "text-slate-500"}`}>{p.sub}</p>
                <div className="mt-5 flex items-baseline gap-1.5">
                  <strong className="text-4xl font-bold tracking-tight">{formatINR(p.monthly)}</strong>
                  <span className={p.popular ? "text-slate-400" : "text-slate-500"}>/month</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className={`flex items-start gap-2.5 text-sm ${p.popular ? "text-slate-300" : "text-slate-600"}`}>
                      <Check className={`mt-0.5 h-4 w-4 shrink-0 ${p.popular ? "text-indigo-400" : "text-emerald-500"}`} />{f}
                    </li>
                  ))}
                </ul>
                <button onClick={() => goTo("#signup")}
                  className={`mt-7 w-full rounded-full px-5 py-3 text-sm font-semibold transition ${p.popular ? "bg-white text-slate-900 hover:bg-slate-100" : "bg-slate-900 text-white hover:bg-slate-800"}`}>
                  {p.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- faq ---------- */}
      <section id="contact" className="px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-5">
            <Eyebrow>Support</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Book a meeting</h2>
            <p className="mt-4 text-slate-600">A 20-minute walkthrough on your numbers, or a trial you can start right now.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="tel:+919284162015" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-700 ring-1 ring-slate-300 transition hover:bg-slate-100">+91 92841 62015</a>
              <a href="mailto:ffhsales@kriskrossinc.com" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-700 ring-1 ring-slate-300 transition hover:bg-slate-100">Email support</a>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <div className="space-y-3">
              {FAQS.map((f, i) => (
                <details key={f.q} open={i === 0} className="group rounded-2xl bg-white p-5 ring-1 ring-slate-200">
                  <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
                    {f.q}<span className="text-indigo-600 transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TwFooter variant="light" />
    </div>
  );
}
