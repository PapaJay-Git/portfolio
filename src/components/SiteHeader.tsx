import Link from "next/link";
import { nav, site } from "@/lib/site";
import { ThemeToggle } from "./ThemeToggle";

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 pt-8 pb-4">
      <Link href="/" className="font-serif text-lg tracking-tight">
        {site.name}
      </Link>
      <nav aria-label="Primary" className="flex items-center gap-1 text-sm sm:gap-4">
        <ul className="flex items-center gap-3 sm:gap-5">
          {nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-muted transition-colors hover:text-fg">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  );
}
