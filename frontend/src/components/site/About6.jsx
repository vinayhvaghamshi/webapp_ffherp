import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRight } from "lucide-react";
import { ABOUT_6, ABOUT_ALT, ABOUT_US, TEAM } from "../../mock";
import AboutLayoutNav from "./AboutLayoutNav";
import { useGoTo } from "./crmStore";

// About layout 6 — a horizontal journey: the years run left to right along an
// amber rail, followed by what comes next and a compact leadership table.
export default function About6() {
  const goTo = useGoTo();

  useEffect(() => {
    document.title = "About Us — Our journey | FFH|ERP";
  }, []);

  return (
    <main className="ffh-a6 ffh-logo-theme" data-testid="about6-page">
      <section className="ffh-a6-hero" id="top">
        <Container className="ffh-container text-center">
          <span className="ffh-a6-mark reveal">
            <img src={`${process.env.PUBLIC_URL}/ffh-logo.png`} alt="FFH ERP" width="72" height="72" decoding="async" fetchpriority="high" />
          </span>
          <div className="ffh-eyebrow justify-content-center reveal">{ABOUT_6.eyebrow}</div>
          <h1 className="ffh-h2 ffh-serif-mix ffh-a6-title reveal">
            {ABOUT_6.titleLead} <em>{ABOUT_6.titleAccent}</em>
          </h1>
          <p className="ffh-lead-sm reveal delay-1">{ABOUT_6.lead}</p>
        </Container>
      </section>

      {/* horizontal timeline */}
      <section className="ffh-a6-rail-section">
        <Container className="ffh-container">
          <div className="ffh-a6-rail" data-testid="about6-timeline">
            {ABOUT_ALT.story.map((s) => (
              <div className="ffh-a6-node reveal" key={s.year} data-testid={`about6-year-${s.year}`}>
                <span className="ffh-a6-year">{s.year}</span>
                <span className="ffh-a6-dot" aria-hidden="true" />
                <h6>{s.title}</h6>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* what's next */}
      <section className="ffh-section bg-white">
        <Container className="ffh-container">
          <div className="text-center mb-5 reveal">
            <div className="ffh-eyebrow justify-content-center">Next</div>
            <h2 className="ffh-h2">Where the next three years go</h2>
          </div>
          <Row className="g-4">
            {ABOUT_6.next.map((n, i) => (
              <Col md={4} key={n.title} className={`reveal delay-${i}`}>
                <div className="ffh-a6-card">
                  <span className="ffh-a6-num">{String(i + 1).padStart(2, "0")}</span>
                  <h6>{n.title}</h6>
                  <p>{n.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* vision / mission inline */}
      <section className="ffh-section ffh-soft">
        <Container className="ffh-container">
          <Row className="g-5">
            {[ABOUT_US.vision, ABOUT_US.mission].map((b, i) => (
              <Col md={6} key={b.title} className={`reveal delay-${i}`}>
                <div className="ffh-a6-vm">
                  <span className="ffh-a6-tag">{b.title}</span>
                  <p>{b.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* leadership table */}
      <section className="ffh-section bg-white" id="leadership">
        <Container className="ffh-container">
          <div className="text-center mb-5 reveal">
            <div className="ffh-eyebrow justify-content-center">Leadership</div>
            <h2 className="ffh-h2">Who runs it</h2>
          </div>
          <div className="ffh-a6-table">
            {TEAM.map((p) => (
              <div className="ffh-a6-row reveal" key={p.name} data-testid={`about6-row-${p.role.toLowerCase().replace(/\s/g, "-")}`}>
                <img src={`https://i.pravatar.cc/140?img=${p.img}`} alt={p.name} width="56" height="56" loading="lazy" decoding="async" />
                <div className="ffh-a6-row-name"><h5>{p.name}</h5><span>{p.role}</span></div>
                <p>{p.bio}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-5 reveal">
            <button className="btn ffh-btn ffh-btn-primary" onClick={() => goTo("#signup")} data-testid="about6-cta-trial">
              Try Free for 7 Days <ArrowRight size={16} className="ms-2" />
            </button>
            <div className="mt-4"><AboutLayoutNav /></div>
          </div>
        </Container>
      </section>
    </main>
  );
}
