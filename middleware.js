import { NextResponse } from 'next/server';

export async function middleware(request) {
	const cookieStore = await request.cookies;
	const token = cookieStore.get('token')?.value;

	const pathname = request.nextUrl.pathname;

	// Protected routes (redirect if not logged in)
	if (pathname.startsWith('/dashboard')) {
		if (!token) {
			const loginUrl = new URL('/auth/login', request.url);
			return NextResponse.redirect(loginUrl);
		}
	}

	// Auth routes (redirect if already logged in)
	if (pathname.startsWith('/auth/login') || pathname.startsWith('/auth/register')) {
		if (token) {
			const dashboardUrl = new URL('/dashboard', request.url);
			return NextResponse.redirect(dashboardUrl);
		}
	}

	return NextResponse.next();
}

// Define paths where middleware runs
export const config = {
	matcher: ['/dashboard/:path*', '/auth/:path*'],
};
