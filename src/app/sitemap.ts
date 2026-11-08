import type { MetadataRoute } from "next";
import { caseStudies } from "@/content/work";
import { posts } from "@/content/posts";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/work", "/experience", "/writing", "/about"].map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.8,
  }));

  const studies = caseStudies.map((study) => ({
    url: absoluteUrl(`/work/${study.slug}`),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  const articles = posts
    .filter((post) => !post.draft)
    .map((post) => ({ url: absoluteUrl(`/writing/${post.slug}`), lastModified: post.date, priority: 0.6 }));

  return [...pages, ...studies, ...articles];
}
