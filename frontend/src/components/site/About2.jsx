import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRight, Quote } from "lucide-react";
import { ABOUT_ALT, FOUNDER_QUOTE, TEAM } from "../../mock";
import AboutLayoutNav from "./AboutLayoutNav";
import { useGoTo } from "./crmStore";

// Alternate About layout. The story-led variant: centred hero with headline
// numbers, company facts + founder quote, a journey timeline, a split
// vision/mission panel, horizontal leadership cards and numbered principles.
export default function About2() {
  const goTo = useGoTo();

  useEffect(() => {
    document.title = "About Us — Our Story | FFH|ERP";
  }, []);

  return (
    <main className="ffh-a2" data-testid="about2-page">
      {/* Centred hero + headline numbers */}
      <section className="ffh-a2-hero">
        <Container className="ffh-container text-center">
          <div className="ffh-eyebrow justify-content-center reveal">Our Story</div>
          <h1 className="ffh-h2 ffh-serif-mix reveal">
            {ABOUT_ALT.title} <em>{ABOUT_ALT.titleAccent}</em>
          </h1>
          <p className="ffh-lead-sm reveal delay-1">{ABOUT_ALT.lead}</p>
          <div className="ffh-a2-stats reveal delay-2">
            {ABOUT_ALT.stats.map((s) => (
              <div className="ffh-a2-stat" key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
          <div className="reveal delay-3">
            <AboutLayoutNav />
          </div>
        </Container>
      </section>

      {/* Company at a glance + founder quote */}
      <section className="ffh-section bg-white">
        <Container className="ffh-container">
          <Row className="g-5 align-items-center">
            <Col lg={5} className="reveal">
              <h2 className="ffh-h2 mb-4">Company at a glance</h2>
              <dl className="ffh-a2-facts">
                {ABOUT_ALT.facts.map((f) => (
                  <div className="ffh-a2-fact" key={f.k}>
                    <dt>{f.k}</dt>
                    <dd>{f.v}</dd>
                  </div>
                ))}
              </dl>
            </Col>
            <Col lg={7} className="reveal delay-1">
              <figure className="ffh-a2-quote" data-testid="about2-founder-quote">
                <Quote className="ffh-a2-quote-mark" size={34} />
                <blockquote>{FOUNDER_QUOTE.text}</blockquote>
                <figcaption>
                  <img
                    src={`https://i.pravatar.cc/160?img=${FOUNDER_QUOTE.img}`}
                    alt={FOUNDER_QUOTE.person}
                    width="56"
                    height="56"
                    loading="lazy"
                    decoding="async"
                  />
                  <span>
                    <strong>{FOUNDER_QUOTE.person}</strong>
                    <small>{FOUNDER_QUOTE.role}</small>
                  </span>
                </figcaption>
              </figure>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Journey timeline */}
      <section className="ffh-section ffh-soft" id="journey">
        <Container className="ffh-container">
          <div className="text-center mb-5 reveal">
            <h2 className="ffh-h2">Our journey so far</h2>
            <div className="ffh-underline mx-auto" />
          </div>
          <div className="ffh-a2-timeline">
            {ABOUT_ALT.story.map((s) => (
              <div className="ffh-a2-item reveal" key={s.year} data-testid={`about2-year-${s.year}`}>
                <div className="ffh-a2-year">{s.year}</div>
                <div className="ffh-a2-body">
                  <h6>{s.title}</h6>
                  <p>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Vision & mission as a split panel */}
      <section className="ffh-section bg-white">
        <Container className="ffh-container">
          <Row className="g-4">
            <Col lg={6} className="reveal">
              <div className="ffh-a2-panel dark" data-testid="about2-vision">
                <span className="ffh-a2-panel-tag">Vision</span>
                <h3>{ABOUT_ALT.vision.title}</h3>
                <p>{ABOUT_ALT.vision.text}</p>
              </div>
            </Col>
            <Col lg={6} className="reveal delay-1">
              <div className="ffh-a2-panel" data-testid="about2-mission">
                <span className="ffh-a2-panel-tag">Mission</span>
                <h3>{ABOUT_ALT.mission.title}</h3>
                <p>{ABOUT_ALT.mission.text}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Leadership — horizontal cards */}
      <section className="ffh-section ffh-soft" id="leadership">
        <Container className="ffh-container">
          <div className="text-center mb-5 reveal">
            <div className="ffh-eyebrow justify-content-center">Leadership</div>
            <h2 className="ffh-h2">Who runs the company</h2>
            <p className="ffh-lead-sm mx-auto">
              The four people accountable for the product, the numbers and the promises we make to customers.
            </p>
          </div>
          <Row className="g-4">
            {TEAM.map((p, i) => (
              <Col md={6} key={p.name} className={`reveal delay-${i % 2}`}>
                <div className="ffh-a2-leader" data-testid={`about2-team-${p.role.toLowerCase().replace(/\s/g, "-")}`}>
                  <img
                    src={`https://i.pravatar.cc/200?img=${p.img}`}
                    alt={p.name}
                    width="88"
                    height="88"
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <h5>{p.name}</h5>
                    <div className="ffh-a2-role">{p.role}</div>
                    <p>{p.bio}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Principles */}
      <section className="ffh-section bg-white">
        <Container className="ffh-container">
          <div className="text-center mb-5 reveal">
            <h2 className="ffh-h2">What we hold ourselves to</h2>
            <div className="ffh-underline mx-auto" />
          </div>
          <Row className="g-4">
            {ABOUT_ALT.principles.map((p, i) => (
              <Col xs={12} sm={6} lg={3} key={p.title} className={`reveal delay-${i}`}>
                <div className="ffh-a2-principle">
                  <span className="ffh-a2-num">{String(i + 1).padStart(2, "0")}</span>
                  <h6>{p.title}</h6>
                  <p>{p.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Closing call to action */}
      <section className="ffh-section ffh-soft">
        <Container className="ffh-container text-center">
          <div className="reveal">
            <h2 className="ffh-h2">See it running on your own numbers</h2>
            <p className="ffh-lead-sm mx-auto">
              Start a free 7-day trial, or talk to us about moving your existing data across. No credit card required.
            </p>
            <div className="ffh-a2-actions">
              <button className="btn ffh-btn ffh-btn-primary" onClick={() => goTo("#signup")} data-testid="about2-cta-trial">
                Try Free for 7 Days <ArrowRight size={16} className="ms-2" />
              </button>
              <button className="btn ffh-btn ffh-btn-outline" onClick={() => goTo("#contact")} data-testid="about2-cta-contact">
                Talk to Sales
              </button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
