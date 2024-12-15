import { getReport } from "@/actions/reports"
import { ReportDetails } from "@/components/ReportDetails"
import { notFound } from "next/navigation"

type ReportPageProps = {
    params: Promise<{ reportId: string }>
}

export default async function ReportPage(props: ReportPageProps) {
    const { reportId } = await props.params

    const { data: report, error } = await getReport(reportId)

    if (error) {
        console.error(error)
        notFound()
    }

    if (!report) {
        notFound()
    }

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-bold mb-6">Expense Report Details</h1>
            <ReportDetails report={report} />
        </div>
    )

}
