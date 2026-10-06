import React, { useEffect, useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Toaster } from "./components/ui/sonner";
import Header from "./components/site/Header";
import HeaderPill from "./components/site/HeaderPill";
import HeaderApp from "./components/site/HeaderApp";
import Footer from "./components/site/Footer";
import Home1 from "./components/site/Home1";
import Home2 from "./components/site/Home2";
import Home3 from "./components/site/Home3";
import Home4 from "./components/site/Home4";
import Home5 from "./components/site/Home5";
import Home6 from "./components/site/Home6";
import Home7 from "./components/site/Home7";
import Home8 from "./components/site/Home8";
import Home9 from "./components/site/Home9";
import Home10 from "./components/site/Home10";
import Home11 from "./components/site/Home11";
import Home12 from "./components/site/Home12";
import Home13 from "./components/site/Home13";
import Home14 from "./components/site/Home14";
import Home15 from "./components/site/Home15";
import Home16 from "./components/site/Home16";
import Home17 from "./components/site/Home17";
import Home18 from "./components/site/Home18";
import Home20 from "./components/site/Home20";
import Home21 from "./components/site/Home21";
import Home22 from "./components/site/Home22";
import Home23 from "./components/site/Home23";
import Home24 from "./components/site/Home24";
import Home25 from "./components/site/Home25";
import Home26 from "./components/site/Home26";
import Home27 from "./components/site/Home27";
import Home28 from "./components/site/Home28";
import Home29 from "./components/site/Home29";
import Home30 from "./components/site/Home30";
import Home31 from "./components/site/Home31";
import Home32 from "./components/site/Home32";
import About1 from "./components/site/About1";
import About2 from "./components/site/About2";
import About3 from "./components/site/About3";
import About4 from "./components/site/About4";
import About5 from "./components/site/About5";
import About6 from "./components/site/About6";
import About7 from "./components/site/About7";
import About8 from "./components/site/About8";
import About9 from "./components/site/About9";
import About10 from "./components/site/About10";
import { CRMProvider } from "./components/site/crmStore";

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

  // The pill navigation is used by the reference layout (16) and by the glass
  // layout (17, in its glass variant); every other page keeps the standard header.
  const pillNav = ["/home16", "/home17", "/home18"].includes(location.pathname);
  const pillVariant = location.pathname === "/home17" ? "glass" : location.pathname === "/home18" ? "glass-dark" : undefined;
  const appHeader = location.pathname === "/home20";
  // The Tailwind layouts ship their own header and footer, so the shared
  // Bootstrap chrome is skipped for them entirely.
  const bareLayout = ["/home21", "/home22", "/home23", "/home24", "/home25", "/home26", "/home27", "/home28", "/home29", "/home30", "/home31", "/home32"].includes(location.pathname);

  return (
    <CRMProvider>
      <div className="ffh-app">
        {bareLayout ? null : appHeader ? <HeaderApp /> : pillNav ? <HeaderPill variant={pillVariant} /> : <Header />}
        <Routes>
          {/* Home layouts: "/" keeps the original page; each is also addressable by name */}
          <Route path="/" element={<Home1 />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/home2" element={<Home2 />} />
          <Route path="/home3" element={<Home3 />} />
          <Route path="/home4" element={<Home4 />} />
          <Route path="/home5" element={<Home5 />} />
          <Route path="/home6" element={<Home6 />} />
          <Route path="/home7" element={<Home7 />} />
          <Route path="/home8" element={<Home8 />} />
          <Route path="/home9" element={<Home9 />} />
          <Route path="/home10" element={<Home10 />} />
          <Route path="/home11" element={<Home11 />} />
          <Route path="/home12" element={<Home12 />} />
          <Route path="/home13" element={<Home13 />} />
          <Route path="/home14" element={<Home14 />} />
          <Route path="/home15" element={<Home15 />} />
          <Route path="/home16" element={<Home16 />} />
          <Route path="/home17" element={<Home17 />} />
          <Route path="/home18" element={<Home18 />} />
          <Route path="/home20" element={<Home20 />} />
          <Route path="/home21" element={<Home21 />} />
          <Route path="/home22" element={<Home22 />} />
          <Route path="/home23" element={<Home23 />} />
          <Route path="/home24" element={<Home24 />} />
          <Route path="/home25" element={<Home25 />} />
          <Route path="/home26" element={<Home26 />} />
          <Route path="/home27" element={<Home27 />} />
          <Route path="/home28" element={<Home28 />} />
          <Route path="/home29" element={<Home29 />} />
          <Route path="/home30" element={<Home30 />} />
          <Route path="/home31" element={<Home31 />} />
          <Route path="/home32" element={<Home32 />} />
          {/* About layouts: /about keeps the original page */}
          <Route path="/about" element={<About1 />} />
          <Route path="/about1" element={<About1 />} />
          <Route path="/about2" element={<About2 />} />
          <Route path="/about3" element={<About3 />} />
          <Route path="/about4" element={<About4 />} />
          <Route path="/about5" element={<About5 />} />
          <Route path="/about6" element={<About6 />} />
          <Route path="/about7" element={<About7 />} />
          <Route path="/about8" element={<About8 />} />
          <Route path="/about9" element={<About9 />} />
          <Route path="/about10" element={<About10 />} />
          <Route path="*" element={<Home1 />} />
        </Routes>
        {bareLayout ? null : <Footer />}
        <Toaster position="top-right" richColors />
      </div>
    </CRMProvider>
  );
}

export default App;
