"use client"

import { ItemType } from "@/lib/supabase/complex_types"
import { Card, CardHeader } from "./ui/card"
import { EllipsisVertical } from "lucide-react"

export default function TypeList({ types }: { types: ItemType[] }) {
    return (
        <div className="grid grid-cols-6 gap-5">
            {
                types.map((type: ItemType) => (
                    <Card key={type.id}>
                        <CardHeader>
                            <div className="flex flex-row gap-3 items-center">
                                <div className="w-8 h-8 rounded" style={{ background: type.color as string }} />
                                <h1 className="flex-1">
                                    {type.name}
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

