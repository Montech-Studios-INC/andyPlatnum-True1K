export interface Offer {
    id: number;
    author: string;
    author_img: string;
    title: string;
    description: string;
    location: string;
    location_url: string;
    time: number;
    headcount: number;
    thumbnail: string;
    requirements?: string;
    social_links?: {
        youtube?: string,
        twitter?: string
    };
    offer?: false;
};
