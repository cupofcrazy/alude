import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      { hostname: "cdn.sanity.io", protocol: "https" }
    ]
  }
};

export default nextConfig;
