// MOCK DATA - all content is static/frontend only (localStorage for interactions)
export const NAV_LINKS = [
  { label: "Modules", href: "#modules" },
  { label: "Features", href: "#features" },
  { label: "Why FFH", href: "#why" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export const HERO_POINTS = [
  "Sales, Marketing, Finance, AMC & Projects in one tool",
  "Smart dashboards with actionable insights",
  "Works on mobile & tablet — Android and iOS",
];

export const HERO_STATS = [
  { value: "9", label: "Business Tools" },
  { value: "100%", label: "Mobile Ready" },
  { value: "24/7", label: "Dedicated Support" },
];

export const COUNTRY_CODES = ["+91", "+1", "+44", "+971", "+61", "+65", "+49", "+27", "+966"];

export const CLIENTS = [
  { name: "NovaFin Capital", icon: "Landmark", quote: "FFH|ERP gave our relationship managers a single view of every client and every rupee.", person: "Arvind Menon", role: "Head of Operations, NovaFin Capital", img: 11 },
  { name: "Prime Assets", icon: "Building2", quote: "Our property sales cycle is now 30% faster thanks to automated follow-ups.", person: "Neha Kapoor", role: "VP Sales, Prime Assets", img: 44 },
  { name: "Jewelloka", icon: "Gem", quote: "Billing, inventory and customer loyalty finally live in one place.", person: "Rakesh Soni", role: "Founder, Jewelloka", img: 13 },
  { name: "Unity Bank", icon: "Landmark", quote: "The ticketing module has transformed how our branches resolve customer issues.", person: "Priya Iyer", role: "Customer Experience Lead, Unity Bank", img: 32 },
  { name: "AgriCore", icon: "Factory", quote: "The launch of FFH|ERP is one of our most significant initiatives to drive digital transformation and growth.", person: "Shobhana Rao", role: "Chief IT Innovation & Learning Officer, AgriCore", img: 45 },
  { name: "Brigade Build", icon: "Building", quote: "Project billing and material tracking are now completely in sync across sites.", person: "Karthik Reddy", role: "Project Director, Brigade Build", img: 15 },
  { name: "SecureIDT", icon: "ShieldCheck", quote: "AMC renewals never slip anymore — the reminders alone paid for the software.", person: "Imran Shaikh", role: "Service Manager, SecureIDT", img: 53 },
  { name: "Galaxy Health", icon: "HeartPulse", quote: "Smart dashboards help us take decisions every morning in minutes.", person: "Dr. Meera Nair", role: "Director, Galaxy Health", img: 26 },
  { name: "DriveMax", icon: "Truck", quote: "Our field team updates leads straight from their phones. Game changer.", person: "Sandeep Gill", role: "Regional Head, DriveMax", img: 59 },
  { name: "Community First", icon: "ShoppingBag", quote: "Simple enough for every team member, powerful enough for management.", person: "Anita Desai", role: "COO, Community First", img: 49 },
  { name: "TechNimbus", icon: "Cpu", quote: "We replaced four tools with FFH|ERP and cut our admin time in half.", person: "Vikram Joshi", role: "CTO, TechNimbus", img: 60 },
  { name: "Zenith Retail", icon: "ShoppingBag", quote: "Purchase to payment — every step is visible and accountable now.", person: "Farah Khan", role: "Finance Controller, Zenith Retail", img: 41 },
];

export const MILESTONES = [
  { value: 30, suffix: "+", label: "Years in the Industry", icon: "CheckCheck" },
  { value: 10000, suffix: "+", label: "Clients", icon: "Users" },
  { value: 20000, suffix: "+", label: "Software Installations", icon: "MonitorSmartphone" },
  { value: 100, suffix: "+", label: "Awards & Recognition", icon: "Award" },
];

export const TOOLS = [
  { name: "Market", desc: "Capture, nurture and convert prospects into leads.", icon: "Megaphone" },
  { name: "Sales", desc: "Track leads & opportunities across every stage.", icon: "TrendingUp" },
  { name: "Purchase", desc: "Manage purchase orders and material flow.", icon: "ShoppingCart" },
  { name: "Bill", desc: "Invoicing, receivables and payment tracking.", icon: "ReceiptText" },
  { name: "Spend", desc: "Control payables, expenses and approvals.", icon: "Wallet" },
  { name: "AMC", desc: "Warranty, contracts and ticket management.", icon: "ShieldCheck" },
  { name: "Support", desc: "Service tickets with automatic case routing.", icon: "Headphones" },
  { name: "Work", desc: "Create, allocate and track team tasks.", icon: "ListChecks" },
  { name: "Project", desc: "Plan, bill and deliver client projects.", icon: "FolderKanban" },
];

export const MODULE_TABS = [
  {
    key: "sales", title: "Sales & Marketing", sub: "From prospect to payment", icon: "TrendingUp",
    heading: "Know your pipeline. Grow with confidence.",
    text: "Create, edit and follow up on leads, log every action, and generate quotations in your own format — mailed or printed with one click. Track each executive's performance with smart dashboards.",
    points: ["Lead stages: Suspect, Prospect, In-progress, Won", "One-click quotes, invoices & e-mail campaigns", "Targets, activity logs & team performance dashboards"],
    cta: "Explore Sales & Marketing",
    dash: { label: "SALES & MARKETING", bars: [62, 78, 54, 88, 70, 92], target: [70, 70, 75, 80, 80, 85], trend: [20, 34, 30, 46, 52, 64, 78], kpis: [["Leads", "1,240"], ["Quotes", "318"], ["Won", "96"]] },
  },
  {
    key: "materials", title: "Materials & Purchase", sub: "Flow without friction", icon: "Layers",
    heading: "Every material, tracked from order to shelf.",
    text: "Raise purchase orders, approve vendors and receive materials against each PO. Stock levels update automatically so you always know what is in hand and what is on the way.",
    points: ["Purchase orders with multi-level approvals", "Vendor management & price comparison", "Real-time stock, GRN & material issue tracking"],
    cta: "Explore Materials & Purchase",
    dash: { label: "MATERIALS & PURCHASE", bars: [45, 60, 72, 58, 80, 66], target: [60, 60, 65, 65, 70, 70], trend: [40, 38, 50, 48, 60, 58, 70], kpis: [["POs", "412"], ["Vendors", "86"], ["In stock", "94%"]] },
  },
  {
    key: "finance", title: "Finance & Billing", sub: "Clarity for every rupee", icon: "Wallet",
    heading: "Bill smarter. Collect faster.",
    text: "Generate GST-ready invoices, track receivables and payables, and approve expenses on the go. Automated reminders keep cash flowing without awkward follow-up calls.",
    points: ["GST-ready invoices in your own format", "Receivables, payables & expense approvals", "Automated payment reminders & ageing reports"],
    cta: "Explore Finance & Billing",
    dash: { label: "FINANCE & BILLING", bars: [70, 66, 84, 76, 90, 95], target: [75, 75, 80, 80, 85, 90], trend: [30, 42, 40, 55, 62, 70, 84], kpis: [["Invoices", "2,104"], ["Collected", "₹42L"], ["Due", "₹3.1L"]] },
  },
  {
    key: "amc", title: "AMC & Support", sub: "Service that never slips", icon: "Headphones",
    heading: "Service contracts that renew themselves.",
    text: "Track warranties and AMC contracts, schedule preventive maintenance and route every service ticket to the right engineer automatically — with SLA timers your customers will love.",
    points: ["AMC & warranty tracking with renewal alerts", "Auto case routing & SLA monitoring", "Preventive maintenance schedules & reports"],
    cta: "Explore AMC & Support",
    dash: { label: "AMC & SUPPORT", bars: [80, 74, 88, 82, 91, 97], target: [85, 85, 85, 90, 90, 90], trend: [50, 56, 60, 58, 70, 76, 88], kpis: [["Contracts", "640"], ["Renewals", "58"], ["SLA met", "98%"]] },
  },
];

export const WHY_FEATURES = [
  { title: "Smart dashboards", desc: "Get actionable insights at your fingertips using smart, customizable dashboards.", icon: "LayoutDashboard" },
  { title: "Access anywhere, anytime", desc: "Fully compatible with mobiles and tablets on Android or iOS — work from anywhere.", icon: "Smartphone" },
  { title: "Customizable documents", desc: "Customize quotation, invoice and other document formats as per your needs.", icon: "FileCog" },
  { title: "Dedicated support", desc: "Get dedicated sales and product support whenever you hit a snag.", icon: "LifeBuoy" },
];

export const TESTIMONIALS = [
  { name: "Director of Marketing", company: "Marketing Agency", img: 47, text: "Great software. An incredible amount of features. Awesome support. I'm very happy so far." },
  { name: "Sales Head", company: "Manufacturing Company", img: 12, text: "We have tried 6 CRMs in the past year and this is definitely the best, pricing and features wise." },
  { name: "Director", company: "Security Equipment Provider", img: 33, text: "Knowledgeable and friendly support staff. Keep up the great work." },
  { name: "Operations Manager", company: "IT Services Firm", img: 68, text: "The AMC and ticketing modules transformed how we handle service requests. Highly recommended." },
  { name: "Finance Controller", company: "Retail Chain", img: 5, text: "Invoices, receivables and approvals in one place. Our month-end close is now two days shorter." },
];

export const INTEGRATIONS = ["Google", "Microsoft", "WhatsApp", "Gmail", "Slack", "Zapier", "Stripe", "PayPal", "Razorpay", "Zoom"];

export const FAQS = [
  { q: "How do I sign up for the free trial?", a: "Click any 'Try Free' button and start your 7-day free trial instantly — no credit card required." },
  { q: "What should I prepare before getting started?", a: "Just your business details and team members. Our onboarding team helps you configure modules in minutes." },
  { q: "Can FFH|ERP help my company with sales & support?", a: "Absolutely. FFH|ERP unifies marketing, sales, finance, AMC, support, work and projects in one tool." },
  { q: "Is FFH|ERP accessible on mobile devices?", a: "Yes. The platform is fully compatible with Android and iOS mobiles and tablets." },
];

export const PLANS = [
  { name: "Sales", sub: "Sales & Marketing Module", monthly: 720, yearly: 600, cta: "Get Started", features: ["Lead & opportunity tracking", "Targets & activity log", "Quote generation", "Marketing campaigns", "Email from system"] },
  { name: "Pro", sub: "Complete ERP Package", monthly: 960, yearly: 800, cta: "Try Pro Free", popular: true, features: ["All 9 modules included", "Smart dashboards", "Unlimited exports", "Finance & materials", "Priority support"] },
  { name: "Support", sub: "AMC & Ticketing Module", monthly: 720, yearly: 600, cta: "Get Started", features: ["AMC & warranty tracking", "Service tickets", "Auto case routing", "Preventive maintenance", "Support reports"] },
];

export const FOOTER_COLS = [
  { title: "Modules", links: ["Marketing", "Sales", "Finance", "AMC & Support", "Projects"] },
  { title: "Company", links: ["Why FFH", "Pricing", "Contact Us", "About", "Careers"] },
  { title: "Support", links: ["Help Centre", "System Status", "Support Docs", "Account Info", "Talk to Support"] },
];

// Live CRM seed
export const CRM_SEED = {
  leads: [
    { id: "l1", name: "Acme Industries", owner: "Rahul", value: 150000, stage: "Won" },
    { id: "l2", name: "Zenith Retail", owner: "Priya", value: 180000, stage: "Prospect" },
    { id: "l3", name: "Brigade Build", owner: "Rahul", value: 220000, stage: "In-progress" },
    { id: "l4", name: "Galaxy Health", owner: "Anjali", value: 80000, stage: "Suspect" },
  ],
  tickets: [
    { id: "t1", title: "Printer AMC visit — SecureIDT", priority: "High", open: true },
    { id: "t2", title: "Invoice format change request", priority: "Medium", open: true },
    { id: "t3", title: "Mobile app login issue", priority: "Low", open: true },
    { id: "t4", title: "Warranty extension — DriveMax", priority: "Medium", open: false },
  ],
  finance: [
    { id: "f1", party: "Acme Industries", type: "Receivable", amount: 150000, paid: false },
    { id: "f2", party: "Steel Supplies Co.", type: "Payable", amount: 64000, paid: false },
    { id: "f3", party: "Invoice #1042", type: "Receivable", amount: 42000, paid: true },
    { id: "f4", party: "Office Rent", type: "Payable", amount: 35000, paid: false },
  ],
  projects: [
    { id: "p1", name: "ERP rollout — AgriCore", progress: 72 },
    { id: "p2", name: "Site automation — Brigade", progress: 45 },
    { id: "p3", name: "CRM migration — TechNimbus", progress: 18 },
  ],
  activity: [
    "Free trial signup: Anjali Mehta (anjali@acme.in)",
    "New lead assigned to Rahul",
    "AMC renewal due in 3 days",
    "Invoice #1042 paid",
  ],
};

export const LEAD_STAGES = ["Suspect", "Prospect", "In-progress", "Won"];

export const formatINR = (v) => {
  if (v >= 100000) return `₹${(v / 100000).toFixed(1).replace(/\.0$/, "")}L`;
  if (v >= 1000) return `₹${Math.round(v / 1000)}K`;
  return `₹${v}`;
};

export const SERVING_BRANDS = [
  { key: "mercedes", name: "Mercedes-Benz" },
  { key: "force", name: "Force Motors" },
  { key: "shiji", name: "Shiji" },
  { key: "ada", name: "ADA" },
  { key: "minor", name: "Minor Hotels" },
  { key: "acme", name: "Acme Brick" },
  { key: "cimco", name: "Toromont Cimco" },
  { key: "nrs", name: "National Retail Solutions" },
  { key: "avineon", name: "Avineon" },
];

// ---------------------------------------------------------------------------
// About Us page. Names, bios and image numbers below are PLACEHOLDERS —
// replace them with the real leadership details before publishing.
// ---------------------------------------------------------------------------
export const ABOUT_US = {
  title: "One platform, built by people who run businesses",
  intro:
    "FFH|ERP is a product of KrisKross Inc. For over three decades we have helped growing companies in India and across 20+ countries replace scattered spreadsheets and disconnected tools with one connected system for sales, marketing, finance, AMC, support and projects.",
  vision: {
    icon: "Eye",
    title: "Our Vision",
    text:
      "To be the most trusted business operating system for growing companies — a single platform that every team, from the first sales call to the final invoice, runs their day on.",
  },
  mission: {
    icon: "Target",
    title: "Our Mission",
    text:
      "To give every growing business enterprise-grade CRM & ERP at a price and simplicity that fits — unifying leads, orders, money and service so teams decide faster, serve customers better and grow without adding headcount.",
  },
  values: [
    { icon: "HeartHandshake", title: "Customer First", text: "Every release starts with a customer problem, not a feature list." },
    { icon: "ShieldCheck", title: "Trust & Integrity", text: "Accurate books, transparent pricing and no lock-in contracts." },
    { icon: "Sparkles", title: "Continuous Innovation", text: "Two major releases a year, driven by what users actually ask for." },
    { icon: "Users", title: "One Team", text: "Sales, support and engineering share the same customer scorecard." },
  ],
};

export const TEAM = [
  {
    name: "Suresh Ramachandran",
    role: "Chief Executive Officer",
    img: 12,
    bio: "28 years building and scaling enterprise software businesses across India, the Gulf and South-East Asia.",
  },
  {
    name: "Deepa Krishnan",
    role: "Chief Operating Officer",
    img: 45,
    bio: "Leads delivery, customer success and operations for 10,000+ active installations.",
  },
  {
    name: "Arun Pillai",
    role: "Chief Technology Officer",
    img: 33,
    bio: "Architect of the FFH|ERP platform — mobile-first, offline-tolerant and built for low-bandwidth offices.",
  },
  {
    name: "Nikhil Verma",
    role: "Head of Marketing",
    img: 68,
    bio: "Owns brand, demand generation and partner marketing across India and our export markets.",
  },
];

// ---------------------------------------------------------------------------
// About Us — alternate layout (About2). Same company facts, different telling:
// a story timeline, a facts panel and a founder quote. Dates/details are
// PLACEHOLDERS alongside TEAM above — replace with the real history.
// ---------------------------------------------------------------------------
export const ABOUT_ALT = {
  title: "Three decades of building software",
  titleAccent: "that runs businesses",
  lead:
    "From a two-room office in Chennai to 350,000 businesses across 20+ countries — how FFH|ERP grew, what we believe, and who is accountable for it today.",
  stats: [
    { value: "1994", label: "Founded" },
    { value: "2.5K+", label: "Active users" },
    { value: "20+", label: "Countries" },
    { value: "250+", label: "Team members" },
  ],
  facts: [
    { k: "Founded", v: "1994 · Chennai, India" },
    { k: "Offices", v: "Chennai · Dubai · Singapore" },
    { k: "Team", v: "250+ across engineering, delivery & support" },
    { k: "Customers", v: "350,000+ businesses in 20+ countries" },
    { k: "Product", v: "FFH|ERP — nine modules, one platform" },
    { k: "Support", v: "24/7 helpdesk in six languages" },
  ],
  story: [
    { year: "1994", title: "The first invoice", text: "KrisKross Inc. begins by writing billing software for neighbourhood retailers in Chennai." },
    { year: "2003", title: "From billing to business", text: "Inventory, purchase and accounts join the platform — our first true ERP release." },
    { year: "2012", title: "Beyond India", text: "Customers in the Gulf and South-East Asia take the product international." },
    { year: "2019", title: "Mobile-first", text: "Field teams start running the entire sales cycle from a phone — offline included." },
    { year: "2025", title: "One connected platform", text: "Sales, marketing, finance, AMC, support and projects run in a single system for 350,000+ businesses." },
  ],
  vision: {
    title: "Our Vision",
    text:
      "A business owner anywhere should be able to see the truth of their company — every rupee, every order, every promise — without waiting for a report or guessing at a spreadsheet.",
  },
  mission: {
    title: "Our Mission",
    text:
      "To keep enterprise-grade CRM & ERP within reach of growing companies: priced for them, simple enough for every team member, and reliable enough to run the whole business on.",
  },
  principles: [
    { title: "Listen before building", text: "Product decisions start in customer reviews and support calls, not in a roadmap meeting." },
    { title: "Ship what works offline", text: "Our customers run showrooms and sites with patchy networks — the software has to cope." },
    { title: "Say the price upfront", text: "Transparent plans, no hidden modules, no forced multi-year lock-in." },
    { title: "Stay after the sale", text: "Implementation, training and a 24/7 helpdesk are part of the product, not an add-on." },
  ],
};

export const FOUNDER_QUOTE = {
  text:
    "We never set out to build the biggest software company in the country. We set out to make sure no business owner has to guess where their money, their stock or their people are.",
  person: "Suresh Ramachandran",
  role: "Chief Executive Officer",
  img: 12,
};

// ---------------------------------------------------------------------------
// About Us — layout 3 (editorial / index style). Reuses ABOUT_US for the
// vision & mission and TEAM for leadership so the story stays consistent.
// ---------------------------------------------------------------------------
export const ABOUT_3 = {
  breadcrumb: ["Home", "Company", "About"],
  title: "We build the system that businesses",
  titleAccent: "run on",
  lead:
    "FFH|ERP is the product of three decades spent inside Indian businesses — retail counters, showrooms, workshops and project sites. We build for how work actually happens, not how a slide deck says it should.",
  narrative: [
    "KrisKross Inc. started in 1994 writing billing software for retailers in Chennai. Thirty years later the same team ships FFH|ERP: nine connected modules that carry a business from the first enquiry to the final invoice without a spreadsheet in between.",
    "We are deliberately unfashionable about a few things. Our customers run showrooms with patchy networks and teams that are not technical — so the software works offline, installs in a day, and is priced where a growing company can actually afford it.",
  ],
  highlights: [
    { value: "2.5K+", label: "Active users on FFH|ERP" },
    { value: "9", label: "Connected modules" },
    { value: "24/7", label: "Support, six languages" },
    { value: "20+", label: "Countries served" },
  ],
  pillars: [
    { icon: "Layers", title: "One system, not nine tools", text: "Sales, purchase, billing, spend, AMC, support, work and projects share one database — so a quote becomes an order, an invoice and a service ticket without anyone re-typing it." },
    { icon: "Smartphone", title: "Built for the field, not the boardroom", text: "Field teams update leads, collections and service visits from a phone, online or offline. Owners open the same numbers on a dashboard the next morning." },
    { icon: "LifeBuoy", title: "Support that stays after the sale", text: "Implementation, data migration and training are part of the deal. A 24/7 helpdesk staffed by people who know the product closes the loop." },
  ],
  certifications: ["ISO 27001 aligned", "GST & e-invoicing ready", "SOC 2 aligned processes", "MSME registered", "Data hosted in India"],
};

// ---------------------------------------------------------------------------
// About Us — layout 4 (dark hero + mosaic leadership). Reuses ABOUT_ALT for
// the vision & mission and TEAM for the people.
// ---------------------------------------------------------------------------
export const ABOUT_4 = {
  eyebrow: "About FFH|ERP",
  title: "The operating system for",
  titleAccent: "growing businesses",
  lead:
    "One platform for sales, marketing, finance, AMC, support and projects — with the numbers a management team needs, in the pocket of the person who needs them.",
  numbers: [
    { value: "1994", label: "Building business software since" },
    { value: "2.5K+", label: "Active users" },
    { value: "10,000+", label: "Active installations" },
    { value: "100+", label: "Awards & recognitions" },
  ],
  edge: [
    { icon: "Gauge", title: "Live, not monthly", text: "Dashboards update as work happens, so decisions are taken on today's numbers instead of last month's report." },
    { icon: "ShieldCheck", title: "Your data stays yours", text: "Role-based access, audit trails and Indian data residency. Export everything, any time, with no lock-in." },
    { icon: "Workflow", title: "Fits how you already work", text: "Configurable stages, formats and approval flows — your quotation and invoice layouts included — without a six-month project." },
  ],
  recognitions: [
    "30+ years in business software",
    "350,000+ businesses served",
    "20+ countries",
    "24/7 support in six languages",
    "Nine connected modules",
  ],
};

// ---------------------------------------------------------------------------
// Home page — alternate layouts (Home2 / Home3)
// ---------------------------------------------------------------------------
export const HOME2_HERO = {
  pill: "Smart CRM & ERP Software",
  titleLead: "Run sales, money and service",
  titleAccent: "on one screen",
  lead:
    "FFH|ERP puts your pipeline, invoices, AMC renewals and support tickets in one place — so you can see what is happening today instead of reconciling what happened last month.",
  points: [
    "Live pipeline, collections and service load",
    "Mobile-ready for field and counter staff",
    "Setup in a day, priced for growing teams",
  ],
  panelTitle: "Today at a glance",
  panelCta: "See the live demo",
};

export const HOME3_HERO = {
  eyebrow: "Smart CRM & ERP Software",
  titleLead: "Every lead, order, rupee and ticket",
  titleAccent: "in one system",
  lead:
    "Nine connected modules for sales, marketing, finance, AMC, support and projects — trusted by 350,000+ businesses in 20+ countries.",
  stats: [
    { value: "9", label: "Business tools" },
    { value: "2.5K+", label: "Active users" },
    { value: "20+", label: "Countries" },
    { value: "24/7", label: "Support" },
  ],
};

export const HOME_STEPS = [
  { icon: "Radar", title: "Capture every lead", text: "Website, WhatsApp, phone or walk-in — every enquiry lands in one pipeline with an owner and a next step." },
  { icon: "Workflow", title: "Automate the follow-through", text: "Quotations, reminders, approvals and AMC renewals move on their own, so nothing waits on someone remembering." },
  { icon: "LineChart", title: "Decide on live numbers", text: "Pipeline, collections and service load update as work happens — on a dashboard or on a phone." },
];

// ---------------------------------------------------------------------------
// Home layouts 4-7. Each of these puts the free-trial form in the hero so the
// first thing a visitor sees is how to start. Copy is placeholder.
// ---------------------------------------------------------------------------
export const HOME4_HERO = {
  eyebrow: "Smart CRM & ERP Software",
  titleLead: "Start free, and see your whole business in",
  titleAccent: "one place",
  lead:
    "Create your trial account in under a minute — no credit card, no sales call. Load a month of your real sales, purchases and tickets, then decide on what you see.",
  steps: ["Create your account", "We migrate your data", "Run your first month"],
  badges: ["No credit card required", "Setup in a day", "Data hosted in India", "Cancel any time"],
};

export const HOME5_HERO = {
  titleLead: "Your whole business, ready in",
  titleAccent: "one afternoon",
  lead:
    "Give us an afternoon and your team is working in a real CRM & ERP — leads, quotations, invoices, AMC renewals and service tickets in one place.",
  benefits: [
    { icon: "Boxes", title: "Nine modules, one database", text: "Sales, purchase, billing, spend, AMC, support, work and projects stay in sync." },
    { icon: "Smartphone", title: "Runs on the phone", text: "Counter and field staff work offline; the office sees it the moment they sync." },
    { icon: "ShieldCheck", title: "Data stays in India", text: "Role-based access, audit trails, and export everything any time — no lock-in." },
    { icon: "Headphones", title: "Support that answers", text: "A 24/7 helpdesk in six languages, staffed by people who know the product." },
  ],
};

export const HOME6_HERO = {
  eyebrow: "Free 7-day trial",
  titleLead: "Run the trial on your real numbers,",
  titleAccent: "not on a demo",
  lead:
    "Start today with the same system 350,000+ businesses run on. No credit card, no lock-in — and a human on the phone while you set up.",
  chips: ["No credit card", "Setup in a day", "Data hosted in India", "24/7 support"],
  trust: ["ISO 27001 aligned", "GST & e-invoicing ready", "350,000+ businesses", "20+ countries"],
};

export const HOME7_HERO = {
  eyebrow: "Smart CRM & ERP Software",
  titleLead: "Everything your business runs on,",
  titleAccent: "under one roof",
  lead:
    "FFH|ERP brings nine business tools into one platform — the same idea behind our mark: many moving parts, one steady whole.",
  points: [
    { value: "9", label: "Business tools in one platform" },
    { value: "2.5K+", label: "Active users on it today" },
    { value: "30+", label: "Years building business software" },
  ],
  trust: ["No credit card required", "Setup in a day", "24/7 support in six languages"],
};

// ---------------------------------------------------------------------------
// Home layouts 8 & 9 — theme-based variants (indigo bento / emerald split).
// ---------------------------------------------------------------------------
export const HOME8_HERO = {
  eyebrow: "Smart CRM & ERP Software",
  titleLead: "Every part of the business,",
  titleAccent: "finally in one frame",
  lead:
    "Nine connected modules — sales, purchase, billing, spend, AMC, support, work and projects — on one platform a growing team can actually run.",
  stats: [
    { value: "9", label: "Business tools" },
    { value: "2.5K+", label: "Active users" },
    { value: "1 day", label: "Typical setup" },
  ],
  bullets: ["No credit card required", "Data hosted in India", "24/7 support in six languages"],
};

export const HOME9_HERO = {
  eyebrow: "Smart CRM & ERP Software",
  titleLead: "Run the month on one system,",
  titleAccent: "not on nine tabs",
  lead: "FFH|ERP keeps leads, orders, money and service in step — so your team stops reconciling and starts deciding.",
  intro: "How a month on FFH|ERP looks",
  blocks: [
    { icon: "Sparkles", title: "Start with the essentials", text: "Turn on sales and billing first, then add AMC, support and projects when you are ready — nothing to rip out later." },
    { icon: "Smartphone", title: "Works where the work is", text: "Counter and field staff use the same system on a phone, online or offline. The office sees it the moment they sync." },
    { icon: "LineChart", title: "One version of the truth", text: "Pipeline, collections and service load come from the same records, so two teams never quote two different numbers." },
    { icon: "LifeBuoy", title: "A person, not a portal", text: "Implementation, migration and training are handled with you — and the 24/7 helpdesk is answered by people who know the product." },
  ],
  next: ["Sign up in a minute", "We migrate your data", "Train your team", "Run your first month"],
  trust: ["No credit card required", "Setup in a day", "Cancel any time"],
};

// ---------------------------------------------------------------------------
// Home layouts 10 & 11 — logo-theme variants (warm centred / navy + amber rails)
// ---------------------------------------------------------------------------
export const HOME10_HERO = {
  eyebrow: "FFH|ERP",
  titleLead: "Nine tools, one platform,",
  titleAccent: "one steady whole",
  lead:
    "Sales, purchase, billing, spend, AMC, support, work, projects and market — nine parts of the same business, finally reading from the same records.",
  ribbon: [
    { value: "1994", label: "Building business software since" },
    { value: "2.5K+", label: "Active users" },
    { value: "10,000+", label: "Active installations" },
    { value: "24/7", label: "Support, six languages" },
  ],
  trust: ["No credit card required", "Setup in a day", "Data hosted in India"],
};

export const HOME11_HERO = {
  eyebrow: "Smart CRM & ERP Software",
  titleLead: "Many moving parts,",
  titleAccent: "one steady whole",
  lead:
    "Our mark is nine bars rising together — and so is the product. Every module reads from the same records, so the numbers always agree.",
  stats: [
    { value: "9", label: "Connected modules" },
    { value: "2.5K+", label: "Active users" },
    { value: "30+", label: "Years in the industry" },
  ],
  trust: ["No credit card required", "Data hosted in India", "Cancel any time"],
  story: {
    eyebrow: "Our mark",
    title: "Nine bars, one measure",
    text:
      "Each bar is a module — market, sales, purchase, bill, spend, AMC, support, work and project. They rise together because they read the same records, in the same system, at the same moment.",
  },
};

// ---------------------------------------------------------------------------
// Home layouts 12-15 — logo theme, four more layout styles.
// ---------------------------------------------------------------------------
export const HOME12_HERO = {
  eyebrow: "Smart CRM & ERP Software",
  titleLead: "See today's business,",
  titleAccent: "not last month's report",
  lead:
    "Pipeline, collections, AMC renewals and service tickets update as the work happens — so the number on your screen is the number in the business.",
  points: [
    { value: "9", label: "Modules on one database" },
    { value: "1 day", label: "Typical setup time" },
    { value: "24/7", label: "Support in six languages" },
  ],
  panelTitle: "Today at a glance",
  trust: ["No credit card required", "Data hosted in India", "Cancel any time"],
};

export const HOME13_HERO = {
  eyebrow: "FFH|ERP",
  titleLead: "The whole business,",
  titleAccent: "warmly simple",
  lead:
    "Nine tools, one platform, one login — built in India for growing companies that would rather sell than reconcile spreadsheets.",
  ribbon: [
    { value: "1994", label: "Building business software since" },
    { value: "2.5K+", label: "Active users" },
    { value: "20+", label: "Countries" },
    { value: "100+", label: "Awards & recognitions" },
  ],
  trust: ["No credit card required", "Setup in a day", "24/7 support"],
};

export const HOME14_HERO = {
  eyebrow: "Smart CRM & ERP Software",
  titleLead: "One system, every department,",
  titleAccent: "no surprises",
  lead:
    "Sales, purchase, finance, AMC, support, work and projects — the same records, the same version of the truth, whichever desk you sit at.",
  rail: [
    { label: "Modules", target: "#modules" },
    { label: "Features", target: "#features" },
    { label: "Why FFH", target: "#why" },
    { label: "Pricing", target: "#pricing" },
    { label: "Contact", target: "#contact" },
  ],
  points: [
    "Quotations, invoices and tickets from one record",
    "Field teams update offline, office sees it live",
    "Role-based access with an audit trail",
  ],
  trust: ["No credit card required", "Setup in a day", "Data hosted in India"],
};

export const HOME15_HERO = {
  eyebrow: "FFH|ERP",
  titleLead: "Nine bars, rising together —",
  titleAccent: "that is the whole idea",
  lead:
    "Each bar is a module, and each module reads the same records. Take one away and the rest still stand; add them up and you have the business.",
  tiles: [
    { value: "9", label: "Connected modules" },
    { value: "2.5K+", label: "Active users" },
    { value: "30+", label: "Years in the industry" },
  ],
  barsCaption: "Market · Sales · Purchase · Bill · Spend · AMC · Support · Work · Project",
  trust: ["No credit card required", "Data hosted in India", "Cancel any time"],
};

// ---------------------------------------------------------------------------
// About layouts 5-10 — logo theme, six more layouts. Company facts, the
// journey and the certifications are reused from the exports above.
// ---------------------------------------------------------------------------
export const ABOUT_5 = {
  eyebrow: "From the founder",
  titleLead: "Why we build software for the people",
  titleAccent: "who run the shop",
  lead:
    "Thirty years of listening to shop owners, plant managers and service engineers taught us one thing: software should carry the work, not add to it.",
  letter: [
    "When we started in 1994 we were writing billing software for retailers in Chennai, and the brief was always the same: give me back my evening. Not a dashboard, not a report — an evening without reconciling registers.",
    "Thirty years later that is still the measure. Every module we add has to remove more work than it creates, or it does not ship. That is why the product works offline, why the pricing is printed on the website, and why nobody here is paid to sell you a licence you do not need.",
    "If you run a business, you already have enough to hold in your head. Our job is to hold the rest.",
  ],
  signature: "Suresh Ramachandran · Chief Executive Officer",
};

export const ABOUT_6 = {
  eyebrow: "Our journey",
  titleLead: "Thirty years, one direction:",
  titleAccent: "make it simpler",
  lead: "From a billing package written for Chennai retailers to nine connected modules used in 20+ countries.",
  next: [
    { title: "Deeper mobile", text: "More of the month runnable from a phone, including approvals and collections." },
    { title: "More automation", text: "Follow-ups, renewals and reconciliations that happen without anyone remembering." },
    { title: "Open integrations", text: "Cleaner connections to banks, GST portals and the tools you already pay for." },
  ],
};

export const ABOUT_7 = {
  eyebrow: "About FFH|ERP",
  titleLead: "Everything about us,",
  titleAccent: "in one frame",
  lead:
    "A company, a promise and a platform — laid out the way we lay out a business: every part visible, nothing hidden in a drawer.",
};

export const ABOUT_8 = {
  eyebrow: "Who we are",
  titleLead: "A company built around",
  titleAccent: "one promise",
  lead: "That the numbers a business owner sees are the numbers the business is actually running on.",
  statement: [
    "FFH|ERP is a product of KrisKross Inc., founded in Chennai in 1994. We have spent three decades inside Indian businesses — retail counters, showrooms, workshops and project sites — and we still write software for the person who has to close the register at nine in the evening.",
    "We are deliberately unfashionable about a few things: the product works offline, it installs in a day, the price is on the website and the data stays in India. Those are not features. They are the terms on which we do business.",
  ],
};

export const ABOUT_9 = {
  eyebrow: "Leadership",
  titleLead: "The four people",
  titleAccent: "answerable for it",
  lead:
    "No layers between you and the decision makers. Between them they carry four decades of ERP, CRM and enterprise delivery experience.",
};

export const ABOUT_10 = {
  eyebrow: "About FFH|ERP",
  titleLead: "The company,",
  titleAccent: "by the numbers",
  lead: "Three decades of building business software in India, measured the only way that matters: what it does for the people using it.",
  metrics: [
    { value: "1994", label: "Founded in Chennai" },
    { value: "30+", label: "Years in business software" },
    { value: "2.5K+", label: "Active users" },
    { value: "10,000+", label: "Active installations" },
    { value: "20+", label: "Countries" },
    { value: "24/7", label: "Support in six languages" },
  ],
};

// ---------------------------------------------------------------------------
// Home layout 16 — reference-style floating pill navigation + clean centred
// marketing page, dressed in the logo theme.
// ---------------------------------------------------------------------------
export const HOME16_HERO = {
  eyebrow: "Smart CRM & ERP Software",
  titleLead: "One platform for the whole business,",
  titleAccent: "from first call to final invoice",
  lead:
    "FFH|ERP brings sales, marketing, finance, AMC, support and projects into one system — so your team stops switching tabs and starts closing.",
  trust: ["No credit card required", "Setup in a day", "350,000+ businesses"],
  services: [
    { icon: "Megaphone", title: "Sales & marketing", text: "Capture every enquiry, run follow-ups automatically and watch the pipeline move in real time." },
    { icon: "ReceiptText", title: "Finance & billing", text: "Quotations, invoices, receivables and approvals from the same records your team sells on." },
    { icon: "Headphones", title: "AMC & support", text: "Warranty, contracts and service tickets with automatic routing and renewal reminders." },
  ],
  menu: {
    modules: [
      { label: "Sales & Marketing", desc: "From prospect to payment", target: "#modules" },
      { label: "Materials & Purchase", desc: "Flow without friction", target: "#modules" },
      { label: "Finance & Billing", desc: "Clarity for every rupee", target: "#modules" },
      { label: "AMC & Support", desc: "Service that never slips", target: "#modules" },
    ],
    resources: [
      { label: "About us", desc: "Who runs FFH|ERP", target: "/about" },
      { label: "Our journey", desc: "Thirty years, one direction", target: "/about6" },
      { label: "Leadership", desc: "The people answerable", target: "/about9" },
      { label: "Case studies", desc: "What customers say", target: "#testimonials" },
    ],
  },
};

// ---------------------------------------------------------------------------
// Home layout 17 — Apple-style glass theme: frosted panels over a vivid
// gradient, with an adaptive glass navigation.
// ---------------------------------------------------------------------------
export const HOME17_HERO = {
  eyebrow: "Smart CRM & ERP Software",
  titleLead: "Everything your business runs on,",
  titleAccent: "in one clear view",
  lead:
    "Nine connected modules behind one calm interface — sales, purchase, billing, spend, AMC, support, work and projects, all reading the same records.",
  stats: [
    { value: "9", label: "Modules, one database" },
    { value: "2.5K+", label: "Active users" },
    { value: "24/7", label: "Support, six languages" },
  ],
  features: [
    { icon: "Layers", title: "One calm surface", text: "Every module shares the same records, so there is nothing to reconcile between screens." },
    { icon: "Zap", title: "Fast where it matters", text: "Create a quotation, turn it into an invoice and raise the service ticket in three taps." },
    { icon: "ShieldCheck", title: "Private by design", text: "Role-based access, audit trails and your data hosted in India — exportable at any time." },
  ],
  note: "No credit card required · Setup in a day · Cancel any time",
};

// ---------------------------------------------------------------------------
// Home layout 18 — dark glass. New imagery (picsum photo ids are stable),
// new widget datasets and new numbers; nothing is shared with layout 17.
// ---------------------------------------------------------------------------
export const HOME18 = {
  eyebrow: "Live business command centre",
  titleLead: "Run the business from",
  titleAccent: "one dark, quiet screen",
  lead:
    "Nine modules on one database, with the numbers that matter updating as the work happens — not in a report you read a month later.",
  trust: ["No credit card required", "Setup in a day", "Data hosted in India"],
  kpis: [
    { label: "Revenue booked", value: "₹1.84Cr", delta: "+12.4%" },
    { label: "Open leads", value: "312", delta: "+38 this week" },
    { label: "Renewals due", value: "27", delta: "next 7 days" },
  ],
  spark: [18, 26, 22, 34, 30, 44, 41, 56, 52, 68, 63, 78, 88],
  ring: { label: "Monthly target", pct: 78, sub: "₹1.84Cr of ₹2.36Cr" },
  collections: {
    title: "Collections this month",
    note: "Receivables cleared against invoices raised",
    bars: [
      { m: "Apr", v: 46 }, { m: "May", v: 58 }, { m: "Jun", v: 52 },
      { m: "Jul", v: 67 }, { m: "Aug", v: 61 }, { m: "Sep", v: 84 },
    ],
  },
  metrics: [
    { value: "₹2.4Cr", label: "Invoiced through FFH|ERP last month" },
    { value: "1.2M", label: "Leads tracked across customers" },
    { value: "48K", label: "AMC renewals automated" },
    { value: "99.98%", label: "Platform uptime, last 12 months" },
    { value: "20+", label: "Countries served" },
    { value: "6", label: "Support languages" },
  ],
  features: [
    { icon: "Radar", title: "See everything at once", text: "Pipeline, collections, service load and project margin on one screen, in one glance." },
    { icon: "Zap", title: "Act without switching tabs", text: "Turn a lead into a quotation, an order and an invoice from the same record." },
    { icon: "Lock", title: "Private by default", text: "Role-based access and audit trails, with your data hosted in India and exportable any time." },
  ],
  quotes: [
    { text: "The command centre is the first thing our managers open. It replaced four spreadsheets and a morning meeting.", person: "Arvind Menon", role: "Head of Operations, NovaFin Capital", img: 11 },
    { text: "Collections improved in the first quarter because reminders stopped depending on anyone remembering.", person: "Farah Khan", role: "Finance Controller, Zenith Retail", img: 41 },
    { text: "Our site engineers raise tickets from the phone and the client sees the status before we call them.", person: "Karthik Reddy", role: "Project Director, Brigade Build", img: 15 },
  ],
  photos: {
    workstation: { id: 60, caption: "Field and office teams on the same records" },
    invoices: { id: 431, caption: "Invoices, receipts and approvals in one place" },
    planning: { id: 20, caption: "Planning the month on live numbers" },
    skyline: { id: 1067, caption: "350,000+ businesses across 20+ countries" },
  },
};

// ---------------------------------------------------------------------------
// Home layout 20 — Zerodha/Kite-style app theme: flat surfaces, thin borders,
// 4px radii, blue #387ed1, tabular data. Own copy, table and product set.
// ---------------------------------------------------------------------------
export const HOME20 = {
  eyebrow: "Smart CRM & ERP Software",
  titleLead: "Run the whole business at",
  titleAccent: "₹0 setup cost",
  lead:
    "Nine modules on one database, priced on the website and live in a day. No implementation fee, no lock-in, no surprises at renewal.",
  stats: [
    { value: "₹0", label: "Setup cost" },
    { value: "1 day", label: "Time to go live" },
    { value: "99.98%", label: "Uptime, last 12 months" },
    { value: "2.5K+", label: "Active users" },
  ],
  products: [
    { name: "FFH Kite", desc: "Sales & marketing workspace", target: "#modules" },
    { name: "FFH Console", desc: "Finance, billing & back office", target: "#modules" },
    { name: "FFH AMC", desc: "Warranty, contracts & renewals", target: "#modules" },
    { name: "FFH Varsity", desc: "Training, help centre & support", target: "#contact" },
  ],
  advantages: [
    "One database behind all nine modules",
    "Implementation and data migration included",
    "GST-ready invoicing on your own formats",
    "Android, iOS and desktop from one login",
    "Role-based access with a full audit trail",
    "Export everything, any time — no lock-in",
  ],
  pricingTable: {
    columns: [
      { name: "Sales", price: "₹600", note: "/month" },
      { name: "Pro", price: "₹800", note: "/month", popular: true },
      { name: "Support", price: "₹600", note: "/month" },
    ],
    rows: [
      { label: "Modules included", values: ["Sales & marketing", "All nine modules", "AMC & ticketing"] },
      { label: "Users", values: ["5", "25", "10"] },
      { label: "Invoicing & GST", values: ["Yes", "Yes", "Yes"] },
      { label: "Mobile app", values: ["Android & iOS", "Android & iOS", "Android & iOS"] },
      { label: "Support", values: ["Email", "24/7 priority", "24/7 priority"] },
      { label: "Data export", values: ["Anytime", "Anytime", "Anytime"] },
    ],
  },
};

// ---------------------------------------------------------------------------
// Home layouts 21 & 22 — built with Tailwind only (no Bootstrap): 21 is a
// modern light SaaS layout, 22 the Apple-style glass layout in Tailwind.
// ---------------------------------------------------------------------------
export const HOME21 = {
  badge: "New · FFH|ERP 2026 release",
  titleLead: "The operating system for",
  titleAccent: "growing businesses",
  lead:
    "Sales, purchase, billing, spend, AMC, support, work and projects on one database — with dashboards your team actually opens.",
  proof: { rating: "4.8/5", note: "from 2,100+ reviews", clients: "350,000+ businesses" },
  bento: [
    { icon: "Radar", title: "Live pipeline", text: "Every enquiry, quote and follow-up in one board, updated as the work happens.", span: "wide" },
    { icon: "Wallet", title: "Money in one place", text: "Invoices, receivables and approvals from the same records you sell on." },
    { icon: "Headphones", title: "Service that never slips", text: "AMC reminders, tickets and visits routed automatically." },
    { icon: "LineChart", title: "Decisions on live numbers", text: "Dashboards refresh with the work — not at month end.", span: "wide" },
  ],
  metrics: [
    { value: "9", label: "Modules on one database" },
    { value: "1 day", label: "Typical setup" },
    { value: "99.98%", label: "Uptime" },
    { value: "24/7", label: "Support, six languages" },
  ],
};

export const HOME22 = {
  badge: "Free 7-day trial",
  titleLead: "Everything your business runs on,",
  titleAccent: "beautifully clear",
  lead:
    "A calm, glass-clear surface over nine connected modules. The numbers update as the work happens — nothing to reconcile at month end.",
  stats: [
    { value: "9", label: "Modules, one database" },
    { value: "2.5K+", label: "Active users" },
    { value: "99.98%", label: "Uptime" },
  ],
  features: [
    { icon: "Layers", title: "One calm surface", text: "Every module reads the same records, so nothing needs reconciling between screens." },
    { icon: "Zap", title: "Fast where it matters", text: "Quote, order and invoice from one record — in three taps." },
    { icon: "ShieldCheck", title: "Private by design", text: "Role-based access and audit trails, with your data hosted in India." },
  ],
  quotes: [
    { text: "Our managers open it first thing. It replaced four spreadsheets and a morning meeting.", person: "Arvind Menon", role: "Head of Operations, NovaFin", img: 11 },
    { text: "Collections improved in the first quarter because reminders stopped depending on memory.", person: "Farah Khan", role: "Finance Controller, Zenith Retail", img: 41 },
  ],
};

// ---------------------------------------------------------------------------
// Home layouts 23-25 (all Tailwind): 23 rebuilds the reference navbar layout,
// 24 pairs that navbar with the Apple-glass surfaces, 25 is a neo-brutalist
// design of our own.
// ---------------------------------------------------------------------------
export const HOME23 = {
  badge: "Smart CRM & ERP Software",
  titleLead: "Run the whole business from",
  titleAccent: "one calm place",
  lead:
    "Sales, finance, AMC, support and projects on one database — with the reports your team already knows how to read.",
  trust: ["No credit card required", "Setup in a day", "24/7 support"],
  services: [
    { icon: "Megaphone", title: "Sales & marketing", text: "Capture every enquiry, automate follow-ups and watch the pipeline move." },
    { icon: "ReceiptText", title: "Finance & billing", text: "Quotations, invoices, receivables and approvals from one record." },
    { icon: "Headphones", title: "AMC & support", text: "Warranty, contracts and tickets with renewal reminders built in." },
    { icon: "FolderKanban", title: "Work & projects", text: "Plan, allocate, bill and track delivery margin per project." },
  ],
  metrics: [
    { value: "9", label: "Modules" },
    { value: "2.5K+", label: "Active users" },
    { value: "20+", label: "Countries" },
    { value: "24/7", label: "Support" },
  ],
};

export const HOME24 = {
  badge: "Free 7-day trial",
  titleLead: "One glass-clear pane over",
  titleAccent: "the whole business",
  lead:
    "Nine connected modules behind a single calm surface. The numbers refresh as the work happens — nothing to reconcile at month end.",
  stats: [
    { value: "9", label: "Modules, one database" },
    { value: "99.98%", label: "Uptime" },
    { value: "24/7", label: "Support" },
  ],
  tiles: [
    { icon: "Radar", title: "Live pipeline", text: "Every enquiry and follow-up in one board." },
    { icon: "Wallet", title: "Money in one place", text: "Invoices, receivables and approvals." },
    { icon: "ShieldCheck", title: "Private by design", text: "Audit trails, data hosted in India." },
  ],
};

export const HOME25 = {
  eyebrow: "Loud on purpose",
  titleLead: "Run the business.",
  titleAccent: "Skip the mess.",
  lead:
    "Nine modules, one database, zero spreadsheets. FFH|ERP is the blunt instrument your operations actually needed.",
  stickers: ["₹0 setup", "1-day go live", "No lock-in", "24/7 humans"],
  blocks: [
    { n: "01", title: "One database", text: "Sales, purchase, billing, spend, AMC, support, work and projects share the same records." },
    { n: "02", title: "No reconciling", text: "A quote becomes an order, an invoice and a ticket without anyone retyping it." },
    { n: "03", title: "Works offline", text: "Field teams update from the phone; the office sees it the moment they sync." },
    { n: "04", title: "Priced in public", text: "The number on the pricing page is the number you pay. No implementation fee." },
  ],
  stats: [
    { value: "2.5K+", label: "Active users" },
    { value: "30+", label: "Years" },
    { value: "99.98%", label: "Uptime" },
  ],
};

// ---------------------------------------------------------------------------
// Home layout 26 — modelled on the classic app-landing template: dark gradient
// hero with device mockups, pastel wave dividers, icon row, dashboard section,
// phone-centred feature grid, watch section, video band, pricing, footer.
// Tailwind only.
// ---------------------------------------------------------------------------
export const HOME26 = {
  tagline: "Nine modules on one database — free for your first 7 days.",
  heroNote: "Watch the video",
  bestTool: [
    { icon: "LayoutDashboard", title: "Easy management", text: "Every enquiry, order and invoice on one screen your team already understands." },
    { icon: "Clock", title: "Save your time", text: "Quotes become orders, invoices and tickets without anyone retyping a thing." },
    { icon: "Globe", title: "One source of truth", text: "Sales, finance, AMC, support and projects all read the same records." },
  ],
  dashboard: {
    eyebrow: "The dashboard",
    title: "Every number on one dashboard",
    lead: "Revenue, receivables, renewals and service levels — refreshed as the work happens, not at month end.",
    text: "Filter by branch, team or owner and the whole board follows. Export it, mail it or put it on the wall; the numbers under it are always the same ones your team is working from.",
  },
  features: {
    title: "Featured features",
    sub: "Nine connected modules behind one calm, fast surface.",
    left: [
      { title: "Dashboard management", text: "Build the view each manager needs, save it, and share it with the team." },
      { title: "Exceptional support", text: "A helpdesk staffed by people who know the product, open 24/7." },
      { title: "Instant notifications", text: "Approvals, renewals and escalations reach the right person in seconds." },
    ],
    right: [
      { title: "Sync across devices", text: "Field teams update from the phone and the office sees it the moment they sync." },
      { title: "Fast invoicing", text: "GST-ready invoices on your own formats, straight from the order." },
      { title: "Survive audit season", text: "Every change is logged with a full audit trail, ready when you are asked." },
    ],
  },
  watch: {
    title: "Approvals from your wrist",
    text: "Purchase orders, expense claims and service escalations arrive on the watch with everything you need to decide, and a single tap to approve or send back.",
  },
  howto: {
    title: "How to work",
    text: "Short, practical tutorials on the parts of the platform teams ask about most.",
    videos: [
      { title: "How to track your pipeline", duration: "3:10", tone: "from-indigo-500 to-violet-600" },
      { title: "5 ways to cut collection time", duration: "4:22", tone: "from-rose-500 to-orange-500" },
      { title: "Save your team hours a week", duration: "2:48", tone: "from-emerald-500 to-sky-500" },
    ],
  },
  cta: "Interested in seeing how FFH|ERP can work for your business? Try it free for 7 days.",
};

// ---------------------------------------------------------------------------
// Home layout 27 — modelled on the GrowKit template: dark navy (#1b2631) with
// a blue-to-orange gradient, Poppins display type, alternating split sections,
// a masonry collage and a module-preview card grid. Tailwind only.
// ---------------------------------------------------------------------------
export const HOME27 = {
  eyebrow: "Smart CRM & ERP Software",
  titleLead: "Run your business with",
  titleAccent: "FFH|ERP",
  lead:
    "A flexible, easy-to-use platform that scales with you. Nine connected modules for sales, purchase, billing, spend, AMC, support, work and projects — all on one database.",
  modulesTitle: "Nine modules, ready to use",
  modulesSub: "One database. 100% switchable, 100% yours.",
  buildTitle: "Build the views your teams need",
  buildText:
    "Save the board each team asks for and share it in a click — pipeline, collections, renewals, service levels, delivery margin.",
  buildNote:
    "Every view is drawn from the same records, so two people looking at two different screens are still looking at one truth.",
  themesTitle: "Make it look like your business",
  themesSub: "Apply your brand colours and logo across every module in just a few clicks.",
  dayOneTitle: "Ready from day one",
  dayOneText: "Everything you need to get a business running on it in a day.",
  dayOne: [
    { value: "9+", label: "Modules", target: "#modules" },
    { value: "2.5K+", label: "Active users", target: "#why" },
    { value: "20+", label: "Countries", target: "#why" },
    { value: "24/7", label: "Support", target: "#contact" },
  ],
  quote: {
    text: "FFH|ERP has what we need to run the business from one place. Rebuilding our reporting from scratch just isn't necessary anymore.",
    person: "Sam Juliens",
    role: "Sr. Product Designer, NovaFin",
    img: 12,
  },
  cta: "Start running your business on FFH|ERP today",
};

// preview "screens" for the module cards — each renders a different mini UI
export const HOME27_MODULES = [
  { name: "Market", desc: "Campaigns & enquiries", kind: "chart" },
  { name: "Sales", desc: "Quotes & orders", kind: "table" },
  { name: "Purchase", desc: "Vendors & material", kind: "list" },
  { name: "Bill", desc: "Invoices & receivables", kind: "doc" },
  { name: "Spend", desc: "Payables & approvals", kind: "gauge" },
  { name: "AMC", desc: "Contracts & renewals", kind: "calendar" },
  { name: "Support", desc: "Tickets & SLA", kind: "tickets" },
  { name: "Work", desc: "Tasks & allocation", kind: "kanban" },
  { name: "Project", desc: "Delivery & margin", kind: "chart" },
];

// ---------------------------------------------------------------------------
// Home layout 28 — modelled on the Semssy template: near-black #15141a, warm
// off-white type, DM Sans with italic serif accent words, [ bracketed ]
// eyebrows, bullet-separated nav, tabs, carousel and counters. Tailwind only.
// ---------------------------------------------------------------------------
export const HOME28 = {
  heroChips: ["Sales", "Finance", "Support"],
  heroTitleA: "Run the whole business",
  heroTitleB: "through one system",
  heroLead:
    "We build for operators: nine modules on a single database, so the quote, the order, the invoice and the service ticket are the same record at every step.",
  rating: { score: "Rated 4.8/5.0", note: "Satisfied clients" },
  servicesTitleA: "Capabilities that drive",
  servicesTitleB: "the results",
  servicesLead: "We build the parts of the business that have to be right, then keep them running.",
  services: [
    { icon: "Megaphone", title: "Sales & marketing", text: "Capture every enquiry, automate the follow-up and watch the pipeline move in real time.", seed: "1" },
    { icon: "ReceiptText", title: "Finance & billing", text: "Quotations, GST invoices, receivables and approvals drawn from one set of records.", seed: "431" },
    { icon: "Headphones", title: "AMC & support", text: "Warranty, contracts, tickets and renewals with the reminders built in.", seed: "26" },
    { icon: "FolderKanban", title: "Work & projects", text: "Plan, allocate, bill and track delivery margin on every project.", seed: "7" },
    { icon: "Plug", title: "Integrations", text: "Tally, payment gateways, WhatsApp and your own APIs — wired in and monitored.", seed: "180" },
  ],
  aboutTitleA: "We are an ERP team that has run",
  aboutTitleB: "the businesses we build for",
  aboutText:
    "Thirty years of implementations across manufacturing, retail, healthcare and services. We think like operators and build like engineers.",
  stats: [
    { value: 30, suffix: "+", label: "Years of experience" },
    { value: 250, suffix: "+", label: "Projects delivered" },
    { value: 350, suffix: "K+", label: "Businesses served" },
    { value: 98, suffix: "%", label: "Client satisfaction" },
  ],
  portfolioTitleA: "See what we have built that",
  portfolioTitleB: "made an impact",
  portfolio: [
    { tags: ["MANUFACTURING", "AMC"], title: "Brigade Build", text: "Contract renewals, spare-part billing and field service on one record across 14 branches.", seed: "1067" },
    { tags: ["RETAIL", "COLLECTIONS"], title: "Zenith Retail", text: "Collections came down from 61 to 28 days after reminders stopped depending on memory.", seed: "20" },
    { tags: ["HEALTHCARE", "SUPPORT"], title: "Galaxy Health", text: "Service SLAs met 96% of the time with ticket routing and escalation built in.", seed: "366" },
  ],
  whyTitleA: "Why we are the right",
  whyTitleB: "partner for you",
  whyTabs: [
    { icon: "Database", title: "One database", text: "Sales, purchase, billing, spend, AMC, support, work and projects read the same records, so nothing needs reconciling at month end.", seed: "8" },
    { icon: "ShieldCheck", title: "Built for India", text: "GST formats, HSN codes, e-invoicing and data hosted in India — with role-based access and a full audit trail.", seed: "2" },
    { icon: "Rocket", title: "Implementation included", text: "Our team migrates your opening balances and masters, trains the floor and stays with you through the first close.", seed: "4" },
    { icon: "TrendingUp", title: "Numbers you can act on", text: "Dashboards refresh with the work, so decisions are taken on today's numbers instead of last month's report.", seed: "6" },
  ],
  testimonials: [
    { quote: "Since we moved onto FFH|ERP, our collections cycle dropped from 61 days to 28. The reminders stopped depending on somebody remembering to send them.", person: "Alex Morgan", role: "Finance Controller, Zenith Retail", img: 15, company: "Zenith Retail" },
    { quote: "Implementing a system across four plants is normally a year of pain. We were live in five weeks, and the floor actually uses it.", person: "James Carter", role: "Head of Operations, Brigade Build", img: 33, company: "Brigade Build" },
    { quote: "The service team stopped losing tickets. SLAs are met 96% of the time now, and I can see the exceptions without asking for a report.", person: "Michael Foster", role: "Service Head, Galaxy Health", img: 52, company: "Galaxy Health" },
  ],
  processTitleA: "The easy journey from",
  processTitleB: "concept to creation",
  process: [
    { n: "1", icon: "Search", title: "Discover", text: "We sit with your team, map how the business actually runs and agree what success looks like in numbers." },
    { n: "2", icon: "ClipboardList", title: "Plan", text: "Modules, masters, opening balances and the go-live date are fixed before anyone touches a setting." },
    { n: "3", icon: "Settings", title: "Configure & migrate", text: "We configure the modules, migrate your data, train each team and run a parallel cycle." },
    { n: "4", icon: "Rocket", title: "Go live & grow", text: "You close a month on the system with us beside you, then add the modules you are ready for." },
  ],
  teamTitleA: "Superb software starts with",
  teamTitleB: "our people",
  team: [
    { name: "Ethan Reynolds", role: "Chief Executive Officer", text: "Thirty years of implementations across manufacturing and retail.", img: 12 },
    { name: "Mason Brooks", role: "Chief Operating Officer", text: "Runs delivery, migration and the support desk across six languages.", img: 14 },
    { name: "James Reynolds", role: "Chief Technology Officer", text: "Owns the platform: one database, nine modules, no forks.", img: 18 },
    { name: "Mason Clark", role: "Head of Marketing", text: "Tells the customer stories and runs the partner network.", img: 60 },
  ],
  pricingTitleA: "Your journey starts with",
  pricingTitleB: "the right plan",
  pricingLead: "Flexible plans for businesses of every size. Every plan includes the mobile app and your data, exportable any time.",
  contactTitleA: "Looking for a collaboration?",
  contactTitleB: "drop us a message",
  contactText: "Tell us how your business runs today and we will show you the same thing inside FFH|ERP.",
};

// ---------------------------------------------------------------------------
// Home layout 29 — after the CyberChimps "One Page Business" starter: white
// corporate one-pager, navy #013878 + teal #04d3a2, Oswald condensed uppercase
// headings over Lato body, pill buttons, thin-bordered cards, blob hero photo.
// Tailwind only.
// ---------------------------------------------------------------------------
export const HOME29 = {
  heroTitle: "The complete business system",
  heroLead:
    "Sales, purchase, billing, spend, AMC, support, work and projects on a single database — implemented by a team that has run the businesses it builds for.",
  whatWeDo: {
    title: "What we do",
    text: "We replace the spreadsheet estate with one system your teams actually open — and we stay to keep it running.",
    cards: [
      { icon: "TrendingUp", title: "Grow business", text: "A live pipeline, automated follow-ups and quotes that turn into orders without retyping." },
      { icon: "Users", title: "Business consultancy", text: "We map how the business runs today, then configure the modules around it." },
      { icon: "Headphones", title: "Great support", text: "A helpdesk open 24/7 in six languages, with implementation included." },
    ],
  },
  about: {
    title: "About us",
    text: "Thirty years of implementations across manufacturing, retail, healthcare and services. Nine modules, one database, no forks.",
    stats: [
      { value: "30+", label: "Years of experience" },
      { value: "250+", label: "Projects delivered" },
      { value: "2.5K+", label: "Active users" },
      { value: "98%", label: "Client satisfaction" },
    ],
  },
  services: {
    title: "Our services",
    text: "Six ways we put the platform to work in your business.",
    items: [
      { icon: "Megaphone", title: "Sales & marketing", text: "Campaigns, enquiries, quotes and follow-ups in one board." },
      { icon: "ReceiptText", title: "Financial services", text: "GST invoicing, receivables, approvals and e-invoicing." },
      { icon: "ClipboardList", title: "Business planning", text: "Targets, budgets and forecasts against live numbers." },
      { icon: "Search", title: "Business analysis", text: "Dashboards by branch, owner, product and margin." },
      { icon: "Building2", title: "Corporate services", text: "Multi-branch, multi-company and role-based access." },
      { icon: "Factory", title: "Industrial services", text: "Material, plant, AMC and field service on one record." },
    ],
  },
  portfolio: {
    title: "Portfolios",
    text: "A few of the businesses running on FFH|ERP today.",
    items: [
      { id: "1067", tag: "Manufacturing", title: "Brigade Build" },
      { id: "20", tag: "Retail", title: "Zenith Retail" },
      { id: "180", tag: "Services", title: "Galaxy Health" },
      { id: "22", tag: "Distribution", title: "Toromont Cimco" },
    ],
  },
  clients: {
    title: "Happy clients",
    items: [
      { text: "Since we moved onto FFH|ERP our collections cycle came down from 61 days to 28. The reminders stopped depending on somebody remembering.", person: "Richard Row", role: "Finance Controller, Zenith Retail", img: 13 },
      { text: "Four plants, five weeks, no parallel spreadsheets. The floor uses it because the screens look like the work they do.", person: "John Doe", role: "Head of Operations, Brigade Build", img: 51 },
      { text: "Our service team stopped losing tickets. SLAs are met 96% of the time and I can see the exceptions without asking for a report.", person: "Meera Iyer", role: "Service Head, Galaxy Health", img: 45 },
    ],
  },
  posts: {
    title: "Recent posts",
    items: [
      { id: "2", title: "How to run a month-end close in a day", text: "The five reports to fix first, and the two nobody needs." },
      { id: "24", title: "Hiring for an ERP rollout", text: "What to look for in the person who will own the system." },
      { id: "6", title: "Benefits of software in business", text: "Where the hours actually come back once the data is in one place." },
    ],
  },
  contact: {
    title: "Get in touch",
    text: "Tell us how the business runs today and we will show you the same thing inside FFH|ERP.",
  },
};

// ---------------------------------------------------------------------------
// Home layout 30 — after Vixcra: white, graph-paper grid backdrop, light violet
// #f1aaff accent, Syne display type, staggered hero headline, marquee, counters,
// an image accordion of services, a filterable project grid and a monthly/yearly
// pricing toggle. Tailwind only.
// ---------------------------------------------------------------------------
export const HOME30 = {
  badge: "Welcome To Smart Business Software",
  titleA: "The complete",
  titleB: "business system",
  rating: "4.9 / 5.0",
  ratingText: "Top-rated ERP platform, trusted by 350,000+ businesses worldwide.",
  lead:
    "We believe great businesses don't run on guesswork. Nine modules on one database turn the day's work into numbers you can act on — and leave nothing to reconcile at month end.",
  cta: "Let's get started",
  stats: [
    { value: "45K+", label: "Projects delivered", note: "Enhance your operations", text: "High-impact deployments across manufacturing, retail, healthcare and services." },
    { value: "215K+", label: "Happy customers", note: "Trusted worldwide", text: "Businesses that run their day on FFH|ERP, in more than 20 countries." },
    { value: "35+", label: "Years in software", note: "Built to last", text: "Three decades of implementations, migrations and month-end closes." },
    { value: "25+", label: "Industry awards", note: "Recognised work", text: "For product design, delivery and customer support." },
  ],
  services: [
    { name: "Sales & marketing", text: "Our team delivers a pipeline that moves — clean data, automated follow-ups, zero guesswork. Every enquiry, quote and order is one record.", img: "7" },
    { name: "Finance & billing", text: "GST invoices, receivables and approvals drawn from the same records you sell on, with e-invoicing ready from day one.", img: "431" },
    { name: "AMC & support", text: "Warranty, contracts, tickets and renewals with the reminders built in, so service levels stop depending on memory.", img: "26" },
    { name: "Work & projects", text: "Plan, allocate, bill and track delivery margin on every project — with the effort and the money in one place.", img: "20" },
    { name: "Integrations", text: "Tally, payment gateways, WhatsApp and your own APIs, wired in, monitored and owned by us.", img: "180" },
  ],
  projects: [
    { tag: "Manufacturing", title: "Brigade Build", price: "₹4.2Cr", meta: "April 28, 2025", img: "1067" },
    { tag: "Retail", title: "Zenith Retail", price: "₹1.8Cr", meta: "February 25, 2025", img: "20" },
    { tag: "Healthcare", title: "Galaxy Health", price: "₹96L", meta: "March 10, 2025", img: "22" },
    { tag: "Distribution", title: "Toromont Cimco", price: "₹2.4Cr", meta: "January 14, 2025", img: "180" },
  ],
  filters: ["All", "Manufacturing", "Retail", "Healthcare", "Distribution"],
  testimonials: [
    { text: "From start to finish, the FFH|ERP team made the entire migration easy and enjoyable. They listened to how we actually work, offered sensible ideas, and delivered a month-end close in a day.", person: "Ronald Richards", role: "Finance Controller", img: 13 },
    { text: "They brought our reporting to life. Collections came down from 61 days to 28, and the reminders stopped depending on somebody remembering to send them.", person: "Savannah Nguyen", role: "Head of Collections", img: 44 },
    { text: "Exceptional professionalism throughout. Their ability to combine process design with software meant the numbers finally agreed with each other.", person: "Dianne Russell", role: "Operations Director", img: 32 },
  ],
  pricingNote: "Affordable plans for growing your business",
};

// ---------------------------------------------------------------------------
// Home layout 31 — after Awake: pastel gradient hero, pill navigation with a
// black pill CTA, Inter Tight display type with an italic serif accent word,
// pastel chips, counters, work grid, team, testimonials, plans, FAQ, awards.
// Tailwind only.
// ---------------------------------------------------------------------------
export const HOME31 = {
  titleA: "Run a sharper business",
  titleB: "with one system",
  lead:
    "FFH|ERP helps growing teams replace the spreadsheet estate with one platform — tailored modules, live numbers, and a team that stays with you from strategy to go-live.",
  trust: { note: "Trusted by 200+ clients", brands: "Loved by 350,000+ big and small businesses around the world" },
  chips: [
    { label: "Clarity", tone: "lavender", text: "One dashboard for the numbers that matter, refreshed as the work happens." },
    { label: "Control", tone: "blue", text: "Approvals, audit trails and role-based access on every record." },
    { label: "Growth", tone: "peach", text: "Switch modules on as you need them, without a migration." },
  ],
  counters: [
    { value: "2.5K+", label: "Active users" },
    { value: "30", label: "Years of experience" },
    { value: "20+", label: "Countries" },
  ],
  services: [
    { icon: "Database", title: "One database", text: "Sales, purchase, billing, spend, AMC, support, work and projects read the same records." },
    { icon: "Megaphone", title: "Sales & marketing", text: "Campaigns, enquiries, quotes and follow-ups in one board." },
    { icon: "ReceiptText", title: "Finance & billing", text: "GST invoicing, receivables, approvals and e-invoicing." },
    { icon: "Headphones", title: "AMC & support", text: "Contracts, tickets and renewals with the reminders built in." },
    { icon: "LineChart", title: "Analytics & reporting", text: "Dashboards by branch, owner, product and margin." },
  ],
  work: [
    { title: "Brigade Build", tags: ["Manufacturing", "Field service"], img: "1067" },
    { title: "Zenith Retail", tags: ["Retail", "Collections"], img: "20" },
    { title: "Galaxy Health", tags: ["Healthcare", "Support SLA"], img: "22" },
    { title: "Toromont Cimco", tags: ["Distribution", "Integrations"], img: "180" },
  ],
  team: [
    { name: "Ethan Reynolds", role: "Chief Executive Officer", img: 12 },
    { name: "Mason Brooks", role: "Chief Operating Officer", img: 14 },
    { name: "James Reynolds", role: "Chief Technology Officer", img: 18 },
    { name: "Mason Clark", role: "Head of Marketing", img: 60 },
  ],
  testimonial: {
    quote: "FFH|ERP brought our ideas to life with exceptional clarity and precision — one system, one set of numbers, and a team that still answers the phone.",
    person: "Sarah Mitchell",
    role: "Marketing Head at TalentConnect",
    img: "5",
    stat: "91%",
    statNote: "clients recommend us",
  },
  faqs: [
    { q: "What does FFH|ERP actually replace?", a: "The spreadsheet estate: enquiry registers, purchase trackers, invoice files, AMC sheets, ticket logs and project plans — all of it moves into one database with the reports your team already reads." },
    { q: "How long does an implementation take?", a: "Most teams go live in one to five weeks depending on how many modules and branches are in scope. We migrate your masters and opening balances, train each team, and run one parallel cycle before you switch." },
    { q: "How is pricing structured?", a: "Per module, per month, printed on the pricing page — no implementation fee and no per-invoice charge. You can add or drop modules as the business changes." },
    { q: "Do you support us after go-live?", a: "Yes. A helpdesk open 24/7 in six languages, a named implementation contact for the first close, and quarterly reviews with our team." },
    { q: "Where is our data kept?", a: "Hosted in India, with role-based access, a full audit trail and export available at any time — your data leaves with you if you ever decide to." },
    { q: "How do we get started?", a: "Start the free trial below, or book a 20-minute walkthrough on your own numbers. We will tell you honestly if the platform is not a fit." },
  ],
  awards: [
    { title: "Enterprise Software of the Year", text: "Recognised for delivery speed and depth of configuration across nine modules.", year: "2025" },
    { title: "Best Support Experience", text: "For a helpdesk that answers in minutes, in six languages, around the clock.", year: "2024" },
    { title: "Manufacturing Deployment Award", text: "Honoured for a four-plant rollout completed in five weeks.", year: "2023" },
  ],
};

// ---------------------------------------------------------------------------
// Home layout 32 — the merge: Home30's creative structure wearing Home12's
// logo theme (brand #ef7b23, cream #fff6ec, gradient #f7a52a → #f0452c,
// navy #16283c) plus Home12's motif bars and live panel.
// ---------------------------------------------------------------------------
export const HOME32 = {
  eyebrow: "Smart CRM & ERP Software",
  titleA: "See today's business,",
  titleB: "not last month's report",
  lead:
    "Pipeline, collections, AMC renewals and service tickets update as the work happens — so the number on your screen is the number in the business.",
  chips: [
    { value: "9", label: "Modules on one database" },
    { value: "1 day", label: "Typical setup time" },
    { value: "24/7", label: "Support in six languages" },
  ],
  rating: { score: "4.9 / 5.0", text: "Top-rated ERP platform, built in India for growing businesses." },
  panel: { title: "Today at a glance", feed: [] },
  feed: [
    "Free trial signup: Anjali Mehta (anjali@acme.in)",
    "New lead assigned to Rahul",
    "AMC renewal due in 3 days",
    "Invoice #1042 marked paid",
  ],
  aboutTitle:
    "We are an ERP team that has run the businesses we build for — the system holds up on the busiest day of the month, not just in the demo.",
  servicesTitle: "Creative solutions for every business need",
  projectsTitle: "Deployments that deliver results",
  clientsTitle: "What our clients say about us",
  pricingTitle: "Plans that grow with the business",
};

// Home layout 33 shares Home32's logo-theme content; only the hero arrangement
// differs (the trial form takes the hero, the live panel moves to the FAQ).
export const HOME33 = { ...HOME32 };

// Home layout 34 builds on 33: the "Let's get started" block becomes its own
// full-width logo-themed section with a large form, and the services accordion
// opens on hover as well as click.
export const HOME34 = { ...HOME33 };

// Home layout 35 — built on 34 with motion and weight: animated disclosures,
// larger deployment cards, a click-through testimonial slider (more quotes) and
// a deliberately bigger popular plan.
export const HOME35 = {
  ...HOME34,
  testimonials: [
    ...HOME30.testimonials,
    { text: "We replaced four spreadsheets and a morning meeting with one screen. The month-end close that used to take five days now takes one.", person: "Nikhil Rao", role: "Managing Director, NovaFin", img: 60 },
    { text: "Stock, purchases and AMC renewals finally agree with each other. My team stopped arguing about which number was right and started acting on it.", person: "Priya Sharma", role: "Head of Supply Chain, Acme Industries", img: 47 },
    { text: "Four plants on one system in five weeks, with the floor actually using it. That has never happened here before.", person: "Arvind Menon", role: "Plant Head, Brigade Build", img: 68 },
  ],
};

// Home layout 36 — Home35 plus the "EVERYTHING IN SYNC" block lifted from
// Home1, a rewritten hero, a stacked-wordmark client wall and an integrations
// grid, with mouse-driven effects throughout.
export const HOME36 = {
  ...HOME35,
  eyebrow: "Smart CRM & ERP Software",
  titleA: "See today's business,",
  titleB: "not last month's report",
  lead: "Pipeline, collections, AMC renewals and service tickets update as the work happens — so the number on your screen is the number in the business.",
  ctaMain: "Start free trial",
  stat: { lead: "Serving", a: "2.5K", mid: "active users for", b: "21", tail: "years" },
  syncTitleA: "Your business is",
  syncTitleB: "more than a spreadsheet.",
  syncCopy:
    "Stop switching between tools. FFH|ERP brings nine business tools together, so you can spend less time managing work — and more time moving it forward.",
  brands: [
    { name: "Mercedes-Benz", mark: "star", lines: ["Mercedes-Benz"] },
    { name: "Force Motors", mark: "force", lines: ["FORCE", "MOTORS"] },
    { name: "Shiji", mark: "shiji", lines: ["Shiji"] },
    { name: "ADA", mark: "ada", lines: ["ADA"] },
    { name: "Minor Hotels", mark: "arch", lines: ["MINOR", "HOTELS"] },
    { name: "Acme Brick", mark: "brick", lines: ["ACME", "BRICK"] },
    { name: "Toromont Cimco", mark: "peak", lines: ["TOROMONT", "CIMCO"] },
    { name: "National Retail Solutions", mark: "bag", lines: ["NRS", "NATIONAL", "RETAIL", "SOLUTIONS"] },
    { name: "Avineon", mark: "orbit", lines: ["AVINEON."] },
  ],
  integrationsTitle: "Integrations.",
  integrationsCopy:
    "Native integration lets you connect your favourite cloud apps in your tech stack.",
  integrations: [
    { name: "Google", color: "#4285F4", icon: "Chrome" },
    { name: "Microsoft", color: "#00A4EF", icon: "LayoutGrid" },
    { name: "WhatsApp", color: "#25D366", icon: "MessageCircle" },
    { name: "Gmail", color: "#EA4335", icon: "Mail" },
    { name: "Slack", color: "#611F69", icon: "Hash" },
    { name: "Zapier", color: "#FF4F00", icon: "Zap" },
    { name: "Stripe", color: "#635BFF", icon: "CreditCard" },
    { name: "PayPal", color: "#003087", icon: "Wallet" },
    { name: "Razorpay", color: "#0C2451", icon: "IndianRupee" },
    { name: "Zoom", color: "#2D8CFF", icon: "Video" },
  ],
};

// Home layout 37 — same copy as 36; the layout differs (home1 Live CRM widget in
// the hero, a smaller "Let's get started" block, no white band in services).
export const HOME37 = { ...HOME36 };
