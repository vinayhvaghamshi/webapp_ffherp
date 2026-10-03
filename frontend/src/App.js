import React, { useEffect } from "react";
import "./App.css";
import { Toaster } from "./components/ui/sonner";
import Header from "./components/site/Header";
import Hero from "./components/site/Hero";
import Trusted from "./components/site/Trusted";
import Milestones from "./components/site/Milestones";
import Modules from "./components/site/Modules";
import WhyFFH from "./components/site/WhyFFH";
import LiveCRM from "./components/site/LiveCRM";
import Testimonials from "./components/site/Testimonials";
import Integrations from "./components/site/Integrations";
import FaqContact from "./components/site/FaqContact";
import Pricing from "./components/site/Pricing";
import Footer from "./components/site/Footer";
import { CRMProvider } from "./components/site/crmStore";

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.12 }
    );
    const scan = () => document.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el));
    scan();
    const t = setTimeout(scan, 600);
    return () => { io.disconnect(); clearTimeout(t); };
  }, []);
}

function App() {
  useReveal();
  return (
    <CRMProvider>
      <div className="ffh-app">
        <Header />
        <main>
          <Hero />
          <Trusted />
          <Milestones />
          <Modules />
          <WhyFFH />
          <LiveCRM />
          <Testimonials />
          <Integrations />
          <FaqContact />
          <Pricing />
        </main>
        <Footer />
        <Toaster position="top-right" richColors />
      </div>
    </CRMProvider>
  );
}

export default App;
