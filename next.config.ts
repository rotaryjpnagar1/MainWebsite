import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
    unoptimized: false,
  },
  // Ensure server-side CSV parsing works with 'fs' module
  serverExternalPackages: ["papaparse"],
};

export default nextConfig;
