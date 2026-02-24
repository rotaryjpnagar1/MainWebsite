import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'spc.rotary.org',
      },
    ],
    unoptimized: false,
  },
  // Ensure server-side CSV parsing works with 'fs' module
  serverExternalPackages: ["papaparse"],
};

export default nextConfig;
