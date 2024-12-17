"use server"

import { DBResult, Item, RevalidationPaths, Store } from "@/lib/supabase/complex_types";
import { createClient } from "@/lib/supabase/server";
import { revalidateAll } from "@/lib/utils";
import { revalidatePath } from "next/cache";

export async function createStore(storeData: Omit<Store, 'id' | 'created_at'>, revalidatePaths?: RevalidationPaths): DBResult<Item> {
    const supabase = await createClient()

    const result = await supabase
        .from('stores')
        .insert(storeData)
        .single();

    revalidatePath('/stores')

    if (revalidatePaths) {
        revalidateAll(revalidatePaths)
    }

    return result
}

export async function getStores(): DBResult<Store[]> {
    return (await createClient())
        .from('stores')
        .select(`*`)
        .order('name', { ascending: true })
}


export async function deleteStore(uuid: string): DBResult<Store[]> {
    return (await createClient())
        .from('stores')
        .delete()
        .eq('id', uuid)
}

