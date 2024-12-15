import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type EnumSelectProps<T extends string> = {
    value: T,
    onChange: (value: T) => void,
    choices: EnsureAll<T, Record<T, string>>
}

export function EnumSelect<T extends string>({ value, onChange, choices }: EnumSelectProps<T>) {
    const handleChange = (newValue: string) => {
        onChange(newValue as T)
    }

    return (
        <Select value={value} onValueChange={handleChange}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {(Object.entries(choices) as [T, string][]).map(([key, value]) => (
                        <SelectItem key={key} value={key}>{value}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

