import NotFound from "@/app/not-found";
import OfferModal from "./containers/modals/offer";
import { mockOffers } from "@/app/data";

export const metadata = {
    title: "TrueOneK | Offer",
    description: "Redefining Fan Engagement for the Digital Age"
};

export default async function OfferModalPage({ params }: { params: { id: string } }) {

    // const offer = await getOfferByID(params.id);
    const offer = mockOffers[Number(params.id) - 1];

    if (offer) {
        return <OfferModal offer={offer} />;
    } else {
        return <NotFound />; // or custom error
    };
}
