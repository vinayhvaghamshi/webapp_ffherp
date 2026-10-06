import React from "react";
import { Container } from "react-bootstrap";
import { INTEGRATIONS } from "../../mock";
import { scrollToId } from "./crmStore";

export default function Integrations() {
  // Simple Icons has dropped these brand slugs (they 404), which used to flash a broken
  // image before the text fallback appeared. Show the fallback straight away instead.
  const NO_ICON = new Set(["microsoft", "slack"]);
  return (
    <section className="ffh-section bg-white">
      <Container className="ffh-container text-center">
        <h2 className="ffh-h3-lg mx-auto reveal">
          <span className="text-brand">Integrations.</span> Native integration lets you connect your favourite cloud apps in your tech stack.
        </h2>
        <div className="ffh-integrations reveal delay-1">
          {INTEGRATIONS.map((n) => {
            const slug = n.toLowerCase();
            const hasIcon = !NO_ICON.has(slug);
            return (
              <div className="ffh-int" key={n} title={n} data-testid={`integration-${slug}`}>
                {hasIcon && (
                  <img src={`https://cdn.simpleicons.org/${slug}`} alt={n} width="38" height="38" loading="lazy" decoding="async" onError={(e) => { e.currentTarget.style.display = "none"; e.currentTarget.nextSibling.style.display = "inline"; }} />
                )}
                <span className="ffh-int-fallback" style={hasIcon ? undefined : { display: "inline" }}>{n}</span>
                <small>{n}</small>
              </div>
            );
          })}
        </div>
        <button className="btn ffh-btn ffh-btn-primary mt-4" onClick={() => scrollToId("signup")} data-testid="integrations-cta">Free 7 Days Trial</button>
      </Container>
    </section>
  );
}
