export type Post = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  draft: boolean;
};

export const posts: Post[] = [
  {
    slug: "the-rate-limiter-that-broke-my-users",
    title: "The rate limiter that broke my own users",
    summary:
      "A wave of 429s, a feature I was sure was to blame, and what it taught me about sizing limits from real traffic.",
    date: "2026-11-08",
    draft: false,
  },
  {
    slug: "polling-around-a-webhook-blind-spot",
    title: "Polling around a webhook blind spot",
    summary:
      "The integration only notified us about messages we received, never ones we sent. Here is how we closed the gap without blowing the API budget.",
    date: "2026-11-08",
    draft: false,
  },
  {
    slug: "sql-server-to-postgres-let-the-schema-drive-the-export",
    title: "SQL Server to Postgres: let the schema drive the export",
    summary:
      "My first export guessed at types and broke on import. The second read the Prisma schema instead, and the cutover was uneventful.",
    date: "2026-11-08",
    draft: false,
  },
];
