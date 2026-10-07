import React, { useEffect, useState } from "react";
import {
  ArrowRight, ArrowUpRight, Facebook, Instagram, Linkedin, Mail, MapPin, Minus, Phone, Play, Plus, Star, Twitter, Youtube,
} from "lucide-react";
import { ABOUT_14, FAQS, HOME37, TEAM } from "../../mock";
import AboutLayoutNav from "./AboutLayoutNav";
import { Icon } from "./Trusted";
import { LiveCRMWindow } from "./LiveCRM";
import { useGoTo } from "./crmStore";

// About layout 14 — modelled on oracle-agency.webflow.io/about-us: Inter body
// copy under huge condensed uppercase display headings, black on white with
// #f8f8f8 bands, bordered value cards, alternating mission/vision rows, a team
// grid, client reviews, a hairline FAQ and a giant closing call to action.
const INK = "#0c0407";
const MUTED = "#4c4c4c";
const GREY = "#f8f8f8";
const HAIR = "#e5e5e5";
const BRAND = "#ef7b23";
const SOCIAL = { Instagram, Facebook, LinkedIn: Linkedin, Twitter, YouTube: Youtube };

// the reference's condensed ultra-bold uppercase display type
const DISPLAY = { fontFamily: '"Oswald", "Inter Tight", Inter, sans-serif', fontWeight: 700, textTransform: "uppercase", letterSpacing: "-0.015em" };

function Display({ as: Tag = "h2", children, className = "", size = "clamp(38px, 6vw, 82px)", ...rest }) {
  // forward the rest (data-testid and friends) so the element stays testable
  return <Tag className={className} style={{ ...DISPLAY, fontSize: size, lineHeight: 0.98 }} {...rest}>{children}</Tag>;
}

