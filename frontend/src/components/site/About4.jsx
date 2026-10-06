import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRight } from "lucide-react";
import { ABOUT_4, ABOUT_ALT, FOUNDER_QUOTE, TEAM } from "../../mock";
import { Icon } from "./Trusted";
import AboutLayoutNav from "./AboutLayoutNav";
import { useGoTo } from "./crmStore";

// Layout 4 — dark hero + mosaic. Bookended by two dark brand panels with a
// numbers bar, an "edge" card row, borderless vision/mission columns, a
// featured-CEO mosaic for leadership and a recognition chip strip.
export default function About4() {
  const goTo = useGoTo();
  const [ceo, ...rest] = TEAM;

  useEffect(() => {
    document.title = "About Us — FFH|ERP";
  }, []);

  return (
    <main className="ffh-a4" data-testid="about4-page">
      {/* Dark hero + numbers */}
      <section className="ffh-a4-hero">
        <Container className="ffh-container">
          <div className="ffh-eyebrow light reveal">{ABOUT_4.eyebrow}</div>
          <h1 className="ffh-h2 ffh-serif-mix reveal">
            {ABOUT_4.title} <em>{ABOUT_4.titleAccent}</em>
          </h1>
          <p className="ffh-a4-lead reveal delay-1">{ABOUT_4.lead}</p>
          <div className="ffh-a4-actions reveal delay-2">
            <button className="btn ffh-btn ffh-btn-primary" onClick={() => goTo("#signup")} data-testid="about4-cta-trial">
              Try Free for 7 Days <ArrowRight size={16} className="ms-2" />
            </button>
            <button className="btn ffh-btn ffh-btn-ghost" onClick={() => goTo("#contact")} data-testid="about4-cta-contact">
              Talk to Sales
            </button>
          </div>
          <div className="ffh-a4-numbers reveal delay-3" data-testid="about4-numbers">
            {ABOUT_4.numbers.map((n) => (
              <div className="ffh-a4-number" key={n.label}>
                <strong>{n.value}</strong>
                <span>{n.label}</span>
              </div>
            ))}
          </div>
          <div className="reveal">
            <AboutLayoutNav dark />
          </div>
        </Container>
      </section>

      {/* Why teams choose us */}
      <section className="ffh-section bg-white">
        <Container className="ffh-container">
          <div className="text-center mb-5 reveal">
            <h2 className="ffh-h2">Why teams choose FFH|ERP</h2>
            <div className="ffh-underline mx-auto" />
          </div>
          <Row className="g-4">
            {ABOUT_4.edge.map((e, i) => (
              <Col md={4} key={e.title} className={`reveal delay-${i}`}>
                <div className="ffh-a4-edge" data-testid={`about4-edge-${i}`}>
                  <div className="ffh-a4-edge-icon">
                    <Icon name={e.icon} size={22} />
                  </div>
                  <h6>{e.title}</h6>
                  <p>{e.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Vision & mission — borderless serif columns */}
      <section className="ffh-section ffh-soft">
        <Container className="ffh-container">
          <Row className="g-5">
            <Col md={6} className="reveal">
              <div className="ffh-a4-vm" data-testid="about4-vision">
                <span className="ffh-a4-vm-tag">Vision</span>
                <p className="ffh-a4-vm-text">{ABOUT_ALT.vision.text}</p>
              </div>
            </Col>
            <Col md={6} className="reveal delay-1">
              <div className="ffh-a4-vm" data-testid="about4-mission">
                <span className="ffh-a4-vm-tag">Mission</span>
                <p className="ffh-a4-vm-text">{ABOUT_ALT.mission.text}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Leadership mosaic: featured CEO + three */}
      <section className="ffh-section bg-white" id="leadership">
        <Container className="ffh-container">
          <div className="text-center mb-5 reveal">
            <div className="ffh-eyebrow justify-content-center">Leadership</div>
            <h2 className="ffh-h2">Who you are buying from</h2>
            <p className="ffh-lead-sm mx-auto">
              Small enough that the people who build the product are the people who answer for it.
            </p>
          </div>
          <Row className="g-4">
            <Col lg={6} className="reveal">
              <div className="ffh-a4-feature" data-testid="about4-team-chief-executive-officer">
                <img
                  src={`https://i.pravatar.cc/240?img=${ceo.img}`}
                  alt={ceo.name}
                  width="112"
                  height="112"
                  loading="lazy"
                  decoding="async"
                />
                <h4>{ceo.name}</h4>
                <div className="ffh-a4-role">{ceo.role}</div>
                <p>{ceo.bio}</p>
                <blockquote>“{FOUNDER_QUOTE.text}”</blockquote>
              </div>
            </Col>
            <Col lg={6}>
              <Row className="g-4">
                {rest.map((p, i) => (
                  <Col xs={12} key={p.name} className={`reveal delay-${i % 2}`}>
                    <div className="ffh-a4-mini" data-testid={`about4-team-${p.role.toLowerCase().replace(/\s/g, "-")}`}>
                      <img
                        src={`https://i.pravatar.cc/180?img=${p.img}`}
                        alt={p.name}
                        width="64"
                        height="64"
                        loading="lazy"
                        decoding="async"
                      />
                      <div>
                        <h6>{p.name}</h6>
                        <div className="ffh-a4-role">{p.role}</div>
                        <p>{p.bio}</p>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Recognition chips */}
      <section className="ffh-section ffh-soft">
        <Container className="ffh-container text-center">
          <div className="reveal">
            <h2 className="ffh-h2 mb-4">Recognised — and still earning it</h2>
            <div className="ffh-a4-chips">
              {ABOUT_4.recognitions.map((r) => (
                <span className="ffh-a4-chip" key={r}>
                  {r}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Dark closing CTA, mirroring the hero */}
      <section className="ffh-a4-cta">
        <Container className="ffh-container text-center">
          <h3>Start running your business on FFH|ERP</h3>
          <p>Free for 7 days, no credit card. Our team migrates your existing data with you.</p>
          <div className="ffh-a4-actions center">
            <button className="btn ffh-btn ffh-btn-primary" onClick={() => goTo("#signup")} data-testid="about4-cta-bottom">
              Try Free for 7 Days <ArrowRight size={16} className="ms-2" />
            </button>
            <button className="btn ffh-btn ffh-btn-ghost" onClick={() => goTo("#contact")}>
              Talk to Sales
            </button>
          </div>
        </Container>
      </section>
    </main>
  );
}
