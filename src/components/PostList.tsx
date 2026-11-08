import Link from "next/link";
import type { Post } from "@/content/posts";

export function PostList({ posts }: { posts: Post[] }) {
  return (
    <ul className="divide-y divide-line">
      {posts.map((post) => {
        const heading = (
          <h3 className="font-serif text-lg tracking-tight group-hover:text-accent">
            {post.title}
            {post.draft ? (
              <span className="ml-2 align-middle font-mono text-[10px] tracking-widest text-muted uppercase">
                Coming soon
              </span>
            ) : null}
          </h3>
        );
        return (
          <li key={post.slug} className="py-5">
            {post.draft ? (
              <div>{heading}</div>
            ) : (
              <Link href={`/writing/${post.slug}`} className="group block">
                {heading}
              </Link>
            )}
            <p className="mt-1 text-sm leading-relaxed text-muted">{post.summary}</p>
          </li>
        );
      })}
    </ul>
  );
}
