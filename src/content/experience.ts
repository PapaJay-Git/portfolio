export type Role = { title: string; period: string };

export type Job = {
  company: string;
  context: string;
  period: string;
  roles: Role[];
  summary: string;
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
  },
  {
    company: "Eljin Corp.",
    context: "Food manufacturing · on-site",
    period: "Sep 2023 – Apr 2024",
    roles: [{ title: "Web Developer", period: "Sep 2023 – Apr 2024" }],
    summary:
      "One of two developers. Built the company-wide department ticketing system with real-time chat, and a payroll system that generated payslips for every employee.",
  },
];
