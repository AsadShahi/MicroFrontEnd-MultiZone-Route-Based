import type { NextConfig } from 'next';
// // search MFE
// window.dispatchEvent(new CustomEvent('flight-selected', { detail: flight }));

// // booking MFE
// window.addEventListener('flight-selected', (e) => {
//     console.log(e.detail);
// });

const nextConfig: NextConfig = {
  reactStrictMode: true,
  
  async rewrites() {
    return [
      // Multi-zone micro frontend routing
      { source: '/login', destination: 'http://localhost:3010/login' },
      { source: '/auth/:path*', destination: 'http://localhost:3010/:path*' },
      { source: '/search/:path*', destination: 'http://localhost:3011/:path*' },
      { source: '/booking/:path*', destination: 'http://localhost:3012/:path*' },
      { source: '/payment/:path*', destination: 'http://localhost:3013/:path*' },
      { source: '/customer/:path*', destination: 'http://localhost:3014/:path*' },
      { source: '/b2b/:path*', destination: 'http://localhost:3015/:path*' },
      { source: '/admin/:path*', destination: 'http://localhost:3016/:path*' },
    ];
  },
};

export default nextConfig;