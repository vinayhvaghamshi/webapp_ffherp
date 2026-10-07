import React, { useEffect } from "react";
import { ArrowDown, ArrowRight, Check, Facebook, Instagram, Mail, Menu, Quote, Twitter, X, Youtube } from "lucide-react";
import { toast } from "sonner";
import { HOME27, HOME27_MODULES, FAQS, PLANS, formatINR } from "../../mock";
import TwSignupForm from "./TwSignupForm";
import HomeLayoutNav from "./HomeLayoutNav";
import { useGoTo } from "./crmStore";

// Layout 27 — after the GrowKit template: dark navy #1b2631, Poppins display
// type set very bold, a signature blue-to-orange gradient on buttons, gradient
// text and card edges, alternating split sections and a masonry collage.
// Tailwind only, no Bootstrap.
const NAV = [
  { label: "Home", target: "#top" },
  { label: "Modules", target: "#modules" },
  { label: "Views", target: "#features" },
  { label: "Themes", target: "#why" },
  { label: "Pricing", target: "#pricing" },
];

const GRAD = "bg-gradient-to-r from-sky-500 via-blue-600 to-orange-400";
const GRAD_TEXT = "bg-gradient-to-r from-sky-400 via-blue-400 to-orange-300 bg-clip-text text-transparent";
const PANEL = "rounded-2xl bg-[#22303e] ring-1 ring-white/10";

