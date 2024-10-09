import React, { lazy, Suspense } from "react";
import SkeletonOfferCard from "../components/cards/skeleton/offer";
import { Offer } from "@/types/offer";

interface AllOffersProps {
    offers: Offer[];
};

const OfferCard = lazy(() => import("../components/cards/offer"));

const AllOffers: React.FC<AllOffersProps> = ({ offers }) => {
    return (
        <div id="all-offers">
            <h1>Offers For You</h1>
            {offers.length === 0 ? (
                <p>No offers right now.</p>
            ) : (
                <>
                    {offers.map((offer: Offer) => (
                        <Suspense fallback={<SkeletonOfferCard />} key={offer.id}>
                            <OfferCard offer={offer} />
                        </Suspense>
                    ))}
                </>
            )}
        </div>
    );
};

export default AllOffers;
