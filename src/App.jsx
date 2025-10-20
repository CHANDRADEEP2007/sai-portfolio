import React, { useState, useEffect, useRef } from "react";
import {
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
  Legend,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
} from "recharts";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  BookOpen,
  ArrowUpRight,
  Info,
} from "lucide-react";

/* ============================================================================
   Portfolio SPA — colorful & clear
   ==========================================================================*/

const PALETTE = {
  indigo: "#6366F1",
  violet: "#8B5CF6",
  fuchsia: "#D946EF",
  sky: "#0EA5E9",
  emerald: "#10B981",
  amber: "#F59E0B",
  rose: "#F43F5E",
  slate: "#64748B",
  grayGrid: "#E5E7EB",
};

const DATA = {
  identity: {
    name: "Venkata Sai Chandradeep Telaprolu",
    title: "AI Product Manager · Advanced Analytics · LLM Applications",
    location: "USA",
    email: "chandradeep.msba@gmail.com",
    phone: "502-298-6263",
    links: {
      resume: "/resume.pdf",
      linkedin:
        "https://www.linkedin.com/in/venkata-sai-chandradeep-telaprolu-b0a568154/",
      huggingface: "https://huggingface.co/SaiCD",
    },
  },

  /* ---------------- Professional projects ---------------- */
  projects: [
    {
      name: "Banker Performance Ranking Dashboards",
      role: "Data Analytics Lead — Commercial Banking",
      summary:
        "Unifies CRM, revenue, pipeline, and service data to compute weekly KPIs and rank bankers. Interactive dashboards show rankings with drilldowns and filters. Automated SQL & Python jobs detect data anomalies and alert owners.",
      impact: [
        "Multi-source ingestion (CRM, Finance, Servicing)",
        "Weekly ranking + cohort filters (region, segment, tenure)",
        "Automated anomaly detection (SQL + Python) with email alerts",
      ],
      links: { demo: "", repo: "", writeup: "" },
      metrics: {},
    },
    {
      name: "Product Definition Developer",
      role: "Senior PM — Payments",
      summary:
        "Agent extracts the current definition, applies prompt-based updates, and auto-creates JIRA for multi-team approvals; flags cross-impacts and notifies backend teams for mapping.",
      impact: [
        "Parses definition, highlights gaps, proposes redlines",
        "Auto-JIRA with approvers (Eng, Risk, Legal)",
        "Cross-impact detection + backend mapping notifications",
        "Auditable change & approval trail",
      ],
      links: { demo: "", repo: "", writeup: "" },
      metrics: { adoptionRate: 72, accuracy: 60, timeSavedHours: 3000 },
    },
    {
      name: "Payments Product Recommender",
      role: "Senior PM — Payments",
      summary:
        "Context-aware next-best-action during onboarding; setup time ↓ ~30%, adoption ↑.",
      impact: [
        "Setup time ↓ ~30%",
        "Weekly adoption ~60%",
        "Discovery → launch; analytics + UX experiments",
      ],
      links: { demo: "", repo: "", writeup: "" },
      metrics: {
        adoptionRate: 60,
        onboardingTimeReductionPct: 30,
        onboardingTimeIndexBefore: 100,
        onboardingTimeIndexAfter: 70,
      },
    },
    {
      name: "Conversational Analytics Assistant (Multi-Agent)",
      role: "Senior PM — Payments",
      summary:
        "Natural-language answers over multi-source data; accuracy ↑ 78% → 93% after training on ~10M transactions.",
      impact: [
        "6/10 users weekly",
        "Accuracy ↑ 78% → 93%",
        "Live insights replace static reporting",
      ],
      links: { demo: "", repo: "", writeup: "" },
      metrics: {
        adoptionRate: 60,
        baselineAccuracy: 78,
        postAccuracy: 93,
        accuracy: 93,
        timeSavedHours: 4000,
      },
    },
    {
      name: "Onboarding Drop-off Prediction",
      role: "Senior PM — Payments",
      summary:
        "Signals at-risk users during onboarding; targeted nudges kept ~25% more users on track.",
      impact: ["Retention lift ~25%", "Experimentation center for PMs"],
      links: { demo: "", repo: "", writeup: "" },
      metrics: { adoptionRate: 45, accuracy: 68, timeSavedHours: 800, csatLift: 8 },
    },
    {
      name: "Restaurant Network Ops Console",
      role: "Data Analyst — Yum! Brands",
      summary:
        "Ops dashboards + promo forecasting for ~40k stores; sales ↑ ~6%, promo MAPE ~3%, wait ↓ ~18s.",
      impact: ["Sales ↑ ~6%", "Promo MAPE ~3%", "Drive-thru wait ↓ 18s"],
      links: { demo: "", repo: "", writeup: "" },
      metrics: { adoptionRate: 55, accuracy: 97, timeSavedHours: 1200, csatLift: 10 },
    },
  ],

  /* ---------------- Tools & Stack (filled) ---------------- */
  tools: [
    {
      group: "AI/ML",
      items: [
        "LLM integration (OpenAI, Azure OpenAI)",
        "Prompt engineering & fine-tuning (LangChain, Hugging Face)",
        "Recommendation systems",
        "NLP",
        "A/B & causal testing",
        "scikit-learn",
        "PyTorch",
      ],
    },
    {
      group: "Analytics & BI",
      items: [
        "SQL (Snowflake, Redshift, Synapse)",
        "Python",
        "R",
        "Tableau",
        "Power BI",
        "Looker/QuickSight",
        "Alteryx",
      ],
    },
    {
      group: "Cloud/Data Platforms",
      items: [
        "AWS (Redshift, Glue, S3)",
        "Azure Synapse",
        "ETL orchestration (Airflow, dbt)",
        "Data modeling & governance",
        "Hive",
      ],
    },
    {
      group: "Product Tools",
      items: [
        "Roadmapping",
        "Backlog & sprint management (Jira, Azure DevOps)",
        "UX feedback loops",
        "Experiment design",
      ],
    },
  ],

  /* ---------------- Personal projects (Hugging Face) ---------------- */
  huggingface: [
    {
      name: "PDF Summary AI Agent",
      type: "Space",
      url: "https://huggingface.co/spaces/SaiCD/pdf-summary-ai-agent",
      description: "PDF → structured summaries with citations.",
      tech: ["Python", "Gradio", "Transformers", "Embeddings", "FAISS"],
      codeSummary:
        "Parses PDFs, chunks with embeddings, retrieves context, and synthesizes concise summaries with section anchors; Gradio for UI.",
      tags: ["Agent", "Summarization", "Gradio"],
    },
    {
      name: "SaiSpace Chatbot",
      type: "Space",
      url: "https://huggingface.co/spaces/SaiCD/saispace",
      description: "Prompt/guardrails patterns for a general chatbot.",
      tech: ["Python", "Gradio", "Prompt routing", "Safety prompts"],
      codeSummary:
        "Implements prompt templates, guardrails, and small tools; shows few-shot prompting and response moderation.",
      tags: ["Chatbot", "LLM", "Gradio"],
    },
    {
      name: "FLAN-T5 Large — Fine-tuned AI Assistant",
      type: "Model",
      url: "https://huggingface.co/SaiCD/flan-t5-large-finetuned-ai-assistant",
      description: "Instruction-tuned FLAN-T5 for concise enterprise Q&A.",
      tech: ["Transformers", "Datasets", "PEFT/LoRA"],
      codeSummary:
        "Fine-tunes FLAN-T5 on instruction/answer pairs; exports weights and tokenizer for inference.",
      tags: ["Fine-tune", "FLAN-T5", "Instruction"],
    },
  ],

  research: [
    {
      title: "Ms. TROMM: An Intelligent Styler Recommendation System",
      venue: "IJSRED · 2025",
      url: "https://doi.org/10.5281/zenodo.14677436",
      abstract:
        "Designs a personalized laundry assistant that recommends wash cycles and fabric care using rule-based context and historical preferences, reducing user errors and improving garment outcomes.",
    },
    {
      title:
        "Analyzing URL Structure for Machine Learning: Feature Engineering and Classification Applications",
      venue: "IJSRED · 2025",
      url: "https://doi.org/10.5281/zenodo.14677428",
      abstract:
        "Tokenizes and engineers URL components (host, path, params) to improve phishing/malware detection; compares models and shows structure-aware features boost accuracy.",
    },
    {
      title: "Analyzing Customer Reviews and Ratings",
      venue: "IJSRED · 2025",
      url: "https://doi.org/10.5281/zenodo.14677474",
      abstract:
        "Blends sentiment with review-trust signals to summarize opinions and filter anomalies, correlating better with sales than raw star ratings.",
    },
    {
      title: "Impact of the Global Financial Crisis on the South African Economy",
      venue: "IJSRED · 2025",
      url: "https://doi.org/10.5281/zenodo.14677496",
      abstract:
        "Quantifies 2008-crisis effects across sectors using macro indicators with OLS and Random Forests; highlights uneven recovery and policy implications.",
    },
    {
      title: "Continuous Architecting for Data Applications",
      venue: "IJSRED · 2025",
      url: "https://doi.org/10.5281/zenodo.14677391",
      abstract:
        "Presents an iterative architecture method for analytics platforms that evolves pipelines safely via guardrails, reducing downtime and controlling cost/complexity.",
    },
  ],

  certifications: [
    {
      name: "Foundations of Project Management",
      org: "Google (Coursera)",
      year: "2023",
      area: "Product/PM",
      url: "https://www.coursera.org/account/accomplishments/verify/5EDCNCCFJF89",
    },
    {
      name: "Customer Analytics",
      org: "University of Pennsylvania (Coursera)",
      year: "2020",
      area: "Analytics",
      url: "https://www.coursera.org/account/accomplishments/verify/MASE9K7S8AY4",
    },
    {
      name: "SAS – University of Louisville Joint Certificate in Data Analytics",
      org: "SAS & University of Louisville (Credly)",
      year: "Sep 2022",
      area: "Analytics",
      url: "https://www.credly.com/badges/9320c9e0-c9a5-4665-b1ec-f9e26bdc9888/linked_in_profile",
    },
    {
      name: "AWS Certified Solutions Architect – Associate",
      org: "Amazon Web Services (Credly)",
      year: "Feb 2024",
      area: "Cloud",
      url: "https://www.credly.com/badges/a0f5519a-88b0-4fa4-a65e-ac5772d0edeb",
    },
  ],

  skills: [
    { area: "AI/ML", score: 88 },
    { area: "Product", score: 85 },
    { area: "Analytics", score: 90 },
    { area: "Cloud/Data", score: 82 },
    { area: "Experimentation", score: 80 },
  ],

  /* ===========================
     EXPERIENCE (with added bullets)
     =========================== */
  experience: [
  {
    company: "J.P. Morgan Chase & Co.",
    role: "Platform Product Manager — Payments",
    location: "USA",
    period: "Apr 2024 – Present",
    highlights: [
      "Built a Unified Intake Portal that gives teams one central place to access all product offerings across different internal sites, eliminating tool-switching and saving meaningful time each day.",
      "Led development of a central Product Definition Platform that replaced several disconnected UIs, giving the organization one consistent view of products and removing duplicate engineering work.",
      "Introduced API-driven dynamic UI generation so product data flows automatically into client-facing sites, making launches faster and updates more accurate.",
      "Built a workflow engine to guide how product data, documents, and approvals move through the organization— improving efficiency, audit control, and compliance tracking.",
      "Launched a no-code self-service product builder so non-technical teams can create or update product definitions without waiting on developers, freeing engineering capacity and speeding changes.",
      "Standardized reusable components and templates, leading to ~50% less engineering effort and quicker launches across multiple lines of business.",
      "Set up A/B testing and adoption analytics to see how teams use new features and use those insights to smooth UX friction and lift completion rates.",
      "Hosted quarterly product health reviews with business and client teams and folded the feedback directly into the roadmap.",
      "Presented adoption trends and platform impact to senior leadership, helping shape priorities for the next phases of product growth."
    ]
  },
  {
    company: "J.P. Morgan Chase & Co.",
    role: "Analytics Solutions — Product Sales",
    location: "USA",
    period: "Aug 2022 – Mar 2024",
    highlights: [
      "Partnered across teams to build a unified analytics environment that connected Salesforce, Redshift, and Azure Synapse into a single source of truth.",
      "Designed and maintained automated PySpark + SQL + Airflow pipelines to process millions of records with high reliability and low downtime.",
      "Developed modular DBT transformation models that turned raw data into clean, analytics-ready tables—reducing refresh time and increasing trust in metrics.",
      "Delivered 20+ interactive dashboards in Tableau/Qlik, giving leadership instant visibility into product performance, pipeline growth, and adoption.",
      "Automated manual reporting tasks in Airflow, cutting routine data prep by ~70% and improving refresh accuracy.",
      "Worked with Product & Operations on funnel and behavioral analyses to pinpoint adoption gaps and adjust feature strategy.",
      "Defined North-Star metrics and KPI frameworks that became the standard across multiple business units."
    ]
  },
  {
    company: "Yum! Brands",
    role: "Data Analyst",
    location: "USA",
    period: "Oct 2021 – Jun 2022",
    highlights: [
      "Built Python + Tableau dashboards that helped regional leaders monitor daily sales, promotion impact, and store-level performance.",
      "Ran forecasting and cannibalization analyses to understand how new offers affected existing items—informing smarter campaign design.",
      "Automated data pipelines and quality checks with Airflow, reducing reporting turnaround by ~35%.",
      "Shared insights with marketing and operations to fine-tune promotional timing and store execution."
    ]
  },
  {
    company: "Reguss Consulting (India)",
    role: "Analytics Consultant",
    location: "India",
    period: "Jun 2020 – Oct 2021",
    highlights: [
      "Built predictive lead-scoring models that helped sales teams focus on high-potential prospects and improve conversion.",
      "Automated recurring reporting with SQL, PySpark, and Airflow—cutting turnaround by ~30% and improving consistency.",
      "Created KPI scorecards and marketing dashboards that made campaign ROI visible to leadership.",
      "Guided clients from manual Excel workflows to a fully automated analytics stack for real-time visibility and faster decisions."
    ]
  },
    {
      company: "Dell Technologies",
      role: "Business Development Intern (Data-focused)",
      location: "Bangalore, India",
      period: "Dec 2018 – Dec 2019",
      highlights: [
        "SQL-based lead scoring; territory heatmaps & cohorts across 3 BUs.",
        "Automated pipeline dashboards (Excel/Power BI), saving ~6 hrs/week.",
        "Win/loss analysis informed pricing/package tweaks; pipeline +8%.",
        "Built trusted relationships with sales and marketing stakeholders; supported planning and project tracking.",
      ],
    },
  ],
};

