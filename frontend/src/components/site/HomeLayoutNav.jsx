import React from "react";
import { Link, useLocation } from "react-router-dom";

// Switcher for the home layouts. Reuses the same pill styling as the About
// switcher; Home1 deliberately has no switcher so it stays as approved.
// Each layout is a real link that always opens in a NEW TAB, so two or three
// layouts can be compared side by side instead of navigating away. <Link> rather
// than a bare <a>: it writes the deploy basename into the href, so the links work
// when the site is served from a subpath (…/webapp_ffherp/home30). React Router
// only intercepts clicks for target="_self", so a new tab still opens natively.
// Branch 8octo: layout 39 is the only home layout in this build.
const LAYOUTS = [
  { n: 39, path: "/home39" },
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
