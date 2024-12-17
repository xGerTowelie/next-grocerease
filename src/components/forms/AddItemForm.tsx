"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import { createItem } from "@/actions/items";
import { SearchableSelect } from "../SearchableSelect";

export default function AddItemForm() {
    const [name, setName] = useState("")

    const options = {
        apple: "Apple",
        banana: "Banana",
        cherry: "Cherry",
        date: "Date",
        elderberry: "Elderberry",
        fig: "Fig",
        grape: "Grape",
    }


    const handleSubmit = async () => {
        await createItem({
            name: name,
            type_id: "",
            store_id: "",
            is_favorite: false
        }, ['/items'])
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Add a new Item</CardTitle>
            </CardHeader>
            <CardContent>
                <Input value={name} onChange={e => setName(e.currentTarget.value)} />
                <SearchableSelect
                    options={options}
                    onChange={(value) => console.log("Selected:", value)}
                    placeholder="Select..."
                />
            </CardContent>
            <CardFooter>
                <Button onClick={handleSubmit}>Add</Button>
            </CardFooter>
        </Card>

    )
}
