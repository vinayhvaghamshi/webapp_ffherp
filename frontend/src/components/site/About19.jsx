import React, { useEffect } from "react";
import {
  ArrowRight, ArrowUpRight, BadgeCheck, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube,
} from "lucide-react";
import { ABOUT_11, ABOUT_15, ABOUT_19, HOME39_MORE, TEAM } from "../../mock";
import AboutLayoutNav from "./AboutLayoutNav";
import { Icon } from "./Trusted";
import { useGoTo } from "./crmStore";

// About layout 19 — modelled on odoo.com/page/about-us. The airy, friendly
// corporate treatment: a hero with three large numbers, a two-column "fits small
// and large alike" block with a photo pair, "what makes us different" in three
// short paragraphs, a world map with our offices and the countries we serve, the
// leadership team in black and white, and — where Odoo lists awards — a dated
// list of milestones and the standards we are audited against.
const INK = "#20222b";
const MUTED = "#6b7280";
const PLUM = "#2f2440";
const TINT = "#f7f5fb";
const HAIR = "#ecebf2";
const BRAND = "#ef7b23";
const BRAND_DARK = "#cf5f12";
const TEAL = "#0f766e";
const SOCIAL = { Instagram, Facebook, LinkedIn: Linkedin, Twitter, YouTube: Youtube };

