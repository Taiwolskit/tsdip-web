import { createContext } from "react";

export const ContextStore = createContext({
    accessToken: undefined,
    refreshToken: undefined
});
