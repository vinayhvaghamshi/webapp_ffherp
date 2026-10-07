import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

// All four About layouts, so the variants can be compared side by side.
// About1 is intentionally left untouched (no switcher inside it) but is
// reachable from here.
// Branch 8octo: layout 20 is the only About layout in this build.
const LAYOUTS = [
  { n: 20, path: "/about20" },
  { n: 39, path: "/home39" },
];

export default function AboutLayoutNav({ dark }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className={`ffh-about-nav ${dark ? "dark" : ""}`} data-testid="about-layout-nav">
      <span>About layouts</span>
      {LAYOUTS.map((l) => (
        <button
          key={l.n}
          type="button"
          className={pathname === l.path ? "on" : ""}
          onClick={() => navigate(l.path)}
          aria-label={`About layout ${l.n}`}
          data-testid={`about-layout-${l.n}`}
        >
          {l.n}
        </button>
      ))}
    </div>
  );
}
