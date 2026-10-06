import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { toast } from "sonner";
import { useGoTo } from "./crmStore";

// Tailwind-only header. No react-bootstrap, no Bootstrap classes.
const LINKS = [
  { label: "Modules", target: "#modules" },
  { label: "Platform", target: "#features" },
  { label: "Customers", target: "#why" },
  { label: "Pricing", target: "#pricing" },
  { label: "Support", target: "#contact" },
];

export default function TwHeader({ variant = "light" }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const goTo = useGoTo();
  const glass = variant === "glass";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e, t) => {
    e.preventDefault();
    setOpen(false);
    goTo(t);
  };

  const shell = glass
    ? `fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "bg-slate-950/60 backdrop-blur-2xl ring-1 ring-white/10" : "bg-transparent"}`
    : `fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "bg-white/85 backdrop-blur-xl ring-1 ring-slate-900/5 shadow-sm" : "bg-white/60 backdrop-blur-md"}`;

  const brand = glass ? "text-white" : "text-slate-900";
  const link = glass ? "text-white/75 hover:text-white hover:bg-white/10" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100";
  const ghost = glass ? "bg-transparent text-white/80 hover:text-white hover:bg-white/10" : "bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100";
  const cta = glass ? "bg-white text-slate-900 hover:bg-white/90" : "bg-indigo-600 text-white hover:bg-indigo-500";
  const burger = glass ? "text-white" : "text-slate-900";

  return (
    <header className={shell} data-testid="tw-header">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-8 px-5 sm:px-8">
        <a href="#top" onClick={(e) => go(e, "#top")} className={`flex items-center gap-2.5 text-[17px] font-bold tracking-tight ${brand}`}>
          <img src="/ffh-logo.png" alt="FFH ERP" width="30" height="30" className="h-[30px] w-[30px] rounded-full" />
          <span>FFH<i className={`not-italic font-medium ${glass ? "text-amber-300" : "text-indigo-600"}`}>|</i>ERP</span>
        </a>

        <nav className="hidden flex-1 items-center gap-1 lg:flex">
          {LINKS.map((l) => (
            <a key={l.label} href={l.target} onClick={(e) => go(e, l.target)} data-testid={`tw-link-${l.label.toLowerCase()}`}
              className={`rounded-lg px-3.5 py-2 text-sm font-medium transition ${link}`}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <button type="button" onClick={() => toast("Sign-in is coming soon")} data-testid="tw-login"
            className={`rounded-lg px-3.5 py-2 text-sm font-medium transition ${ghost}`}>
            Log in
          </button>
          <button type="button" onClick={(e) => go(e, "#signup")} data-testid="tw-cta"
            className={`rounded-lg px-4 py-2.5 text-sm font-semibold transition ${cta}`}>
            Get started free
          </button>
        </div>

        <button type="button" onClick={() => setOpen(!open)} aria-label="Toggle menu" data-testid="tw-burger"
          className={`ml-auto rounded-lg bg-transparent p-2 lg:hidden ${burger}`}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className={`lg:hidden ${glass ? "bg-slate-950/85 backdrop-blur-2xl ring-1 ring-white/10" : "bg-white ring-1 ring-slate-900/5"}`} data-testid="tw-mobile-menu">
          <div className="mx-auto max-w-7xl px-5 pb-6 pt-2 sm:px-8">
            {LINKS.map((l) => (
              <a key={l.label} href={l.target} onClick={(e) => go(e, l.target)}
                className={`block rounded-lg px-3 py-3 text-sm font-medium ${glass ? "text-white/80 hover:bg-white/10" : "text-slate-700 hover:bg-slate-100"}`}>
                {l.label}
              </a>
            ))}
            <div className={`mt-4 flex gap-3 border-t pt-4 ${glass ? "border-white/15" : "border-slate-200"}`}>
              <button type="button" onClick={() => toast("Sign-in is coming soon")} className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-medium ${glass ? "bg-white/10 text-white" : "bg-slate-100 text-slate-700"}`}>Log in</button>
              <button type="button" onClick={(e) => go(e, "#signup")} className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-semibold ${cta}`}>Get started</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
