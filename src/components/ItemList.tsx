"use client"

import { Item } from "@/lib/supabase/complex_types"
import { Card, CardHeader } from "./ui/card"
import { EllipsisVertical } from "lucide-react"

export default function ItemList({ items }: { items: Item[] }) {
    return (
        <div className="grid grid-cols-6 gap-5">
            {
                items.map((item: Item) => (
                    <Card key={item.id}>
                        <CardHeader>
                            <div className="flex flex-row gap-3 items-center">
                                <h1 className="flex-1">
                                    {item.name}
                                </h1>
                                <EllipsisVertical />
                            </div>
                        </CardHeader>
                    </Card>
                ))
            }
        </div>
    )
}

