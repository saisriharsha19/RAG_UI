import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/RAG_UI/chatbot-ui', // Add this if deploying to username.github.io/RAG_UI
  images: { unoptimized: true },
  trailingSlash: true,
  assetPrefix: './',
  distDir: 'out', 
};

export default nextConfig;
