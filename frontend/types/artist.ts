import { Socials } from "./socials";

export interface Artist {
    id: number;
    name: string;
    social_accounts?: Socials;
    image: string;
};
