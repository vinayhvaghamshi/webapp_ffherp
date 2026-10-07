import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRight, Check, ChevronRight, Star } from "lucide-react";
import { HOME20, FAQS, CRM_SEED, formatINR, LEAD_STAGES } from "../../mock";
import { Icon } from "./Trusted";
import SignupForm from "./SignupForm";
import HomeLayoutNav from "./HomeLayoutNav";
import { useGoTo } from "./crmStore";

// Layout 20 — Zerodha/Kite idiom: flat white surfaces, 1px borders, 4px radii,
// blue #387ed1, small uppercase labels and tabular data. The hero widget is an
// interactive three-tab app panel built from the CRM seed.
const TAB_DATA = [
  { key: "Orders", cols: ["Client", "Owner", "Value", "Stage"], rows: CRM_SEED.leads.map((l) => [l.name, l.owner, formatINR(l.value), l.stage]) },
  { key: "Invoices", cols: ["Party", "Type", "Amount", "Status"], rows: CRM_SEED.finance.map((f) => [f.party, f.type, formatINR(f.amount), f.paid ? "Paid" : "Due"]) },
  { key: "Service", cols: ["Ticket", "Priority", "Age", "Status"], rows: CRM_SEED.tickets.map((t, i) => [t.title, t.priority, `${i + 1}d`, t.open ? "Open" : "Closed"]) },
];

const stageTone = (v) => (v === "Won" || v === "Paid" || v === "Closed" ? "up" : v === "Suspect" || v === "Due" ? "down" : "flat");

