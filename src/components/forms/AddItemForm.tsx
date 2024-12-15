"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import { createItem } from "@/actions/items";

export default function AddItemForm() {
    const [name, setName] = useState("")

    const handleSubmit = async () => {
        await createItem({
            name: name,
            order: 1000,
            type: 'Lebensmittel'
        }, ['/items'])
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Add a new item</CardTitle>
            </CardHeader>
            <CardContent>
                <Input value={name} onChange={e => setName(e.currentTarget.value)} />
            </CardContent>
            <CardFooter>
                <Button onClick={handleSubmit}>Add</Button>
            </CardFooter>
        </Card>

    )
}
