import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Check, Quote } from "lucide-react";
import { HOME9_HERO, HERO_STATS, FOUNDER_QUOTE } from "../../mock";
import { Icon } from "./Trusted";
import SignupForm from "./SignupForm";
import HomeLayoutNav from "./HomeLayoutNav";
import Trusted from "./Trusted";
import Modules from "./Modules";
import Milestones from "./Milestones";
import WhyFFH from "./WhyFFH";
import LiveCRM from "./LiveCRM";
import Integrations from "./Integrations";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import Serving from "./Serving";
import FaqContact from "./FaqContact";

// Layout 9 — split screen on an emerald/teal theme. The heading runs full width
// and the trial card stays pinned in the left column while the reassurance
// column scrolls past it. Themed like layout 8: brand variables scoped to
// .ffh-h9 re-tint every shared section.
export default function Home9() {
  useEffect(() => {
    document.title = "FFH|ERP — One system, not nine tabs";
  }, []);

  return (
    <main className="ffh-h9" data-testid="home9-page">
      <section className="ffh-h9-hero" id="top">
        <Container className="ffh-container">
          <div className="ffh-h9-head reveal">
            <div>
              <div className="ffh-eyebrow">{HOME9_HERO.eyebrow}</div>
              <h1 className="ffh-hero-title ffh-h9-title">
                {HOME9_HERO.titleLead} <span className="ffh-h9-accent">{HOME9_HERO.titleAccent}</span>
              </h1>
              <p className="ffh-h9-lead">{HOME9_HERO.lead}</p>
            </div>
            <HomeLayoutNav />
          </div>

          <Row className="g-5">
            <Col lg={5} className="reveal">
              <div className="ffh-h9-sticky">
                <SignupForm />
                <ul className="ffh-h9-trust">
                  {HOME9_HERO.trust.map((t) => (
                    <li key={t}><Check size={14} strokeWidth={3} />{t}</li>
                  ))}
                </ul>
              </div>
            </Col>

            <Col lg={7}>
              <div className="ffh-h9-intro reveal">
                <span className="ffh-h9-rule" />
                <h2>{HOME9_HERO.intro}</h2>
              </div>
              {HOME9_HERO.blocks.map((b, i) => (
                <div className="ffh-h9-block reveal" key={b.title} data-testid={`home9-block-${i}`}>
                  <div className="ffh-h9-block-icon"><Icon name={b.icon} size={22} /></div>
                  <div>
                    <h3>{b.title}</h3>
                    <p>{b.text}</p>
                  </div>
                </div>
              ))}
              <div className="ffh-h9-mini reveal">
                {HERO_STATS.map((s) => (
                  <div key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>
                ))}
              </div>
              <figure className="ffh-h9-quote reveal">
                <Quote size={26} />
                <blockquote>{FOUNDER_QUOTE.text}</blockquote>
                <figcaption>{FOUNDER_QUOTE.person} · {FOUNDER_QUOTE.role}</figcaption>
              </figure>
              <div className="ffh-h9-next reveal">
                <h3>What happens after you sign up</h3>
                <ol>
                  {HOME9_HERO.next.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ol>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Trusted />
      <Modules />
      <Milestones />
      <WhyFFH />
      <LiveCRM />
      <Integrations />
      <Pricing />
      <Testimonials />
      <Serving />
      <FaqContact />
    </main>
  );
}
