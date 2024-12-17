import { useState, useMemo } from 'react'

export function useSearchableSelect(options: Record<string, string>) {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState<string>('')
    const [search, setSearch] = useState('')

    const filteredOptions = useMemo(() => {
        const entries = Object.entries(options)
        if (!search) return entries
        return entries.filter(([_, label]) =>
            label.toLowerCase().includes(search.toLowerCase())
        )
    }, [options, search])

    return {
        open,
        setOpen,
        value,
        setValue,
        search,
        setSearch,
        filteredOptions,
    }
}


