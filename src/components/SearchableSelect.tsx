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

interface SearchableSelectProps {
    options: Record<string, string>
    onChange: (value: string) => void
    placeholder?: string
}

export function SearchableSelect({
    options,
    onChange,
    placeholder = "Select an item...",
}: SearchableSelectProps) {
    const {
        open,
        setOpen,
        value,
        setValue,
        search,
        setSearch,
        filteredOptions,
    } = useSearchableSelect(options)

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between"
                >
                    {value ? options[value] : placeholder}
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
                        {filteredOptions.map(([key, label]) => (
                            <CommandItem
                                key={key}
                                value={key}
                                onSelect={(currentValue) => {
                                    setValue(currentValue === value ? "" : currentValue)
                                    onChange(currentValue)
                                    setOpen(false)
                                }}
                            >
                                <Check
                                    className={cn(
                                        "mr-2 h-4 w-4",
                                        value === key ? "opacity-100" : "opacity-0"
                                    )}
                                />
                                {label}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}


