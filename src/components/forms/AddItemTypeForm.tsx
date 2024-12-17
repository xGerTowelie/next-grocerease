"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import { ColorPicker } from "../ColorPicker";
import { createItemType } from "@/actions/item-types";

export default function AddItemTypeForm() {
    const [name, setName] = useState("")
    const [color, setColor] = useState("")

    const handleSubmit = async () => {
        await createItemType({
            name: name,
            color: color
        }, ['/types'])
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>New Type</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-row space-x-5">
                    <ColorPicker value={color} onChange={setColor} />
                    <Input value={name} placeholder="Food, Drink, ..." onChange={e => setName(e.currentTarget.value)} />
                </div>
            </CardContent>
            <CardFooter>
                <Button disabled={name === "" || color === ""} onClick={handleSubmit}>Add Type</Button>
            </CardFooter>
        </Card >

    )
}
