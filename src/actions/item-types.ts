"use server"

import { DBResult, Item, ItemType, RevalidationPaths } from "@/lib/supabase/complex_types";
import { createClient } from "@/lib/supabase/server";
import { revalidateAll } from "@/lib/utils";
import { revalidatePath } from "next/cache";

export async function createItemType(typeData: Omit<ItemType, 'id' | 'created_at'>, revalidatePaths?: RevalidationPaths): DBResult<Item> {
    const supabase = await createClient()

    const result = await supabase
        .from('types')
        .insert(typeData)
        .single();

    revalidatePath('/types')

    if (revalidatePaths) {
        revalidateAll(revalidatePaths)
    }

    return result
}

export async function getItemTypes(): DBResult<ItemType[]> {
    await new Promise((resolve) => setTimeout(resolve, 5000))
    return (await createClient())
        .from('types')
        .select(`*`)
        .order('name', { ascending: true })
}

