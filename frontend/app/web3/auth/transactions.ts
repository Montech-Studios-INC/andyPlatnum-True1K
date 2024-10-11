import uiConsole from "../console";
import { initProvider } from "./provider";
import RPC from "../RPC/ethersRPC";

export const signMessage = async () => {

    const provider = await initProvider();

    if (!provider) {
        uiConsole("provider not initialized yet");
        return;
    };

    const signedMessage = await RPC.signMessage(provider);
    uiConsole(signedMessage);
};

export const sendTransaction = async () => {

    const provider = await initProvider();

    if (!provider) {
        uiConsole("provider not initialized yet");
        return;
    };

    uiConsole("Sending Transaction...");
    const transactionReceipt = await RPC.sendTransaction(provider);
    uiConsole(transactionReceipt);
};
