import { Card } from "@/components/ui/card";
import { Clock, MapPin } from "lucide-react";
import { Offer } from "@/types/offer";

interface HistoryCardProps {
    offer: Offer;
};

const HistoryCard: React.FC<HistoryCardProps> = ({ offer }) => {

    const date = new Date(offer.time);

    return (
        <Card className="flex items-center space-x-4 bg-gray-800 p-4 max-w-md">
            <div className="relative w-16 h-16 flex-shrink-0">
                <img
                    src={offer.thumbnail}
                    alt={offer.title}
                    className="rounded-md"
                />
            </div>
            <div className="flex-grow">
                <h3 className="text-lg font-semibold text-white">{offer.title}</h3>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Clock className="w-4 h-4 text-yellow-500" />
                    <span>{date.toLocaleString()}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span><a href={offer.location_url}>{offer.location}</a></span>
                </div>
            </div>
        </Card>
    );
};

export default HistoryCard;
