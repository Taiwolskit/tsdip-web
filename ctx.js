import { createContext } from 'react';

export const ContextStore = createContext({
  accessToken: undefined,
  loading: false,
  refreshToken: undefined,
  user: {},
});
