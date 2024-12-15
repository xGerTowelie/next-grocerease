"use server"

import { BasePosition, DBResult, Report, RevalidationPaths, User } from "@/lib/supabase/complex_types";
import { createClient } from "@/lib/supabase/server";
import { revalidateAll } from "@/lib/utils";


/*
 * Reports
 */
export async function createReport(reportData: Omit<Report, 'id' | 'created_at' | 'updated_at' | 'creator_id' | 'assignee_id'>, revalidatePaths: RevalidationPaths): DBResult<User> {
    const supabase = await createClient()

    const result = await supabase
        .from('report')
        .insert(reportData)
        .single();

    revalidateAll(revalidatePaths)

    return result
}

export async function getReport(id: string): DBResult<Report> {
    return (await createClient())
        .from('report')
        .select(`*`)
        .eq('id', id)
        .single()
}

/*
 * Report Positions
 */
export async function getReportPositions(reportId: string): DBResult<BasePosition[]> {
    return (await createClient())
        .from('base_position')
        .select(`*`)
        .eq('report_id', reportId)
}

