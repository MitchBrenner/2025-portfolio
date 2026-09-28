import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next's defaults plus 2560, so phones and 1280px laptops get a
    // right-sized hero image instead of jumping straight to 3840
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 2560, 3840],
  },
};

export default nextConfig;
