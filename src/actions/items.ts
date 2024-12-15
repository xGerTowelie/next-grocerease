"use server"

import { DBResult, Item, RevalidationPaths } from "@/lib/supabase/complex_types";
import { createClient } from "@/lib/supabase/server";
import { revalidateAll } from "@/lib/utils";

export async function createItem(itemData: Omit<Item, 'id' | 'created_at'>, revalidatePaths: RevalidationPaths): DBResult<Item> {
    const supabase = await createClient()

    const result = await supabase
        .from('shopping_items')
        .insert(itemData)
        .single();

    revalidateAll(revalidatePaths)

    return result
}

export async function getItems(): DBResult<Item[]> {
    return (await createClient())
        .from('shopping_items')
        .select(`*`)
}

