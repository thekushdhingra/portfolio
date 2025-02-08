import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "*.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "github.com"
      },
      {
        protocol: "https",
        hostname: "http.cat",
      },
    ],
  },
};

export default nextConfig;