/* ---------------- Diagnostics ---------------- */
function runDiagnostics() {
  console.assert(typeof App === "function", "App must be a function component.");
}

/* ---------------- UI primitives ---------------- */
function Card({ title, action, children, footer }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        {action}
      </div>
      <div className="text-sm leading-6 text-gray-700">{children}</div>
      {footer ? <div className="mt-4 text-xs text-gray-500">{footer}</div> : null}
    </div>
  );
}
const SectionTitle = ({ title, intro }) => (
  <div className="mb-6">
    <h2 className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent">
      {title}
    </h2>
    {intro && <p className="mt-2 max-w-3xl text-sm text-slate-700">{intro}</p>}
  </div>
);
const LinkButton = ({ href, children }) => (
  <a
    href={href}
    className="inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-xs font-medium underline decoration-dotted hover:bg-indigo-50"
  >
    {children} <ArrowUpRight className="h-3.5 w-3.5" />
  </a>
);
const Pill = ({ children }) => (
  <span className="rounded-full border px-2.5 py-1 text-xs">{children}</span>
);
const Stat = ({ label, value, className = "" }) => (
  <div className={`rounded-xl border p-4 text-center shadow-sm ${className}`}>
    <div className="text-xs text-slate-700">{label}</div>
    <div className="mt-1 text-xl font-semibold">{value}</div>
  </div>
);
const ChartCard = ({ title, caption, children }) => (
  <div className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur">
    <div className="mb-2 text-sm font-semibold">{title}</div>
    <div className="h-64 w-full">{children}</div>
    {caption && (
      <div className="mt-2 flex items-start gap-2 text-xs text-slate-600">
        <Info className="mt-0.5 h-3.5 w-3.5" />
        <p>{caption}</p>
      </div>
    )}
  </div>
);
function LazyRender({ height = 256, children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ minHeight: height }}>
      {visible ? (
        children
      ) : (
        <div className="h-full w-full animate-pulse rounded-xl bg-slate-100" style={{ minHeight: height }} />
      )}
    </div>
  );
}

