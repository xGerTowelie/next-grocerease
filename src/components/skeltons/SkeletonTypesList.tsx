import { Card, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonTypesList() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
            {[...Array(6)].map((_, index) => (
                <Card key={index} className="overflow-hidden">
                    <CardHeader>
                        <div className="flex flex-row gap-3 items-center">
                            <Skeleton className="h-4 w-3/4" />
                            <Skeleton className="h-4 w-4 rounded-full" />
                        </div>
                    </CardHeader>
                </Card>
            ))}
        </div>
    );
}


