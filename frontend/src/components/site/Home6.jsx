import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Check } from "lucide-react";
import { HOME6_HERO } from "../../mock";
import SignupForm from "./SignupForm";
import HomeLayoutNav from "./HomeLayoutNav";
import Trusted from "./Trusted";
import Modules from "./Modules";
import Milestones from "./Milestones";
import LiveCRM from "./LiveCRM";
import WhyFFH from "./WhyFFH";
import Integrations from "./Integrations";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import Serving from "./Serving";
import FaqContact from "./FaqContact";

// Layout 6 — dark hero with the trial card up front: short, confident copy on
// the left, the form in an elevated white card on the right, proof underneath.
export default function Home6() {
  useEffect(() => {
    document.title = "FFH|ERP — Start your free trial today";
  }, []);

  return (
    <main data-testid="home6-page">
      <section className="ffh-h6-hero" id="top">
        <Container className="ffh-container">
          <Row className="g-5 align-items-center">
            <Col lg={6} className="reveal">
              <div className="ffh-eyebrow light">{HOME6_HERO.eyebrow}</div>
              <h1 className="ffh-hero-title ffh-h6-title">
                {HOME6_HERO.titleLead} <span>{HOME6_HERO.titleAccent}</span>
              </h1>
              <p className="ffh-h6-lead">{HOME6_HERO.lead}</p>
              <ul className="ffh-h6-chips">
                {HOME6_HERO.chips.map((c) => (
                  <li key={c}><Check size={14} strokeWidth={3} />{c}</li>
                ))}
              </ul>
              <div className="reveal delay-2"><HomeLayoutNav dark /></div>
            </Col>
            <Col lg={6} className="reveal delay-1">
              <div className="ffh-h6-form">
                <SignupForm title="Start your flexible free trial" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* proof bar */}
      <section className="ffh-h6-proof">
        <Container className="ffh-container">
          <Row className="g-3">
            {HOME6_HERO.trust.map((t) => (
              <Col xs={6} lg={3} key={t}>
                <div className="ffh-h6-proof-item">{t}</div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <Trusted />
      <Modules />
      <Milestones />
      <LiveCRM />
      <WhyFFH />
      <Integrations />
      <Pricing />
      <Testimonials />
      <Serving />
      <FaqContact />
    </main>
  );
}
