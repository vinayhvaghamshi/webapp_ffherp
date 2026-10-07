import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "./Hero";
import Trusted from "./Trusted";
import Milestones from "./Milestones";
import Modules from "./Modules";
import WhyFFH from "./WhyFFH";
import LiveCRM from "./LiveCRM";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import Serving from "./Serving";
import Integrations from "./Integrations";
import FaqContact from "./FaqContact";
import { scrollToId } from "./crmStore";

// Layout 1 — the original home page, unchanged: hero + trial form, then trusted
// brands, milestones, modules, why-us, the live CRM demo, pricing and the rest.
export default function Home1() {
  const location = useLocation();

  useEffect(() => {
    document.title = "FFH|ERP - Smart CRM & ERP Software";
  }, []);

  // Arriving from another route with a section target (e.g. /about → Modules).
  useEffect(() => {
    const target = location.state?.scrollTo;
    if (!target) return;
    const t = setTimeout(() => scrollToId(target), 80);
    return () => clearTimeout(t);
  }, [location.state]);

  return (
    <main data-testid="home1-page">
      <Hero />
      <Trusted />
      <Milestones />
      <Modules />
      <WhyFFH />
      <LiveCRM />
      <Pricing />
      <Testimonials />
      <Serving />
      <Integrations />
      <FaqContact />
    </main>
  );
}
