import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ href = "", ...props }) =>
      href.startsWith("/") ? <Link href={href} {...props} /> : <a href={href} rel="noopener" {...props} />,
    ...components,
  };
}
