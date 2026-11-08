import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/content/work";
import { absoluteUrl, site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.summary,
    alternates: { canonical: `/work/${study.slug}` },
    openGraph: { type: "article", title: study.title, description: study.summary, url: `/work/${study.slug}` },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const index = caseStudies.findIndex((s) => s.slug === slug);
  const study = caseStudies[index];
  if (!study) notFound();

  const { default: Content } = await import(`@/content/work/${study.slug}.mdx`);
  const next = caseStudies[(index + 1) % caseStudies.length];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: study.title,
    description: study.summary,
    url: absoluteUrl(`/work/${study.slug}`),
    author: { "@type": "Person", name: site.name, url: site.url },
    keywords: study.stack.join(", "),
  };

  return (
    <article className="pt-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href="/work" className="text-sm text-muted hover:text-fg">
        <span aria-hidden>←</span> Case studies
      </Link>
      <h1 className="mt-6 font-serif text-4xl leading-tight tracking-tight text-balance sm:text-[2.75rem]">
        {study.title}
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-muted">{study.summary}</p>

      <dl className="mt-8 grid gap-4 border-y border-line py-5 text-sm sm:grid-cols-3">
        <div>
          <dt className="font-mono text-xs tracking-widest text-muted uppercase">Role</dt>
          <dd className="mt-1">{study.role}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs tracking-widest text-muted uppercase">When</dt>
          <dd className="mt-1">{study.period}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs tracking-widest text-muted uppercase">Outcome</dt>
          <dd className="mt-1">{study.outcome}</dd>
        </div>
        <div className="sm:col-span-3">
          <dt className="sr-only">Stack</dt>
          <dd className="flex flex-wrap gap-2">
            {study.stack.map((tech) => (
              <span key={tech} className="rounded-full border border-line px-2.5 py-0.5 font-mono text-xs text-muted">
                {tech}
              </span>
            ))}
          </dd>
        </div>
      </dl>

      <div className="prose mt-4">
        <Content />
      </div>

      {next && next.slug !== study.slug ? (
        <nav aria-label="Next case study" className="mt-20 border-t border-line pt-6">
          <p className="font-mono text-xs tracking-widest text-muted uppercase">Next</p>
          <Link href={`/work/${next.slug}`} className="mt-2 block font-serif text-xl tracking-tight hover:text-accent">
            {next.title} <span aria-hidden>→</span>
          </Link>
        </nav>
      ) : null}
    </article>
  );
}
