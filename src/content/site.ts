// Site content for maheshmoholkar.in

// Compiled from resume/resume-nextjs-python-ai.tex; replace the file in public/ when the resume changes
export const RESUME_PDF = "/Mahesh-Moholkar-Resume.pdf";
export const EMAIL = "mahesh.moholkar.dev@gmail.com";

export type Highlight = string | { lead: string; text: string };
export type Link = { label: string; href: string };

export const SOCIALS: Link[] = [
  { label: "GitHub", href: "https://github.com/maheshmoholkar" },
  { label: "LinkedIn", href: "https://linkedin.com/in/mahesh1822" },
  { label: "X", href: "https://x.com/maheshstwt" },
];

export const hero = {
  name: "Mahesh Moholkar",
  headline: "Software Engineer — Enterprise SaaS & Applied AI",
  location: "Pune, India",
  status: "Open to roles",
  workMode: "Pune / Remote",
  bio: "Designing and shipping multi-tenant ERP platforms, distributed backends, and production LLM systems. Previously architected university-wide platforms serving 8,000+ users; currently building AI-native enterprise workflows across .NET, Python, and React.",
};

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const parseMonth = (ym: string) => {
  const [year, month] = ym.split("-").map(Number);
  return { year, month };
};

/**
 * A role's date range and length from its first and last month ("YYYY-MM"). Months count inclusively,
 * like the resume: Aug 2023 – Sep 2026 is 3 yrs 2 mos.
 */
function tenure(start: string, end: string) {
  const s = parseMonth(start);
  const e = parseMonth(end);
  const total = (e.year - s.year) * 12 + (e.month - s.month) + 1;
  const years = Math.floor(total / 12);
  const months = total % 12;
  const duration = [years ? `${years} ${years === 1 ? "yr" : "yrs"}` : "", months ? `${months} ${months === 1 ? "mo" : "mos"}` : ""]
    .filter(Boolean)
    .join(" ");
  return { dates: `${MONTHS[s.month - 1]} ${s.year} – ${MONTHS[e.month - 1]} ${e.year}`, duration };
}

export type ExperienceItem = {
  company: string;
  title: string;
  /** "Aug 2023 – Sep 2026"; set with tenure() so it always agrees with duration. */
  dates: string;
  /** "3 yrs 2 mos" */
  duration: string;
  location: string;
  summary: string;
  highlights: Highlight[];
  stack?: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Shivam Enterprises",
    title: "Software Engineer (Full-Stack & Applied AI)",
    ...tenure("2023-08", "2026-09"),
    location: "Pune, India",
    summary:
      "Architected a multi-tenant Campus ERP ecosystem (.NET 10, React) and three satellite platforms serving 8,000+ users at sub-400ms p95 peak latency, alongside the platform's Python/FastAPI LLM & RAG microservice.",
    highlights: [
      {
        lead: "Core Platform & Multi-Tenancy:",
        text: "Led the architecture of a multi-tenant university ERP and isolated domain platforms (Admissions, Procurement, Management) serving 8,000+ users across 6 affiliated colleges; brought p95 latency under 400ms at k6 peak load using Redis HybridCache.",
      },
      {
        lead: "Production AI & Hybrid RAG:",
        text: "Built the Python/FastAPI + Next.js AI service powering natural-language reporting over a semantic layer, confidence-gated ticket triage, and a cited helpdesk assistant using hybrid retrieval (pgvector + BM25, Reciprocal Rank Fusion, reranking), RBAC-enforced tool calls, and LLM-as-judge CI evals.",
      },
      {
        lead: "Shared Microservices:",
        text: "Engineered centralized Auth (JWT, OpenIddict, role/menu RBAC) and Notification microservices (Transactional Outbox pattern + Hangfire background workers for email/SMS/push with retries and delivery tracking) consumed across all ERPs.",
      },
      {
        lead: "Observability & Delivery:",
        text: "Established Serilog structured logging with correlation IDs, OpenTelemetry + Grafana dashboards, automated Testcontainers integration pipelines in Azure DevOps, and authored system ADRs and onboarding runbooks.",
      },
    ],
    stack: [
      "ASP.NET Core (.NET 10)",
      "Python (FastAPI)",
      "EF Core",
      "React",
      "Next.js",
      "TypeScript",
      "SQL Server",
      "PostgreSQL (pgvector)",
      "Redis HybridCache",
      "Hangfire",
      "OpenIddict",
      "Serilog",
      "OpenTelemetry",
      "Grafana",
      "Testcontainers",
      "Docker",
      "Azure DevOps",
    ],
  },
  {
    company: "Vision — Multi-Tenant SaaS ERP (GCC Market)",
    title: "Frontend Engineer (Remote)",
    ...tenure("2025-01", "2026-06"),
    location: "Remote",
    summary:
      "Owned the frontend architecture for a multi-tenant GCC SaaS ERP, shipping a shared RTL-first bilingual (English/Arabic) design system across three web applications and a 290+ suite automated testing pipeline.",
    highlights: [
      {
        lead: "Client Data Layer:",
        text: "Designed the routing and state architecture using TanStack Router (loaders, typed search-param filters), TanStack Query (optimistic updates, per-document cache invalidation), Zustand, and real-time SignalR streams.",
      },
      {
        lead: "Financial Workflows & RTL Design System:",
        text: "Built state-driven accounting and inventory modules (edit/post/void state machines, VAT-compliant calculation engines) and a shared English/Arabic RTL component library reused across the core ERP, public storefront, and admin portal.",
      },
      {
        lead: "Release Engineering:",
        text: "Maintained release reliability with 290+ Vitest + Testing Library suites, Playwright E2E smoke tests, and Dockerized GitHub Actions CI/CD deployed on AWS.",
      },
    ],
    stack: [
      "React",
      "TypeScript",
      "TanStack Router",
      "TanStack Query",
      "Zustand",
      "React Hook Form + Zod",
      "SignalR",
      "Tailwind CSS",
      "shadcn/ui",
      "i18next (RTL)",
      "Vitest",
      "Playwright",
      "Docker",
      "AWS",
    ],
  },
  {
    company: "Cloud Native Computing Foundation (CNCF)",
    title: "Open Source Contributor (Zero to Merge Cohort)",
    ...tenure("2023-08", "2023-09"),
    location: "Remote",
    summary:
      "Scoped and shipped upstream contributions to cloud-native and cryptographic open-source systems across Go and Rust ecosystems.",
    highlights: [
      "Selected for CNCF's Zero to Merge program; collaborated with upstream maintainers to scope issues and ship pull requests to Kubernetes-ecosystem projects in Go.",
      "Shipped merged upstream bug fixes to Ockam (Rust) and contributed technical documentation to Kubernetes SIGs and EvalML.",
    ],
  },
];

