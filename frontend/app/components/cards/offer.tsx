import React from "react";
import { Link } from "next-view-transitions";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Users } from "lucide-react";
import { Offer } from "@/types/offer";

interface OfferCardProps {
    offer: Offer;
};

const OfferCard: React.FC<OfferCardProps> = ({ offer }) => {

    const date = new Date(offer.time);

    return (
        <Card className="w-64 h-64 relative overflow-hidden">
            <Link href={`/browse/${offer.id}`} scroll={false}>
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-orange-500 opacity-75" />
                <img
                    src={offer.thumbnail}
                    alt="Performer on stage"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ viewTransitionName: `offer-image-${offer.id}` }}
                />
                <CardContent className="relative h-full flex flex-col justify-between p-4">
                    <div className="flex items-center space-x-2">
                        <Avatar className="w-8 h-8 border-2 border-white">
                            <AvatarImage src={offer.author_img} alt={offer.author} />
                            <AvatarFallback>{offer.author}</AvatarFallback>
                        </Avatar>
                        <span className="text-white text-sm font-semibold">{offer.author}</span>
                    </div>
                    <div className="space-y-1">
                        <h3 className="text-white text-xl font-bold">{offer.title}</h3>
                        <p className="text-white text-sm">{date.toLocaleString()}</p>
                        <div className="flex items-center space-x-1 text-white">
                            <Users className="w-4 h-4" />
                            <span className="text-sm">{offer.headcount}</span>
                        </div>
                    </div>
                </CardContent>
            </Link>
        </Card>
    );
};

export default OfferCard;
