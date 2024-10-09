import { Transaction } from "./transaction";
import { User } from "./user";

export interface NFT {
    id: number;
    name: string;
    blockchain: "Solana" | "Ethereum";
    minted: boolean;
    owner?: User;
    history?: Transaction[];
    url?: string; // if nft is listed in another location?
    image: string;
};
