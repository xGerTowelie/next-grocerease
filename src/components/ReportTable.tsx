'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { ReportWithUsers } from "@/lib/supabase/complex_types"
import { displayDate } from "@/lib/utils"

type ReportTableProps = { reports: ReportWithUsers[] }

export function ReportTable({ reports }: ReportTableProps) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Creator</TableHead>
                    <TableHead>Assignee</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Updated</TableHead>
                    <TableHead>Open</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {reports.map((report) => (
                    <TableRow key={report.id}>
                        <TableCell>{displayDate(report.date as string)}</TableCell>
                        <TableCell>{report.creator?.full_name}</TableCell>
                        <TableCell>{report.assignee?.full_name}</TableCell>
                        <TableCell>{report.status}</TableCell>
                        <TableCell>{displayDate(report.created_at)}</TableCell>
                        <TableCell>{displayDate(report.updated_at as string)}</TableCell>
                        <TableCell><Link href={`/report/${report.id}`}><ExternalLink size="18" /></Link></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
