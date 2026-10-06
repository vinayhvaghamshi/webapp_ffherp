import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { ABOUT_3, ABOUT_US, TEAM } from "../../mock";
import { Icon } from "./Trusted";
import AboutLayoutNav from "./AboutLayoutNav";
import { useGoTo } from "./crmStore";

// Layout 3 — editorial / index style: breadcrumb banner, a narrative column
// beside a stat grid, alternating pillar rows, a single combined vision +
// mission statement, a leadership directory list and a certifications strip.
export default function About3() {
  const goTo = useGoTo();

  useEffect(() => {
    document.title = "About Us — Company | FFH|ERP";
  }, []);

  return (
    <main className="ffh-a3" data-testid="about3-page">
      {/* Banner with breadcrumb */}
      <section className="ffh-a3-banner">
        <Container className="ffh-container">
          <nav className="ffh-a3-crumbs reveal" aria-label="Breadcrumb">
            {ABOUT_3.breadcrumb.map((c, i) => (
              <span key={c}>
                {i > 0 && <i>/</i>}
                {c}
              </span>
            ))}
          </nav>
          <h1 className="ffh-h2 ffh-serif-mix reveal">
            {ABOUT_3.title} <em>{ABOUT_3.titleAccent}</em>
          </h1>
          <p className="ffh-lead-sm reveal delay-1">{ABOUT_3.lead}</p>
          <div className="reveal delay-2">
            <AboutLayoutNav />
          </div>
        </Container>
      </section>

      {/* Narrative + headline numbers */}
      <section className="ffh-section bg-white">
        <Container className="ffh-container">
          <Row className="g-5">
            <Col lg={7} className="reveal">
              <h2 className="ffh-h3-lg mb-4">Who we are</h2>
              {ABOUT_3.narrative.map((p) => (
                <p className="ffh-a3-para" key={p}>
                  {p}
                </p>
              ))}
            </Col>
            <Col lg={5} className="reveal delay-1">
              <div className="ffh-a3-highlights" data-testid="about3-highlights">
                {ABOUT_3.highlights.map((h) => (
                  <div className="ffh-a3-highlight" key={h.label}>
                    <strong>{h.value}</strong>
                    <span>{h.label}</span>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Alternating pillar rows */}
      <section className="ffh-section ffh-soft">
        <Container className="ffh-container">
          <div className="text-center mb-5 reveal">
            <h2 className="ffh-h2">What sets us apart</h2>
            <div className="ffh-underline mx-auto" />
          </div>
          {ABOUT_3.pillars.map((p, i) => {
            const flip = i % 2 === 1;
            return (
              <Row className="g-4 g-lg-5 align-items-center ffh-a3-pillar" key={p.title}>
                <Col md={4} className={`reveal ${flip ? "order-md-2" : ""}`}>
                  <div className="ffh-a3-pillar-icon">
                    <Icon name={p.icon} size={38} />
                  </div>
                </Col>
                <Col md={8} className={`reveal delay-1 ${flip ? "order-md-1" : ""}`}>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </Col>
              </Row>
            );
          })}
        </Container>
      </section>

      {/* Vision & mission as one editorial statement */}
      <section className="ffh-section bg-white">
        <Container className="ffh-container">
          <div className="ffh-a3-statement reveal" data-testid="about3-statement">
            <div className="ffh-a3-block">
              <span className="ffh-a3-tag">Vision</span>
              <h3 className="ffh-serif-h3">{ABOUT_US.vision.text}</h3>
            </div>
            <hr className="ffh-a3-rule" />
            <div className="ffh-a3-block">
              <span className="ffh-a3-tag">Mission</span>
              <p>{ABOUT_US.mission.text}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Leadership directory */}
      <section className="ffh-section ffh-soft" id="leadership">
        <Container className="ffh-container">
          <div className="text-center mb-5 reveal">
            <div className="ffh-eyebrow justify-content-center">Leadership</div>
            <h2 className="ffh-h2">The people accountable</h2>
            <p className="ffh-lead-sm mx-auto">
              Four roles, one scorecard: the product our customers run their business on.
            </p>
          </div>
          <div className="ffh-a3-team">
            {TEAM.map((p) => (
              <div className="ffh-a3-member reveal" key={p.name} data-testid={`about3-member-${p.role.toLowerCase().replace(/\s/g, "-")}`}>
                <img
                  src={`https://i.pravatar.cc/160?img=${p.img}`}
                  alt={p.name}
                  width="64"
                  height="64"
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <h5>{p.name}</h5>
                  <span className="ffh-a3-role">{p.role}</span>
                </div>
                <p>{p.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Certifications + closing CTA */}
      <section className="ffh-section bg-white">
        <Container className="ffh-container text-center">
          <div className="reveal">
            <h2 className="ffh-h2 mb-4">Certified, compliant, accountable</h2>
            <div className="ffh-a3-certs">
              {ABOUT_3.certifications.map((c) => (
                <span className="ffh-a3-cert" key={c}>
                  <BadgeCheck size={15} /> {c}
                </span>
              ))}
            </div>
            <div className="ffh-a3-cta">
              <button className="btn ffh-btn ffh-btn-primary" onClick={() => goTo("#signup")} data-testid="about3-cta-trial">
                Try Free for 7 Days <ArrowRight size={16} className="ms-2" />
              </button>
              <button className="btn ffh-btn ffh-btn-outline" onClick={() => goTo("#contact")} data-testid="about3-cta-contact">
                Talk to Sales
              </button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
