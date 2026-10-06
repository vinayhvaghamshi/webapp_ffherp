import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRight, Play } from "lucide-react";
import { HOME17_HERO } from "../../mock";
import { Icon } from "./Trusted";
import SignupForm from "./SignupForm";
import HomeLayoutNav from "./HomeLayoutNav";
import Trusted from "./Trusted";
import Modules from "./Modules";
import WhyFFH from "./WhyFFH";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import Serving from "./Serving";
import FaqContact from "./FaqContact";
import { useGoTo } from "./crmStore";

// Layout 17 — Apple-style glass: vivid gradient backdrop, floating colour
// blooms, frosted panels for every surface, and a navigation that turns from
// glass to solid as you leave the hero.
export default function Home17() {
  const goTo = useGoTo();

  useEffect(() => {
    document.title = "FFH|ERP — Everything your business runs on, in one clear view";
  }, []);

  return (
    <main className="ffh-h17" data-testid="home17-page">
      {/* glass hero */}
      <section className="ffh-h17-hero" id="top">
        <span className="ffh-h17-bloom a" aria-hidden="true" />
        <span className="ffh-h17-bloom b" aria-hidden="true" />
        <span className="ffh-h17-bloom c" aria-hidden="true" />
        <Container className="ffh-container">
          <div className="ffh-h17-head reveal">
            <span className="ffh-h17-mark"><img src={`${process.env.PUBLIC_URL}/ffh-logo.png`} alt="FFH ERP" width="54" height="54" decoding="async" fetchpriority="high" /></span>
            <span className="ffh-h17-eyebrow">{HOME17_HERO.eyebrow}</span>
            <h1 className="ffh-h17-title">
              {HOME17_HERO.titleLead} <span className="ffh-h17-accent">{HOME17_HERO.titleAccent}</span>
            </h1>
            <p className="ffh-h17-lead">{HOME17_HERO.lead}</p>
            <div className="ffh-h17-actions">
              <button className="btn ffh-btn ffh-h17-solid" onClick={() => goTo("#signup")} data-testid="home17-cta-trial">
                Start Free 7 Days Trial <ArrowRight size={16} className="ms-2" />
              </button>
              <button className="btn ffh-btn ffh-h17-glass-btn" onClick={() => goTo("#modules")} data-testid="home17-cta-modules">
                <Play size={14} className="me-2" /> See the nine modules
              </button>
            </div>
          </div>

          <div className="ffh-h17-stats reveal delay-2">
            {HOME17_HERO.stats.map((s) => (
              <div className="ffh-h17-stat" key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* frosted sheet carrying the trial form, overlapping the hero */}
      <section className="ffh-h17-sheet-section">
        <Container className="ffh-container">
          <div className="ffh-h17-sheet reveal delay-1">
            <Row className="g-5 align-items-center">
              <Col lg={5}>
                <span className="ffh-h17-eyebrow dark">Free 7-day trial</span>
                <h2 className="ffh-h17-sub">Start with your own numbers</h2>
                <p className="ffh-h17-sheet-text">
                  Load a month of your real sales, purchases and tickets. No credit card, and our team migrates your data
                  with you.
                </p>
                <p className="ffh-h17-note">{HOME17_HERO.note}</p>
                <HomeLayoutNav />
              </Col>
              <Col lg={7} className="d-flex justify-content-lg-end">
                <SignupForm />
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* glass feature cards on a soft gradient */}
      <section className="ffh-h17-features">
        <Container className="ffh-container">
          <div className="text-center mb-5 reveal">
            <span className="ffh-h17-eyebrow dark">Why it feels different</span>
            <h2 className="ffh-h17-h2">Designed to get out of the way</h2>
          </div>
          <Row className="g-4">
            {HOME17_HERO.features.map((f, i) => (
              <Col md={4} key={f.title} className={`reveal delay-${i}`}>
                <div className="ffh-h17-card" data-testid={`home17-feature-${i}`}>
                  <div className="ffh-h17-card-icon"><Icon name={f.icon} size={22} /></div>
                  <h6>{f.title}</h6>
                  <p>{f.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <Trusted />
      <Modules />
      <WhyFFH />
      <Pricing />
      <Testimonials />
      <Serving />
      <FaqContact />

      {/* dark glass closing band */}
      <section className="ffh-h17-cta">
        <span className="ffh-h17-bloom d" aria-hidden="true" />
        <Container className="ffh-container">
          <div className="ffh-h17-cta-card reveal">
            <h2>See it running on your own numbers</h2>
            <p>Book a 20-minute walkthrough, or start a trial and bring your data across.</p>
            <div className="ffh-h17-actions center">
              <button className="btn ffh-btn ffh-h17-solid" onClick={() => goTo("#signup")}>Try Free for 7 Days</button>
              <button className="btn ffh-btn ffh-h17-glass-btn" onClick={() => goTo("#contact")}>Book a meeting</button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
