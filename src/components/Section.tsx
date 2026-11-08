import Link from "next/link";

export function Section({
  title,
  href,
  hrefLabel,
  children,
}: {
  title: string;
  href?: string;
  hrefLabel?: string;
  children: React.ReactNode;
}) {
  const id = title.toLowerCase().replace(/\s+/g, "-");
  return (
    <section aria-labelledby={id} className="mt-20">
      <div className="mb-6 flex items-baseline justify-between border-b border-line pb-3">
        <h2 id={id} className="font-mono text-xs tracking-widest text-muted uppercase">
          {title}
        </h2>
        {href ? (
          <Link href={href} className="text-sm text-muted transition-colors hover:text-fg">
            {hrefLabel ?? "View all"} <span aria-hidden>→</span>
          </Link>
        ) : null}
      </div>
      {children}
    </section>
  );
}
