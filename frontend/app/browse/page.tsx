import SearchBar from "./containers/search";
import AllOffers from "../containers/offers";
import { mockOffers } from "@/app/data";

export const metadata = {
    title: "TrueOneK | Browse Offers",
    description: "Redefining Fan Engagement for the Digital Age"
};

export default async function Browse() {

    // const offers = await getAllOffers();
    const offers = mockOffers;

    return (
        <>
            <SearchBar />
            <AllOffers offers={offers} />
        </>
    );
};
