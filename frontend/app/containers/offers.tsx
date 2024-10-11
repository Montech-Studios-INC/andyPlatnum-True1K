import React, { lazy, Suspense } from "react";
import SkeletonOfferCard from "../components/cards/skeleton/offer";
import { Offer } from "@/types/offer";

interface AllOffersProps {
    offers: Offer[];
};

const OfferCard = lazy(() => import("../components/cards/offer"));

const AllOffers: React.FC<AllOffersProps> = ({ offers }) => {
    return (
        <div className="text-white p-6">
            <h1 className="text-2xl font-bold mb-4">Offers For You</h1>
            {offers.length === 0 ? (
                <p>No offers right now.</p>
            ) : (
                <div className="grid grid-flow-row-dense auto-rows-auto grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-6 justify-items-start place-items-center sm:content-center sm:grid-cols-[repeat(auto-fill,minmax(230px,1fr))]">
                    {offers.map((offer: Offer) => (
                        <Suspense fallback={<SkeletonOfferCard />} key={offer.id}>
                            <OfferCard offer={offer} />
                        </Suspense>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllOffers;
