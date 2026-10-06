import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import * as Icons from "lucide-react";
import { CLIENTS } from "../../mock";

export const Icon = ({ name, ...p }) => {
  const C = Icons[name] || Icons.Circle;
  return <C {...p} />;
};

export default function Trusted() {
  const [active, setActive] = useState(4);
  const [paused, setPaused] = useState(false);
  const c = CLIENTS[active];

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive((a) => (a + 1) % CLIENTS.length), 5000);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section className="ffh-trusted" id="why">
      <Container className="ffh-container">
        <Row className="align-items-center g-5">
          <Col lg={6} className="reveal">
            <h2 className="ffh-h2 mb-5">Trusted by Over <span className="d-lg-block">2,500+</span> Active Users Worldwide</h2>
            <div className="ffh-logo-grid" onMouseLeave={() => setPaused(false)}>
              {CLIENTS.map((cl, i) => (
                <button key={cl.name} className={`ffh-logo-tile ${i === active ? "active" : ""}`}
                  onMouseEnter={() => { setPaused(true); setActive(i); }} onClick={() => setActive(i)} data-testid={`client-logo-${i}`}>
                  <Icon name={cl.icon} size={18} />
                  <span>{cl.name}</span>
                </button>
              ))}
            </div>
          </Col>
          <Col lg={6} className="reveal delay-1">
            <div className="ffh-quote-card" key={c.name} data-testid="client-quote-card">
              <div className="ffh-quote-brand"><Icon name={c.icon} size={20} /> {c.name}</div>
              <Icons.Quote className="ffh-quote-mark" size={30} />
              <p className="ffh-quote-text">{c.quote}</p>
              <img src={`https://i.pravatar.cc/120?img=${c.img}`} alt={c.person} className="ffh-quote-avatar" width="66" height="66" loading="lazy" decoding="async" />
              <div className="ffh-quote-name">{c.person}</div>
              <div className="ffh-quote-role">{c.role}</div>
              <div className="ffh-dots">
                {CLIENTS.map((_, i) => (
                  <span key={i} className={i === active ? "on" : ""} onClick={() => setActive(i)} />
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
