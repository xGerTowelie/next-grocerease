import { useState, useMemo } from 'react'

interface SupabaseItem {
    id: string
    name: string
    [key: string]: any  // Allow for other properties
}

export function useSearchableSelect(items: SupabaseItem[]) {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState<string>('')
    const [search, setSearch] = useState('')

    const filteredItems = useMemo(() => {
        if (!search) return items
        return items.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
        )
    }, [items, search])

    return {
        open,
        setOpen,
        value,
        setValue,
        search,
        setSearch,
        filteredItems,
    }
}

