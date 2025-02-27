import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '',
  images: { unoptimized: true },
  trailingSlash: true
};

export default nextConfig;
