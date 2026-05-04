import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "10.10.7.7",
        port: "5003",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "clapbac-bucket-2.s3.us-west-1.amazonaws.com",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    scrollRestoration: true, // enables scroll restoration
  },
};

export default nextConfig;
