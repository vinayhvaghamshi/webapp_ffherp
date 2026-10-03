import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Check, Eye, EyeOff, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { HERO_POINTS, HERO_STATS, COUNTRY_CODES } from "../../mock";
import { useCRM } from "./crmStore";

const GoogleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"/></svg>
);
const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24"><rect width="24" height="24" rx="3" fill="#0A66C2"/><path fill="#fff" d="M7 9.5h2.5V18H7zM8.25 5.5a1.45 1.45 0 110 2.9 1.45 1.45 0 010-2.9zM11 9.5h2.4v1.2c.35-.65 1.2-1.35 2.5-1.35 2.6 0 3.1 1.7 3.1 3.9V18h-2.5v-4.1c0-1 0-2.2-1.35-2.2s-1.6 1.05-1.6 2.15V18H11z"/></svg>
);

const empty = { name: "", email: "", password: "", code: "+91", mobile: "", agree: false };

export default function Hero() {
  const { log } = useCRM();
  const [f, setF] = useState(empty);
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const set = (k) => (e) => setF({ ...f, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (!f.name.trim()) er.name = "Please enter your name";
    if (!/^\S+@\S+\.\S+$/.test(f.email)) er.email = "Enter a valid email";
    if (f.password.length < 6) er.password = "Min. 6 characters";
    if (!/^\d{7,12}$/.test(f.mobile)) er.mobile = "Enter a valid mobile number";
    if (!f.agree) er.agree = "Please accept the terms";
    setErrors(er);
    if (Object.keys(er).length) return;
    setLoading(true);
    setTimeout(() => {
      const list = JSON.parse(localStorage.getItem("ffh_signups") || "[]");
      list.push({ name: f.name, email: f.email, mobile: `${f.code} ${f.mobile}`, at: new Date().toISOString() });
      localStorage.setItem("ffh_signups", JSON.stringify(list));
      log(`Free trial signup: ${f.name} (${f.email})`);
      toast.success("Your 7-day free trial is ready!", { description: `Welcome aboard, ${f.name.split(" ")[0]}. Check the live CRM below.` });
      setF(empty);
      setLoading(false);
    }, 900);
  };

  return (
    <section className="ffh-hero" id="top">
      <Container className="ffh-container">
        <Row className="align-items-center g-5">
          <Col lg={6} className="reveal">
            <span className="ffh-pill">Smart CRM &amp; ERP Software</span>
            <h1 className="ffh-hero-title" data-testid="hero-title">
              Run your whole business with <span className="text-brand">one smart CRM &amp; ERP</span>
            </h1>
            <p className="ffh-hero-lead">
              Manage Sales &amp; Marketing, Materials &amp; Finance, Projects, Work &amp; Support Activities with just One Tool. Thousands of Indian businesses trust FFH|ERP to respond faster to leads, bill smarter, and run leaner operations.
            </p>
            <ul className="ffh-checklist">
              {HERO_POINTS.map((p) => (
                <li key={p}><span className="ffh-check"><Check size={13} strokeWidth={3} /></span>{p}</li>
              ))}
            </ul>
            <div className="ffh-hero-stats">
              {HERO_STATS.map((s) => (
                <div key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>
              ))}
            </div>
          </Col>
          <Col lg={6} className="d-flex justify-content-lg-end reveal delay-1">
            <div className="ffh-signup" id="signup">
              <h3>Start your flexible free trial</h3>
              <Form onSubmit={submit} noValidate data-testid="signup-form">
                <Form.Control className="ffh-input" placeholder="Full name" value={f.name} onChange={set("name")} isInvalid={!!errors.name} data-testid="signup-name" />
                {errors.name && <div className="ffh-err">{errors.name}</div>}
                <Form.Control className="ffh-input" type="email" placeholder="Email ID" value={f.email} onChange={set("email")} isInvalid={!!errors.email} data-testid="signup-email" />
                {errors.email && <div className="ffh-err">{errors.email}</div>}
                <div className="position-relative">
                  <Form.Control className="ffh-input pe-5" type={show ? "text" : "password"} placeholder="Password" value={f.password} onChange={set("password")} isInvalid={!!errors.password} data-testid="signup-password" />
                  <button type="button" className="ffh-eye" onClick={() => setShow(!show)} aria-label="Toggle password" data-testid="signup-password-toggle">
                    {show ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                {errors.password && <div className="ffh-err">{errors.password}</div>}
                <div className="d-flex gap-2">
                  <Form.Select className="ffh-input ffh-code" value={f.code} onChange={set("code")} data-testid="signup-country-code">
                    {COUNTRY_CODES.map((c) => <option key={c}>{c}</option>)}
                  </Form.Select>
                  <Form.Control className="ffh-input" placeholder="Mobile number" value={f.mobile} onChange={(e) => setF({ ...f, mobile: e.target.value.replace(/\D/g, "") })} isInvalid={!!errors.mobile} data-testid="signup-mobile" />
                </div>
                {errors.mobile && <div className="ffh-err">{errors.mobile}</div>}
                <p className="ffh-note">It looks like you're in <b>India</b> based on your IP. Your data will be stored in the India data center.</p>
                <Form.Check id="agree" className="ffh-agree" checked={f.agree} onChange={set("agree")} data-testid="signup-agree"
                  label={<>I agree to the <a href="#terms" onClick={(e) => e.preventDefault()}>Terms of Service</a> and <a href="#privacy" onClick={(e) => e.preventDefault()}>Privacy Policy</a>.</>} />
                {errors.agree && <div className="ffh-err">{errors.agree}</div>}
                <button type="submit" className="btn ffh-btn ffh-btn-primary w-100 ffh-submit" disabled={loading} data-testid="signup-submit">
                  {loading ? <Loader2 size={18} className="spin" /> : "GET STARTED"}
                </button>
                <div className="ffh-or"><span>or sign in using</span></div>
                <Row className="g-2">
                  <Col><button type="button" className="btn ffh-social w-100" onClick={() => toast("Google sign-in coming soon")} data-testid="signup-google"><GoogleIcon /> Google</button></Col>
                  <Col><button type="button" className="btn ffh-social w-100" onClick={() => toast("LinkedIn sign-in coming soon")} data-testid="signup-linkedin"><LinkedInIcon /> LinkedIn</button></Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
