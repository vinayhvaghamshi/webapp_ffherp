import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Check } from "lucide-react";
import { HOME13_HERO } from "../../mock";
import SignupForm from "./SignupForm";
import HomeLayoutNav from "./HomeLayoutNav";
import Trusted from "./Trusted";
import Modules from "./Modules";
import LiveCRM from "./LiveCRM";
import Milestones from "./Milestones";
import Integrations from "./Integrations";
import WhyFFH from "./WhyFFH";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import Serving from "./Serving";
import FaqContact from "./FaqContact";

// Layout 13 — logo theme at full strength: a saturated amber hero with the mark
// as an oversized watermark, a white trial card dropped into it, then a light
// ribbon of numbers before the product sections.
export default function Home13() {
  useEffect(() => {
    document.title = "FFH|ERP — The whole business, warmly simple";
  }, []);

  return (
    <main className="ffh-h13 ffh-logo-theme" data-testid="home13-page">
      <section className="ffh-h13-hero" id="top">
        <img className="ffh-h13-watermark" src={`${process.env.PUBLIC_URL}/ffh-logo.png`} alt="" aria-hidden="true" />
        <Container className="ffh-container">
          <div className="ffh-h13-top">
            <div className="ffh-h13-copy reveal">
              <div className="ffh-h13-markrow">
                <img src={`${process.env.PUBLIC_URL}/ffh-logo.png`} alt="FFH ERP" width="58" height="58" decoding="async" fetchpriority="high" />
                <div className="ffh-eyebrow light ffh-h13-eyebrow">{HOME13_HERO.eyebrow}</div>
              </div>
              <h1 className="ffh-hero-title ffh-h13-title">
                {HOME13_HERO.titleLead} <span className="ffh-h13-accent">{HOME13_HERO.titleAccent}</span>
              </h1>
              <p className="ffh-h13-lead">{HOME13_HERO.lead}</p>
              <div className="ffh-h13-actions">
                <button className="btn ffh-btn ffh-btn-white" onClick={() => document.getElementById("signup")?.scrollIntoView({ behavior: "smooth", block: "center" })} data-testid="home13-cta-trial">
                  Start Free 7 Days Trial
                </button>
                <button className="btn ffh-btn ffh-btn-ghost" onClick={() => document.getElementById("modules")?.scrollIntoView({ behavior: "smooth" })} data-testid="home13-cta-modules">
                  Explore the nine modules
                </button>
              </div>
            </div>

            <div className="ffh-h13-form reveal delay-1">
              <SignupForm />
              <ul className="ffh-h13-trust">
                {HOME13_HERO.trust.map((t) => (
                  <li key={t}><Check size={14} strokeWidth={3} />{t}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center reveal delay-2"><HomeLayoutNav dark /></div>
        </Container>
      </section>

      {/* light ribbon of numbers */}
      <section className="ffh-h13-ribbon">
        <Container className="ffh-container">
          <div className="ffh-h13-ribbon-row">
            {HOME13_HERO.ribbon.map((r) => (
              <div className="ffh-h13-ribbon-item" key={r.label}>
                <strong>{r.value}</strong>
                <span>{r.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Trusted />
      <Modules />
      <LiveCRM />
      <Milestones />
      <Integrations />
      <WhyFFH />
      <Pricing />
      <Testimonials />
      <Serving />
      <FaqContact />
    </main>
  );
}
