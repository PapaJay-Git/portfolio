export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  period: string;
  stack: string[];
  outcome: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "host-desk-platform",
    title: "Building a rental-operations marketplace from the first commit",
    summary:
      "The Host Desk lets short-term-rental owners book vetted vendors, pay through the platform, and run work orders off their Hostaway reservations. I joined before login existed and wrote most of what shipped.",
    role: "Primary engineer → technical lead",
    period: "2024 – 2026",
    stack: ["TypeScript", "Express", "Prisma", "PostgreSQL", "Redis", "Stripe Connect", "React"],
    outcome: "218 data models and ~523 API handlers, about three-quarters of the code written by me",
  },
  {
    slug: "postgres-migration",
    title: "Moving production from SQL Server to self-hosted PostgreSQL, solo",
    summary:
      "Why we moved off SQL Server, how I built schema-aware export tooling, and the side-by-side verification that let a few-hour cutover land with nothing broken afterwards.",
    role: "Sole engineer and decision owner",
    period: "Jan 2026",
    stack: ["PostgreSQL", "Prisma", "SQL Server", "Node.js"],
    outcome: "Major query latency from ~5 s to under 1 s",
  },
  {
    slug: "pms-data-pipeline",
    title: "A rate-limit-aware pipeline that mirrors a property-management system",
    summary:
      "Workers, distributed locks, and a request budget for an API that throttles hard, plus a poller to cover what its webhooks never send. The mirror is the data layer behind the company's AI assistant.",
    role: "Sole engineer",
    period: "Mar – Oct 2026",
    stack: ["TypeScript", "PostgreSQL", "Docker", "Hostaway API"],
    outcome: "Hundreds of thousands of messages and tens of thousands of reservations kept in sync",
  },
  {
    slug: "zero-downtime-deploys",
    title: "Blue-green deploys with Docker and an Nginx switch",
    summary:
      "Users couldn't submit requests while we deployed. I replaced in-place releases with health-gated blue-green deploys and automatic rollback, running on our own CI runners.",
    role: "Designed and built",
    period: "Jan 2026",
    stack: ["Docker", "Nginx", "GitHub Actions", "Self-hosted runners"],
    outcome: "Releases no longer interrupt users",
  },
];
