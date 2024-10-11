import React, { lazy, Suspense } from "react";
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import SkeletonTrendingOfferCard from "../components/cards/skeleton/trending";
import { Offer } from "@/types/offer";

interface AllTrendingOffersProps {
    trendingOffers: Offer[];
};

const TrendingOfferCard = lazy(() => import("../components/cards/trending"));

const AllTrendingOffers: React.FC<AllTrendingOffersProps> = ({ trendingOffers }) => {
    return (
        <div className="text-white p-6">
            <h1 className="text-2xl font-bold mb-4">Trending</h1>
            <Carousel className="w-full max-w-xl mx-auto">
                <CarouselContent>
                    {trendingOffers.length === 0 ? (
                        <p>No trending offers right now.</p>
                    ) : (
                        <>
                            {trendingOffers.map((trendingOffer: Offer) => (
                                <Suspense fallback={<SkeletonTrendingOfferCard />} key={trendingOffer.id}>
                                    <TrendingOfferCard trendingOffer={trendingOffer} />
                                </Suspense>
                            ))}
                        </>
                    )}
                </CarouselContent>
                <CarouselPrevious className="bg-[#212121] border-none hidden sm:flex" />
                <CarouselNext className="bg-[#212121] border-none hidden sm:flex" />
            </Carousel>
        </div>
    );
};

export default AllTrendingOffers;
