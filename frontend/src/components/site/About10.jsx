import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRight } from "lucide-react";
import { ABOUT_10, ABOUT_ALT, ABOUT_US, TEAM } from "../../mock";
import AboutLayoutNav from "./AboutLayoutNav";
import { useGoTo } from "./crmStore";

// About layout 10 — by the numbers: the page opens on metrics, then the journey
// as a compact list, then vision and mission as two plain statements.
export default function About10() {
  const goTo = useGoTo();

  useEffect(() => {
    document.title = "About Us — The company by the numbers | FFH|ERP";
  }, []);

  const [lead1, lead2] = ABOUT_10.metrics;

  return (
    <main className="ffh-a10 ffh-logo-theme" data-testid="about10-page">
      <section className="ffh-a10-hero" id="top">
        <Container className="ffh-container">
          <div className="ffh-a10-head reveal">
            <div className="ffh-a10-markrow">
              <img src="/ffh-logo.png" alt="FFH ERP" width="60" height="60" decoding="async" fetchpriority="high" />
              <div className="ffh-eyebrow">{ABOUT_10.eyebrow}</div>
            </div>
            <h1 className="ffh-hero-title ffh-a10-title">
              {ABOUT_10.titleLead} <span className="ffh-a10-accent">{ABOUT_10.titleAccent}</span>
            </h1>
            <p className="ffh-a10-lead">{ABOUT_10.lead}</p>
          </div>

          <div className="ffh-a10-lead-strip reveal delay-1">
            <div><strong>{lead1.value}</strong><span>{lead1.label}</span></div>
            <div><strong>{lead2.value}</strong><span>{lead2.label}</span></div>
            <div className="ffh-a10-strip-cta">
              <button className="btn ffh-btn ffh-btn-primary" onClick={() => goTo("#signup")} data-testid="about10-cta-trial">
                Try Free for 7 Days <ArrowRight size={16} className="ms-2" />
              </button>
            </div>
          </div>

          <div className="ffh-a10-metrics" data-testid="about10-metrics">
            {ABOUT_10.metrics.map((m, i) => (
              <div className={`ffh-a10-metric reveal delay-${i % 3}`} key={m.label}>
                <strong>{m.value}</strong>
                <span>{m.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* journey as a compact list */}
      <section className="ffh-section bg-white">
        <Container className="ffh-container">
          <Row className="g-5">
            <Col lg={4} className="reveal">
              <div className="ffh-eyebrow">How we got here</div>
              <h2 className="ffh-h2">Thirty years, five turns</h2>
              <p className="ffh-lead-sm">Each step was a customer asking for something the software could not do yet.</p>
            </Col>
            <Col lg={8} className="reveal delay-1">
              <ol className="ffh-a10-list">
                {ABOUT_ALT.story.map((s) => (
                  <li key={s.year}>
                    <span className="ffh-a10-year">{s.year}</span>
                    <div><h6>{s.title}</h6><p>{s.text}</p></div>
                  </li>
                ))}
              </ol>
            </Col>
          </Row>
        </Container>
      </section>

      {/* vision / mission statements */}
      <section className="ffh-section ffh-soft">
        <Container className="ffh-container">
          <Row className="g-5">
            {[ABOUT_US.vision, ABOUT_US.mission].map((b, i) => (
              <Col md={6} key={b.title} className={`reveal delay-${i}`}>
                <div className="ffh-a10-vm">
                  <span className="ffh-a10-tag">{b.title}</span>
                  <p>{b.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* leadership strip */}
      <section className="ffh-section bg-white" id="leadership">
        <Container className="ffh-container">
          <div className="text-center mb-5 reveal">
            <div className="ffh-eyebrow justify-content-center">Leadership</div>
            <h2 className="ffh-h2">Accountable, not anonymous</h2>
          </div>
          <Row className="g-4">
            {TEAM.map((p, i) => (
              <Col xs={6} lg={3} key={p.name} className={`reveal delay-${i % 3}`}>
                <div className="ffh-a10-person" data-testid={`about10-person-${p.role.toLowerCase().replace(/\s/g, "-")}`}>
                  <img src={`https://i.pravatar.cc/160?img=${p.img}`} alt={p.name} width="72" height="72" loading="lazy" decoding="async" />
                  <h5>{p.name}</h5>
                  <span>{p.role}</span>
                </div>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-5 reveal"><AboutLayoutNav /></div>
        </Container>
      </section>
    </main>
  );
}
