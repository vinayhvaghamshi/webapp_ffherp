import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRight } from "lucide-react";
import { ABOUT_US, TEAM } from "../../mock";
import { Icon } from "./Trusted";
import Milestones from "./Milestones";
import { useGoTo } from "./crmStore";

export default function About() {
  const goTo = useGoTo();

  useEffect(() => {
    document.title = "About Us — FFH|ERP";
  }, []);

  return (
    <main className="ffh-about" data-testid="about-page">
      {/* Page heading */}
      <section className="ffh-about-hero">
        <Container className="ffh-container">
          <div className="ffh-eyebrow reveal">About Us</div>
          <h1 className="ffh-h2 ffh-serif-mix reveal">
            One platform, built by people who <em>run businesses</em>
          </h1>
          <p className="ffh-lead-sm reveal delay-1">{ABOUT_US.intro}</p>
          <div className="ffh-about-actions reveal delay-2">
            <button className="btn ffh-btn ffh-btn-primary" onClick={() => goTo("#signup")} data-testid="about-cta-trial">
              Start Free 7 Days Trial <ArrowRight size={16} className="ms-2" />
            </button>
            <button className="btn ffh-btn ffh-btn-outline" onClick={() => goTo("#modules")} data-testid="about-cta-modules">
              Explore Modules
            </button>
          </div>
        </Container>
      </section>

      {/* Company numbers — same section as the home page */}
      <Milestones />

      {/* Vision & Mission */}
      <section className="ffh-section ffh-soft" id="vision-mission">
        <Container className="ffh-container">
          <div className="text-center mb-5 reveal">
            <h2 className="ffh-h2">What drives us</h2>
            <div className="ffh-underline mx-auto" />
          </div>
          <Row className="g-4">
            {[ABOUT_US.vision, ABOUT_US.mission].map((b, i) => (
              <Col md={6} key={b.title} className={`reveal delay-${i + 1}`}>
                <div className="ffh-vm-card" data-testid={`about-${b.title.toLowerCase().replace(/\s/g, "-")}`}>
                  <div className="ffh-vm-icon"><Icon name={b.icon} size={26} /></div>
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Leadership */}
      <section className="ffh-section bg-white" id="leadership">
        <Container className="ffh-container">
          <div className="text-center mb-5 reveal">
            <div className="ffh-eyebrow justify-content-center">Leadership</div>
            <h2 className="ffh-h2">The team steering FFH|ERP</h2>
            <p className="ffh-lead-sm mx-auto">
              Four decades of combined experience in ERP, CRM and enterprise delivery — accountable for the product our
              customers run their business on.
            </p>
          </div>
          <Row className="g-4">
            {TEAM.map((p, i) => (
              <Col xs={12} sm={6} lg={3} key={p.name} className={`reveal delay-${i % 3}`}>
                <div className="ffh-team-card" data-testid={`team-${p.role.toLowerCase().replace(/\s/g, "-")}`}>
                  <img
                    src={`https://i.pravatar.cc/220?img=${p.img}`}
                    alt={p.name}
                    width="110"
                    height="110"
                    loading="lazy"
                    decoding="async"
                  />
                  <h5>{p.name}</h5>
                  <div className="ffh-team-role">{p.role}</div>
                  <p>{p.bio}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Values */}
      <section className="ffh-section ffh-soft">
        <Container className="ffh-container">
          <div className="text-center mb-5 reveal">
            <h2 className="ffh-h2">How we work</h2>
            <div className="ffh-underline mx-auto" />
          </div>
          <Row className="g-4">
            {ABOUT_US.values.map((v, i) => (
              <Col xs={12} sm={6} lg={3} key={v.title} className={`reveal delay-${i}`}>
                <div className="ffh-value">
                  <div className="ffh-value-icon"><Icon name={v.icon} size={24} /></div>
                  <h6>{v.title}</h6>
                  <p>{v.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Closing call to action */}
      <section className="ffh-section bg-white">
        <Container className="ffh-container">
          <div className="ffh-about-cta reveal">
            <h3>Ready to run your whole business in one place?</h3>
            <p>Start a free 7-day trial — no credit card required. Our team will help you migrate your existing data.</p>
            <button className="btn ffh-btn ffh-btn-white" onClick={() => goTo("#signup")} data-testid="about-cta-bottom">
              Try Free for 7 Days <ArrowRight size={16} className="ms-2" />
            </button>
          </div>
        </Container>
      </section>
    </main>
  );
}
