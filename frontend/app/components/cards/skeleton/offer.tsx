import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Users } from "lucide-react";

export default function SkeletonOfferCard() {
    return (
        <Card className="w-64 h-64 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
            <Skeleton className="absolute inset-0 w-full h-full" />
            <CardContent className="relative h-full flex flex-col justify-between p-4">
                <div className="flex items-center space-x-2">
                    <Skeleton className="w-8 h-8 rounded-full" />
                    <Skeleton className="h-4 w-24" />
                </div>
                <div className="space-y-1">
                    <Skeleton className="h-6 w-32" />
                    <Skeleton className="h-4 w-40" />
                    <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4 text-gray-400" />
                        <Skeleton className="h-4 w-8" />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
