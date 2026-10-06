import React, { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { toast } from "sonner";
import { useGoTo } from "./crmStore";

// Tailwind rebuild of the reference navbar: a floating pill, brand left, centred
// links with caret menus, Log in and a dark "Book a meeting" pill on the right.
// `variant="glass"` frosts it for the Apple-glass layout.
const MENUS = {
  Solutions: [
    { label: "Sales & marketing", target: "#modules" },
    { label: "Finance & billing", target: "#modules" },
    { label: "AMC & support", target: "#modules" },
    { label: "Work & projects", target: "#modules" },
  ],
  Resources: [
    { label: "About us", target: "/about" },
    { label: "Our journey", target: "/about6" },
    { label: "Leadership", target: "/about9" },
    { label: "Case studies", target: "#why" },
  ],
};

export default function TwPillHeader({ variant = "light" }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const goTo = useGoTo();
  const glass = variant === "glass";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e, t) => {
    e.preventDefault();
    setOpen(false);
    goTo(t);
  };

  const pill = glass
    ? `bg-white/10 ring-1 ring-white/25 backdrop-blur-2xl ${scrolled ? "bg-white/15 shadow-2xl shadow-black/40" : ""}`
    : `bg-white ring-1 ring-slate-900/5 shadow-xl shadow-slate-900/10`;

  const brand = glass ? "text-white" : "text-slate-900";
  const accent = glass ? "text-amber-300" : "text-indigo-600";
  const link = glass
    ? "text-white/85 hover:bg-white/15 hover:text-white"
    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900";
  const ghost = glass
    ? "bg-transparent text-white/85 hover:bg-white/15 hover:text-white"
    : "bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900";
  const cta = glass ? "bg-white text-slate-900 hover:bg-white/90" : "bg-slate-900 text-white hover:bg-slate-800";
  const menuPanel = glass
    ? "bg-slate-900/90 ring-1 ring-white/15 backdrop-blur-2xl"
    : "bg-white ring-1 ring-slate-900/5";
  const menuText = glass ? "text-white/90" : "text-slate-800";
  const menuHover = glass ? "hover:bg-white/10" : "hover:bg-slate-50";
  const burger = glass ? "text-white" : "text-slate-900";

  const NavMenu = ({ label }) => (
    <div className="group relative hidden lg:block">
      <button type="button" className={`flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-medium transition ${link}`}>
        {label}
        <ChevronDown className="h-3.5 w-3.5 transition group-hover:rotate-180" />
      </button>
      <div className={`invisible absolute left-1/2 top-full z-10 mt-3 w-64 -translate-x-1/2 translate-y-1 rounded-2xl p-2 opacity-0 shadow-2xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 ${menuPanel}`}>
        {MENUS[label].map((m) => (
          <button key={m.label} type="button" onClick={(e) => go(e, m.target)}
            className={`block w-full rounded-xl px-3.5 py-2.5 text-left text-sm font-medium transition ${menuText} ${menuHover}`}>
            {m.label}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className={`fixed inset-x-0 top-4 z-50 flex justify-center px-4 transition-all ${scrolled ? "top-3" : "top-5"}`} data-testid="tw-pill">
      <nav className={`flex h-16 w-full max-w-6xl items-center gap-3 rounded-full py-2 pl-5 pr-2 transition-all sm:pl-6 ${pill}`}>
        <a href="#top" onClick={(e) => go(e, "#top")} className={`flex items-center gap-2.5 text-[17px] font-bold tracking-tight ${brand}`}>
          <img src="/ffh-logo.png" alt="FFH ERP" width="32" height="32" className="h-8 w-8 rounded-full" />
          <span>FFH<i className={`not-italic font-medium ${accent}`}>|</i>ERP</span>
        </a>

        <div className="hidden flex-1 items-center justify-center gap-1 lg:flex">
          <NavMenu label="Solutions" />
          <a href="#features" onClick={(e) => go(e, "#features")} className={`rounded-full px-4 py-2.5 text-sm font-medium transition ${link}`}>Platform</a>
          <a href="#modules" onClick={(e) => go(e, "#modules")} className={`rounded-full px-4 py-2.5 text-sm font-medium transition ${link}`}>Modules</a>
          <a href="#pricing" onClick={(e) => go(e, "#pricing")} className={`rounded-full px-4 py-2.5 text-sm font-medium transition ${link}`}>Pricing</a>
          <NavMenu label="Resources" />
        </div>

        <div className="ml-auto hidden items-center gap-2 lg:flex">
          <button type="button" onClick={() => toast("Sign-in is coming soon")} data-testid="pill-login"
            className={`rounded-full px-4 py-2.5 text-sm font-medium transition ${ghost}`}>
            Log in
          </button>
          <button type="button" onClick={(e) => go(e, "#contact")} data-testid="pill-cta"
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${cta}`}>
            Book a meeting
          </button>
        </div>

        <button type="button" aria-label="Toggle menu" onClick={() => setOpen(!open)} data-testid="pill-burger"
          className={`ml-auto rounded-full bg-transparent p-2.5 lg:hidden ${burger}`}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className={`absolute inset-x-4 top-[72px] rounded-3xl p-5 shadow-2xl lg:hidden ${menuPanel}`} data-testid="pill-mobile">
          <span className={`block px-3 pb-1 text-[10px] font-bold uppercase tracking-[0.2em] ${glass ? "text-white/40" : "text-slate-400"}`}>Solutions</span>
          {MENUS.Solutions.map((m) => (
            <button key={m.label} type="button" onClick={(e) => go(e, m.target)} className={`block w-full rounded-xl px-3 py-2.5 text-left text-sm font-medium ${menuText} ${menuHover}`}>{m.label}</button>
          ))}
          <span className={`mt-3 block px-3 pb-1 text-[10px] font-bold uppercase tracking-[0.2em] ${glass ? "text-white/40" : "text-slate-400"}`}>Company</span>
          {[["Platform", "#features"], ["Modules", "#modules"], ["Pricing", "#pricing"], ["Customers", "#why"]].map(([l, t]) => (
            <button key={l} type="button" onClick={(e) => go(e, t)} className={`block w-full rounded-xl px-3 py-2.5 text-left text-sm font-medium ${menuText} ${menuHover}`}>{l}</button>
          ))}
          <div className={`mt-4 flex gap-2 border-t pt-4 ${glass ? "border-white/15" : "border-slate-200"}`}>
            <button type="button" onClick={() => toast("Sign-in is coming soon")} className={`flex-1 rounded-full px-4 py-2.5 text-sm font-medium ${glass ? "bg-white/10 text-white" : "bg-slate-100 text-slate-700"}`}>Log in</button>
            <button type="button" onClick={(e) => go(e, "#contact")} className={`flex-1 rounded-full px-4 py-2.5 text-sm font-semibold ${cta}`}>Book a meeting</button>
          </div>
        </div>
      )}
    </div>
  );
}
