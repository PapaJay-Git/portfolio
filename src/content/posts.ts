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
    date: "2026-11-22",
    draft: true,
  },
  {
    slug: "sql-server-to-postgres-in-one-evening",
    title: "SQL Server to Postgres in one evening",
    summary:
      "The tooling, the checklist, and the verification that made a solo production migration boring.",
    date: "2026-11-29",
    draft: true,
  },
];
