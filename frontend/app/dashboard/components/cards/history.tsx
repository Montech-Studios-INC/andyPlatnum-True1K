import { Card } from "@/components/ui/card";
import { Link } from "next-view-transitions";
import { Clock, MapPin } from "lucide-react";
import { Offer } from "@/types/offer";

interface HistoryCardProps {
    offer: Offer;
};

const HistoryCard: React.FC<HistoryCardProps> = ({ offer }) => {

    const date = new Date(offer.time);

    return (
        <Card className="flex items-center space-x-4 bg-[#212121] max-w-screen border-none p-4">
            <div className="flex relative w-16 h-16 mr-2 justify-center">
                <Link href={`/browse/${offer.id}`} scroll={false}>
                    <img
                        src={offer.image}
                        alt={offer.title}
                        className="object-cover rounded-md w-full h-full"
                        style={{ viewTransitionName: `offer-image-${offer.id}` }}
                    />
                </Link>
            </div>
            <div className="flex-grow">
                <Link href={`/browse/${offer.id}`} scroll={false}>
                    <h3 className="text-lg font-semibold text-white">{offer.title}</h3>
                </Link>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Clock className="w-4 h-4 text-yellow-500" />
                    <span>{date.toLocaleString()}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span><a href={offer.location_url} target="_blank">{offer.location}</a></span>
                </div>
            </div>
        </Card>
    );
};

export default HistoryCard;