/* ---------------- Derived datasets ---------------- */
// Exclude Banker Performance Ranking Dashboards from KPI chart
const projectBarData = DATA.projects
  .filter((p) => p.name !== "Banker Performance Ranking Dashboards")
  .map((p) => ({
    project: p.name,
    adoption: (p.metrics && p.metrics.adoptionRate) || 0,
    accuracy: (p.metrics && p.metrics.accuracy) || 0,
  }));

const certificationSlices = Object.values(
  DATA.certifications.reduce((acc, c) => {
    acc[c.area] = acc[c.area] || { name: c.area, value: 0 };
    acc[c.area].value += 1;
    return acc;
  }, {})
);

const assistant = DATA.projects.find((p) =>
  p.name.includes("Conversational Analytics Assistant")
);
const accuracyBeforeAfter = [
  { stage: "Before", accuracy: assistant?.metrics?.baselineAccuracy ?? 0 },
  {
    stage: "After",
    accuracy: assistant?.metrics?.postAccuracy ?? assistant?.metrics?.accuracy ?? 0,
  },
];

/* ---------------- Router + Pages ---------------- */
const ROUTES = [
  "home",
  "experience_resume",
  "projects",
  "research",
  "certifications",
  "contact",
];

// NOTE: useHashRoute is defined ONCE at the very bottom.

