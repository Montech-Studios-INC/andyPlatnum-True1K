import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, Users } from "lucide-react";

export default function SkeletonTrendingOfferCard() {
    return (
        <CarouselItem>
            <Card className="w-full h-48 relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
                <Skeleton className="absolute inset-0 w-full h-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
                <CardContent className="relative h-full flex flex-col justify-between p-4">
                    <div className="flex items-center space-x-2">
                        <Skeleton className="w-8 h-8 rounded-full" />
                        <Skeleton className="h-4 w-24" />
                    </div>
                    <div className="space-y-1">
                        <Skeleton className="h-6 w-3/4" />
                        <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <Skeleton className="h-3 w-20" />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-1">
                                <Users className="w-4 h-4 text-gray-400" />
                                <Skeleton className="h-3 w-8" />
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </CarouselItem>
    );
};
