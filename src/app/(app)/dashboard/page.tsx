import { Suspense } from 'react'
import NewExpenseReportForm from '@/components/forms/NewExpenseReportForm'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'
import { ReportSection } from '@/components/ReportSection'

export default function Dashboard() {
    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
            <NewExpenseReportForm />
            <Suspense fallback={<LoadingSpinner text="Loading reports, please wait..." />}>
                <ReportSection />
            </Suspense>
        </div>
    )
}


