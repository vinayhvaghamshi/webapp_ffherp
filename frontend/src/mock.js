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
  { name: "Market", desc: "Capture, nurture and convert prospects — with AI intelligence scoring every lead.", icon: "Megaphone" },
  { name: "Sales", desc: "Track leads and opportunities — AI tells you who to call next.", icon: "TrendingUp" },
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
  { title: "Artificial Intelligence (AI)", desc: "Lead scoring, next-best-action, demand forecasting and renewal signals — running on your own records, inside the modules you already use.", icon: "Sparkles" },
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
  { key: "cimco", name: "Transit Electronics Ltd." },
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
    "FFH|ERP is a product of KrisKross Inc. For fourteen years we have helped growing companies in India and across 5+ countries replace scattered spreadsheets and disconnected tools with one connected system for sales, marketing, finance, AMC, support and projects.",
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
    bio: "14 years building and scaling enterprise software businesses across India, the Gulf and South-East Asia.",
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
  title: "Fourteen years of building software",
  titleAccent: "that runs businesses",
  lead:
    "From a two-room office in Chennai to 2,500+ active users across 5+ countries — how FFH|ERP grew, what we believe, and who is accountable for it today.",
  stats: [
    { value: "2012", label: "Founded" },
    { value: "2.5K+", label: "Active users" },
    { value: "5+", label: "Countries" },
    { value: "250+", label: "Team members" },
  ],
  facts: [
    { k: "Founded", v: "2012 · Chennai, India" },
    { k: "Offices", v: "Chennai · Dubai · Singapore" },
    { k: "Team", v: "250+ across engineering, delivery & support" },
    { k: "Customers", v: "2,500+ active users in 5+ countries" },
    { k: "Product", v: "FFH|ERP — nine modules, one platform" },
    { k: "Support", v: "24/7 helpdesk in two languages" },
  ],
  story: [
    { year: "2012", title: "The first invoice", text: "KrisKross Inc. begins by writing billing software for neighbourhood retailers in Chennai." },
    { year: "2015", title: "From billing to business", text: "Inventory, purchase and accounts join the platform — our first true ERP release." },
    { year: "2018", title: "Beyond India", text: "Customers in the Gulf and South-East Asia take the product international." },
    { year: "2021", title: "Mobile-first", text: "Field teams start running the entire sales cycle from a phone — offline included." },
    { year: "2025", title: "One connected platform", text: "Sales, marketing, finance, AMC, support and projects run in a single system for 2,500+ active users." },
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
    "FFH|ERP is the product of fourteen years spent inside Indian businesses — retail counters, showrooms, workshops and project sites. We build for how work actually happens, not how a slide deck says it should.",
  narrative: [
    "KrisKross Inc. started in 2012 writing billing software for retailers in Chennai. Fourteen years later the same team ships FFH|ERP: nine connected modules that carry a business from the first enquiry to the final invoice without a spreadsheet in between.",
    "We are deliberately unfashionable about a few things. Our customers run showrooms with patchy networks and teams that are not technical — so the software works offline, installs in a day, and is priced where a growing company can actually afford it.",
  ],
  highlights: [
    { value: "2.5K+", label: "Active users on FFH|ERP" },
    { value: "9", label: "Connected modules" },
    { value: "24/7", label: "Support, two languages" },
    { value: "5+", label: "Countries served" },
  ],
  pillars: [
    { icon: "Sparkles", title: "AI where the work happens", text: "Artificial intelligence sits inside the modules rather than beside them: it scores the lead, suggests the next action, forecasts demand, flags a renewal and questions an odd invoice — on your own data, with nothing shipped to a third party." },
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
    { value: "2012", label: "Building business software since" },
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
    "14 years in business software",
    "2,500+ active users",
    "5+ countries",
    "24/7 support in two languages",
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
    "Nine connected modules for sales, marketing, finance, AMC, support and projects — trusted by 2,500+ active users in 5+ countries.",
  stats: [
    { value: "9", label: "Business tools" },
    { value: "2.5K+", label: "Active users" },
    { value: "5+", label: "Countries" },
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
    { icon: "Headphones", title: "Support that answers", text: "A 24/7 helpdesk in two languages, staffed by people who know the product." },
  ],
};

export const HOME6_HERO = {
  eyebrow: "Free 7-day trial",
  titleLead: "Run the trial on your real numbers,",
  titleAccent: "not on a demo",
  lead:
    "Start today with the same system 2,500+ active users run on. No credit card, no lock-in — and a human on the phone while you set up.",
  chips: ["No credit card", "Setup in a day", "Data hosted in India", "24/7 support"],
  trust: ["ISO 27001 aligned", "GST & e-invoicing ready", "2,500+ active users", "5+ countries"],
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
    { value: "14", label: "Years building business software" },
  ],
  trust: ["No credit card required", "Setup in a day", "24/7 support in two languages"],
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
  bullets: ["No credit card required", "Data hosted in India", "24/7 support in two languages"],
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
    { value: "2012", label: "Building business software since" },
    { value: "2.5K+", label: "Active users" },
    { value: "10,000+", label: "Active installations" },
    { value: "24/7", label: "Support, two languages" },
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
    { value: "14", label: "Years in the industry" },
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
    { value: "24/7", label: "Support in two languages" },
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
    { value: "2012", label: "Building business software since" },
    { value: "2.5K+", label: "Active users" },
    { value: "5+", label: "Countries" },
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
    { value: "14", label: "Years in the industry" },
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
    "Fourteen years of listening to shop owners, plant managers and service engineers taught us one thing: software should carry the work, not add to it.",
  letter: [
    "When we started in 2012 we were writing billing software for retailers in Chennai, and the brief was always the same: give me back my evening. Not a dashboard, not a report — an evening without reconciling registers.",
    "Fourteen years later that is still the measure. Every module we add has to remove more work than it creates, or it does not ship. That is why the product works offline, why the pricing is printed on the website, and why nobody here is paid to sell you a licence you do not need.",
    "If you run a business, you already have enough to hold in your head. Our job is to hold the rest.",
  ],
  signature: "Suresh Ramachandran · Chief Executive Officer",
};

