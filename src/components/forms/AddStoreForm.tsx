"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import { createStore } from "@/actions/stores";

export default function AddStoreForm() {
    const [name, setName] = useState("")
    const [url, setUrl] = useState("")

    const handleSubmit = async () => {
        await createStore({
            name: name,
            image_url: url
        }, ['/types'])
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>New Store</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-row space-x-5">
                    <Input value={name} placeholder="Aldi, Edeka, ..." onChange={e => setName(e.currentTarget.value)} />
                    <Input value={url} placeholder="Optional: https://link-to-an-image.com/image.png" onChange={e => setUrl(e.currentTarget.value)} />
                </div>
            </CardContent>
            <CardFooter>
                <Button disabled={name === ""} onClick={handleSubmit}>Add Store</Button>
            </CardFooter>
        </Card >

    )
}
