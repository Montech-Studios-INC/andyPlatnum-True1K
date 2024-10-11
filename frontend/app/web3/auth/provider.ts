import { IAdapter } from "@web3auth/base";
import { getDefaultExternalAdapters } from "@web3auth/default-evm-adapter";
import { web3AuthOptions, web3auth } from "../config";

export const initProvider = async () => {
    try {

        const adapters = await getDefaultExternalAdapters({ options: web3AuthOptions });
        adapters.forEach((adapter: IAdapter<unknown>) => {
            web3auth.configureAdapter(adapter);
        });

        await web3auth.initModal();
        return web3auth.provider;

    } catch (error) {
        console.error(error);
        return error;
    };
};
