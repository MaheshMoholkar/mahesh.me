// Site content for maheshmoholkar.in. Every variant reads from this file, so one edit updates them all.

// Compiled from resume/resume-nextjs-python-ai.tex; replace the file in public/ when the resume changes
export const RESUME_PDF = "/Mahesh-Moholkar-Resume.pdf";
export const EMAIL = "mahesh.moholkar.dev@gmail.com";
export const BLOG = "https://maheshmoholkar.hashnode.dev/";

export type Highlight = string | { lead: string; text: string };
export type Link = { label: string; href: string };

export const SOCIALS: Link[] = [
  { label: "GitHub", href: "https://github.com/maheshmoholkar" },
  { label: "LinkedIn", href: "https://linkedin.com/in/mahesh1822" },
  { label: "X", href: "https://x.com/maheshstwt" },
];

/** Page title, description and canonical address, shared by every variant's layout. */
export const site = {
  title: "Mahesh Moholkar — Software Engineer",
  description:
    "Mahesh Moholkar builds multi-tenant ERP platforms, distributed Python and .NET backends, and production LLM systems. Based in Pune, open to roles.",
  url: "https://maheshmoholkar.in",
};

export const hero = {
  name: "Mahesh Moholkar",
  headline: "Software Engineer — Enterprise SaaS & Applied AI",
  location: "Pune, India",
  status: "Open to roles",
  workMode: "Pune / Remote",
  bio: "Designing and shipping multi-tenant ERP platforms, distributed backends, and production LLM systems. Previously architected university-wide platforms serving 8,000+ users; currently building AI-native enterprise workflows across Next.js/React, Python, and .NET.",
};

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const parseMonth = (ym: string) => {
  const [year, month] = ym.split("-").map(Number);
  return { year, month };
};

/**
 * A role's date range and length from its first and last month ("YYYY-MM"). Months count inclusively,
 * like the resume: Aug 2023 – Sep 2026 is 3 yrs 2 mos. Leave out the end for a current role: it shows
 * "Present" and counts to the month of the build.
 */
function tenure(start: string, end?: string) {
  const s = parseMonth(start);
  const now = new Date();
  const e = end ? parseMonth(end) : { year: now.getFullYear(), month: now.getMonth() + 1 };
  const total = (e.year - s.year) * 12 + (e.month - s.month) + 1;
  const years = Math.floor(total / 12);
  const months = total % 12;
  const duration = [years ? `${years} ${years === 1 ? "yr" : "yrs"}` : "", months ? `${months} ${months === 1 ? "mo" : "mos"}` : ""]
    .filter(Boolean)
    .join(" ");
  const to = end ? `${MONTHS[e.month - 1]} ${e.year}` : "Present";
  return { dates: `${MONTHS[s.month - 1]} ${s.year} – ${to}`, duration };
}

export type ExperienceItem = {
  company: string;
  title: string;
  /** "Aug 2023 – Sep 2026" or "Aug 2023 – Present"; set with tenure() so it always agrees with duration. */
  dates: string;
  /** "3 yrs 2 mos" */
  duration: string;
  location: string;
  summary: string;
  highlights: Highlight[];
  stack?: string[];
  /** Square mark in public/; variants without one fall back to the company's initial. */
  logo?: string;
  /** Credential or company page. */
  link?: Link;
};