export type Project = {
  name: string;
  subtitle?: string;
  summary: string;
  highlights: Highlight[];
  stack: string[];
  image: { src: string; width: number; height: number };
  links: Link[];
};

export const flagship: Project = {
  name: "Vyavasay AI ERP",
  subtitle: "Multi-Tenant Accounting, Inventory & AI ERP Platform",
  summary:
    "Production multi-tenant SaaS ERP for Indian SMEs featuring a double-entry general ledger, GST compliance engine, multi-location batch inventory, storefront + Expo mobile app, backed by 370+ integration test suites.",
  highlights: [
    {
      lead: "Core Accounting & Compliance:",
      text: "Architected end-to-end quote-to-cash and procure-to-pay lifecycles, automated double-entry General Ledger postings, and full GST compliance (CGST/SGST/IGST, HSN validation, GSTR return generation).",
    },
    {
      lead: "Inventory & Omnichannel:",
      text: "Built multi-location warehouse tracking with batch/expiry controls, real-time SignalR notifications, background Hangfire jobs, an integrated online storefront, and a cross-platform Expo mobile app.",
    },
    {
      lead: "Engineering Rigor:",
      text: "ADR-driven system design backed by 370+ automated integration test files verifying financial invariants and tenant isolation.",
    },
  ],
  stack: [".NET 10", "EF Core", "PostgreSQL", "React", "TypeScript", "TanStack Router", "Expo", "Hangfire", "SignalR", "Docker", "Railway"],
  image: { src: "/vyavasay.png", width: 1440, height: 900 },
  links: [{ label: "Live", href: "https://vyavasayapp.in/" }],
};

export const projects: Project[] = [
  {
    name: "NextTube",
    summary:
      "End-to-end video ingestion and streaming pipeline with Mux adaptive playback and local LLM workers (Ollama) for automated metadata generation.",
    highlights: [
      "Built an asynchronous media ingestion pipeline integrating Mux for transcoding/HLS streaming and Upstash Redis for rate-limiting and state caching.",
      "Integrated local LLM inference via Ollama to automatically generate contextual titles, descriptions, and thumbnail prompts from video transcripts.",
    ],
    stack: ["React", "TypeScript", "Next.js", "tRPC", "Upstash", "Uploadthing", "TailwindCSS", "Better-Auth", "DrizzleORM", "PostgreSQL", "Mux", "Ollama"],
    image: { src: "/nexttube.png", width: 1897, height: 910 },
    links: [
      { label: "GitHub", href: "https://github.com/MaheshMoholkar/nexttube" },
      { label: "Live", href: "https://nexttube-black.vercel.app/" },
    ],
  },
  {
    name: "Ignite+ LMS",
    summary: "Full-stack learning platform with webhook-verified Razorpay checkout flows, AWS S3 media delivery, and Redis caching.",
    highlights: [
      "Engineered RBAC authentication (Better-Auth), transactional Razorpay payment webhooks, signed AWS S3 asset delivery, and Redis-cached course progress tracking.",
    ],
    stack: ["React", "Next.js", "TypeScript", "TailwindCSS", "Better-Auth", "Razorpay", "Shadcn/ui", "Prisma", "PostgreSQL", "Redis", "AWS S3"],
    image: { src: "/ignite-lms.png", width: 1899, height: 937 },
    links: [
      { label: "GitHub", href: "https://github.com/MaheshMoholkar/ignite-plus-lms" },
      { label: "Live", href: "https://ignite-plus-lms.vercel.app/" },
    ],
  },
];

// Skills index: popular, best-known tools per area, Python/AI first (a market view, not a list of what each project used)
export const stackIndex = [
  { name: "Python", items: ["Python", "FastAPI", "SQLAlchemy"] },
  { name: "LLMs", items: ["OpenAI", "Claude", "Gemini", "Llama"] },
  { name: "Agents & RAG", items: ["LangChain", "LangGraph", "LlamaIndex", "MCP"] },
  { name: "Vector", items: ["pgvector", "Pinecone"] },
  { name: "Evals", items: ["Ragas", "DeepEval", "Langfuse", "LangSmith"] },
  { name: ".NET", items: ["C#", "ASP.NET Core", "EF Core", "SignalR"] },
  { name: "Frontend", items: ["TypeScript", "React", "Next.js", "React Native"] },
  { name: "Data", items: ["PostgreSQL", "SQL Server", "Redis", "MongoDB"] },
  { name: "Cloud & DevOps", items: ["AWS", "Azure", "Docker"] },
];
