import path from "node:path";
import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  pageExtensions: ["ts", "tsx", "mdx"],
  turbopack: { root: path.resolve(".") },
};

export default createMDX({ options: { remarkPlugins: ["remark-gfm"] } })(nextConfig);
