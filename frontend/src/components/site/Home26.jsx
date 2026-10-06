import React, { useEffect, useState } from "react";
import { Apple, ArrowRight, Bell, Check, Clock, Facebook, Globe, LayoutDashboard, Leaf, Linkedin, Menu, Play, Phone, Twitter, Watch, X } from "lucide-react";
import { toast } from "sonner";
import { HOME26, PLANS, formatINR } from "../../mock";
import TwSignupForm from "./TwSignupForm";
import HomeLayoutNav from "./HomeLayoutNav";
import { useGoTo } from "./crmStore";

// Layout 26 — a Tailwind rebuild of the classic app-landing template: dark
// gradient hero with device mockups and drifting shapes, pastel wave dividers, a
// three-icon row, a dashboard section, a phone-centred feature grid, a watch
// section, a video band, pricing and a four-column footer. No Bootstrap.
const NAV = [
  { label: "Features", target: "#features" },
  { label: "Dashboard", target: "#why" },
  { label: "Modules", target: "#modules" },
  { label: "Pricing", target: "#pricing" },
  { label: "Contact", target: "#contact" },
];

// layered pastel waves, as in the reference template
const Waves = ({ flip = false }) => (
  <div className={`pointer-events-none -mt-px w-full ${flip ? "rotate-180" : ""}`} aria-hidden="true">
    <svg viewBox="0 0 1440 150" preserveAspectRatio="none" className="block h-[80px] w-full sm:h-[130px]">
      <path d="M0 62 C 240 126 480 4 720 44 C 960 84 1200 22 1440 62 L1440 150 L0 150 Z" fill="#c7d2fe" opacity="0.5" />
      <path d="M0 84 C 260 134 520 32 780 72 C 1020 108 1240 52 1440 88 L1440 150 L0 150 Z" fill="#e9d5ff" opacity="0.55" />
      <path d="M0 104 C 300 144 600 74 900 104 C 1140 128 1300 100 1440 112 L1440 150 L0 150 Z" fill="#ffffff" />
    </svg>
  </div>
);

