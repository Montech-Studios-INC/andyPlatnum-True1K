import { Card, CardContent } from "@/components/ui/card";
import { NFT } from "@/types/nft";

interface NFTCardProps {
    nft: NFT;
};

const NFTCard: React.FC<NFTCardProps> = ({ nft }) => {
    return (
        <Card className="w-full max-w-52 overflow-hidden border-none">
            <CardContent className="p-0">
                <div className="relative aspect-square">
                    {nft.url ? (
                        <a href={nft.url} target="_blank">
                            <img
                                src={nft.image}
                                alt={nft.name}
                                className="w-full h-full object-cover"
                            />
                        </a>
                    ) : (
                        <img
                            src={nft.image}
                            alt={nft.name}
                            className="w-full h-full object-cover"
                        />
                    )}
                </div>
            </CardContent>
        </Card>
    );
};

export default NFTCard;           
