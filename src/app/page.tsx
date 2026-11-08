import Link from "next/link";
import { Section } from "@/components/Section";
import { caseStudies } from "@/content/work";
import { jobs } from "@/content/experience";
import { posts } from "@/content/posts";
import { personJsonLd, site } from "@/lib/site";

const proof = [
  { value: "~5s → <1s", label: "Major query latency after I migrated production to PostgreSQL on my own" },
  { value: "218 models", label: "In a TypeScript backend I architected and largely wrote" },
  { value: "0 downtime", label: "Blue-green releases I built after deploys started blocking users" },
];

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }} />

      <section className="pt-16 sm:pt-24">
        <p className="font-mono text-xs tracking-widest text-muted uppercase">{site.jobTitle}</p>
        <h1 className="mt-5 font-serif text-4xl leading-[1.12] tracking-tight text-balance sm:text-5xl">
          I took a rental-operations SaaS from its first commit to a production marketplace.
        </h1>
        <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-muted">
          <p>
            At Falcon Global Services I wrote about three-quarters of{" "}
            <span className="text-fg">The Host Desk</span>, moved it to self-hosted PostgreSQL, built its Stripe Connect
            payments, and led a team of four while staying the main engineer.
          </p>
          <p>I care about boring deploys, honest data, and systems the next engineer can actually read.</p>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
          <a
            href={`mailto:${site.email}`}
            className="rounded-full bg-fg px-4 py-2 text-bg transition-opacity hover:opacity-85"
          >
            Get in touch
          </a>
          <Link href="/work" className="underline decoration-line underline-offset-4 hover:decoration-fg">
            Read the case studies
          </Link>
          <span className="flex items-center gap-2 text-muted">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden />
            Open to full-time roles from December 2026
          </span>
        </div>
      </section>

      <section aria-label="Highlights" className="mt-16 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3">
        {proof.map((item) => (
          <div key={item.value} className="bg-bg p-5">
            <p className="font-serif text-2xl tracking-tight">{item.value}</p>
            <p className="mt-2 text-sm leading-snug text-muted">{item.label}</p>
          </div>
        ))}
      </section>

      <Section title="Selected work" href="/work" hrefLabel="All case studies">
        <ul className="divide-y divide-line">
          {caseStudies.map((study) => (
            <li key={study.slug}>
              <Link href={`/work/${study.slug}`} className="group block py-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-xl tracking-tight group-hover:text-accent">{study.title}</h3>
                  <span className="shrink-0 font-mono text-xs text-muted">{study.period}</span>
                </div>
                <p className="mt-2 leading-relaxed text-muted">{study.summary}</p>
                <p className="mt-3 text-sm">
                  <span className="text-muted">Outcome: </span>
                  {study.outcome}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Experience" href="/experience" hrefLabel="Full history">
        <ol className="space-y-8">
          {jobs.map((job) => (
            <li key={job.company} className="grid gap-2 sm:grid-cols-[10rem_1fr] sm:gap-6">
              <p className="font-mono text-xs leading-6 text-muted">{job.period}</p>
              <div>
                <h3 className="font-medium">{job.company}</h3>
                <ul className="mt-1 text-sm text-muted">
                  {job.roles.map((role) => (
                    <li key={role.title}>{role.title}</li>
                  ))}
                </ul>
                <p className="mt-3 leading-relaxed text-muted">{job.summary}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Writing" href="/writing" hrefLabel="All posts">
        <ul className="divide-y divide-line">
          {posts.map((post) => (
            <li key={post.slug} className="py-5">
              <Link href={`/writing/${post.slug}`} className="group block">
                <h3 className="font-serif text-lg tracking-tight group-hover:text-accent">
                  {post.title}
                  {post.draft ? (
                    <span className="ml-2 align-middle font-mono text-[10px] tracking-widest text-muted uppercase">Draft</span>
                  ) : null}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{post.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Contact">
        <p className="max-w-2xl text-lg leading-relaxed">
          Hiring for a backend, full-stack, or tech-lead role? The fastest way to reach me is{" "}
          <a href={`mailto:${site.email}`} className="underline decoration-accent underline-offset-4">
            {site.email}
          </a>
          .
        </p>
      </Section>
    </>
  );
}
