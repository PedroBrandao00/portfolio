import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  output: "standalone",

  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    qualities: [75, 85], 
  },

  compress: true,

  productionBrowserSourceMaps: false,
};


const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
