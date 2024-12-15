import { NextResponse, type NextRequest } from 'next/server';
import { updateSession } from '@/lib/supabase/middleware';
import { createClient } from '@/lib/supabase/server';

export async function middleware(request: NextRequest) {
    const supabase = await createClient();
    const user = await supabase.auth.getUser();

    if (!user.data.user && request.nextUrl.pathname !== '/login' && request.nextUrl.pathname !== '/auth/callback') {
        console.log("redirect", request.nextUrl.pathname)
        console.log("user", user.data.user)
        return NextResponse.redirect(new URL("/login", request.url))
    }

    return await updateSession(request);
}

export const config = {
    matcher: [
        /*
         * Match all request paths except:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
         * Feel free to modify this pattern to include more paths.
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'
    ]
};

