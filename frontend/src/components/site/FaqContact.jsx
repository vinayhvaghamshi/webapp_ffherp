import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Plus, Minus, ArrowRight, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { FAQS } from "../../mock";
import { scrollToId } from "./crmStore";

export default function FaqContact() {
  const [open, setOpen] = useState(0);
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);

  const subscribe = (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) return toast.error("Please enter a valid email");
    setBusy(true);
    setTimeout(() => {
      const list = JSON.parse(localStorage.getItem("ffh_newsletter") || "[]");
      localStorage.setItem("ffh_newsletter", JSON.stringify([...list, email]));
      toast.success("Thanks! We'll be in touch soon.", { description: email });
      setEmail("");
      setBusy(false);
    }, 700);
  };

  return (
    <section className="ffh-section ffh-soft" id="contact">
      <Container className="ffh-container">
        <Row className="g-5">
          <Col lg={6} className="reveal">
            <div className="ffh-faq">
              {FAQS.map((f, i) => (
                <div className={`ffh-faq-item ${open === i ? "open" : ""}`} key={f.q}>
                  <button className="ffh-faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i} data-testid={`faq-q-${i}`}>
                    <span>{f.q}</span>
                    <span className="ffh-faq-ic">{open === i ? <Minus size={14} /> : <Plus size={14} />}</span>
                  </button>
                  <div className="ffh-faq-a"><div><p>{f.a}</p></div></div>
                </div>
              ))}
            </div>
          </Col>
          <Col lg={6} className="reveal delay-1">
            <div className="ps-lg-5">
              <h2 className="ffh-h2">How We Can Help You?</h2>
              <p className="ffh-lead-sm">Follow our newsletter. We will regularly update our latest features and availability.</p>
              <Form onSubmit={subscribe} className="ffh-news" data-testid="newsletter-form">
                <Form.Control className="ffh-input rounded-pill" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} data-testid="newsletter-email" />
                <button className="btn ffh-btn ffh-btn-primary" type="submit" disabled={busy} data-testid="newsletter-submit">{busy ? <Loader2 size={16} className="spin" /> : "Let's Talk"}</button>
              </Form>
              <a href="#modules" className="ffh-underlink" onClick={(e) => { e.preventDefault(); scrollToId("modules"); }} data-testid="explore-modules-link">
                Explore Modules <ArrowRight size={16} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