// ---- mini application screens used inside the module cards and the collage --
const MiniUI = ({ kind }) => {
  const bar = "rounded-sm bg-white/15";
  if (kind === "chart")
    return (
      <div className="flex h-full flex-col justify-between p-3">
        <div className="flex items-end gap-1.5" style={{ height: "62%" }}>
          {[44, 62, 51, 78, 66, 90, 72].map((h, i) => (
            <span key={i} className={`flex-1 rounded-t ${i === 5 ? "bg-gradient-to-t from-orange-400 to-sky-400" : "bg-white/20"}`} style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="space-y-1.5">
          <span className={`block h-1.5 w-3/4 ${bar}`} />
          <span className={`block h-1.5 w-1/2 ${bar}`} />
        </div>
      </div>
    );
  if (kind === "table")
    return (
      <div className="p-3">
        <div className="flex justify-between border-b border-white/10 pb-1.5 text-[7px] uppercase tracking-wide text-white/40"><span>Client</span><span>Value</span><span>Stage</span></div>
        {[["Acme", "₹1.5L", "Won"], ["Zenith", "₹1.8L", "Prosp"], ["Brigade", "₹2.2L", "Open"], ["Galaxy", "₹80K", "Hold"]].map((r) => (
          <div key={r[0]} className="flex justify-between border-b border-white/5 py-1.5 text-[8px] text-white/70">
            <span>{r[0]}</span><span className="text-white/90">{r[1]}</span>
            <span className={r[2] === "Won" ? "text-emerald-400" : r[2] === "Hold" ? "text-rose-400" : "text-amber-300"}>{r[2]}</span>
          </div>
        ))}
      </div>
    );
  if (kind === "list")
    return (
      <div className="space-y-2 p-3">
        {["Steel plates", "Bearings", "Cables", "Fasteners"].map((t, i) => (
          <div key={t} className="flex items-center gap-2">
            <span className={`h-2 w-2 shrink-0 rounded-full ${i === 3 ? "bg-amber-300" : "bg-emerald-400"}`} />
            <span className="flex-1 text-[8px] text-white/70">{t}</span>
            <span className="text-[8px] text-white/45">{i === 3 ? "low" : "ok"}</span>
          </div>
        ))}
      </div>
    );
  if (kind === "doc")
    return (
      <div className="p-3">
        <div className="rounded-lg bg-white/90 p-2.5">
          <span className="block text-[7px] font-bold uppercase tracking-wide text-slate-500">Invoice · GST</span>
          <span className="mt-0.5 block text-[13px] font-extrabold text-slate-900">₹1,84,000</span>
          <div className="mt-2 space-y-1">
            <span className="block h-1 w-full rounded bg-slate-200" />
            <span className="block h-1 w-2/3 rounded bg-slate-200" />
          </div>
          <span className="mt-2 inline-block rounded bg-emerald-500 px-2 py-0.5 text-[7px] font-bold text-white">Paid</span>
        </div>
      </div>
    );
  if (kind === "gauge")
    return (
      <div className="flex h-full items-center justify-center p-3">
        <svg viewBox="0 0 100 60" className="w-full max-w-[110px]">
          <path d="M8 54 A42 42 0 0 1 92 54" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="9" strokeLinecap="round" />
          <path d="M8 54 A42 42 0 0 1 92 54" fill="none" stroke="url(#h27g)" strokeWidth="9" strokeLinecap="round" strokeDasharray="132" strokeDashoffset="34" />
          <defs><linearGradient id="h27g" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#38bdf8" /><stop offset="100%" stopColor="#fb923c" /></linearGradient></defs>
          <text x="50" y="52" textAnchor="middle" fontSize="15" fontWeight="800" fill="#fff">74%</text>
        </svg>
      </div>
    );
  if (kind === "calendar")
    return (
      <div className="p-3">
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: 21 }).map((_, i) => (
            <span key={i} className={`aspect-square rounded-[3px] ${i === 9 || i === 15 ? "bg-orange-400/80" : i === 4 ? "bg-sky-400/80" : "bg-white/10"}`} />
          ))}
        </div>
        <div className="mt-2 flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
          <span className="text-[8px] text-white/65">3 renewals this week</span>
        </div>
      </div>
    );
  if (kind === "tickets")
    return (
      <div className="space-y-2 p-3">
        {[["#4821 Loom fault", "high"], ["#4820 AMC visit", "med"], ["#4818 Part return", "low"]].map(([t, p]) => (
          <div key={t} className="flex items-center gap-2 rounded-md bg-white/5 px-2 py-1.5 ring-1 ring-white/10">
            <span className={`h-1.5 w-1.5 rounded-full ${p === "high" ? "bg-rose-400" : p === "med" ? "bg-amber-300" : "bg-emerald-400"}`} />
            <span className="flex-1 text-[8px] text-white/75">{t}</span>
            <span className="text-[7px] uppercase text-white/40">{p}</span>
          </div>
        ))}
      </div>
    );
  // kanban
  return (
    <div className="grid grid-cols-3 gap-1.5 p-3">
      {[["To do", 3], ["Doing", 2], ["Done", 2]].map(([c, n]) => (
        <div key={c} className="space-y-1.5">
          <span className="block text-[7px] uppercase tracking-wide text-white/40">{c}</span>
          {Array.from({ length: n }).map((_, i) => (
            <span key={i} className={`block h-4 rounded-[3px] ${i === 0 ? "bg-white/25" : "bg-white/10"}`} />
          ))}
        </div>
      ))}
    </div>
  );
};

const ModuleCard = ({ m, i }) => (
  <div className="group" data-testid={`home27-module-${m.name.toLowerCase()}`}>
    <div className="relative overflow-hidden rounded-xl bg-[#22303e] p-2 ring-1 ring-white/10 transition group-hover:ring-white/25">
      <div className="mb-2 flex items-center gap-1.5 px-1 pt-0.5">
        <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
        <span className="ml-2 text-[8px] font-medium uppercase tracking-[0.14em] text-white/35">ffh · {m.name}</span>
      </div>
      <div className="h-[132px] overflow-hidden rounded-lg bg-[#1b2631] ring-1 ring-white/5"><MiniUI kind={m.kind} /></div>
    </div>
    <h3 className="mt-4 text-lg font-extrabold tracking-tight text-white">{m.name}</h3>
    <p className="mt-0.5 text-sm text-white/55">{m.desc}</p>
  </div>
);

