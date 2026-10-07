import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

// All four About layouts, so the variants can be compared side by side.
// About1 is intentionally left untouched (no switcher inside it) but is
// reachable from here.
const LAYOUTS = [
  { n: 1, path: "/about1" },
  { n: 2, path: "/about2" },
  { n: 3, path: "/about3" },
  { n: 4, path: "/about4" },
  { n: 5, path: "/about5" },
  { n: 6, path: "/about6" },
  { n: 7, path: "/about7" },
  { n: 8, path: "/about8" },
  { n: 9, path: "/about9" },
  { n: 10, path: "/about10" },
  { n: 11, path: "/about11" },
  { n: 12, path: "/about12" },
  { n: 13, path: "/about13" },
  { n: 14, path: "/about14" },
  { n: 15, path: "/about15" },
  { n: 16, path: "/about16" },
  { n: 17, path: "/about17" },
  { n: 18, path: "/about18" },
  { n: 19, path: "/about19" },
  { n: 20, path: "/about20" },
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
