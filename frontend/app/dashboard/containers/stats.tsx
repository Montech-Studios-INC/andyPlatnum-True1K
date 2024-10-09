import React, { lazy, Suspense } from "react";
import SkeletonStatCard from "../components/cards/skeleton/stat";
import { Stat } from "@/types/stat";

interface AllStatsProps {
    stats: Stat[];
};

const StatCard = lazy(() => import("../components/cards/stat"));

const AllStats: React.FC<AllStatsProps> = ({ stats }) => {
    return (
        <div id="all-stats">
            <h1>Stats</h1>
            {stats.length === 0 ? (
                <p>No stats right now.</p>
            ) : (
                <>
                    {stats.map((stat: Stat) => (
                        <Suspense fallback={<SkeletonStatCard />} key={stat.id}>
                            <StatCard stat={stat} />
                        </Suspense>
                    ))}
                </>
            )}
        </div>
    );
};

export default AllStats;
