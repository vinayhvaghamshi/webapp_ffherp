import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Check } from "lucide-react";
import { HOME11_HERO, TOOLS } from "../../mock";
import SignupForm from "./SignupForm";
import HomeLayoutNav from "./HomeLayoutNav";
import Trusted from "./Trusted";
import Modules from "./Modules";
import LiveCRM from "./LiveCRM";
import Milestones from "./Milestones";
import WhyFFH from "./WhyFFH";
import Integrations from "./Integrations";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import Serving from "./Serving";
import FaqContact from "./FaqContact";

// Layout 11 — logo theme, navy and amber. The trial card leads on the left of a
// dark hero (inverting layout 6/7), followed by a "nine bars, one measure"
// section that explains the mark using the nine modules as its bars.
export default function Home11() {
  useEffect(() => {
    document.title = "FFH|ERP — Many moving parts, one steady whole";
  }, []);

  return (
    <main className="ffh-h11 ffh-logo-theme" data-testid="home11-page">
      <section className="ffh-h11-hero" id="top">
        <Container className="ffh-container">
          <Row className="g-5 align-items-center">
            <Col lg={5} className="reveal">
              <div className="ffh-h11-form">
                <SignupForm />
              </div>
              <ul className="ffh-h11-trust">
                {HOME11_HERO.trust.map((t) => (
                  <li key={t}><Check size={14} strokeWidth={3} />{t}</li>
                ))}
              </ul>
            </Col>

            <Col lg={7} className="reveal delay-1">
              <div className="ffh-h11-markrow">
                <img src="/ffh-logo.png" alt="FFH ERP" width="76" height="76" decoding="async" fetchpriority="high" />
                <span className="ffh-h11-motif" aria-hidden="true"><i /><i /><i /><i /></span>
              </div>
              <div className="ffh-eyebrow light">{HOME11_HERO.eyebrow}</div>
              <h1 className="ffh-hero-title ffh-h11-title">
                {HOME11_HERO.titleLead} <span className="ffh-h11-accent">{HOME11_HERO.titleAccent}</span>
              </h1>
              <p className="ffh-h11-lead">{HOME11_HERO.lead}</p>
              <div className="ffh-h11-stats">
                {HOME11_HERO.stats.map((s) => (
                  <div className="ffh-h11-stat" key={s.label}>
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
              <HomeLayoutNav dark />
            </Col>
          </Row>
        </Container>
      </section>

      {/* "nine bars, one measure" — the mark explained with the nine modules */}
      <section className="ffh-h11-story">
        <Container className="ffh-container text-center">
          <div className="reveal">
            <div className="ffh-eyebrow justify-content-center">{HOME11_HERO.story.eyebrow}</div>
            <h2 className="ffh-h2">{HOME11_HERO.story.title}</h2>
          </div>
          <div className="ffh-h11-chart reveal delay-1" data-testid="home11-chart">
            {TOOLS.map((t, i) => (
              <div className="ffh-h11-bar-col" key={t.name}>
                <span className={`ffh-h11-bar ${i === TOOLS.length - 1 ? "dark" : ""}`} style={{ height: `${46 + i * 10}px` }} />
                <small>{t.name}</small>
              </div>
            ))}
          </div>
          <p className="ffh-h11-story-text reveal delay-2">{HOME11_HERO.story.text}</p>
        </Container>
      </section>

      <Trusted />
      <Modules />
      <LiveCRM />
      <Milestones />
      <WhyFFH />
      <Integrations />
      <Pricing />
      <Testimonials />
      <Serving />
      <FaqContact />
    </main>
  );
}
