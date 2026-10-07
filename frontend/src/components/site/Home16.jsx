import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRight, Check } from "lucide-react";
import { HOME16_HERO, SERVING_BRANDS } from "../../mock";
import { Icon } from "./Trusted";
import SignupForm from "./SignupForm";
import HomeLayoutNav from "./HomeLayoutNav";
import Trusted from "./Trusted";
import Modules from "./Modules";
import Testimonials from "./Testimonials";
import WhyFFH from "./WhyFFH";
import Pricing from "./Pricing";
import FaqContact from "./FaqContact";
import Serving from "./Serving";
import { useGoTo } from "./crmStore";

// Layout 16 — the reference layout: a floating pill navbar over a clean, centred
// marketing page. Sections are the site's own, dressed in the logo theme.
export default function Home16() {
  const goTo = useGoTo();

  useEffect(() => {
    document.title = "FFH|ERP — One platform for the whole business";
  }, []);

  return (
    <main className="ffh-h16 ffh-logo-theme" data-testid="home16-page">
      {/* centred hero */}
      <section className="ffh-h16-hero" id="top">
        <Container className="ffh-container">
          <div className="ffh-h16-head reveal">
            <span className="ffh-h16-eyebrow">{HOME16_HERO.eyebrow}</span>
            <h1 className="ffh-h16-title">
              {HOME16_HERO.titleLead} <span className="ffh-h16-accent">{HOME16_HERO.titleAccent}</span>
            </h1>
            <p className="ffh-h16-lead">{HOME16_HERO.lead}</p>
            <div className="ffh-h16-actions">
              <button className="btn ffh-btn ffh-btn-primary" onClick={() => goTo("#contact")} data-testid="home16-cta-meeting">
                Book a meeting <ArrowRight size={16} className="ms-2" />
              </button>
              <button className="btn ffh-btn ffh-btn-outline" onClick={() => goTo("#modules")} data-testid="home16-cta-modules">
                See the nine modules
              </button>
            </div>
            <ul className="ffh-h16-trust">
              {HOME16_HERO.trust.map((t) => (
                <li key={t}><Check size={14} strokeWidth={3} />{t}</li>
              ))}
            </ul>
          </div>

          {/* logo strip, reference-style */}
          <div className="ffh-h16-strip reveal delay-1">
            <span>Trusted by</span>
            <div className="ffh-h16-strip-logos">
              {SERVING_BRANDS.map((b) => (
                <em key={b.key}>{b.name}</em>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* services */}
      <section className="ffh-section bg-white">
        <Container className="ffh-container">
          <div className="text-center mb-5 reveal">
            <span className="ffh-h16-eyebrow">What we do</span>
            <h2 className="ffh-h2">Three jobs, one system</h2>
            <p className="ffh-lead-sm mx-auto">Most teams start with one of these and add the rest when they are ready.</p>
          </div>
          <Row className="g-4">
            {HOME16_HERO.services.map((s, i) => (
              <Col md={4} key={s.title} className={`reveal delay-${i}`}>
                <div className="ffh-h16-service" data-testid={`home16-service-${i}`}>
                  <div className="ffh-h16-service-icon"><Icon name={s.icon} size={24} /></div>
                  <h6>{s.title}</h6>
                  <p>{s.text}</p>
                  <button className="ffh-h16-more" onClick={() => goTo("#modules")}>Explore <ArrowRight size={15} /></button>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* trial */}
      <section className="ffh-h16-signup">
        <Container className="ffh-container">
          <Row className="g-5 align-items-center">
            <Col lg={5} className="reveal">
              <span className="ffh-h16-eyebrow">Free 7-day trial</span>
              <h2 className="ffh-h2">Start with your own numbers</h2>
              <p className="ffh-lead-sm">
                Load a month of your real sales, purchases and tickets, and judge FFH|ERP on what it does for your team.
              </p>
              <div className="mt-4"><HomeLayoutNav /></div>
            </Col>
            <Col lg={7} className="d-flex justify-content-lg-end reveal delay-1">
              <SignupForm />
            </Col>
          </Row>
        </Container>
      </section>

      <Trusted />
      <Modules />
      <Testimonials />
      <WhyFFH />
      <Pricing />
      <Serving />
      <FaqContact />

      <section className="ffh-h16-cta">
        <Container className="ffh-container text-center">
          <div className="reveal">
            <h2 className="ffh-h16-cta-title">Let's put your business on one system</h2>
            <p>Book a 20-minute walkthrough, or start a trial and bring your own data.</p>
            <div className="ffh-h16-actions center">
              <button className="btn ffh-btn ffh-btn-white" onClick={() => goTo("#contact")}>Book a meeting</button>
              <button className="btn ffh-btn ffh-btn-ghost" onClick={() => goTo("#signup")}>Try Free for 7 Days</button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
