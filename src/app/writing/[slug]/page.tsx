import { existsSync } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/content/posts";
import { absoluteUrl, site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

function hasContent(slug: string) {
  return existsSync(path.join(process.cwd(), "src/content/writing", `${slug}.mdx`));
}

export function generateStaticParams() {
  return posts.filter((post) => hasContent(post.slug)).map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `/writing/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.summary,
      url: `/writing/${post.slug}`,
      publishedTime: post.date,
    },
    robots: post.draft ? { index: false, follow: false } : undefined,
  };
}

const dateFormat = new Intl.DateTimeFormat("en", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post || !hasContent(post.slug)) notFound();

  const { default: Content } = await import(`@/content/writing/${post.slug}.mdx`);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    datePublished: post.date,
    url: absoluteUrl(`/writing/${post.slug}`),
    author: { "@type": "Person", name: site.name, url: site.url },
  };

  return (
    <article className="pt-12">
      {post.draft ? null : (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
      <Link href="/writing" className="text-sm text-muted hover:text-fg">
        <span aria-hidden>←</span> Writing
      </Link>
      {post.draft ? (
        <p className="mt-6 rounded-md border border-accent/40 bg-surface px-3 py-2 font-mono text-xs text-muted">
          Draft — not listed or indexed yet.
        </p>
      ) : null}
      <h1 className="mt-6 font-serif text-4xl leading-tight tracking-tight text-balance sm:text-[2.75rem]">
        {post.title}
      </h1>
      <p className="mt-4 font-mono text-xs text-muted">
        <time dateTime={post.date}>{dateFormat.format(new Date(post.date))}</time>
      </p>
      <div className="prose mt-10">
        <Content />
      </div>
    </article>
  );
}
