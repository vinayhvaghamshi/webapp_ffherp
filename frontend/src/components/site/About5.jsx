import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRight, BadgeCheck, Quote } from "lucide-react";
import { ABOUT_5, ABOUT_3, ABOUT_ALT, ABOUT_US, TEAM, MILESTONES } from "../../mock";
import AboutLayoutNav from "./AboutLayoutNav";
import { useGoTo } from "./crmStore";

// About layout 5 — the founder's letter: an editorial warm page where the story
// is told in prose, signed, with the company facts and certifications alongside.
export default function About5() {
  const goTo = useGoTo();

  useEffect(() => {
    document.title = "About Us — A letter from the founder | FFH|ERP";
  }, []);

  return (
    <main className="ffh-a5 ffh-logo-theme" data-testid="about5-page">
      <section className="ffh-a5-hero" id="top">
        <Container className="ffh-container">
          <div className="ffh-a5-markrow reveal">
            <img src={`${process.env.PUBLIC_URL}/ffh-logo.png`} alt="FFH ERP" width="66" height="66" decoding="async" fetchpriority="high" />
            <span className="ffh-a5-motif" aria-hidden="true"><i /><i /><i /><i /></span>
          </div>
          <div className="ffh-eyebrow reveal">{ABOUT_5.eyebrow}</div>
          <h1 className="ffh-h2 ffh-serif-mix ffh-a5-title reveal">
            {ABOUT_5.titleLead} <em>{ABOUT_5.titleAccent}</em>
          </h1>
          <p className="ffh-lead-sm reveal delay-1">{ABOUT_5.lead}</p>
        </Container>
      </section>

      {/* letter + facts */}
      <section className="ffh-section bg-white">
        <Container className="ffh-container">
          <Row className="g-5">
            <Col lg={7} className="reveal">
              <div className="ffh-a5-letter">
                <Quote size={28} className="ffh-a5-letter-mark" />
                {ABOUT_5.letter.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                <div className="ffh-a5-sign">{ABOUT_5.signature}</div>
              </div>
            </Col>
            <Col lg={5} className="reveal delay-1">
              <h2 className="ffh-a5-sub">Company at a glance</h2>
              <dl className="ffh-a5-facts">
                {ABOUT_ALT.facts.map((f) => (
                  <div className="ffh-a5-fact" key={f.k}>
                    <dt>{f.k}</dt>
                    <dd>{f.v}</dd>
                  </div>
                ))}
              </dl>
              <div className="ffh-a5-certs">
                {ABOUT_3.certifications.slice(0, 3).map((c) => (
                  <span className="ffh-a5-cert" key={c}><BadgeCheck size={15} />{c}</span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* vision + mission as seals */}
      <section className="ffh-section ffh-soft">
        <Container className="ffh-container">
          <Row className="g-4">
            {[ABOUT_US.vision, ABOUT_US.mission].map((b, i) => (
              <Col md={6} key={b.title} className={`reveal delay-${i}`}>
                <div className="ffh-a5-seal" data-testid={`about5-${b.title.toLowerCase().replace(/\s/g, "-")}`}>
                  <span className="ffh-a5-seal-mark" aria-hidden="true"><i /><i /><i /><i /></span>
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* leadership, minimal */}
      <section className="ffh-section bg-white" id="leadership">
        <Container className="ffh-container">
          <div className="text-center mb-5 reveal">
            <div className="ffh-eyebrow justify-content-center">Leadership</div>
            <h2 className="ffh-h2">Signed by four people</h2>
          </div>
          <Row className="g-4 justify-content-center">
            {TEAM.map((p) => (
              <Col xs={6} lg={3} key={p.name} className="reveal">
                <div className="ffh-a5-person" data-testid={`about5-person-${p.role.toLowerCase().replace(/\s/g, "-")}`}>
                  <img src={`https://i.pravatar.cc/180?img=${p.img}`} alt={p.name} width="84" height="84" loading="lazy" decoding="async" />
                  <h5>{p.name}</h5>
                  <span>{p.role}</span>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* amber ribbon */}
      <section className="ffh-a5-ribbon">
        <Container className="ffh-container">
          <div className="ffh-a5-ribbon-row">
            {MILESTONES.map((m) => (
              <div className="ffh-a5-ribbon-item" key={m.label}>
                <strong>{m.value.toLocaleString("en-US")}{m.suffix}</strong>
                <span>{m.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="ffh-section bg-white">
        <Container className="ffh-container text-center">
          <div className="reveal">
            <h2 className="ffh-h2 mb-3">Ready to run your business on one system?</h2>
            <p className="ffh-lead-sm mx-auto mb-4">Start a free 7-day trial — no credit card, and our team migrates your data with you.</p>
            <div className="ffh-a5-actions">
              <button className="btn ffh-btn ffh-btn-primary" onClick={() => goTo("#signup")} data-testid="about5-cta-trial">
                Try Free for 7 Days <ArrowRight size={16} className="ms-2" />
              </button>
              <button className="btn ffh-btn ffh-btn-outline" onClick={() => goTo("#contact")} data-testid="about5-cta-contact">Talk to Sales</button>
            </div>
            <div className="mt-4"><AboutLayoutNav /></div>
          </div>
        </Container>
      </section>
    </main>
  );
}
