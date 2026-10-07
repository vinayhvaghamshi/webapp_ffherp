import React, { useEffect, useState } from "react";
import { ArrowRight, ChevronRight, Facebook, Instagram, Linkedin, Lock, Mail, MapPin, Phone, Send, Sparkles, Star, Twitter, Youtube } from "lucide-react";
import { toast } from "sonner";
import { ABOUT_11, COUNTRY_CODES, HOME37 } from "../../mock";
import { Icon } from "./Trusted";
import AboutLayoutNav from "./AboutLayoutNav";
import { useGoTo } from "./crmStore";
import { buildProspectPayload, sendProspect } from "../../api/ffhWebhook";

// About layout 11 — modelled on futuretouch.in/about: a self-contained dark
// page with its own header and footer, a top ticker, an "About Us" hero, a
// who-we-are block, a Get in Touch form, client reviews, a newsletter and a
// global-presence grid of city cards.
const GRAD = "bg-gradient-to-r from-[#f7a52a] to-[#f0452c]";
const GRAD_TEXT = `${GRAD} bg-clip-text text-transparent`;
const LINE = "rgba(255,255,255,.10)";
const CARD = "rgba(255,255,255,.045)";
const INK = "#0d0f1f";
const DEEP = "#12142a";

const SOCIAL = { Instagram, Facebook, LinkedIn: Linkedin, Twitter, YouTube: Youtube };

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11.5px] font-semibold uppercase tracking-[0.14em] text-white/55">
        {label} {required && <em className="not-italic text-[#f0452c]">*</em>}
      </span>
      {children}
    </label>
  );
}

