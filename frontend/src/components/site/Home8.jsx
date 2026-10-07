import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { BadgeCheck } from "lucide-react";
import { HOME8_HERO } from "../../mock";
import SignupForm from "./SignupForm";
import HomeLayoutNav from "./HomeLayoutNav";
import Trusted from "./Trusted";
import Modules from "./Modules";
import LiveCRM from "./LiveCRM";
import Milestones from "./Milestones";
import WhyFFH from "./WhyFFH";
import Integrations from "./Integrations";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import Serving from "./Serving";
import FaqContact from "./FaqContact";

// Layout 8 — bento hero on an indigo/violet theme. The page is themed by
// overriding the brand variables inside .ffh-h8, so every shared section
// (buttons, icon chips, eyebrows, plans, tabs) re-tints with it.
export default function Home8() {
  useEffect(() => {
    document.title = "FFH|ERP — Every part of the business in one frame";
  }, []);

  return (
    <main className="ffh-h8" data-testid="home8-page">
      <section className="ffh-h8-hero" id="top">
        <Container className="ffh-container">
          <div className="ffh-h8-bento">
            <div className="ffh-h8-tile ffh-h8-tile-intro reveal">
              <div className="ffh-eyebrow">{HOME8_HERO.eyebrow}</div>
              <h1 className="ffh-hero-title ffh-h8-title">
                {HOME8_HERO.titleLead} <span className="ffh-h8-accent">{HOME8_HERO.titleAccent}</span>
              </h1>
              <p className="ffh-h8-lead">{HOME8_HERO.lead}</p>
            </div>

            <div className="ffh-h8-tile ffh-h8-tile-form reveal delay-1">
              <SignupForm />
            </div>

            {HOME8_HERO.stats.map((s, i) => (
              <div className={`ffh-h8-tile ffh-h8-tile-stat reveal delay-${i + 1}`} key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}

            <div className="ffh-h8-tile ffh-h8-tile-note reveal delay-2">
              <ul className="ffh-h8-bullets">
                {HOME8_HERO.bullets.map((b) => (
                  <li key={b}><BadgeCheck size={16} />{b}</li>
                ))}
              </ul>
              <HomeLayoutNav />
            </div>
          </div>
        </Container>
      </section>

      <Trusted />
      <Modules />
      <LiveCRM />
      <Milestones />
      <WhyFFH />
      <Integrations />
      <Pricing />
      <Testimonials />
      <Serving />
      <FaqContact />
    </main>
  );
}
