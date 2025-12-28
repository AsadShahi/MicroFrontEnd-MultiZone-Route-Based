// import 'packages-shared-ui/global.css';
// 
 import '@repo/shared-styles/globals.css'
// import './global.css'


import React from 'react';

export const metadata = {
  title: 'Authentication',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
