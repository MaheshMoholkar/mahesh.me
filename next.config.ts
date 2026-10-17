import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // `npm run preview` builds each variant into its own folder so the regular .next build is left alone
  distDir: process.env.NEXT_DIST_DIR || ".next",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
      },
    ],
  },
};

export default nextConfig;
