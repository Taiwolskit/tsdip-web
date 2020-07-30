import React, { useEffect, useReducer } from 'react';
import Cookies from 'js-cookie';
import Router from 'next/router';
import Head from 'next/head';
import ContextStore from '../ctx';
import loginReducer from '../reducers/login';
import { wrapper } from '../store';
import '../public/styles.scss';

const App = ({ Component, pageProps }) => {
  const [auth, authDispatch] = useReducer(loginReducer, { token: undefined });

  useEffect(() => {
    const token = Cookies.get('token');
    // If cookie have token, then update it at context
    if (token !== auth.token) {
      authDispatch({ type: 'LOGIN', token });
    }

    // Un login user
    if (token === undefined) {
      if (window.location.pathname === '/dashboard') {
        Router.push('/');
      }
    } else {
      if (window.location.pathname === '/login') {
        Router.back();
      }
    }
  });

  return (
    <ContextStore.Provider
      value={{
        token: auth.token,
        authDispatch,
      }}>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no'
        />
      </Head>
      <Component {...pageProps} />
    </ContextStore.Provider>
  );
};

export default wrapper.withRedux(App);
