// MOCK DATA - all content is static/frontend only (localStorage for interactions)
export const NAV_LINKS = [
  { label: "Modules", href: "#modules" },
  { label: "Features", href: "#features" },
  { label: "Why FFH", href: "#why" },
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
