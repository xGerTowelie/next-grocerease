"use server"

import jwt from 'jsonwebtoken';
import { Session } from '@supabase/supabase-js';
import { DBResult, RevalidationPaths, User } from '@/lib/supabase/complex_types';
import { createClient } from '@/lib/supabase/server';
import { revalidateAll } from '@/lib/utils';

export async function getSessionRoles(session: Session | null): Promise<string[]> {
    try {
        if (!session) throw new Error('No session available!');

        if (!session.provider_token) throw new Error('No provider token in session found!');

        // Decode the JWT (without verification, as we trust Supabase)
        const decodedToken = jwt.decode(session.provider_token);

        if (!decodedToken || typeof decodedToken !== 'object') {
            throw new Error('Invalid provider token');
        }

        // Extract realm roles
        const realmAccess = decodedToken.realm_access;
        if (!realmAccess || !Array.isArray(realmAccess.roles)) {
            return [];
        }

        return realmAccess.roles;
    } catch (error) {
        console.error('Error extracting realm roles:', error);
        return [];
    }
}

export async function getCurrentUser(): DBResult<User> {

    const supabase = await createClient()

    const { data: authUser, error: authError } = await supabase.auth.getUser()
    if (authError) return { data: null, error: authError }
    if (!authUser) return { data: null, error: new Error("No user for current session found. Please relog!") }

    const { data: user, error: userError } = await supabase
        .from('users')
        .select('*')
        .eq('id', authUser.user.id)
        .single()

    if (userError) return { data: null, error: userError }
    if (!user) return { data: null, error: new Error("No user for current session found. Please relog!") }

    return { data: user, error: null }
}

export async function updateUser(userInput: User, revalidatePaths: RevalidationPaths): DBResult<User> {
    const supabase = await createClient()

    const result = await supabase
        .from('users')
        .upsert(userInput)

    revalidateAll(revalidatePaths)

    return result
}

