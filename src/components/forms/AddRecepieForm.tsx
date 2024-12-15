"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import { createRecepie } from "@/actions/recepies";

export default function AddRecepieForm() {
    const [name, setName] = useState("")

    const handleSubmit = async () => {
        await createRecepie({
            name: name,
        }, ['/items'])
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Add a new Recepie</CardTitle>
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
