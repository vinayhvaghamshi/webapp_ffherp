import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Check, Clock, IndianRupee, TrendingUp, Users } from "lucide-react";
import { CRM_SEED, formatINR, HOME12_HERO } from "../../mock";
import SignupForm from "./SignupForm";
import HomeLayoutNav from "./HomeLayoutNav";
import Trusted from "./Trusted";
import Modules from "./Modules";
import Milestones from "./Milestones";
import WhyFFH from "./WhyFFH";
import LiveCRM from "./LiveCRM";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import Serving from "./Serving";
import Integrations from "./Integrations";
import FaqContact from "./FaqContact";

// Layout 12 — logo theme, product-panel hero: the live numbers lead and the
// trial card moves into a warm band directly underneath.
export default function Home12() {
  useEffect(() => {
    document.title = "FFH|ERP — See today's business, not last month's report";
  }, []);

  const won = CRM_SEED.leads.filter((l) => l.stage === "Won").reduce((s, l) => s + l.value, 0);
  const openLeads = CRM_SEED.leads.filter((l) => l.stage !== "Won").length;
  const openTickets = CRM_SEED.tickets.filter((t) => t.open).length;
  const maxLead = Math.max(...CRM_SEED.leads.map((l) => l.value));
  const bars = CRM_SEED.leads.map((l) => ({ name: l.name, pct: Math.round((l.value / maxLead) * 100), won: l.stage === "Won" }));

  return (
    <main className="ffh-h12 ffh-logo-theme" data-testid="home12-page">
      <section className="ffh-h12-hero" id="top">
        <Container className="ffh-container">
          <Row className="g-5 align-items-center">
            <Col lg={6} className="reveal">
              <div className="ffh-h12-markrow">
                <img src="/ffh-logo.png" alt="FFH ERP" width="64" height="64" decoding="async" fetchpriority="high" />
                <span className="ffh-h12-motif" aria-hidden="true"><i /><i /><i /><i /></span>
              </div>
              <div className="ffh-eyebrow">{HOME12_HERO.eyebrow}</div>
              <h1 className="ffh-hero-title ffh-h12-title">
                {HOME12_HERO.titleLead} <span className="ffh-h12-accent">{HOME12_HERO.titleAccent}</span>
              </h1>
              <p className="ffh-h12-lead">{HOME12_HERO.lead}</p>
              <Row className="g-3 ffh-h12-points">
                {HOME12_HERO.points.map((p) => (
                  <Col xs={4} key={p.label}>
                    <div className="ffh-h12-point"><strong>{p.value}</strong><span>{p.label}</span></div>
                  </Col>
                ))}
              </Row>
              <HomeLayoutNav />
            </Col>

            <Col lg={6} className="reveal delay-1">
              <div className="ffh-h12-panel" data-testid="home12-panel">
                <div className="ffh-h12-panel-head">
                  <span className="ffh-h12-live"><i />{HOME12_HERO.panelTitle}</span>
                  <span className="ffh-h12-time"><Clock size={13} /> just now</span>
                </div>
                <Row className="g-3">
                  <Col xs={4}><div className="ffh-h12-kpi"><IndianRupee size={14} /><span>Revenue (won)</span><strong>{formatINR(won)}</strong></div></Col>
                  <Col xs={4}><div className="ffh-h12-kpi"><Users size={14} /><span>Open leads</span><strong>{openLeads}</strong></div></Col>
                  <Col xs={4}><div className="ffh-h12-kpi"><TrendingUp size={14} /><span>Open tickets</span><strong>{openTickets}</strong></div></Col>
                </Row>
                <div className="ffh-h12-chart">
                  {bars.map((b) => (
                    <div className="ffh-h12-bar-col" key={b.name} title={b.name}>
                      <div className={`ffh-h12-bar ${b.won ? "won" : ""}`} style={{ height: `${Math.max(b.pct, 12)}%` }} />
                    </div>
                  ))}
                </div>
                <ul className="ffh-h12-feed">
                  {CRM_SEED.activity.slice(0, 3).map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* trial band */}
      <section className="ffh-h12-signup">
        <Container className="ffh-container">
          <Row className="g-5 align-items-center">
            <Col lg={5} className="reveal">
              <div className="ffh-eyebrow">Start in a day</div>
              <h2 className="ffh-h2">Put your own numbers in it</h2>
              <p className="ffh-lead-sm">
                Start the trial, load a month of your real sales and purchases, and judge it on your own data — with our
                team on the phone while you set up.
              </p>
              <ul className="ffh-checklist">
                {HOME12_HERO.trust.map((t) => (
                  <li key={t}><span className="ffh-check"><Check size={13} strokeWidth={3} /></span>{t}</li>
                ))}
              </ul>
            </Col>
            <Col lg={7} className="d-flex justify-content-lg-end reveal delay-1">
              <SignupForm />
            </Col>
          </Row>
        </Container>
      </section>

      <Trusted />
      <Modules />
      <Milestones />
      <WhyFFH />
      <LiveCRM />
      <Pricing />
      <Testimonials />
      <Serving />
      <Integrations />
      <FaqContact />
    </main>
  );
}
