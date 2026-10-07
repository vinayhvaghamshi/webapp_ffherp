import React from "react";
import { Link, useLocation } from "react-router-dom";

// Site switcher. On the 8octo branch this listed every home layout and opened
// each in a new tab so they could be compared side by side; on main there are
// only two pages, so it is a plain same-tab nav between them: layout 39 is the
// home page and layout 20 is the About page. <Link> writes the deploy basename
// into the href, so it still works when served from a subpath.
const LAYOUTS = [
  { n: 39, path: "/home39", label: "Home" },
  { n: 20, path: "/about20", label: "About" },
];

export default function HomeLayoutNav({ dark }) {
  const { pathname } = useLocation();

  return (
    <div className={`ffh-about-nav ffh-home-nav ${dark ? "dark" : ""}`} data-testid="home-layout-nav">
      <span>Pages</span>
      {LAYOUTS.map((l) => (
        <Link
          key={l.label || l.n}
          to={l.path}
          className={pathname === l.path ? "on" : ""}
          aria-label={`${l.label || l.n} page`}
          title={`${l.label || l.n}`}
          data-testid={`home-layout-${l.n}`}
        >
          {l.label || l.n}
        </Link>
      ))}
    </div>
  );
}
