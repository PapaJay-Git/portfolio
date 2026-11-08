# cainglet.vercel.app

Personal site of Jayson Cainglet: case studies, experience and writing.

## Stack

- **Next.js 16** (App Router), fully static: every route is prerendered at build time
- **TypeScript** in strict mode, with `noUncheckedIndexedAccess`
- **Tailwind CSS 4** with a small set of design tokens in `src/app/globals.css`
- **MDX** for case studies and posts, with GitHub-flavored Markdown
- Deployed on **Vercel**

## Structure

```
src/
  app/                 routes, metadata, sitemap, robots, OG image
  components/          header, footer, theme toggle, layout primitives
  content/
    work.ts            case study index (metadata)
    work/*.mdx         case study bodies
    posts.ts           post index; `draft: true` keeps a post out of the sitemap and noindexed
    writing/*.mdx      post bodies
    experience.ts      roles and education
  lib/site.ts          site-wide constants and JSON-LD helpers
```

Content and presentation are separate: adding a case study or post means one entry in the index file and one MDX file. No component changes.

## SEO

- Per-page titles, descriptions and canonical URLs through the Metadata API
- JSON-LD: `Person` on the home page, `TechArticle` on case studies, `BlogPosting` on published posts
- Generated `sitemap.xml`, `robots.txt` and Open Graph image
- Drafts render with a banner and `noindex`, and are excluded from the sitemap

## Development

Requires Node 20 or later.

```bash
npm ci
npm run dev        # http://localhost:3000
npm run typecheck
npm run lint
npm run build
```

CI runs typecheck, lint and build on every push and pull request.
