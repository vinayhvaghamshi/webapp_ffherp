import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { LayoutGrid, Users, Ticket, Wallet, FolderOpen, RotateCcw, Plus, ChevronRight, Trash2, TrendingUp, CircleDot, Check } from "lucide-react";
import { toast } from "sonner";
import { useCRM } from "./crmStore";
import { LEAD_STAGES, formatINR } from "../../mock";

const TABS = [
  { k: "home", l: "Home", i: LayoutGrid },
  { k: "leads", l: "Leads", i: Users },
  { k: "tickets", l: "Tickets", i: Ticket },
  { k: "finance", l: "Finance", i: Wallet },
  { k: "projects", l: "Projects", i: FolderOpen },
];
const uid = () => Math.random().toString(36).slice(2, 9);

function Home({ crm }) {
  const won = crm.leads.filter((l) => l.stage === "Won").reduce((a, l) => a + l.value, 0);
  const open = crm.leads.filter((l) => l.stage !== "Won");
  const pipe = open.reduce((a, l) => a + l.value, 0);
  const tickets = crm.tickets.filter((t) => t.open).length;
  const byStage = LEAD_STAGES.slice(0, 3).map((s) => crm.leads.filter((l) => l.stage === s).reduce((a, l) => a + l.value, 0));
  const maxS = Math.max(...byStage, 1);
  return (
    <>
      <Row className="g-2">
        <Col xs={4}><div className="crm-kpi"><span>Revenue (won)</span><strong data-testid="crm-revenue">{formatINR(won)}</strong><em className="g"><TrendingUp size={11} /> live</em></div></Col>
        <Col xs={4}><div className="crm-kpi"><span>Open Leads</span><strong data-testid="crm-open-leads">{open.length}</strong><em className="b"><Users size={11} /> pipeline</em></div></Col>
        <Col xs={4}><div className="crm-kpi"><span>Tickets</span><strong data-testid="crm-open-tickets">{tickets}</strong><em className="o"><Ticket size={11} /> open</em></div></Col>
      </Row>
      <div className="crm-pipe">
        <div className="d-flex justify-content-between"><span>Sales pipeline value</span><strong data-testid="crm-pipeline">{formatINR(pipe)}</strong></div>
        <div className="crm-pipe-bars">
          {byStage.map((v, i) => (
            <div key={i}><div style={{ height: `${Math.max(6, Math.round((v / maxS) * 52))}px` }} /><small>{LEAD_STAGES[i]}</small></div>
          ))}
        </div>
      </div>
      <div className="crm-activity">
        <div className="crm-label">RECENT ACTIVITY</div>
        <ul data-testid="crm-activity-list">{crm.activity.map((a, i) => <li key={i + a}>{a}</li>)}</ul>
      </div>
    </>
  );
}

function Leads({ crm, update }) {
  const [n, setN] = useState({ name: "", value: "" });
  const add = (e) => {
    e.preventDefault();
    if (!n.name.trim() || !Number(n.value)) return toast.error("Enter lead name and value");
    update((c) => ({ ...c, leads: [{ id: uid(), name: n.name, owner: "You", value: Number(n.value), stage: "Suspect" }, ...c.leads] }), `New lead added: ${n.name}`);
    setN({ name: "", value: "" });
    toast.success("Lead added");
  };
  const advance = (l) => {
    const next = LEAD_STAGES[Math.min(LEAD_STAGES.indexOf(l.stage) + 1, 3)];
    update((c) => ({ ...c, leads: c.leads.map((x) => (x.id === l.id ? { ...x, stage: next } : x)) }), `${l.name} moved to ${next}`);
    if (next === "Won") toast.success(`Deal won: ${l.name}`);
  };
  const del = (l) => update((c) => ({ ...c, leads: c.leads.filter((x) => x.id !== l.id) }), `Lead removed: ${l.name}`);
  return (
    <>
      <Form onSubmit={add} className="crm-form">
        <Form.Control size="sm" placeholder="Lead / company" value={n.name} onChange={(e) => setN({ ...n, name: e.target.value })} data-testid="crm-lead-name" />
        <Form.Control size="sm" placeholder="Value ₹" value={n.value} onChange={(e) => setN({ ...n, value: e.target.value.replace(/\D/g, "") })} data-testid="crm-lead-value" />
        <button className="btn crm-add" type="submit" data-testid="crm-lead-add"><Plus size={15} /></button>
      </Form>
      <div className="crm-list">
        {crm.leads.map((l) => (
          <div className="crm-row" key={l.id} data-testid="crm-lead-row">
            <div className="flex-grow-1 min-w-0"><strong className="text-truncate d-block">{l.name}</strong><small>{l.owner} · {formatINR(l.value)}</small></div>
            <span className={`crm-stage s-${LEAD_STAGES.indexOf(l.stage)}`}>{l.stage}</span>
            {l.stage !== "Won" && <button className="crm-icon-btn" title="Advance stage" onClick={() => advance(l)} data-testid="crm-lead-advance"><ChevronRight size={15} /></button>}
            <button className="crm-icon-btn danger" title="Delete" onClick={() => del(l)} data-testid="crm-lead-delete"><Trash2 size={14} /></button>
          </div>
        ))}
      </div>
    </>
  );
}

