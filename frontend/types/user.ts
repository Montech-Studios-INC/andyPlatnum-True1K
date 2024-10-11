import { NFT } from "./nft";
import { Socials } from "./socials";

export interface User {
    id: number;
    name: string;
    email: string;
    points: number;
    rank: number;
    socials: Socials;
    nfts: NFT[];
    image: string;
};
