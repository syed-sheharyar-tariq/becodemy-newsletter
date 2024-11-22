import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["react-icons"],
  },
  images: {
    remotePatterns: [
      {
        hostname: "media.beehiiv.com",
      },
      {
        hostname: "img.clerk.com",
      },
    ],
  },
}

export default nextConfig