export const ABOUT_6 = {
  eyebrow: "Our journey",
  titleLead: "Fourteen years, one direction:",
  titleAccent: "make it simpler",
  lead: "From a billing package written for Chennai retailers to nine connected modules used in 5+ countries.",
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
    "FFH|ERP is a product of KrisKross Inc., founded in Chennai in 2012. We have spent fourteen years inside Indian businesses — retail counters, showrooms, workshops and project sites — and we still write software for the person who has to close the register at nine in the evening.",
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
  lead: "Fourteen years of building business software in India, measured the only way that matters: what it does for the people using it.",
  metrics: [
    { value: "2012", label: "Founded in Chennai" },
    { value: "14", label: "Years in business software" },
    { value: "2.5K+", label: "Active users" },
    { value: "10,000+", label: "Active installations" },
    { value: "5+", label: "Countries" },
    { value: "24/7", label: "Support in two languages" },
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
  trust: ["No credit card required", "Setup in a day", "2,500+ active users"],
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
      { label: "Our journey", desc: "Fourteen years, one direction", target: "/about6" },
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
    { value: "24/7", label: "Support, two languages" },
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
    { value: "5+", label: "Countries served" },
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
    skyline: { id: 1067, caption: "2,500+ active users across 5+ countries" },
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
  proof: { rating: "4.8/5", note: "from 2,100+ reviews", clients: "2,500+ active users" },
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
    { value: "24/7", label: "Support, two languages" },
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
    { value: "5+", label: "Countries" },
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
    { value: "14", label: "Years" },
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
    { value: "5+", label: "Countries", target: "#why" },
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
    "Fourteen years of implementations across manufacturing, retail, healthcare and services. We think like operators and build like engineers.",
  stats: [
    { value: 14, suffix: "+", label: "Years of experience" },
    { value: 250, suffix: "+", label: "Projects delivered" },
    { value: 2500, suffix: "+", label: "Active users" },
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
    { name: "Ethan Reynolds", role: "Chief Executive Officer", text: "Fourteen years of implementations across manufacturing and retail.", img: 12 },
    { name: "Mason Brooks", role: "Chief Operating Officer", text: "Runs delivery, migration and the support desk across two languages.", img: 14 },
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
      { icon: "Headphones", title: "Great support", text: "A helpdesk open 24/7 in two languages, with implementation included." },
    ],
  },
  about: {
    title: "About us",
    text: "Fourteen years of implementations across manufacturing, retail, healthcare and services. Nine modules, one database, no forks.",
    stats: [
      { value: "14", label: "Years of experience" },
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
      { id: "22", tag: "Distribution", title: "Transit Electronics Ltd." },
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
  rating: "4.4 / 5.0",
  ratingText: "Top-rated ERP platform, trusted by 2,500+ active users worldwide.",
  lead:
    "We believe great businesses don't run on guesswork. Nine modules on one database turn the day's work into numbers you can act on — and leave nothing to reconcile at month end.",
  cta: "Let's get started",
  stats: [
    { value: "1K+", label: "Projects delivered", note: "Enhance your operations", text: "High-impact deployments across manufacturing, retail, healthcare and services." },
    { value: "2.5K+", label: "Active users", note: "Trusted worldwide", text: "Businesses that run their day on FFH|ERP, in more than 5 countries." },
    { value: "14", label: "Years in software", note: "Built to last", text: "Fourteen years of implementations, migrations and month-end closes." },
    { value: "25+", label: "Industry awards", note: "Recognised work", text: "For product design, delivery and customer support." },
  ],
  services: [
    { name: "Artificial Intelligence (AI)", text: "AI built into the modules you already use, running on your own data — lead scoring, next-best-action, demand forecasting, renewal signals and anomaly checks. No separate AI project to buy, no data shipped out.", img: "180" },
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
    { tag: "Distribution", title: "Transit Electronics Ltd.", price: "₹2.4Cr", meta: "January 14, 2025", img: "180" },
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
  trust: { note: "Trusted by 200+ clients", brands: "Loved by 2,500+ active users around the world" },
  chips: [
    { label: "Clarity", tone: "lavender", text: "One dashboard for the numbers that matter, refreshed as the work happens." },
    { label: "Control", tone: "blue", text: "Approvals, audit trails and role-based access on every record." },
    { label: "Growth", tone: "peach", text: "Switch modules on as you need them, without a migration." },
  ],
  counters: [
    { value: "2.5K+", label: "Active users" },
    { value: "30", label: "Years of experience" },
    { value: "5+", label: "Countries" },
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
    { title: "Transit Electronics Ltd.", tags: ["Distribution", "Integrations"], img: "180" },
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
    { q: "Do you support us after go-live?", a: "Yes. A helpdesk open 24/7 in two languages, a named implementation contact for the first close, and quarterly reviews with our team." },
    { q: "Where is our data kept?", a: "Hosted in India, with role-based access, a full audit trail and export available at any time — your data leaves with you if you ever decide to." },
    { q: "How do we get started?", a: "Start the free trial below, or book a 20-minute walkthrough on your own numbers. We will tell you honestly if the platform is not a fit." },
  ],
  awards: [
    { title: "Enterprise Software of the Year", text: "Recognised for delivery speed and depth of configuration across nine modules.", year: "2025" },
    { title: "Best Support Experience", text: "For a helpdesk that answers in minutes, in two languages, around the clock.", year: "2024" },
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
    { value: "24/7", label: "Support in two languages" },
  ],
  rating: { score: "4.4 / 5.0", text: "Top-rated ERP platform, built in India for growing businesses." },
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
  stat: { lead: "Serving", a: "2.5K", mid: "active users for", b: "14", tail: "years" },
  syncTitleA: "Your business is",
  syncTitleB: "more than a spreadsheet.",
  syncCopy:
    "Stop switching between tools. FFH|ERP brings nine business tools together, so you can spend less time managing work — and more time moving it forward.",
  brands: [
    { name: "Rajinfo Technology Services", logo: "rajinfo.png", note: "ISO 9001:2015 certified" },
    { name: "Raj Info Enterprise Pvt. Ltd.", logo: "rajinfo.png", note: "" },
    { name: "Transit Electronics Ltd.", logo: "transit-electronics.png", note: "ELV systems & solutions" },
    { name: "Nimit Electronics", logo: "nimit-electronics.png", note: "Electronics & security systems" },
    { name: "MicroHard IT Solutions", logo: "microhard-it-solutions.png", note: "IT solutions" },
    { name: "Flair Network Systems", logo: "flair-network-systems.png", note: "Network systems" },
    { name: "Ecoair", logo: "ecoair.png", note: "Air engineering" },
    { name: "AVI Infotech LLP", logo: "avi-infotech.png", note: "IT infrastructure & security systems" },
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

// About layout 11 — modelled on futuretouch.in/about: a dark page with its own
// header and footer, a top ticker, an "About Us" hero, a who-we-are block, a
// Get in Touch form, client reviews, a newsletter and a global-presence grid.
export const ABOUT_11 = {
  nav: [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Service", path: "#features" },
    { label: "Project", path: "#modules" },
    { label: "Pricing Table", path: "#pricing" },
  ],
  ticker: [
    "🚀 Trusted by 2.5K+ active users",
    "🌍 Serving 5+ countries",
    "🧩 Nine modules, one database",
    "📈 Built for growing businesses",
    "⭐ 14 years in business software",
    "📞 24/7 support in two languages",
  ],
  topbar: { email: "ffhsales@kriskrossinc.com", phone: "+91 44 4858 5100", support: "Support" },
  hero: {
    eyebrow: "About us",
    title: "About Us",
    crumb: ["Home", "About Us"],
    lead:
      "The people, the thinking and the fourteen years of shop floors, showrooms and month-end closes behind FFH|ERP.",
  },
  who: {
    script: "Who we are",
    titleLead: "About",
    titleAccent: "FFH|ERP",
    stamp: "KrisKross Inc. · Chennai · Since 2012",
    paragraphs: [
      "FFH|ERP is a product of KrisKross Inc., a Chennai software company that started in 2012 writing billing software for neighbourhood retailers. Fourteen years later the same team ships nine connected modules that carry a business from the first enquiry to the final invoice without a spreadsheet in between.",
      "We are deliberately unfashionable about a few things. Our customers run showrooms with patchy networks and teams that are not technical — so the software works offline, installs in a day, and is priced where a growing company can actually afford it.",
      "Our reputation lies in the success of our clients. We act more as a technology partner than a vendor: no layers between you and the people who build the product, transparent pricing on the website, and support that answers in the language your team speaks.",
    ],
    chips: ["Founded 2012", "Chennai · Dubai · Singapore", "250+ team members", "ISO 27001 aligned"],
    image: 1067,
  },
  services: [
    "Sales & marketing module",
    "Finance & billing",
    "Inventory & purchase",
    "AMC & service tickets",
    "Projects & delivery",
    "Smart dashboards",
    "Data migration from spreadsheets",
    "Training for your team",
    "Something else",
  ],
  reviews: {
    eyebrow: "Client reviews",
    title: "What our clients say about FFH|ERP",
    heading: "Over 2,500+ active users and growing",
    chips: [
      { v: "2.5K+", l: "Active users" },
      { v: "4.4/5", l: "Average rating" },
      { v: "5+", l: "Countries" },
    ],
    cta: "Read more reviews",
    source: "HOME37",                    // reuse the testimonial set
  },
  newsletter: {
    eyebrow: "Newsletter · stay updated",
    title: "Stay ahead of the month-end",
    lead:
      "Get product updates and practical ERP notes for growing businesses — straight to your inbox. No noise, just value.",
    points: ["Monthly insights", "No spam, ever", "Free forever"],
    note: "Your data is safe with us. Unsubscribe in one click.",
  },
  presence: {
    eyebrow: "Our global presence",
    title: "Growing businesses for 14 years",
    sub: "Made in Chennai, running in 5+ countries around the world",
    regions: [
      { flag: "🇮🇳", region: "Asia Pacific", country: "India", cities: 12, tag: "HQ", list: ["Chennai", "Coimbatore", "Bengaluru", "Hyderabad", "Mumbai", "Pune", "Delhi", "Kochi"] },
      { flag: "🇦🇪", region: "Middle East", country: "UAE", cities: 6, list: ["Dubai", "Abu Dhabi", "Sharjah", "Riyadh", "Doha", "Muscat"] },
      { flag: "🇸🇬", region: "South-East Asia", country: "Singapore", cities: 5, list: ["Singapore", "Kuala Lumpur", "Jakarta", "Bangkok", "Manila"] },
      { flag: "🇰🇪", region: "Africa", country: "Kenya", cities: 4, list: ["Nairobi", "Lagos", "Accra", "Johannesburg"] },
      { flag: "🇬🇧", region: "Europe", country: "United Kingdom", cities: 3, list: ["London", "Manchester", "Birmingham"] },
    ],
  },
  footer: {
    about:
      "FFH|ERP is a product of KrisKross Inc. — a fourteen year old Chennai software company building CRM & ERP for growing businesses in 5+ countries.",
    cta: "Become a partner",
    links: [
      { title: "Our links", items: [
        { label: "Home", path: "/" },
        { label: "About Us", path: "/about" },
        { label: "Services", path: "#features" },
        { label: "Projects", path: "#modules" },
        { label: "Pricing", path: "#pricing" },
        { label: "Contact", path: "#contact" },
      ] },
      { title: "Company", items: [
        { label: "Start free trial", path: "#signup" },
        { label: "Our solutions", path: "#why" },
        { label: "Customer stories", path: "#modules" },
        { label: "Support", path: "#contact" },
        { label: "Terms of Service", path: "/" },
        { label: "Privacy Policy", path: "/" },
      ] },
    ],
    contact: { address: "KrisKross Inc., Chennai, Tamil Nadu, India", email: "ffhsales@kriskrossinc.com", phone: "+91 44 4858 5100" },
    socials: ["Instagram", "Facebook", "LinkedIn", "Twitter", "YouTube"],
    legal: "Copyright © 2026 KrisKross Inc. All rights reserved.",
  },
};

// About layout 12 — modelled on wittypen.com/about: editorial and light, a
// floating pill nav, mono eyebrows with numbered sections, big Newsreader serif
// headings with an orange italic accent, a stats strip, an expanding-mandate
// timeline, a values grid, a statement block, client proof, numbers, the
// leadership team and a closing CTA.
export const ABOUT_12 = {
  crumb: "ffherp.co.in",
  hero: {
    titleTop: "We were asked to print invoices.",
    titleBottomLead: "We stayed to",
    titleAccent: "run the business",
    lead:
      "FFH|ERP is a product of KrisKross Inc., a Chennai software company founded in 2012. What began as billing software for neighbourhood retailers is now nine connected modules that carry 2,500+ active users in 5+ countries from the first enquiry to the final invoice.",
    stats: [
      { v: "14 years", l: "in business software" },
      { v: "2.5K+", l: "active users" },
      { v: "5+", l: "countries served" },
      { v: "9", l: "modules, one database" },
    ],
  },
  viewpoint: {
    no: "01",
    eyebrow: "Our point of view",
    title: "A spreadsheet stops being a system the day you hire.",
    body: [
      "Every growing business hits the same wall. The first spreadsheet is a triumph — one screen instead of a register. Then a second person needs it, then a second branch, then somebody asks why the stock figure and the invoice figure disagree.",
      "We build for that moment. One database, nine modules, no exports between them: the number on your screen is the number in the business, whether you are closing a sale, a month or a service ticket.",
    ],
  },
  mandate: {
    no: "02",
    eyebrow: "An expanding mandate",
    title: "How the product grew, one customer request at a time.",
    steps: [
      { n: "01", title: "We made the first invoice buyable", text: "KrisKross Inc. starts in Chennai in 2012 writing billing software for neighbourhood retailers — printed invoices, no spreadsheets, no month-end scramble." },
      { n: "02", title: "We delivered, and clients stayed", text: "Retailers who started with billing asked for stock, purchase and accounts. By 2015 those three joined the platform and FFH|ERP became a true ERP." },
      { n: "03", title: "Our customers asked for more", text: "Field teams wanted the sales cycle on a phone. Service teams wanted AMC renewals and tickets in the same place as the invoice. So they were built in, offline-first." },
      { n: "04", title: "One system, fuller mandate", text: "Today nine modules run on one database for 2,500+ active users in 5+ countries — sales, marketing, finance, materials, AMC, support and projects." },
    ],
  },
  culture: {
    no: "03",
    eyebrow: "The culture under the work",
    values: [
      { n: "01", title: "Customer problem first", text: "Every release starts with a customer problem, not a feature list. Support tickets are read by the people who write the code." },
      { n: "02", title: "Experiments over opinion", text: "Two major releases a year, driven by what users actually ask for. If a change does not remove more work than it adds, it does not ship." },
      { n: "03", title: "Learning, out loud", text: "Migration is done with you, not to you. Training for every team is included, and the pricing is printed on the website." },
      { n: "04", title: "Ownership of the outcome", text: "Sales, support and engineering share one customer scorecard. Nobody here is paid to sell you a licence you do not need." },
      { n: "05", title: "Trust, in writing", text: "Accurate books, no lock-in contracts, and everything you enter stays yours — exportable, always, without asking us." },
      { n: "06", title: "Support in your language", text: "A 24/7 helpdesk in two languages, staffed by people who have stood behind a counter at nine in the evening." },
    ],
  },
  together: {
    no: "04",
    eyebrow: "How we work with you",
    title: "One team, on your side of the table.",
    body: [
      "You get one account manager and direct access to the people who build the product — no layers between you and the decision makers. Between them they carry fourteen years of shop floors, showrooms, workshops and project sites.",
      "We extend your team rather than replace it. Most customers pair an in-house lead with our depth in migration, training, support and reporting, then hand us the outcome they actually care about.",
    ],
  },
  proof: {
    no: "05",
    eyebrow: "Built for operators, kept by clients",
    title: "The businesses that stayed.",
    note: "Six of the 2,500+ teams running their day on FFH|ERP.",
  },
  numbers: {
    no: "06",
    eyebrow: "What fourteen years added up to",
    items: [
      { v: "2.5K+", l: "Active users", note: "Teams running their day on FFH|ERP" },
      { v: "5+", l: "Countries", note: "India, the Gulf, South-East Asia and beyond" },
      { v: "9", l: "Modules", note: "On one database, with no exports between them" },
      { v: "24/7", l: "Support", note: "Helpdesk in two languages" },
    ],
  },
  people: {
    no: "07",
    eyebrow: "The people who run it",
    title: "Accountable, and easy to reach.",
  },
  cta: {
    eyebrow: "Next step",
    title: "Partner with a team that owns the outcome.",
    lead: "Start a free trial, or ask us to walk you through the module that hurts most. Setup in a day, no credit card, cancel any time.",
    primary: "Start free trial",
    secondary: "Talk to us",
  },
  footer: {
    blurb: "FFH|ERP is a product of KrisKross Inc. — fourteen years of business software from Chennai, running in 5+ countries.",
    columns: [
      { title: "Product", items: [{ label: "Live CRM", path: "#top" }, { label: "Our services", path: "#features" }, { label: "Deployments", path: "#modules" }, { label: "Pricing", path: "#pricing" }] },
      { title: "Company", items: [{ label: "About us", path: "/about" }, { label: "About layout 11", path: "/about" }, { label: "Home page", path: "/" }, { label: "Contact", path: "#contact" }] },
    ],
    legal: "Copyright © 2026 KrisKross Inc. All rights reserved.",
  },
};

// Extra home37 content: implementation steps, industries, a comparison table,
// security/compliance tiles and a savings calculator.
export const HOME37_MORE = {
  how: {
    eyebrow: "Implementation",
    title: "Live in a day, not a quarter.",
    lead:
      "Most ERPs take months and a consultant per module. We do it in four steps — with your data, your team and a person on the phone while it happens.",
    steps: [
      { n: "01", when: "Day 0", title: "Map what you already do", text: "A 60-minute call to walk your actual process — the registers, the WhatsApp groups, the export nobody trusts. You get a written module plan the same evening.", points: ["Process walkthrough", "Module plan in writing", "Fixed price, no discovery invoice"] },
      { n: "02", when: "Day 1 · morning", title: "We migrate your data with you", text: "Customers, items, opening balances, AMC contracts and open tickets come across from your spreadsheets or your old system. You check the totals before anything goes live.", points: ["Spreadsheet & legacy import", "Opening balances reconciled", "Your sign-off before go-live"] },
      { n: "03", when: "Day 1 · afternoon", title: "Training for every team", text: "Not one session for everybody — separate hands-on sessions for sales, accounts, stores and service, on your own screens and your own data.", points: ["Role-wise sessions", "Offline & mobile covered", "Recordings and a cheat sheet"] },
      { n: "04", when: "Day 2", title: "Go live with support watching", text: "We stay on the line through your first invoices, first dispatch and first day-end. Anything that snags is fixed while you work, not in a ticket queue.", points: ["Named contact", "24/7 helpdesk in two languages", "No lock-in, cancel any time"] },
    ],
  },
  industries: {
    eyebrow: "Built for these businesses",
    title: "Nine modules, configured for how your trade actually runs.",
    lead: "The same database, shaped by the counters and shop floors our customers work in.",
    items: [
      { name: "Manufacturing", icon: "Factory", line: "BOM, work orders, job costing and dispatch against the same stock the store sees.", modules: ["Materials", "Production", "Finance"] },
      { name: "Retail & distribution", icon: "ShoppingBag", line: "Counter billing, multi-branch stock, schemes and credit control that reconciles daily.", modules: ["Bill", "Purchase", "Stock"] },
      { name: "Healthcare & diagnostics", icon: "HeartPulse", line: "Patient billing, consumables, AMC of equipment and service tickets in one place.", modules: ["Bill", "AMC", "Support"] },
      { name: "Projects & engineering", icon: "HardHat", line: "Stage-wise billing, site material movement and project profitability as it happens.", modules: ["Projects", "Purchase", "Finance"] },
      { name: "Hospitality & QSR", icon: "UtensilsCrossed", line: "Outlets, recipes, wastage and vendor payables that close the same evening.", modules: ["Stock", "Purchase", "Finance"] },
      { name: "Services & AMC", icon: "Wrench", line: "Contracts, renewals, engineer schedules and SLA breaches flagged before the customer calls.", modules: ["AMC", "Support", "Field"] },
    ],
  },
  compare: {
    eyebrow: "Why teams switch",
    title: "What changes when nine tools become one.",
    lead: "An honest look at the three ways a growing business runs its day.",
    cols: ["FFH|ERP", "Spreadsheets", "Typical ERP"],
    rows: [
      { label: "One number across sales, stock and accounts", ffh: true, sheets: false, erp: "Add-on" },
      { label: "Setup time", ffh: "1–2 days", sheets: "Already running", erp: "3–6 months" },
      { label: "Works offline, syncs later", ffh: true, sheets: "N/A", erp: "Rarely" },
      { label: "Data migration done with you", ffh: true, sheets: false, erp: "Paid project" },
      { label: "Training for every team", ffh: true, sheets: false, erp: "Extra cost" },
      { label: "Pricing printed on the website", ffh: true, sheets: "Free", erp: "Quote only" },
      { label: "AMC renewals & tickets in the same system", ffh: true, sheets: false, erp: "Separate module" },
      { label: "Your data, exportable any time", ffh: true, sheets: true, erp: "On request" },
      { label: "Lock-in", ffh: "None", sheets: "None", erp: "Annual contract" },
    ],
  },
  security: {
    eyebrow: "Security & compliance",
    title: "Built for the way Indian businesses are audited.",
    lead: "Your books leave a trail, your data stays yours, and nobody sees a number they should not.",
    items: [
      { icon: "ShieldCheck", title: "ISO 27001 aligned", text: "Processes, access reviews and change control documented to the standard." },
      { icon: "FileCheck2", title: "GST & e-invoicing ready", text: "GSTR-ready registers, e-invoice and e-way bill formats, IRN handling." },
      { icon: "Users", title: "Role-based access", text: "Branch, team and field-level rights — a store manager never sees payroll." },
      { icon: "History", title: "Full audit trail", text: "Who changed which invoice, when, and from where. Nothing is overwritten." },
      { icon: "DatabaseBackup", title: "Daily backups", text: "Scheduled backups with restore drills, plus export of everything you entered." },
      { icon: "Lock", title: "Encryption in transit", text: "TLS everywhere, encrypted credentials and no third-party data sharing." },
    ],
  },
  roi: {
    eyebrow: "Savings calculator",
    title: "What nine tools in one is worth to a team like yours.",
    lead: "Drag the sliders. The numbers use your own team size and the hours your people spend reconciling tools today.",
    note: "Assumes a 40-hour working week and the Pro plan at ₹960 per user per month. Your mileage will differ — which is exactly what a 20-minute walkthrough is for.",
  },
};

// Home layout 38 — layout 37's content plus the extra blocks (implementation,
// industries, comparison, security, savings calculator).
export const HOME38 = { ...HOME37 };
export const HOME38_MORE = { ...HOME37_MORE };

// The richer sign-up block on layout 38: what the trial includes, what happens
// after you press the button, the trust strip under it and the compliance badges.
export const HOME38_SIGNUP = {
  included: [
    { icon: "LayoutDashboard", title: "All nine modules", text: "Sales, marketing, finance, materials, AMC, support, projects, dashboards and documents." },
    { icon: "Smartphone", title: "Mobile and offline", text: "Android and iOS, and the field app keeps working where the network does not." },
    { icon: "UserCheck", title: "A named contact", text: "One person who knows your setup, reachable on phone and email through the trial." },
    { icon: "DatabaseBackup", title: "Your data, exportable", text: "Everything you enter stays yours and comes out in one export, whenever you ask." },
  ],
  compliance: ["ISO 27001 aligned", "GST & e-invoicing ready", "Role-based access", "Daily backups", "No lock-in, cancel any time"],
};

// About layout 13 — modelled on mindsignal.webflow.io/about-us: a minimal white
// nav, a centred hero with a pill eyebrow and a wide rounded image, a three-stat
// strip, a grey story band, a black team band, a white feature trio and a
// numbered FAQ accordion. Manrope throughout.
export const ABOUT_13 = {
  nav: [
    { label: "Home", path: "/home38" },
    { label: "About us", path: "/about" },
    { label: "Services", path: "/home38#features" },
    { label: "Pricing", path: "/home38#pricing" },
    { label: "Blogs", path: "/home38#compare" },
  ],
  cta: { label: "Start free trial", path: "/home38#signup" },
  hero: {
    eyebrow: "About FFH|ERP",
    title: "The story of how nine modules became one system",
    lead:
      "FFH|ERP is a product of KrisKross Inc., founded in Chennai in 2012. Fourteen years later, 2,500+ active users in 5+ countries run their day on it — from the first enquiry to the final invoice.",
    button: { label: "See how it works", path: "/home38#how" },
  },
  stats: [
    { v: "4.4", l: "Average rating" },
    { v: "2.5K+", l: "Active users" },
    { v: "5+", l: "Countries served" },
  ],
  story: {
    eyebrow: "Our story",
    title: "From a two-room office to 5+ countries",
    paragraphs: [
      "KrisKross Inc. started in 2012 writing billing software for neighbourhood retailers in Chennai. The brief was always the same: give me back my evening. Not a dashboard, not a report — an evening without reconciling registers.",
      "Retailers who started with billing asked for stock, purchase and accounts, so they were built in. Field teams wanted the sales cycle on a phone, and service teams wanted AMC renewals and tickets beside the invoice. Every module exists because a customer asked for it.",
      "Fourteen years on, the same team ships nine connected modules on one database — sales, marketing, finance, materials, AMC, support and projects — and still answers the phone in two languages.",
    ],
    milestones: [
      { y: "2012", t: "The first invoice", d: "Billing software for retailers in Chennai." },
      { y: "2015", t: "From billing to business", d: "Inventory, purchase and accounts join the platform." },
      { y: "2018", t: "Beyond India", d: "Customers in the Gulf and South-East Asia." },
      { y: "2021", t: "Mobile first", d: "The whole sales cycle from a phone, offline included." },
      { y: "2025", t: "One connected platform", d: "2,500+ active users on nine modules, one database." },
    ],
  },
  team: {
    eyebrow: "Meet our people",
    title: "The team behind FFH|ERP",
    lead: "No layers between you and the decision makers — the people who build the product are the people you speak to.",
  },
  why: {
    eyebrow: "Why teams stay",
    title: "Why teams stay with FFH|ERP",
    lead: "Four things customers tell us made the difference, in their words rather than ours.",
    items: [
      { icon: "Database", title: "One database", text: "Nine modules, no exports between them. The stock figure and the invoice figure cannot disagree because there is only one of each." },
      { icon: "WifiOff", title: "Offline-first", text: "Showrooms with patchy networks and field teams out of signal keep working, and everything syncs when the network returns." },
      { icon: "ArrowLeftRight", title: "Migration with you", text: "Customers, items, opening balances and open AMC contracts come across from your spreadsheets — checked by you before go-live." },
      { icon: "Languages", title: "Support in your language", text: "A 24/7 helpdesk in two languages, staffed by people who have stood behind a counter at nine in the evening." },
    ],
  },
  faq: { eyebrow: "FAQ's", title: "Have any questions?" },
};

// About layout 14 — modelled on oracle-agency.webflow.io/about-us: Inter body
// with huge condensed uppercase display headings, black/white/#f8f8f8, bordered
// value cards, alternating mission/vision rows, a team grid, client reviews, a
// hairline FAQ and a giant closing call to action.
export const ABOUT_14 = {
  nav: [
    { label: "Home", path: "/home38" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/home38#features" },
    { label: "Projects", path: "/home38#modules" },
    { label: "Pricing", path: "/home38#pricing" },
  ],
  navCta: { label: "Contact", path: "/home38#contact" },
  hero: {
    title: "About FFH|ERP",
    lead:
      "We approach business software with a blend of engineering discipline and shop-floor empathy. Fourteen years in, that means nine modules on one database for 2,500+ active users across 5+ countries — and a team that still answers the phone when a counter is busy at nine in the evening.",
  },
  values: {
    title: "Core values",
    items: [
      { icon: "Zap", title: "Speed", text: "Deployment and data gathering happen in 7–10 business days, and most teams are live in a day. No quarter-long implementation project, no consultant per module." },
      { icon: "LayoutGrid", title: "Clarity", text: "One number across sales, stock and accounts. Nine modules share a single database, so nothing has to be exported, reconciled or trusted on faith." },
      { icon: "HeartHandshake", title: "Empathy", text: "Support in two languages, 24/7, staffed by people who have stood behind a counter. The pricing is printed on the website and there is no lock-in." },
    ],
    image: 1067,
  },
  mission: {
    title: "Our mission",
    text: [
      "To give every growing business enterprise-grade CRM and ERP at a price and a simplicity that fits — unifying leads, orders, money and service so teams decide faster and serve customers better without adding headcount.",
      "That means no lock-in contracts, pricing printed on the website, migration done with the customer rather than to them, and training for every team included rather than sold as a project.",
    ],
    image: 1069,
  },
  vision: {
    title: "Our vision",
    text: [
      "To be the most trusted business operating system for growing companies — a single platform that every team runs its day on, from the first sales call to the final invoice and the service visit after it.",
      "We measure that in one way only: does the software carry the work, or add to it? Every module we add has to remove more work than it creates, or it does not ship.",
    ],
    image: 1074,
  },
  team: {
    title: "Our team",
    lead: "No layers between you and the decision makers — the people who build the product are the people you speak to.",
    extras: [
      { title: "250+ across delivery", text: "Engineering, implementation, migration and 24/7 support across Chennai, Dubai and Singapore." },
      { title: "We are hiring", text: "Engineers, implementation leads and support specialists who like talking to the people using the software." },
    ],
  },
  reviews: { title: "Client reviews" },
  faq: { title: "FAQ" },
  cta: {
    title: "Have a business that outgrew its spreadsheets?",
    lead: "Free trial, setup in a day, no credit card. Or ask us to walk you through the module that hurts most.",
    primary: "Start free trial",
    secondary: "Schedule a call",
  },
  footer: {
    contact: { title: "Talk to us", email: "ffhsales@kriskrossinc.com", phone: "+91 44 4858 5100", address: "KrisKross Inc., Chennai, Tamil Nadu, India" },
    columns: [
      { title: "Main pages", items: [["Home", "/home38"], ["About", "/about"], ["Services", "/home38#features"], ["Projects", "/home38#modules"], ["Pricing", "/home38#pricing"]] },
      { title: "More pages", items: [["Live CRM demo", "/home38#top"], ["Implementation", "/home38#how"], ["Industries", "/home38#industries"], ["Compare", "/home38#compare"], ["Security", "/home38#security"], ["Savings calculator", "/home38#roi"]] },
      { title: "About layouts", items: [["Layout 11 (dark agency)", "/about"], ["Layout 12 (editorial)", "/about"], ["Layout 13 (minimal)", "/about"], ["This layout", "/about"]] },
    ],
    legal: "© 2026 KrisKross Inc. All rights reserved.",
  },
};

// Home layout 39 — my own cut: layout 38's content, recomposed.
export const HOME39 = { ...HOME38 };
export const HOME39_MORE = { ...HOME38_MORE };
export const HOME39_SIGNUP = { ...HOME38_SIGNUP };

// About layout 15 — my own design, built around what has been asked for across
// this project: accurate numbers up front, the exact sign-up block (with its
// heading, sub-line, four bullets and rating), nothing decorative that does not
// carry information, and the conversion moment at the end rather than a generic
// banner. Warm paper base, Inter Tight headings, mono labels, a sticky spine.
export const ABOUT_15 = {
  nav: [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "#features" },
    { label: "Pricing", path: "#pricing" },
    { label: "Contact", path: "#contact" },
  ],
  topbar: { email: "ffhsales@kriskrossinc.com", phone: "+91 44 4858 5100", place: "Chennai · Dubai · Singapore" },
  hero: {
    eyebrow: "About FFH|ERP",
    title: "Business software that carries the work instead of adding to it.",
    lead:
      "FFH|ERP is a product of KrisKross Inc. We started in Chennai in 2012 writing billing software for neighbourhood retailers. Fourteen years on, nine connected modules run on one database for 2,500+ active users in 5+ countries — from the first enquiry to the final invoice.",
    main: "Start free trial",
    alt: "See the numbers",
    rating: "4.4 / 5.0 — Top-rated ERP platform, built in India for growing businesses.",
    facts: [
      { k: "Founded", v: "2012", d: "Chennai, Tamil Nadu" },
      { k: "In business software", v: "14 yrs", d: "Same team, same product" },
      { k: "Active users", v: "2.5K+", d: "Running their day on it" },
      { k: "Countries", v: "5+", d: "India, the Gulf, SE Asia" },
      { k: "Modules", v: "9", d: "One database, no exports" },
      { k: "Support", v: "24/7", d: "Helpdesk in two languages" },
    ],
  },
  story: {
    eyebrow: "How we got here",
    title: "Every module exists because a customer asked for it.",
    lead: "No roadmap written in a boardroom. The product grew the way the businesses using it grew.",
    milestones: [
      { y: "2012", t: "The first invoice", d: "Billing software for retailers in Chennai. The brief was always the same: give me back my evening.", tag: "Billing" },
      { y: "2015", t: "From billing to business", d: "Retailers asked for stock, purchase and accounts, so those joined the platform and FFH|ERP became a true ERP.", tag: "Stock · Purchase · Accounts" },
      { y: "2018", t: "Beyond India", d: "Customers in the Gulf and South-East Asia needed multi-currency, multi-branch and local tax formats.", tag: "Gulf · SE Asia" },
      { y: "2021", t: "Mobile first", d: "Field teams wanted the whole sales cycle on a phone — so the app was built offline-first, not ported.", tag: "Offline · Android · iOS" },
      { y: "2025", t: "One connected platform", d: "Nine modules, one database, 2,500+ active users. AMC renewals and service tickets sit beside the invoice.", tag: "Nine modules" },
    ],
  },
  numbers: {
    eyebrow: "What fourteen years added up to",
    title: "The numbers we are judged on.",
    items: [
      { v: "2.5K+", l: "Active users", d: "Teams running their day on FFH|ERP" },
      { v: "5+", l: "Countries", d: "India, the Gulf, South-East Asia and beyond" },
      { v: "9", l: "Modules", d: "On one database, no exports between them" },
      { v: "14", l: "Years", d: "In business software, since 2012" },
      { v: "4.4/5", l: "Average rating", d: "From the teams using it daily" },
      { v: "24/7", l: "Support", d: "Helpdesk in two languages" },
    ],
  },
  nope: {
    eyebrow: "How we keep it honest",
    title: "What we will not do.",
    lead: "Four things that are common in this industry and absent from ours.",
    items: [
      { t: "No lock-in contracts", d: "Month to month. Cancel any time, take your data with you." },
      { t: "No consultant per module", d: "One team, one price, migration and training included." },
      { t: "No quote-only pricing", d: "The plans are printed on the website. You will not be asked to talk to sales first." },
      { t: "No selling your data", d: "Your books stay yours. Role-based access and a full audit trail, exportable whenever you ask." },
    ],
  },
  team: {
    eyebrow: "The people who run it",
    title: "Accountable, and easy to reach.",
    lead: "No layers between you and the decision makers — the people who build the product are the people you speak to. Behind them, 250+ across engineering, implementation, migration and support.",
  },
  reviews: { eyebrow: "Client reviews", title: "The businesses that stayed.", note: "Six of the 2,500+ teams running their day on FFH|ERP." },
  faq: { eyebrow: "Questions", title: "Before you decide." },
  signup: {
    title: "Let's get started",
    sub: "No credit card. Setup in a day. Cancel any time.",
    bullets: ["Nine modules on one database", "We migrate your data with you", "Training for every team included", "Everything you enter stays yours"],
  },
  footer: {
    blurb: "FFH|ERP is a product of KrisKross Inc. — fourteen years of business software from Chennai, running in 5+ countries.",
    columns: [
      { title: "Product", items: [["Live CRM", "#top"], ["Services", "#features"], ["Deployments", "#modules"], ["Pricing", "#pricing"]] },
      { title: "Company", items: [["About FFH|ERP", "/about"], ["How it works", "#how"], ["Savings calculator", "#roi"], ["Contact", "#contact"]] },
      { title: "Get started", items: [["Start free trial", "#signup"], ["Implementation", "#how"], ["Savings calculator", "#roi"], ["Talk to us", "#contact"]] },
    ],
    legal: "© 2026 KrisKross Inc. All rights reserved.",
  },
};

// ---------------------------------------------------------------------------
// About layouts 16, 17 and 18 — three genuinely different treatments.
//   16  "Engineered"   dark, technical, built around how the product is made
//   17  "Proof first"  light and chart-led, built out of customer outcomes
//   18  "The flagship" the complete IT-company About page: positioning, what we
//                      do, technology, security, story, leadership, culture and
//                      careers, reviews, FAQ and the sign-up block
// Every claim here is one the site already makes: founded 2012, fourteen years,
// 2,500+ active users, 5+ countries, nine modules, 4.4/5, ISO 27001 aligned,
// GST and e-invoicing ready, role-based access, audit trail, daily backups, no
// lock-in and published pricing. The customer numbers quoted on 17 are the ones
// the customers themselves put in their reviews.
// ---------------------------------------------------------------------------
export const ABOUT_16 = {
  nav: [
    { label: "Platform", path: "#top" },
    { label: "Modules", path: "#features" },
    { label: "Implementation", path: "#how" },
    { label: "Pricing", path: "#pricing" },
  ],
  hero: {
    path: "ffherp / about",
    title: "We build software the way we run it: boring, monitored, and up.",
    lead:
      "FFH|ERP is a product of KrisKross Inc. Nine modules on one database, written in Chennai since 2012 and running the day for 2,500+ active users in 5+ countries. No re-platforming stories, no quarter-long rollouts.",
    primary: "See the platform",
    secondary: "Talk to an engineer",
  },
  status: [
    { k: "Since", v: "2012" },
    { k: "Active users", v: "2.5K+" },
    { k: "Countries", v: "5+" },
    { k: "Modules", v: "9" },
    { k: "Support", v: "24/7" },
    { k: "Rating", v: "4.4/5" },
  ],
  made: {
    eyebrow: "What it is made of",
    title: "One database, nine modules, no exports in between.",
    rows: [
      { k: "Surfaces", v: "Web, Android and iOS", d: "The same account on every screen, with the same numbers." },
      { k: "Sync", v: "Offline-first", d: "Showrooms with patchy networks and field teams out of signal keep working; everything reconciles when the network returns." },
      { k: "Data", v: "One store, no replication", d: "Sales, stock, accounts, AMC and tickets read the same records, so figures cannot disagree." },
      { k: "Access", v: "Role-based, branch-scoped", d: "A store manager never sees payroll. Every change is recorded against a user." },
      { k: "Recovery", v: "Daily backups, restore tested", d: "Plus a full export of everything you entered, whenever you ask for it." },
      { k: "Compliance", v: "GST and e-invoicing ready", d: "GSTR-ready registers, e-invoice and e-way bill formats, IRN handling." },
    ],
  },
  pipeline: {
    eyebrow: "How the product is made",
    title: "The path a customer request takes.",
    lead: "Two major releases a year, and support tickets are read by the people who write the code.",
    stages: [
      { n: "01", t: "Reported", d: "A customer, an implementation lead or a support agent logs it with the screen and the numbers involved." },
      { n: "02", t: "Triaged weekly", d: "Anything that costs a user time on a live job jumps the queue over anything cosmetic." },
      { n: "03", t: "Built and reviewed", d: "Written by the team that owns the module, reviewed by someone who did not, tested against real data." },
      { n: "04", t: "Migrated with you", d: "Where it changes data, it ships with a migration we run with you — never a script you are left to run." },
      { n: "05", t: "Trained and supported", d: "Role-wise sessions for sales, accounts, stores and service, then support on the phone while you work." },
    ],
  },
  security: { eyebrow: "Security & reliability", title: "Built for the way Indian businesses are audited." },
  team: { eyebrow: "Who builds it", title: "Small team, long tenure, direct line." },
  careers: {
    title: "We are hiring in Chennai.",
    lead: "Engineers, implementation leads and support specialists who like talking to the people using the software.",
    cta: "Write to us",
  },
  faq: { eyebrow: "Engineering questions", title: "The ones a technical buyer asks." },
};

export const ABOUT_17 = {
  nav: [
    { label: "Outcomes", path: "#outcomes" },
    { label: "Industries", path: "#industries" },
    { label: "How we work", path: "#how" },
    { label: "Pricing", path: "#pricing" },
  ],
  hero: {
    eyebrow: "Proof before promises",
    title: "We measure ourselves in your month-end.",
    lead:
      "Every About page says the team is passionate. This one shows what changed for the companies using FFH|ERP — the numbers they gave us, in their words, with their names on them.",
  },
  shifts: [
    { label: "Collections cycle", from: "61 days", to: "28 days", who: "Zenith Retail", quote: "The reminders stopped depending on somebody remembering to send them." },
    { label: "Month-end close", from: "5 days", to: "1 day", who: "A four-branch distributor", quote: "We replaced four spreadsheets and a morning meeting with one screen." },
    { label: "Stock arguments", from: "Weekly", to: "None", who: "A service business", quote: "My team stopped arguing about which number was right and started acting on it." },
    { label: "Plant rollout", from: "Per plant, months", to: "4 plants in 5 weeks", who: "A manufacturer", quote: "Four plants on one system in five weeks, with the floor actually using it." },
  ],
  outcomes: {
    eyebrow: "What it adds up to",
    title: "The numbers, ours and theirs.",
    items: [
      { v: "2.5K+", l: "Active users", d: "Running their day on FFH|ERP" },
      { v: "5+", l: "Countries", d: "India, the Gulf, South-East Asia" },
      { v: "14", l: "Years", d: "In business software since 2012" },
      { v: "9", l: "Modules", d: "On one database" },
      { v: "4.4/5", l: "Average rating", d: "From the teams using it daily" },
      { v: "24/7", l: "Support", d: "Helpdesk in two languages" },
    ],
  },
  stories: { eyebrow: "Customer stories", title: "Six of the 2,500+, in their own words.", note: "Quotes are reproduced from the reviews customers left." },
  industries: { eyebrow: "Where it runs", title: "Six trades, one database." },
  how: { eyebrow: "How we work", title: "Live in a day, not a quarter." },
  who: {
    eyebrow: "Who is behind it",
    title: "A product team in Chennai, on the phone when you call.",
    body:
      "FFH|ERP is a product of KrisKross Inc. We started in 2012 writing billing software for neighbourhood retailers, and every module since exists because a customer asked for it. Fourteen years on the same team still ships it and still answers the phone.",
  },
  team: { title: "The people who run it" },
  faq: { eyebrow: "Questions", title: "Before you decide." },
};

export const ABOUT_18 = {
  nav: [
    { label: "Story", id: "story" },
    { label: "What we do", id: "what" },
    { label: "Technology", id: "technology" },
    { label: "Security", id: "security" },
    { label: "Leadership", id: "leadership" },
    { label: "Careers", id: "careers" },
  ],
  cta: { label: "Start free trial", path: "#signup" },
  hero: {
    eyebrow: "About FFH|ERP",
    title: "The operating system for growing Indian businesses.",
    lead:
      "FFH|ERP is a product of KrisKross Inc.: nine connected modules on one database that carry a business from the first enquiry to the final invoice and the service visit after it. Built in Chennai since 2012, in daily use by 2,500+ people across 5+ countries.",
    primary: "Start free trial",
    secondary: "Book a walkthrough",
  },
  proof: [
    { v: "2012", l: "Founded in Chennai" },
    { v: "14 yrs", l: "In business software" },
    { v: "2.5K+", l: "Active users" },
    { v: "5+", l: "Countries" },
    { v: "9", l: "Connected modules" },
    { v: "4.4/5", l: "Average rating" },
  ],
  mission: {
    eyebrow: "Mission & vision",
    mission: {
      t: "Our mission",
      d: "To give every growing business enterprise-grade CRM and ERP at a price and a simplicity that fits — unifying leads, orders, money and service so teams decide faster and serve customers better without adding headcount.",
    },
    vision: {
      t: "Our vision",
      d: "To be the most trusted business operating system for growing companies: one platform every team runs its day on. We measure it one way only — does the software carry the work, or add to it?",
    },
  },
  what: {
    eyebrow: "What we do",
    title: "A product with the services to make it work.",
    product: {
      t: "The product",
      items: ["Sales & marketing", "Finance & billing", "Materials & purchase", "AMC & renewals", "Service & support tickets", "Projects & field teams", "Dashboards", "Documents", "Role-based access"],
    },
    services: {
      t: "The services around it",
      items: [
        { t: "Implementation in a day", d: "Mapping, configuration and go-live with your data and your team — not a quarter-long project." },
        { t: "Migration done with you", d: "Customers, items, opening balances and open AMC contracts, checked by you before go-live." },
        { t: "Training for every team", d: "Separate hands-on sessions for sales, accounts, stores and service, plus recordings." },
        { t: "24/7 support, two languages", d: "A helpdesk staffed by people who have worked the counters your teams work." },
      ],
    },
  },
  technology: {
    eyebrow: "Technology",
    title: "Nine modules, one database, every screen.",
    items: [
      { t: "Web, Android and iOS", d: "The same account, the same numbers, whichever screen the work happens on." },
      { t: "Offline-first", d: "Patchy networks and no-signal field visits keep working; everything syncs when the network returns." },
      { t: "One store, no replication", d: "Sales, stock, accounts, AMC and tickets read the same records, so figures cannot disagree." },
      { t: "Integrations", d: "Payment gateways, e-invoice and e-way bill formats, WhatsApp, and the spreadsheets you already have." },
      { t: "Dashboards that answer", d: "Today's position, not last month's report — collections, pipeline, stock and tickets in one view." },
      { t: "Two major releases a year", d: "Plus weekly triage of customer requests; support tickets are read by the people who write the code." },
    ],
  },
  security: { eyebrow: "Security & compliance", title: "Built for the way Indian businesses are audited.", lead: "Your books leave a trail, your data stays yours, and nobody sees a number they should not." },
  story: {
    eyebrow: "Our story",
    title: "From one invoice to nine modules.",
    lead: "Every module exists because a customer asked for it. No roadmap written in a boardroom.",
  },
  leadership: { eyebrow: "Leadership", title: "The people who run it.", lead: "No layers between you and the decision makers. Behind them, 250+ across engineering, implementation, migration and support." },
  culture: { eyebrow: "Culture & careers", title: "How we work, and who we are looking for." },
  reviews: { eyebrow: "Customer reviews", title: "The businesses that stayed.", note: "A 4.4 average across 2,500+ active users — six of them, in their own words." },
  recognition: { eyebrow: "Trusted by", title: "Running in businesses you would recognise." },
  faq: { eyebrow: "Questions", title: "Before you decide." },
  signup: {
    title: "Let's get started",
    sub: "No credit card. Setup in a day. Cancel any time.",
    bullets: ["Nine modules on one database", "We migrate your data with you", "Training for every team included", "Everything you enter stays yours"],
  },
  offices: [
    { city: "Chennai", role: "Head office & engineering", d: "KrisKross Inc., Tamil Nadu, India" },
    { city: "Dubai", role: "Gulf customers", d: "Implementation and support" },
    { city: "Singapore", role: "South-East Asia", d: "Implementation and support" },
  ],
  footer: {
    blurb: "FFH|ERP is a product of KrisKross Inc. — fourteen years of business software from Chennai, running in 5+ countries.",
    columns: [
      { title: "Product", items: [["Live CRM", "#top"], ["Modules", "#features"], ["Implementation", "#how"], ["Pricing", "#pricing"], ["Savings calculator", "#roi"]] },
      { title: "Company", items: [["About FFH|ERP", "/about"], ["Security", "#security"], ["Careers", "#careers"], ["Contact", "#contact"]] },
      { title: "Other layouts", items: [["Engineered", "/about"], ["Proof first", "/about"], ["Editorial", "/about"], ["Minimal", "/about"]] },
    ],
    legal: "© 2026 KrisKross Inc. All rights reserved.",
  },
};

// About layout 19 — modelled on odoo.com/page/about-us: an airy, friendly
// corporate page. Hero with three large numbers, a two-column "fits small and
// large alike" block with a photo pair, "what makes us different" in three
// paragraphs, a world map with our offices and the countries we serve, the
// leadership team in black and white, and a dated list of milestones and
// certifications in the place Odoo puts its awards.
export const ABOUT_19 = {
  nav: [
    { label: "Home", path: "/" },
    { label: "Modules", path: "#features" },
    { label: "Pricing", path: "#pricing" },
    { label: "Contact", path: "#contact" },
  ],
  hero: {
    title: "Making growing businesses simpler, one module at a time.",
    lead:
      "We think business software should cover complex needs without being complicated. Our mission is software that is intuitive, full-featured, tightly integrated, effortless to upgrade, and smooth for every business and every user — whether that is one counter in Coimbatore or four plants and a field team.",
    stats: [
      { v: "2.5K+", l: "active users" },
      { v: "5+", l: "countries" },
      { v: "9", l: "connected modules" },
    ],
  },
  fits: {
    title: "Fits small and large companies alike.",
    paragraphs: [
      "Our mission is to provide a range of easy-to-use business applications that form a complete suite, able to accompany any business need. We give growing companies easy access to the software they need to run and expand — without a consultant for every module.",
      "We have built nine main modules that share one database and are upgraded together. Sales, marketing, finance, materials, AMC, support, projects, dashboards and documents all read the same records, so nothing has to be exported or reconciled between them.",
      "The same product runs from a single-user shop counter to a 300-user manufacturer. Retailers in Chennai, distributors in Dubai and service teams in Singapore use the identical platform — configured to their trade, not forked for it.",
    ],
    images: [1067, 1069],
  },
  different: {
    title: "What makes FFH|ERP different?",
    paragraphs: [
      "A smooth, friendly experience built for adoption rather than training. If a store manager needs a manual, the screen is wrong, not the person.",
      "Fluidity and integration cover the needs of even complex companies. Modules can be added according to the growth of your business — one at a time, as your needs evolve and your customer base grows.",
      "Migration is done with you rather than to you, training for every team is included rather than sold as a project, and there is no lock-in: the pricing is printed on the website and your data leaves in one export whenever you ask.",
    ],
    image: 1074,
  },
  offices: {
    title: "Our Offices",
    lead: "Built in Chennai, supported across the regions our customers trade in.",
    items: [
      { city: "Chennai", country: "India", what: "HQ, Engineering, Implementation, Support", flag: "🇮🇳" },
      { city: "Dubai", country: "UAE", what: "Sales, Implementation, Support", flag: "🇦🇪" },
      { city: "Singapore", country: "Singapore", what: "Sales, Implementation, Support", flag: "🇸🇬" },
    ],
  },
  team: {
    title: "Meet the Leadership Team",
    lead: "No layers between you and the decision makers — the people who build the product are the people you speak to. Behind them, 250+ across engineering, implementation, migration and support.",
  },
  milestones: {
    title: "Milestones & certifications",
    lead: "The dates we can stand behind, and the standards we are audited against.",
    certs: ["ISO 27001 aligned", "GST & e-invoicing ready", "Role-based access", "Full audit trail", "Daily backups", "Encryption in transit"],
  },
  footer: {
    blurb: "FFH|ERP is a product of KrisKross Inc. — a suite of connected business modules that cover CRM, billing, inventory, AMC, support and projects on one database.",
    columns: [
      { title: "Product", items: [["Live CRM", "#top"], ["Modules", "#features"], ["Implementation", "#how"], ["Pricing", "#pricing"]] },
      { title: "Company", items: [["About FFH|ERP", "/about"], ["Security", "#security"], ["Savings calculator", "#roi"], ["Contact", "#contact"]] },
      { title: "Other About pages", items: [["The flagship", "/about"], ["Engineered", "/about"], ["Proof first", "/about"], ["Editorial", "/about"]] },
    ],
    legal: "© 2026 KrisKross Inc. All rights reserved.",
  },
};

// About layout 20 — built from layouts 3, 6 and 10 and wearing layout 39's logo
// theme. The content comes straight from those blocks: ABOUT_3 for the hero and
// "what sets us apart" pillars and the certifications, ABOUT_US for the mission
// and vision, ABOUT_10's metrics strip, ABOUT_ALT's five-turn journey and
// ABOUT_6's "fourteen years, one direction" framing. This block adds only the
// framing lines the new page needs, the leadership signatures, the "why" section
// and the advertisement unit.
export const ABOUT_20 = {
  nav: [
    { label: "Home", target: "/" },
    { label: "About Us", target: "#apart" },
    { label: "Leadership", target: "#leadership" },
    { label: "Our journey", target: "#journey" },
    { label: "Contact Us", target: "#contact" },
  ],
  apart: {
    eyebrow: "What sets us apart",
    title: "Three decisions we have not gone back on.",
    lead: "Everything else about the product follows from these.",
  },
  mv: {
    eyebrow: "Mission and vision",
    title: "What we are building, and why.",
  },
  leadership: {
    eyebrow: "Running by",
    title: "Leadership",
    lead: "Four roles, one scorecard: the product our customers run their business on. Signed by the four people who carry it.",
    signed: "Signed",
  },
  certified: {
    eyebrow: "Trust",
    title: "Certified, compliant, accountable",
    lead: "The standards we are audited against, the registrations we hold, and where your data lives.",
    footnote: "Certifications and registrations as recorded by KrisKross Inc. Ask us for the current certificates before you buy.",
  },
  journey: {
    eyebrow: "How we got here",
    titleLead: "Fourteen years, one direction:",
    titleAccent: "make it simpler",
    lead: "From a billing package written for Chennai retailers to nine connected modules used in 5+ countries.",
    note: "Every module exists because a customer asked for it.",
    turns: "Fourteen years, six turns",
    turnsLead: "Each step was a customer asking for something the software could not do yet.",
    // the entry that closes the timeline: what is already on the roadmap, taken
    // from the "what comes next" list this page already shows.
    turn2026: {
      year: "2026",
      title: "AI in every module",
      text: "Artificial intelligence becomes part of how the software works rather than something extra you buy: it reads the enquiry, scores the lead, forecasts demand, chases the payment, predicts the renewal and questions the odd invoice — on your own data. Alongside it, deeper mobile, more automation and open integrations: approvals and collections from a phone, follow-ups and renewals that happen without anyone remembering, and cleaner connections to banks, GST portals and the tools you already pay for.",
    },
  },
  why: {
    eyebrow: "Why",
    title: "Why teams choose FFH|ERP",
    lead: "The four things customers mention most when they explain why they stayed.",
  },
  ad: {
    label: "Advertisement",
    headline: "Setup in a day. Free for seven days.",
    lead: "Nine modules on one database, your data migrated with you, training for every team included. No credit card, no lock-in, cancel any time.",
    primary: "Start free trial",
    secondary: "Book a 20-minute walkthrough",
    small: "KrisKross Inc. · Chennai · Dubai · Singapore · +91 44 4858 5100",
  },
  footer: {
    blurb: "FFH|ERP is a product of KrisKross Inc. — nine connected modules on one database, built in Chennai since 2012 and running in 5+ countries.",
    columns: [
      { title: "Product", items: [["Live CRM", "#top"], ["Services", "#features"], ["Deployments", "#modules"], ["Pricing", "#pricing"]] },
      { title: "Company", items: [["About FFH|ERP", "/about"], ["How we got here", "#journey"], ["Leadership", "#leadership"], ["Contact", "#contact"]] },
      { title: "Get started", items: [["Start free trial", "#signup"], ["Pricing", "#pricing"], ["Savings calculator", "#roi"], ["Talk to us", "#contact"]] },
    ],
    legal: "© 2026 KrisKross Inc. All rights reserved.",
  },
};
