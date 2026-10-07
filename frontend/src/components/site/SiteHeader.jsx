import React, { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useGoTo } from "./crmStore";

// The site navigator: one header, used by both the home page and the About page,
// so the two pages carry an identical nav.
//
//   Home            #top        the top of the home page
//   About Us        /about      the About route
//   Service         #features   a section on the home page
//   Project         #modules    a section on the home page
//   Pricing Table   #pricing    a section on the home page
//   Contact Us      #contact    the gradient button on the right, last
//
// The four section links work from either page: goTo routes home and the home
// page scrolls to the section once it mounts. The active tab follows what you
// are reading — the home sections, or About Us while you are on the About page.
const BRAND = "#ef7b23";
const BRAND_DARK = "#cf5f12";
const NAVY = "#16283c";
const SOFT = "#fff6ec";
const LINE = "#f4e2ce";
const GRAD = "bg-gradient-to-r from-[#f7a52a] to-[#f0452c]";

export const NAV = [
  { label: "Home", target: "#top" },
  { label: "About Us", target: "/about" },
  { label: "Service", target: "#features" },
  { label: "Project", target: "#modules" },
  { label: "Pricing Table", target: "#pricing" },
];

const Motif = ({ className = "" }) => (
  <span className={`ffh-h39-motif ${className}`} aria-hidden="true"><i /><i /><i /><i /></span>
);

export default function SiteHeader() {
  const goTo = useGoTo();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("#top");
  const onAbout = pathname.startsWith("/about");

  // the highlight follows the section you are reading
  useEffect(() => {
    const map = onAbout
      ? { top: "/about", apart: "/about" }
      : { top: "#top", features: "#features", modules: "#modules", pricing: "#pricing" };
    setActiveNav(onAbout ? "/about" : "#top");
    const els = Object.keys(map).map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;
    const io = new IntersectionObserver((entries) => {
      const on = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (on) setActiveNav(map[on.target.id] || (onAbout ? "/about" : "#top"));
    }, { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.2, 0.5, 1] });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [onAbout]);

  const go = (e, t) => { e.preventDefault(); setOpen(false); goTo(t); };

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md" style={{ borderColor: LINE }} data-testid="h39-nav" data-site-header="true">
      <div className="mx-auto flex h-[70px] max-w-[1400px] items-center gap-6 px-5 sm:px-8">
        <a href="#top" onClick={(e) => go(e, "#top")} className="flex items-center gap-3">
          <img src={`${process.env.PUBLIC_URL}/ffh-logo.png`} alt="FFH ERP" width="34" height="34" className="h-[34px] w-[34px] rounded-full" />
          <Motif />
          <span className="text-[19px] font-bold tracking-tight" style={{ color: NAVY }}>FFH|ERP</span>
        </a>
        <nav className="mx-auto hidden items-center gap-1 lg:flex" data-testid="h39-navlinks">
          {NAV.map((l) => {
            const on = activeNav === l.target;
            return (
              <a key={l.label} href={l.target} onClick={(e) => go(e, l.target)}
                data-testid={`h39-nav-${l.label.toLowerCase().replace(/\s+/g, "-")}`} data-active={on ? "true" : "false"}
                className="group relative rounded-full px-4 py-2 text-[13.5px] font-medium transition-all duration-300 hover:-translate-y-0.5"
                style={{ color: on ? BRAND_DARK : NAVY }}>
                {/* soft wash that pops in behind the label (classes drive the transform) */}
                <span className={`absolute inset-0 rounded-full transition-all duration-300 ${on ? "scale-100 opacity-100" : "scale-[.88] opacity-[0] group-hover:scale-100 group-hover:opacity-100"}`}
                  style={{ background: on ? "#fdeedd" : SOFT }} />
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#cf5f12]">{l.label}</span>
                {/* line only on the tab you are actually on */}
                <span className={`absolute bottom-1 left-4 right-4 h-[2px] origin-left rounded-full transition-transform duration-500 ${on ? "scale-x-100" : "scale-x-0"}`}
                  style={{ background: `linear-gradient(90deg, ${BRAND}, ${BRAND_DARK})` }} />
              </a>
            );
          })}
        </nav>
        <button onClick={(e) => go(e, "#contact")} data-testid="h39-cta"
          className={`ml-auto hidden items-center gap-2 rounded-full ${GRAD} px-5 py-3 text-[13.5px] font-semibold text-white ring-1 ring-inset ring-white/30 transition-all duration-300 hover:brightness-110 hover:ring-white/60 lg:inline-flex`}>
          Contact Us <ArrowUpRight className="h-4 w-4" />
        </button>
        <button onClick={() => setOpen(!open)} aria-label="Toggle menu" data-testid="h39-burger"
          className="ml-auto bg-transparent p-2 lg:hidden" style={{ color: NAVY }}>{open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</button>
      </div>
      <div className={`grid transition-[grid-template-rows] duration-500 ease-out lg:hidden`} style={{ gridTemplateRows: open ? "1fr" : "0fr" }}>
        <div className="overflow-hidden">
          <div className={`bg-white px-5 pb-6 pt-2 transition-opacity duration-300 ${open ? "opacity-100" : "pointer-events-none opacity-[0]"}`} style={{ borderTop: `1px solid ${LINE}` }}>
          {NAV.map((l) => (
            <a key={l.label} href={l.target} onClick={(e) => go(e, l.target)} className="block py-3 text-sm font-medium" style={{ color: NAVY }}>{l.label}</a>
          ))}
          <button onClick={(e) => go(e, "#contact")} className={`mt-3 w-full rounded-full ${GRAD} px-5 py-3 text-sm font-semibold text-white`}>Contact Us</button>
          </div>
        </div>
      </div>
    </header>
  );
}
