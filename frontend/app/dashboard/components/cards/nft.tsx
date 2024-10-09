import { Card, CardContent } from "@/components/ui/card";
import { NFT } from "@/types/nft";

interface NFTCardProps {
    nft: NFT;
};

const NFTCard: React.FC<NFTCardProps> = ({ nft }) => {
    return (
        <Card className="w-20 max-w-md overflow-hidden">
            <CardContent className="p-0">
                <div className="relative aspect-square">
                    <img
                        src={nft.thumbnail}
                        alt={nft.name}
                        className="w-full h-full object-cover"
                    />
                </div>
            </CardContent>
        </Card>
    );
};

export default NFTCard;           
