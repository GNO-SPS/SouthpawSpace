// next.config.ts

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // No need for experimental.css anymore

  typescript: {
    // WARNING: this will allow your build to pass even if there are TS errors.
    // Use it only as a temporary unblock.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
