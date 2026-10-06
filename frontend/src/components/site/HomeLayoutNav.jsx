import React from "react";
import { Link, useLocation } from "react-router-dom";

// Switcher for the home layouts. Reuses the same pill styling as the About
// switcher; Home1 deliberately has no switcher so it stays as approved.
// Each layout is a real link that always opens in a NEW TAB, so two or three
// layouts can be compared side by side instead of navigating away. <Link> rather
// than a bare <a>: it writes the deploy basename into the href, so the links work
// when the site is served from a subpath (…/webapp_ffherp/home30). React Router
// only intercepts clicks for target="_self", so a new tab still opens natively.
const LAYOUTS = [
  { n: 1, path: "/home1" },
  { n: 2, path: "/home2" },
  { n: 3, path: "/home3" },
  { n: 4, path: "/home4" },
  { n: 5, path: "/home5" },
  { n: 6, path: "/home6" },
  { n: 7, path: "/home7" },
  { n: 8, path: "/home8" },
  { n: 9, path: "/home9" },
  { n: 10, path: "/home10" },
  { n: 11, path: "/home11" },
  { n: 12, path: "/home12" },
  { n: 13, path: "/home13" },
  { n: 14, path: "/home14" },
  { n: 15, path: "/home15" },
  { n: 16, path: "/home16" },
  { n: 17, path: "/home17" },
  { n: 18, path: "/home18" },
  { n: 20, path: "/home20" },
  { n: 21, path: "/home21" },
  { n: 22, path: "/home22" },
  { n: 23, path: "/home23" },
  { n: 24, path: "/home24" },
  { n: 25, path: "/home25" },
  { n: 26, path: "/home26" },
  { n: 27, path: "/home27" },
  { n: 28, path: "/home28" },
  { n: 29, path: "/home29" },
  { n: 30, path: "/home30" },
  { n: 31, path: "/home31" },
  { n: 32, path: "/home32" },
  { n: 33, path: "/home33" },
  { n: 34, path: "/home34" },
];

export default function HomeLayoutNav({ dark }) {
  const { pathname } = useLocation();

  return (
    <div className={`ffh-about-nav ffh-home-nav ${dark ? "dark" : ""}`} data-testid="home-layout-nav">
      <span>Home layouts</span>
      {LAYOUTS.map((l) => (
        <Link
          key={l.n}
          to={l.path}
          target="_blank"
          rel="noopener noreferrer"
          className={pathname === l.path ? "on" : ""}
          aria-label={`Home layout ${l.n} (opens in a new tab)`}
          title={`Home layout ${l.n} — opens in a new tab`}
          data-testid={`home-layout-${l.n}`}
        >
          {l.n}
        </Link>
      ))}
    </div>
  );
}
