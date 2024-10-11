import React, { lazy, Suspense } from "react";
import SkeletonStatCard from "../components/cards/skeleton/stat";
import { Stat } from "@/types/stat";

interface AllStatsProps {
    stats: Stat[];
};

const StatCard = lazy(() => import("../components/cards/stat"));

const AllStats: React.FC<AllStatsProps> = ({ stats }) => {
    return (
        <div className="text-white p-6">
            <h1 className="text-2xl font-bold mb-4">Stats</h1>
            {stats.length === 0 ? (
                <p>No stats right now.</p>
            ) : (
                <div className="grid grid-cols-2 gap-4 mb-6">
                    {stats.map((stat: Stat) => (
                        <Suspense fallback={<SkeletonStatCard />} key={stat.id}>
                            <StatCard stat={stat} />
                        </Suspense>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllStats;
