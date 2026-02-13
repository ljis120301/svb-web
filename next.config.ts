import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
    ],
  },
  // Rybbit analytics rewrites (ad-blocker bypass)
  async rewrites() {
    const rybbitHost =
      process.env.NEXT_PUBLIC_RYBBIT_HOST || "https://tracking.whoisjason.me";
    return [
      {
        source: "/api/script.js",
        destination: `${rybbitHost}/api/script.js`,
      },
      {
        source: "/api/track",
        destination: `${rybbitHost}/api/track`,
      },
    ];
  },
};

export default nextConfig;
