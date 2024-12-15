"use server"

import { DBResult, Item, Recepie, RevalidationPaths } from "@/lib/supabase/complex_types";
import { createClient } from "@/lib/supabase/server";
import { revalidateAll } from "@/lib/utils";

export async function createRecepie(recepieData: Omit<Recepie, 'id' | 'created_at' | 'ingredients'>, revalidatePaths: RevalidationPaths): DBResult<Item> {
    const supabase = await createClient()

    const result = await supabase
        .from('recepies')
        .insert(recepieData)
        .single();

    revalidateAll(revalidatePaths)

    return result
}

export async function getRecepies(): DBResult<Recepie[]> {
    return (await createClient())
        .from('recepies')
        .select(`*`)
}

export async function getRecepieById(id: string): DBResult<Recepie> {
    return (await createClient())
        .from('recepies')
        .select(`*`)
        .eq("id", id)
        .single()
}

