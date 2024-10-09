import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function NFTSkeletonCard() {
    return (
        <Card className="w-full max-w-md overflow-hidden">
            <CardContent className="p-0">
                <div className="relative aspect-square">
                    <Skeleton className="w-full h-full" />
                </div>
            </CardContent>
        </Card>
    );
};
