import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Check, ChevronRight } from "lucide-react";
import { HOME14_HERO, HERO_STATS } from "../../mock";
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
import { useGoTo } from "./crmStore";

// Layout 14 — logo theme with a left rail: a narrow column carries the mark and
// jump links, the middle carries the pitch, the right carries the trial card.
export default function Home14() {
  const goTo = useGoTo();

  useEffect(() => {
    document.title = "FFH|ERP — One system, every department";
  }, []);

  return (
    <main className="ffh-h14 ffh-logo-theme" data-testid="home14-page">
      <section className="ffh-h14-hero" id="top">
        <Container className="ffh-container">
          <Row className="g-5">
            {/* rail */}
            <Col lg={3} className="reveal">
              <div className="ffh-h14-rail">
                <img src="/ffh-logo.png" alt="FFH ERP" width="62" height="62" decoding="async" fetchpriority="high" />
                <span className="ffh-h14-rail-title">FFH<i>|</i>ERP</span>
                <nav className="ffh-h14-links" aria-label="Jump to section">
                  {HOME14_HERO.rail.map((l) => (
                    <button key={l.label} type="button" onClick={() => goTo(l.target)} data-testid={`home14-rail-${l.label.toLowerCase().replace(/\s/g, "-")}`}>
                      {l.label} <ChevronRight size={14} />
                    </button>
                  ))}
                </nav>
              </div>
            </Col>

            {/* pitch */}
            <Col lg={4} className="reveal delay-1">
              <div className="ffh-eyebrow">{HOME14_HERO.eyebrow}</div>
              <h1 className="ffh-hero-title ffh-h14-title">
                {HOME14_HERO.titleLead} <span className="ffh-h14-accent">{HOME14_HERO.titleAccent}</span>
              </h1>
              <p className="ffh-h14-lead">{HOME14_HERO.lead}</p>
              <ul className="ffh-h14-points">
                {HOME14_HERO.points.map((p) => (
                  <li key={p}><Check size={14} strokeWidth={3} />{p}</li>
                ))}
              </ul>
              <div className="ffh-h14-stats">
                {HERO_STATS.map((s) => (
                  <div key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>
                ))}
              </div>
            </Col>

            {/* trial card */}
            <Col lg={5} className="reveal delay-2">
              <div className="ffh-h14-form">
                <SignupForm />
              </div>
              <ul className="ffh-h14-trust">
                {HOME14_HERO.trust.map((t) => (
                  <li key={t}><Check size={14} strokeWidth={3} />{t}</li>
                ))}
              </ul>
            </Col>
          </Row>

          <div className="text-center reveal delay-3"><HomeLayoutNav /></div>
        </Container>
      </section>

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
