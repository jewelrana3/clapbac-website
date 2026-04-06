import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "10.10.7.7",
      "clapbac-bucket-2.s3.us-west-1.amazonaws.com",
      "54.177.0.160",
    ],
  },
};

export default nextConfig;
