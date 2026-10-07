import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { toast } from "sonner";
import { useGoTo } from "./crmStore";

// Flat application bar for layout 20 — white surface, 1px bottom border, small
// 4px radii, blue primary button: the Zerodha/Kite header idiom.
const LINKS = [
  { label: "Modules", target: "#modules" },
  { label: "Features", target: "#features" },
  { label: "Pricing", target: "#pricing" },
  { label: "Customers", target: "#testimonials" },
  { label: "Support", target: "#contact" },
];

const TABS = [
  { label: "Dashboard", target: "#top" },
  { label: "Modules", target: "#modules" },
  { label: "Pricing", target: "#pricing" },
  { label: "Support", target: "#contact" },
];

export default function HeaderApp() {
  const [open, setOpen] = useState(false);
  const goTo = useGoTo();

  const go = (e, target) => {
    e.preventDefault();
    setOpen(false);
    goTo(target);
  };

  return (
    <header className="ffh-app-bar" data-testid="app-header">
      <div className="ffh-app-bar-top">
        <div className="ffh-app-bar-inner">
          <a className="ffh-app-brand" href="#top" onClick={(e) => go(e, "#top")}>
            <img src={`${process.env.PUBLIC_URL}/ffh-logo.png`} alt="FFH ERP" width="28" height="28" decoding="async" fetchpriority="high" />
            <span>FFH<i>|</i>ERP</span>
          </a>
          <nav className="ffh-app-links">
            {LINKS.map((l) => (
              <a key={l.label} href={l.target} onClick={(e) => go(e, l.target)} data-testid={`app-link-${l.label.toLowerCase()}`}>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="ffh-app-actions">
            <button type="button" className="ffh-app-login" onClick={() => toast("Sign-in is coming soon")} data-testid="app-login">
              Login
            </button>
            <button type="button" className="ffh-app-signup" onClick={(e) => go(e, "#signup")} data-testid="app-signup">
              Sign up now
            </button>
          </div>
          <button type="button" className="ffh-app-burger" aria-label="Toggle menu" onClick={() => setOpen(!open)} data-testid="app-burger">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        <nav className="ffh-app-tabs" aria-label="Sections">
          {TABS.map((t) => (
            <a key={t.label} href={t.target} onClick={(e) => go(e, t.target)}>
              {t.label}
            </a>
          ))}
        </nav>
      </div>
      {open && (
        <div className="ffh-app-mobile" data-testid="app-mobile-menu">
          {LINKS.map((l) => (
            <a key={l.label} href={l.target} onClick={(e) => go(e, l.target)}>{l.label}</a>
          ))}
          <div className="ffh-app-mobile-actions">
            <button type="button" className="ffh-app-login" onClick={() => toast("Sign-in is coming soon")}>Login</button>
            <button type="button" className="ffh-app-signup" onClick={(e) => go(e, "#signup")}>Sign up now</button>
          </div>
        </div>
      )}
    </header>
  );
}
