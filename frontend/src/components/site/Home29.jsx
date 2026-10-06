import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Check, Facebook, Instagram, Linkedin, Mail, Menu, Phone, Star, Twitter, X } from "lucide-react";
import { toast } from "sonner";
import { HOME29, PLANS, formatINR } from "../../mock";
import Icon from "./TwIcon";
import TwSignupForm from "./TwSignupForm";
import HomeLayoutNav from "./HomeLayoutNav";
import { useGoTo } from "./crmStore";

// Layout 29 — after the "One Page Business" starter: white corporate one-pager,
// navy #013878 headings in condensed uppercase Oswald over Lato body, teal
// #04d3a2 pill buttons, thin-bordered cards, blob-masked hero photo with a teal
// ring and a testimonial carousel. Tailwind only, no Bootstrap.
const NAV = [
  { label: "Home", target: "#top" },
  { label: "What we do", target: "#features" },
  { label: "Services", target: "#modules" },
  { label: "Pricing", target: "#pricing" },
  { label: "Contact", target: "#contact" },
];

const NAVY = "#013878";
const TEAL = "#04d3a2";

const SectionTitle = ({ children, className = "" }) => (
  <h2 className={`text-4xl font-semibold leading-[1.06] tracking-[0.01em] text-[#013878] sm:text-5xl lg:text-[56px] ${className}`}>{children}</h2>
);

