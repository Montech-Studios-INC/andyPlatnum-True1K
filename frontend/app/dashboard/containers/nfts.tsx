import React, { lazy, Suspense } from "react";
import SkeletonNFTCard from "../components/cards/skeleton/nft";
import { NFT } from "@/types/nft";

interface AllNFTsProps {
    nfts: NFT[];
};

const NFTCard = lazy(() => import("../components/cards/nft"));

const AllNFTs: React.FC<AllNFTsProps> = ({ nfts }) => {
    return (
        <div className="text-white p-6">
            <h1 className="text-2xl font-bold mb-4">NFTs</h1>
            {nfts.length === 0 ? (
                <p>No nfts right now.</p>
            ) : (
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 mb-6 place-items-center">
                    {nfts.map((nft: NFT) => (
                        <Suspense fallback={<SkeletonNFTCard />} key={nft.id}>
                            <NFTCard nft={nft} />
                        </Suspense>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllNFTs;
