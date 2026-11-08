import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mx-auto mt-24 w-full max-w-3xl border-t border-line px-6 py-10 text-sm text-muted">
      <div className="flex flex-col justify-between gap-4 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name} · {site.location}
        </p>
        <ul className="flex gap-5">
          <li>
            <a href={`mailto:${site.email}`} className="hover:text-fg">
              Email
            </a>
          </li>
          <li>
            <a href={site.links.github} className="hover:text-fg" rel="me noopener">
              GitHub
            </a>
          </li>
          <li>
            <a href={site.links.linkedin} className="hover:text-fg" rel="me noopener">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
