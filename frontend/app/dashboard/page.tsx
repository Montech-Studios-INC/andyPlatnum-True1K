import AllStats from "./containers/stats";
import AllNFTs from "./containers/nfts";
import AllHistory from "./containers/history";
import { mockStats, mockNFTs, mockHistory } from "@/app/data";

export const metadata = {
    title: "TrueOneK | Dashboard",
    description: "Redefining Fan Engagement for the Digital Age"
};

export default async function Dashboard() {

    // const stats = await getAllStats(user);
    // const nfts = await getAllNFTs(user);
    // const offerHistory = await getAllOfferHistory(user);
    const stats = mockStats;
    const nfts = mockNFTs;
    const offerHistory = mockHistory;

    return (
        <>
            <AllStats stats={stats} />
            <AllNFTs nfts={nfts} />
            <AllHistory offerHistory={offerHistory} />
        </>
    );
};
