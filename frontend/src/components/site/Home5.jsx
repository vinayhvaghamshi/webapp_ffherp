import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Check } from "lucide-react";
import { HOME5_HERO, HERO_STATS } from "../../mock";
import { Icon } from "./Trusted";
import SignupForm from "./SignupForm";
import HomeLayoutNav from "./HomeLayoutNav";
import Trusted from "./Trusted";
import Modules from "./Modules";
import LiveCRM from "./LiveCRM";
import Milestones from "./Milestones";
import WhyFFH from "./WhyFFH";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import Integrations from "./Integrations";
import FaqContact from "./FaqContact";

// Layout 5 — form on the left, benefits on the right: the trial card leads the
// page while four benefit cards answer "what do I actually get?".
export default function Home5() {
  useEffect(() => {
    document.title = "FFH|ERP — Your business, ready in one afternoon";
  }, []);

  return (
    <main data-testid="home5-page">
      <section className="ffh-h5-hero" id="top">
        <Container className="ffh-container">
          <Row className="g-5">
            <Col lg={5} className="reveal">
              <div className="ffh-h5-form-wrap">
                <span className="ffh-h5-flag">Start here</span>
                <SignupForm />
              </div>
              <div className="ffh-h5-trust">
                <Check size={15} strokeWidth={3} /> No credit card required — cancel any time
              </div>
            </Col>

            <Col lg={7} className="reveal delay-1">
              <h1 className="ffh-hero-title ffh-h5-title">
                {HOME5_HERO.titleLead} <span className="text-brand">{HOME5_HERO.titleAccent}</span>
              </h1>
              <p className="ffh-hero-lead">{HOME5_HERO.lead}</p>
              <div className="ffh-h5-benefits">
                {HOME5_HERO.benefits.map((b) => (
                  <div className="ffh-h5-benefit" key={b.title} data-testid={`home5-benefit-${b.title.toLowerCase().replace(/\s/g, "-")}`}>
                    <div className="ffh-h5-benefit-icon"><Icon name={b.icon} size={22} /></div>
                    <div>
                      <h6>{b.title}</h6>
                      <p>{b.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="ffh-h5-stats">
                {HERO_STATS.map((s) => (
                  <div key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>
                ))}
                <HomeLayoutNav />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Trusted />
      <Modules />
      <LiveCRM />
      <Milestones />
      <WhyFFH />
      <Pricing />
      <Testimonials />
      <Integrations />
      <FaqContact />
    </main>
  );
}
