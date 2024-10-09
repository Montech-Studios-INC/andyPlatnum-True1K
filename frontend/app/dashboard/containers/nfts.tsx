import React, { lazy, Suspense } from "react";
import SkeletonNFTCard from "../components/cards/skeleton/nft";
import { NFT } from "@/types/nft";

interface AllNFTsProps {
    nfts: NFT[];
};

const NFTCard = lazy(() => import("../components/cards/nft"));

const AllNFTs: React.FC<AllNFTsProps> = ({ nfts }) => {
    return (
        <div id="all-nfts">
            <h1>NFTs</h1>
            {nfts.length === 0 ? (
                <p>No nfts right now.</p>
            ) : (
                <>
                    {nfts.map((nft: NFT) => (
                        <Suspense fallback={<SkeletonNFTCard />} key={nft.id}>
                            <NFTCard nft={nft} />
                        </Suspense>
                    ))}
                </>
            )}
        </div>
    );
};

export default AllNFTs;
