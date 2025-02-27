import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/RAG_UI', // Add this if deploying to username.github.io/RAG_UI
  images: { unoptimized: true },
  trailingSlash: true,
  distDir: 'out', 
};

export default nextConfig;
