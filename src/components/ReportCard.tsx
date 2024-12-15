'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ReportWithUsers } from "@/lib/supabase/complex_types"
import { ReportTable } from "./ReportTable"

type ReportCardProps = {
    title: string
    reports: ReportWithUsers[]
}

export function ReportCard({ title, reports }: ReportCardProps) {

    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                {reports.length == 0
                    ? <p className="text-muted-foreground italic text-sm">No reports in this section yet.</p>
                    : <ReportTable reports={reports} />}
            </CardContent>
        </Card>
    )
}


