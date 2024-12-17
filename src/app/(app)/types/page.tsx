import { getItemTypes } from "@/actions/item-types"
import DebugState from "@/components/DebugState"
import AddItemTypeForm from "@/components/forms/AddItemTypeForm"
import { SkeletonTypesList } from "@/components/skeltons/SkeletonTypesList"
import TypeList from "@/components/TypeList"
import { Suspense } from "react"

export default async function TypesPage() {
    return (
        <div className="container mx-auto py-10 space-y-5">
            <AddItemTypeForm />
            <div>
                <h1 className="pt-10 pb-5 pl-2 text-xl font-sans font-semibold">All Types</h1>
                <Suspense fallback={<SkeletonTypesList />}>
                    <TypesWrapper />
                </Suspense>
            </div>
        </div>
    )
}

async function TypesWrapper() {
    const types = await getItemTypes()

    return (
        <div className="space-y-5">
            <DebugState state={types} title="Types Page" />
            <TypeList types={types.data || []} />
        </div>
    )
}

