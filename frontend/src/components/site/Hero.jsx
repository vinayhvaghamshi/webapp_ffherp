import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Check } from "lucide-react";
import { HERO_POINTS, HERO_STATS } from "../../mock";
import SignupForm from "./SignupForm";

export default function Hero() {
  return (
    <section className="ffh-hero" id="top">
      <Container className="ffh-container">
        <Row className="align-items-center g-5">
          <Col lg={6} className="reveal">
            <span className="ffh-pill">Smart CRM &amp; ERP Software</span>
            <h1 className="ffh-hero-title" data-testid="hero-title">
              Run your whole business with <span className="text-brand">one smart CRM &amp; ERP</span>
            </h1>
            <p className="ffh-hero-lead">
              Manage Sales &amp; Marketing, Materials &amp; Finance, Projects, Work &amp; Support Activities with just One Tool. Thousands of Indian businesses trust FFH|ERP to respond faster to leads, bill smarter, and run leaner operations.
            </p>
            <ul className="ffh-checklist">
              {HERO_POINTS.map((p) => (
                <li key={p}><span className="ffh-check"><Check size={13} strokeWidth={3} /></span>{p}</li>
              ))}
            </ul>
            <div className="ffh-hero-stats">
              {HERO_STATS.map((s) => (
                <div key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>
              ))}
            </div>
          </Col>
          <Col lg={6} className="d-flex justify-content-lg-end reveal delay-1">
            <SignupForm />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
