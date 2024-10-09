import { Artist } from "./artist"

export interface Subscription {
    id: number;
    artist: Artist;
    tier: "bronze" | "silver" | "gold" | "platinum" | "diamond";
    price: number;
    benefits: string[];
};
