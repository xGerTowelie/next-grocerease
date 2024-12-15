/**
 * Author: Marcel Maier
 *
 * TODO:
 * This was an initial code from the supabase team.
 * It uses the new next.js cache().
 * We should evaluate what it does and how it works.
 * Then we should decide to use as well.
 */

import { SupabaseClient } from '@supabase/supabase-js';
import { cache } from 'react';

export const getUser = cache(async (supabase: SupabaseClient) => {
    const {
        data: { user }
    } = await supabase.auth.getUser();
    return user;
});

export const getUserDetails = cache(async (supabase: SupabaseClient) => {
    const { data: userDetails } = await supabase
        .from('users')
        .select('*')
        .single();
    return userDetails;
});

