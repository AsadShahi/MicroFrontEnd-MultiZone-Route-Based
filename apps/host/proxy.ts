import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
// Use your preferred JWT library (e.g., jose or next-auth/jwt)
// import { decode } from 'next-auth/jwt'; 

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Intercept requests to the admin zone
  if (pathname.startsWith('/admin')) {
    const sessionToken = request.cookies.get('next-auth.session-token')?.value;

    if (!sessionToken) {
      // Redirect to login if no session exists
      return NextResponse.redirect(new URL('/login', request.url));
    }

    // Decode and verify the role
    // const decodedToken = await decode({
    //   token: sessionToken,
    //   secret: process.env.NEXTAUTH_SECRET!,
    // });

    // if (decodedToken?.role !== 'admin') {
    //   // Redirect to home or 403 page if not an admin
    //   return NextResponse.redirect(new URL('/', request.url));
    // }
  }

  return NextResponse.next();
}

// Ensure the proxy runs for all relevant routes
export const config = {
  matcher: ['/admin/:path*'],
};
