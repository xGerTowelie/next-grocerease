"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { updateItem } from "@/actions/items";
import { SearchableSelect } from "../SearchableSelect";
import { getItemTypes } from "@/actions/item-types";
import { getStores } from "@/actions/stores";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Item, ItemType, Store } from "@/lib/supabase/complex_types";

interface EditItemFormProps {
    item: Item;
    onClose: () => void;
}

export default function EditItemForm({ item, onClose }: EditItemFormProps) {
    const [name, setName] = useState(item.name)
    const [isFavorite, setIsFavorite] = useState(item.is_favorite)
    const [types, setTypes] = useState<ItemType[]>([])
    const [stores, setStores] = useState<Store[]>([])
    const [selectedTypeId, setSelectedTypeId] = useState(item.type_id)
    const [selectedStoreId, setSelectedStoreId] = useState(item.store_id)

    useEffect(() => {
        const fetchAll = async () => {
            const [typeResult, storeResult] = await Promise.all([getItemTypes(), getStores()])

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
        await updateItem({
            id: item.id,
            name: name,
            type_id: selectedTypeId,
            store_id: selectedStoreId,
            is_favorite: isFavorite
        }, ['/items'])
        onClose()
    }

    const handleCheckedChange = (checked: boolean | 'indeterminate') => {
        setIsFavorite(checked === true)
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Edit Item</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
                <Input value={name} placeholder="Cookies" onChange={e => setName(e.currentTarget.value)} />
                <SearchableSelect
                    items={types}
                    onChange={setSelectedTypeId}
                    placeholder="Select Type..."
                    initialValue={selectedTypeId}
                />
                <SearchableSelect
                    items={stores}
                    onChange={setSelectedStoreId}
                    placeholder="Select Store..."
                    initialValue={selectedStoreId}
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
                <Button onClick={handleSubmit}>Update</Button>
                <Button variant="outline" onClick={onClose} className="ml-2">Cancel</Button>
            </CardFooter>
        </Card>
    )
}


