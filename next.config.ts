import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["10.10.7.7"],
  },
  /* config options here */
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