function Tickets({ crm, update }) {
  const [title, setTitle] = useState("");
  const add = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    update((c) => ({ ...c, tickets: [{ id: uid(), title, priority: "Medium", open: true }, ...c.tickets] }), `Ticket opened: ${title}`);
    setTitle("");
  };
  const toggle = (t) => update((c) => ({ ...c, tickets: c.tickets.map((x) => (x.id === t.id ? { ...x, open: !x.open } : x)) }), `Ticket ${t.open ? "closed" : "reopened"}: ${t.title}`);
  return (
    <>
      <Form onSubmit={add} className="crm-form">
        <Form.Control size="sm" placeholder="Describe the issue…" value={title} onChange={(e) => setTitle(e.target.value)} data-testid="crm-ticket-title" />
        <button className="btn crm-add" type="submit" data-testid="crm-ticket-add"><Plus size={15} /></button>
      </Form>
      <div className="crm-list">
        {crm.tickets.map((t) => (
          <div className={`crm-row ${t.open ? "" : "done"}`} key={t.id} data-testid="crm-ticket-row">
            <CircleDot size={14} className={`prio p-${t.priority}`} />
            <div className="flex-grow-1 min-w-0"><strong className="text-truncate d-block">{t.title}</strong><small>{t.priority} priority</small></div>
            <button className={`btn crm-pill-btn ${t.open ? "" : "closed"}`} onClick={() => toggle(t)} data-testid="crm-ticket-toggle">{t.open ? "Close" : "Reopen"}</button>
          </div>
        ))}
      </div>
    </>
  );
}

function Finance({ crm, update }) {
  const due = (type) => crm.finance.filter((f) => f.type === type && !f.paid).reduce((a, f) => a + f.amount, 0);
  const pay = (f) => update((c) => ({ ...c, finance: c.finance.map((x) => (x.id === f.id ? { ...x, paid: true } : x)) }), `${f.type === "Receivable" ? "Payment received" : "Payment made"}: ${f.party}`);
  return (
    <>
      <Row className="g-2 mb-2">
        <Col xs={6}><div className="crm-kpi"><span>Receivables</span><strong className="text-success" data-testid="crm-receivables">{formatINR(due("Receivable"))}</strong></div></Col>
        <Col xs={6}><div className="crm-kpi"><span>Payables</span><strong className="text-danger" data-testid="crm-payables">{formatINR(due("Payable"))}</strong></div></Col>
      </Row>
      <div className="crm-list">
        {crm.finance.map((f) => (
          <div className={`crm-row ${f.paid ? "done" : ""}`} key={f.id}>
            <div className="flex-grow-1 min-w-0"><strong className="text-truncate d-block">{f.party}</strong><small>{f.type} · {formatINR(f.amount)}</small></div>
            {f.paid ? <span className="crm-stage s-3"><Check size={11} /> Paid</span> : <button className="btn crm-pill-btn" onClick={() => pay(f)} data-testid="crm-finance-pay">Mark paid</button>}
          </div>
        ))}
      </div>
    </>
  );
}

function Projects({ crm, update }) {
  const bump = (p) => {
    const v = Math.min(100, p.progress + 10);
    update((c) => ({ ...c, projects: c.projects.map((x) => (x.id === p.id ? { ...x, progress: v } : x)) }), v === 100 ? `Project delivered: ${p.name}` : `${p.name} at ${v}%`);
  };
  return (
    <div className="crm-list">
      {crm.projects.map((p) => (
        <div className="crm-proj" key={p.id} data-testid="crm-project-row">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <strong>{p.name}</strong>
            <button className="btn crm-pill-btn" disabled={p.progress >= 100} onClick={() => bump(p)} data-testid="crm-project-bump">+10%</button>
          </div>
          <div className="crm-progress"><div style={{ width: `${p.progress}%` }} /></div>
          <small>{p.progress}% complete</small>
        </div>
      ))}
    </div>
  );
}

export default function LiveCRM() {
  const { crm, update, reset } = useCRM();
  const [tab, setTab] = useState("home");
  const props = { crm, update };
  return (
    <section className="ffh-section bg-white ffh-live" id="live">
      <Container className="ffh-container">
        <Row className="g-5 align-items-center">
          <Col lg={6} className="reveal">
            <span className="ffh-pill">Hands-on experience</span>
            <h2 className="ffh-h2 mt-3">Get a hands-on <span className="text-brand">FFH|ERP</span> experience right here</h2>
            <p className="ffh-lead-sm">This is a live mini-CRM running on real data. Add a lead, move it through your pipeline, close a ticket, and watch the dashboard, finance and projects update instantly.</p>
            <ul className="ffh-bullets">
              <li>Add &amp; qualify leads across stages</li>
              <li>Open / close support tickets</li>
              <li>Track receivables, payables &amp; projects</li>
            </ul>
          </Col>
          <Col lg={6} className="reveal delay-1">
            <div className="crm-window" data-testid="live-crm">
              <div className="crm-top">
                <span className="ffh-dot-row color"><i /><i /><i /></span>
                <span className="crm-title">FFH|ERP · Live CRM</span>
                <button className="crm-reset" onClick={() => { reset(); setTab("home"); toast("Demo data reset"); }} data-testid="crm-reset"><RotateCcw size={11} /> Reset</button>
                <span className="crm-live"><i /> LIVE</span>
              </div>
              <div className="crm-tabs">
                {TABS.map(({ k, l, i: I }) => (
                  <button key={k} className={tab === k ? "active" : ""} onClick={() => setTab(k)} data-testid={`crm-tab-${k}`}><I size={14} /> {l}</button>
                ))}
              </div>
              <div className="crm-body" key={tab}>
                {tab === "home" && <Home crm={crm} />}
                {tab === "leads" && <Leads {...props} />}
                {tab === "tickets" && <Tickets {...props} />}
                {tab === "finance" && <Finance {...props} />}
                {tab === "projects" && <Projects {...props} />}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
