import React, { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { toast } from "sonner";
import { NAV_LINKS, HOME16_HERO } from "../../mock";
import { useGoTo } from "./crmStore";

// Floating pill navigation, styled after the reference: brand left, centred
// links with caret menus, Log in and a dark "Book a meeting" pill on the right.
// Used only by Home16 — every other page keeps the standard header.
export default function HeaderPill({ variant }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const goTo = useGoTo();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e, target) => {
    e.preventDefault();
    setOpen(false);
    goTo(target);
  };

  const MenuGroup = ({ label, items }) => (
    <div className="ffh-pill-item">
      <button type="button" className="ffh-pill-link" aria-haspopup="true">
        {label} <ChevronDown size={14} className="ffh-pill-caret" />
      </button>
      <div className="ffh-pill-menu" role="menu">
        {items.map((m) => (
          <button key={m.label} type="button" role="menuitem" onClick={(e) => go(e, m.target)} data-testid={`pill-menu-${m.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}>
            <strong>{m.label}</strong>
            <small>{m.desc}</small>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className={`ffh-pill-wrap ${variant ? `glass ${variant === "glass-dark" ? "glass-dark" : ""}` : ""} ${scrolled ? "scrolled" : ""}`} data-testid="pill-navbar">
      <nav className="ffh-pill">
        <a className="ffh-pill-brand" href="#top" onClick={(e) => go(e, "#top")} data-testid="pill-brand">
          <img src="/ffh-logo.png" alt="FFH ERP" width="34" height="34" decoding="async" fetchpriority="high" />
          <span>FFH<i>|</i>ERP</span>
        </a>

        <div className="ffh-pill-links">
          <MenuGroup label="Modules" items={HOME16_HERO.menu.modules} />
          {NAV_LINKS.filter((l) => ["Features", "Pricing", "Contact"].includes(l.label)).map((l) => (
            <a key={l.label} className="ffh-pill-link" href={l.href} onClick={(e) => go(e, l.href)} data-testid={`pill-link-${l.label.toLowerCase()}`}>
              {l.label}
            </a>
          ))}
          <a className="ffh-pill-link" href="#testimonials" onClick={(e) => go(e, "#testimonials")} data-testid="pill-link-customers">
            Customers
          </a>
          <MenuGroup label="Resources" items={HOME16_HERO.menu.resources} />
        </div>

        <div className="ffh-pill-actions">
          <button type="button" className="ffh-pill-login" onClick={() => toast("Sign-in is coming soon")} data-testid="pill-login">
            Log in
          </button>
          <button type="button" className="ffh-pill-cta" onClick={(e) => go(e, "#contact")} data-testid="pill-cta">
            Book a meeting
          </button>
        </div>

        <button type="button" className="ffh-pill-burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)} data-testid="pill-burger">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="ffh-pill-mobile" data-testid="pill-mobile-menu">
          <span className="ffh-pill-mobile-tag">Modules</span>
          {HOME16_HERO.menu.modules.map((m) => (
            <button key={m.label} type="button" onClick={(e) => go(e, m.target)}>{m.label}</button>
          ))}
          <span className="ffh-pill-mobile-tag">Company</span>
          {NAV_LINKS.map((l) => (
            <button key={l.label} type="button" onClick={(e) => go(e, l.href)}>{l.label}</button>
          ))}
          <span className="ffh-pill-mobile-tag">Resources</span>
          {HOME16_HERO.menu.resources.map((m) => (
            <button key={m.label} type="button" onClick={(e) => go(e, m.target)}>{m.label}</button>
          ))}
          <div className="ffh-pill-mobile-actions">
            <button type="button" className="ffh-pill-login" onClick={() => toast("Sign-in is coming soon")}>Log in</button>
            <button type="button" className="ffh-pill-cta" onClick={(e) => go(e, "#contact")}>Book a meeting</button>
          </div>
        </div>
      )}
    </div>
  );
}