export default function About14() {
  const goTo = useGoTo();
  const [playing, setPlaying] = useState(false);
  const [faqOpen, setFaqOpen] = useState(0);
  const A = ABOUT_14;

  useEffect(() => { document.title = "About FFH|ERP — nine modules, one database | FFH|ERP"; }, []);

  const external = (path) => { window.location.assign(`${process.env.PUBLIC_URL}${path}`); };
  const jump = (e, t) => { e.preventDefault(); goTo(t); };

  return (
    <div className="ffh-tw ffh-a14 min-h-screen bg-white" style={{ color: INK, fontFamily: 'Inter, system-ui, sans-serif' }} data-testid="about14-page">
      {/* ---------- nav ---------- */}
      <header className="sticky top-0 z-50 border-b bg-white" style={{ borderColor: HAIR }} data-testid="a14-nav">
        <div className="mx-auto flex max-w-[1320px] items-center gap-6 px-5 py-4 sm:px-8">
          <a href="#top" onClick={(e) => jump(e, "#top")} className="flex items-center gap-2.5">
            <img src={`${process.env.PUBLIC_URL}/ffh-logo.png`} alt="FFH ERP" width="30" height="30" className="h-[30px] w-[30px] rounded-full" />
            <span className="text-[19px] font-semibold tracking-tight">FFH|ERP</span>
          </a>
          <nav className="mx-auto hidden items-center gap-7 lg:flex">
            {A.nav.map((l) => (
              <button key={l.label} onClick={() => external(l.path)}
                className="text-[14px] font-medium transition-opacity duration-200 hover:opacity-60"
                style={{ color: l.label === "About" ? INK : MUTED, textDecoration: l.label === "About" ? "underline" : "none", textUnderlineOffset: 6 }}>
                {l.label}
              </button>
            ))}
          </nav>
          <span className="ml-auto hidden items-center gap-2 text-[13.5px] lg:flex" style={{ color: MUTED }}>
            <Phone className="h-4 w-4" />+91 44 4858 5100
          </span>
          <button onClick={() => external(A.navCta.path)} data-testid="a14-cta"
            className="ml-auto inline-flex items-center gap-2 bg-black px-5 py-3 text-[13.5px] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 lg:ml-0">
            {A.navCta.label} <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </header>

      {/* ---------- hero ---------- */}
      <section id="top" className="px-5 pt-16 sm:px-8 sm:pt-20">
        <div className="mx-auto max-w-[1320px]">
          <Display as="h1" size="clamp(52px, 12vw, 150px)" className="text-center" data-testid="a14-title">{A.hero.title}</Display>

          {/* the reference shows a video still with a play button — ours plays the live CRM */}
          <div className="relative mt-10 overflow-hidden" style={{ border: `1px solid ${HAIR}` }} data-testid="a14-media">
            {playing ? (
              <div className="bg-white p-4 sm:p-6">
                <LiveCRMWindow />
              </div>
            ) : (
              <>
                <img src="https://picsum.photos/id/1067/1600/820" alt="FFH|ERP in use" width="1600" height="820" loading="lazy"
                  className="h-[260px] w-full object-cover sm:h-[420px] lg:h-[520px]" />
                <button onClick={() => setPlaying(true)} data-testid="a14-play"
                  className="group absolute inset-0 flex items-center justify-center bg-black/25 transition-colors duration-300 hover:bg-black/35"
                  aria-label="Play the live FFH|ERP demo">
                  <span className="flex h-[76px] w-[76px] items-center justify-center rounded-full bg-white/90 text-black transition-transform duration-300 group-hover:scale-110">
                    <Play className="ml-1 h-7 w-7 fill-current" />
                  </span>
                  <span className="absolute bottom-6 left-6 text-[12.5px] font-semibold uppercase tracking-[0.16em] text-white/90 sm:bottom-8 sm:left-8">
                    Watch the live CRM, not a slideshow
                  </span>
                </button>
              </>
            )}
          </div>

          {/* the big centred intro paragraph */}
          <p className="mx-auto mt-16 max-w-4xl text-center text-[20px] font-medium leading-[1.6] sm:text-[24px]" data-testid="a14-lead">
            {A.hero.lead}
          </p>
        </div>
      </section>

      {/* ---------- core values ---------- */}
      <section className="px-5 pb-20 pt-24 sm:px-8 sm:pt-28" data-testid="a14-values">
        <div className="mx-auto max-w-[1320px]">
          <Display className="text-center">{A.values.title}</Display>
          <div className="mt-14 grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3" style={{ borderTop: `1px solid ${HAIR}` }}>
            {A.values.items.map((v) => (
              <div key={v.title} className="group flex flex-col p-8 transition-colors duration-300 hover:bg-[#fafafa]"
                style={{ borderBottom: `1px solid ${HAIR}`, borderRight: `1px solid ${HAIR}`, borderLeft: `1px solid ${HAIR}` }}>
                <span className="flex h-11 w-11 items-center justify-center" style={{ border: `1px solid ${HAIR}`, color: INK }}>
                  <Icon name={v.icon} size={19} />
                </span>
                <Display size="26px" className="mt-10">{v.title}</Display>
                <p className="mt-4 text-[14.5px] leading-[1.75]" style={{ color: MUTED }}>{v.text}</p>
              </div>
            ))}
            {/* the reference mixes one image into the value row — ours spans the full width below them */}
            <div className="sm:col-span-2 lg:col-span-3" style={{ borderRight: `1px solid ${HAIR}`, borderLeft: `1px solid ${HAIR}`, borderBottom: `1px solid ${HAIR}` }}>
              <img src={`https://picsum.photos/id/${A.values.image}/1600/500`} alt="" width="1600" height="500" loading="lazy"
                className="h-[190px] w-full object-cover sm:h-[240px] lg:h-[280px]" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- mission + vision ---------- */}
      {[A.mission, A.vision].map((block, bi) => (
        <section key={block.title} className="px-5 py-14 sm:px-8 sm:py-20" style={bi === 1 ? { background: GREY } : undefined}
          data-testid={`a14-${bi === 0 ? "mission" : "vision"}`}>
          <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-y-10 lg:grid-cols-12 lg:gap-x-16">
            <div className={`lg:col-span-6 ${bi === 1 ? "lg:order-2" : ""}`}>
              <img src={`https://picsum.photos/id/${block.image}/900/700`} alt="" width="900" height="700" loading="lazy"
                className="h-[260px] w-full object-cover sm:h-[380px] lg:h-[420px]" style={{ border: `1px solid ${HAIR}` }} />
            </div>
            <div className={`lg:col-span-6 ${bi === 1 ? "lg:order-1" : ""}`}>
              <Display size="clamp(30px, 4vw, 52px)">{block.title}</Display>
              {block.text.map((t, i) => (
                <p key={i} className={`text-[15.5px] leading-[1.8] ${i === 0 ? "mt-6" : "mt-4"}`} style={{ color: MUTED }}>{t}</p>
              ))}
              <button onClick={() => external("/home38#contact")}
                className="mt-8 inline-flex items-center gap-2 bg-black px-6 py-3.5 text-[13.5px] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5">
                Contact us <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>
      ))}

      {/* ---------- team ---------- */}
      <section className="px-5 py-20 sm:px-8 sm:py-28" data-testid="a14-team">
        <div className="mx-auto max-w-[1320px]">
          <Display className="text-center">{A.team.title}</Display>
          <p className="mx-auto mt-6 max-w-2xl text-center text-[15.5px] leading-relaxed" style={{ color: MUTED }}>{A.team.lead}</p>
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((m) => (
              <figure key={m.name} className="group" data-testid={`a14-person-${m.name.split(" ")[0].toLowerCase()}`}>
                <div className="overflow-hidden" style={{ border: `1px solid ${HAIR}` }}>
                  <img src={`https://i.pravatar.cc/600?img=${m.img}`} alt={m.name} width="600" height="600" loading="lazy"
                    className="h-[300px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                </div>
                <figcaption className="mt-4">
                  <Display size="20px">{m.name}</Display>
                  <span className="mt-1.5 block text-[13px]" style={{ color: BRAND, fontWeight: 600 }}>{m.role}</span>
                  <p className="mt-2 text-[13.5px] leading-relaxed" style={{ color: MUTED }}>{m.bio}</p>
                </figcaption>
              </figure>
            ))}
            {A.team.extras.map((x) => (
              <div key={x.title} className="flex flex-col justify-between p-8" style={{ background: GREY, border: `1px solid ${HAIR}` }}>
                <div>
                  <Display size="22px">{x.title}</Display>
                  <p className="mt-4 text-[14.5px] leading-[1.75]" style={{ color: MUTED }}>{x.text}</p>
                </div>
                <button onClick={() => external("/home38#contact")}
                  className="mt-8 inline-flex w-fit items-center gap-2 text-[13.5px] font-semibold underline decoration-2 underline-offset-4 transition-opacity hover:opacity-60">
                  Talk to us <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- client reviews ---------- */}
      <section className="px-5 py-20 sm:px-8 sm:py-28" style={{ background: GREY }} data-testid="a14-reviews">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Display>{A.reviews.title}</Display>
            </div>
            <p className="text-[15px] leading-relaxed lg:col-span-4" style={{ color: MUTED }}>
              A 4.9 average across 2,500+ active users. Six of them, in their own words.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {HOME37.testimonials.slice(0, 6).map((t, i) => (
              <figure key={t.person + i} className="flex h-full flex-col bg-white p-7 transition-transform duration-300 hover:-translate-y-1.5"
                style={{ border: `1px solid ${HAIR}` }} data-testid={`a14-review-${i}`}>
                <span className="flex gap-0.5 text-black">{[0, 1, 2, 3, 4].map((k) => <Star key={k} className="h-3.5 w-3.5 fill-current" />)}</span>
                <blockquote className="mt-5 flex-1 text-[14.5px] leading-[1.75]" style={{ color: "#222" }}>“{t.text || t.quote}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 pt-5" style={{ borderTop: `1px solid ${HAIR}` }}>
                  <img src={`https://i.pravatar.cc/80?img=${t.img}`} alt={t.person} width="40" height="40" loading="lazy" className="h-10 w-10 rounded-full object-cover" />
                  <span>
                    <strong className="block text-[13.5px] font-semibold">{t.person}</strong>
                    <span className="text-[12px]" style={{ color: MUTED }}>{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- faq ---------- */}
      <section className="px-5 py-20 sm:px-8 sm:py-28" data-testid="a14-faq">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-4">
            <Display size="clamp(34px, 4.4vw, 58px)">{A.faq.title}</Display>
            <p className="mt-6 text-[15px] leading-relaxed" style={{ color: MUTED }}>
              Not answered here? Call{" "}
              <a href="tel:+914448585100" className="font-semibold underline decoration-2 underline-offset-4">+91 44 4858 5100</a>{" "}
              or ask in the chat.
            </p>
          </div>
          <div className="lg:col-span-8">
            {FAQS.map((f, i) => {
              const on = faqOpen === i;
              return (
                <div key={f.q} style={{ borderTop: `1px solid ${HAIR}` }} data-testid={`a14-faq-${i}`}>
                  <button onClick={() => setFaqOpen(on ? -1 : i)} aria-expanded={on} className="flex w-full items-center gap-6 py-6 text-left">
                    <span className="flex-1 text-[16px] font-semibold">{f.q}</span>
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center">
                      {on ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                    </span>
                  </button>
                  <div className="grid transition-[grid-template-rows] duration-500 ease-out" style={{ gridTemplateRows: on ? "1fr" : "0fr" }}>
                    <div className="overflow-hidden">
                      <p className={`max-w-2xl pb-7 pr-10 text-[14.5px] leading-[1.8] transition-all duration-500 ${on ? "translate-y-0 opacity-100" : "translate-y-1 opacity-[0]"}`}
                        style={{ color: MUTED }}>{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- closing cta ---------- */}
      <section className="px-5 py-20 sm:px-8 sm:py-24" style={{ background: GREY }} data-testid="a14-cta-block">
        <div className="mx-auto max-w-[1320px] text-center">
          <Display size="clamp(36px, 7.4vw, 104px)">{A.cta.title}</Display>
          <p className="mx-auto mt-8 max-w-2xl text-[15.5px] leading-relaxed" style={{ color: MUTED }}>{A.cta.lead}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <button onClick={() => external("/home38#signup")} data-testid="a14-final-cta"
              className="inline-flex items-center gap-2 bg-black px-8 py-4 text-[14px] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5">
              {A.cta.primary} <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={() => external("/home38#contact")}
              className="inline-flex items-center gap-2 bg-white px-8 py-4 text-[14px] font-semibold transition-transform duration-300 hover:-translate-y-0.5"
              style={{ border: `1px solid ${INK}` }}>
              {A.cta.secondary}
            </button>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 border-t pt-10 text-left sm:grid-cols-3" style={{ borderColor: HAIR }}>
            {[
              { icon: Mail, label: A.footer.contact.email, href: `mailto:${A.footer.contact.email}` },
              { icon: Phone, label: A.footer.contact.phone, href: `tel:+914448585100` },
              { icon: MapPin, label: A.footer.contact.address, href: null },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-white" style={{ border: `1px solid ${HAIR}` }}>
                  <c.icon className="h-4 w-4" />
                </span>
                <span className="text-[14px] leading-relaxed" style={{ color: MUTED }}>
                  {c.href ? <a href={c.href} className="hover:underline">{c.label}</a> : c.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- footer ---------- */}
      <footer className="border-t px-5 py-14 sm:px-8" style={{ borderColor: HAIR }}>
        <div className="mx-auto max-w-[1320px]">
          <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-12">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2.5">
                <img src={`${process.env.PUBLIC_URL}/ffh-logo.png`} alt="FFH ERP" width="30" height="30" className="h-[30px] w-[30px] rounded-full" />
                <span className="text-[18px] font-semibold tracking-tight">FFH|ERP</span>
              </div>
              <p className="mt-4 max-w-sm text-[13.5px] leading-relaxed" style={{ color: MUTED }}>
                Nine connected modules on one database — built in Chennai since 2012, running in 20+ countries.
              </p>
              <div className="mt-5 flex gap-2">
                {["Instagram", "Facebook", "LinkedIn", "Twitter", "YouTube"].map((s) => {
                  const I = SOCIAL[s];
                  return (
                    <a key={s} href="#top" onClick={(e) => e.preventDefault()} aria-label={s}
                      className="flex h-9 w-9 items-center justify-center transition-colors duration-200 hover:bg-black hover:text-white"
                      style={{ border: `1px solid ${HAIR}`, color: MUTED }}>
                      <I className="h-4 w-4" strokeWidth={1.8} />
                    </a>
                  );
                })}
              </div>
            </div>
            {A.footer.columns.map((col) => (
              <div key={col.title} className="lg:col-span-2">
                <h4 className="text-[11.5px] font-bold uppercase tracking-[0.14em]" style={{ ...DISPLAY, fontSize: 12, letterSpacing: "0.14em" }}>{col.title}</h4>
                <ul className="mt-5 space-y-2.5">
                  {col.items.map(([label, path]) => (
                    <li key={label}>
                      <button onClick={() => external(path)} className="text-left text-[13.5px] transition-opacity hover:opacity-60" style={{ color: MUTED }}>{label}</button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="lg:col-span-2">
              <h4 className="text-[11.5px] font-bold uppercase tracking-[0.14em]" style={{ ...DISPLAY, fontSize: 12, letterSpacing: "0.14em" }}>{A.footer.contact.title}</h4>
              <ul className="mt-5 space-y-2.5 text-[13.5px]" style={{ color: MUTED }}>
                <li><a href={`mailto:${A.footer.contact.email}`} className="hover:underline">{A.footer.contact.email}</a></li>
                <li><a href="tel:+914448585100" className="hover:underline">{A.footer.contact.phone}</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t pt-6 text-[12.5px]" style={{ borderColor: HAIR, color: MUTED }}>
            <span>{A.footer.legal}</span>
            <span className="flex items-center gap-2"><Star className="h-3.5 w-3.5" />4.9 / 5.0 — top-rated ERP platform, built in India</span>
          </div>
        </div>
      </footer>

      <AboutLayoutNav />
    </div>
  );
}
