import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: [
      'images.unsplash.com',
      // Add other image domains if needed
    ],
  },
  // Enable source maps in production for better error tracking
  productionBrowserSourceMaps: true,
  // Increase build performance
  poweredByHeader: false,
  // Enable compression
  compress: true,
  // Configure webpack for better performance
  webpack: (config, { dev, isServer }) => {
    // Optimize production builds
    if (!dev && !isServer) {
      Object.assign(config.optimization.splitChunks.cacheGroups, {
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2,
        },
      });
    }
    return config;
  },
};

export default nextConfig;
