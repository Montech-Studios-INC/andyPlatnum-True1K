import React from "react";
import { Link } from "next-view-transitions";
import { CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Calendar, Users } from "lucide-react";
import { Offer } from "@/types/offer";

interface OfferCardProps {
    trendingOffer: Offer;
};

const OfferCard: React.FC<OfferCardProps> = ({ trendingOffer }) => {

    const date = new Date(trendingOffer.time);

    return (
        <CarouselItem>
            <Link href={`/browse/${trendingOffer.id}`} scroll={false}>
                <Card className="w-full h-48 relative overflow-hidden rounded-xl border-none">
                    <img
                        src={trendingOffer.image}
                        alt={trendingOffer.title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0" />
                    <CardContent className="relative h-full flex flex-col justify-between p-4">
                        <div className="flex items-center space-x-2">
                            <Avatar className="w-8 h-8 border-2 border-white">
                                <AvatarImage src={trendingOffer.artist_image} alt={trendingOffer.artist_name} />
                                <AvatarFallback>{trendingOffer.artist_name}</AvatarFallback>
                            </Avatar>
                            <span className="text-white text-sm font-semibold">{trendingOffer.artist_name}</span>
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-white text-xl font-bold">{trendingOffer.title}</h3>
                            <div className="flex items-center space-x-2 text-white/80">
                                <Calendar className="w-4 h-4" />
                                <span className="text-xs">{date.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-1 text-white/80">
                                    <Users className="w-4 h-4" />
                                    <span className="text-xs">{trendingOffer.headcount}</span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </Link>
        </CarouselItem>
    );
};

export default OfferCard;
