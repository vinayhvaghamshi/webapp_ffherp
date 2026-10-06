import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Check } from "lucide-react";
import { HOME7_HERO } from "../../mock";
import SignupForm from "./SignupForm";
import HomeLayoutNav from "./HomeLayoutNav";
import Trusted from "./Trusted";
import Modules from "./Modules";
import Milestones from "./Milestones";
import WhyFFH from "./WhyFFH";
import LiveCRM from "./LiveCRM";
import Serving from "./Serving";
import Integrations from "./Integrations";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import FaqContact from "./FaqContact";

// Layout 7 — built from the brand mark: the orange→amber gradient and the navy
// of the FFH|ERP logo drive the whole page (scoped CSS variables), with the
// trial form up front and the mark's bar-chart motif reused as a decorative idea.
export default function Home7() {
  useEffect(() => {
    document.title = "FFH|ERP — One platform, one mark";
  }, []);

  return (
    <main className="ffh-h7 ffh-logo-theme" data-testid="home7-page">
      <section className="ffh-h7-hero" id="top">
        <Container className="ffh-container">
          <Row className="g-5 align-items-center">
            <Col lg={6} className="reveal">
              <div className="ffh-h7-mark">
                <img src="/ffh-logo.png" alt="FFH ERP" width="72" height="72" decoding="async" fetchpriority="high" />
                <span className="ffh-h7-motif" aria-hidden="true"><i /><i /><i /><i /></span>
              </div>
              <div className="ffh-eyebrow">{HOME7_HERO.eyebrow}</div>
              <h1 className="ffh-hero-title ffh-h7-title">
                {HOME7_HERO.titleLead} <span className="ffh-h7-accent">{HOME7_HERO.titleAccent}</span>
              </h1>
              <p className="ffh-h7-lead">{HOME7_HERO.lead}</p>
              <Row className="g-3 ffh-h7-points">
                {HOME7_HERO.points.map((p) => (
                  <Col xs={4} key={p.label}>
                    <div className="ffh-h7-point">
                      <strong>{p.value}</strong>
                      <span>{p.label}</span>
                    </div>
                  </Col>
                ))}
              </Row>
              <div className="reveal delay-2"><HomeLayoutNav /></div>
            </Col>
            <Col lg={6} className="reveal delay-1">
              <div className="ffh-h7-form">
                <SignupForm title="Start your flexible free trial" />
              </div>
              <ul className="ffh-h7-trust">
                {HOME7_HERO.trust.map((t) => (
                  <li key={t}><Check size={14} strokeWidth={3} />{t}</li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <Trusted />
      <Modules />
      <Milestones />
      <WhyFFH />
      <LiveCRM />
      <Serving />
      <Integrations />
      <Pricing />
      <Testimonials />
      <FaqContact />
    </main>
  );
}
