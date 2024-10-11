import uiConsole from "../console";
import { initProvider } from "./provider";
import RPC from "../RPC/ethersRPC";

export const getAccounts = async () => {

    const provider = await initProvider();

    if (!provider) {
        uiConsole("provider not initialized yet");
        return;
    };

    const address = await RPC.getAccounts(provider);
    uiConsole(address);

    return address;
};

export const getBalance = async () => {

    const provider = await initProvider();

    if (!provider) {
        uiConsole("provider not initialized yet");
        return;
    };

    const balance = await RPC.getBalance(provider);
    uiConsole(balance);

    return balance;
};
