import React from "react";
import { Card } from "@/components/ui/card";
import { Stat } from "@/types/stat";

interface StatCardProps {
    stat: Stat;
};

const StatCard: React.FC<StatCardProps> = ({ stat }) => {
    return (
        <Card className="bg-[#212121] text-white p-4 flex justify-between items-center border-none">
            <div>
                <p className="text-sm mb-1">{stat.title}</p>
                <p className="text-4xl font-bold text-yellow-400">{stat.value}</p>
            </div>
        </Card>
    );
};

export default StatCard;
