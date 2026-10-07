import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CircleCheck } from "lucide-react";
import { toast } from "sonner";
import { PLANS } from "../../mock";
import { scrollToId } from "./crmStore";

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  const choose = (p) => {
    localStorage.setItem("ffh_selected_plan", JSON.stringify({ plan: p.name, billing: yearly ? "yearly" : "monthly" }));
    toast.success(`${p.name} plan selected`, { description: "Complete the form above to start your free trial." });
    scrollToId("signup");
  };

  return (
    <section className="ffh-section bg-white" id="pricing">
      <Container className="ffh-container">
        <div className="text-center reveal">
          <h2 className="ffh-h2">Choose a Plan <span className="d-block">That's Right For You</span></h2>
          <p className="ffh-lead-sm mx-auto">Choose the plan that works best for you, feel free to contact us.</p>
          <div className="ffh-billing" role="group">
            <button className={!yearly ? "active" : ""} onClick={() => setYearly(false)} data-testid="billing-monthly">Bill Monthly</button>
            <button className={yearly ? "active" : ""} onClick={() => setYearly(true)} data-testid="billing-yearly">Bill Yearly</button>
          </div>
          <p className="ffh-tiny">{yearly ? "Prices shown are per user, per month, billed annually." : "Prices shown are per user, per month, billed monthly."}</p>
        </div>
        <Row className="g-4 align-items-center mt-2">
          {PLANS.map((p, i) => (
            <Col md={4} key={p.name} className={`reveal delay-${i}`}>
              <div className={`ffh-plan ${p.popular ? "popular" : ""}`} data-testid={`plan-${p.name.toLowerCase()}`}>
                {p.popular && <span className="ffh-plan-badge">Most Popular</span>}
                <h3>{p.name}</h3>
                <p className="ffh-plan-sub">{p.sub}</p>
                <div className="ffh-price"><small>₹</small><strong data-testid={`plan-price-${p.name.toLowerCase()}`}>{yearly ? p.yearly : p.monthly}</strong><span>/user / mo</span></div>
                <button className={`btn ffh-btn w-100 ${p.popular ? "ffh-btn-white" : "ffh-btn-primary"}`} onClick={() => choose(p)} data-testid={`plan-cta-${p.name.toLowerCase()}`}>{p.cta}</button>
                <ul>
                  {p.features.map((f) => <li key={f}><CircleCheck size={16} /> {f}</li>)}
                </ul>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
