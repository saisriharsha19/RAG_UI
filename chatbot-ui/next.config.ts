import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/RAG_UI',
  images: { unoptimized: true }
};

export default nextConfig;
