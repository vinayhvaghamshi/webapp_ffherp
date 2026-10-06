import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NAV_LINKS } from "../../mock";
import { useGoTo } from "./crmStore";

export const Brand = ({ light }) => (
  <span className={`ffh-brand ${light ? "light" : ""}`}>
    <img src="/ffh-logo.png" alt="FFH ERP logo" width="42" height="42" decoding="async" fetchpriority="high" />
    <span>FFH<i>|</i>ERP</span>
  </span>
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const goTo = useGoTo();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // hrefs are either a section on the home page ("#pricing") or another route ("/about")
  const go = (e, href) => {
    e.preventDefault();
    setOpen(false);
    goTo(href);
  };

  return (
    <Navbar expand="lg" fixed="top" expanded={open} onToggle={setOpen} className={`ffh-nav ${scrolled ? "scrolled" : ""}`} data-testid="main-navbar">
      <Container className="ffh-container">
        <Navbar.Brand href="#top" onClick={(e) => go(e, "#top")} data-testid="nav-brand">
          <Brand />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="ffh-nav-collapse" className="ffh-toggler" data-testid="nav-toggle" />
        <Navbar.Collapse id="ffh-nav-collapse">
          <Nav className="mx-auto ffh-nav-links">
            {NAV_LINKS.map((l) => (
              <Nav.Link key={l.label} href={l.href} onClick={(e) => go(e, l.href)} data-testid={`nav-link-${l.label.toLowerCase().replace(/\s/g, "-")}`}>
                {l.label}
              </Nav.Link>
            ))}
          </Nav>
          <button className="btn ffh-btn ffh-btn-primary ffh-nav-cta" onClick={(e) => go(e, "#signup")} data-testid="nav-cta-trial">
            Try Free for 7 Days
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
