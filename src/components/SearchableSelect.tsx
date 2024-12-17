import * as React from "react"
import { Check, ChevronsUpDown } from 'lucide-react'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useSearchableSelect } from "@/hooks/use-searchable-select"

interface SupabaseItem {
    id: string
    name: string
    [key: string]: any  // Allow for other properties
}

interface SearchableSelectProps {
    items: SupabaseItem[]
    onChange: (value: string) => void
    placeholder?: string
    initialValue?: string
}

export function SearchableSelect({
    items,
    onChange,
    placeholder = "Select an item...",
    initialValue,
}: SearchableSelectProps) {
    const {
        open,
        setOpen,
        value,
        setValue,
        search,
        setSearch,
        filteredItems,
    } = useSearchableSelect(items, initialValue)

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between"
                >
                    {value ? items.find(item => item.id === value)?.name : placeholder}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
                <Command>
                    <CommandInput
                        placeholder="Search..."
                        value={search}
                        onValueChange={setSearch}
                    />
                    <CommandEmpty>No item found.</CommandEmpty>
                    <CommandGroup>
                        {filteredItems.map((item) => (
                            <CommandItem
                                key={item.id}
                                value={item.id}
                                onSelect={(currentValue) => {
                                    setValue(currentValue === value ? "" : currentValue)
                                    onChange(currentValue)
                                    setOpen(false)
                                }}
                            >
                                <Check
                                    className={cn(
                                        "mr-2 h-4 w-4",
                                        value === item.id ? "opacity-100" : "opacity-0"
                                    )}
                                />
                                {item.name}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}


