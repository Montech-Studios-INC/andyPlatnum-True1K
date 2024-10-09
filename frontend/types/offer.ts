import { Socials } from "./socials";

export interface Offer {
    id: number;
    tier: "bronze" | "silver" | "gold" | "platinum" | "diamond";
    paid: boolean;
    price: number;
    artist_name: string;
    artist_image: string;
    title: string;
    description: string;
    location: string;
    location_url: string;
    time: number;
    headcount: number;
    image: string;
    requirements?: string;
    social_links?: Socials;
    // special_offer?: any; // from the design
};
