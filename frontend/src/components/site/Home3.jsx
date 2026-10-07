import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRight, Check } from "lucide-react";
import { HOME3_HERO, HOME_STEPS } from "../../mock";
import { Icon } from "./Trusted";
import SignupForm from "./SignupForm";
import HomeLayoutNav from "./HomeLayoutNav";
import Trusted from "./Trusted";
import Modules from "./Modules";
import LiveCRM from "./LiveCRM";
import Integrations from "./Integrations";
import WhyFFH from "./WhyFFH";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import FaqContact from "./FaqContact";
import { useGoTo } from "./crmStore";

// Layout 3 — dark, editorial home: a navy hero with headline numbers, the trial
// form on its own band, a three-step "how it works" strip, then the modules,
// the live demo and the rest.
export default function Home3() {
  const goTo = useGoTo();

  useEffect(() => {
    document.title = "FFH|ERP — Nine business tools, one system";
  }, []);

  return (
    <main data-testid="home3-page">
      {/* Dark hero */}
      <section className="ffh-h3-hero" id="top">
        <Container className="ffh-container">
          <Row className="g-5 align-items-end">
            <Col lg={7} className="reveal">
              <div className="ffh-eyebrow light">{HOME3_HERO.eyebrow}</div>
              <h1 className="ffh-hero-title ffh-h3-title">
                {HOME3_HERO.titleLead} <span>{HOME3_HERO.titleAccent}</span>
              </h1>
              <p className="ffh-h3-lead">{HOME3_HERO.lead}</p>
              <div className="ffh-h2-actions">
                <button className="btn ffh-btn ffh-btn-primary" onClick={() => goTo("#signup")} data-testid="home3-cta-trial">
                  Start Free 7 Days Trial <ArrowRight size={16} className="ms-2" />
                </button>
                <button className="btn ffh-btn ffh-btn-ghost" onClick={() => goTo("#modules")} data-testid="home3-cta-modules">
                  Explore the nine modules
                </button>
              </div>
              <div className="reveal delay-2"><HomeLayoutNav dark /></div>
            </Col>
            <Col lg={5} className="reveal delay-1">
              <div className="ffh-h3-stats">
                {HOME3_HERO.stats.map((s) => (
                  <div className="ffh-h3-stat" key={s.label}>
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Trial form band */}
      <section className="ffh-h2-signup">
        <Container className="ffh-container">
          <Row className="g-5 align-items-center">
            <Col lg={6} className="reveal">
              <div className="ffh-eyebrow">Free for 7 days</div>
              <h2 className="ffh-h2">Put your own numbers in it</h2>
              <p className="ffh-lead-sm">
                Start a trial, load a month of your real sales and purchases, and decide on what you see. Our team
                migrates your existing data with you.
              </p>
              <ul className="ffh-checklist">
                <li><span className="ffh-check"><Check size={13} strokeWidth={3} /></span>No credit card required</li>
                <li><span className="ffh-check"><Check size={13} strokeWidth={3} /></span>Android, iOS and desktop</li>
                <li><span className="ffh-check"><Check size={13} strokeWidth={3} /></span>24/7 support in six languages</li>
              </ul>
            </Col>
            <Col lg={6} className="d-flex justify-content-lg-end reveal delay-1">
              <SignupForm title="Start your flexible free trial" />
            </Col>
          </Row>
        </Container>
      </section>

      <Trusted />

      {/* How it works */}
      <section className="ffh-section bg-white">
        <Container className="ffh-container">
          <div className="text-center mb-5 reveal">
            <div className="ffh-eyebrow justify-content-center">How it works</div>
            <h2 className="ffh-h2">From first call to final invoice</h2>
            <p className="ffh-lead-sm mx-auto">
              Three habits, one system. That is the whole idea behind FFH|ERP.
            </p>
          </div>
          <Row className="g-4">
            {HOME_STEPS.map((s, i) => (
              <Col md={4} key={s.title} className={`reveal delay-${i}`}>
                <div className="ffh-h3-step" data-testid={`home3-step-${i}`}>
                  <span className="ffh-h3-step-num">{String(i + 1).padStart(2, "0")}</span>
                  <div className="ffh-h3-step-icon"><Icon name={s.icon} size={24} /></div>
                  <h6>{s.title}</h6>
                  <p>{s.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <Modules />
      <LiveCRM />
      <Integrations />
      <WhyFFH />
      <Pricing />
      <Testimonials />
      <FaqContact />
    </main>
  );
}
