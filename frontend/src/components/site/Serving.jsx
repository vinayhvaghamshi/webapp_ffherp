import React from "react";
import { Container } from "react-bootstrap";
import { SERVING_BRANDS } from "../../mock";

const Mark = ({ b }) => {
  switch (b.key) {
    case "mercedes":
      return (
        <span className="sv-merc">
          <svg width="34" height="34" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="none" stroke="#4b5563" strokeWidth="2" /><path d="M20 3 L22 20 L20 22 L18 20 Z M20 22 L35 29 L34 31 L19 23 Z M20 22 L6 31 L5 29 L21 23 Z" fill="#4b5563" /></svg>
          Mercedes-Benz
        </span>
      );
    case "force":
      return <span className="sv-force"><b>FORCE</b><small>MOTORS</small></span>;
    case "shiji":
      return <span className="sv-shiji">Shiji</span>;
    case "ada":
      return <span className="sv-ada">ADA<i /></span>;
    case "minor":
      return <span className="sv-minor">MINOR<small>HOTELS</small></span>;
    case "acme":
      return <span className="sv-acme">ACME<br />BRICK</span>;
    case "cimco":
      return <span className="sv-cimco"><b>TOROMONT</b><em>CIMCO</em></span>;
    case "nrs":
      return <span className="sv-nrs"><i>NRS</i><span>NATIONAL<br /><em>RETAIL</em><br />SOLUTIONS</span></span>;
    case "avineon":
      return <span className="sv-avineon"><i />AVINEON.</span>;
    default:
      return <span>{b.name}</span>;
  }
};

export default function Serving() {
  return (
    <section className="ffh-serving" data-testid="serving-section">
      <Container className="ffh-container text-center">
        <h2 className="sv-title reveal">Serving 2.5K active users for 21 years</h2>
        <div className="sv-row reveal delay-1">
          {SERVING_BRANDS.slice(0, 5).map((b) => (
            <div className="sv-pill" key={b.key} title={b.name} data-testid={`serving-brand-${b.key}`}><Mark b={b} /></div>
          ))}
        </div>
        <div className="sv-row reveal delay-2">
          {SERVING_BRANDS.slice(5).map((b) => (
            <div className="sv-pill" key={b.key} title={b.name} data-testid={`serving-brand-${b.key}`}><Mark b={b} /></div>
          ))}
        </div>
      </Container>
    </section>
  );
}
