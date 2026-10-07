import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MILESTONES } from "../../mock";
import { Icon } from "./Trusted";

const Counter = ({ to, suffix }) => {
  const ref = useRef(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const dur = 1600;
      const tick = (t) => {
        const p = Math.min((t - start) / dur, 1);
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{n.toLocaleString("en-US")}{suffix}</span>;
};

export default function Milestones() {
  return (
    <section className="ffh-section bg-white">
      <Container className="ffh-container">
        <div className="text-center mb-5 reveal">
          <h2 className="ffh-h2 text-brand mb-3">We Won't Stop Here!</h2>
          <div className="ffh-underline mx-auto" />
        </div>
        <Row className="g-3">
          {MILESTONES.map((m, i) => (
            <Col xs={6} lg={3} key={m.label} className={`reveal delay-${i}`}>
              <div className="ffh-milestone" data-testid={`milestone-${i}`}>
                <div className="ffh-milestone-icon"><Icon name={m.icon} size={26} /></div>
                <div className="ffh-milestone-num"><Counter to={m.value} suffix={m.suffix} /></div>
                <div className="ffh-milestone-label">{m.label}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
