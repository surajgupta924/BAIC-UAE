import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "baicserver.baicuae.com",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "baicuae.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "360.baicuae.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.baicglobal.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.baicuae.com",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/car360/:path*",
        destination: "https://www.baicuae.com/img/:path*",
      },
    ];
  },
};

export default nextConfig;
