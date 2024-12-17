"use client"

import { Item } from "@/lib/supabase/complex_types"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { MoreHorizontal } from 'lucide-react'
import { Button } from "./ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useCallback, useState } from "react"
import EditItemForm from "./forms/EditItemForm"
import { DialogProvider, useDialog } from "./DialogProvider"

interface ItemListProps {
    items: Item[]
}

function ItemListContent({ items }: ItemListProps) {
    const [open, setOpen] = useState(false)
    const [openId, setOpenId] = useState("")
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

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((item) => (
                    <Card key={item.id}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                {item.name}
                            </CardTitle>
                            <DropdownMenu
                                open={item.id === openId && open}
                                onOpenChange={(isOpen) => {
                                    setOpen(isOpen)
                                    setOpenId(item.id)
                                }}>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="h-8 w-8 p-0">
                                        <span className="sr-only">Open menu</span>
                                        <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem onClick={() => {
                                        setOpen(false)
                                    }} onSelect={() => handleEditClick(item)}>
                                        Edit
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>Type: {item.type_id}</CardDescription>
                            <CardDescription>Store: {item.store_id}</CardDescription>
                        </CardContent>
                        <CardFooter>
                            <CardDescription>Favorite: {item.is_favorite ? 'Yes' : 'No'}</CardDescription>
                        </CardFooter>
                    </Card>
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


