import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { BadgeCheck } from "lucide-react";
import { HOME15_HERO, TOOLS } from "../../mock";
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

// Layout 15 — logo theme as a bento: the nine-bar mark becomes a tile in its own
// right, next to the trial card, the headline and the numbers.
export default function Home15() {
  useEffect(() => {
    document.title = "FFH|ERP — Nine bars, rising together";
  }, []);

  return (
    <main className="ffh-h15 ffh-logo-theme" data-testid="home15-page">
      <section className="ffh-h15-hero" id="top">
        <Container className="ffh-container">
          <div className="ffh-h15-bento">
            <div className="ffh-h15-tile ffh-h15-tile-intro reveal">
              <div className="ffh-h15-markrow">
                <img src={`${process.env.PUBLIC_URL}/ffh-logo.png`} alt="FFH ERP" width="60" height="60" decoding="async" fetchpriority="high" />
                <div className="ffh-eyebrow">{HOME15_HERO.eyebrow}</div>
              </div>
              <h1 className="ffh-hero-title ffh-h15-title">
                {HOME15_HERO.titleLead} <span className="ffh-h15-accent">{HOME15_HERO.titleAccent}</span>
              </h1>
              <p className="ffh-h15-lead">{HOME15_HERO.lead}</p>
            </div>

            <div className="ffh-h15-tile ffh-h15-tile-form reveal delay-1">
              <SignupForm />
            </div>

            {/* the mark, at tile scale */}
            <div className="ffh-h15-tile ffh-h15-tile-bars reveal delay-1">
              <div className="ffh-h15-bars" data-testid="home15-bars">
                {TOOLS.map((t, i) => (
                  <span key={t.name} className={i === TOOLS.length - 1 ? "dark" : ""} style={{ height: `${26 + i * 8}px` }} title={t.name} />
                ))}
              </div>
              <small>{HOME15_HERO.barsCaption}</small>
            </div>

            <div className="ffh-h15-tile ffh-h15-tile-stat reveal delay-2">
              <strong>{HOME15_HERO.tiles[0].value}</strong>
              <span>{HOME15_HERO.tiles[0].label}</span>
            </div>

            <div className="ffh-h15-tile ffh-h15-tile-note reveal delay-2">
              <ul className="ffh-h15-bullets">
                {HOME15_HERO.trust.map((t) => (
                  <li key={t}><BadgeCheck size={16} />{t}</li>
                ))}
              </ul>
              <HomeLayoutNav />
            </div>

            <div className="ffh-h15-tile ffh-h15-tile-stat2 reveal delay-3">
              {HOME15_HERO.tiles.slice(1).map((t) => (
                <div key={t.label}><strong>{t.value}</strong><span>{t.label}</span></div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Trusted />
      <Modules />
      <Milestones />
      <WhyFFH />
      <LiveCRM />
      <Serving />
      <Integrations />
      <Pricing />
      <Testimonials />
      <FaqContact />
    </main>
  );
}