export default function Home29() {
  const goTo = useGoTo();
  const [open, setOpen] = useState(false);
  const [slide, setSlide] = useState(0);

  useEffect(() => { document.title = "FFH|ERP — The complete business system"; }, []);
  const go = (e, t) => { e.preventDefault(); setOpen(false); goTo(t); };

  const client = HOME29.clients.items[slide];

  return (
    <div className="ffh-tw ffh-h29 min-h-screen bg-white font-['Lato'] text-[#535353] antialiased" data-testid="home29-page">
      {/* ---------- nav ---------- */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur" data-testid="h29-nav">
        <div className="mx-auto flex h-20 max-w-7xl items-center gap-6 px-5 sm:px-8">
          <a href="#top" onClick={(e) => go(e, "#top")} className="flex items-center gap-2.5">
            <img src={`${process.env.PUBLIC_URL}/ffh-logo.png`} alt="FFH ERP" width="34" height="34" className="h-[34px] w-[34px] rounded-full" />
            <span className="font-['Oswald'] text-2xl font-semibold uppercase tracking-[0.02em] text-[#013878]">
              FFH<span className="text-[#04d3a2]">|ERP</span>
            </span>
          </a>
          <nav className="ml-auto hidden items-center gap-7 lg:flex">
            {NAV.map((l, i) => (
              <a key={l.label} href={l.target} onClick={(e) => go(e, l.target)}
                className={`font-['Oswald'] text-[13px] font-medium uppercase tracking-[0.14em] transition ${i === 0 ? "text-[#04d3a2]" : "text-[#013878] hover:text-[#04d3a2]"}`}>
                {l.label}
              </a>
            ))}
          </nav>
          <button onClick={(e) => go(e, "#signup")} data-testid="h29-cta"
            className="ml-auto hidden rounded-full bg-[#04d3a2] px-6 py-3 font-['Oswald'] text-[12px] font-medium uppercase tracking-[0.14em] text-white transition hover:brightness-110 lg:inline-flex">
            Get started
          </button>
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" data-testid="h29-burger"
            className="ml-auto bg-transparent p-2 text-[#013878] lg:hidden">{open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</button>
        </div>
        {open && (
          <div className="border-t border-slate-200 bg-white px-5 pb-6 pt-3 lg:hidden" data-testid="h29-mobile">
            {NAV.map((l) => (
              <a key={l.label} href={l.target} onClick={(e) => go(e, l.target)}
                className="block py-3 font-['Oswald'] text-[13px] font-medium uppercase tracking-[0.14em] text-[#013878]">{l.label}</a>
            ))}
            <button onClick={(e) => go(e, "#signup")} className="mt-3 w-full rounded-full bg-[#04d3a2] px-6 py-3 font-['Oswald'] text-[12px] uppercase tracking-[0.14em] text-white">Get started</button>
          </div>
        )}
      </header>

      {/* ---------- hero ---------- */}
      <section id="top" className="relative overflow-hidden px-5 pb-20 pt-14 sm:px-8 sm:pt-16">
        {/* decorative outlined circle, as in the template */}
        <div className="pointer-events-none absolute -left-32 top-24 hidden h-[420px] w-[420px] rounded-full border-[26px] border-slate-100 lg:block" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-12 items-center gap-12">
          <div className="col-span-12 lg:col-span-6">
            <h1 className="text-5xl font-semibold leading-[1.04] tracking-[0.01em] text-[#013878] sm:text-6xl lg:text-[80px]">
              {HOME29.heroTitle}
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-[#535353]">{HOME29.heroLead}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <button onClick={(e) => go(e, "#signup")} data-testid="home29-cta-trial"
                className="rounded-full bg-[#04d3a2] px-7 py-4 font-['Oswald'] text-[13px] font-medium uppercase tracking-[0.14em] text-white transition hover:brightness-110">
                Get started
              </button>
              <button onClick={(e) => go(e, "#modules")} data-testid="home29-cta-modules"
                className="rounded-full bg-[#013878] px-7 py-4 font-['Oswald'] text-[13px] font-medium uppercase tracking-[0.14em] text-white transition hover:brightness-125">
                Explore more
              </button>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6">
            <div className="relative mx-auto max-w-[560px]">
              <div className="absolute inset-0 translate-x-3 translate-y-3 ffh-h29-blob bg-[#04d3a2]/25" />
              <div className="relative ffh-h29-blob overflow-hidden ring-4" style={{ "--tw-ring-color": TEAL }}>
                <img src="https://picsum.photos/id/7/900/760" alt="Team running the business on FFH|ERP" width="900" height="760" loading="eager"
                  className="h-[320px] w-full object-cover sm:h-[420px]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- what we do ---------- */}
      <section id="features" className="border-y border-slate-100 bg-slate-50 px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-12">
          <div className="col-span-12 lg:col-span-4">
            <SectionTitle>{HOME29.whatWeDo.title}</SectionTitle>
            <p className="mt-6 text-[15px] leading-relaxed text-[#535353]">{HOME29.whatWeDo.text}</p>
            <button onClick={(e) => go(e, "#modules")}
              className="mt-8 inline-flex rounded-full bg-[#04d3a2] px-7 py-4 font-['Oswald'] text-[13px] font-medium uppercase tracking-[0.14em] text-white transition hover:brightness-110">
              Get started
            </button>
          </div>
          <div className="col-span-12 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:col-span-8">
            {HOME29.whatWeDo.cards.map((c, i) => (
              <div key={c.title} data-testid={`home29-card-${i}`}
                className="rounded-lg border border-slate-200 bg-white p-7 transition hover:shadow-lg hover:shadow-slate-900/5">
                <Icon name={c.icon} size={40} strokeWidth={1.25} className="text-[#013878]" />
                <h3 className="mt-6 text-2xl font-semibold leading-tight text-[#013878]">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#535353]">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- about + stats ---------- */}
      <section id="why" className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-12 items-center gap-12">
          <div className="col-span-12 lg:col-span-6">
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-28 w-28 rounded-full bg-[#04d3a2]/15" />
              <img src="https://picsum.photos/id/5/900/640" alt="" width="900" height="640" loading="lazy"
                className="relative h-[320px] w-full rounded-lg object-cover" />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <SectionTitle>{HOME29.about.title}</SectionTitle>
            <p className="mt-6 text-[15px] leading-relaxed text-[#535353]">{HOME29.about.text}</p>
            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8">
              {HOME29.about.stats.map((s) => (
                <div key={s.label} data-testid={`home29-stat-${s.label.split(" ")[0].toLowerCase()}`}>
                  <strong className="block font-['Oswald'] text-4xl font-semibold text-[#013878]">{s.value}</strong>
                  <span className="mt-1 block text-sm text-[#535353]">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- services ---------- */}
      <section id="modules" className="border-y border-slate-100 bg-slate-50 px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <SectionTitle>{HOME29.services.title}</SectionTitle>
            <p className="mt-5 text-[15px] leading-relaxed text-[#535353]">{HOME29.services.text}</p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {HOME29.services.items.map((s, i) => (
              <div key={s.title} data-testid={`home29-service-${i}`}
                className="flex items-start gap-5 rounded-lg border border-slate-200 bg-white p-7 transition hover:border-[#04d3a2]">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-slate-200 text-[#013878]">
                  <Icon name={s.icon} size={24} strokeWidth={1.5} />
                </span>
                <div>
                  <h3 className="text-xl font-semibold leading-tight text-[#013878]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#535353]">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- portfolio ---------- */}
      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionTitle>{HOME29.portfolio.title}</SectionTitle>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[#535353]">{HOME29.portfolio.text}</p>
            </div>
            <button onClick={(e) => go(e, "#contact")}
              className="rounded-full bg-[#013878] px-7 py-4 font-['Oswald'] text-[13px] font-medium uppercase tracking-[0.14em] text-white transition hover:brightness-125">
              Start a project
            </button>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {HOME29.portfolio.items.map((p, i) => (
              <button key={p.title} onClick={(e) => go(e, "#contact")} data-testid={`home29-portfolio-${i}`}
                className="group relative block overflow-hidden rounded-lg">
                <img src={`https://picsum.photos/id/${p.id}/600/600`} alt={p.title} width="600" height="600" loading="lazy"
                  className="h-[240px] w-full object-cover transition duration-500 group-hover:scale-105" />
                <span className="absolute inset-0 flex flex-col justify-end bg-[#013878]/0 p-5 text-left transition group-hover:bg-[#013878]/80">
                  <span className="font-['Oswald'] text-[11px] uppercase tracking-[0.16em] text-[#04d3a2] opacity-[0] transition group-hover:opacity-100">{p.tag}</span>
                  <span className="font-['Oswald'] text-xl font-semibold uppercase text-white opacity-[0] transition group-hover:opacity-100">{p.title}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- happy clients (carousel) ---------- */}
      <section className="border-y border-slate-100 bg-slate-50 px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle>{HOME29.clients.title}</SectionTitle>
          <div className="mt-12 grid grid-cols-12 gap-10">
            <div className="col-span-12 lg:col-span-8">
              <div className="flex text-amber-400">{[0, 1, 2, 3, 4].map((i) => <Star key={i} className="h-5 w-5 fill-current" />)}</div>
              <blockquote className="mt-5 text-lg leading-relaxed text-[#535353]">“{client.text}”</blockquote>
              <div className="mt-7 flex items-center gap-4">
                <img src={`https://i.pravatar.cc/120?img=${client.img}`} alt={client.person} width="56" height="56" loading="lazy"
                  className="h-14 w-14 rounded-full object-cover" />
                <span>
                  <strong className="block font-['Oswald'] text-base font-semibold uppercase tracking-[0.06em] text-[#013878]">{client.person}</strong>
                  <span className="text-sm text-[#535353]">{client.role}</span>
                </span>
              </div>
            </div>
            <div className="col-span-12 flex items-end justify-start gap-4 lg:col-span-4 lg:justify-end">
              <button onClick={() => setSlide((slide - 1 + HOME29.clients.items.length) % HOME29.clients.items.length)} data-testid="h29-prev"
                aria-label="Previous" className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-transparent text-[#013878] transition hover:bg-[#013878] hover:text-white">
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button onClick={() => setSlide((slide + 1) % HOME29.clients.items.length)} data-testid="h29-next"
                aria-label="Next" className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-transparent text-[#013878] transition hover:bg-[#013878] hover:text-white">
                <ArrowRight className="h-4 w-4" />
              </button>
              <div className="ml-2 flex items-center gap-2" data-testid="h29-dots">
                {HOME29.clients.items.map((_, i) => (
                  <button key={i} onClick={() => setSlide(i)} aria-label={`Slide ${i + 1}`}
                    className={`h-2.5 w-2.5 rounded-full transition ${i === slide ? "bg-[#013878]" : "bg-slate-300"}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- recent posts ---------- */}
      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle>{HOME29.posts.title}</SectionTitle>
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {HOME29.posts.items.map((p, i) => (
              <article key={p.title} data-testid={`home29-post-${i}`} className="group">
                <img src={`https://picsum.photos/id/${p.id}/800/520`} alt="" width="800" height="520" loading="lazy"
                  className="h-[210px] w-full rounded-lg object-cover" />
                <h3 className="mt-5 text-2xl font-semibold leading-tight text-[#013878]">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#535353]">{p.text}</p>
                <button onClick={(e) => go(e, "#contact")}
                  className="mt-4 bg-transparent font-['Oswald'] text-[12px] font-medium uppercase tracking-[0.16em] text-[#04d3a2] hover:underline">
                  Read more
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- pricing ---------- */}
      <section id="pricing" className="border-y border-slate-100 bg-slate-50 px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <SectionTitle>Our plans</SectionTitle>
            <p className="mt-5 text-[15px] leading-relaxed text-[#535353]">
              Every plan includes nine modules, the mobile app and your data, exportable any time.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {PLANS.map((p) => (
              <div key={p.name} data-testid={`home29-plan-${p.name.toLowerCase()}`}
                className={`flex flex-col rounded-lg border bg-white p-8 ${p.popular ? "border-[#04d3a2] shadow-xl shadow-emerald-900/5" : "border-slate-200"}`}>
                <h3 className="text-2xl font-semibold text-[#013878]">{p.name}</h3>
                <p className="mt-1 text-sm text-[#535353]">{p.sub}</p>
                <div className="mt-5 flex items-baseline gap-2">
                  <strong className="font-['Oswald'] text-4xl font-semibold text-[#013878]">{formatINR(p.monthly)}</strong>
                  <span className="text-sm text-[#535353]">/month</span>
                </div>
                <ul className="mt-7 flex-1 space-y-3.5 border-t border-slate-100 pt-7">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-[#535353]">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#04d3a2]" strokeWidth={3} />{f}
                    </li>
                  ))}
                </ul>
                <button onClick={(e) => go(e, "#signup")}
                  className={`mt-8 rounded-full px-7 py-4 font-['Oswald'] text-[13px] font-medium uppercase tracking-[0.14em] transition ${p.popular ? "bg-[#04d3a2] text-white hover:brightness-110" : "bg-[#013878] text-white hover:brightness-125"}`}>
                  {p.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- contact + form ---------- */}
      <section id="contact" className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-12 items-center gap-12">
          <div className="col-span-12 lg:col-span-5">
            <SectionTitle>{HOME29.contact.title}</SectionTitle>
            <p className="mt-6 text-[15px] leading-relaxed text-[#535353]">{HOME29.contact.text}</p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-center gap-3 text-sm text-[#535353]">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#013878]/5 text-[#013878]"><Phone className="h-4 w-4" /></span>
                <a href="tel:+919284162015" className="hover:text-[#013878]">+91 92841 62015</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#535353]">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#013878]/5 text-[#013878]"><Mail className="h-4 w-4" /></span>
                <a href="mailto:ffhsales@kriskrossinc.com" className="hover:text-[#013878]">ffhsales@kriskrossinc.com</a>
              </li>
            </ul>
            <div className="mt-10"><HomeLayoutNav /></div>
          </div>
          <div className="col-span-12 flex justify-center lg:col-span-7 lg:justify-end">
            <TwSignupForm variant="light" title="Get started free" />
          </div>
        </div>
      </section>

      {/* ---------- footer ---------- */}
      <footer className="bg-[#013878] px-5 pb-10 pt-16 text-white sm:px-8" data-testid="h29-footer">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 lg:col-span-4">
              <div className="flex items-center gap-2.5">
                <img src={`${process.env.PUBLIC_URL}/ffh-logo.png`} alt="FFH ERP" width="34" height="34" className="h-[34px] w-[34px] rounded-full" />
                <span className="font-['Oswald'] text-2xl font-semibold uppercase tracking-[0.02em]">FFH<span className="text-[#04d3a2]">|ERP</span></span>
              </div>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
                Nine connected modules for sales, marketing, finance, AMC, support and projects — on one database, implemented by operators.
              </p>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <h6 className="font-['Oswald'] text-[13px] font-medium uppercase tracking-[0.16em] text-white">Company</h6>
              <ul className="mt-5 space-y-3 text-sm text-white/70">
                {["About us", "Services", "Portfolios", "Pricing"].map((l) => (
                  <li key={l}>
                    <button onClick={(e) => go(e, l === "About us" ? "/about" : l === "Pricing" ? "#pricing" : "#modules")}
                      className="bg-transparent hover:text-[#04d3a2]">{l}</button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <h6 className="font-['Oswald'] text-[13px] font-medium uppercase tracking-[0.16em] text-white">Support</h6>
              <ul className="mt-5 space-y-3 text-sm text-white/70">
                <li><button onClick={(e) => go(e, "#contact")} className="bg-transparent hover:text-[#04d3a2]">Help centre</button></li>
                <li><button onClick={(e) => go(e, "#contact")} className="bg-transparent hover:text-[#04d3a2]">Contact</button></li>
                <li><a href="tel:+919284162015" className="hover:text-[#04d3a2]">+91 92841 62015</a></li>
              </ul>
            </div>
            <div className="col-span-12 sm:col-span-4 lg:col-span-4">
              <h6 className="font-['Oswald'] text-[13px] font-medium uppercase tracking-[0.16em] text-white">Subscribe</h6>
              <form onSubmit={(e) => { e.preventDefault(); toast.success("Thanks — we'll be in touch."); }} className="mt-4 flex max-w-sm gap-3">
                <input placeholder="Your email" className="w-full rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm text-white placeholder-white/50 outline-none focus:border-[#04d3a2]" />
                <button type="submit" className="rounded-full bg-[#04d3a2] px-5 py-3 font-['Oswald'] text-[12px] uppercase tracking-[0.14em] text-white">Send</button>
              </form>
              <div className="mt-6 flex gap-2">
                {[Facebook, Twitter, Instagram, Linkedin].map((I, i) => (
                  <a key={i} href="#top" onClick={(e) => e.preventDefault()}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition hover:bg-[#04d3a2] hover:text-white">
                    <I className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-6 text-xs text-white/60">
            <span>© 2025 FFH|ERP by KrisKross Inc. All rights reserved.</span>
            <span>Built in India</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
