import AllOffers from "./containers/offers";
import AllTrendingOffers from "./containers/trending";
import { mockTrendingOffers, mockOffers } from "./data";

export const metadata = {
    title: "TrueOneK | Home",
    description: "Redefining Fan Engagement for the Digital Age"
};

export default async function Home() {

    // const trendingOffers = await getAllTrendingOffers();
    // const offers = await getAllOffers();
    const trendingOffers = mockTrendingOffers;
    const offers = mockOffers;

    return (
        <>
            <AllTrendingOffers trendingOffers={trendingOffers} />
            <AllOffers offers={offers} />
        </>
    );
};
