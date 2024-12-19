"use client"

import { Item } from "@/lib/supabase/complex_types"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Heart, ShoppingCart, Pencil } from 'lucide-react'
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useCallback, useState } from "react"
import EditItemForm from "./forms/EditItemForm"
import { DialogProvider, useDialog } from "./DialogProvider"
import Image from "next/image"

interface ItemCardProps {
    item: Item
    onEditClick: (item: Item) => void
    onFavoriteToggle: (item: Item) => void
    onAddToCart: (item: Item) => void
}

function ItemCard({ item, onEditClick, onFavoriteToggle, onAddToCart }: ItemCardProps) {
    return (
        <Card className="flex flex-col h-full">
            <div className="relative aspect-square">
                <Image
                    src={item.image_url}
                    alt={item.name || ""}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                />
            </div>
            <CardHeader>
                <CardTitle className="text-lg font-medium">
                    {item.name}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>Type: {item.type_id}</CardDescription>
                <CardDescription>Store: {item.store_id}</CardDescription>
            </CardContent>
            <CardFooter className="mt-auto flex justify-between">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onFavoriteToggle(item)}
                    className={item.is_favorite ? "text-red-500" : "text-gray-500"}
                >
                    <Heart className="h-5 w-5" />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onAddToCart(item)}
                >
                    <ShoppingCart className="h-5 w-5" />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onEditClick(item)}
                >
                    <Pencil className="h-5 w-5" />
                </Button>
            </CardFooter>
        </Card>
    )
}

interface ItemListProps {
    items: Item[]
}

function ItemListContent({ items }: ItemListProps) {
    const { closeDialog } = useDialog()
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [editingItem, setEditingItem] = useState<Item | null>(null);

    const handleEditClick = useCallback((item: Item) => {
        setEditingItem(item);
        setIsDialogOpen(true);
    }, []);

    const handleEditClose = useCallback(() => {
        setIsDialogOpen(false);
        setEditingItem(null);
        closeDialog();
    }, [closeDialog]);

    const handleFavoriteToggle = useCallback((item: Item) => {
        // TODO: Implement favorite toggle logic
        console.log('Toggle favorite for item:', item.id);
    }, []);

    const handleAddToCart = useCallback((item: Item) => {
        // TODO: Implement add to cart logic
        console.log('Add to cart item:', item.id);
    }, []);

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {items.map((item) => (
                    <ItemCard
                        key={item.id}
                        item={item}
                        onEditClick={handleEditClick}
                        onFavoriteToggle={handleFavoriteToggle}
                        onAddToCart={handleAddToCart}
                    />
                ))}
            </div>
            <Dialog open={isDialogOpen} onOpenChange={(open) => {
                if (!open) {
                    handleEditClose()
                }
            }}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Edit Item</DialogTitle>
                    </DialogHeader>
                    {editingItem && (
                        <EditItemForm
                            item={editingItem}
                            onClose={handleEditClose}
                        />
                    )}
                </DialogContent>
            </Dialog>
        </>
    )
}

export default function ItemList(props: ItemListProps) {
    return (
        <DialogProvider>
            <ItemListContent {...props} />
        </DialogProvider>
    )
}


