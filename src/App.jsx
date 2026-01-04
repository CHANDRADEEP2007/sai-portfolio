import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight, BookOpen } from "lucide-react";

/* ============================================================================
   Portfolio SPA — colorful & clear
   ==========================================================================*/

const DATA = {
  identity: {
    name: "Venkata Sai Chandradeep Telaprolu",
    location: "USA",
    email: "chandradeep.msba@gmail.com",
    phone: "502-298-6263",
    links: {
      resume: "/resume.pdf",
      linkedin:
        "https://www.linkedin.com/in/venkata-sai-chandradeep-telaprolu-b0a568154/",
      medium: "https://medium.com/@chandradeepsai96",
    },
  },

  /* ---------------- Project case studies ---------------- */
  projects: [
    {
      id: "fast-track-onboarding-stp",
      title: "Fast-Track Onboarding for Digital Banking",
      context:
        "Digital banking onboarding across web and mobile for startup and mid-market clients, covering Wires, ACH, RTP, and Check Deposits with back-office integrations.",
      role: "Platform Product Manager – J.P. Morgan Payments",
      summary:
        "Cut onboarding from ~72 hours–1 week to under 1 hour for startups and mid-market clients, while scaling adoption to 180+ clients and 45 sub-products.",
      problem:
        "Onboarding was slow and manual (72 hours–1 week) due to repeated handoffs, missing information, and inconsistent data capture, leading to high rework and support load.",
      solution:
        "Standardized onboarding workflow with upfront validation, pre-populated fields, guided data capture, and automated assignment/acceptance steps tied to back-office APIs.",
      stpAutomation:
        "Moved validation and routing to straight-through paths, reduced manual gatekeeping, and introduced self-serve definition updates for routine changes.",
      impact: [
        "Reduced onboarding time from ~72 hours–1 week to under 1 hour for target clients.",
        "Reduced onboarding submission failures by 90% using pre-populated fields and upfront validation.",
        "Lowered rework by 62% with automated assignment and acceptance steps.",
        "Scaled adoption from 45 clients / 15 products to 180 clients / 45 sub-products; now supports 48 products and 15 back-office API integrations.",
        "Drove platform usage across 1,500+ users and 68 teams globally.",
      ],
      ownership: [
        "Own the catalog/product definition layer as a single source of truth for onboarding systems, reducing duplicate builds and engineering spend.",
        "Built a self-serve, prompt-driven authoring tool for product owners, cutting onboarding tickets by ~80% for the segment.",
        "Enabled publish-once, reuse-everywhere definitions across onboarding platforms with automated approvals and notifications.",
      ],
      aiGuardrails: [
        "Intake Quality Copilot suggests missing fields, detects inconsistencies, and recommends next-best actions.",
        "Confidence thresholds prevent auto-writes; recommendations only at low confidence.",
        "Audit trail and human override required for approvals and edge cases.",
      ],
      learnings:
        "Optimized for speed while preserving controls with clear approvals; routed low-confidence cases to manual review.",
    },
    {
      id: "catalog-product-definition-layer",
      title: "Catalog / Product Definition Layer (Single Source of Truth)",
      backstoryUrl:
        "https://medium.com/@chandradeepsai96/how-i-went-from-data-warehouses-to-building-a-product-platform-815709b0ebcd",
      mvpUrl: "https://chandradeep2007.github.io/product-definition-developer/",
      context:
        "48+ products, 15+ downstream API integrations, and multiple onboarding systems needing consistent definitions.",
      role: "Platform PM leading governance, reusable components, and definition propagation.",
      problem:
        "Definitions were scattered across teams, creating ticket backlogs, inconsistent experiences, and duplicate builds.",
      solution:
        "Central definition platform with reusable components, governance workflows, and API-driven propagation across channels.",
      stpAutomation:
        "Standardized rules and automated propagation so changes published once flowed to downstream systems.",
      impact: [
        "Onboarding tickets reduced by 80% for the supported segment.",
        "Faster product updates through self-serve changes and shared components.",
        "Engineering effort reduced by ~50% via reusable templates.",
      ],
      aiGuardrails: [
        "Catalog Copilot suggests field definitions, rules, and downstream impacts.",
        "Automated approval routing for risk/finance/compliance-sensitive fields.",
        "Audit logs and human approval for high-impact changes.",
      ],
      learnings:
        "Shipped governance and authoring workflows first, then expanded analytics to drive adoption.",
    },
    {
      id: "prompt-driven-authoring-tool",
      title: "Prompt-Driven Authoring Tool for Product Owners",
      backstoryUrl:
        "https://medium.com/@chandradeepsai96/how-i-went-from-data-warehouses-to-building-a-product-platform-815709b0ebcd",
      context:
        "Self-serve authoring for product definitions to reduce manual ticketing and accelerate onboarding updates.",
      role: "PM owner for workflow design, AI assist, and governance.",
      problem:
        "Product owners depended on engineering tickets for definition updates, slowing launches and increasing rework.",
      solution:
        "Prompt-driven authoring with validation, change previews, and automated Jira creation for multi-team approvals.",
      stpAutomation:
        "Automated routine definition updates and approvals, reducing manual handoffs for standard changes.",
      impact: [
        "Onboarding tickets reduced by 80% for supported changes.",
        "Definition updates moved from weeks to days with controlled governance.",
        "Improved adoption with guided templates and guardrails.",
      ],
      aiGuardrails: [
        "Confidence scoring for suggested edits with manual approval required for high-risk fields.",
        "Audit trail for every change with rollback and override options.",
      ],
      learnings:
        "Balanced speed with compliance by separating low-risk templates from high-risk approvals.",
    },
    {
      id: "checkout-funnel-optimization",
      title: "Digital Ordering & Payments – Checkout Funnel",
      context:
        "Digital ordering funnel across web and mobile with multiple payment gateways and tender types.",
      role: "Product Analyst (Acting Associate PM) – Yum! Brands",
      summary:
        "Owned the end-to-end checkout funnel and payment analytics across web and mobile to improve payment completion.",
      problem:
        "Drop-offs, declines, and timeouts were hard to diagnose with limited instrumentation.",
      solution:
        "Instrumented funnel events, analyzed failure patterns by device/browser/gateway, and ran experiments on messaging and retry flows.",
      stpAutomation:
        "Automated failure classification and routing to accelerate diagnosis and reduce manual triage.",
      impact: [
        "Owned the funnel from menu → cart → checkout → payment → confirmation, surfacing drop-offs and root causes.",
        "Analyzed declines, timeouts, and retries by device, browser, tender type, and gateway response; turned insights into engineering priorities.",
        "Supported A/B tests for error messaging, retries, and saved payment/guest flows; delivered dashboards and launch readouts to influence roadmap and sprints.",
      ],
      aiGuardrails: [
        "Experiment Planner suggests hypotheses and instrumentation with required tracking checklists.",
        "Alerts include recommended remediation playbooks with human validation.",
      ],
      learnings:
        "Focused on highest-impact tender types before expanding to long-tail payment methods.",
    },
    {
      id: "automated-analytics-pipelines",
      title: "Automated Analytics Pipelines (Reguss Consulting)",
      context:
        "Marketing and sales analytics with recurring reporting across multiple business units.",
      role: "Analytics consultant automating data pipelines and KPI frameworks.",
      problem:
        "Manual reporting slowed decision-making and created inconsistent KPI definitions.",
      solution:
        "Automated SQL/PySpark/Airflow pipelines with standardized KPI scorecards and dashboards.",
      stpAutomation:
        "Scheduled workflows and data quality checks replaced manual reporting cycles.",
      impact: [
        "Report turnaround time reduced by 30%.",
        "Improved consistency with shared KPI hierarchies and scorecards.",
      ],
      aiGuardrails: [
        "Data quality checks with alerting before publishing reports.",
        "Human review for outlier flags or pipeline failures.",
      ],
      learnings:
        "Prioritized reliable automation to build trust before expanding advanced analytics.",
    },
    {
      id: "payments-sales-analytics-data-platform",
      title: "Payments Sales Data Product (CRM → Redshift)",
      associatedRole:
        "Associated Role: Product Manager, Analytics Solutions – JPMC (Aug 2022 – Mar 2024)",
      context:
        "Enterprise Payments Sales organization requiring trusted, reusable sales data across multiple Lines of Business.",
      role: "Product Manager, Analytics Solutions – J.P. Morgan",
      summary:
        "Owned the payments sales data product end-to-end, from CRM sources through Redshift modeling, as a single reliable source for sales reporting.",
      problem:
        "Sales data fragmented across CRM objects with inconsistent definitions, manual reporting effort, and limited reuse for analytics and ML.",
      solution:
        "Built a governed analytics data product by defining metadata, data dictionaries, ingestion requirements, and analytics-ready models in Amazon Redshift.",
      stpAutomation:
        "Standardized data ingestion and modeling pipelines to eliminate manual report creation and ad-hoc data pulls.",
      aiEnablement: [
        "Enabled ML and Analytics teams to consume clean, governed sales data for modeling and advanced insights without rework.",
      ],
      impact: [
        "Partnered with CRM product owners to understand objects and processes; designed extraction into Amazon Redshift.",
        "Defined metadata and data dictionaries; modeled datasets and views aligned to analytics and reporting needs.",
        "Embedded governance with stewards and implemented RBAC/IAM plus row-level security so each line of business saw only its data.",
        "Guided analytics and ML teams to the right datasets, ensuring the data product drove actual sales and transformation outcomes.",
      ],
      learnings: "Aligned CRM definitions with analytics consumption to prevent rework.",
    },
    {
      id: "unified-product-intake-platform-ai-personalization",
      title: "Unified Product Intake Platform with AI Personalization",
      backstoryUrl:
        "https://medium.com/@chandradeepsai96/one-door-many-systems-designing-a-product-access-hub-experience-b0246cb08239?postPublishedType=repub",
      context:
        "Users had to navigate multiple digital platforms to discover and request products.",
      role: "Platform PM leading unified intake discovery and AI personalization.",
      problem:
        "A fragmented discovery experience led to duplicated effort and high drop-off rates during intake.",
      solution:
        "Designed a Unified Intake UI aggregating products from multiple platforms into a single experience.",
      platformSignal: [
        "One entry point → multiple underlying systems.",
        "Shared capability adopted across teams and organizations.",
      ],
      digitalExperienceImpact:
        "Reduced tool hopping and simplified a multi-step digital journey.",
      stpAutomation:
        "Built an AI bot that personalizes recommendations: Individual Contributors see role-relevant products; Managers see team-level options and insights.",
      aiEnablement: [
        "Applied AI for role-based personalization, embedded directly into workflows.",
      ],
      impact: [
        "Reduced intake flow drop-offs by 14%.",
        "Drove cross-org adoption (add team/org counts when available).",
      ],
      learnings: "Scaled role-based personalization while keeping discovery consistent.",
      associatedRoleFooter: "Associated Role: Platform Product Manager – J.P. Morgan Chase & Co.",
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
      tag: "AI / Analytics",
      url: "https://www.coursera.org/account/accomplishments/verify/MASE9K7S8AY4",
    },
    {
      name: "SAS – University of Louisville Joint Certificate in Data Analytics",
      org: "SAS & University of Louisville (Credly)",
      year: "Sep 2022",
      area: "Analytics",
      tag: "Data Platforms",
      url: "https://www.credly.com/badges/9320c9e0-c9a5-4665-b1ec-f9e26bdc9888/linked_in_profile",
    },
    {
      name: "AWS Certified Solutions Architect – Associate",
      org: "Amazon Web Services (Credly)",
      year: "Feb 2024",
      area: "Cloud",
      tag: "Cloud",
      url: "https://www.credly.com/badges/a0f5519a-88b0-4fa4-a65e-ac5772d0edeb",
    },
  ],

  education: [
    {
      degree: "Executive MBA, University of the Cumberlands",
      location: "Williamsburg, Kentucky",
    },
    {
      degree: "MS, Business Analytics, University of Louisville",
      location: "Louisville, Kentucky",
    },
    {
      degree: "B. Tech, Computer Science, Bharath University",
      location: "Chennai, India",
    },
  ],

  aiHighlights: [
    {
      title: "Intake Quality Copilot",
      description: "Improve submission quality before routing by catching missing fields.",
    },
    {
      title: "Product Definition Copilot",
      description: "Draft reusable definitions and flag downstream impacts for approval.",
    },
    {
      title: "Experiment Planner",
      description: "Propose hypotheses, variants, and instrumentation for checkout fixes.",
    },
    {
      title: "Ops Insights",
      description: "Surface STP coverage, bottlenecks, and guardrail exceptions.",
    },
    {
      title: "Governed Analytics Platforms",
      description: "Governed analytics platforms enabling AI and automation.",
    },
    {
      title: "Role-based AI Personalization",
      description: "Role-based AI personalization embedded directly into platform workflows.",
    },
  ],

  /* ===========================
     EXPERIENCE (with added bullets)
     =========================== */
  experience: [
    {
      company: "J.P. Morgan Chase & Co.",
      role: "Platform Product Manager — J.P. Morgan Payments",
      location: "USA",
      period: "Apr 2024 - Present",
      scope:
        "Own fast-track onboarding for JPMorgan’s Digital Banking platform (web + app), enabling activation for Wires, ACH, RTP, and Check Deposits across dependent APIs and back-office systems.",
      outcomes: [
        "Reduced onboarding time from ~72 hours–1 week to under 1 hour, while scaling adoption to 180+ clients and 45 sub-products.",
        "Reduced submission failures by 90% and rework by 62% through pre-populated fields, upfront validation, and automated workflows.",
        "Owned the catalog/product definition layer as a single source of truth; built self-serve authoring and publish-once reuse for onboarding systems.",
      ],
      tags: ["Platform", "Digital", "AI", "STP", "Automation", "Governance"],
      projectLinks: [
        { label: "Fast-Track Onboarding", id: "fast-track-onboarding-stp" },
        { label: "Catalog/Product Definition Layer", id: "catalog-product-definition-layer" },
        { label: "Prompt-Driven Authoring Tool", id: "prompt-driven-authoring-tool" },
      ],
    },
    {
      company: "J.P. Morgan Chase & Co. – Product Sales",
      role: "Product Manager, Analytics Solutions — J.P. Morgan",
      location: "USA",
      period: "Aug 2022 – Mar 2024",
      scope:
        "Owned the Payments sales data product end-to-end from CRM source systems through ingestion, modeling, and publishing in Amazon Redshift as a single reliable source for sales reporting.",
      outcomes: [
        "Partnered with CRM product owners to understand objects and processes; designed extraction into Amazon Redshift.",
        "Defined metadata and data dictionaries; modeled datasets and views aligned to analytics and reporting needs.",
        "Embedded governance with stewards and implemented RBAC/IAM plus row-level security for each line of business.",
      ],
      tags: [
        "Data Platform",
        "Analytics Product",
        "Governance & Security",
        "AI Readiness",
        "Sales Enablement",
      ],
      projectLinks: [
        {
          label: "Payments Sales Data Product",
          id: "payments-sales-analytics-data-platform",
        },
      ],
    },
    {
      company: "Yum! Brands (USA)",
      role: "Product Analyst (Acting Associate PM) — Yum! Brands",
      location: "USA",
      period: "Oct 2021 - Jun 2022",
      scope:
        "Owned the checkout funnel view (menu → cart → checkout → payment → confirmation) across web and mobile to surface drop-offs and guide payments improvements.",
      outcomes: [
        "Owned the funnel from menu → cart → checkout → payment → confirmation, surfacing drop-offs and root causes.",
        "Analyzed declines, timeouts, and retries by device, browser, tender type, and gateway response; turned insights into engineering priorities.",
        "Supported A/B tests for error messaging, retries, and saved payment/guest flows; delivered dashboards and launch readouts.",
      ],
      tags: ["Digital", "Analytics", "Payments", "Experimentation"],
      projectLinks: [{ label: "Checkout Funnel Optimization", id: "checkout-funnel-optimization" }],
    },
    {
      company: "Reguss Consulting (India)",
      role: "Analytics Consultant",
      location: "India",
      period: "Jun 2020 - Oct 2021",
      scope:
        "Built analytics platforms for marketing and sales teams, focusing on automation and KPI governance.",
      outcomes: [
        "Built lead-scoring models and campaign dashboards to focus sales on high-propensity clients.",
        "Automated data pipelines using SQL, PySpark, and Airflow; reduced report turnaround time by 30%.",
        "Created KPI hierarchies and scorecards for marketing and sales performance tracking.",
        "Helped business leaders shift from manual reporting to automated analytics workflows.",
      ],
      tags: ["Automation", "Analytics", "Data Products"],
      projectLinks: [{ label: "Automated Analytics Pipelines", id: "automated-analytics-pipelines" }],
    },
    {
      company: "Dell Technologies",
      role: "Business Development Intern — Sales",
      location: "USA",
      period: "Jan 2019 - Jan 2020",
      scope:
        "Supported sales segmentation, territory planning, and forecasting with TAM/SAM sizing and competitive mapping.",
      outcomes: [
        "Built weekly pipeline and forecast views (Excel/Power BI from CRM) to improve stage hygiene and forecast accuracy.",
        "Assisted win/loss reviews, tagging reasons and surfacing pricing/packaging patterns to inform sales plays.",
        "Created enablement assets (battlecards, one-pagers, ROI inputs) to sharpen messaging and speed deals.",
      ],
      tags: ["Go-to-Market", "Analytics"],
      projectLinks: [],
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
/* ---------------- Router + Pages ---------------- */
const ROUTES = [
  "home",
  "experience",
  "projects",
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
          {link("experience", "Experience")}
          {link("projects", "Projects")}
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
      <SectionTitle
        title="Platform Product Manager – Digital • AI • Data"
        intro="Platform PM with 5+ years building ML/AI, onboarding, catalog/metadata, payments/checkout, and data platforms across JPMorgan and Yum! Brands."
      />
      <div className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-sm ring-1 ring-indigo-100 backdrop-blur">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Venkata Sai Chandradeep Telaprolu
        </p>
        <p className="max-w-3xl text-sm text-slate-700">
          I build platform and digital journeys that convert manual intake into reliable, API-driven workflows. My focus is on reusable primitives, data contracts, and governance so teams can move faster, reduce rework, and ship measurable impact at scale.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white"
            href="#/experience"
          >
            View Experience
          </a>
          <a className="rounded-full border px-4 py-2 text-xs font-semibold" href="#/projects">
            View Projects
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold"
            href={identity.links.medium}
            target="_blank"
            rel="noreferrer"
          >
            <BookOpen className="h-4 w-4" />
            Download Resume
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold"
            href={identity.links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold"
            href={identity.links.medium}
            target="_blank"
            rel="noreferrer"
          >
            <BookOpen className="h-4 w-4" />
            Medium
          </a>
        </div>

        {/* KPI tiles */}
        <div className="mt-6">
          <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Impact at a glance
          </div>
          <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
          <Stat
            label="Onboarding time"
            value="~72 hours–1 week → < 1 hour"
            className="bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200"
          />
          <Stat
            label="Submission failures"
            value="↓ 90% with pre-filled + validation"
            className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200"
          />
          <Stat
            label="Rework reduction"
            value="↓ 62% with automation"
            className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200"
          />
          <Stat
            label="Adoption scale"
            value="45 → 180 clients · 15 → 45 sub-products"
            className="bg-gradient-to-br from-rose-50 to-rose-100 border-rose-200"
          />
          </div>
        </div>
        <div className="mt-8">
          <SectionTitle
            title="About"
            intro="Platform PM with 5+ years in digital product roles across JPMorgan and Yum! Brands. Focus areas include onboarding, payments/checkout, catalog/metadata, workflow automation, and AI-enabled platforms. Tech fluency spans Redshift/SQL, dbt, Airflow, feature stores & ML handoffs, RBAC/row-level security, and observability with SLAs."
          />
        </div>

        <div id="ai-work" className="mt-10">
          <SectionTitle
            title="AI + Automation Highlights"
            intro="Productized AI capabilities that improve intake quality, authoring speed, and operational visibility."
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {DATA.aiHighlights.map((item) => (
              <Card key={item.title} title={item.title}>
                <p className="text-sm text-gray-700">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CertificationsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <SectionTitle
        title="Certifications"
        intro="Verifiable credentials supporting platform, data, and AI product leadership."
      />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {DATA.certifications.map((c) => (
          <Card
            key={c.name}
            title={c.name}
            action={c.url ? <LinkButton href={c.url}>Verify</LinkButton> : null}
            footer={
              <div className="text-gray-500">
                {c.org} · {c.year} · {c.area}
                {c.tag ? ` · ${c.tag}` : ""}
              </div>
            }
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
function ExperiencePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <SectionTitle
        title="Experience"
        intro="Resume-aligned roles and outcomes across platform, digital, and data product leadership."
      />
      <div className="space-y-6">
        {DATA.experience.map((role) => (
          <Card
            key={`${role.company}-${role.role}`}
            title={`${role.company} · ${role.role}`}
            footer={<div className="text-gray-500">{role.period} · {role.location}</div>}
          >
            <p className="text-sm text-gray-700">
              <span className="font-semibold text-slate-800">Leadership scope:</span> {role.scope}
            </p>
            <div className="mt-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Outcomes</div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
                {role.outcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {role.tags.map((tag) => (
                <Pill key={tag}>{tag}</Pill>
              ))}
            </div>
            {role.projectLinks.length > 0 ? (
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                <span className="text-slate-600">Related projects:</span>
                {role.projectLinks.map((link) => (
                  <LinkButton key={link.id} href={`#/projects?project=${link.id}`}>
                    {link.label}
                  </LinkButton>
                ))}
              </div>
            ) : null}
          </Card>
        ))}
      </div>
      <div className="mt-8">
        <Card title="Education">
          <div className="space-y-4 text-sm text-gray-700">
            {DATA.education.map((item) => (
              <div key={item.degree}>
                <div className="font-semibold text-slate-800">{item.degree}</div>
                <div className="text-gray-600">{item.location}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

function ProjectsPage() {
  const getProjectFromHash = () => {
    if (typeof window === "undefined") return "";
    const [, query] = window.location.hash.split("?");
    if (!query) return "";
    const params = new URLSearchParams(query);
    return params.get("project") || "";
  };
  const [activeId, setActiveId] = useState(() => getProjectFromHash());

  useEffect(() => {
    const onHashChange = () => {
      if (window.location.hash.startsWith("#/projects")) {
        setActiveId(getProjectFromHash());
      }
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const toggleProject = (id) => {
    const nextId = activeId === id ? "" : id;
    setActiveId(nextId);
    window.location.hash = nextId ? `#/projects?project=${nextId}` : "#/projects";
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <SectionTitle
        title="Projects"
        intro="Deep case studies with context, problems, solutions, STP automation, and AI guardrails."
      />
      <div className="space-y-4">
        {DATA.projects.map((project) => {
          const isOpen = activeId === project.id;
          return (
            <div key={project.id} className="rounded-2xl border border-slate-200 bg-white/90 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
                <button
                  className="flex min-w-0 flex-1 items-center gap-4 text-left"
                  onClick={() => toggleProject(project.id)}
                  aria-expanded={isOpen}
                  aria-controls={`project-${project.id}`}
                  type="button"
                >
                  <span className="text-xs font-semibold text-indigo-600">
                    {isOpen ? "Hide details" : "View case study"}
                  </span>
                  <div className="min-w-0">
                    <div className="truncate text-base font-semibold text-slate-900">{project.title}</div>
                    <div className="text-xs text-slate-600">{project.role}</div>
                    {project.summary ? (
                      <div className="mt-1 text-xs text-slate-600">{project.summary}</div>
                    ) : null}
                  </div>
                </button>
                {project.backstoryUrl ? (
                  <a
                    className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
                    href={project.backstoryUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BookOpen className="h-3.5 w-3.5" />
                    Backstory
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                ) : null}
                {project.mvpUrl ? (
                  <a
                    className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
                    href={project.mvpUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    MVP
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                ) : null}
              </div>
              {isOpen ? (
                <div id={`project-${project.id}`} className="border-t border-slate-200 px-5 py-5 text-sm text-slate-700">
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Context</div>
                      {project.associatedRole ? (
                        <p className="mt-2 text-xs font-semibold text-slate-500">{project.associatedRole}</p>
                      ) : null}
                      <p className="mt-2">{project.context}</p>
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Problem</div>
                      <p className="mt-2">{project.problem}</p>
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Solution</div>
                      <p className="mt-2">{project.solution}</p>
                    </div>
                    {project.platformSignal ? (
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Platform Signal</div>
                        <ul className="mt-2 list-disc space-y-1 pl-5">
                          {project.platformSignal.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                    {project.digitalExperienceImpact ? (
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                          Digital Experience Impact
                        </div>
                        <p className="mt-2">{project.digitalExperienceImpact}</p>
                      </div>
                    ) : null}
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">STP & Automation</div>
                      <p className="mt-2">{project.stpAutomation}</p>
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Impact</div>
                      <ul className="mt-2 list-disc space-y-1 pl-5">
                        {project.impact.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    {project.ownership ? (
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Platform Ownership</div>
                        <ul className="mt-2 list-disc space-y-1 pl-5">
                          {project.ownership.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                    <div>
                      {project.aiEnablement ? (
                        <>
                          <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">AI Enablement</div>
                          <ul className="mt-2 list-disc space-y-1 pl-5">
                            {project.aiEnablement.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <>
                          <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">AI Guardrails</div>
                          <ul className="mt-2 list-disc space-y-1 pl-5">
                            {project.aiGuardrails.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Learnings / Tradeoffs</div>
                      <p className="mt-2">{project.learnings}</p>
                    </div>
                    {project.associatedRoleFooter ? (
                      <div className="text-xs font-semibold text-slate-500">
                        {project.associatedRoleFooter}
                      </div>
                    ) : null}
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ContactPage() {
  const { identity } = DATA;
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <SectionTitle
        title="Contact"
        intro="Open to conversations about Platform PM, AI PM, Data Products, and FinTech opportunities."
      />
      <div className="rounded-2xl border bg-white/90 p-6 text-sm backdrop-blur">
        <p className="mb-4 text-xs text-slate-600">
          Open to Platform PM, Data Product PM, and AI PM roles focused on automation, STP, and AI-enabled workflows.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <div className="flex items-center gap-2"><Mail className="h-4 w-4" /><a className="underline" href={`mailto:${identity.email}`}>{identity.email}</a></div>
            <div className="flex items-center gap-2"><Phone className="h-4 w-4" />{identity.phone}</div>
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4" />{identity.location}</div>
          </div>
          <div className="space-y-2">
            <a
              className="inline-flex items-center gap-1 underline"
              href={identity.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              className="inline-flex items-center gap-1 underline"
              href={identity.links.medium}
              target="_blank"
              rel="noreferrer"
            >
              <BookOpen className="h-4 w-4" />
              Download Resume
            </a>
            <a
              className="inline-flex items-center gap-1 underline"
              href={identity.links.medium}
              target="_blank"
              rel="noreferrer"
            >
              <BookOpen className="h-4 w-4" />
              Medium
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- App shell ---------------- */
const PAGES = {
  home: HomePage,
  experience: ExperiencePage,
  projects: ProjectsPage,
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
    const r = h.replace(/^#\/?/, "").split("?")[0];
    return ROUTES.includes(r) ? r : defaultRoute;
  });
  useEffect(() => {
    const onHash = () => {
      const r = window.location.hash.replace(/^#\/?/, "").split("?")[0];
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