function TopNav({ current }) {
  const link = (r, label) => (
    <a
      key={r}
      href={`#/${r}`}
      className={`rounded-full px-3 py-1.5 text-xs font-medium ${
        current === r ? "bg-slate-900 text-white" : "border"
      }`}
    >
      {label}
    </a>
  );
  return (
    <nav className="sticky top-0 z-10 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <div className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-sm font-semibold text-transparent">
          Sai Chandradeep — Portfolio
        </div>
        <div className="flex flex-wrap gap-2">
          {link("home", "Home")}
          {link("experience_resume", "Experience & Resume")}
          {link("projects", "Projects")}
          {link("research", "Research")}
          {link("certifications", "Certifications")}
          {link("contact", "Contact")}
        </div>
      </div>
    </nav>
  );
}

/* ---------------- Pages ---------------- */
function HomePage() {
  const { identity } = DATA;
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <SectionTitle title={`Hi, I'm ${identity.name}`} intro={identity.title} />
      <div className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-sm ring-1 ring-indigo-100 backdrop-blur">
        <p className="max-w-3xl text-sm text-slate-700">
          I build AI-enabled product experiences that turn raw data into decisions.
          Recent work includes multi-agent analytics, onboarding recommendations, and risk detection models.
        </p>

        {/* KPI tiles */}
        <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-3">
          <Stat
            label="AI agents boosted answer accuracy"
            value="78% → 93%"
            className="bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200"
          />
          <Stat
            label="Recommender cut onboarding time"
            value="↓ ~30%"
            className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200"
          />
          <Stat
            label="New features: weekly adoption"
            value="~60%"
            className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200"
          />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3">
          <LazyRender height={256}>
            <ChartCard
              title="Assistant accuracy: before vs after"
              caption="Before = baseline model; After = after fine-tuning on ~10M transactions and evaluation improvements using the same test set."
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={accuracyBeforeAfter}
                  margin={{ left: 10, right: 10, top: 10, bottom: 10 }}
                >
                  <CartesianGrid stroke={PALETTE.grayGrid} strokeDasharray="3 3" />
                  <XAxis dataKey="stage" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="accuracy" name="Accuracy (%)" fill={PALETTE.indigo} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </LazyRender>

          <LazyRender height={256}>
            <ChartCard title="Skills radar">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                  data={DATA.skills}
                  outerRadius="64%"
                  margin={{ left: 50, right: 50, top: 24, bottom: 24 }}
                >
                  <PolarGrid />
                  <PolarAngleAxis dataKey="area" tick={{ fontSize: 12 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} />
                  <Radar
                    dataKey="score"
                    name="Proficiency"
                    stroke={PALETTE.violet}
                    fill={PALETTE.violet}
                    fillOpacity={0.35}
                  />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </ChartCard>
          </LazyRender>

          <LazyRender height={256}>
            <ChartCard title="Certifications by area">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={certificationSlices} dataKey="value" nameKey="name" outerRadius={90} label>
                    {certificationSlices.map((_, i) => (
                      <Cell key={i} fill={[PALETTE.indigo, PALETTE.emerald, PALETTE.sky, PALETTE.fuchsia, PALETTE.amber][i % 5]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </ChartCard>
          </LazyRender>
        </div>
      </div>
    </div>
  );
}

function ProjectsPage() {
  const [tab, setTab] = useState("professional"); // 'professional' | 'personal'
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <SectionTitle title="Notable Projects" intro="I work on many things — here are highlights." />
      <div className="mb-5 flex gap-2">
        <button
          onClick={() => setTab("professional")}
          className={`rounded-full border px-3 py-1.5 text-xs font-medium ${tab === "professional" ? "bg-slate-900 text-white" : ""}`}
        >
          Professional projects
        </button>
        <button
          onClick={() => setTab("personal")}
          className={`rounded-full border px-3 py-1.5 text-xs font-medium ${tab === "personal" ? "bg-slate-900 text-white" : ""}`}
        >
          Personal projects
        </button>
      </div>

      {tab === "professional" ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {DATA.projects.map((p) => (
            <ProjectCard key={p.name} p={p} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {DATA.huggingface.map((h) => (
            <Card
              key={h.name}
              title={`${h.name} — ${h.type}`}
              action={<LinkButton href={h.url}>Open</LinkButton>}
              footer={<div className="text-gray-500">{h.tags.join(" · ")}</div>}
            >
              <p className="text-sm">{h.description}</p>
              <div className="mt-2 text-sm text-gray-700">
                <span className="font-medium">Tech:</span> {h.tech.join(", ")}
              </div>
              <div className="mt-2 text-sm text-gray-700">
                <span className="font-medium">Code:</span> {h.codeSummary}
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
function ProjectCard({ p }) {
  const m = p.metrics || {};
  return (
    <Card
      title={p.name}
      action={
        <div className="flex gap-2">
          {p.links.writeup && <LinkButton href={p.links.writeup}>Case study</LinkButton>}
          {p.links.demo && <LinkButton href={p.links.demo}>Demo</LinkButton>}
          {p.links.repo && <LinkButton href={p.links.repo}>Code</LinkButton>}
        </div>
      }
      footer={<div className="text-gray-500">{p.role}</div>}
    >
      <p>{p.summary}</p>
      <ul className="mt-3 list-disc space-y-1 pl-5">
        {p.impact.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
      <div className="mt-3 flex flex-wrap gap-2">
        {"adoptionRate" in m && <Pill>Adoption: {m.adoptionRate}% weekly</Pill>}
        {"accuracy" in m && <Pill>Accuracy: {m.accuracy}%</Pill>}
        {"baselineAccuracy" in m && "postAccuracy" in m && (
          <Pill>Accuracy (before→after): {m.baselineAccuracy}% → {m.postAccuracy}%</Pill>
        )}
        {"onboardingTimeReductionPct" in m && <Pill>Onboarding time: ↓ {m.onboardingTimeReductionPct}%</Pill>}
        {"timeSavedHours" in m && m.timeSavedHours > 0 && (
          <Pill>Hours saved/yr: {m.timeSavedHours.toLocaleString()}</Pill>
        )}
      </div>
    </Card>
  );
}

function ResearchPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <SectionTitle title="Research & Publications" intro="Short abstracts for each paper." />
      <div className="grid grid-cols-1 gap-5">
        {DATA.research.map((p) => (
          <Card
            key={p.title}
            title={p.title}
            action={p.url ? <LinkButton href={p.url}>Read paper</LinkButton> : null}
            footer={<div className="text-gray-500">{p.venue}</div>}
          >
            <p className="text-sm text-gray-700">{p.abstract}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

function CertificationsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <SectionTitle title="Certifications" intro="Verifiable credentials supporting hands-on expertise." />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {DATA.certifications.map((c) => (
          <Card
            key={c.name}
            title={c.name}
            action={c.url ? <LinkButton href={c.url}>Verify</LinkButton> : null}
            footer={<div className="text-gray-500">{c.org} · {c.year} · {c.area}</div>}
          >
            <p className="text-sm text-gray-700">
              Click <span className="font-medium">Verify</span> to view the credential.
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* -------- Experience & Resume -------- */
function ExperienceResumePage() {
  const { identity } = DATA;
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <SectionTitle title="Experience & Resume" intro="Full CV view with roles, certifications, publications, and tools." />

      <div className="mb-6 flex flex-wrap items-center gap-3">
        <a className="inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-xs font-medium underline decoration-dotted" href={identity.links.resume} download>
          Download PDF <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
        <a className="inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-xs font-medium underline decoration-dotted" href="#/contact">
          Contact
        </a>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-5">
          {DATA.experience.map((e) => (
            <Card key={`${e.company}-${e.period}`} title={`${e.company} — ${e.role}`}
              footer={<div className="text-gray-500">{e.location} · {e.period}</div>}>
              <ul className="list-disc space-y-1 pl-5">
                {e.highlights.map((h) => <li key={h}>{h}</li>)}
              </ul>
            </Card>
          ))}
        </div>

        <div className="space-y-5">
          <Card title="Tools & Stack">
            <ul className="space-y-2">
              {DATA.tools.map((g) => (
                <li key={g.group}>
                  <span className="font-medium">{g.group}:</span>{" "}
                  <span className="text-gray-700">{g.items.join(", ")}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card title="Project KPIs (snapshot)">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={projectBarData} margin={{ left: 10, right: 10, top: 10, bottom: 10 }}>
                  <CartesianGrid stroke={PALETTE.grayGrid} strokeDasharray="3 3" />
                  <XAxis dataKey="project" tick={{ fontSize: 10 }} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="adoption" name="Adoption %" fill={PALETTE.emerald} />
                  <Bar dataKey="accuracy" name="Accuracy %" fill={PALETTE.indigo} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

function ContactPage() {
  const { identity } = DATA;
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <SectionTitle title="Contact" intro="Happy to connect and share more details or demos." />
      <div className="rounded-2xl border bg-white/90 p-6 text-sm backdrop-blur">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <div className="flex items-center gap-2"><Mail className="h-4 w-4" /><a className="underline" href={`mailto:${identity.email}`}>{identity.email}</a></div>
            <div className="flex items-center gap-2"><Phone className="h-4 w-4" />{identity.phone}</div>
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4" />{identity.location}</div>
          </div>
          <div className="space-y-2">
            <a className="block underline" href={identity.links.linkedin}><Linkedin className="mr-1 inline h-4 w-4" />LinkedIn</a>
            <a className="block underline" href={identity.links.huggingface}><BookOpen className="mr-1 inline h-4 w-4" />Hugging Face</a>
            <a className="block underline" href={identity.links.resume} download>Resume (PDF)</a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- App shell ---------------- */
const PAGES = {
  home: HomePage,
  experience_resume: ExperienceResumePage,
  projects: ProjectsPage,
  research: ResearchPage,
  certifications: CertificationsPage,
  contact: ContactPage,
};

function App() {
  const [route] = useHashRoute("home");
  useEffect(() => { runDiagnostics(); }, []);
  const Page = PAGES[route] || HomePage;

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-violet-50 to-fuchsia-50 text-slate-900">
      <TopNav current={route} />
      <Page />
      <footer className="mx-auto max-w-7xl px-4 pb-14">
        <div className="rounded-2xl border bg-white/90 p-6 text-xs text-gray-600 backdrop-blur">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} V. S. Chandradeep Telaprolu. Built with React & Recharts.</p>
            <a className="underline" href="#/contact">Get in touch</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ---------------- Tiny hash router (single definition) ---------------- */
function useHashRoute(defaultRoute = "home") {
  const [route, setRoute] = useState(() => {
    const h = (typeof window !== "undefined" && window.location.hash) || "#";
    const r = h.replace(/^#\/?/, "");
    return ROUTES.includes(r) ? r : defaultRoute;
  });
  useEffect(() => {
    const onHash = () => {
      const r = window.location.hash.replace(/^#\/?/, "");
      setRoute(ROUTES.includes(r) ? r : defaultRoute);
      window.scrollTo({ top: 0, behavior: "auto" });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [defaultRoute]);
  return [route, setRoute];
}

export default App;
export { App };
