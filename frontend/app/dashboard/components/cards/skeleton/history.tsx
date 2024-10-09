import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Clock, MapPin } from "lucide-react";

export default function HistorySkeletonCard() {
    return (
        <Card className="flex items-center space-x-4 bg-gray-800 p-4 max-w-md">
            <Skeleton className="w-16 h-16 rounded-md" />
            <div className="flex-grow space-y-2">
                <Skeleton className="h-6 w-3/4" />
                <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-yellow-500" />
                    <Skeleton className="h-4 w-1/2" />
                </div>
                <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <Skeleton className="h-4 w-2/3" />
                </div>
            </div>
        </Card>
    );
};
