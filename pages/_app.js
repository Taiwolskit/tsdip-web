import React, { useReducer, useEffect } from 'react';
import App from 'next/app';
import Router from 'next/router';
import PropTypes from 'prop-types';

import { appWithTranslation } from '../i18n';
import { ContextStore, authInitState } from '../ctx';
import { parseJwt } from '../lib/parse';
import '../public/styles.scss';
import 'react-quill/dist/quill.snow.css';

const protectRoute = ['/dashboard'];

const authReducers = (state, action) => {
  // Cannot async fetch data in reducer
  const { type, ...args } = action;

  switch (type) {
    case 'LOGIN':
      const { accessToken, refreshToken } = args;
      const user = accessToken ? parseJwt(accessToken).identity : {};
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      if (Router.pathname === '/login') {
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

const Application = ({ Component, pageProps }) => {
  const [state, dispatch] = useReducer(authReducers, authInitState);

  const checkAuthenticated = () => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    if (accessToken && refreshToken) {
      dispatch({ type: 'LOGIN', accessToken, refreshToken });
    } else if (protectRoute.includes(Router.pathname)) {
      Router.push('/');
    }
  };

  useEffect(() => {
    console.log('_check_authenticated_');
    if (localStorage && !state.accessToken) checkAuthenticated();
  }, []);

  return (
    <ContextStore.Provider
      value={{
        accessToken: state.accessToken,
        loading: state.loading,
        refreshToken: state.refreshToken,
        user: state.user,
        dispatch,
      }}
    >
      <Component {...pageProps} />
    </ContextStore.Provider>
  );
};

Application.getInitialProps = async (ctx) => ({
  ...(await App.getInitialProps(ctx)),
});

Application.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default appWithTranslation(Application);
