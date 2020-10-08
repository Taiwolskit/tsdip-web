import { createContext } from 'react';

export const authInitState = {
  accessToken: undefined,
  loading: false,
  refreshToken: undefined,
  user: {},
};

export const ContextStore = createContext(authInitState);
