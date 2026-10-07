import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BadgeCheck } from "lucide-react";
import { HOME4_HERO } from "../../mock";
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
import { useGoTo } from "./crmStore";

// Layout 4 — centred, form-first: headline, a three-step promise, then the
// trial form as the single focal point of the hero, framed by trust badges.
export default function Home4() {
  const goTo = useGoTo();

  useEffect(() => {
    document.title = "FFH|ERP — Start your free trial";
  }, []);

  return (
    <main data-testid="home4-page">
      <section className="ffh-h4-hero" id="top">
        <Container className="ffh-container">
          <div className="ffh-h4-head text-center reveal">
            <div className="ffh-eyebrow justify-content-center">{HOME4_HERO.eyebrow}</div>
            <h1 className="ffh-hero-title">
              {HOME4_HERO.titleLead} <span className="text-brand">{HOME4_HERO.titleAccent}</span>
            </h1>
            <p className="ffh-h4-lead">{HOME4_HERO.lead}</p>
          </div>

          <div className="ffh-h4-steps reveal delay-1">
            {HOME4_HERO.steps.map((s, i) => (
              <div className="ffh-h4-step" key={s}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {s}
              </div>
            ))}
          </div>

          <div className="ffh-h4-shell reveal delay-2">
            <div className="ffh-h4-rail">
              {HOME4_HERO.badges.slice(0, 2).map((b) => (
                <span className="ffh-h4-badge" key={b}><BadgeCheck size={15} />{b}</span>
              ))}
            </div>
            <SignupForm />
            <div className="ffh-h4-rail">
              {HOME4_HERO.badges.slice(2).map((b) => (
                <span className="ffh-h4-badge" key={b}><BadgeCheck size={15} />{b}</span>
              ))}
            </div>
          </div>

          <div className="text-center reveal delay-3">
            <HomeLayoutNav />
            <button className="ffh-link-btn d-inline-flex mt-3" onClick={() => goTo("#modules")}>
              or take a look around the product first
            </button>
          </div>
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
