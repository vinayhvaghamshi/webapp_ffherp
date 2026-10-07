import React, { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Headphones, MessageCircle, Send, User, X } from "lucide-react";
import { toast } from "sonner";
import { buildProspectPayload, sendProspect } from "../../api/ffhWebhook";

// Floating customer-support widget, modelled on the SalesIQ layout: a round
// bubble that opens a titled panel with the logo, a short form (email and
// department required) and a "Driven by" footer.
//
// Self-contained and free: there is no backend on GitHub Pages, so a message is
// kept in localStorage and confirmed with a toast. Drop in a real provider's
// embed snippet to replace it (see the note in the footer).
const DEPARTMENTS = ["Sales", "Support", "Billing", "AMC & service", "Careers", "Something else"];
const EMPTY = { name: "", email: "", department: "", message: "" };

// Module scope on purpose: reset by a page load/refresh, kept across remounts.
let greetedThisPageLoad = false;

export default function SupportChat() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [f, setF] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [saved, setSaved] = useState([]);
  const [picked, setPicked] = useState("");
  const firstField = useRef(null);

  // Saved people, read from the same places the site already writes: the signup
  // form (ffh_signups) and earlier chats (ffh_support_threads). Newest first,
  // one entry per email.
  const loadSaved = () => {
    let list = [];
    try {
      const read = (k) => { try { return JSON.parse(localStorage.getItem(k) || "[]"); } catch (_) { return []; } };
      const byEmail = new Map();
      [...read("ffh_support_threads"), ...read("ffh_signups")].forEach((r) => {
        const email = String(r.email || "").trim();
        if (!email) return;
        const key = email.toLowerCase();
        const at = r.at || "";
        const prev = byEmail.get(key);
        if (!prev) byEmail.set(key, { name: r.name || "", email, department: r.department || "", at });
        else {
          if (at > (prev.at || "")) { prev.at = at; prev.name = r.name || prev.name; }
          if (!prev.department && r.department) prev.department = r.department;
          if (!prev.name && r.name) prev.name = r.name;
        }
      });
      list = [...byEmail.values()].sort((a, b) => String(b.at).localeCompare(String(a.at))).slice(0, 6);
    } catch (_) { list = []; }
    setSaved(list);
    return list;
  };

  const applySaved = (s) => {
    setF((p) => ({ ...p, name: s.name || p.name, email: s.email, department: s.department || p.department }));
    setPicked(s.email);
    setErrors({});
  };
  const clearSaved = () => { setF(EMPTY); setPicked(""); setErrors({}); };

  const set = (k) => (e) => {
    const v = e.target.value;
    setF((p) => ({ ...p, [k]: v }));
    setErrors((p) => ({ ...p, [k]: "" }));
  };

  // Greet on every page load: the panel opens itself shortly after the page
  // settles, including after a refresh. The flag lives in module scope, so it
  // survives client-side navigation (Home37 -> another layout -> back) and stops
  // the panel re-opening there, while a real reload resets it and greets again.
  // Closing it keeps it closed until the next load.
  useEffect(() => {
    if (greetedThisPageLoad) return undefined;
    greetedThisPageLoad = true;
    const timer = setTimeout(() => setOpen(true), 1900);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    const list = loadSaved();
    // auto-fill from the most recent saved address, but never overwrite typing
    setF((cur) => (cur.email || cur.name || !list[0] ? cur
      : { ...EMPTY, name: list[0].name, email: list[0].email, department: list[0].department || "" }));
    if (list[0]) setPicked(list[0].email);
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    const t = setTimeout(() => firstField.current && firstField.current.focus(), 140);
    return () => { window.removeEventListener("keydown", onKey); clearTimeout(t); };
  }, [open]);   // eslint-disable-line react-hooks/exhaustive-deps

  const submit = (e) => {
    e.preventDefault();
    const err = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) err.email = "Please enter a valid email address.";
    if (!f.department) err.department = "Please choose a department.";
    setErrors(err);
    if (Object.keys(err).length) return;
    // token "chat" — the department travels in `company` (see data/apis_data.txt)
    const payload = buildProspectPayload({
      token: "chat",
      company: f.department,
      name: f.name.trim(),
      mobile: "",
      email: f.email.trim(),
      message: f.message.trim(),
      interestedIn: "",
    });
    setSending(true);
    sendProspect(payload).then((r) => {
      setSending(false);
      if (!r.ok) {
        setErrors({ email: r.error === "timeout" ? "The server did not respond. Please try again." : "We could not send this just now. Please try again." });
        toast.error("Could not reach the CRM", { description: `Status ${r.status || "—"} ${r.error || r.body || ""}`.trim() });
        return;
      }
      try {
        const key = "ffh_support_threads";
        const prev = JSON.parse(localStorage.getItem(key) || "[]");
        prev.push({ ...f, at: new Date().toISOString() });
        localStorage.setItem(key, JSON.stringify(prev));
      } catch (_) { /* storage may be unavailable; the toast still confirms */ }
      setPicked(f.email);
      loadSaved();
      setSent(true);
      toast.success("Message received — our team will get back to you.");
    });
  };

  const restart = () => { setF(EMPTY); setErrors({}); setSent(false); };
  const field = "w-full rounded-xl bg-white px-3.5 py-3 text-[14px] text-slate-900 placeholder-slate-400 outline-none transition ring-1 ring-slate-300 focus:ring-2 focus:ring-[#ef7b23]";
  const label = "mb-1.5 block text-[12.5px] font-semibold text-slate-700";

  return (
    <>
      {/* panel */}
      <div
        data-testid="support-panel"
        aria-hidden={!open}
        className={`fixed bottom-[100px] right-6 z-[60] w-[min(92vw,368px)] max-h-[calc(100dvh-152px)] sm:bottom-[104px] sm:right-8 origin-bottom-right overflow-y-auto overscroll-contain rounded-2xl bg-white shadow-[0_40px_90px_-30px_rgba(15,23,42,.5)] ring-1 ring-black/5 transition-all duration-300 ${
          open ? "pointer-events-auto translate-y-0 scale-100 opacity-100" : "pointer-events-none translate-y-3 scale-90 opacity-0"
        }`}
      >
        <div className="sticky top-0 z-10 flex items-center gap-3 px-4 py-4 text-white" style={{ background: "linear-gradient(120deg,#16283c,#0b1a29)" }}>
          <button onClick={() => setOpen(false)} aria-label="Close support chat" data-testid="support-back"
            className="rounded-full p-1 transition hover:bg-white/15">
            <ChevronDown className="h-5 w-5" />
          </button>
          <img src={`${process.env.PUBLIC_URL}/ffh-logo.png`} alt="" width="38" height="38"
            className="h-[38px] w-[38px] rounded-full bg-white object-contain p-[3px]" />
          <span className="flex-1">
            <strong className="block text-[15px] font-semibold leading-tight">Chat with us now</strong>
            <span className="flex items-center gap-1.5 text-[12px] text-white/70">
              <i className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />Typically replies in a few hours
            </span>
          </span>
        </div>

        {sent ? (
          <div className="px-5 py-8 text-center" data-testid="support-sent">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full" style={{ background: "#fdeedd", color: "#cf5f12" }}>
              <Check className="h-7 w-7" strokeWidth={2.6} />
            </span>
            <h4 className="mt-4 text-[17px] font-semibold" style={{ color: "#16283c" }}>Thanks — message received</h4>
            <p className="mx-auto mt-2 max-w-[260px] text-[13.5px] leading-relaxed text-slate-500">
              Our {f.department || "support"} team will reply to <strong className="text-slate-700">{f.email}</strong> within one business day.
            </p>
            <button onClick={restart} data-testid="support-again"
              className="mt-5 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13.5px] font-semibold text-white"
              style={{ background: "linear-gradient(135deg,#f7a52a,#f0452c)" }}>
              Start a new chat
            </button>
          </div>
        ) : (
          <form onSubmit={submit} noValidate data-testid="support-form" className="px-4 py-4 sm:px-5 sm:py-5">
            {saved.length > 0 && (
              <div className="mb-4 rounded-xl px-3 py-2.5" style={{ background: "#fff6ec", border: "1px solid #f4e2ce" }} data-testid="support-saved">
                <div className="flex items-center gap-2">
                  <User className="h-3.5 w-3.5" style={{ color: "#cf5f12" }} />
                  <span className="text-[12px] font-semibold" style={{ color: "#cf5f12" }}>Saved details</span>
                  <button type="button" onClick={clearSaved} data-testid="support-saved-clear"
                    className="ml-auto text-[11.5px] font-medium text-slate-500 underline transition hover:text-[#cf5f12]">Clear</button>
                </div>
                <div className="mt-2 flex max-h-[104px] flex-wrap gap-1.5 overflow-y-auto">
                  {saved.map((sv, i) => {
                    const on = picked && picked.toLowerCase() === sv.email.toLowerCase();
                    return (
                      <button key={sv.email} type="button" onClick={() => applySaved(sv)} title={sv.email}
                        data-testid={`support-saved-${i}`} data-picked={on ? "true" : "false"}
                        className="group flex max-w-full flex-col items-start rounded-lg px-2.5 py-1.5 text-left transition-all duration-200 hover:-translate-y-0.5"
                        style={on
                          ? { background: "linear-gradient(135deg,#f7a52a,#f0452c)", border: "1px solid transparent" }
                          : { background: "#fff", border: "1px solid #f4e2ce" }}>
                        <span className="max-w-[190px] truncate text-[12.5px] font-semibold" style={{ color: on ? "#fff" : "#16283c" }}>
                          {sv.name || sv.email}
                        </span>
                        <span className="max-w-[190px] truncate text-[11px]" style={{ color: on ? "rgba(255,255,255,.85)" : "#9ca3af" }}>
                          {sv.email}{sv.department ? ` · ${sv.department}` : ""}
                        </span>
                      </button>
                    );
                  })}
                </div>
                <p className="mt-2 text-[11px] text-slate-400">Pick one to fill the form, or type fresh details below.</p>
              </div>
            )}
            <div>
              <label className={label} htmlFor="support-name">Full name</label>
              <input id="support-name" ref={firstField} data-testid="support-name" autoComplete="name" value={f.name} onChange={set("name")} className={field} placeholder="Enter your full name" />
            </div>
            <div className="mt-4">
              <label className={label} htmlFor="support-email">Email address <span className="text-[#f0452c]">*</span></label>
              <input id="support-email" data-testid="support-email" type="email" autoComplete="email" value={f.email} onChange={set("email")} className={field} placeholder="Enter your email address" />
              {errors.email && <p className="mt-1 text-[12px] text-[#f0452c]" data-testid="support-email-error">{errors.email}</p>}
            </div>
            <div className="mt-4">
              <label className={label} htmlFor="support-department">Department <span className="text-[#f0452c]">*</span></label>
              <div className="relative">
                <select id="support-department" data-testid="support-department" value={f.department} onChange={set("department")}
                  className={`${field} appearance-none pr-10 ${f.department ? "" : "text-slate-400"}`}>
                  <option value="">Choose a department</option>
                  {DEPARTMENTS.map((d) => <option key={d} value={d} className="text-slate-900">{d}</option>)}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              </div>
              {errors.department && <p className="mt-1 text-[12px] text-[#f0452c]" data-testid="support-department-error">{errors.department}</p>}
            </div>
            <div className="mt-4">
              <label className={label} htmlFor="support-message">Message</label>
              <textarea id="support-message" data-testid="support-message" rows={3} value={f.message} onChange={set("message")}
                className={`${field} resize-none`} placeholder="Type your message and hit 'Start Chat'" />
            </div>
            <button type="submit" data-testid="support-submit" disabled={sending}
              className="group mt-5 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-[14.5px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: "linear-gradient(135deg,#f7a52a,#f0452c)" }}>
              <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />{sending ? "Sending…" : "Start Chat"}
            </button>
            <p className="mt-3 flex items-center justify-center gap-1.5 text-[12px] text-slate-400">
              <Headphones className="h-3.5 w-3.5" />Driven by <strong className="font-semibold text-slate-500">FFH|ERP Support</strong>
            </p>
          </form>
        )}
      </div>

      {/* bubble */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={open ? "Close support chat" : "Open support chat"}
        data-testid="support-bubble"
        className="group fixed bottom-8 right-6 z-[61] flex h-14 w-14 items-center justify-center rounded-full text-white shadow-[0_18px_40px_-12px_rgba(15,23,42,.6)] transition-all duration-300 hover:scale-105 active:scale-95 sm:right-8 sm:h-[58px] sm:w-[58px]"
        style={{ background: open ? "#16283c" : "linear-gradient(135deg,#f7a52a,#f0452c)" }}
      >
        {!open && <span className="ffh-support-ping" aria-hidden="true" />}
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6 transition-transform duration-300 group-hover:-rotate-6" />}
      </button>
    </>
  );
}