export default function Home27() {
  const goTo = useGoTo();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  useEffect(() => {
    document.title = "FFH|ERP — Run your business with FFH|ERP";
    // The reference template lets its nav scroll away; keeping it fixed is better
    // here, so it frosts once the page moves and the hero can pass under it.
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const go = (e, t) => { e.preventDefault(); setOpen(false); goTo(t); };

  const GradientButton = ({ children, onClick, testid, className = "" }) => (
    <button onClick={onClick} data-testid={testid}
      className={`inline-flex items-center gap-2 rounded-[10px] ${GRAD} px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-900/40 transition hover:brightness-110 ${className}`}>
      {children}
    </button>
  );

  const H2 = ({ children, className = "" }) => (
    <h2 className={`text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl ${className}`}>{children}</h2>
  );

  return (
    <div className="ffh-tw min-h-screen bg-[#1b2631] font-[Poppins] text-white antialiased" data-testid="home27-page">
      {/* ---------- nav ---------- */}
      <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "bg-[#1b2631]/90 backdrop-blur-xl shadow-lg shadow-black/20 ring-1 ring-white/10" : "bg-transparent"}`} data-testid="h27-nav">
        <div className="mx-auto flex h-20 max-w-7xl items-center gap-6 px-5 sm:px-8">
          <a href="#top" onClick={(e) => go(e, "#top")} className="text-2xl font-extrabold tracking-tight text-white">FFH|ERP</a>
          <nav className="mx-auto hidden items-center gap-1 lg:flex">
            {NAV.map((l, i) => (
              <a key={l.label} href={l.target} onClick={(e) => go(e, l.target)}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${i === 0 ? "bg-white/10 text-white" : "text-white/60 hover:bg-white/5 hover:text-white"}`}>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="ml-auto hidden items-center gap-5 lg:flex">
            <button onClick={() => toast("Sign-in is coming soon")} className="bg-transparent text-sm font-semibold text-white/80 transition hover:text-white">Log in</button>
            <GradientButton onClick={(e) => go(e, "#signup")} testid="h27-nav-cta" className="!px-5 !py-3">Get FFH|ERP</GradientButton>
          </div>
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" data-testid="h27-burger" className="ml-auto rounded-lg bg-transparent p-2 text-white lg:hidden">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-white/10 bg-[#1b2631]/95 px-5 pb-6 pt-2 backdrop-blur-xl lg:hidden" data-testid="h27-mobile">
            {NAV.map((l) => (
              <a key={l.label} href={l.target} onClick={(e) => go(e, l.target)} className="block rounded-lg px-3 py-3 text-sm font-semibold text-white/75 hover:bg-white/5">{l.label}</a>
            ))}
            <GradientButton onClick={(e) => go(e, "#signup")} className="mt-3 w-full justify-center">Get FFH|ERP</GradientButton>
          </div>
        )}
      </header>

      {/* ---------- hero ---------- */}
      <section id="top" className="px-5 pb-16 pt-32 sm:px-8 sm:pt-36">
        <div className="mx-auto grid max-w-7xl grid-cols-12 items-center gap-12">
          <div className="col-span-12 lg:col-span-6">
            <span className="block text-xs font-bold uppercase tracking-[0.24em] text-white/70">{HOME27.eyebrow}</span>
            <h1 className="mt-5 text-5xl font-extrabold leading-[1.03] tracking-tight text-white sm:text-6xl lg:text-[76px]">
              {HOME27.titleLead} <span className={GRAD_TEXT}>{HOME27.titleAccent}</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/70">{HOME27.lead}</p>
            <div className="mt-9">
              <GradientButton onClick={(e) => go(e, "#signup")} testid="home27-cta-trial">
                Start free trial <ArrowRight className="h-4 w-4" />
              </GradientButton>
            </div>
          </div>

          {/* photo with the offset gradient edge, as in the template */}
          <div className="col-span-12 lg:col-span-6">
            <div className="relative">
              <div className={`absolute -bottom-3 -right-3 h-full w-full rounded-[26px] ${GRAD}`} />
              <img src="https://picsum.photos/id/60/1000/700" alt="Team working on FFH|ERP" width="1000" height="700" loading="lazy"
                className="relative h-[300px] w-full rounded-[26px] object-cover ring-1 ring-white/15 sm:h-[400px]" />
            </div>
          </div>
        </div>

        <div className="mt-20 flex justify-center">
          <button onClick={(e) => go(e, "#modules")} aria-label="Scroll to modules" data-testid="h27-scroll"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#1b2631] shadow-xl transition hover:scale-105">
            <ArrowDown className="h-5 w-5" />
          </button>
        </div>
      </section>

      {/* ---------- module preview grid ---------- */}
      <section id="modules" className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <H2>{HOME27.modulesTitle}</H2>
            <p className="mt-4 text-lg text-white/65">{HOME27.modulesSub}</p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {HOME27_MODULES.map((m, i) => <ModuleCard key={m.name} m={m} i={i} />)}
          </div>
        </div>
      </section>

      {/* ---------- split: views + masonry collage ---------- */}
      <section id="features" className="border-y border-white/5 bg-[#20303d] px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-12 items-center gap-14">
          <div className="col-span-12 lg:col-span-5">
            <H2>{HOME27.buildTitle}</H2>
            <p className="mt-6 text-lg leading-relaxed text-white/70">{HOME27.buildText}</p>
            <p className="mt-4 text-sm leading-relaxed text-white/50">{HOME27.buildNote}</p>
            <div className="mt-8">
              <GradientButton onClick={(e) => go(e, "#modules")} testid="home27-cta-views">
                View all modules <ArrowRight className="h-4 w-4" />
              </GradientButton>
            </div>
          </div>

          {/* staggered masonry of mini sections */}
          <div className="col-span-12 lg:col-span-7">
            <div className="grid grid-cols-3 gap-3">
              {[
                ["table", "mt-10"], ["gauge", ""], ["doc", "mt-8"],
                ["list", "mt-2"], ["chart", "mt-14"], ["tickets", "mt-4"],
                ["kanban", "mt-8"], ["calendar", "mt-2"], ["table", "mt-12"],
              ].map(([kind, off], i) => (
                <div key={i} className={`${off} overflow-hidden rounded-xl bg-[#1b2631] ring-1 ring-white/10`} data-testid={`home27-collage-${i}`}>
                  <div className="flex items-center gap-1.5 border-b border-white/5 px-2.5 py-1.5">
                    <span className="h-1 w-1 rounded-full bg-white/25" /><span className="h-1 w-1 rounded-full bg-white/25" />
                    <span className="ml-1 text-[6px] uppercase tracking-[0.2em] text-white/30">section</span>
                  </div>
                  <div className="h-[96px]"><MiniUI kind={kind} /></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- themes ---------- */}
      <section id="why" className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <H2>{HOME27.themesTitle}</H2>
            <p className="mt-4 text-lg text-white/65">{HOME27.themesSub}</p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { label: "Dark mode", shell: "bg-[#1b2631] ring-white/15", head: "bg-[#22303e]", text: "text-white", bar: "bg-white/20", accent: "from-sky-500 to-orange-400" },
              { label: "Blue mode", shell: "bg-[#132a4a] ring-sky-400/30", head: "bg-[#1b3a63]", text: "text-white", bar: "bg-white/25", accent: "from-sky-400 to-sky-600" },
              { label: "Light mode", shell: "bg-slate-50 ring-slate-200", head: "bg-white", text: "text-slate-900", bar: "bg-slate-200", accent: "from-blue-600 to-orange-400" },
            ].map((t) => (
              <div key={t.label} data-testid={`home27-theme-${t.label.split(" ")[0].toLowerCase()}`}>
                <div className={`overflow-hidden rounded-2xl ring-1 ${t.shell}`}>
                  <div className={`flex items-center gap-2 border-b border-black/5 px-4 py-3 ${t.head}`}>
                    <img src={`${process.env.PUBLIC_URL}/ffh-logo.png`} alt="" width="20" height="20" className="h-5 w-5 rounded-full" />
                    <span className={`text-[11px] font-extrabold tracking-tight ${t.text}`}>FFH|ERP</span>
                    <span className={`ml-auto rounded bg-gradient-to-r ${t.accent} px-2 py-0.5 text-[7px] font-bold text-white`}>Action</span>
                  </div>
                  <div className="space-y-2.5 p-4">
                    <span className={`block text-[10px] font-bold uppercase tracking-[0.18em] ${t.text} opacity-60`}>Dashboard</span>
                    <div className="grid grid-cols-3 gap-2">
                      {["₹1.84Cr", "312", "27"].map((v) => (
                        <div key={v} className={`rounded-lg border border-black/5 px-2 py-1.5 ${t.head}`}>
                          <span className={`block text-[10px] font-extrabold ${t.text}`}>{v}</span>
                          <span className={`mt-0.5 block h-1 w-2/3 rounded ${t.bar}`} />
                        </div>
                      ))}
                    </div>
                    <div className="space-y-1.5">
                      <span className={`block h-1.5 w-full rounded ${t.bar}`} />
                      <span className={`block h-1.5 w-4/5 rounded ${t.bar}`} />
                      <span className={`block h-1.5 w-2/3 rounded ${t.bar}`} />
                    </div>
                  </div>
                </div>
                <p className={`mt-3 text-center text-sm font-semibold ${t.text === "text-white" ? "text-white/70" : "text-white/70"}`}>{t.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- testimonial ---------- */}
      <section className="px-5 pb-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-12 items-center gap-10">
          <div className="col-span-12 lg:col-span-4">
            <img src={`https://i.pravatar.cc/600?img=${HOME27.quote.img}`} alt={HOME27.quote.person} width="600" height="600" loading="lazy"
              className="h-[280px] w-full rounded-2xl object-cover ring-1 ring-white/15 lg:h-[340px]" />
          </div>
          <div className="col-span-12 lg:col-span-8">
            <Quote className="h-6 w-6 text-white/30" />
            <blockquote className="mt-5 text-2xl font-bold leading-snug tracking-tight text-white sm:text-3xl">
              “{HOME27.quote.text}”
            </blockquote>
            <div className="mt-6">
              <strong className="block text-base font-extrabold text-white">{HOME27.quote.person}</strong>
              <span className="text-sm text-white/55">{HOME27.quote.role}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- ready from day one ---------- */}
      <section className="border-y border-white/5 bg-[#20303d] px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <H2>{HOME27.dayOneTitle}</H2>
            <p className="mt-4 text-lg text-white/65">{HOME27.dayOneText}</p>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {HOME27.dayOne.map((s) => (
              <button key={s.label} onClick={(e) => go(e, s.target)} data-testid={`home27-stat-${s.label.toLowerCase()}`}
                className={`${PANEL} group p-6 text-left transition hover:ring-white/25`}>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-400/25">
                  <Check className="h-4 w-4" />
                </span>
                <strong className="mt-5 block text-4xl font-extrabold tracking-tight text-white">{s.value}</strong>
                <span className="mt-1 block text-sm font-semibold text-white/55">{s.label}</span>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-white/40 transition group-hover:text-white/80">
                  See more <ArrowRight className="h-3 w-3" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- pricing ---------- */}
      <section id="pricing" className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <H2>Simple pricing</H2>
            <p className="mt-4 text-lg text-white/65">Every plan includes nine modules, the mobile app and your data, exportable any time.</p>
          </div>
          <div className="mt-14 grid grid-cols-12 gap-6">
            {PLANS.map((p) => (
              <div key={p.name} data-testid={`home27-plan-${p.name.toLowerCase()}`}
                className={`col-span-12 rounded-2xl p-7 sm:col-span-6 lg:col-span-4 ${p.popular ? "bg-gradient-to-b from-white/15 to-white/5 ring-2 ring-sky-400/40" : "bg-[#22303e] ring-1 ring-white/10"}`}>
                {p.popular && <span className={`inline-block rounded-full ${GRAD} px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white`}>Most popular</span>}
                <h3 className="mt-3 text-xl font-extrabold tracking-tight text-white">{p.name}</h3>
                <p className="mt-1 text-sm text-white/55">{p.sub}</p>
                <div className="mt-5 flex items-baseline gap-1.5">
                  <strong className="text-4xl font-extrabold tracking-tight text-white">{formatINR(p.monthly)}</strong>
                  <span className="text-white/55">/month</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-white/70">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />{f}
                    </li>
                  ))}
                </ul>
                <button onClick={(e) => go(e, "#signup")}
                  className={`mt-7 w-full rounded-[10px] px-5 py-3 text-sm font-bold transition ${p.popular ? `${GRAD} text-white hover:brightness-110` : "bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/20"}`}>
                  {p.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- signup ---------- */}
      <section className="border-y border-white/5 bg-[#20303d] px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-12 items-center gap-12">
          <div className="col-span-12 lg:col-span-5">
            <H2>Start building your business today</H2>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Seven days, every module, your own numbers — and our team migrates your data with you.
            </p>
            <div className="mt-8"><HomeLayoutNav /></div>
          </div>
          <div className="col-span-12 flex justify-center lg:col-span-7 lg:justify-end">
            <TwSignupForm variant="glass" />
          </div>
        </div>
      </section>

      {/* ---------- faq + closing ---------- */}
      <section id="contact" className="px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-14">
          <div className="col-span-12 lg:col-span-5">
            <H2>Frequently asked questions</H2>
            <p className="mt-6 leading-relaxed text-white/65">
              Still deciding? Talk to someone who knows the product — 24/7, in six languages.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="tel:+919284162015" className="rounded-[10px] bg-white/10 px-5 py-3 text-sm font-bold text-white ring-1 ring-white/20 transition hover:bg-white/20">+91 92841 62015</a>
              <a href="mailto:ffhsales@kriskrossinc.com" className="rounded-[10px] bg-white/10 px-5 py-3 text-sm font-bold text-white ring-1 ring-white/20 transition hover:bg-white/20">Email support</a>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <div className="divide-y divide-white/10 overflow-hidden rounded-2xl bg-[#22303e] ring-1 ring-white/10">
              {FAQS.map((f, i) => (
                <details key={f.q} open={i === 0} className="group px-6 py-5">
                  <summary className="flex cursor-pointer items-center justify-between gap-6 text-base font-bold text-white [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-lg leading-none text-white/70 transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-white/60">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>

        {/* closing band */}
        <div className="mx-auto mt-20 max-w-7xl">
          <div className={`${GRAD} rounded-3xl px-8 py-12 sm:px-14`}>
            <div className="flex flex-wrap items-center justify-between gap-8">
              <h2 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">{HOME27.cta}</h2>
              <button onClick={(e) => go(e, "#signup")} data-testid="home27-cta-bottom"
                className="rounded-[10px] bg-white px-6 py-3.5 text-sm font-extrabold text-[#1b2631] shadow-xl transition hover:bg-white/90">
                Start free 7 days
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- footer ---------- */}
      <footer className="border-t border-white/10 px-5 pb-12 pt-16 sm:px-8" data-testid="h27-footer">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 lg:col-span-4">
              <span className="text-2xl font-extrabold tracking-tight text-white">FFH|ERP</span>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
                Nine connected modules for sales, marketing, finance, AMC, support and projects — on one database.
              </p>
            </div>
            {[
              { title: "Product", links: ["Modules", "Views", "Themes", "Pricing"] },
              { title: "Company", links: ["About us", "Customers", "Careers", "Newsletter"] },
              { title: "Support", links: ["Help centre", "Tutorials", "Status", "Contact"] },
            ].map((c) => (
              <div key={c.title} className="col-span-6 sm:col-span-4 lg:col-span-2">
                <h6 className="text-xs font-extrabold uppercase tracking-[0.18em] text-white">{c.title}</h6>
                <ul className="mt-5 space-y-3">
                  {c.links.map((l) => (
                    <li key={l}>
                      <button onClick={(e) => go(e, l === "About us" ? "/about" : l === "Pricing" ? "#pricing" : "#modules")}
                        className="bg-transparent text-sm text-white/50 transition hover:text-white">{l}</button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-7">
            <span className="text-xs text-white/40">© 2025 FFH|ERP by KrisKross Inc. All rights reserved.</span>
            <div className="flex items-center gap-2">
              {[Facebook, Instagram, Youtube, Twitter, Mail].map((I, i) => (
                <a key={i} href="#top" onClick={(e) => e.preventDefault()}
                  className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-white/5 text-white/50 ring-1 ring-white/10 transition hover:bg-white/15 hover:text-white">
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
