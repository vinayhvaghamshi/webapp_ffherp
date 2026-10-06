import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRight } from "lucide-react";
import { ABOUT_9, ABOUT_US, ABOUT_ALT, MILESTONES, TEAM } from "../../mock";
import AboutLayoutNav from "./AboutLayoutNav";
import { useGoTo } from "./crmStore";

// About layout 9 — team first: the leadership carries the page as large cards,
// with the vision and mission kept to two quiet columns underneath.
export default function About9() {
  const goTo = useGoTo();

  useEffect(() => {
    document.title = "About Us — The people answerable for it | FFH|ERP";
  }, []);

  return (
    <main className="ffh-a9 ffh-logo-theme" data-testid="about9-page">
      <section className="ffh-a9-hero" id="top">
        <Container className="ffh-container text-center">
          <div className="ffh-a9-markrow reveal">
            <img src="/ffh-logo.png" alt="FFH ERP" width="58" height="58" decoding="async" fetchpriority="high" />
            <div className="ffh-eyebrow justify-content-center">{ABOUT_9.eyebrow}</div>
          </div>
          <h1 className="ffh-h2 ffh-serif-mix ffh-a9-title reveal">
            {ABOUT_9.titleLead} <em>{ABOUT_9.titleAccent}</em>
          </h1>
          <p className="ffh-lead-sm reveal delay-1">{ABOUT_9.lead}</p>
        </Container>
      </section>

      {/* large team cards */}
      <section className="ffh-section bg-white" id="leadership">
        <Container className="ffh-container">
          <Row className="g-4">
            {TEAM.map((p, i) => (
              <Col xs={12} sm={6} lg={3} key={p.name} className={`reveal delay-${i % 3}`}>
                <div className="ffh-a9-card" data-testid={`about9-card-${p.role.toLowerCase().replace(/\s/g, "-")}`}>
                  <div className="ffh-a9-photo">
                    <img src={`https://i.pravatar.cc/300?img=${p.img}`} alt={p.name} width="150" height="150" loading="lazy" decoding="async" />
                  </div>
                  <h5>{p.name}</h5>
                  <span className="ffh-a9-role">{p.role}</span>
                  <p>{p.bio}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* quiet vision / mission columns */}
      <section className="ffh-section ffh-soft">
        <Container className="ffh-container">
          <Row className="g-5">
            {[ABOUT_US.vision, ABOUT_US.mission].map((b, i) => (
              <Col md={6} key={b.title} className={`reveal delay-${i}`}>
                <div className="ffh-a9-vm">
                  <span className="ffh-a9-tag">{b.title}</span>
                  <p>{b.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* milestones */}
      <section className="ffh-section bg-white">
        <Container className="ffh-container">
          <Row className="g-3">
            {MILESTONES.map((m, i) => (
              <Col xs={6} lg={3} key={m.label} className={`reveal delay-${i}`}>
                <div className="ffh-a9-metric">
                  <strong>{m.value.toLocaleString("en-US")}{m.suffix}</strong>
                  <span>{m.label}</span>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="ffh-a9-cta">
        <Container className="ffh-container text-center">
          <div className="reveal">
            <h2 className="ffh-a9-cta-title">Come and check the work</h2>
            <p>Start a free trial, or ask us for a walkthrough with your own numbers.</p>
            <div className="ffh-a9-actions">
              <button className="btn ffh-btn ffh-btn-white" onClick={() => goTo("#signup")} data-testid="about9-cta-trial">
                Try Free for 7 Days <ArrowRight size={16} className="ms-2" />
              </button>
              <button className="btn ffh-btn ffh-btn-ghost" onClick={() => goTo("#contact")}>Talk to Sales</button>
            </div>
            <div className="mt-4"><AboutLayoutNav dark /></div>
          </div>
        </Container>
      </section>
    </main>
  );
}
