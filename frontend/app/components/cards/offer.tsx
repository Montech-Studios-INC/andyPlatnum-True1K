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
    <Card className="w-40 h-44 relative overflow-hidden border-none sm:w-64 sm:h-64">
      <Link href={`/browse/${offer.id}`} scroll={false}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <img
          src={offer.image}
          alt="Performer on stage"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ viewTransitionName: `offer-image-${offer.id}` }}
        />
        <CardContent className="relative h-full flex flex-col justify-between p-4">
          <div className="flex items-center space-x-2">
            <Avatar className="w-8 h-8 border-2 border-white">
              <AvatarImage src={offer.artist_image} alt={offer.artist_name} />
              <AvatarFallback>{offer.artist_name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="text-white text-sm font-semibold">{offer.artist_name}</span>
          </div>
          <div className="space-y-1">
            <h3 className="text-white text-xl font-bold">{offer.title}</h3>
            <p className="text-white text-sm">{date.toLocaleString()}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1 text-white">
                <Users className="w-4 h-4" />
                <span className="text-sm">{offer.headcount}</span>
              </div>
              <div className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">
                100
              </div>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
    );
};

export default OfferCard;
