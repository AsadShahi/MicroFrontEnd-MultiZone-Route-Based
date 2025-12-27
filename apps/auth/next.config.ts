import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Turbopack is now a top-level property in Next.js 16
  turbopack: {
    root: '../../', // Required for monorepo resolution
    resolveAlias: {
       'packages-shared-ui': '../../packages/shared-ui'
    }
  },
  transpilePackages: ['packages-shared-ui'],
  assetPrefix: '/auth-static',
  reactStrictMode: true,
};

export default nextConfig;
