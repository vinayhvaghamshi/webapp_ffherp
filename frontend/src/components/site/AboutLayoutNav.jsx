import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

// All four About layouts, so the variants can be compared side by side.
// About1 is intentionally left untouched (no switcher inside it) but is
// reachable from here.
// Branch 8octo: layout 20 is the only About layout in this build.
// main ships two pages, so this switcher is the site's Home / About nav.
const LAYOUTS = [
  { n: 20, path: "/about20", label: "About" },
  { n: 39, path: "/home39", label: "Home" },
];

export default function AboutLayoutNav({ dark }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className={`ffh-about-nav ${dark ? "dark" : ""}`} data-testid="about-layout-nav">
      <span>Pages</span>
      {LAYOUTS.map((l) => (
        <button
          key={l.label || l.n}
          type="button"
          className={pathname === l.path ? "on" : ""}
          onClick={() => navigate(l.path)}
          aria-label={`About layout ${l.label || l.n}`}
          data-testid={`about-layout-${l.n}`}
        >
          {l.label || l.n}
        </button>
      ))}
    </div>
  );
}
