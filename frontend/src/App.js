import React, { useEffect, useLayoutEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Toaster } from "./components/ui/sonner";
import Home39 from "./components/site/Home39";
import About20 from "./components/site/About20";
import { CRMProvider } from "./components/site/crmStore";

// ---------------------------------------------------------------------------
// Branch "8octo" — a trimmed build of the project.
//
// Only the two latest pages are wired up: layout 39 (the home page) and layout
// 20 (the About page). Every other layout that used to live here has been
// removed, so the bundle only ships what these two pages need. The tooling is
// untouched: CRA 5 + craco, Tailwind 3, Bootstrap, the same package.json.
//
//   /             -> the home page (the URL stays at the site root)
//   /home39       -> the same page, kept so old links still work
//   /about        -> the About page, reached by clicking About
//   /about20      -> the same page, kept so old links still work
//   anything else -> the home page
//
// Both layouts bring their own header, footer and support chat, so the shared
// Bootstrap Header/Footer are not used here at all.
// ---------------------------------------------------------------------------

function useReveal(routeKey) {
  // Runs before the first paint: anything already in the viewport (the hero) is shown
  // straight away instead of waiting for an IntersectionObserver callback plus a fade,
  // which used to leave the headline invisible for the first ~1.5s. Re-runs on route
  // change so a freshly mounted page gets the same treatment.
  useLayoutEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );

    const scan = () => {
      const vh = window.innerHeight || 800;
      document.querySelectorAll(".reveal:not(.in)").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < vh * 1.02 && r.bottom > -80) el.classList.add("in"); // in (or entering) view
        else io.observe(el);
      });
    };

    scan();
    const t1 = setTimeout(scan, 400);  // sections mounted late
    const t2 = setTimeout(scan, 1500); // safety net so nothing can stay hidden
    return () => { io.disconnect(); clearTimeout(t1); clearTimeout(t2); };
  }, [routeKey]);
}

function App() {
  const location = useLocation();
  useReveal(location.pathname);

  // Each route starts at the top, unless it is a scroll-to-section navigation.
  useEffect(() => {
    if (location.state?.scrollTo) return;
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname, location.state]);

  return (
    <CRMProvider>
      <div className="ffh-app">
        <Routes>
          <Route path="/" element={<Home39 />} />
          <Route path="/home39" element={<Home39 />} />
          <Route path="/about" element={<About20 />} />
          <Route path="/about20" element={<About20 />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Toaster position="top-right" richColors />
      </div>
    </CRMProvider>
  );
}

export default App;
