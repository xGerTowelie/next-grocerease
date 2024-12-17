"use client"

import { Store } from "@/lib/supabase/complex_types";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MoreVertical } from 'lucide-react';
import Image from "next/image";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { deleteStore } from "@/actions/stores";
import { toast } from "@/hooks/use-toast";

export function StoreList({ stores: initialStores }: { stores: Store[] }) {
    const [stores, setStores] = useState(initialStores);

    const handleDelete = async (id: string) => {
        try {
            await deleteStore(id);
            setStores(stores.filter(store => store.id !== id));
            toast({
                title: "Store deleted",
                description: "The store has been successfully deleted.",
            });
        } catch (error) {
            console.error("Failed to delete store:", error);
            toast({
                title: "Error",
                description: "Failed to delete the store. Please try again.",
                variant: "destructive",
            });
        }
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
            {stores.map((store: Store) => (
                <Card key={store.id} className="overflow-hidden">
                    <CardHeader>
                        <div className="flex flex-row gap-3 items-center">
                            <h1 className="flex-1 truncate">{store.name}</h1>
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <MoreVertical className="flex-shrink-0 h-5 w-5" />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem onClick={() => handleDelete(store.id)}>
                                        Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="relative aspect-square w-full">
                            <Image
                                src={store.image_url as string}
                                alt={store.name}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover"
                            />
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}


