import React, { useReducer, useEffect } from 'react';
import App from 'next/app';
import Router from 'next/router';
import PropTypes from 'prop-types';
import axios from '../lib/axios';
import { parseJwt } from '../lib/parse';
import { appWithTranslation } from '../i18n';
import { ContextStore } from '../ctx';
import '../public/styles.scss';

const authInitState = {
  accessToken: undefined,
  loading: false,
  refreshToken: undefined,
  user: {},
};

const login = async (token) => {
  const {
    data: {
      data: { access_token = '', refresh_token = '' },
    },
  } = await axios.post('/users/login');
  localStorage.setItem('access_token', access_token);
  localStorage.setItem('refresh_token', refresh_token);
  console.info(`__get_token__ ${token}`);
  return {
    accessToken: access_token,
    refreshToken: refresh_token,
  };
};

const logout = () => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
  Router.push('/');
};

const authReducers = (state, action) => {
  const { type, ...args } = action;

  switch (type) {
    case 'LOGIN':
      let { accessToken, refreshToken } = args;
      if (!accessToken && !refreshToken) {
        const data = login('token');
        accessToken = data.accessToken;
        refreshToken = data.refreshToken;
      }

      let user = {}
      if (accessToken) {
        user = parseJwt(accessToken).identity;
      }

      return {
        ...state,
        accessToken,
        loading: true,
        refreshToken,
        user,
      };
    case 'LOGOUT':
      logout();
      return { ...state, ...authInitState };
    default:
      return state;
  }
};

const Application = ({ Component, pageProps }) => {
  const [state, dispatch] = useReducer(authReducers, authInitState);

  const checkAuthenticated = () => {
    const accessToken = localStorage.getItem('access_token');
    const refreshToken = localStorage.getItem('refresh_token');

    if (accessToken && refreshToken) {
      dispatch({ type: 'LOGIN', accessToken, refreshToken });
    }
  };

  useEffect(() => {
    console.debug('Check token------');
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
