import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight } from "lucide-react";

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
    },
  },

  /* ---------------- Project case studies ---------------- */
  projects: [
    {
      id: "fast-track-onboarding-stp",
      title: "Fast-Track Onboarding STP (Digital Banking Platform)",
      context:
        "Digital banking onboarding across web and mobile for startup and mid-market clients, covering Wires, ACH, RTP, and Check Deposits with back-office integrations.",
      role: "Product owner responsible for workflow design, prioritization, adoption, and cross-functional delivery.",
      problem:
        "Onboarding was slow and manual (72 hours–1 week) due to repeated handoffs, missing information, and inconsistent data capture, leading to high rework and support load.",
      solution:
        "Standardized onboarding workflow with upfront validation, pre-populated fields, guided data capture, and automated assignment/acceptance steps tied to back-office APIs.",
      stpAutomation:
        "Moved validation and routing to straight-through paths, reduced manual gatekeeping, and introduced self-serve definition updates for routine changes.",
      impact: [
        "Onboarding time reduced from 72 hours–1 week to under 1 hour.",
        "Submission failures reduced by 90% and rework lowered by 62%.",
        "Onboarding tickets reduced by 80% for the supported segment.",
        "Scaled adoption from 45 clients/15 products to 180 clients/45 sub-products.",
        "Improved release stability by reducing workflow breakages and cycle-time variance.",
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
      title: "Checkout Funnel Optimization (Yum!)",
      context:
        "Digital ordering funnel across web and mobile with multiple payment gateways and tender types.",
      role: "Associate PM focused on instrumentation, analysis, and experimentation.",
      problem:
        "Drop-offs, declines, and timeouts were hard to diagnose with limited instrumentation.",
      solution:
        "Instrumented funnel events, analyzed failure patterns by device/browser/gateway, and ran experiments on messaging and retry flows.",
      stpAutomation:
        "Automated failure classification and routing to accelerate diagnosis and reduce manual triage.",
      impact: [
        "Improved checkout completion via targeted experiments and fixes.",
        "Real-time visibility into failures for faster operational response.",
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
      title: "Payments Sales Analytics Data Platform (CRM → Redshift)",
      associatedRole:
        "Associated Role: Product Manager, Analytics Solutions – JPMC (Aug 2022 – Mar 2024)",
      context:
        "Enterprise Payments Sales organization requiring trusted, reusable sales data across multiple Lines of Business.",
      role: "Product Manager owning CRM-to-Redshift analytics data product delivery.",
      problem:
        "Sales data fragmented across CRM objects with inconsistent definitions, manual reporting effort, and limited reuse for analytics and ML.",
      solution:
        "Built a governed analytics data product by defining metadata, data dictionaries, ingestion requirements, and analytics-ready models in Amazon Redshift.",
      stpAutomation:
        "Standardized data ingestion and modeling pipelines to eliminate manual report creation and ad-hoc data pulls.",
      impact: [
        "Established a single source of truth for Payments sales reporting.",
        "Reduced manual reporting effort and clarification cycles.",
        "Improved adoption and trust across Sales, Analytics, and ML teams.",
      ],
      aiEnablement: [
        "Enabled ML and Analytics teams to consume clean, governed sales data for modeling and advanced insights without rework.",
      ],
      learnings: "Aligned CRM definitions with analytics consumption to prevent rework.",
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
      title: "Checkout Funnel Optimization (Yum!)",
      context:
        "Digital ordering funnel across web and mobile with multiple payment gateways and tender types.",
      role: "Associate PM focused on instrumentation, analysis, and experimentation.",
      problem:
        "Drop-offs, declines, and timeouts were hard to diagnose with limited instrumentation.",
      solution:
        "Instrumented funnel events, analyzed failure patterns by device/browser/gateway, and ran experiments on messaging and retry flows.",
      stpAutomation:
        "Automated failure classification and routing to accelerate diagnosis and reduce manual triage.",
      impact: [
        "Improved checkout completion via targeted experiments and fixes.",
        "Real-time visibility into failures for faster operational response.",
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
      description: "Enable AI and automation with trusted, reusable data foundations.",
    },
  ],

  /* ===========================
     EXPERIENCE (with added bullets)
     =========================== */
  experience: [
    {
      company: "J.P. Morgan Chase & Co.",
      role: "Platform Product Manager — Payments",
      location: "USA",
      period: "Apr 2024 - Present",
      scope:
        "Own fast-track onboarding for JPMorgan’s Digital Banking platform (web + app), enabling activation for Wires, ACH, RTP, and Check Deposits across dependent APIs and back-office systems.",
      outcomes: [
        "Drove straight-through onboarding by pre-populating required fields and adding upfront validation; reduced submission failures by 90% and rework by 62%.",
        "Cut onboarding cycle time from ~72 hours–1 week to under 1 hour by removing manual handoffs and standardizing workflow execution.",
        "Improved release predictability by automating assignment and acceptance steps; reduced workflow breakages and lowered cycle-time variance.",
        "Scaled adoption from 45 clients/15 products to 180 clients/45 sub-products; supported 48 products and 15 back-office API integrations.",
        "Owned the Catalog/Product Definition layer as a single source of truth across onboarding systems to reduce duplicate builds and engineering spend.",
        "Built a self-serve, prompt-driven authoring tool for Product Owners; reduced onboarding tickets by 80% for the supported segment.",
        "Enabled publish-once, reuse-everywhere by integrating definition changes across onboarding platforms for consistent experiences.",
      ],
      tags: ["Platform", "Digital", "AI", "STP", "Automation", "Governance"],
      projectLinks: [
        { label: "Fast-Track Onboarding STP", id: "fast-track-onboarding-stp" },
        { label: "Catalog/Product Definition Layer", id: "catalog-product-definition-layer" },
        { label: "Prompt-Driven Authoring Tool", id: "prompt-driven-authoring-tool" },
      ],
    },
    {
      company: "J.P. Morgan Chase & Co. – Product Sales",
      role: "Product Manager, Analytics Solutions",
      location: "USA",
      period: "Aug 2022 – Mar 2024",
      scope:
        "Owned the Payments sales data product end-to-end from CRM source systems through ingestion, modeling, and publishing in Amazon Redshift as a single reliable source for sales reporting.",
      outcomes: [
        "Partnered with CRM Product Owners to understand sales objects and processes; defined metadata and data dictionaries and coordinated extraction into the data platform.",
        "Wrote and prioritized user stories for CRM and ingestion teams; collaborated with data engineering to model datasets and publish analytics-ready views.",
        "Embedded governance by design by working with data stewards on quality and lineage, and implementing RBAC/IAM and row-level security across Lines of Business.",
        "Participated in product strategy discussions and translated sales data into insights supporting sales leaders and transformation initiatives.",
        "Managed the Jira backlog and continuously re-prioritized stories to deliver the highest-value analytics capabilities first.",
        "Monitored usage and adoption and guided teams to the right datasets to ensure the data product delivered measurable business impact.",
        "Hosted bi-weekly working sessions with Analytics and ML/Data Science teams to clarify field definitions, introduce new data, and coordinate fixes with CRM, Tech, and platform owners.",
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
          label: "Payments Sales Analytics Data Platform",
          id: "payments-sales-analytics-data-platform",
        },
      ],
    },
    {
      company: "Yum! Brands (USA)",
      role: "Product Analyst (Associate Product Manager)",
      location: "USA",
      period: "Oct 2021 - Jun 2022",
      scope:
        "Owned the checkout funnel view (menu → cart → checkout → payment → confirmation) across web and mobile to surface drop-offs and guide payments improvements.",
      outcomes: [
        "Analyzed declines, timeouts, and retries by device/browser/order type and gateway response; translated insights into engineering priorities.",
        "Partnered with engineering to improve tracking/instrumentation so release impact could be measured confidently.",
        "Supported A/B tests and pilots (error messaging, retries, saved payment, guest flow) and shared results to guide rollouts.",
        "Balanced customer experience with payments controls and reliability by aligning Product, Design, Ops, and Risk/Compliance.",
        "Delivered dashboards and launch readouts to support roadmap and sprint decisions.",
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
        title="Sai Chandradeep"
        intro="Platform + Digital Product Manager leader driving AI-enabled automation, straight-through processing, and reduction of manual work."
      />
      <div className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-sm ring-1 ring-indigo-100 backdrop-blur">
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
          <a className="rounded-full border px-4 py-2 text-xs font-semibold" href={identity.links.resume} download>
            Download Resume
          </a>
          <a className="rounded-full border px-4 py-2 text-xs font-semibold" href={identity.links.linkedin}>
            LinkedIn
          </a>
        </div>

        {/* KPI tiles */}
        <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
          <Stat
            label="Onboarding time reduced"
            value="< 1 hour"
            className="bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200"
          />
          <Stat
            label="Submission failures reduced"
            value="↓ 90%"
            className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200"
          />
          <Stat
            label="Rework reduction"
            value="↓ 62%"
            className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200"
          />
          <Stat
            label="Onboarding tickets reduced"
            value="↓ 80%"
            className="bg-gradient-to-br from-rose-50 to-rose-100 border-rose-200"
          />
        </div>
        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
          <Stat
            label="Scale proof"
            value="45 → 180 clients | 15 → 45 sub-products"
            className="bg-gradient-to-br from-sky-50 to-sky-100 border-sky-200"
          />
          <Stat
            label="Integrations supported"
            value="48 products · 15 back-office APIs"
            className="bg-gradient-to-br from-violet-50 to-violet-100 border-violet-200"
          />
        </div>
        <p className="mt-4 text-xs text-slate-600">
          Owned CRM → Redshift Sales Analytics Platform with governance (RBAC, lineage) to support reporting and ML use cases.
        </p>

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
        intro="Role-based leadership scope and outcomes across platform, digital, and automation initiatives."
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
              <button
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                onClick={() => toggleProject(project.id)}
                aria-expanded={isOpen}
                aria-controls={`project-${project.id}`}
                type="button"
              >
                <div>
                  <div className="text-base font-semibold text-slate-900">{project.title}</div>
                  <div className="text-xs text-slate-600">{project.role}</div>
                </div>
                <span className="text-xs font-semibold text-indigo-600">
                  {isOpen ? "Hide details" : "View case study"}
                </span>
              </button>
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
                      <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Context</div>
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
                      <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">AI Guardrails</div>
                      <ul className="mt-2 list-disc space-y-1 pl-5">
                        {project.aiGuardrails.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Learnings / Tradeoffs</div>
                      <p className="mt-2">{project.learnings}</p>
                    </div>
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
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-700">
              <div className="font-semibold text-slate-800">Role-fit prompts</div>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Discuss Platform PM roles</li>
                <li>Explore AI PM opportunities</li>
                <li>Data Products & Payments roles</li>
              </ul>
            </div>
            <a className="block underline" href={identity.links.linkedin}><Linkedin className="mr-1 inline h-4 w-4" />LinkedIn</a>
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
