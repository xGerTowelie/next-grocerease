"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { createItem } from "@/actions/items";
import { SearchableSelect } from "../SearchableSelect";
import { getItemTypes } from "@/actions/item-types";
import { ItemType, Store } from "@/lib/supabase/complex_types";
import { getStores } from "@/actions/stores";
import { Checkbox } from "../ui/checkbox";
import DebugState from "../DebugState";
import { Label } from "../ui/label";

export default function AddItemForm() {
    const [name, setName] = useState("")
    const [isFavorite, setIsFavorite] = useState(false)
    const [types, setTypes] = useState<ItemType[]>([])
    const [stores, setStores] = useState<Store[]>([])
    const [selectedTypeId, setSelectedTypeId] = useState("")
    const [selectedStoreId, setSelectedStoreId] = useState("")

    const item = {
        name: name,
        type_id: selectedTypeId,
        store_id: selectedStoreId,
        is_favorite: isFavorite
    }


    useEffect(() => {
        const fetchAll = async () => {
            const typePromise = await getItemTypes()
            const storePromise = await getStores()

            const [typeResult, storeResult] = await Promise.all([typePromise, storePromise])

            if (typeResult.data) {
                setTypes(typeResult.data)
            }

            if (storeResult.data) {
                setStores(storeResult.data)
            }
        }

        fetchAll()
    }, [])

    const handleSubmit = async () => {
        await createItem({
            name: name,
            type_id: selectedTypeId,
            store_id: selectedStoreId,
            is_favorite: isFavorite
        }, ['/items'])
    }
    const handleCheckedChange = (checked: boolean | 'indeterminate') => {
        setIsFavorite(checked === true)
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Add a new Item</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
                <DebugState state={item} title="test" />
                <Input value={name} placeholder="Cookies" onChange={e => setName(e.currentTarget.value)} />
                <SearchableSelect
                    items={types}
                    onChange={setSelectedTypeId}
                    placeholder="Select Type..."
                />
                <SearchableSelect
                    items={stores}
                    onChange={setSelectedStoreId}
                    placeholder="Select Store..."
                />
                <div className="flex items-center space-x-2">
                    <Checkbox
                        id="favorite"
                        checked={isFavorite}
                        onCheckedChange={handleCheckedChange}
                    />
                    <Label
                        htmlFor="favorite"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Favorite
                    </Label>
                </div>
            </CardContent>
            <CardFooter>
                <Button disabled={!item.name || !item.type_id || !item.store_id} onClick={handleSubmit}>Add</Button>
            </CardFooter>
        </Card>

    )
}
