import React from "react";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function StatSkeletonCard() {
    return (
        <Card className="bg-gray-900 text-white p-4 flex justify-between items-center w-64">
            <div className="space-y-2">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-10 w-24" />
            </div>
        </Card>
    );
};
