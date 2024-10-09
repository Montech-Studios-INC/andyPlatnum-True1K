import { web3auth } from "../config";
import uiConsole from "../console";

export const login = async () => {
    try {
        await web3auth.connect();
        return web3auth.connected ? true : false;
    } catch(error) {
        return error;
    };
};

export const getUserInfo = async () => {
    try {
        const user = await web3auth.getUserInfo();
        uiConsole(user);
        return user;
    } catch(error) {
        return error;
    };
};

export const logout = async () => {
    try {
        await web3auth.logout();
        uiConsole("logged out");
    } catch(error) {
        return error;
    };
};