export default function About11() {
  const goTo = useGoTo();
  const [sending, setSending] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [f, setF] = useState({ first: "", last: "", email: "", code: "+91", phone: "", service: "", message: "" });
  const A = ABOUT_11;

  useEffect(() => { document.title = "About Us — FFH|ERP by KrisKross Inc. | FFH|ERP"; }, []);

  const set = (k) => (e) => {
    const v = e.target.value;
    setF((p) => ({ ...p, [k]: v }));
    setErrors((p) => ({ ...p, [k]: "" }));
  };
  const jump = (e, target) => { e.preventDefault(); goTo(target); };

  // Contact form -> the same CRM webhook. The spec's flag is the module name
  // ("Prospect"/"Ticket"), so a quote request goes in as a Prospect; the service
  // chosen maps to ProdServType and the message to ProductCode.
  const submit = (e) => {
    e.preventDefault();
    const err = {};
    if (!f.first.trim()) err.first = "Please enter your first name";
    if (!/^\S+@\S+\.\S+$/.test(f.email)) err.email = "Enter a valid email";
    if (!/^\d{7,12}$/.test(f.phone)) err.phone = "Enter a valid phone number";
    if (!f.service) err.service = "Choose a service";
    setErrors(err);
    if (Object.keys(err).length) return;
    setSending(true);
    const payload = buildProspectPayload({
      token: "Prospect",
      company: "",
      name: `${f.first} ${f.last}`.trim(),
      mobile: `${f.code} ${f.phone}`,
      email: f.email.trim(),
      message: f.message.trim() || "Website enquiry from the About page",
      interestedIn: f.service,
    });
    sendProspect(payload).then((r) => {
      setSending(false);
      if (!r.ok) {
        setErrors({ email: r.error === "timeout" ? "The server did not respond. Please try again." : "We could not send this just now. Please try again." });
        toast.error("Could not reach the CRM", { description: `Status ${r.status || "—"} ${r.error || r.body || ""}`.trim() });
        return;
      }
      try {
        const prev = JSON.parse(localStorage.getItem("ffh_support_threads") || "[]");
        prev.push({ name: `${f.first} ${f.last}`.trim(), email: f.email.trim(), department: f.service, message: f.message, at: new Date().toISOString() });
        localStorage.setItem("ffh_support_threads", JSON.stringify(prev));
      } catch (_) { /* storage may be unavailable */ }
      toast.success("Message sent — we will get back to you shortly.");
      setF({ first: "", last: "", email: "", code: "+91", phone: "", service: "", message: "" });
    });
  };

  const input = "w-full rounded-xl border border-white/12 bg-white/[.06] px-4 py-3 text-[14px] text-white placeholder-white/35 outline-none transition duration-300 focus:border-transparent focus:bg-white/[.09] focus:ring-2 focus:ring-[#f7a52a]";
  const errText = "mt-1.5 text-[12px] text-[#ff8a7a]";

  return (
    <div className="ffh-tw ffh-a11 min-h-screen" style={{ background: INK, color: "#e7e9f3" }} data-testid="about11-page">
      {/* ---------- top strip + header ---------- */}
      <div className="border-b px-5 py-2 text-[12px] text-white/55 sm:px-8" style={{ borderColor: LINE, background: DEEP }}>
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-x-6 gap-y-1">
          <span className="inline-flex items-center gap-2"><Mail className="h-3.5 w-3.5" />{A.topbar.email}</span>
          <span className="inline-flex items-center gap-2"><Phone className="h-3.5 w-3.5" />{A.topbar.phone}</span>
          <span className="ml-auto inline-flex items-center gap-4">
            <a href="#contact" onClick={(e) => jump(e, "#contact")} className="transition hover:text-white">{A.topbar.support}</a>
            <span className="hidden gap-2 sm:inline-flex">
              {A.footer.socials.slice(0, 5).map((s) => { const I = SOCIAL[s]; return <a key={s} href="#top" onClick={(e) => e.preventDefault()} aria-label={s} className="transition hover:text-[#f7a52a]"><I className="h-4 w-4" /></a>; })}
            </span>
          </span>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b backdrop-blur-md" style={{ borderColor: LINE, background: "rgba(13,15,31,.86)" }} data-testid="a11-nav">
        <div className="mx-auto flex h-[68px] max-w-[1400px] items-center gap-5 px-5 sm:px-8">
          <a href="#top" onClick={(e) => jump(e, "#top")} className="flex items-center gap-3">
            <img src={`${process.env.PUBLIC_URL}/ffh-logo.png`} alt="FFH ERP" width="34" height="34" className="h-[34px] w-[34px] rounded-full" />
            <span className="text-[18px] font-bold tracking-tight text-white">FFH|ERP</span>
          </a>
          <nav className="ml-auto hidden items-center gap-1 lg:flex">
            {A.nav.map((l) => (
              <a key={l.label} href={l.path} onClick={(e) => { if (l.path.startsWith("/home37#")) { e.preventDefault(); window.location.assign(`${process.env.PUBLIC_URL}${l.path}`); } else { e.preventDefault(); goTo(l.path); } }}
                className="group relative rounded-full px-4 py-2 text-[13.5px] font-medium text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[.07] hover:text-white">
                {l.label}
              </a>
            ))}
          </nav>
          <button onClick={(e) => jump(e, "#contact")} data-testid="a11-quote"
            className={`ml-auto inline-flex items-center gap-2 rounded-full ${GRAD} px-5 py-3 text-[13px] font-semibold text-white shadow-lg shadow-orange-900/30 transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105 lg:ml-0`}>
            Request a quote <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </header>

      {/* ---------- ticker ---------- */}
      <div className="overflow-hidden border-b py-3" style={{ borderColor: LINE, background: DEEP }} data-testid="a11-ticker">
        <div className="ffh-marquee flex w-max items-center gap-10">
          {[...A.ticker, ...A.ticker, ...A.ticker].map((t, i) => (
            <span key={i} className="flex shrink-0 items-center gap-10 whitespace-nowrap text-[13px] font-medium text-white/60">
              {t}<Sparkles className="h-3.5 w-3.5 text-[#f7a52a]" />
            </span>
          ))}
        </div>
      </div>

      {/* ---------- hero ---------- */}
      <section id="top" className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-24">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true"
          style={{ background: `radial-gradient(1100px circle at 82% 0%, rgba(247,165,42,.13), transparent 60%), radial-gradient(900px circle at 10% 100%, rgba(99,91,255,.14), transparent 60%)` }} />
        <div className="pointer-events-none absolute inset-0 opacity-[.5]" aria-hidden="true"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,.14) 1px, transparent 1px)", backgroundSize: "26px 26px" }} />
        <div className="relative mx-auto max-w-[1400px]">
          <span className="ffh-a11-script text-[26px] text-[#f7a52a]">{A.hero.eyebrow}</span>
          <h1 className="mt-3 text-[13vw] font-bold leading-[0.95] tracking-[-0.04em] text-white sm:text-[7vw] lg:text-[76px]">{A.hero.title}</h1>
          <div className="mt-6 flex items-center gap-2 text-[13.5px] text-white/55">
            {A.hero.crumb.map((c, i) => (
              <span key={c} className="flex items-center gap-2">
                {i > 0 && <ChevronRight className="h-3.5 w-3.5" />}
                <span className={i === A.hero.crumb.length - 1 ? "text-white" : ""}>{c}</span>
              </span>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-[16px] leading-relaxed text-white/65">{A.hero.lead}</p>
        </div>
      </section>

      {/* ---------- who we are ---------- */}
      <section className="border-y px-5 py-20 sm:px-8 sm:py-24" style={{ borderColor: LINE, background: DEEP }}>
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-y-12 lg:grid-cols-2 lg:gap-x-20">
          <div className="reveal relative">
            <img src={`https://picsum.photos/id/${A.who.image}/900/700`} alt="" width="900" height="700" loading="lazy"
              className="h-[320px] w-full rounded-3xl object-cover sm:h-[420px]" />
            <div className="absolute -right-3 -top-5 hidden h-28 w-28 items-center justify-center rounded-full bg-white p-3 text-center text-[9px] font-bold uppercase leading-tight tracking-wider text-[#16283c] shadow-2xl sm:flex"
              style={{ transform: "rotate(12deg)" }}>
              <img src={`${process.env.PUBLIC_URL}/ffh-logo.png`} alt="" className="h-11 w-11" />
            </div>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11.5px] font-semibold uppercase tracking-[0.16em]"
              style={{ background: CARD, border: `1px solid ${LINE}`, color: "#f7a52a" }}>{A.who.stamp}</div>
          </div>
          <div>
            <span className="ffh-a11-script text-[24px] text-[#f7a52a]">{A.who.script}</span>
            <h2 className="mt-2 text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl">
              {A.who.titleLead} <span className={`${GRAD_TEXT} font-extrabold`}>{A.who.titleAccent}</span>
            </h2>
            {A.who.paragraphs.map((t, i) => (
              <p key={i} className={`text-[15px] leading-relaxed text-white/60 ${i === 0 ? "mt-6" : "mt-4"}`}>{t}</p>
            ))}
            <div className="mt-7 flex flex-wrap gap-2">
              {A.who.chips.map((c) => (
                <span key={c} className="inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-[12.5px] font-medium text-white/75"
                  style={{ background: CARD, border: `1px solid ${LINE}` }}>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#f7a52a]" />{c}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={(e) => jump(e, "#contact")} className={`inline-flex items-center gap-2 rounded-full ${GRAD} px-6 py-3.5 text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5`}>
                Get in touch <ArrowRight className="h-4 w-4" />
              </button>
              <a href={`${process.env.PUBLIC_URL}/home37#modules`} className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: CARD, border: `1px solid ${LINE}` }}>
                See the product
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- get in touch ---------- */}
      <section id="contact" className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-5">
            <span className="text-[11.5px] font-semibold uppercase tracking-[0.2em] text-[#f7a52a]">Send us a message</span>
            <h2 className="mt-4 text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl">Get in Touch</h2>
            <p className="mt-5 text-[15px] leading-relaxed text-white/60">
              Tell us what you want to fix — collections, stock, AMC renewals, service tickets — and a product specialist
              (not a call centre) will walk you through it.
            </p>
            <ul className="mt-8 space-y-4 text-[14.5px] text-white/70">
              <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#f7a52a]" />{A.footer.contact.address}</li>
              <li className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#f7a52a]" /><a href={`mailto:${A.footer.contact.email}`} className="hover:underline">{A.footer.contact.email}</a></li>
              <li className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#f7a52a]" /><a href={`tel:${A.footer.contact.phone.replace(/\s/g, "")}`} className="hover:underline">{A.footer.contact.phone}</a></li>
            </ul>
            <div className="mt-8 rounded-2xl p-5" style={{ background: CARD, border: `1px solid ${LINE}` }}>
              <h3 className="text-[15px] font-semibold text-white">Ready to turn your vision into reality?</h3>
              <p className="mt-1.5 text-[13.5px] text-white/55">Free trial, setup in a day, no credit card. Or ask us anything first.</p>
            </div>
          </div>

          <form onSubmit={submit} noValidate data-testid="a11-contact-form" className="reveal lg:col-span-7">
            <div className="grid grid-cols-1 gap-5 rounded-3xl p-6 sm:grid-cols-2 sm:p-8" style={{ background: CARD, border: `1px solid ${LINE}` }}>
              <Field label="First name" required>
                <input className={input} value={f.first} onChange={set("first")} placeholder="First name" data-testid="a11-first" />
                {errors.first && <p className={errText}>{errors.first}</p>}
              </Field>
              <Field label="Last name">
                <input className={input} value={f.last} onChange={set("last")} placeholder="Last name" data-testid="a11-last" />
              </Field>
              <Field label="Email address" required>
                <input type="email" autoComplete="email" className={input} value={f.email} onChange={set("email")} placeholder="you@company.com" data-testid="a11-email" />
                {errors.email && <p className={errText}>{errors.email}</p>}
              </Field>
              <Field label="Phone number" required>
                <div className="flex gap-2">
                  <select className={`${input} w-[110px]`} value={f.code} onChange={set("code")} data-testid="a11-code">
                    {COUNTRY_CODES.map((c) => <option key={c} value={c} className="text-slate-900">{c}</option>)}
                  </select>
                  <input className={input} value={f.phone} onChange={(e) => setF((p) => ({ ...p, phone: e.target.value.replace(/\D/g, "") }))} placeholder="Phone number" data-testid="a11-phone" />
                </div>
                {errors.phone && <p className={errText}>{errors.phone}</p>}
              </Field>
              <div className="sm:col-span-2">
                <Field label="Service you are interested in" required>
                  <select className={input} value={f.service} onChange={set("service")} data-testid="a11-service">
                    <option value="" className="text-slate-900">Choose a service</option>
                    {A.services.map((s) => <option key={s} value={s} className="text-slate-900">{s}</option>)}
                  </select>
                  {errors.service && <p className={errText}>{errors.service}</p>}
                </Field>
              </div>
              <div className="sm:col-span-2">
                <Field label="Message">
                  <textarea rows={4} className={`${input} resize-none`} value={f.message} onChange={set("message")} placeholder="Tell us what you need" data-testid="a11-message" />
                </Field>
              </div>
              <div className="sm:col-span-2">
                <button type="submit" disabled={sending} data-testid="a11-submit"
                  className={`flex w-full items-center justify-center gap-2 rounded-xl ${GRAD} px-6 py-4 text-[14.5px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70`}>
                  <Send className="h-4 w-4" />{sending ? "Sending…" : "Send message"}
                </button>
                <p className="mt-3 flex items-center justify-center gap-1.5 text-[12px] text-white/40"><Lock className="h-3.5 w-3.5" />Your details stay with us — no sharing, no spam.</p>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* ---------- client reviews ---------- */}
      <section className="border-y px-5 py-20 sm:px-8 sm:py-24" style={{ borderColor: LINE, background: DEEP }}>
        <div className="mx-auto max-w-[1400px]">
          <span className="text-[11.5px] font-semibold uppercase tracking-[0.2em] text-[#f7a52a]">{A.reviews.eyebrow}</span>
          <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-[1.08] tracking-[-0.03em] text-white sm:text-4xl">
            What our clients say about <span className={GRAD_TEXT}>FFH|ERP</span>
          </h2>
          <div className="mt-10 grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <h3 className="text-3xl font-bold leading-tight text-white sm:text-[40px]">{A.reviews.heading}</h3>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {A.reviews.chips.map((c) => (
                  <span key={c.l} className="flex items-center gap-2 rounded-full px-4 py-2 text-[13px]" style={{ background: CARD, border: `1px solid ${LINE}` }}>
                    <strong className="font-bold text-[#f7a52a]">{c.v}</strong><span className="text-white/60">{c.l}</span>
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-6 lg:text-right">
              <a href={`${process.env.PUBLIC_URL}/home37#modules`}
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-[13.5px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: CARD, border: `1px solid ${LINE}` }}>
                {A.reviews.cta} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {HOME37.testimonials.slice(0, 6).map((t, i) => (
              <figure key={t.person + i} data-testid={`a11-review-${i}`}
                className="group flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5"
                style={{ background: CARD, border: `1px solid ${LINE}` }}>
                <span className="flex text-amber-400">{[0, 1, 2, 3, 4].map((k) => <Star key={k} className="h-3.5 w-3.5 fill-current" />)}</span>
                <blockquote className="mt-4 flex-1 text-[14.5px] leading-relaxed text-white/70">“{t.text || t.quote}”</blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t pt-4" style={{ borderColor: LINE }}>
                  <img src={`https://i.pravatar.cc/80?img=${t.img}`} alt={t.person} width="40" height="40" loading="lazy"
                    className="h-10 w-10 rounded-full object-cover transition-transform duration-300 group-hover:scale-110" />
                  <span>
                    <strong className="block text-[13.5px] font-semibold text-white">{t.person}</strong>
                    <span className="text-[12px] text-white/50">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- newsletter ---------- */}
      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[1400px] overflow-hidden rounded-3xl p-8 sm:p-12" style={{ background: CARD, border: `1px solid ${LINE}` }} data-testid="a11-newsletter">
          <div className="grid grid-cols-1 items-center gap-y-8 lg:grid-cols-2 lg:gap-x-16">
            <div>
              <span className="text-[11.5px] font-semibold uppercase tracking-[0.2em] text-[#f7a52a]">{A.newsletter.eyebrow}</span>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-[40px]">{A.newsletter.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-white/60">{A.newsletter.lead}</p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {A.newsletter.points.map((p) => (
                  <span key={p} className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[12.5px] text-white/65" style={{ background: "rgba(255,255,255,.05)", border: `1px solid ${LINE}` }}>
                    <Sparkles className="h-3.5 w-3.5 text-[#f7a52a]" />{p}
                  </span>
                ))}
              </div>
            </div>
            <div>
              {subscribed ? (
                <div className="rounded-2xl p-6 text-center" style={{ background: "rgba(247,165,42,.10)", border: `1px solid ${LINE}` }}>
                  <strong className="block text-[16px] font-semibold text-white">You're on the list</strong>
                  <p className="mt-1.5 text-[13.5px] text-white/60">We'll send the next issue to {email}.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); if (!/^\S+@\S+\.\S+$/.test(email)) { toast.error("Enter a valid email"); return; } setSubscribed(true); toast.success("Subscribed — welcome aboard."); }} className="flex flex-col gap-3 sm:flex-row">
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" data-testid="a11-news-email"
                    className="w-full rounded-xl border border-white/12 bg-white/[.06] px-4 py-3.5 text-[14px] text-white placeholder-white/35 outline-none transition focus:ring-2 focus:ring-[#f7a52a]" />
                  <button type="submit" data-testid="a11-news-submit" className={`shrink-0 rounded-xl ${GRAD} px-6 py-3.5 text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5`}>
                    Subscribe
                  </button>
                </form>
              )}
              <p className="mt-3 flex items-center gap-1.5 text-[12px] text-white/40"><Lock className="h-3.5 w-3.5" />{A.newsletter.note}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- global presence ---------- */}
      <section className="px-5 py-20 sm:px-8 sm:py-24" style={{ background: "#f6f7fb" }} data-testid="a11-presence">
        <div className="mx-auto max-w-[1400px]">
          <span className="text-[11.5px] font-semibold uppercase tracking-[0.2em] text-[#cf5f12]">{A.presence.eyebrow}</span>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0d0f1f] sm:text-[40px]">{A.presence.title}</h2>
          <p className="mt-3 text-[14.5px] text-slate-500">{A.presence.sub}</p>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-5">
            {A.presence.regions.map((r, i) => (
              <div key={r.country} data-testid={`a11-region-${i}`}
                className="group relative overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1.5"
                style={{ background: `linear-gradient(160deg, ${INK}, #1b1e3d)`, boxShadow: "0 24px 50px -32px rgba(13,15,31,.65)" }}>
                <span className="absolute inset-x-0 top-0 h-[3px] opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "linear-gradient(90deg,#f7a52a,#f0452c)" }} />
                <div className="flex items-start justify-between">
                  <span className="text-[28px] leading-none">{r.flag}</span>
                  {r.tag && <span className="rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white" style={{ background: "linear-gradient(135deg,#f7a52a,#f0452c)" }}>{r.tag}</span>}
                </div>
                <span className="mt-4 block text-[10.5px] font-semibold uppercase tracking-[0.18em]" style={{ color: "#f7a52a" }}>{r.region}</span>
                <h3 className="mt-1 text-[19px] font-bold text-white">{r.country}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] text-white/70" style={{ background: "rgba(255,255,255,.07)" }}>{r.cities} Cities</span>
                  <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] text-white/70" style={{ background: "rgba(255,255,255,.07)" }}>
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />Active
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-1.5">
                  {r.list.map((c) => (
                    <span key={c} title={c}
                      className="rounded-lg px-2 py-1.5 text-[11px] leading-tight text-white/60 transition-all duration-200 hover:bg-white/[.09] hover:text-white"
                      style={{ background: "rgba(255,255,255,.05)" }}>{c}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- footer ---------- */}
      <footer className="px-5 py-16 sm:px-8" style={{ background: INK }}>
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-12">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3">
                <img src={`${process.env.PUBLIC_URL}/ffh-logo.png`} alt="FFH ERP" width="38" height="38" className="h-[38px] w-[38px] rounded-full" />
                <span className="text-[19px] font-bold text-white">FFH|ERP</span>
              </div>
              <p className="mt-5 text-[14px] leading-relaxed text-white/55">{A.footer.about}</p>
              <button onClick={(e) => jump(e, "#contact")} className={`mt-6 inline-flex items-center gap-2 rounded-full ${GRAD} px-5 py-3 text-[13.5px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5`}>
                {A.footer.cta} <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            {A.footer.links.map((col) => (
              <div key={col.title} className="lg:col-span-2">
                <h4 className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-[#f7a52a]">{col.title}</h4>
                <ul className="mt-5 space-y-3">
                  {col.items.map((it) => (
                    <li key={it.label}>
                      <a href={it.path} onClick={(e) => { e.preventDefault(); window.location.assign(`${process.env.PUBLIC_URL}${it.path}`); }}
                        className="group inline-flex items-center gap-2 text-[13.5px] text-white/55 transition hover:text-white">
                        <ChevronRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />{it.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="lg:col-span-4">
              <h4 className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-[#f7a52a]">Contact us</h4>
              <ul className="mt-5 space-y-4 text-[13.5px] text-white/55">
                <li className="flex items-start gap-3"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ background: CARD }}><MapPin className="h-4 w-4 text-[#f7a52a]" /></span>{A.footer.contact.address}</li>
                <li className="flex items-center gap-3"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ background: CARD }}><Mail className="h-4 w-4 text-[#f7a52a]" /></span><a href={`mailto:${A.footer.contact.email}`} className="hover:underline">{A.footer.contact.email}</a></li>
                <li className="flex items-center gap-3"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ background: CARD }}><Phone className="h-4 w-4 text-[#f7a52a]" /></span><a href={`tel:${A.footer.contact.phone.replace(/\s/g, "")}`} className="hover:underline">{A.footer.contact.phone}</a></li>
              </ul>
              <div className="mt-6 flex gap-2">
                {A.footer.socials.map((s) => { const I = SOCIAL[s]; return (
                  <a key={s} href="#top" onClick={(e) => e.preventDefault()} aria-label={s}
                    className="flex h-10 w-10 items-center justify-center rounded-full text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:text-white" style={{ background: CARD }}>
                    <I className="h-[18px] w-[18px]" strokeWidth={1.8} />
                  </a>
                ); })}
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t pt-6 text-[12.5px] text-white/40" style={{ borderColor: LINE }}>
            <span>{A.footer.legal}</span>
            <span className="flex items-center gap-2"><Icon name="Sparkles" size={14} />Built in Chennai, running in 20+ countries</span>
          </div>
        </div>
      </footer>

      <AboutLayoutNav dark />
    </div>
  );
}
