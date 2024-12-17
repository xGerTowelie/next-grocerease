import { getStores } from "@/actions/stores";
import DebugState from "@/components/DebugState";
import AddStoreForm from "@/components/forms/AddStoreForm";
import { SkeletonStoreList } from "@/components/skeltons/SkeletonStoreList";
import { StoreList } from "@/components/StoreList";
import { Suspense } from "react";

export default async function StoresPage() {
    return (
        <div className="container mx-auto py-10 space-y-5">
            <AddStoreForm />
            <div>
                <h1 className="pt-10 pb-5 pl-2 text-xl font-sans font-semibold">All Types</h1>
                <Suspense fallback={<SkeletonStoreList />}>
                    <StoreListWrapper />
                </Suspense>
            </div>
        </div>
    )
}

async function StoreListWrapper() {
    const stores = await getStores();
    return (
        <div className="space-y-5">
            <DebugState state={stores} title="Stores Page" />
            <StoreList stores={stores.data ?? []} />
        </div>
    );
}

