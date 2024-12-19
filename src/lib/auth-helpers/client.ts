import { createClient } from '@/lib/supabase/client';
import { redirectToPath } from '@/lib/auth-helpers/server';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { redirect } from 'next/navigation';
import { getURL } from '../utils';


// Used to send formData to a server function and after use dynamic routing
export async function handleFormServerside(
    e: React.FormEvent<HTMLFormElement>,
    requestFunc: (formData: FormData) => Promise<string>,
    router: AppRouterInstance | null = null
): Promise<boolean | void> {
    // Prevent default form submission refresh
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const redirectUrl: string = await requestFunc(formData);

    if (router) {
        // client-side
        return router.push(redirectUrl);
    } else {
        // server-side
        return await redirectToPath(redirectUrl);
    }
}

export async function signInWithKeycloak() {
    const supabase = createClient();
    const redirectURL = getURL('/auth/callback');
    console.log("redirect to:", redirectURL)
    await supabase.auth.signInWithOAuth({
        provider: "keycloak",
        options: {
            scopes: "openid",
            redirectTo: redirectURL
        }
    });
}

export async function signOut() {
    const supabase = createClient();
    await supabase.auth.signOut()
    redirect('/')
}

