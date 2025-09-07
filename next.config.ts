// next.config.ts
import type { NextConfig } from "next";

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' *.youtube.com;
  child-src *.youtube.com *.google.com;
  style-src 'self' 'unsafe-inline' fonts.googleapis.com;
  img-src * 'self' data:;
  media-src 'none';
  connect-src *;
  font-src 'self' fonts.gstatic.com;
`;

const nextConfig: NextConfig = {
  // Keep builds moving while you iterate
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },

  images: {
    // ✅ Auto-serve AVIF/WebP when supported (falls back to your PNG/JPEG)
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "placehold.co", port: "", pathname: "/**" },
      { protocol: "https", hostname: "images.unsplash.com", port: "", pathname: "/**" },
      { protocol: "https", hostname: "lh3.googleusercontent.com", port: "", pathname: "/**" },
      { protocol: "https", hostname: "firebasestudio.corp.google.com", port: "", pathname: "/**" },
    ],
  },

  async headers() {
    return [
      // Global CSP
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
          },
        ],
      },
      // (Optional) Long-cache static images to speed up repeat visits
      {
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // ✅ Safety net: old /new-images/* links now 308 to /images/*
      {
        source: "/new-images/:path*",
        destination: "/images/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
