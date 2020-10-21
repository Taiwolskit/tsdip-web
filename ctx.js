import { createContext } from 'react';
import Router from 'next/router';
import { parseJwt } from './lib/parse';

export const authInitState = {
  accessToken: undefined,
  loading: false,
  refreshToken: undefined,
  user: {},
};

export const ContextStore = createContext(authInitState);

export const authReducers = (state, action) => {
  // Cannot async fetch data in reducer
  const { type, ...args } = action;

  switch (type) {
    case 'LOGIN':
      const { accessToken, refreshToken } = args;
      const user = accessToken ? parseJwt(accessToken).identity : {};
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      // Check login user not see login page again
      if (Router.pathname.includes('login')) {
        Router.push('/');
      }
      return {
        ...state,
        accessToken,
        loading: true,
        refreshToken,
        user,
      };
    case 'LOGOUT':
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      Router.push('/');
      return { ...state, ...authInitState };
    default:
      return state;
  }
};
