export const site = {
  url: "https://cainglet.vercel.app",
  name: "Jayson Cainglet",
  title: "Jayson Cainglet — Full Stack Engineer & Technical Lead",
  description:
    "Full-stack engineer and technical lead. I took a short-term-rental SaaS from its first commit to a production marketplace: TypeScript, PostgreSQL, Stripe Connect, and zero-downtime deploys.",
  jobTitle: "Full Stack Engineer · Technical Lead",
  location: "Tarlac, Philippines",
  email: "jaysoncainglet87@gmail.com",
  links: {
    github: "https://github.com/PapaJay-Git",
    linkedin: "https://www.linkedin.com/in/jayson-c-784746321/",
  },
} as const;

export const nav = [
  { href: "/work", label: "Work" },
  { href: "/experience", label: "Experience" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
] as const;

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    jobTitle: site.jobTitle,
    email: `mailto:${site.email}`,
    address: { "@type": "PostalAddress", addressLocality: "Tarlac", addressCountry: "PH" },
    sameAs: [site.links.github, site.links.linkedin],
    knowsAbout: [
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "React",
      "Next.js",
      "Stripe Connect",
      "Redis",
      "Docker",
      "System design",
    ],
  };
}
