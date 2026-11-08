import { posts } from "@/content/posts";
import { absoluteUrl, site } from "@/lib/site";
import { existsSync } from "node:fs";
import path from "node:path";

export const dynamic = "force-static";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const published = posts
    .filter((post) => !post.draft)
    .filter((post) => existsSync(path.join(process.cwd(), "src/content/writing", `${post.slug}.mdx`)))
    .sort((a, b) => b.date.localeCompare(a.date));

  const items = published
    .map((post) => {
      const url = absoluteUrl(`/writing/${post.slug}`);
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(post.summary)}</description>
      <pubDate>${new Date(`${post.date}T00:00:00Z`).toUTCString()}</pubDate>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(`Writing — ${site.name}`)}</title>
    <link>${absoluteUrl("/writing")}</link>
    <description>${escapeXml(site.description)}</description>
    <language>en</language>
    <atom:link href="${absoluteUrl("/feed.xml")}" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
