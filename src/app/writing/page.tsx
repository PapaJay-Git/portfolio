import type { Metadata } from "next";
import { PostList } from "@/components/PostList";
import { posts } from "@/content/posts";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes on production incidents, integrations, and migrations from building a SaaS platform.",
  alternates: { canonical: "/writing", types: { "application/rss+xml": "/feed.xml" } },
};

export default function WritingPage() {
  return (
    <section className="pt-16">
      <h1 className="font-serif text-4xl tracking-tight">Writing</h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
        Short write-ups of things that went wrong or took longer than expected, and what I learned from them.
      </p>
      <div className="mt-10 border-t border-line">
        <PostList posts={posts} />
      </div>
    </section>
  );
}
