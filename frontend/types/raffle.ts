import { User } from "./user";

export interface Raffle {
    id: number;
    title: string;
    description: string;
    cost: number,
    winner_selection_mechanism: string;
    participants: User[];
    start_date: number;
    end_date: number;
    winner_announcement_date: number;
};
