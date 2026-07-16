import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from './lib/jwt';

// Define protected routes
const protectedRoutes = ['/profile', '/dashboard', '/admin', '/checkout'];
// Define roles allowed per path prefix
const roleMap: Record<string, string[]> = {
  '/profile': ['CUSTOMER', 'SHOP_OWNER', 'ADMIN'],
  '/dashboard': ['SHOP_OWNER'],
  '/admin': ['ADMIN'],
  '/checkout': ['CUSTOMER']
};

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if path is protected
  const isProtected = protectedRoutes.some(route => pathname.startsWith(route));
  
  if (!isProtected) {
    return NextResponse.next();
  }
  
  const token = request.cookies.get('token')?.value;
  
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  const payload = await verifyToken(token);
  
  if (!payload) {
    // Invalid token, clear it and redirect
    const response = NextResponse.redirect(new URL('/login', request.url));
    response.cookies.delete('token');
    return response;
  }
  
  // Role based authorization
  for (const [route, allowedRoles] of Object.entries(roleMap)) {
    if (pathname.startsWith(route)) {
      if (!allowedRoles.includes(payload.role)) {
        // Forbidden
        return NextResponse.redirect(new URL('/unauthorized', request.url));
      }
    }
  }

  // Pass user info in headers for API routes or server components
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-user-id', payload.userId);
  requestHeaders.set('x-user-role', payload.role);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
