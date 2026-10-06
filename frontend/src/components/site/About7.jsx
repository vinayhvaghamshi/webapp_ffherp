import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { ArrowRight } from "lucide-react";
import { ABOUT_7, ABOUT_ALT, ABOUT_US, TEAM, TOOLS } from "../../mock";
import { Icon } from "./Trusted";
import AboutLayoutNav from "./AboutLayoutNav";
import { useGoTo } from "./crmStore";

// About layout 7 — bento: the whole company as one grid of tiles, including the
// nine-bar mark as its own tile.
export default function About7() {
  const goTo = useGoTo();

  useEffect(() => {
    document.title = "About Us — Everything in one frame | FFH|ERP";
  }, []);

  return (
    <main className="ffh-a7 ffh-logo-theme" data-testid="about7-page">
      <section className="ffh-a7-hero" id="top">
        <Container className="ffh-container">
          <div className="ffh-a7-bento">
            <div className="ffh-a7-tile ffh-a7-intro reveal">
              <div className="ffh-a7-markrow">
                <img src="/ffh-logo.png" alt="FFH ERP" width="60" height="60" decoding="async" fetchpriority="high" />
                <div className="ffh-eyebrow">{ABOUT_7.eyebrow}</div>
              </div>
              <h1 className="ffh-hero-title ffh-a7-title">
                {ABOUT_7.titleLead} <span className="ffh-a7-accent">{ABOUT_7.titleAccent}</span>
              </h1>
              <p className="ffh-a7-lead">{ABOUT_7.lead}</p>
            </div>

            <div className="ffh-a7-tile ffh-a7-vision reveal delay-1" data-testid="about7-vision">
              <span className="ffh-a7-tag">Vision</span>
              <p>{ABOUT_US.vision.text}</p>
            </div>

            <div className="ffh-a7-tile ffh-a7-mission reveal delay-1" data-testid="about7-mission">
              <span className="ffh-a7-tag">Mission</span>
              <p>{ABOUT_US.mission.text}</p>
            </div>

            <div className="ffh-a7-tile ffh-a7-bars reveal delay-2">
              <div className="ffh-a7-chart" aria-hidden="true">
                {TOOLS.map((t, i) => (
                  <span key={t.name} className={i === TOOLS.length - 1 ? "dark" : ""} style={{ height: `${22 + i * 7}px` }} />
                ))}
              </div>
              <small>Nine modules, one measure — the idea behind our mark.</small>
            </div>

            {ABOUT_ALT.facts.slice(0, 3).map((f, i) => (
              <div className={`ffh-a7-tile ffh-a7-stat reveal delay-${i}`} key={f.k}>
                <span className="ffh-a7-tag">{f.k}</span>
                <strong>{f.v}</strong>
              </div>
            ))}

            <div className="ffh-a7-tile ffh-a7-team reveal delay-2">
              {TEAM.map((p) => (
                <div className="ffh-a7-member" key={p.name}>
                  <img src={`https://i.pravatar.cc/120?img=${p.img}`} alt={p.name} width="52" height="52" loading="lazy" decoding="async" />
                  <div><strong>{p.name}</strong><small>{p.role}</small></div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* values */}
      <section className="ffh-section bg-white">
        <Container className="ffh-container">
          <div className="text-center mb-5 reveal">
            <h2 className="ffh-h2">What we hold ourselves to</h2>
            <div className="ffh-underline mx-auto" />
          </div>
          <div className="ffh-a7-values">
            {ABOUT_US.values.map((v, i) => (
              <div className={`ffh-a7-value reveal delay-${i}`} key={v.title}>
                <div className="ffh-a7-value-icon"><Icon name={v.icon} size={22} /></div>
                <h6>{v.title}</h6>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="ffh-section ffh-soft">
        <Container className="ffh-container text-center">
          <div className="reveal">
            <h2 className="ffh-h2 mb-3">Run a month of your business on it</h2>
            <p className="ffh-lead-sm mx-auto mb-4">Free for 7 days, no credit card, and a human to help you set up.</p>
            <button className="btn ffh-btn ffh-btn-primary" onClick={() => goTo("#signup")} data-testid="about7-cta-trial">
              Try Free for 7 Days <ArrowRight size={16} className="ms-2" />
            </button>
            <div className="mt-4"><AboutLayoutNav /></div>
          </div>
        </Container>
      </section>
    </main>
  );
}
