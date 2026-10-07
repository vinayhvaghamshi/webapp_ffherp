import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRight, Check, Clock, IndianRupee, TrendingUp, Users } from "lucide-react";
import { CRM_SEED, formatINR, HERO_STATS, HOME2_HERO } from "../../mock";
import SignupForm from "./SignupForm";
import HomeLayoutNav from "./HomeLayoutNav";
import Trusted from "./Trusted";
import LiveCRM from "./LiveCRM";
import Modules from "./Modules";
import Milestones from "./Milestones";
import Serving from "./Serving";
import WhyFFH from "./WhyFFH";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import FaqContact from "./FaqContact";
import { useGoTo } from "./crmStore";

// Layout 2 — dashboard-first: the product is shown before the signup card.
// Hero copy sits beside a live "today at a glance" panel, the trial form moves
// into its own band, then the interactive CRM demo leads the rest of the page.
export default function Home2() {
  const goTo = useGoTo();

  useEffect(() => {
    document.title = "FFH|ERP — See your business on one screen";
  }, []);

  const won = CRM_SEED.leads.filter((l) => l.stage === "Won").reduce((s, l) => s + l.value, 0);
  const openLeads = CRM_SEED.leads.filter((l) => l.stage !== "Won").length;
  const openTickets = CRM_SEED.tickets.filter((t) => t.open).length;
  const receivables = CRM_SEED.finance.filter((f) => f.type === "Receivable" && !f.paid).reduce((s, f) => s + f.amount, 0);
  const maxLead = Math.max(...CRM_SEED.leads.map((l) => l.value));
  const bars = CRM_SEED.leads.map((l) => ({ name: l.name, pct: Math.round((l.value / maxLead) * 100), won: l.stage === "Won" }));

  return (
    <main data-testid="home2-page">
      {/* Hero: copy + live panel */}
      <section className="ffh-h2-hero" id="top">
        <Container className="ffh-container">
          <Row className="g-5 align-items-center">
            <Col lg={6} className="reveal">
              <span className="ffh-pill">{HOME2_HERO.pill}</span>
              <h1 className="ffh-hero-title">
                {HOME2_HERO.titleLead} <span className="text-brand">{HOME2_HERO.titleAccent}</span>
              </h1>
              <p className="ffh-hero-lead">{HOME2_HERO.lead}</p>
              <ul className="ffh-checklist">
                {HOME2_HERO.points.map((p) => (
                  <li key={p}><span className="ffh-check"><Check size={13} strokeWidth={3} /></span>{p}</li>
                ))}
              </ul>
              <div className="ffh-h2-actions">
                <button className="btn ffh-btn ffh-btn-primary" onClick={() => goTo("#signup")} data-testid="home2-cta-trial">
                  Start Free 7 Days Trial <ArrowRight size={16} className="ms-2" />
                </button>
                <button className="btn ffh-btn ffh-btn-outline" onClick={() => goTo("#live")} data-testid="home2-cta-demo">
                  {HOME2_HERO.panelCta}
                </button>
              </div>
              <div className="ffh-h2-stats">
                {HERO_STATS.map((s) => (
                  <div key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>
                ))}
              </div>
              <div className="reveal delay-2"><HomeLayoutNav /></div>
            </Col>

            <Col lg={6} className="reveal delay-1">
              <div className="ffh-h2-panel" data-testid="home2-panel">
                <div className="ffh-h2-panel-head">
                  <span className="ffh-h2-live"><i />{HOME2_HERO.panelTitle}</span>
                  <span className="ffh-h2-panel-time"><Clock size={13} /> just now</span>
                </div>
                <Row className="g-3">
                  <Col xs={4}>
                    <div className="ffh-h2-kpi"><IndianRupee size={14} /><span>Revenue (won)</span><strong>{formatINR(won)}</strong></div>
                  </Col>
                  <Col xs={4}>
                    <div className="ffh-h2-kpi"><Users size={14} /><span>Open leads</span><strong>{openLeads}</strong></div>
                  </Col>
                  <Col xs={4}>
                    <div className="ffh-h2-kpi"><TrendingUp size={14} /><span>Open tickets</span><strong>{openTickets}</strong></div>
                  </Col>
                </Row>
                <div className="ffh-h2-chart">
                  {bars.map((b) => (
                    <div className="ffh-h2-bar-col" key={b.name} title={`${b.name} — ${b.pct}%`}>
                      <div className={`ffh-h2-bar ${b.won ? "won" : ""}`} style={{ height: `${Math.max(b.pct, 12)}%` }} />
                    </div>
                  ))}
                </div>
                <div className="ffh-h2-chart-legend">
                  <span><i className="won" /> Closed won</span>
                  <span><i /> In pipeline</span>
                  <span className="ms-auto">Receivables due {formatINR(receivables)}</span>
                </div>
                <ul className="ffh-h2-feed">
                  {CRM_SEED.activity.slice(0, 3).map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Trusted />

      {/* Trial form in its own band */}
      <section className="ffh-h2-signup">
        <Container className="ffh-container">
          <Row className="g-5 align-items-center">
            <Col lg={6} className="reveal">
              <div className="ffh-eyebrow">Start in a day</div>
              <h2 className="ffh-h2">Try FFH|ERP free for 7 days</h2>
              <p className="ffh-lead-sm">
                Bring your existing data across and run a real month on it. No credit card, no lock-in, and a human on
                the other end of the phone while you set up.
              </p>
              <ul className="ffh-checklist">
                <li><span className="ffh-check"><Check size={13} strokeWidth={3} /></span>Free implementation and training call</li>
                <li><span className="ffh-check"><Check size={13} strokeWidth={3} /></span>Your data hosted in India</li>
                <li><span className="ffh-check"><Check size={13} strokeWidth={3} /></span>Cancel any time — export everything</li>
              </ul>
            </Col>
            <Col lg={6} className="d-flex justify-content-lg-end reveal delay-1">
              <SignupForm title="Create your free trial" />
            </Col>
          </Row>
        </Container>
      </section>

      <LiveCRM />
      <Modules />
      <Milestones />
      <Serving />
      <WhyFFH />
      <Pricing />
      <Testimonials />
      <FaqContact />
    </main>
  );
}