// small, self-contained device mockups drawn with Tailwind
const PhoneScreen = () => (
  <div className="flex h-full flex-col bg-gradient-to-b from-violet-600 via-indigo-700 to-slate-900 p-3 text-white">
    <div className="flex items-center justify-between text-[9px] text-white/70">
      <span>9:41</span>
      <span className="flex items-center gap-1"><i className="h-1.5 w-1.5 rounded-full bg-emerald-400" />live</span>
    </div>
    <div className="mt-3 flex items-center gap-2">
      <img src="/ffh-logo.png" alt="" width="22" height="22" className="h-[22px] w-[22px] rounded-full ring-1 ring-white/30" />
      <span className="text-[11px] font-bold tracking-tight">FFH|ERP</span>
    </div>
    <div className="mt-3 rounded-2xl bg-white/10 p-2.5 ring-1 ring-white/15">
      <span className="text-[8px] uppercase tracking-wider text-white/60">Revenue booked</span>
      <strong className="mt-0.5 block text-lg font-bold leading-none">₹1.84Cr</strong>
      <span className="text-[8px] text-emerald-300">▲ 12.4% vs last month</span>
    </div>
    <div className="mt-2 grid grid-cols-2 gap-2">
      {[{ l: "Open leads", v: "312" }, { l: "Renewals", v: "27" }].map((k) => (
        <div key={k.l} className="rounded-xl bg-white/10 p-2 ring-1 ring-white/15">
          <span className="text-[7px] uppercase tracking-wide text-white/55">{k.l}</span>
          <strong className="mt-0.5 block text-[13px] font-bold">{k.v}</strong>
        </div>
      ))}
    </div>
    <div className="mt-3 rounded-2xl bg-white/10 p-2.5 ring-1 ring-white/15">
      <span className="text-[8px] uppercase tracking-wider text-white/60">Collections</span>
      <div className="mt-2 flex h-16 items-end gap-1.5">
        {[38, 52, 44, 66, 58, 80].map((h, i) => (
          <span key={i} className={`flex-1 rounded-t ${i === 5 ? "bg-amber-300" : "bg-white/70"}`} style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
    <div className="mt-auto space-y-1.5">
      {["Acme Industries", "Zenith Retail", "Galaxy Health"].map((c) => (
        <div key={c} className="flex items-center justify-between rounded-lg bg-white/5 px-2 py-1.5 text-[9px] ring-1 ring-white/10">
          <span className="text-white/85">{c}</span><span className="text-emerald-300">paid</span>
        </div>
      ))}
    </div>
  </div>
);

const PhoneMock = ({ className = "" }) => (
  <div className={`relative w-[248px] rounded-[40px] border-[9px] border-slate-950 bg-slate-950 shadow-2xl shadow-black/50 sm:w-[286px] ${className}`}>
    <span className="absolute left-1/2 top-2 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-slate-700" />
    <div className="aspect-[9/17.5] overflow-hidden rounded-[31px]"><PhoneScreen /></div>
  </div>
);

const TabletMock = () => (
  <div className="relative w-full max-w-[520px] rotate-[-4deg] rounded-[26px] border-[10px] border-slate-950 bg-slate-950 shadow-2xl shadow-slate-900/30">
    <div className="overflow-hidden rounded-[17px] bg-white">
      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-2.5">
        <span className="text-[11px] font-semibold text-slate-700">Business dashboard</span>
        <span className="flex gap-1"><i className="h-2 w-2 rounded-full bg-slate-300" /><i className="h-2 w-2 rounded-full bg-slate-300" /><i className="h-2 w-2 rounded-full bg-slate-300" /></span>
      </div>
      <div className="flex">
        <div className="w-24 shrink-0 space-y-2 border-r border-slate-100 bg-slate-50/60 p-3">
          {["Overview", "Sales", "Purchase", "Billing", "AMC", "Support"].map((m, i) => (
            <div key={m} className={`rounded-md px-2 py-1 text-[9px] ${i === 0 ? "bg-indigo-600 text-white" : "text-slate-500"}`}>{m}</div>
          ))}
        </div>
        <div className="flex-1 p-3">
          <div className="grid grid-cols-3 gap-2">
            {[{ l: "Revenue", v: "₹1.84Cr" }, { l: "Leads", v: "312" }, { l: "Due", v: "27" }].map((k) => (
              <div key={k.l} className="rounded-lg border border-slate-200 p-2">
                <span className="block text-[7px] uppercase tracking-wide text-slate-500">{k.l}</span>
                <strong className="block text-[11px] font-bold text-slate-900">{k.v}</strong>
              </div>
            ))}
          </div>
          <svg viewBox="0 0 320 110" className="mt-3 h-24 w-full">
            <defs>
              <linearGradient id="h26area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[0, 1, 2, 3].map((i) => <line key={i} x1="0" y1={20 + i * 25} x2="320" y2={20 + i * 25} stroke="#eef2f7" strokeWidth="1" />)}
            <path d="M0 88 L45 70 L90 78 L135 52 L180 60 L225 34 L270 42 L320 18" fill="none" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M0 88 L45 70 L90 78 L135 52 L180 60 L225 34 L270 42 L320 18 L320 110 L0 110 Z" fill="url(#h26area)" />
          </svg>
          <div className="mt-2 space-y-1.5">
            {[{ p: "Pipeline vs target", v: "78%" }, { p: "Collections", v: "92%" }].map((b) => (
              <div key={b.p}>
                <div className="flex justify-between text-[8px] text-slate-500"><span>{b.p}</span><span>{b.v}</span></div>
                <div className="mt-0.5 h-1.5 w-full rounded-full bg-slate-100">
                  <div className="h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" style={{ width: b.v }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const WatchMock = () => (
  <div className="relative mx-auto w-[186px]">
    <div className="mx-auto h-16 w-24 rounded-t-2xl bg-gradient-to-b from-slate-300 to-slate-400" />
    <div className="rounded-[30px] border-[6px] border-slate-800 bg-slate-900 p-1.5 shadow-2xl shadow-slate-900/30">
      <div className="rounded-[22px] bg-black p-2.5">
        <div className="rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 p-2.5 ring-1 ring-white/10">
          <div className="flex items-center gap-1.5">
            <img src="/ffh-logo.png" alt="" width="16" height="16" className="h-4 w-4 rounded-full" />
            <span className="text-[8px] font-bold text-white">Purchase order</span>
          </div>
          <span className="mt-2 block text-[7px] uppercase tracking-wide text-white/50">Vendor · amount</span>
          <strong className="block text-[13px] font-bold text-white">₹2,40,000</strong>
          <div className="mt-2 flex gap-1.5">
            <span className="flex-1 rounded-md bg-emerald-600 py-1 text-center text-[7px] font-bold text-white">Approve</span>
            <span className="flex-1 rounded-md bg-white/15 py-1 text-center text-[7px] font-bold text-white/80">Send back</span>
          </div>
        </div>
      </div>
    </div>
    <div className="mx-auto h-16 w-24 rounded-b-2xl bg-gradient-to-t from-slate-300 to-slate-400" />
  </div>
);

export default function Home26() {
  const goTo = useGoTo();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.title = "FFH|ERP — Everything your business runs on, in one app";
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e, t) => { e.preventDefault(); setOpen(false); goTo(t); };
  const Eyebrow = ({ children, dark = false }) => (
    <span className={`text-xs font-semibold uppercase tracking-[0.2em] ${dark ? "text-indigo-300" : "text-indigo-600"}`}>{children}</span>
  );

  return (
    <div className="ffh-tw min-h-screen bg-white text-slate-900 antialiased" data-testid="home26-page">
      {/* ---------- dark hero with nav, phone ---------- */}
      <section id="top" className="relative overflow-hidden bg-slate-950 pb-40 pt-6 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(1100px_620px_at_50%_-5%,#4c1d95_0%,transparent_62%),radial-gradient(800px_500px_at_15%_25%,#1e3a8a_0%,transparent_58%),radial-gradient(700px_460px_at_88%_18%,#3730a3_0%,transparent_60%),linear-gradient(180deg,#0b1024_0%,#131a3a_60%,#1c2450_100%)]" />
          <div className="absolute left-1/2 top-24 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl" />
        </div>

        {/* drifting decorative leaves, a nod to the reference template */}
        <Leaf className="ffh-h26-float pointer-events-none absolute left-[8%] top-[8%] h-10 w-10 text-emerald-400/70" style={{ "--r": "-18deg" }} />
        <Leaf className="ffh-h26-float d2 pointer-events-none absolute right-[10%] top-[16%] h-8 w-8 text-lime-300/60" style={{ "--r": "24deg" }} />
        <Leaf className="ffh-h26-float d3 pointer-events-none absolute left-[16%] top-[46%] h-7 w-7 text-emerald-300/50" style={{ "--r": "8deg" }} />
        <Leaf className="ffh-h26-float d2 pointer-events-none absolute right-[18%] top-[52%] h-9 w-9 text-emerald-400/40" style={{ "--r": "-30deg" }} />

        <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "bg-slate-950/80 backdrop-blur-xl ring-1 ring-white/10" : "bg-transparent"}`} data-testid="h26-nav">
          <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-5 sm:px-8">
            <a href="#top" onClick={(e) => go(e, "#top")} className="flex items-center gap-2.5 text-[17px] font-bold tracking-tight text-white">
              <img src="/ffh-logo.png" alt="FFH ERP" width="30" height="30" className="h-[30px] w-[30px] rounded-full" />
              <span>FFH<i className="not-italic font-medium text-emerald-400">|</i>ERP</span>
            </a>
            <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
              {NAV.map((l) => (
                <a key={l.label} href={l.target} onClick={(e) => go(e, l.target)}
                  className="rounded-lg px-3.5 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white">{l.label}</a>
              ))}
            </nav>
            <div className="ml-auto hidden items-center gap-3 lg:flex">
              <button onClick={() => toast("Sign-in is coming soon")} className="bg-transparent text-sm font-medium text-white/80 transition hover:text-white">Log in</button>
              <button onClick={(e) => go(e, "#signup")} data-testid="h26-download"
                className="rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-500">Download now</button>
            </div>
            <button onClick={() => setOpen(!open)} aria-label="Toggle menu" data-testid="h26-burger"
              className="ml-auto rounded-lg bg-transparent p-2 text-white lg:hidden">{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
          </div>
          {open && (
            <div className="bg-slate-950/95 px-5 pb-6 pt-2 backdrop-blur-xl lg:hidden" data-testid="h26-mobile">
              {NAV.map((l) => (
                <a key={l.label} href={l.target} onClick={(e) => go(e, l.target)}
                  className="block rounded-lg px-3 py-3 text-sm font-medium text-white/80 hover:bg-white/10">{l.label}</a>
              ))}
              <button onClick={(e) => go(e, "#signup")} className="mt-3 w-full rounded-lg bg-emerald-500 px-4 py-3 text-sm font-semibold text-white">Download now</button>
            </div>
          )}
        </header>

        <div className="relative mx-auto max-w-3xl px-5 pt-24 text-center sm:px-8 sm:pt-28">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-[11px] font-medium text-white/75 ring-1 ring-white/15">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />Free 7-day trial · v2026
          </span>
          <img src="/ffh-logo.png" alt="FFH ERP" width="82" height="82" className="mx-auto mt-7 block h-[82px] w-[82px] rounded-full ring-4 ring-white/10" />
          <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl">FFH|ERP</h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">{HOME26.tagline}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button onClick={(e) => go(e, "#signup")} data-testid="home26-cta-trial"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/25 transition hover:bg-emerald-500">
              Start free trial <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={() => toast("A demo video is coming soon")} data-testid="home26-cta-demo"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:bg-indigo-500">
              Book a demo
            </button>
          </div>
          <button onClick={() => toast("A demo video is coming soon")}
            className="mt-5 inline-flex items-center gap-2 bg-transparent text-xs font-medium text-white/60 transition hover:text-white">
            <Play className="h-3.5 w-3.5" />{HOME26.heroNote}
          </button>

          <div className="mt-12"><PhoneMock className="mx-auto" /></div>
        </div>
        <div className="absolute inset-x-0 bottom-0"><Waves /></div>
      </section>

      {/* ---------- three-icon row ---------- */}
      <section id="features" className="relative px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">The best tool to manage your business</h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-12 sm:grid-cols-3">
            {HOME26.bestTool.map((b) => (
              <div key={b.title} className="text-center">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
                  {b.icon === "LayoutDashboard" ? <LayoutDashboard className="h-6 w-6" /> : b.icon === "Clock" ? <Clock className="h-6 w-6" /> : <Globe className="h-6 w-6" />}
                </span>
                <h3 className="mt-5 text-base font-semibold text-slate-900">{b.title}</h3>
                <p className="mx-auto mt-2 max-w-[19rem] text-sm leading-relaxed text-slate-500">{b.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <button onClick={(e) => go(e, "#modules")} className="inline-flex items-center gap-2 bg-transparent text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              Interested in more? View all features <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <Waves flip />

      {/* ---------- dashboard ---------- */}
      <section id="why" className="bg-slate-50 px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-12 items-center gap-12">
          <div className="col-span-12 lg:col-span-5">
            <Eyebrow>{HOME26.dashboard.eyebrow}</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{HOME26.dashboard.title}</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">{HOME26.dashboard.lead}</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">{HOME26.dashboard.text}</p>
            <button onClick={(e) => go(e, "#modules")}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-700 ring-1 ring-slate-300 transition hover:bg-slate-100">
              Learn more <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="col-span-12 flex justify-center lg:col-span-7 lg:justify-end"><TabletMock /></div>
        </div>
      </section>

      {/* ---------- featured features around the phone ---------- */}
      <section id="modules" className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{HOME26.features.title}</h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-500">{HOME26.features.sub}</p>
            <span className="mt-6 inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100"><Check className="h-4 w-4" /></span>
          </div>

          <div className="mt-14 grid grid-cols-12 items-center gap-10">
            <div className="col-span-12 space-y-10 lg:col-span-4">
              {HOME26.features.left.map((f) => (
                <div key={f.title} className="lg:text-right">
                  <h3 className="text-base font-semibold text-slate-900">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{f.text}</p>
                </div>
              ))}
            </div>

            <div className="col-span-12 flex justify-center lg:col-span-4">
              <div className="relative w-[248px] rounded-[40px] border-[9px] border-slate-950 bg-slate-950 shadow-2xl shadow-slate-900/25">
                <span className="absolute left-1/2 top-2 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-slate-700" />
                <div className="aspect-[9/17.5] overflow-hidden rounded-[31px] bg-white">
                  <div className="flex h-full flex-col items-center justify-center bg-gradient-to-b from-violet-600 to-indigo-700 px-6 text-center text-white">
                    <img src="/ffh-logo.png" alt="" width="46" height="46" className="h-[46px] w-[46px] rounded-full ring-2 ring-white/30" />
                    <span className="mt-3 text-sm font-bold tracking-tight">FFH|ERP</span>
                    <div className="mt-6 w-full space-y-2.5 text-left">
                      <div className="rounded-lg bg-white/15 px-3 py-2 text-[10px] text-white/70 ring-1 ring-white/25">you@company.com</div>
                      <div className="rounded-lg bg-white/15 px-3 py-2 text-[10px] tracking-widest text-white/70 ring-1 ring-white/25">•••••••</div>
                    </div>
                    <span className="mt-5 w-full rounded-lg bg-emerald-600 py-2.5 text-[11px] font-bold text-white">Sign in</span>
                    <span className="mt-3 text-[9px] text-white/60">Forgot your password?</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-12 space-y-10 lg:col-span-4">
              {HOME26.features.right.map((f) => (
                <div key={f.title}>
                  <h3 className="text-base font-semibold text-slate-900">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- watch ---------- */}
      <section className="relative overflow-hidden bg-slate-50 px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-12 items-center gap-12">
          <div className="col-span-12 lg:col-span-6"><WatchMock /></div>
          <div className="col-span-12 lg:col-span-6">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100"><Watch className="h-5 w-5" /></span>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{HOME26.watch.title}</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">{HOME26.watch.text}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <button onClick={(e) => go(e, "#signup")}
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                <Apple className="h-4 w-4" /> App Store
              </button>
              <button onClick={(e) => go(e, "#signup")}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-700 ring-1 ring-slate-300 transition hover:bg-slate-100">
                <Play className="h-4 w-4" /> Google Play
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- video band ---------- */}
      <section className="bg-gradient-to-r from-violet-700 via-purple-600 to-indigo-700 px-5 py-20 text-white sm:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-12 items-center gap-10">
          <div className="col-span-12 lg:col-span-4">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{HOME26.howto.title}</h2>
            <p className="mt-4 leading-relaxed text-white/75">{HOME26.howto.text}</p>
            <button onClick={() => toast("The tutorial library is coming soon")}
              className="mt-6 inline-flex items-center gap-2 bg-transparent text-sm font-semibold text-white hover:text-white/80">
              <Play className="h-4 w-4" /> See all tutorials
            </button>
          </div>
          <div className="col-span-12 grid grid-cols-1 gap-5 sm:grid-cols-3 lg:col-span-8">
            {HOME26.howto.videos.map((v) => (
              <button key={v.title} onClick={() => toast("A demo video is coming soon")} data-testid={`home26-video-${v.duration.replace(":", "")}`}
                className="group text-left">
                <span className={`relative flex aspect-[4/3] items-center justify-center rounded-2xl bg-gradient-to-br ${v.tone} ring-1 ring-white/20`}>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-black/40 text-white ring-1 ring-white/30 transition group-hover:bg-black/60">
                    <Play className="h-4 w-4" />
                  </span>
                  <span className="absolute right-2.5 top-2.5 rounded bg-black/50 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide">video</span>
                </span>
                <span className="mt-3 block text-sm font-medium text-white/90">{v.title}</span>
                <span className="mt-1 block text-xs text-white/55">{v.duration}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- pricing ---------- */}
      <section id="pricing" className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Choose plans &amp; pricing</h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-500">Your subscription includes nine modules, updates, automatic data backups and the storage you need.</p>
          </div>
          <div className="mt-14 grid grid-cols-12 gap-6">
            {PLANS.map((p) => (
              <div key={p.name}
                className={`col-span-12 overflow-hidden rounded-2xl border sm:col-span-6 lg:col-span-4 ${p.popular ? "border-emerald-300 shadow-xl shadow-emerald-600/10" : "border-slate-200"}`}
                data-testid={`home26-plan-${p.name.toLowerCase()}`}>
                <div className={`px-7 py-6 text-center ${p.popular ? "bg-emerald-50" : "bg-slate-50"}`}>
                  <h3 className="text-base font-semibold text-slate-900">{p.name}</h3>
                  <span className="mt-3 block text-4xl font-bold tracking-tight text-slate-900">
                    {formatINR(p.monthly)}<em className="text-sm font-medium not-italic text-slate-500">/mo</em>
                  </span>
                  <span className="mt-1 block text-xs text-slate-500">{p.sub}</span>
                </div>
                <ul className="space-y-3 px-7 py-6">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />{f}
                    </li>
                  ))}
                </ul>
                <div className="px-7 pb-7">
                  <button onClick={(e) => go(e, "#signup")}
                    className={`w-full rounded-xl px-5 py-3 text-sm font-semibold transition ${p.popular ? "bg-emerald-600 text-white hover:bg-emerald-500" : "bg-white text-slate-700 ring-1 ring-slate-300 hover:bg-slate-50"}`}>
                    {p.popular ? "Start trial" : "Explore today"}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 flex flex-wrap items-center justify-center gap-2 text-sm text-slate-500">
            Need support? <a href="tel:+919284162015" className="inline-flex items-center gap-1.5 font-semibold text-indigo-600 hover:text-indigo-500"><Phone className="h-4 w-4" />+91 92841 62015</a>
          </p>
        </div>
      </section>

      {/* ---------- signup ---------- */}
      <section className="bg-slate-50 px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-12 items-center gap-10">
          <div className="col-span-12 lg:col-span-5">
            <Eyebrow>Try it for free</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Seven days, every module</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Put a month of your real sales, purchases and tickets in it. No credit card, and our team migrates your data with you.
            </p>
            <div className="mt-8"><HomeLayoutNav /></div>
          </div>
          <div className="col-span-12 flex justify-center lg:col-span-7 lg:justify-end">
            <TwSignupForm variant="light" />
          </div>
        </div>
      </section>

      {/* ---------- contact / closing band ---------- */}
      <section id="contact" className="border-y border-slate-200 bg-white px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-5">
          <p className="text-sm text-slate-600 sm:text-base">{HOME26.cta}</p>
          <button onClick={(e) => go(e, "#signup")} data-testid="home26-cta-bottom"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500">
            Try it free <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* ---------- footer ---------- */}
      <footer className="bg-slate-950 px-5 pb-10 pt-16 text-slate-300 sm:px-8" data-testid="h26-footer">
        <div className="mx-auto grid max-w-6xl grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-4">
            <div className="flex items-center gap-2.5 text-[17px] font-bold tracking-tight text-white">
              <img src="/ffh-logo.png" alt="FFH ERP" width="30" height="30" className="h-[30px] w-[30px] rounded-full" />
              <span>FFH<i className="not-italic font-medium text-emerald-400">|</i>ERP</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Nine connected modules for sales, marketing, finance, AMC, support and projects — on one database.
            </p>
          </div>
          {[
            { title: "About us", links: ["Our team", "Our journey", "Careers", "Newsletter"] },
            { title: "Helpcenter", links: ["Documentation", "Tutorials", "Terms of use", "Privacy policy"] },
            { title: "Tools", links: ["Create account", "Log in", "Services", "Sitemap"] },
          ].map((c) => (
            <div key={c.title} className="col-span-6 sm:col-span-4 lg:col-span-2">
              <h6 className="text-xs font-semibold uppercase tracking-[0.16em] text-white">{c.title}</h6>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}><button onClick={(e) => go(e, l === "Our team" ? "/about" : "#modules")} className="bg-transparent text-sm text-slate-400 transition hover:text-white">{l}</button></li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-span-12 sm:col-span-4 lg:col-span-2">
            <h6 className="text-xs font-semibold uppercase tracking-[0.16em] text-white">Get in touch</h6>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              <li><a href="tel:+919284162015" className="hover:text-white">+91 92841 62015</a></li>
              <li><a href="mailto:ffhsales@kriskrossinc.com" className="hover:text-white">ffhsales@kriskrossinc.com</a></li>
              <li>Pune, India</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-12 flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
          <span className="text-xs text-slate-500">© 2025 FFH|ERP by KrisKross Inc. All rights reserved.</span>
          <div className="flex items-center gap-2">
            {[Facebook, Twitter, Linkedin, Apple].map((I, i) => (
              <a key={i} href="#top" onClick={(e) => e.preventDefault()} className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-slate-400 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
