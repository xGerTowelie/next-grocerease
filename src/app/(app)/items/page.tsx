import { getItems } from "@/actions/items"
import DebugState from "@/components/DebugState"
import AddItemForm from "@/components/forms/AddItemForm"
import ItemList from "@/components/ItemList"
import { SkeletonItemsList } from "@/components/skeltons/SkeletonItemsList"
import { Suspense } from "react"

export default async function ItemsPage() {
    return (
        <div className="container mx-auto py-10 space-y-5">
            <AddItemForm />
            <div>
                <h1 className="pt-10 pb-5 pl-2 text-xl font-sans font-semibold">All Items</h1>
                <Suspense fallback={<SkeletonItemsList />}>
                    <ItemsWrapper />
                </Suspense>
            </div>
        </div>
    )
}

async function ItemsWrapper() {
    const items = await getItems()

    console.log("items", items)

    return (
        <div className="space-y-5">
            <DebugState state={items} title="Items Page" />
            <ItemList items={items.data || []} />
        </div>
    )
}

