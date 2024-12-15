import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { getReportPositions } from '@/actions/reports'
import { BasePosition } from '@/lib/supabase/complex_types'

type ReportPositionsProps = {
    reportId: string
}

export async function ReportPositions({ reportId }: ReportPositionsProps) {
    const { data: positions, error } = await getReportPositions(reportId)

    if (error) {
        throw error
    }

    if (!positions) {
        return (
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Expense Positions</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>No expense positions added yet.</p>
                </CardContent>
            </Card>
        )
    }

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Expense Positions</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Type</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {positions.map((position, index: number) => (
                            <Position key={index} position={position} />
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}

const Position = ({ position }: { position: BasePosition }) => {
    return (
        <TableRow key={position.id}>
            <TableCell>{position.type}</TableCell>
            <TableCell>{position.title}</TableCell>
            <TableCell>{position.type}</TableCell>
            <TableCell>{position.total_cost}</TableCell>
        </TableRow>
    )
}