export default function Home20() {
  const goTo = useGoTo();
  const [tab, setTab] = useState(0);

  useEffect(() => {
    document.title = "FFH|ERP — Run the whole business at ₹0 setup cost";
  }, []);

  const active = TAB_DATA[tab];

  return (
    <main className="ffh-h20" data-testid="home20-page">
      {/* ---------- hero: copy + app panel ---------- */}
      <section className="ffh-h20-hero" id="top">
        <Container className="ffh-container">
          <Row className="g-5 align-items-center">
            <Col lg={6} className="reveal">
              <span className="ffh-h20-eyebrow">{HOME20.eyebrow}</span>
              <h1 className="ffh-h20-title">
                {HOME20.titleLead} <span className="ffh-h20-accent">{HOME20.titleAccent}</span>
              </h1>
              <p className="ffh-h20-lead">{HOME20.lead}</p>
              <div className="ffh-h20-actions">
                <button className="btn ffh-h20-btn primary" onClick={() => goTo("#signup")} data-testid="home20-cta-signup">
                  Sign up now <ArrowRight size={15} className="ms-2" />
                </button>
                <button className="btn ffh-h20-btn ghost" onClick={() => goTo("#pricing")} data-testid="home20-cta-pricing">
                  See pricing
                </button>
              </div>
              <p className="ffh-h20-note">No credit card required · Cancel any time · Data hosted in India</p>
            </Col>

            <Col lg={6} className="reveal delay-1">
              <div className="ffh-h20-panel" data-testid="home20-panel">
                <div className="ffh-h20-panel-tabs" role="tablist">
                  {TAB_DATA.map((t, i) => (
                    <button key={t.key} type="button" role="tab" aria-selected={i === tab} className={i === tab ? "on" : ""} onClick={() => setTab(i)} data-testid={`home20-tab-${t.key.toLowerCase()}`}>
                      {t.key}
                    </button>
                  ))}
                  <span className="ffh-h20-panel-live"><i /> live</span>
                </div>
                <div className="ffh-h20-table-wrap">
                  <table className="ffh-h20-table">
                    <thead>
                      <tr>{active.cols.map((c) => <th key={c}>{c}</th>)}</tr>
                    </thead>
                    <tbody>
                      {active.rows.map((r, i) => (
                        <tr key={i}>
                          {r.map((cell, j) => (
                            <td key={j} className={j === r.length - 1 ? `tone-${stageTone(String(cell))}` : j === 2 && tab !== 2 ? "num" : ""}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="ffh-h20-panel-foot">
                  <span>Total booked</span>
                  <strong>{formatINR(CRM_SEED.leads.reduce((s, l) => s + l.value, 0))}</strong>
                  <span className="ffh-h20-panel-meta">{CRM_SEED.leads.length} open records · updated just now</span>
                </div>
              </div>
            </Col>
          </Row>

          {/* stat strip */}
          <div className="ffh-h20-strip reveal delay-2" data-testid="home20-stats">
            {HOME20.stats.map((s) => (
              <div key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- products ---------- */}
      <section className="ffh-h20-products" id="modules">
        <Container className="ffh-container">
          <div className="ffh-h20-head reveal">
            <span className="ffh-h20-eyebrow">Our products</span>
            <h2 className="ffh-h20-h2">Four surfaces, one account</h2>
          </div>
          <Row className="g-3">
            {HOME20.products.map((p, i) => (
              <Col md={6} lg={3} key={p.name} className={`reveal delay-${i % 3}`}>
                <button className="ffh-h20-product" onClick={() => goTo(p.target)} data-testid={`home20-product-${i}`}>
                  <h6>{p.name}</h6>
                  <p>{p.desc}</p>
                  <span>Explore <ChevronRight size={14} /></span>
                </button>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ---------- advantages ---------- */}
      <section className="ffh-h20-advantages" id="why">
        <Container className="ffh-container">
          <Row className="g-5">
            <Col lg={5} className="reveal">
              <span className="ffh-h20-eyebrow">Why FFH|ERP</span>
              <h2 className="ffh-h20-h2">Priced like software, not like a project</h2>
              <p className="ffh-h20-text">
                The price on this page is the price you pay. No implementation fee, no per-invoice charges, no lock-in —
                and everything you put in can come back out.
              </p>
              <button className="btn ffh-h20-btn primary" onClick={() => goTo("#pricing")}>See the full price list</button>
            </Col>
            <Col lg={7} className="reveal delay-1">
              <ul className="ffh-h20-checks" data-testid="home20-advantages">
                {HOME20.advantages.map((a) => (
                  <li key={a}><Check size={15} strokeWidth={3} />{a}</li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ---------- modules grid ---------- */}
      <section className="ffh-h20-modules" id="features">
        <Container className="ffh-container">
          <div className="ffh-h20-head reveal">
            <span className="ffh-h20-eyebrow">Everything in the box</span>
            <h2 className="ffh-h20-h2">Nine modules, straight out of the box</h2>
          </div>
          <div className="ffh-h20-grid">
            {[
              { n: "Market", d: "Capture, nurture and convert prospects" },
              { n: "Sales", d: "Track leads and opportunities" },
              { n: "Purchase", d: "Orders, vendors and material flow" },
              { n: "Bill", d: "Invoicing, receivables, payments" },
              { n: "Spend", d: "Payables, expenses and approvals" },
              { n: "AMC", d: "Warranty, contracts and renewals" },
              { n: "Support", d: "Service tickets and case routing" },
              { n: "Work", d: "Tasks, allocation and tracking" },
              { n: "Project", d: "Plan, bill and deliver projects" },
            ].map((m) => (
              <div className="ffh-h20-mod" key={m.n} data-testid={`home20-mod-${m.n.toLowerCase()}`}>
                <span className="ffh-h20-mod-name">{m.n}</span>
                <span className="ffh-h20-mod-desc">{m.d}</span>
                <Check size={16} strokeWidth={3} className="ffh-h20-mod-check" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- signup ---------- */}
      <section className="ffh-h20-signup">
        <Container className="ffh-container">
          <Row className="g-5 align-items-center">
            <Col lg={5} className="reveal">
              <span className="ffh-h20-eyebrow">Open an account</span>
              <h2 className="ffh-h20-h2">Free for 7 days, then ₹600 a month</h2>
              <p className="ffh-h20-text">
                Create the account in a minute. We migrate your existing data during the trial, and you keep everything
                you have entered if you decide not to continue.
              </p>
              <div className="ffh-h20-stars">
                <Star size={14} /><Star size={14} /><Star size={14} /><Star size={14} /><Star size={14} />
                <span>4.8 average from 2,100+ reviews</span>
              </div>
              <div className="mt-4"><HomeLayoutNav /></div>
            </Col>
            <Col lg={7} className="d-flex justify-content-lg-end reveal delay-1">
              <SignupForm title="Open your free account" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ---------- pricing table ---------- */}
      <section className="ffh-h20-pricing" id="pricing">
        <Container className="ffh-container">
          <div className="ffh-h20-head reveal">
            <span className="ffh-h20-eyebrow">Charges</span>
            <h2 className="ffh-h20-h2">A price list, not a quotation</h2>
          </div>
          <div className="ffh-h20-price-table reveal" data-testid="home20-pricing-table">
            <table>
              <thead>
                <tr>
                  <th />
                  {HOME20.pricingTable.columns.map((c) => (
                    <th key={c.name} className={c.popular ? "popular" : ""}>
                      <span className="ffh-h20-plan-name">{c.name}</span>
                      <span className="ffh-h20-plan-price">{c.price}<em>{c.note}</em></span>
                      {c.popular && <span className="ffh-h20-plan-tag">Most popular</span>}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {HOME20.pricingTable.rows.map((r) => (
                  <tr key={r.label}>
                    <th scope="row">{r.label}</th>
                    {r.values.map((v, i) => <td key={i}>{v}</td>)}
                  </tr>
                ))}
                <tr className="ffh-h20-price-cta">
                  <th />
                  {HOME20.pricingTable.columns.map((c) => (
                    <td key={c.name}>
                      <button className={`btn ffh-h20-btn ${c.popular ? "primary" : "ghost"} w-100`} onClick={() => goTo("#signup")}>
                        Get started
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <p className="ffh-h20-fineprint reveal">
            Prices exclude GST. No setup fee, no per-invoice charge, no annual lock-in. Billed monthly, cancel any time.
          </p>
        </Container>
      </section>

      {/* ---------- support / FAQ ---------- */}
      <section className="ffh-h20-support" id="contact">
        <Container className="ffh-container">
          <Row className="g-5">
            <Col lg={5} className="reveal">
              <span className="ffh-h20-eyebrow">Support</span>
              <h2 className="ffh-h20-h2">Answers, and a phone number</h2>
              <p className="ffh-h20-text">
                A helpdesk staffed by people who know the product, open 24/7 in six languages. Or just call us.
              </p>
              <div className="ffh-h20-contact">
                <a className="btn ffh-h20-btn ghost" href="tel:+919284162015">+91 92841 62015</a>
                <a className="btn ffh-h20-btn ghost" href="mailto:ffhsales@kriskrossinc.com">Email support</a>
              </div>
            </Col>
            <Col lg={7} className="reveal delay-1">
              <div className="ffh-h20-faq">
                {FAQS.map((f, i) => (
                  <details key={f.q} open={i === 0}>
                    <summary>{f.q}</summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ---------- closing ---------- */}
      <section className="ffh-h20-close">
        <Container className="ffh-container">
          <div className="ffh-h20-close-card reveal">
            <div>
              <h3>Open a free account in a minute</h3>
              <p>Seven days, every module, your own data. No card, no lock-in.</p>
            </div>
            <button className="btn ffh-h20-btn primary" onClick={() => goTo("#signup")} data-testid="home20-cta-bottom">
              Sign up now <ArrowRight size={15} className="ms-2" />
            </button>
          </div>
        </Container>
      </section>
    </main>
  );
}
