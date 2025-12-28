// import type { NextConfig } from 'next';
// // // search MFE
// // window.dispatchEvent(new CustomEvent('flight-selected', { detail: flight }));

// // // booking MFE
// // window.addEventListener('flight-selected', (e) => {
// //     console.log(e.detail);
// // });

// const nextConfig: NextConfig = {
//   reactStrictMode: true,
//   // turbopack: {
//   //   root: '../../',
//   //   resolveAlias: {
//   //     '@repo/shared-styles': '../../packages/shared-styles',
//   //     'packages-shared-ui': '../../packages/shared-ui'
//   //   }
//   // },
//   // transpilePackages: ['packages-shared-ui', '@repo/shared-styles'],
  
//   async rewrites() {
//     return [
//       // Multi-zone micro frontend routing
//        { source: '/login', destination: 'http://localhost:3010/login' },
//       { source: '/auth/:path*', destination: 'http://localhost:3010/:path*' },

//       { source: '/search/:path*', destination: 'http://localhost:3011/:path*' },
//       { source: '/booking/:path*', destination: 'http://localhost:3012/:path*' },
//       { source: '/payment/:path*', destination: 'http://localhost:3013/:path*' },
//       { source: '/customer/:path*', destination: 'http://localhost:3014/:path*' },
//       { source: '/b2b/:path*', destination: 'http://localhost:3015/:path*' },
//       { source: '/admin/:path*', destination: 'http://localhost:3016/:path*' },
//     ];
//   },
// };

// export default nextConfig;

// apps/host/next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      // beforeFiles ensures these run BEFORE checking for local pages on port 3000
      beforeFiles: [
        // 1. THE MISSING RULE: Proxies the actual page (e.g., /auth/login)
        {
          source: '/auth/:path*',
          destination: 'http://localhost:3010/auth/:path*',
        },
        // 2. STATIC ASSETS: Map Auth-prefixed requests back to Auth port
        {
          source: '/auth-static/_next/:path*',
          destination: 'http://localhost:3010/_next/:path*',
        },
        // 3. DEV CHUNKS: Proxies the dev-specific HMR/JS chunks
        {
          source: '/_next/static/chunks/:path*',
          destination: 'http://localhost:3010/_next/static/chunks/:path*',
        }
      ],
    };
  },
};

export default nextConfig;
