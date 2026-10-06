import React, { useState } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { COUNTRY_CODES } from "../../mock";
import { useCRM } from "./crmStore";

// Tailwind-native trial form. Deliberately not the shared Bootstrap form — the
// Tailwind layouts must not pull in react-bootstrap at all. Same behaviour:
// validates, stores to localStorage under ffh_signups, logs to the CRM store and
// toasts. Carries the page's single #signup anchor.
const empty = { name: "", email: "", password: "", code: "+91", mobile: "", agree: false };

const GoogleIcon = () => (
  <svg viewBox="0 0 48 48" className="h-4 w-4" aria-hidden="true"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"/></svg>
);
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true"><rect width="24" height="24" rx="3" fill="#0A66C2"/><path fill="#fff" d="M7 9.5h2.5V18H7zM8.25 5.5a1.45 1.45 0 110 2.9 1.45 1.45 0 010-2.9zM11 9.5h2.4v1.2c.35-.65 1.2-1.35 2.5-1.35 2.6 0 3.1 1.7 3.1 3.9V18h-2.5v-4.1c0-1 0-2.2-1.35-2.2s-1.6 1.05-1.6 2.15V18H11z"/></svg>
);

export default function TwSignupForm({ variant = "light", title = "Start your flexible free trial" }) {
  const { log } = useCRM();
  const [f, setF] = useState(empty);
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const glass = variant === "glass";

  const set = (k) => (e) => setF({ ...f, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (!f.name.trim()) er.name = "Please enter your name";
    if (!/^\S+@\S+\.\S+$/.test(f.email)) er.email = "Enter a valid email";
    if (f.password.length < 6) er.password = "Min. 6 characters";
    if (!/^\d{7,12}$/.test(f.mobile)) er.mobile = "Enter a valid mobile number";
    if (!f.agree) er.agree = "Please accept the terms";
    setErrors(er);
    if (Object.keys(er).length) return;
    setLoading(true);
    setTimeout(() => {
      const list = JSON.parse(localStorage.getItem("ffh_signups") || "[]");
      list.push({ name: f.name, email: f.email, mobile: `${f.code} ${f.mobile}`, at: new Date().toISOString() });
      localStorage.setItem("ffh_signups", JSON.stringify(list));
      log(`Free trial signup: ${f.name} (${f.email})`);
      toast.success("Your 7-day free trial is ready!", { description: `Welcome aboard, ${f.name.split(" ")[0]}.` });
      setF(empty);
      setLoading(false);
    }, 900);
  };

  const label = `mb-1.5 block text-xs font-medium ${glass ? "text-white/70" : "text-slate-500"}`;
  const input = glass
    ? "w-full rounded-xl bg-white/10 px-4 py-3 text-sm text-white placeholder-white/45 ring-1 ring-white/25 outline-none transition focus:bg-white/15 focus:ring-2 focus:ring-white/60"
    : "w-full rounded-xl bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 ring-1 ring-slate-300 outline-none transition focus:ring-2 focus:ring-indigo-500";
  const err = "mt-1 text-xs text-rose-400";

  return (
    <div
      id="signup"
      data-testid="signup-card"
      className={glass
        ? "w-full max-w-lg rounded-3xl bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur-2xl sm:p-8"
        : "w-full max-w-lg rounded-3xl bg-white p-6 ring-1 ring-slate-200 shadow-xl shadow-slate-900/5 sm:p-8"}
    >
      <h2 className={`text-xl font-semibold tracking-tight sm:text-2xl ${glass ? "text-white" : "text-slate-900"}`}>{title}</h2>
      <p className={`mt-1 text-sm ${glass ? "text-white/60" : "text-slate-500"}`}>No credit card. Setup in a day. Cancel any time.</p>

      <form onSubmit={submit} noValidate data-testid="signup-form" className="mt-6 space-y-4">
        <div>
          <label className={label} htmlFor="tw-name">Full name</label>
          <input id="tw-name" className={input} placeholder="Your name" value={f.name} onChange={set("name")} data-testid="signup-name" />
          {errors.name && <p className={err}>{errors.name}</p>}
        </div>

        <div>
          <label className={label} htmlFor="tw-email">Work email</label>
          <input id="tw-email" type="email" className={input} placeholder="you@company.com" value={f.email} onChange={set("email")} data-testid="signup-email" />
          {errors.email && <p className={err}>{errors.email}</p>}
        </div>

        <div>
          <label className={label} htmlFor="tw-pass">Password</label>
          <div className="relative">
            <input id="tw-pass" type={show ? "text" : "password"} className={input} placeholder="Min. 6 characters" value={f.password} onChange={set("password")} data-testid="signup-password" />
            <button type="button" onClick={() => setShow(!show)} aria-label="Toggle password" data-testid="signup-password-toggle"
              className={`absolute inset-y-0 right-3 my-auto h-6 w-6 bg-transparent ${glass ? "text-white/60 hover:text-white" : "text-slate-400 hover:text-slate-600"}`}>
              {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          {errors.password && <p className={err}>{errors.password}</p>}
        </div>

        <div>
          <label className={label} htmlFor="tw-mobile">Mobile</label>
          <div className="flex gap-3">
            <select className={`${input} w-24`} value={f.code} onChange={set("code")} data-testid="signup-country-code">
              {COUNTRY_CODES.map((c) => <option key={c} className="text-slate-900">{c}</option>)}
            </select>
            <input id="tw-mobile" className={input} placeholder="Mobile number" value={f.mobile}
              onChange={(e) => setF({ ...f, mobile: e.target.value.replace(/\D/g, "") })} data-testid="signup-mobile" />
          </div>
          {errors.mobile && <p className={err}>{errors.mobile}</p>}
        </div>

        <label className={`flex items-start gap-2.5 text-xs leading-relaxed ${glass ? "text-white/70" : "text-slate-500"}`}>
          <input type="checkbox" checked={f.agree} onChange={set("agree")} data-testid="signup-agree"
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
          <span>I agree to the <a href="#terms" onClick={(e) => e.preventDefault()} className={glass ? "text-white underline" : "text-indigo-600 underline"}>Terms of Service</a> and <a href="#privacy" onClick={(e) => e.preventDefault()} className={glass ? "text-white underline" : "text-indigo-600 underline"}>Privacy Policy</a>.</span>
        </label>
        {errors.agree && <p className={err}>{errors.agree}</p>}

        <button type="submit" disabled={loading} data-testid="signup-submit"
          className={`flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition disabled:opacity-70 ${glass ? "bg-white text-slate-900 hover:bg-white/90" : "bg-indigo-600 text-white hover:bg-indigo-500"}`}>
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Create my free account"}
        </button>

        <div className={`flex items-center gap-3 text-xs ${glass ? "text-white/50" : "text-slate-400"}`}>
          <span className={`h-px flex-1 ${glass ? "bg-white/20" : "bg-slate-200"}`} />or sign in using<span className={`h-px flex-1 ${glass ? "bg-white/20" : "bg-slate-200"}`} />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button type="button" onClick={() => toast("Google sign-in coming soon")} data-testid="signup-google"
            className={`flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium ring-1 transition ${glass ? "bg-white/10 text-white ring-white/25 hover:bg-white/20" : "bg-white text-slate-700 ring-slate-300 hover:bg-slate-50"}`}>
            <GoogleIcon /> Google
          </button>
          <button type="button" onClick={() => toast("LinkedIn sign-in coming soon")} data-testid="signup-linkedin"
            className={`flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium ring-1 transition ${glass ? "bg-white/10 text-white ring-white/25 hover:bg-white/20" : "bg-white text-slate-700 ring-slate-300 hover:bg-slate-50"}`}>
            <LinkedInIcon /> LinkedIn
          </button>
        </div>
      </form>
    </div>
  );
}
