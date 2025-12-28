import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Turbopack is now a top-level property in Next.js 16
  
  turbopack: {
    // root: '../../', // Required for monorepo resolution
    resolveAlias: {
      '@repo/shared-styles': '../../packages/shared-styles',
      '@repo/packages-shared-ui': '../../packages/shared-ui'
    }
  },
  transpilePackages: ['@repo/packages-shared-ui', '@repo/shared-styles'],
  assetPrefix: '/auth-static',
  reactStrictMode: true,
};

export default nextConfig;