export default function About19() {
  const goTo = useGoTo();
  const A = ABOUT_19;

  useEffect(() => { document.title = "About FFH|ERP — making growing businesses simpler | FFH|ERP"; }, []);

  const external = (path) => { window.location.assign(`${process.env.PUBLIC_URL}${path}`); };
  const jump = (e, t) => { e.preventDefault(); goTo(t); };

  return (
    <div className="ffh-tw ffh-a19 min-h-screen bg-white" style={{ color: INK, fontFamily: 'Inter, system-ui, sans-serif' }} data-testid="about19-page">
      {/* ---------- nav ---------- */}
      <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur" style={{ borderColor: HAIR }} data-testid="a19-nav">
        <div className="mx-auto flex max-w-[1200px] items-center gap-6 px-5 py-4 sm:px-8">
          <a href="#top" onClick={(e) => jump(e, "#top")} className="flex items-center gap-2.5">
            <img src={`${process.env.PUBLIC_URL}/ffh-logo.png`} alt="FFH ERP" width="32" height="32" className="h-8 w-8 rounded-full" />
            <span className="text-[18px] font-semibold tracking-[-0.01em]">FFH|ERP</span>
          </a>
          <nav className="ml-auto hidden items-center gap-1 lg:flex">
            {A.nav.map((l) => (
              <button key={l.label} onClick={() => external(l.path)}
                className="rounded-full px-4 py-2 text-[14px] font-medium transition-colors duration-200 hover:bg-black/[.04]" style={{ color: MUTED }}>{l.label}</button>
            ))}
          </nav>
          <button onClick={() => external("/home39#signup")} data-testid="a19-cta"
            className="ml-auto rounded-full px-5 py-3 text-[13.5px] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 lg:ml-0"
            style={{ background: `linear-gradient(135deg,#f7a52a,${BRAND_DARK})` }}>
            Try it free
          </button>
        </div>
      </header>

      {/* ---------- hero ---------- */}
      <section id="top" className="px-5 pb-12 pt-16 sm:px-8 sm:pt-20">
        <div className="mx-auto max-w-[900px] text-center">
          <h1 className="text-[9vw] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-[5vw] lg:text-[52px]" data-testid="a19-title"
            style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
            {A.hero.title}
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-[17px] leading-[1.75]" style={{ color: MUTED }}>{A.hero.lead}</p>
        </div>
        <div className="mx-auto mt-14 grid max-w-[1000px] grid-cols-1 gap-6 sm:grid-cols-3" data-testid="a19-stats">
          {A.hero.stats.map((s) => (
            <div key={s.l} className="rounded-3xl px-6 py-8 text-center transition-transform duration-300 hover:-translate-y-1" style={{ background: TINT, border: `1px solid ${HAIR}` }}>
              <strong className="block text-[42px] font-semibold leading-none tracking-[-0.03em]" style={{ fontFamily: 'Poppins, Inter, sans-serif', color: PLUM }}>{s.v}</strong>
              <span className="mt-3 block text-[14px]" style={{ color: MUTED }}>{s.l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- fits small and large alike ---------- */}
      <section className="px-5 py-16 sm:px-8 sm:py-20" data-testid="a19-fits">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-5">
            <h2 className="text-[30px] font-semibold leading-[1.15] tracking-[-0.03em] sm:text-[38px]" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
              {A.fits.title}
            </h2>
          </div>
          <div className="lg:col-span-7">
            {A.fits.paragraphs.map((t, i) => (
              <p key={i} className={`text-[16px] leading-[1.85] ${i === 0 ? "" : "mt-5"}`} style={{ color: MUTED }}>{t}</p>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-[1200px] grid-cols-1 gap-5 sm:grid-cols-2">
          {A.fits.images.map((id, i) => (
            <img key={id} src={`https://picsum.photos/id/${id}/900/620`} alt={i === 0 ? "FFH|ERP in a shop" : "The FFH|ERP team at work"}
              width="900" height="620" loading="lazy" className="h-[220px] w-full rounded-3xl object-cover sm:h-[300px]" />
          ))}
        </div>
      </section>

      {/* ---------- what makes us different ---------- */}
      <section className="px-5 py-16 sm:px-8 sm:py-20" style={{ background: TINT, borderTop: `1px solid ${HAIR}`, borderBottom: `1px solid ${HAIR}` }} data-testid="a19-different">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-center text-[30px] font-semibold leading-[1.15] tracking-[-0.03em] sm:text-[38px]" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
            {A.different.title}
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-x-14 gap-y-8 lg:grid-cols-3">
            {A.different.paragraphs.map((t, i) => (
              <div key={i} className="rounded-3xl bg-white p-7 transition-transform duration-300 hover:-translate-y-1" style={{ border: `1px solid ${HAIR}` }} data-testid={`a19-diff-${i}`}>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl" style={{ background: TINT, color: TEAL, border: `1px solid ${HAIR}` }}>
                  <Icon name={["MousePointerClick", "Blocks", "LifeBuoy"][i]} size={20} />
                </span>
                <p className="mt-5 text-[15px] leading-[1.85]" style={{ color: MUTED }}>{t}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-12 max-w-[1200px]">
            <img src={`https://picsum.photos/id/${A.different.image}/1600/700`} alt="The FFH|ERP team working on the platform"
              width="1600" height="700" loading="lazy" className="h-[240px] w-full rounded-3xl object-cover sm:h-[380px]" />
          </div>
        </div>
      </section>

      {/* ---------- our offices + where we serve ---------- */}
      <section className="px-5 py-16 sm:px-8 sm:py-20" data-testid="a19-offices">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-center text-[30px] font-semibold leading-[1.15] tracking-[-0.03em] sm:text-[38px]" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
            {A.offices.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-[15.5px] leading-relaxed" style={{ color: MUTED }}>{A.offices.lead}</p>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {A.offices.items.map((o) => (
              <div key={o.city} className="rounded-3xl bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg" style={{ border: `1px solid ${HAIR}` }} data-testid={`a19-office-${o.city.toLowerCase()}`}>
                <span className="text-[26px] leading-none">{o.flag}</span>
                <h3 className="mt-4 text-[18px] font-semibold tracking-[-0.02em]" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>{o.city}</h3>
                <span className="mt-0.5 block text-[12.5px]" style={{ color: MUTED }}>{o.country}</span>
                <p className="mt-3 text-[13.5px] leading-relaxed" style={{ color: BRAND_DARK }}>{o.what}</p>
              </div>
            ))}
          </div>

          {/* the world map, and the countries the map stands for */}
          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-x-12" data-testid="a19-serve">
            <div className="lg:col-span-5">
              <div className="rounded-3xl p-6" style={{ background: TINT, border: `1px solid ${HAIR}` }}>
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: PLUM }}>{ABOUT_11.presence.eyebrow}</p>
                <h3 className="mt-3 text-[22px] font-semibold leading-snug tracking-[-0.02em]" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>{ABOUT_11.presence.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed" style={{ color: MUTED }}>{ABOUT_11.presence.sub}</p>
                <div className="mt-6 space-y-4">
                  {ABOUT_11.presence.regions.map((r) => (
                    <div key={r.country} className="flex items-start gap-3 border-t pt-4" style={{ borderColor: HAIR }}>
                      <span className="text-[20px] leading-none">{r.flag}</span>
                      <span>
                        <strong className="block text-[14.5px] font-semibold">{r.country}{r.tag ? <span className="ml-2 rounded-full px-2 py-0.5 text-[10.5px] font-bold" style={{ background: BRAND, color: "#fff" }}>{r.tag}</span> : null}</strong>
                        <span className="text-[12.5px]" style={{ color: MUTED }}>{r.region} · {r.cities} cities</span>
                      </span>
                    </div>
                  ))}
                </div>
                <button onClick={() => external("/about11")} className="mt-6 inline-flex items-center gap-2 text-[13.5px] font-semibold transition-opacity hover:opacity-70" style={{ color: BRAND_DARK }}>
                  See every city <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="grid h-full grid-cols-2 gap-px overflow-hidden rounded-3xl sm:grid-cols-3" style={{ background: HAIR, border: `1px solid ${HAIR}` }}>
                {ABOUT_11.presence.regions.flatMap((r) => r.list.map((c) => ({ c, r: r.country }))).slice(0, 26).map(({ c, r }) => (
                  <div key={c + r} className="flex flex-col justify-center bg-white px-4 py-5 transition-colors duration-300 hover:bg-[#fdfbf9]">
                    <span className="text-[13.5px] font-semibold" style={{ color: INK }}>{c}</span>
                    <span className="text-[11.5px]" style={{ color: MUTED }}>{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- leadership ---------- */}
      <section className="px-5 py-16 sm:px-8 sm:py-20" style={{ background: TINT, borderTop: `1px solid ${HAIR}`, borderBottom: `1px solid ${HAIR}` }} data-testid="a19-team">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-center text-[30px] font-semibold leading-[1.15] tracking-[-0.03em] sm:text-[38px]" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
            {A.team.title}
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-center text-[15.5px] leading-relaxed" style={{ color: MUTED }}>{A.team.lead}</p>
          <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((m) => (
              <figure key={m.name} className="group text-center" data-testid={`a19-person-${m.name.split(" ")[0].toLowerCase()}`}>
                <img src={`https://i.pravatar.cc/400?img=${m.img}`} alt={m.name} width="400" height="400" loading="lazy"
                  className="mx-auto h-[190px] w-[190px] rounded-full object-cover transition-all duration-500 group-hover:-translate-y-1.5"
                  style={{ filter: "grayscale(1)", border: `1px solid ${HAIR}` }} />
                <figcaption className="mt-5">
                  <strong className="block text-[16.5px] font-semibold tracking-[-0.02em]" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>{m.name} <span style={{ color: BRAND }}>•</span> <span className="text-[14px]" style={{ color: BRAND_DARK }}>{m.role}</span></strong>
                  <p className="mt-3 text-[13.5px] leading-[1.7]" style={{ color: MUTED }}>{m.bio}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- milestones & certifications (where Odoo lists awards) ---------- */}
      <section className="px-5 py-16 sm:px-8 sm:py-20" data-testid="a19-milestones">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-5">
            <h2 className="text-[30px] font-semibold leading-[1.15] tracking-[-0.03em] sm:text-[38px]" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
              {A.milestones.title}
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed" style={{ color: MUTED }}>{A.milestones.lead}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {A.milestones.certs.map((c) => (
                <span key={c} className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[12.5px] font-medium" style={{ background: TINT, border: `1px solid ${HAIR}`, color: INK }}>
                  <BadgeCheck className="h-3.5 w-3.5" style={{ color: TEAL }} />{c}
                </span>
              ))}
            </div>
            <div className="mt-8 rounded-3xl p-6" style={{ background: TINT, border: `1px solid ${HAIR}` }}>
              <p className="text-[13.5px] leading-relaxed" style={{ color: MUTED }}>
                <strong style={{ color: INK }}>A note on awards.</strong> {A.milestones.note || "We would rather list the standards we are audited against and the dates we can prove than a shelf of trophies."}
              </p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ol data-testid="a19-mile-list">
              {ABOUT_15.story.milestones.map((mm, i) => (
                <li key={mm.y} className="flex gap-6 border-t py-5 first:border-t-0" style={{ borderColor: HAIR }} data-testid={`a19-mile-${i}`}>
                  <span className="w-[52px] shrink-0 text-[14px] font-bold" style={{ fontFamily: 'JetBrains Mono, monospace', color: BRAND_DARK }}>{mm.y}</span>
                  <span>
                    <strong className="block text-[16px] font-semibold tracking-[-0.01em]" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>{mm.t}</strong>
                    <span className="mt-1 block text-[14px] leading-[1.7]" style={{ color: MUTED }}>{mm.d}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ---------- what it is made of, in Odoo's checklist style ---------- */}
      <section className="ffh-on-dark px-5 py-16 sm:px-8 sm:py-20" style={{ background: PLUM }} data-testid="a19-security">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-center text-[28px] font-semibold leading-[1.15] tracking-[-0.03em] text-white sm:text-[36px]" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
            {HOME39_MORE.security.title}
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {HOME39_MORE.security.items.map((it) => (
              <div key={it.title} className="rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1"
                style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.14)" }}>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl" style={{ background: "rgba(239,123,35,.18)", color: BRAND }}>
                  <Icon name={it.icon} size={18} />
                </span>
                <h3 className="mt-5 text-[16.5px] font-semibold text-white" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>{it.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-white/65">{it.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- cta + footer ---------- */}
      <section className="px-5 py-16 sm:px-8" data-testid="a19-cta-block">
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="text-[28px] font-semibold leading-[1.2] tracking-[-0.03em] sm:text-[36px]" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
            One database. Nine modules. Your whole business.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15.5px] leading-relaxed" style={{ color: MUTED }}>
            Free trial, setup in a day, no credit card. Start with the module that hurts most and add the rest as you grow.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button onClick={() => external("/home39#signup")} data-testid="a19-final-cta"
              className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-[14.5px] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
              style={{ background: `linear-gradient(135deg,#f7a52a,${BRAND_DARK})` }}>
              Try it free <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={() => external("/home39#pricing")}
              className="inline-flex items-center gap-2 rounded-full border bg-white px-7 py-4 text-[14.5px] font-semibold transition-transform duration-300 hover:-translate-y-0.5"
              style={{ borderColor: HAIR, color: INK }}>
              See the pricing
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t px-5 py-14 sm:px-8" style={{ borderColor: HAIR, background: TINT }} data-testid="a19-footer">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-12">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2.5">
                <img src={`${process.env.PUBLIC_URL}/ffh-logo.png`} alt="FFH ERP" width="32" height="32" className="h-8 w-8 rounded-full" />
                <span className="text-[18px] font-semibold tracking-[-0.01em]">FFH|ERP</span>
              </div>
              <p className="mt-4 max-w-md text-[13.5px] leading-relaxed" style={{ color: MUTED }}>{A.footer.blurb}</p>
              <div className="mt-5 flex gap-2">
                {["Instagram", "Facebook", "LinkedIn", "Twitter", "YouTube"].map((s) => {
                  const I = SOCIAL[s];
                  return (
                    <a key={s} href="#top" onClick={(e) => e.preventDefault()} aria-label={s}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white transition-all duration-300 hover:-translate-y-0.5" style={{ border: `1px solid ${HAIR}`, color: MUTED }}>
                      <I className="h-4 w-4" strokeWidth={1.8} />
                    </a>
                  );
                })}
              </div>
            </div>
            {A.footer.columns.map((col) => (
              <div key={col.title} className="lg:col-span-2">
                <h4 className="text-[12px] font-semibold uppercase tracking-[0.14em]" style={{ color: PLUM }}>{col.title}</h4>
                <ul className="mt-4 space-y-2.5">
                  {col.items.map(([label, path]) => (
                    <li key={label}><button onClick={() => external(path)} className="text-left text-[13.5px] transition-opacity hover:opacity-70" style={{ color: MUTED }}>{label}</button></li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="lg:col-span-1" />
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t pt-6 text-[12.5px]" style={{ borderColor: HAIR, color: MUTED }}>
            <span className="flex items-center gap-4">
              <span className="flex items-center gap-1.5"><Mail className="h-3.5 w-3.5" style={{ color: BRAND }} />ffhsales@kriskrossinc.com</span>
              <span className="flex items-center gap-1.5"><Phone className="h-3.5 w-3.5" style={{ color: BRAND }} />+91 44 4858 5100</span>
              <span className="hidden items-center gap-1.5 sm:flex"><MapPin className="h-3.5 w-3.5" style={{ color: BRAND }} />Chennai · Dubai · Singapore</span>
            </span>
            <span>{A.footer.legal}</span>
          </div>
        </div>
      </footer>

      <AboutLayoutNav />
    </div>
  );
}
