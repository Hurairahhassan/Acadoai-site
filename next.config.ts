import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Full server-rendered 404 page; the app has two root layouts ([lang] and legal), so there is no shared one to build it from.
  experimental: { globalNotFound: true },
  // Comparison pages were removed; send old links and search results home instead of a 404.
  redirects: async () => [{ source: "/compare/:slug*", destination: "/", permanent: true }],
};

export default nextConfig;
