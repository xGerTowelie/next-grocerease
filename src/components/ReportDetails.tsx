import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { Report } from "@/lib/supabase/complex_types"
import { displayDate, expenseDate } from "@/lib/utils"

type ReportDetailsProps = {
    report: Report
}

export async function ReportDetails({ report }: ReportDetailsProps) {
    return (
        <Card className="mb-6">
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Report Details</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">ID</TableCell>
                            <TableCell>{report.id}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Expense Date</TableCell>
                            <TableCell>
                                {expenseDate(report.date as string)}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Created At</TableCell>
                            <TableCell>{displayDate(report.created_at)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Updated At</TableCell>
                            <TableCell>{displayDate(report.updated_at as string)}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
