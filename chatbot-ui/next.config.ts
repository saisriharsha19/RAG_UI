import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/RAG_UI',
  assetPrefix: '/RAG_UI/',
  images: { unoptimized: true },
  trailingSlash: true
};

export default nextConfig;
