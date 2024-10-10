import React, { lazy, Suspense } from "react";
import SkeletonHistoryCard from "../components/cards/skeleton/history";
import { Offer } from "@/types/offer";

interface AllHistoryProps {
    offerHistory: Offer[];
};

const HistoryCard = lazy(() => import("../components/cards/history"));

const AllHistory: React.FC<AllHistoryProps> = ({ offerHistory }) => {
    return (
        <div className="text-white p-6">
            <h1 className="text-2xl font-bold mb-4">History</h1>
            {offerHistory.length === 0 ? (
                <p>No history right now.</p>
            ) : (
                <div className="space-y-4">
                    {offerHistory.map((offer: Offer) => (
                        <Suspense fallback={<SkeletonHistoryCard />} key={offer.id}>
                            <HistoryCard offer={offer} />
                        </Suspense>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllHistory;
