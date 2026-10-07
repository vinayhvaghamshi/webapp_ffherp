import React, { useEffect } from "react";
import { ArrowRight, Check, Star } from "lucide-react";
import { HOME21, TOOLS, PLANS, FAQS, MILESTONES, TESTIMONIALS, SERVING_BRANDS, formatINR } from "../../mock";
import Icon from "./TwIcon";
import TwHeader from "./TwHeader";
import TwFooter from "./TwFooter";
import TwSignupForm from "./TwSignupForm";
import HomeLayoutNav from "./HomeLayoutNav";
import { useGoTo } from "./crmStore";

// Layout 21 — Tailwind CSS only. No Bootstrap classes, no react-bootstrap
// components: a 12-column Tailwind grid, ring/rounded/shadow utilities and the
// framework's own spacing scale throughout.
export default function Home21() {
  const goTo = useGoTo();

  useEffect(() => {
    document.title = "FFH|ERP — The operating system for growing businesses";
  }, []);

  const Section = ({ id, children, className = "" }) => (
    <section id={id} className={`px-5 sm:px-8 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );

  const Eyebrow = ({ children }) => (
    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">{children}</span>
  );

  return (
    <div className="ffh-tw bg-white text-slate-900 antialiased" data-testid="home21-page">
      <TwHeader variant="light" />

      {/* ---------- hero ---------- */}
      <section id="top" className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white px-5 pt-32 pb-16 sm:px-8 sm:pt-36">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-200/50 via-violet-200/40 to-sky-200/50 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-12 items-center gap-8 lg:gap-12">
          <div className="col-span-12 lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-medium text-slate-600 ring-1 ring-slate-200 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              {HOME21.badge}
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {HOME21.titleLead}{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 bg-clip-text text-transparent">{HOME21.titleAccent}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">{HOME21.lead}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button onClick={() => goTo("#signup")} data-testid="home21-cta-trial"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:bg-indigo-500">
                Start free trial <ArrowRight className="h-4 w-4" />
              </button>
              <button onClick={() => goTo("#modules")} data-testid="home21-cta-modules"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 ring-1 ring-slate-300 transition hover:bg-slate-50">
                Explore the modules
              </button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <div className="flex -space-x-2">
                {TESTIMONIALS.slice(0, 4).map((t) => (
                  <img key={t.name} src={`https://i.pravatar.cc/80?img=${t.img}`} alt={t.name} width="32" height="32" loading="lazy"
                    className="h-8 w-8 rounded-full ring-2 ring-white" />
                ))}
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <span className="flex text-amber-500">
                  {[0, 1, 2, 3, 4].map((i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                </span>
                <strong className="font-semibold text-slate-900">{HOME21.proof.rating}</strong>
                {HOME21.proof.note}
              </div>
            </div>
          </div>

          {/* framework-native app card */}
          <div className="col-span-12 lg:col-span-5">
            <div className="rounded-3xl bg-white p-5 ring-1 ring-slate-200 shadow-2xl shadow-slate-900/10">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-900">Today at a glance</span>
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-500"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />live</span>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[{ l: "Revenue", v: "₹1.84Cr" }, { l: "Leads", v: "312" }, { l: "Due", v: "27" }].map((k) => (
                  <div key={k.l} className="rounded-2xl bg-slate-50 p-3 ring-1 ring-slate-100">
                    <span className="text-[11px] uppercase tracking-wide text-slate-500">{k.l}</span>
                    <strong className="mt-1 block text-lg font-bold tracking-tight text-slate-900">{k.v}</strong>
                  </div>
                ))}
              </div>
              <div className="mt-5 space-y-3">
                {[{ n: "Pipeline vs target", p: 78, c: "from-indigo-500 to-violet-500" }, { n: "Collections", p: 92, c: "from-emerald-500 to-teal-500" }, { n: "Service SLA", p: 64, c: "from-amber-500 to-orange-500" }].map((b) => (
                  <div key={b.n}>
                    <div className="flex justify-between text-xs text-slate-500"><span>{b.n}</span><span>{b.p}%</span></div>
                    <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-slate-100">
                      <div className={`h-2 rounded-full bg-gradient-to-r ${b.c}`} style={{ width: `${b.p}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center justify-between rounded-2xl bg-slate-900 px-4 py-3 text-white">
                <span className="text-xs text-slate-300">Total booked this month</span>
                <strong className="text-base font-bold">{formatINR(630000)}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- logos ---------- */}
      <Section className="border-y border-slate-100 bg-white py-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Trusted by teams at</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {SERVING_BRANDS.map((b) => (
            <span key={b.key} className="text-sm font-semibold text-slate-400 transition hover:text-slate-700">{b.name}</span>
          ))}
        </div>
      </Section>

      {/* ---------- bento ---------- */}
      <Section id="features" className="py-20">
        <div className="max-w-2xl">
          <Eyebrow>Platform</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Built as one system, not nine apps</h2>
          <p className="mt-4 text-lg text-slate-600">A Tailwind-grid bento of what the platform does out of the box.</p>
        </div>

        <div className="mt-10 grid grid-cols-12 gap-5">
          {HOME21.bento.map((b) => (
            <article key={b.title}
              className={`${b.span === "wide" ? "col-span-12 lg:col-span-6" : "col-span-12 sm:col-span-6 lg:col-span-3"} group rounded-3xl bg-slate-50 p-7 ring-1 ring-slate-200/70 transition hover:bg-white hover:shadow-xl hover:shadow-slate-900/5`}>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-indigo-600 ring-1 ring-slate-200 transition group-hover:bg-indigo-600 group-hover:text-white">
                <Icon name={b.icon} size={22} />
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-900">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{b.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {HOME21.metrics.map((m) => (
            <div key={m.label} className="rounded-2xl border border-slate-200 p-5">
              <strong className="block text-2xl font-bold tracking-tight text-slate-900">{m.value}</strong>
              <span className="mt-1 block text-xs text-slate-500">{m.label}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* ---------- modules ---------- */}
      <Section id="modules" className="border-y border-slate-100 bg-slate-50 py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Eyebrow>Modules</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Nine modules, one database</h2>
          </div>
          <button onClick={() => goTo("#signup")} className="inline-flex items-center gap-2 bg-transparent text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            Start free trial <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TOOLS.map((t) => (
            <div key={t.name} className="flex items-start gap-4 rounded-2xl bg-white p-5 ring-1 ring-slate-200 transition hover:ring-indigo-300"
              data-testid={`home21-tool-${t.name.toLowerCase()}`}>
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <Icon name={t.icon} size={19} />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">{t.name}</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-slate-600">{t.desc}</p>
              </div>
              <Check className="ml-auto h-4 w-4 shrink-0 text-emerald-500" />
            </div>
          ))}
        </div>
      </Section>

      {/* ---------- signup ---------- */}
      <Section id="why" className="py-20">
        <div className="grid grid-cols-12 items-center gap-10">
          <div className="col-span-12 lg:col-span-5">
            <Eyebrow>Free 7-day trial</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Try it on your own numbers</h2>
            <p className="mt-4 text-lg text-slate-600">
              Load a month of real sales, purchases and tickets. Our team migrates your data with you — and you keep
              everything if you decide not to continue.
            </p>
            <ul className="mt-6 space-y-3">
              {["No credit card required", "Setup and training included", "Data hosted in India", "Cancel any time"].map((c) => (
                <li key={c} className="flex items-center gap-3 text-sm text-slate-700">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-600"><Check className="h-3 w-3" /></span>
                  {c}
                </li>
              ))}
            </ul>
            <div className="mt-8"><HomeLayoutNav /></div>
          </div>
          <div className="col-span-12 flex justify-center lg:col-span-7 lg:justify-end">
            <TwSignupForm variant="light" />
          </div>
        </div>
      </Section>

      {/* ---------- pricing ---------- */}
      <Section id="pricing" className="border-y border-slate-100 bg-slate-50 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Pricing</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Priced for growing teams</h2>
          <p className="mt-4 text-slate-600">Every plan includes the mobile app, GST invoicing and data export.</p>
        </div>
        <div className="mt-12 grid grid-cols-12 gap-6">
          {PLANS.map((p) => (
            <div key={p.name}
              className={`col-span-12 rounded-3xl p-7 sm:col-span-6 lg:col-span-4 ${p.popular ? "bg-slate-900 text-white ring-1 ring-slate-900 lg:-mt-4 lg:mb-4" : "bg-white ring-1 ring-slate-200"}`}
              data-testid={`home21-plan-${p.name.toLowerCase()}`}>
              {p.popular && <span className="inline-block rounded-full bg-indigo-500/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-indigo-300">Most popular</span>}
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
                className={`mt-7 w-full rounded-xl px-5 py-3 text-sm font-semibold transition ${p.popular ? "bg-white text-slate-900 hover:bg-slate-100" : "bg-slate-900 text-white hover:bg-slate-800"}`}>
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </Section>

      {/* ---------- stats + quotes ---------- */}
      <Section className="py-20">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {MILESTONES.map((m) => (
            <div key={m.label} className="text-center">
              <strong className="block bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent">
                {m.value.toLocaleString("en-US")}{m.suffix}
              </strong>
              <span className="mt-2 block text-sm text-slate-500">{m.label}</span>
            </div>
          ))}
        </div>
        <div className="mt-16 grid grid-cols-12 gap-6">
          {TESTIMONIALS.slice(0, 3).map((t) => (
            <figure key={t.name} className="col-span-12 rounded-3xl bg-slate-50 p-7 ring-1 ring-slate-200/70 sm:col-span-6 lg:col-span-4">
              <blockquote className="text-[15px] leading-relaxed text-slate-700">“{t.text}”</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <img src={`https://i.pravatar.cc/80?img=${t.img}`} alt={t.name} width="36" height="36" loading="lazy" className="h-9 w-9 rounded-full" />
                <span><strong className="block text-sm font-semibold text-slate-900">{t.name}</strong><small className="text-xs text-slate-500">{t.company}</small></span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* ---------- faq + contact ---------- */}
      <Section id="contact" className="border-t border-slate-100 bg-slate-50 py-20">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-5">
            <Eyebrow>Support</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Questions, answered</h2>
            <p className="mt-4 text-slate-600">Talk to a human who knows the product — 24/7, in six languages.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="tel:+919284162015" className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-700 ring-1 ring-slate-300 transition hover:bg-slate-100">+91 92841 62015</a>
              <a href="mailto:ffhsales@kriskrossinc.com" className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-700 ring-1 ring-slate-300 transition hover:bg-slate-100">Email support</a>
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
      </Section>

      {/* ---------- closing ---------- */}
      <Section className="py-20">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-8 py-14 text-center sm:px-14">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/30 via-violet-500/25 to-sky-500/30 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Run a month of your business on it</h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-300">Free for 7 days, no credit card, and a human to help you set up.</p>
            <button onClick={() => goTo("#signup")} data-testid="home21-cta-bottom"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
              Start free trial <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Section>

      <TwFooter variant="light" />
    </div>
  );
}