export const experience: ExperienceItem[] = [
  {
    company: "Shivam Enterprises",
    title: "Software Engineer (Full-Stack & Applied AI)",
    ...tenure("2023-08"),
    location: "Pune, India",
    summary:
      "Architected a multi-tenant Campus ERP ecosystem (React, .NET 10) and three satellite platforms serving 8,000+ users at sub-400ms p95 peak latency, alongside the platform's Python/FastAPI LLM & RAG microservice.",
    highlights: [
      {
        lead: "Production AI & Hybrid RAG:",
        text: "Built the Python/FastAPI + Next.js AI service powering natural-language reporting over a semantic layer, confidence-gated ticket triage, and a cited helpdesk assistant using hybrid retrieval (pgvector + BM25, Reciprocal Rank Fusion, reranking), RBAC-enforced tool calls, and LLM-as-judge CI evals.",
      },
      {
        lead: "Core Platform & Multi-Tenancy:",
        text: "Led the architecture of a multi-tenant university ERP and isolated domain platforms (Admissions, Procurement, Management) serving 8,000+ users across 6 affiliated colleges; brought p95 latency under 400ms at k6 peak load using Redis HybridCache.",
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
      "Python (FastAPI)",
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL (pgvector)",
      "Redis HybridCache",
      "OpenTelemetry",
      "Grafana",
      "Testcontainers",
      "Docker",
      "Azure DevOps",
      "ASP.NET Core (.NET 10)",
      "EF Core",
      "SQL Server",
      "Hangfire",
      "OpenIddict",
      "Serilog",
    ],
    logo: "/logo.svg",
  },
  {
    company: "Vision — Multi-Tenant SaaS ERP (GCC Market)",
    title: "Frontend Engineer (Part-time, Remote)",
    ...tenure("2025-01", "2026-06"),
    location: "Remote",
    summary:
      "Owned the frontend architecture for a multi-tenant GCC SaaS ERP, shipping a shared RTL-first bilingual (English/Arabic) design system across three web applications.",
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
        text: "Maintained release reliability with Vitest + Testing Library unit tests, Playwright E2E smoke tests, and Dockerized GitHub Actions CI/CD deployed on AWS.",
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
    logo: "/vision.png",
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
    stack: ["Go", "Rust", "Kubernetes", "Open Source"],
    logo: "/cncf.jpeg",
    link: { label: "Credential", href: "https://www.credly.com/badges/c439e57f-40af-461d-af6f-561de418046f" },
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
    "Designed, built and run a live multi-tenant GST ERP for Indian SMEs end to end: React web app, Next.js storefront, Expo Android app and .NET API.",
  highlights: [
    {
      lead: "Transactional Posting:",
      text: "Sales and purchase documents run as state machines (draft → posted → cancelled); posting moves stock, books double-entry ledger entries and updates balances in one transaction, and cancelling reverses it.",
    },
    {
      lead: "GST Compliance:",
      text: "CGST/SGST/IGST split by place of supply, tax snapshotted when a document posts, GSTR-1/3B generated from posted documents, and filed periods locked against edits, cancels and back-dated posts.",
    },
    {
      lead: "Tenant Isolation:",
      text: "Every tenant-owned table is scoped to the signed-in business by a global query filter in the data layer, so a missed WHERE clause can't leak another business's data.",
    },
    {
      lead: "Contract-First Clients:",
      text: "One OpenAPI contract generates the types for the React web app, Next.js storefront and Expo mobile app, so an API change breaks the build instead of production.",
    },
    {
      lead: "Inventory:",
      text: "Batch and expiry stock with first-expiry-first-out picking, multi-location transfers and moving-average valuation.",
    },
    {
      lead: "AI:",
      text: "Claude reads a supplier's bill photo into a draft purchase bill with structured output; the mobile app finds products by photo using Cohere image embeddings in pgvector.",
    },
    {
      lead: "Integrations:",
      text: "Storage, email, WhatsApp, push and the LLM each sit behind an adapter with a no-op fallback, so the system runs and is tested without any of them.",
    },
  ],
  stack: ["Next.js", "React", "TypeScript", "TanStack Router", "Expo", "PostgreSQL", "pgvector", ".NET 10", "EF Core", "Hangfire", "SignalR", "Claude", "Cohere", "Docker", "Railway"],
  image: { src: "/vyavasay.png", width: 1440, height: 900 },
  links: [{ label: "Live", href: "https://vyavasayapp.in/" }],
};

export const projects: Project[] = [
  {
    name: "PagerSage",
    subtitle: "Multi-Agent Incident Response over a Company Knowledge Graph",
    summary:
      "An incident brain: when an alert fires, Claude agents walk a graph of services, deploys, commits, people and past incidents to find the likely root-cause change, page the owner, and cite the last time it happened.",
    highlights: [
      {
        lead: "Multi-Agent Root Cause:",
        text: "Built a FastAPI agent pipeline (Triage, Investigator, Historian, Responder, Scribe) that computes blast radius, ranks suspect deploys and config changes, and takes the cheapest path to them through the services that are sick right now.",
      },
      {
        lead: "Graph Memory:",
        text: "FalkorDB is the only datastore: company graph, 90 days of history, agent memory and handoffs; similar past incidents come from local vector search (fastembed) reranked by what the graph knows, with the runbook that worked most often.",
      },
      {
        lead: "War Room & Company Brain:",
        text: "Next.js war room streams every tool call, decision and handoff live over the graph canvas; agents page on-call on Discord, open GitHub issues with the suspect commit, and write postmortems that re-rank runbooks. Ask “what breaks if checkout-api goes down?” and get an answer with evidence nodes linked.",
      },
    ],
    stack: ["Python", "FastAPI", "Claude (Haiku + Sonnet)", "FalkorDB", "fastembed", "Next.js", "TypeScript", "TailwindCSS", "Docker"],
    image: { src: "/pagersage.png", width: 1600, height: 1150 },
    links: [{ label: "GitHub", href: "https://github.com/MaheshMoholkar/pagersage" }],
  },
  {
    name: "Echo",
    subtitle: "Embeddable AI Customer Support: Chat + Voice",
    summary:
      "AI customer support you embed on a website: a chat and voice widget answered by an agent that searches the business's knowledge base and hands off to a human operator when needed.",
    highlights: [
      {
        lead: "Grounded Agent:",
        text: "PydanticAI agents on FastAPI answer from a per-organization knowledge base (PDF, Word, Markdown, HTML, OCR for scanned files) using pgvector search, streaming replies and escalating to a person on request.",
      },
      {
        lead: "Real-Time Voice:",
        text: "Pipecat voice bot with Silero VAD, Smart Turn v3, Whisper and Kokoro running locally on MLX, with live captions in the widget.",
      },
      {
        lead: "Operator Inbox:",
        text: "Next.js dashboard where operators see every chat and call transcript, take over from the AI, hand back and resolve; Better Auth organizations with JWTs verified by FastAPI.",
      },
    ],
    stack: ["Python", "FastAPI", "PydanticAI", "SQLAlchemy", "PostgreSQL (pgvector)", "Ollama", "Pipecat", "Whisper", "Next.js", "shadcn/ui", "Better-Auth"],
    image: { src: "/echo.png", width: 2880, height: 1800 },
    links: [{ label: "GitHub", href: "https://github.com/MaheshMoholkar/echo" }],
  },
];

// Skills index: popular, best-known tools per area. Next.js/React and Python with the AI layer lead; .NET is experience, so it comes last (a market view, not a list of what each project used)
export const stackIndex = [
  { name: "Frontend", items: ["Next.js", "React", "TypeScript", "React Native"] },
  { name: "Python", items: ["Python", "FastAPI", "SQLAlchemy"] },
  { name: "LLMs", items: ["OpenAI", "Claude", "Gemini", "Llama"] },
  { name: "Agents & RAG", items: ["LangChain", "LangGraph", "LlamaIndex", "MCP"] },
  { name: "Vector", items: ["pgvector", "Pinecone"] },
  { name: "Evals", items: ["Ragas", "DeepEval", "Langfuse", "LangSmith"] },
  { name: "Data", items: ["PostgreSQL", "SQL Server", "Redis", "MongoDB"] },
  { name: "Cloud & DevOps", items: ["AWS", "Azure", "Docker"] },
  { name: ".NET", items: ["C#", "ASP.NET Core", "EF Core", "SignalR"] },
];

/** Earlier and smaller builds: a name, one line, the screenshot and its links. */
export type SideProject = {
  name: string;
  year: string;
  summary: string;
  stack: string[];
  image: string;
  links: Link[];
};

export const sideProjects: SideProject[] = [
  {
    name: "Slack",
    year: "2026",
    summary: "Team chat with channels, DMs, threads, reactions and live updates over WebSockets; React + Vite UI on a Spring Boot API.",
    stack: ["React", "TypeScript", "Spring Boot", "Java", "PostgreSQL", "WebSocket", "Docker"],
    image: "/slackhome.png",
    links: [
      { label: "GitHub", href: "https://github.com/MaheshMoholkar/slack" },
      { label: "Live", href: "https://slack-app.up.railway.app/" },
    ],
  },
  {
    name: "AdFlow",
    year: "2026",
    summary: "Call-automation monorepo: Go API, Flutter Android app for call detection and SMS follow-ups, React admin console, Next.js landing pages.",
    stack: ["Go", "Flutter", "React", "Next.js", "PostgreSQL", "Docker"],
    image: "/adflow.png",
    links: [
      { label: "GitHub", href: "https://github.com/MaheshMoholkar/adflow" },
      { label: "Live", href: "https://adflowapp.vercel.app/" },
    ],
  },
  {
    name: "3D Portfolio",
    year: "2025",
    summary: "An earlier portfolio in React, Vite and Three.js, with interactive 3D elements and Framer Motion animation.",
    stack: ["React", "Three.js", "React Three Fiber", "Framer Motion"],
    image: "/3d-portfolio.png",
    links: [
      { label: "GitHub", href: "https://github.com/MaheshMoholkar/mahesh.moholkar" },
      { label: "Live", href: "https://mahesh-moholkar.vercel.app/" },
    ],
  },
  {
    name: "Blockforge",
    year: "2025",
    summary: "Dark blockchain SaaS website with a blog, built on Astro.",
    stack: ["Astro", "React", "TypeScript", "TailwindCSS"],
    image: "/blockforge.png",
    links: [
      { label: "GitHub", href: "https://github.com/MaheshMoholkar/blockforge" },
      { label: "Live", href: "https://blockforge-one.vercel.app/" },
    ],
  },
  {
    name: "SaaS Landing Page",
    year: "2025",
    summary: "Responsive SaaS landing page with smooth animations and a clean layout.",
    stack: ["Next.js", "TailwindCSS", "Framer Motion"],
    image: "/light-productivity.png",
    links: [
      { label: "GitHub", href: "https://github.com/MaheshMoholkar/landing-page-one" },
      { label: "Live", href: "https://light-productivity-app.vercel.app/" },
    ],
  },
  {
    name: "Dark SaaS Landing Page",
    year: "2025",
    summary: "Dark-themed SaaS landing page with smooth animations.",
    stack: ["Next.js", "TailwindCSS", "Framer Motion"],
    image: "/dark-productivity.png",
    links: [
      { label: "GitHub", href: "https://github.com/MaheshMoholkar/landing-page-two" },
      { label: "Live", href: "https://dark-productivity-app.vercel.app/" },
    ],
  },
  {
    name: "AI SEO Landing Page",
    year: "2025",
    summary: "Landing page for an AI-powered SEO product, with user testimonials.",
    stack: ["Next.js", "TailwindCSS", "Framer Motion"],
    image: "/ai-seo.png",
    links: [
      { label: "GitHub", href: "https://github.com/MaheshMoholkar/landing-page-three" },
      { label: "Live", href: "https://ai-seo-app-one.vercel.app/" },
    ],
  },
  {
    name: "Cozy",
    year: "2024",
    summary: "Interior-design landing page built with React, Vite and TailwindCSS.",
    stack: ["React", "Vite", "TailwindCSS", "Framer Motion"],
    image: "/cozy.png",
    links: [
      { label: "GitHub", href: "https://github.com/MaheshMoholkar/cozy" },
      { label: "Live", href: "https://cozy-inky.vercel.app/" },
    ],
  },
];

export type EducationItem = { degree: string; school: string; years: string; location: string; result: string };

export const education: EducationItem[] = [
  {
    degree: "Master's in Computer Application",
    school: "Dr. D. Y. Patil Institute of Management and Research",
    years: "2022 – 2024",
    location: "Pune, India",
    result: "CGPA 8.0 / 10",
  },
  {
    degree: "Bachelor's in Computer Science",
    school: "B.P.H.E. Society's Ahmednagar College",
    years: "2020 – 2022",
    location: "Ahmednagar, India",
    result: "CGPA 8.56 / 10",
  },
];

export type Certificate = { title: string; issuer: string; via: string; href: string };

export const certificates: Certificate[] = [
  { title: "Meta Back-End Developer", issuer: "Meta", via: "Coursera", href: "https://www.coursera.org/account/accomplishments/specialization/ZHWRF7MG4VDG" },
  { title: "Rust Programming", issuer: "Duke University", via: "Coursera", href: "https://www.coursera.org/account/accomplishments/specialization/KLANCTJBOT8F" },
  { title: "Introduction to Cloud Computing", issuer: "IBM", via: "edX", href: "https://courses.edx.org/certificates/1dfc8f25fa8f4a0b82a788ad76307c21" },
  { title: "Introduction to Linux", issuer: "The Linux Foundation", via: "edX", href: "https://courses.edx.org/certificates/e5034ac1683444a885d05c8bfe051a3f" },
  { title: "Introduction to Web Development", issuer: "IBM", via: "edX", href: "https://courses.edx.org/certificates/8c6839bc8e4240a2a59b3ec2cedb0180" },
];
