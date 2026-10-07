import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRight, Check } from "lucide-react";
import { toast } from "sonner";
import { TOOLS, MODULE_TABS } from "../../mock";
import { Icon } from "./Trusted";

const MiniDash = ({ d }) => {
  const pts = d.trend.map((v, i) => `${(i / (d.trend.length - 1)) * 100},${100 - v}`).join(" ");
  return (
    <div className="ffh-dash" data-testid="module-dashboard">
      <div className="ffh-dash-head">
        <span className="ffh-dot-row"><i /><i /><i /></span>
        <span>{d.label} · LIVE DASHBOARD</span>
      </div>
      <Row className="g-3">
        <Col sm={6}>
          <div className="ffh-dash-box">
            <div className="ffh-dash-title">Pipeline vs Target</div>
            <div className="ffh-bars">
              {d.bars.map((b, i) => (
                <div className="ffh-bar-col" key={i}>
                  <div className="ffh-bar target" style={{ height: `${d.target[i]}%` }} />
                  <div className="ffh-bar actual" style={{ height: `${b}%`, animationDelay: `${i * 80}ms` }} />
                </div>
              ))}
            </div>
          </div>
        </Col>
        <Col sm={6}>
          <div className="ffh-dash-box">
            <div className="ffh-dash-title">Revenue Trend</div>
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="ffh-trend">
              <defs>
                <linearGradient id="tg" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#1879C4" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#1879C4" stopOpacity="0" />
                </linearGradient>
              </defs>
              <polygon points={`0,100 ${pts} 100,100`} fill="url(#tg)" />
              <polyline points={pts} fill="none" stroke="#1879C4" strokeWidth="2.5" vectorEffect="non-scaling-stroke" className="ffh-trend-line" />
            </svg>
          </div>
        </Col>
      </Row>
      <Row className="g-3 mt-0">
        {d.kpis.map(([k, v]) => (
          <Col xs={4} key={k}>
            <div className="ffh-kpi"><span>{k}</span><strong>{v}</strong></div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default function Modules() {
  const [tab, setTab] = useState(0);
  const t = MODULE_TABS[tab];

  return (
    <section className="ffh-section bg-white" id="modules">
      <Container className="ffh-container">
        <div className="reveal">
          <div className="ffh-eyebrow">EVERYTHING IN SYNC</div>
          <h2 className="ffh-h2 ffh-serif-mix">Your business is <em>more than a spreadsheet.</em></h2>
          <p className="ffh-lead-sm">Stop switching between tools. FFH|ERP brings nine business tools together, so you can spend less time managing work — and more time moving it forward.</p>
        </div>
        {/* Single-line auto-looping row: the list is rendered twice and the track
            slides exactly one set width, so the loop is seamless. Every widget is
            the same fixed width and they stretch to a shared height. */}
        <div className="ffh-tools-marquee reveal" data-testid="tools-marquee">
          <div className="ffh-tools-track">
            {[...TOOLS, ...TOOLS].map((tl, i) => {
              const first = i < TOOLS.length;
              return (
                <div
                  className="ffh-tool ffh-tool-mq"
                  key={`${tl.name}-${i}`}
                  aria-hidden={first ? undefined : "true"}
                  data-testid={first ? `tool-card-${tl.name.toLowerCase()}` : undefined}
                >
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="ffh-tool-icon"><Icon name={tl.icon} size={26} /></div>
                    <span className="ffh-tool-num">{String((i % TOOLS.length) + 1).padStart(2, "0")}</span>
                  </div>
                  <h6>{tl.name}</h6>
                  <p>{tl.desc}</p>
                  <span className="ffh-tool-more">Learn more <ArrowRight size={15} /></span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="ffh-eyebrow mt-ffh">MODULES, WORKING AS ONE</div>
        <Row className="g-5">
          <Col lg={4}>
            <div className="ffh-tabs" role="tablist">
              {MODULE_TABS.map((m, i) => (
                <button key={m.key} role="tab" className={`ffh-tab ${i === tab ? "active" : ""}`} onClick={() => setTab(i)} data-testid={`module-tab-${m.key}`}>
                  <span className="ffh-tab-icon"><Icon name={m.icon} size={18} /></span>
                  <span><strong>{m.title}</strong><small>{m.sub}</small></span>
                </button>
              ))}
            </div>
          </Col>
          <Col lg={8}>
            <div className="ffh-tab-pane" key={t.key}>
              <h3 className="ffh-serif-h3">{t.heading}</h3>
              <p className="ffh-lead-sm">{t.text}</p>
              <ul className="ffh-checklist">
                {t.points.map((p) => <li key={p}><span className="ffh-check"><Check size={13} strokeWidth={3} /></span>{p}</li>)}
              </ul>
              <button className="ffh-link-btn" onClick={() => toast.info(`${t.title} module`, { description: "A detailed walkthrough will be shared by our team." })} data-testid="module-explore-btn">
                {t.cta} <ArrowRight size={16} />
              </button>
              <MiniDash d={t.dash} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
