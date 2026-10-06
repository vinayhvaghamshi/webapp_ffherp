import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRight, ArrowUpRight, Check, Clock, Quote } from "lucide-react";
import { HOME18, TOOLS, SERVING_BRANDS, FAQS, PLANS, formatINR } from "../../mock";
import { Icon } from "./Trusted";
import SignupForm from "./SignupForm";
import HomeLayoutNav from "./HomeLayoutNav";
import { useGoTo } from "./crmStore";

// Layout 18 — dark glass. Every section on this page is bespoke: new photography,
// new widgets (command centre, module status, collections chart, bookings ring)
// and its own numbers, all on frosted dark panels.
export default function Home18() {
  const goTo = useGoTo();

  useEffect(() => {
    document.title = "FFH|ERP — The dark glass command centre";
  }, []);

  const { photos } = HOME18;
  const photo = (p, w, h) => `https://picsum.photos/id/${p.id}/${w}/${h}`;
  const sparkPts = HOME18.spark.map((v, i) => `${(i / (HOME18.spark.length - 1)) * 100},${100 - v}`).join(" ");
  const ringR = 38;
  const ringC = 2 * Math.PI * ringR;

  return (
    <main className="ffh-h18" data-testid="home18-page">
      {/* ---------- hero + command centre widget ---------- */}
      <section className="ffh-h18-hero" id="top">
        <span className="ffh-h18-glow a" aria-hidden="true" />
        <span className="ffh-h18-glow b" aria-hidden="true" />
        <Container className="ffh-container">
          <Row className="g-5 align-items-center">
            <Col lg={6} className="reveal">
              <span className="ffh-h18-mark"><img src={`${process.env.PUBLIC_URL}/ffh-logo.png`} alt="FFH ERP" width="48" height="48" decoding="async" fetchpriority="high" /></span>
              <span className="ffh-h18-eyebrow">{HOME18.eyebrow}</span>
              <h1 className="ffh-h18-title">
                {HOME18.titleLead} <span className="ffh-h18-accent">{HOME18.titleAccent}</span>
              </h1>
              <p className="ffh-h18-lead">{HOME18.lead}</p>
              <div className="ffh-h18-actions">
                <button className="btn ffh-btn ffh-h18-solid" onClick={() => goTo("#signup")} data-testid="home18-cta-trial">
                  Start Free 7 Days Trial <ArrowRight size={16} className="ms-2" />
                </button>
                <button className="btn ffh-btn ffh-h18-ghost" onClick={() => goTo("#modules")} data-testid="home18-cta-modules">
                  See the nine modules
                </button>
              </div>
              <ul className="ffh-h18-trust">
                {HOME18.trust.map((t) => (
                  <li key={t}><Check size={14} strokeWidth={3} />{t}</li>
                ))}
              </ul>
            </Col>

            <Col lg={6} className="reveal delay-1">
              <div className="ffh-h18-command" data-testid="home18-command">
                <div className="ffh-h18-command-head">
                  <span className="ffh-h18-live"><i />Command centre</span>
                  <span className="ffh-h18-time"><Clock size={12} /> synced just now</span>
                </div>
                <div className="ffh-h18-kpis">
                  {HOME18.kpis.map((k) => (
                    <div className="ffh-h18-kpi" key={k.label}>
                      <span>{k.label}</span>
                      <strong>{k.value}</strong>
                      <em><ArrowUpRight size={11} />{k.delta}</em>
                    </div>
                  ))}
                </div>
                <div className="ffh-h18-spark">
                  <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <defs>
                      <linearGradient id="h18g" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#4cc9f0" stopOpacity=".42" />
                        <stop offset="100%" stopColor="#4cc9f0" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <polygon points={`0,100 ${sparkPts} 100,100`} fill="url(#h18g)" />
                    <polyline points={sparkPts} fill="none" stroke="#4cc9f0" strokeWidth="2.4" vectorEffect="non-scaling-stroke" />
                  </svg>
                  <div className="ffh-h18-ring">
                    <svg viewBox="0 0 100 100" aria-hidden="true">
                      <circle cx="50" cy="50" r={ringR} fill="none" stroke="rgba(255,255,255,.12)" strokeWidth="9" />
                      <circle cx="50" cy="50" r={ringR} fill="none" stroke="#f7a52a" strokeWidth="9" strokeLinecap="round"
                        strokeDasharray={`${(ringC * HOME18.ring.pct) / 100} ${ringC}`} transform="rotate(-90 50 50)" />
                    </svg>
                    <span><strong>{HOME18.ring.pct}%</strong><small>{HOME18.ring.label}</small></span>
                  </div>
                </div>
                <p className="ffh-h18-command-note">{HOME18.ring.sub} · updated as invoices are raised</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ---------- photo + trust ---------- */}
      <section className="ffh-h18-band" id="why">
        <Container className="ffh-container">
          <Row className="g-5 align-items-center">
            <Col lg={6} className="reveal">
              <figure className="ffh-h18-photo">
                <img src={photo(photos.workstation, 1200, 820)} alt={photos.workstation.caption} loading="lazy" decoding="async" />
                <figcaption>{photos.workstation.caption}</figcaption>
              </figure>
            </Col>
            <Col lg={6} className="reveal delay-1">
              <span className="ffh-h18-eyebrow">Trusted worldwide</span>
              <h2 className="ffh-h18-h2">350,000+ businesses, 20+ countries</h2>
              <p className="ffh-h18-text">
                Retail chains, manufacturers, banks and project firms run their month on FFH|ERP. The records are the same
                whoever opens them — counter, site, warehouse or head office.
              </p>
              <div className="ffh-h18-logos">
                {SERVING_BRANDS.map((b) => (
                  <span key={b.key}>{b.name}</span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ---------- widget row ---------- */}
      <section className="ffh-h18-widgets">
        <Container className="ffh-container">
          <Row className="g-4">
            <Col lg={4} className="reveal">
              <div className="ffh-h18-widget" data-testid="home18-widget-modules">
                <div className="ffh-h18-widget-head">
                  <span>Modules online</span>
                  <em className="ok">9 / 9</em>
                </div>
                <ul className="ffh-h18-modules">
                  {TOOLS.map((t, i) => (
                    <li key={t.name}>
                      <span className="ffh-h18-dot" />
                      <span className="ffh-h18-mod-name">{t.name}</span>
                      <span className="ffh-h18-mod-bar"><i style={{ width: `${99 - i * 0.4}%` }} /></span>
                      <em>{(99.9 - i * 0.1).toFixed(1)}%</em>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>

            <Col lg={4} className="reveal delay-1">
              <div className="ffh-h18-widget" data-testid="home18-widget-collections">
                <div className="ffh-h18-widget-head">
                  <span>{HOME18.collections.title}</span>
                  <em>₹ in lakh</em>
                </div>
                <div className="ffh-h18-bars">
                  {HOME18.collections.bars.map((b) => (
                    <div className="ffh-h18-bar-col" key={b.m}>
                      <span className="ffh-h18-bar" style={{ height: `${b.v}%` }} />
                      <small>{b.m}</small>
                    </div>
                  ))}
                </div>
                <p className="ffh-h18-widget-note">{HOME18.collections.note}</p>
              </div>
            </Col>

            <Col lg={4} className="reveal delay-2">
              <div className="ffh-h18-widget photo" data-testid="home18-widget-invoices">
                <img src={photo(photos.invoices, 900, 620)} alt={photos.invoices.caption} loading="lazy" decoding="async" />
                <div className="ffh-h18-widget-overlay">
                  <strong>{formatINR(18400000)}</strong>
                  <span>invoiced this month</span>
                  <p>{photos.invoices.caption}</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ---------- modules grid ---------- */}
      <section className="ffh-h18-modules-section" id="modules">
        <Container className="ffh-container">
          <div className="ffh-h18-section-head reveal">
            <span className="ffh-h18-eyebrow">Everything in sync</span>
            <h2 className="ffh-h18-h2">Nine modules, one measure</h2>
            <p className="ffh-h18-text">Each module reads the same records, so nothing needs reconciling at month end.</p>
          </div>
          <div className="ffh-h18-grid">
            {TOOLS.map((t, i) => (
              <div className={`ffh-h18-tile reveal delay-${i % 3}`} key={t.name} data-testid={`home18-tool-${t.name.toLowerCase()}`}>
                <div className="ffh-h18-tile-icon"><Icon name={t.icon} size={22} /></div>
                <h6>{t.name}</h6>
                <p>{t.desc}</p>
                <span className="ffh-h18-tile-num">{String(i + 1).padStart(2, "0")}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- metrics + skyline ---------- */}
      <section className="ffh-h18-metrics-section">
        <Container className="ffh-container">
          <div className="ffh-h18-metrics">
            {HOME18.metrics.map((m, i) => (
              <div className={`ffh-h18-metric reveal delay-${i % 3}`} key={m.label}>
                <strong>{m.value}</strong>
                <span>{m.label}</span>
              </div>
            ))}
          </div>
          <figure className="ffh-h18-skyline reveal">
            <img src={photo(photos.skyline, 1600, 520)} alt={photos.skyline.caption} loading="lazy" decoding="async" />
            <figcaption>{photos.skyline.caption}</figcaption>
          </figure>
        </Container>
      </section>

      {/* ---------- trial ---------- */}
      {/* the #signup anchor comes from the form inside this section */}
      <section className="ffh-h18-signup">
        <Container className="ffh-container">
          <Row className="g-5 align-items-center">
            <Col lg={5} className="reveal">
              <span className="ffh-h18-eyebrow">Free 7-day trial</span>
              <h2 className="ffh-h18-h2">Put your own numbers in it</h2>
              <p className="ffh-h18-text">
                Load a month of real sales, purchases and tickets. No credit card, and our team migrates your data with you.
              </p>
              <div className="mt-4"><HomeLayoutNav dark /></div>
            </Col>
            <Col lg={7} className="d-flex justify-content-lg-end reveal delay-1">
              <SignupForm />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ---------- features ---------- */}
      <section className="ffh-h18-features" id="features">
        <Container className="ffh-container">
          <div className="ffh-h18-section-head reveal">
            <span className="ffh-h18-eyebrow">Why it feels different</span>
            <h2 className="ffh-h18-h2">Quiet software, loud results</h2>
          </div>
          <Row className="g-4">
            {HOME18.features.map((f, i) => (
              <Col md={4} key={f.title} className={`reveal delay-${i}`}>
                <div className="ffh-h18-feature" data-testid={`home18-feature-${i}`}>
                  <div className="ffh-h18-feature-icon"><Icon name={f.icon} size={22} /></div>
                  <h6>{f.title}</h6>
                  <p>{f.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ---------- pricing ---------- */}
      <section className="ffh-h18-pricing" id="pricing">
        <Container className="ffh-container">
          <div className="ffh-h18-section-head reveal">
            <span className="ffh-h18-eyebrow">Pricing</span>
            <h2 className="ffh-h18-h2">Printed on the website, like it should be</h2>
          </div>
          <Row className="g-4">
            {PLANS.map((p, i) => (
              <Col lg={4} key={p.name} className={`reveal delay-${i}`}>
                <div className={`ffh-h18-plan ${p.popular ? "popular" : ""}`} data-testid={`home18-plan-${p.name.toLowerCase()}`}>
                  {p.popular && <span className="ffh-h18-plan-tag">Most popular</span>}
                  <h3>{p.name}</h3>
                  <div className="ffh-h18-price"><strong>{formatINR(p.monthly)}</strong><span>/month</span></div>
                  <p className="ffh-h18-plan-sub">{p.sub}</p>
                  <ul>
                    {p.features.map((f) => (
                      <li key={f}><Check size={13} strokeWidth={3} />{f}</li>
                    ))}
                  </ul>
                  <button className={`btn ffh-btn ${p.popular ? "ffh-h18-solid" : "ffh-h18-ghost"} w-100`} onClick={() => goTo("#signup")}>
                    {p.cta}
                  </button>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ---------- quotes + planning photo ---------- */}
      <section className="ffh-h18-quotes-section">
        <Container className="ffh-container">
          <Row className="g-5 align-items-stretch">
            <Col lg={4} className="reveal">
              <figure className="ffh-h18-photo tall">
                <img src={photo(photos.planning, 900, 1100)} alt={photos.planning.caption} loading="lazy" decoding="async" />
                <figcaption>{photos.planning.caption}</figcaption>
              </figure>
            </Col>
            <Col lg={8}>
              <Row className="g-4">
                {HOME18.quotes.map((q, i) => (
                  <Col md={12} key={q.person} className={`reveal delay-${i % 3}`}>
                    <figure className="ffh-h18-quote" data-testid={`home18-quote-${i}`}>
                      <Quote size={22} />
                      <blockquote>{q.text}</blockquote>
                      <figcaption>
                        <img src={`https://i.pravatar.cc/120?img=${q.img}`} alt={q.person} width="42" height="42" loading="lazy" decoding="async" />
                        <span><strong>{q.person}</strong><small>{q.role}</small></span>
                      </figcaption>
                    </figure>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ---------- FAQ + contact ---------- */}
      <section className="ffh-h18-faq" id="contact">
        <Container className="ffh-container">
          <Row className="g-5">
            <Col lg={5} className="reveal">
              <span className="ffh-h18-eyebrow">Contact</span>
              <h2 className="ffh-h18-h2">Questions, answered</h2>
              <p className="ffh-h18-text">
                Talk to a human who knows the product. We will show you the modules that matter to your business, on your
                own numbers.
              </p>
              <div className="ffh-h18-actions">
                <button className="btn ffh-btn ffh-h18-solid" onClick={() => goTo("#signup")}>Start free trial</button>
                <a className="btn ffh-btn ffh-h18-ghost" href="tel:+919284162015">+91 92841 62015</a>
              </div>
            </Col>
            <Col lg={7} className="reveal delay-1">
              <div className="ffh-h18-faq-list">
                {FAQS.map((f) => (
                  <details key={f.q}>
                    <summary>{f.q}</summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
