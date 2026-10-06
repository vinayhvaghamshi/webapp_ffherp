import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRight, BadgeCheck, Quote } from "lucide-react";
import { ABOUT_8, ABOUT_3, ABOUT_US, FOUNDER_QUOTE, TEAM } from "../../mock";
import AboutLayoutNav from "./AboutLayoutNav";
import { useGoTo } from "./crmStore";

// About layout 8 — magazine split: large type on the left, an orange panel of
// prose on the right, then a full-bleed amber band for vision and mission.
export default function About8() {
  const goTo = useGoTo();

  useEffect(() => {
    document.title = "About Us — Built around one promise | FFH|ERP";
  }, []);

  return (
    <main className="ffh-a8 ffh-logo-theme" data-testid="about8-page">
      <section className="ffh-a8-hero" id="top">
        <Container className="ffh-container">
          <Row className="g-5 align-items-start">
            <Col lg={5} className="reveal">
              <div className="ffh-a8-markrow">
                <img src="/ffh-logo.png" alt="FFH ERP" width="62" height="62" decoding="async" fetchpriority="high" />
                <div className="ffh-eyebrow">{ABOUT_8.eyebrow}</div>
              </div>
              <h1 className="ffh-hero-title ffh-a8-title">
                {ABOUT_8.titleLead} <span className="ffh-a8-accent">{ABOUT_8.titleAccent}</span>
              </h1>
              <p className="ffh-a8-lead">{ABOUT_8.lead}</p>
              <button className="btn ffh-btn ffh-btn-primary" onClick={() => goTo("#signup")} data-testid="about8-cta-trial">
                Try Free for 7 Days <ArrowRight size={16} className="ms-2" />
              </button>
            </Col>

            <Col lg={7} className="reveal delay-1">
              <div className="ffh-a8-panel">
                {ABOUT_8.statement.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                <figure className="ffh-a8-quote">
                  <Quote size={24} />
                  <blockquote>{FOUNDER_QUOTE.text}</blockquote>
                  <figcaption>{FOUNDER_QUOTE.person} · {FOUNDER_QUOTE.role}</figcaption>
                </figure>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* full-bleed amber band: vision + mission */}
      <section className="ffh-a8-band">
        <Container className="ffh-container">
          <Row className="g-5">
            {[ABOUT_US.vision, ABOUT_US.mission].map((b, i) => (
              <Col md={6} key={b.title} className={`reveal delay-${i}`}>
                <div className="ffh-a8-vm" data-testid={`about8-${b.title.toLowerCase().replace(/\s/g, "-")}`}>
                  <span className="ffh-a8-tag">{b.title}</span>
                  <p>{b.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* leadership profiles with amber headers */}
      <section className="ffh-section bg-white" id="leadership">
        <Container className="ffh-container">
          <div className="text-center mb-5 reveal">
            <div className="ffh-eyebrow justify-content-center">Leadership</div>
            <h2 className="ffh-h2">The people behind the promise</h2>
          </div>
          <Row className="g-4">
            {TEAM.map((p, i) => (
              <Col md={6} key={p.name} className={`reveal delay-${i % 2}`}>
                <div className="ffh-a8-profile" data-testid={`about8-profile-${p.role.toLowerCase().replace(/\s/g, "-")}`}>
                  <div className="ffh-a8-profile-head">
                    <img src={`https://i.pravatar.cc/180?img=${p.img}`} alt={p.name} width="72" height="72" loading="lazy" decoding="async" />
                    <div><h5>{p.name}</h5><span>{p.role}</span></div>
                  </div>
                  <p>{p.bio}</p>
                </div>
              </Col>
            ))}
          </Row>
          <div className="ffh-a8-certs reveal">
            {ABOUT_3.certifications.map((c) => (
              <span className="ffh-a8-cert" key={c}><BadgeCheck size={15} />{c}</span>
            ))}
          </div>
          <div className="text-center mt-5 reveal"><AboutLayoutNav /></div>
        </Container>
      </section>
    </main>
  );
}
