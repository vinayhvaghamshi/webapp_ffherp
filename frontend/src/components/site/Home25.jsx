import React, { useEffect } from "react";
import { ArrowRight, Check } from "lucide-react";
import { HOME25, TOOLS, PLANS, FAQS, formatINR } from "../../mock";
import Icon from "./TwIcon";
import TwSignupForm from "./TwSignupForm";
import HomeLayoutNav from "./HomeLayoutNav";
import { useGoTo } from "./crmStore";

// Layout 25 — my own design: neo-brutalist. Thick black borders, hard offset
// shadows (no blur), flat blocks of lime/cyan/pink, uppercase chunky type and
// sticker-style labels. Sticks out from every other layout on purpose.
// Tailwind only, no Bootstrap.
export default function Home25() {
  const goTo = useGoTo();

  useEffect(() => {
    document.title = "FFH|ERP — Run the business. Skip the mess.";
  }, []);

  const card = "border-4 border-black rounded-2xl shadow-[7px_7px_0_0_#000]";
  const btn = "rounded-xl border-4 border-black px-6 py-3.5 text-sm font-black uppercase tracking-wide transition active:translate-x-[3px] active:translate-y-[3px] active:shadow-none";

  return (
    <div className="ffh-tw min-h-screen bg-lime-200 text-black antialiased" data-testid="home25-page">
      {/* ---------- brutal header ---------- */}
      <header className="sticky top-0 z-50 border-b-4 border-black bg-lime-300" data-testid="brutal-header">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-5 sm:px-8">
          <a href="#top" onClick={(e) => { e.preventDefault(); goTo("#top"); }} className="flex items-center gap-2.5">
            <img src={`${process.env.PUBLIC_URL}/ffh-logo.png`} alt="FFH ERP" width="34" height="34" className="h-[34px] w-[34px] rounded-full border-2 border-black" />
            <span className="text-lg font-black uppercase tracking-tight">FFH|ERP</span>
          </a>
          <nav className="hidden items-center gap-1 lg:flex">
            {[["Modules", "#modules"], ["Why", "#features"], ["Pricing", "#pricing"], ["Support", "#contact"]].map(([l, t]) => (
              <a key={l} href={t} onClick={(e) => { e.preventDefault(); goTo(t); }}
                className="rounded-lg px-3 py-2 text-sm font-bold uppercase tracking-wide hover:bg-black hover:text-lime-300">{l}</a>
            ))}
          </nav>
          <button onClick={() => goTo("#signup")}
            className="ml-auto hidden rounded-xl border-4 border-black bg-black px-5 py-2.5 text-sm font-black uppercase tracking-wide text-lime-300 transition active:translate-x-[2px] active:translate-y-[2px] lg:block">
            Start free
          </button>
          <span className="ml-auto rounded-lg border-2 border-black bg-white px-3 py-2 text-xs font-black uppercase lg:hidden">Menu</span>
        </div>
      </header>

      {/* ---------- hero ---------- */}
      <section id="top" className="border-b-4 border-black bg-lime-200 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-12 items-start gap-10">
          <div className="col-span-12 lg:col-span-7">
            <span className="inline-block -rotate-2 rounded-lg border-4 border-black bg-cyan-300 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] shadow-[4px_4px_0_0_#000]">
              {HOME25.eyebrow}
            </span>
            <h1 className="mt-7 text-5xl font-black uppercase leading-[0.92] tracking-tighter sm:text-7xl">
              {HOME25.titleLead}
              <span className="mt-2 block bg-black px-3 py-1 text-lime-300">{HOME25.titleAccent}</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg font-medium leading-relaxed">{HOME25.lead}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button onClick={() => goTo("#signup")} data-testid="home25-cta-trial"
                className={`${btn} bg-black text-lime-300 shadow-[6px_6px_0_0_#000]`}>
                Start free 7 days <ArrowRight className="ml-1 inline h-4 w-4" />
              </button>
              <button onClick={() => goTo("#modules")} data-testid="home25-cta-modules"
                className={`${btn} bg-white shadow-[6px_6px_0_0_#000]`}>
                See the modules
              </button>
            </div>
            <ul className="mt-9 flex flex-wrap gap-3">
              {HOME25.stickers.map((s, i) => (
                <li key={s} className={`border-4 border-black px-4 py-2 text-xs font-black uppercase tracking-wide shadow-[4px_4px_0_0_#000] ${i % 3 === 0 ? "bg-pink-300" : i % 3 === 1 ? "bg-white" : "bg-yellow-300"}`}>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* brutal stat block */}
          <div className="col-span-12 lg:col-span-5">
            <div className={`${card} bg-white p-6`}>
              <div className="flex items-center justify-between border-b-4 border-black pb-4">
                <span className="text-sm font-black uppercase tracking-wide">Today, in boxes</span>
                <span className="rounded-md border-2 border-black bg-emerald-300 px-2 py-1 text-[10px] font-black uppercase">live</span>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {[{ l: "Revenue", v: "₹1.84Cr" }, { l: "Leads", v: "312" }, { l: "Due", v: "27" }].map((k, i) => (
                  <div key={k.l} className={`border-4 border-black p-3 ${i === 0 ? "bg-lime-300" : i === 1 ? "bg-cyan-200" : "bg-pink-200"}`}>
                    <span className="block text-[10px] font-black uppercase tracking-wide">{k.l}</span>
                    <strong className="mt-1 block text-lg font-black">{k.v}</strong>
                  </div>
                ))}
              </div>
              <div className="mt-5 space-y-3">
                {[{ n: "Pipeline", p: 78 }, { n: "Collections", p: 92 }, { n: "Service SLA", p: 64 }].map((b) => (
                  <div key={b.n}>
                    <div className="flex justify-between text-xs font-black uppercase"><span>{b.n}</span><span>{b.p}%</span></div>
                    <div className="mt-1 h-4 w-full border-4 border-black bg-white">
                      <div className="h-full bg-black" style={{ width: `${b.p}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between border-4 border-black bg-black px-4 py-3 text-lime-300">
                <span className="text-xs font-black uppercase tracking-wide">Booked this month</span>
                <strong className="text-lg font-black">{formatINR(630000)}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- black ticker strip ---------- */}
      <div className="border-b-4 border-black bg-black py-4 text-lime-300">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-2 px-5 text-sm font-black uppercase tracking-[0.2em] sm:px-8">
          {["Sales", "Purchase", "Billing", "Spend", "AMC", "Support", "Work", "Projects", "Market"].map((t) => (
            <span key={t}>{t} ✱</span>
          ))}
        </div>
      </div>

      {/* ---------- numbered blocks ---------- */}
      <section id="features" className="border-b-4 border-black bg-cyan-200 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black uppercase leading-none tracking-tighter sm:text-5xl">Four reasons it sticks</h2>
          <div className="mt-12 grid grid-cols-12 gap-6">
            {HOME25.blocks.map((b, i) => (
              <div key={b.n} className={`${card} col-span-12 p-7 sm:col-span-6 ${i % 2 === 0 ? "bg-white" : "bg-yellow-200"}`}>
                <span className="inline-block border-4 border-black bg-black px-3 py-1 text-xs font-black text-lime-300">{b.n}</span>
                <h3 className="mt-5 text-2xl font-black uppercase leading-none tracking-tight">{b.title}</h3>
                <p className="mt-3 text-sm font-medium leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- modules ---------- */}
      <section id="modules" className="border-b-4 border-black bg-lime-200 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="text-4xl font-black uppercase leading-none tracking-tighter sm:text-5xl">Nine modules. One box.</h2>
            <span className="rounded-lg border-4 border-black bg-white px-4 py-2 text-xs font-black uppercase shadow-[4px_4px_0_0_#000]">No add-ons</span>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TOOLS.map((t, i) => (
              <div key={t.name} className={`${card} flex items-start gap-4 bg-white p-6`}
                style={{ backgroundColor: ["#fff", "#fef9c3", "#cffafe"][i % 3] }}>
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center border-4 border-black bg-black text-lime-300">
                  <Icon name={t.icon} size={20} />
                </span>
                <div>
                  <h3 className="text-base font-black uppercase tracking-tight">{t.name}</h3>
                  <p className="mt-1 text-[13px] font-medium leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- stats ---------- */}
      <section id="why" className="border-b-4 border-black bg-pink-300 px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-3">
          {HOME25.stats.map((s) => (
            <div key={s.label} className={`${card} bg-white px-6 py-8 text-center`}>
              <strong className="block text-5xl font-black uppercase tracking-tighter">{s.value}</strong>
              <span className="mt-2 block text-sm font-black uppercase tracking-[0.2em]">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- signup ---------- */}
      <section id="signup-section" className="border-b-4 border-black bg-yellow-200 px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-12 items-center gap-10">
          <div className="col-span-12 lg:col-span-5">
            <span className="inline-block -rotate-2 rounded-lg border-4 border-black bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.2em] shadow-[4px_4px_0_0_#000]">Free 7-day trial</span>
            <h2 className="mt-7 text-4xl font-black uppercase leading-none tracking-tighter sm:text-5xl">Put your numbers in it</h2>
            <ul className="mt-7 space-y-3">
              {["No credit card", "We migrate your data", "Cancel any time", "Everything stays yours"].map((c) => (
                <li key={c} className="flex items-center gap-3 text-sm font-black uppercase tracking-wide">
                  <span className="inline-flex h-6 w-6 items-center justify-center border-4 border-black bg-black text-lime-300"><Check className="h-3.5 w-3.5" /></span>
                  {c}
                </li>
              ))}
            </ul>
            <div className="mt-8"><HomeLayoutNav /></div>
          </div>
          <div className="col-span-12 flex justify-center lg:col-span-7 lg:justify-end">
            <div className="w-full max-w-lg border-4 border-black bg-white p-2 shadow-[10px_10px_0_0_#000]">
              <TwSignupForm variant="light" title="Start free. No card." />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- pricing ---------- */}
      <section id="pricing" className="border-b-4 border-black bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black uppercase leading-none tracking-tighter sm:text-5xl">Prices in plain sight</h2>
          <div className="mt-12 grid grid-cols-12 gap-6">
            {PLANS.map((p, i) => (
              <div key={p.name} className={`${card} col-span-12 p-7 sm:col-span-6 lg:col-span-4 ${p.popular ? "bg-black text-lime-300" : i === 0 ? "bg-cyan-100" : "bg-lime-100"}`}>
                {p.popular && <span className="inline-block rounded-lg border-2 border-lime-300 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em]">Most popular</span>}
                <h3 className="mt-3 text-2xl font-black uppercase tracking-tight">{p.name}</h3>
                <p className={`mt-1 text-xs font-bold uppercase tracking-wide ${p.popular ? "text-lime-300/70" : "text-black/60"}`}>{p.sub}</p>
                <div className="mt-5 flex items-baseline gap-1.5">
                  <strong className="text-5xl font-black tracking-tighter">{formatINR(p.monthly)}</strong>
                  <span className="text-sm font-black uppercase">/mo</span>
                </div>
                <ul className="mt-6 space-y-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm font-medium">
                      <Check className={`mt-0.5 h-4 w-4 shrink-0 ${p.popular ? "text-lime-300" : "text-black"}`} />{f}
                    </li>
                  ))}
                </ul>
                <button onClick={() => goTo("#signup")}
                  className={`mt-7 w-full rounded-xl border-4 px-5 py-3 text-sm font-black uppercase tracking-wide transition active:translate-x-[3px] active:translate-y-[3px] ${p.popular ? "border-lime-300 bg-lime-300 text-black" : "border-black bg-black text-lime-300"}`}>
                  {p.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- faq ---------- */}
      <section id="contact" className="border-b-4 border-black bg-cyan-200 px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-5">
            <h2 className="text-4xl font-black uppercase leading-none tracking-tighter sm:text-5xl">Straight answers</h2>
            <p className="mt-5 text-lg font-medium">Call a human who knows the product. 24/7, six languages.</p>
            <div className="mt-7 flex flex-wrap gap-4">
              <a href="tel:+919284162015" className={`${btn} bg-white shadow-[6px_6px_0_0_#000]`}>+91 92841 62015</a>
              <a href="mailto:ffhsales@kriskrossinc.com" className={`${btn} bg-black text-lime-300 shadow-[6px_6px_0_0_#000]`}>Email us</a>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <div className="space-y-4">
              {FAQS.map((f, i) => (
                <details key={f.q} open={i === 0} className={`${card} group bg-white p-5`}>
                  <summary className="flex cursor-pointer items-center justify-between text-base font-black uppercase tracking-tight [&::-webkit-details-marker]:hidden">
                    {f.q}<span className="text-2xl leading-none transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm font-medium leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- closing ---------- */}
      <section className="bg-black px-5 py-20 text-lime-300 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8">
          <h2 className="text-4xl font-black uppercase leading-none tracking-tighter sm:text-6xl">Ready when you are.</h2>
          <button onClick={() => goTo("#signup")} data-testid="home25-cta-bottom"
            className="rounded-xl border-4 border-lime-300 bg-lime-300 px-7 py-4 text-base font-black uppercase tracking-wide text-black transition active:translate-x-[3px] active:translate-y-[3px]">
            Start free 7 days <ArrowRight className="ml-1 inline h-5 w-5" />
          </button>
        </div>
      </section>

      {/* ---------- brutal footer ---------- */}
      <footer className="border-t-4 border-black bg-black px-5 pb-10 pt-12 text-lime-300 sm:px-8" data-testid="brutal-footer">
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8">
          <div className="col-span-12 sm:col-span-6 lg:col-span-4">
            <div className="flex items-center gap-2.5 text-lg font-black uppercase tracking-tight text-white">
              <img src={`${process.env.PUBLIC_URL}/ffh-logo.png`} alt="FFH ERP" width="32" height="32" className="h-8 w-8 rounded-full border-2 border-lime-300" />
              FFH|ERP
            </div>
            <p className="mt-4 max-w-xs text-sm font-medium text-lime-300/70">Nine modules, one database. Built in India for growing businesses.</p>
          </div>
          {[["Modules", ["Sales", "Purchase", "Billing", "AMC & Support"]], ["Company", ["About", "Pricing", "Careers", "Contact"]], ["Support", ["Help centre", "Status", "Docs", "Talk to us"]]].map(([title, items]) => (
            <div key={title} className="col-span-6 sm:col-span-3 lg:col-span-2">
              <h6 className="text-xs font-black uppercase tracking-[0.2em] text-white">{title}</h6>
              <ul className="mt-4 space-y-2">
                {items.map((i) => (
                  <li key={i}><button onClick={() => goTo("#modules")} className="bg-transparent text-sm font-medium text-lime-300/70 hover:text-lime-300">{i}</button></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t-4 border-lime-300/30 pt-6 text-xs font-bold uppercase tracking-wide text-lime-300/60">
          © 2025 FFH|ERP by KrisKross Inc.
        </div>
      </footer>
    </div>
  );
}
