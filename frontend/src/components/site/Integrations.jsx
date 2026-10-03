import React from "react";
import { Container } from "react-bootstrap";
import { INTEGRATIONS } from "../../mock";
import { scrollToId } from "./crmStore";

export default function Integrations() {
  return (
    <section className="ffh-section bg-white">
      <Container className="ffh-container text-center">
        <h2 className="ffh-h3-lg mx-auto reveal">
          <span className="text-brand">Integrations.</span> Native integration lets you connect your favourite cloud apps in your tech stack.
        </h2>
        <div className="ffh-integrations reveal delay-1">
          {INTEGRATIONS.map((n) => (
            <div className="ffh-int" key={n} title={n} data-testid={`integration-${n.toLowerCase()}`}>
              <img src={`https://cdn.simpleicons.org/${n.toLowerCase()}`} alt={n} onError={(e) => { e.currentTarget.style.display = "none"; e.currentTarget.nextSibling.style.display = "inline"; }} />
              <span className="ffh-int-fallback">{n}</span>
              <small>{n}</small>
            </div>
          ))}
        </div>
        <button className="btn ffh-btn ffh-btn-primary mt-4" onClick={() => scrollToId("signup")} data-testid="integrations-cta">Free 7 Days Trial</button>
      </Container>
    </section>
  );
}
