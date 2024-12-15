'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from '@/hooks/use-toast'
import { formatDate } from '@/lib/utils'
import { createReport } from '@/actions/reports'
import { MonthSelector } from '../ui/MonthSelector'

export default function NewExpenseReportForm() {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { toast } = useToast()

    const handleMonthChange = (date: Date) => {
        setSelectedDate(date)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!selectedDate) return

        setIsSubmitting(true)

        try {
            await createReport({
                date: formatDate(selectedDate),
                status: 'DRAFT'
            }, ['/dashboard'])
            toast({
                title: "Success",
                description: "Report was created successfully.",
            })
        } catch (error) {
            console.error('Error creating expense report:', error)
            toast({
                title: "Error",
                description: "Failed to create expense report. Please try again.",
                variant: "destructive",
            })
        } finally {
            setSelectedDate(null)
            setIsSubmitting(false)
        }
    }

    return (
        <Card className="mb-8">
            <CardHeader>
                <CardTitle>Create New Report</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <MonthSelector onChange={handleMonthChange} />
                    </div>
                    <Button disabled={!selectedDate || isSubmitting} type="submit">
                        {isSubmitting ? 'Creating...' : 'Create'}
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}


