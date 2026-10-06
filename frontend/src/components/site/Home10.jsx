import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Check } from "lucide-react";
import { HOME10_HERO } from "../../mock";
import SignupForm from "./SignupForm";
import HomeLayoutNav from "./HomeLayoutNav";
import Trusted from "./Trusted";
import Modules from "./Modules";
import Milestones from "./Milestones";
import WhyFFH from "./WhyFFH";
import LiveCRM from "./LiveCRM";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import Serving from "./Serving";
import Integrations from "./Integrations";
import FaqContact from "./FaqContact";

// Layout 10 — logo theme, centred and airy. Where layout 7 splits the hero, this
// one stacks it down the middle: the mark, the promise, the trial card, then a
// warm numbers ribbon and a bar-motif divider before the product sections.
export default function Home10() {
  useEffect(() => {
    document.title = "FFH|ERP — Nine tools, one steady whole";
  }, []);

  return (
    <main className="ffh-h10 ffh-logo-theme" data-testid="home10-page">
      <section className="ffh-h10-hero" id="top">
        <Container className="ffh-container">
          <div className="ffh-h10-top reveal">
            <span className="ffh-h10-mark">
              <img src="/ffh-logo.png" alt="FFH ERP" width="88" height="88" decoding="async" fetchpriority="high" />
            </span>
            <div className="ffh-eyebrow justify-content-center">{HOME10_HERO.eyebrow}</div>
            <h1 className="ffh-hero-title ffh-h10-title">
              {HOME10_HERO.titleLead} <span className="ffh-h10-accent">{HOME10_HERO.titleAccent}</span>
            </h1>
            <p className="ffh-h10-lead">{HOME10_HERO.lead}</p>
          </div>

          <div className="ffh-h10-form reveal delay-1">
            <SignupForm />
          </div>

          <ul className="ffh-h10-trust reveal delay-2">
            {HOME10_HERO.trust.map((t) => (
              <li key={t}><Check size={14} strokeWidth={3} />{t}</li>
            ))}
          </ul>
          <div className="text-center reveal delay-3"><HomeLayoutNav /></div>
        </Container>
      </section>

      {/* warm numbers ribbon */}
      <section className="ffh-h10-ribbon">
        <Container className="ffh-container">
          <div className="ffh-h10-ribbon-row">
            {HOME10_HERO.ribbon.map((r) => (
              <div className="ffh-h10-ribbon-item" key={r.label}>
                <strong>{r.value}</strong>
                <span>{r.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* bar-motif divider, echoing the mark */}
      <div className="ffh-h10-divider" aria-hidden="true"><i /><i /><i /><i /></div>

      <Trusted />
      <Modules />
      <Milestones />
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
