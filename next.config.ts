import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pixel-p1.s3.sa-east-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol: "https",
        hostname: "assets.cdn.filesafe.space",
      },
    ],
  },
};

export default nextConfig;
