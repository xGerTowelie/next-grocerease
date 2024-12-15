'use server';

import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { getErrorRedirect } from '../utils';

export async function redirectToPath(path: string) {
    return redirect(path);
}

export async function SignOut(formData: FormData) {
    const pathName = String(formData.get('pathName')).trim();

    const supabase = await createClient();
    const { error } = await supabase.auth.signOut();

    if (error) {
        return getErrorRedirect(
            pathName,
            'Hmm... Something went wrong.',
            'You could not be signed out.'
        );
    }

    return '/welcome';
}

