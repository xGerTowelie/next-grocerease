import { createClient } from '@/lib/supabase/server';
import { getErrorRedirect, getStatusRedirect } from '@/lib/utils';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {

    // The `/auth/callback` route is required for the server-side auth flow implemented
    // by the `@supabase/ssr` package. It exchanges an auth code for the user's session.
    const requestUrl = new URL(request.url);
    const code = requestUrl.searchParams.get('code');

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || requestUrl.origin;

    if (code) {
        const supabase = await createClient();
        const { error } = await supabase.auth.exchangeCodeForSession(code);

        if (error) {
            return NextResponse.redirect(
                getErrorRedirect(
                    `${siteUrl}/welcome`,
                    error.name,
                    "Sorry, we weren't able to log you in. Please try again."
                )
            );
        }
    }

    return NextResponse.redirect(
        getStatusRedirect(
            `${siteUrl}/`,
            'Success!',
            'You are now signed in.'
        )
    );
}

