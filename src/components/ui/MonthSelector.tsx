import React, { useState, useMemo } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { getMonthOptions } from '@/lib/utils'

interface MonthSelectorProps {
    onChange: (date: Date) => void
}

export function MonthSelector({ onChange }: MonthSelectorProps) {
    const [selectedMonth, setSelectedMonth] = useState<string | undefined>()
    const monthOptions = useMemo(() => getMonthOptions(), [])

    const handleMonthChange = (value: string) => {
        setSelectedMonth(value)
        const currentYear = new Date().getFullYear()
        const selectedDate = new Date(Date.UTC(currentYear, parseInt(value), 1))
        onChange(selectedDate)
    }

    return (
        <Select onValueChange={handleMonthChange} value={selectedMonth}>
            <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select a month" />
            </SelectTrigger>
            <SelectContent>
                {monthOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                        {option.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}


