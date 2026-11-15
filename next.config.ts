import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Comparison pages were removed; send old links and search results home instead of a 404.
  redirects: async () => [{ source: "/compare/:slug*", destination: "/", permanent: true }],
};

export default nextConfig;
