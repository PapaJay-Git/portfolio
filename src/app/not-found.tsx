import Link from "next/link";

export default function NotFound() {
  return (
    <section className="pt-24">
      <p className="font-mono text-xs tracking-widest text-muted uppercase">404</p>
      <h1 className="mt-4 font-serif text-4xl tracking-tight">This page doesn&apos;t exist.</h1>
      <p className="mt-4 text-muted">
        It may have moved when the site was rebuilt.{" "}
        <Link href="/" className="text-fg underline underline-offset-4">
          Go home
        </Link>
        .
      </p>
    </section>
  );
}
