import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/content/work";

export const metadata: Metadata = {
  title: "Case studies",
  description:
    "How I built a rental-operations marketplace, migrated it to PostgreSQL, mirrored a rate-limited PMS API, and removed deploy downtime.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <section className="pt-16">
      <h1 className="font-serif text-4xl tracking-tight">Case studies</h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
        Each one covers the problem, the constraints, what I decided and why, the results, and what I&apos;d change
        next time.
      </p>
      <ul className="mt-12 divide-y divide-line border-t border-line">
        {caseStudies.map((study) => (
          <li key={study.slug}>
            <Link href={`/work/${study.slug}`} className="group block py-8">
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="font-serif text-2xl tracking-tight group-hover:text-accent">{study.title}</h2>
                <span className="shrink-0 font-mono text-xs text-muted">{study.period}</span>
              </div>
              <p className="mt-3 leading-relaxed text-muted">{study.summary}</p>
              <p className="mt-3 font-mono text-xs text-muted">{study.stack.join(" · ")}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
