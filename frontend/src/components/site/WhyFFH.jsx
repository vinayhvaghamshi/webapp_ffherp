import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Check } from "lucide-react";
import { WHY_FEATURES } from "../../mock";
import { Icon } from "./Trusted";

const AREAS = ["Sales", "Finance", "Support", "Projects"];

export default function WhyFFH() {
  const [on, setOn] = useState({ Sales: true, Finance: true, Support: true, Projects: true });
  const count = Object.values(on).filter(Boolean).length;
  const pct = Math.round(52 + count * 7.5);
  const status = pct >= 80 ? "Excellent" : pct >= 65 ? "Good" : "Needs focus";

  return (
    <section className="ffh-section ffh-soft" id="features">
      <Container className="ffh-container">
        <div className="text-center mb-5 reveal">
          <h2 className="ffh-h2">Why teams choose FFH|ERP</h2>
          <p className="ffh-lead-sm mx-auto">Powerful capabilities that keep your whole team productive.</p>
        </div>
        <Row className="g-5 align-items-center">
          <Col lg={6} className="reveal">
            <div className="ffh-health-card" data-testid="business-health-card">
              <div className="ffh-health-top">
                <div className="d-flex justify-content-between align-items-end">
                  <div>
                    <small>Business health</small>
                    <h4>{status}</h4>
                  </div>
                  <strong className="ffh-health-pct">{pct}%</strong>
                </div>
                <div className="ffh-health-track"><div style={{ width: `${pct}%` }} /></div>
                <small>{pct}% of monthly targets achieved</small>
              </div>
              <Row className="g-2 mt-2">
                {AREAS.map((a) => (
                  <Col xs={6} key={a}>
                    <button className={`ffh-area ${on[a] ? "on" : ""}`} onClick={() => setOn({ ...on, [a]: !on[a] })} data-testid={`health-area-${a.toLowerCase()}`}>
                      <span className="ffh-area-check">{on[a] && <Check size={14} strokeWidth={3} />}</span>{a}
                    </button>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
          <Col lg={6}>
            {WHY_FEATURES.map((w, i) => (
              <div className={`ffh-feature reveal delay-${i}`} key={w.title} data-testid={`why-feature-${i}`}>
                <div className="ffh-feature-icon"><Icon name={w.icon} size={20} /></div>
                <div>
                  <h5>{w.title}</h5>
                  <p>{w.desc}</p>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
