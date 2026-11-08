export type Role = { title: string; period: string };

export type Job = {
  company: string;
  context: string;
  period: string;
  roles: Role[];
  summary: string;
  highlights: string[];
};

export const jobs: Job[] = [
  {
    company: "Falcon Global Services",
    context: "The Host Desk · rental-operations SaaS · hybrid",
    period: "Sep 2024 – Nov 2026",
    roles: [
      { title: "Associate Web Development Manager", period: "Mar 2025 – Nov 2026" },
      { title: "Web Developer", period: "Sep 2024 – Feb 2025" },
    ],
    summary:
      "Joined at the start of the codebase and became its primary engineer. Took over technical direction in December 2024, then led a team of four (two designers, a developer, QA) while still writing most of the platform.",
    highlights: [
      "Wrote about three-quarters of the backend and web portal: 218 Prisma models, ~523 API handlers, 107 portal routes across six user roles.",
      "Re-platformed the backend from JavaScript and raw SQL to TypeScript and Prisma, then migrated production from SQL Server to self-hosted PostgreSQL on my own (major queries ~5 s → under 1 s).",
      "Built the Stripe Connect work-order marketplace: authorization, capture, platform fee, and vendor payouts.",
      "Designed and built health-gated blue-green deploys on self-hosted GitHub Actions runners, ending deploy downtime.",
      "Built, as sole engineer, a rate-limit-aware Hostaway/Guesty data pipeline (~382 tests) that feeds the company's AI assistant.",
      "Moved real-time chat and notifications from Pusher to self-hosted Socket.IO with Redis.",
      "Reviewed and approved the team's PRs, ran sprints, assigned work, and reported to the project manager and CEO.",
    ],
  },
  {
    company: "Eljin Corp.",
    context: "Food manufacturing · on-site",
    period: "Sep 2023 – Apr 2024",
    roles: [{ title: "Web Developer", period: "Sep 2023 – Apr 2024" }],
    summary:
      "One of two developers. Built the company-wide department ticketing system with real-time chat, and a payroll system that generated payslips for every employee.",
    highlights: [
      "Department ticketing system in Laravel, used by every department, with real-time chat and notifications over Pusher.",
      "Payroll system with PIN/password authentication and automated PDF payslips.",
      "Point-of-sale and internal system interfaces in Vue.js and Tailwind.",
    ],
  },
  {
    company: "Independent",
    context: "Part-time · alongside full-time roles",
    period: "2023 – May 2025",
    roles: [{ title: "Freelance Web Developer", period: "2023 – May 2025" }],
    summary:
      "Built custom Laravel systems for paying student clients' capstone projects: role-based dashboards, document uploads, PDF generation, installment payments, and real-time messaging.",
    highlights: [],
  },
];

export const education = {
  school: "STI College Tarlac",
  degree: "BS Information Technology",
  period: "2018 – 2022",
  note: "Lead developer of a four-person capstone team. Our school management system, E-SKWELA, was adopted by Santo Cristo School in Tarlac City.",
};
