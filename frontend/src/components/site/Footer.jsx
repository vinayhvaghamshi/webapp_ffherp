import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRight, MessageCircle, Linkedin, Instagram, Phone, Mail } from "lucide-react";
import { toast } from "sonner";
import { FOOTER_COLS } from "../../mock";
import { Brand } from "./Header";
import { scrollToId } from "./crmStore";

const LINK_TARGET = { "Why FFH": "why", Pricing: "pricing", "Contact Us": "contact", Marketing: "modules", Sales: "modules", Finance: "modules", "AMC & Support": "modules", Projects: "modules" };

export default function Footer() {
  const [email, setEmail] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) return toast.error("Please enter a valid email");
    toast.success("Subscribed! Watch your inbox for updates.");
    setEmail("");
  };
  return (
    <footer className="ffh-footer">
      <Container className="ffh-container">
        <Row className="g-5">
          <Col lg={5}>
            <Brand light />
            <p className="ffh-footer-tag">Get started now — try our all-in-one CRM &amp; ERP product.</p>
            <form className="ffh-footer-form" onSubmit={submit} data-testid="footer-newsletter">
              <input type="email" placeholder="Enter your email here" value={email} onChange={(e) => setEmail(e.target.value)} data-testid="footer-email" />
              <button type="submit" aria-label="Subscribe" data-testid="footer-submit"><ArrowRight size={16} /></button>
            </form>
            <div className="ffh-socials">
              {[MessageCircle, Linkedin, Instagram, Phone].map((I, i) => (
                <a key={i} href="#social" onClick={(e) => e.preventDefault()} aria-label="social"><I size={16} /></a>
              ))}
            </div>
          </Col>
          {FOOTER_COLS.map((c) => (
            <Col xs={6} md={4} lg={{ span: 2 }} key={c.title} className="ffh-footer-col">
              <h6>{c.title}</h6>
              <ul>
                {c.links.map((l) => (
                  <li key={l}><a href={`#${l}`} onClick={(e) => { e.preventDefault(); LINK_TARGET[l] ? scrollToId(LINK_TARGET[l]) : toast(`${l} — coming soon`); }}>{l}</a></li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>
        <div className="ffh-footer-contact">
          <a href="tel:+919284162015"><Phone size={15} /> +91 92841 62015</a>
          <a href="mailto:ffhsales@kriskrossinc.com"><Mail size={15} /> ffhsales@kriskrossinc.com</a>
        </div>
        <div className="ffh-footer-bottom">
          <span>© 2025 FFH|ERP by KrisKross Inc. All rights reserved.</span>
          <span className="d-flex gap-4"><a href="#terms" onClick={(e) => e.preventDefault()}>Terms and Conditions</a><a href="#privacy" onClick={(e) => e.preventDefault()}>Privacy Policy</a></span>
        </div>
      </Container>
    </footer>
  );
}
