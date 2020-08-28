import React, { useReducer, useEffect } from 'react';
import App from 'next/app';
import Router from 'next/router';
import PropTypes from 'prop-types';
import { appWithTranslation } from '../i18n';
import { ContextStore } from '../ctx';
import '../public/styles.scss';

const authInitState = {
  accessToken: undefined,
  loading: false,
  refreshToken: undefined,
  user: {},
};

const login = (token) => {
  localStorage.setItem('token', token);
  console.info(`__get_token__ ${token}`);
};

const logout = () => {
  localStorage.removeItem('token');
  Router.push('/');
};

const authReducers = (state, action) => {
  const { type, ...args } = action;
  const { accessToken, refreshToken, user } = args;

  switch (type) {
    case 'LOGIN':
      login(accessToken);
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
    const accessToken = localStorage.getItem('token');
    if (accessToken) {
      dispatch({
        type: 'LOGIN',
        accessToken,
        refreshToken: 'test',
        user: {},
      });
    }
  };

  useEffect(() => {
    console.log('Check token------');
    if (localStorage && !state.accessToken) checkAuthenticated();
  }, []);

  return (
    <ContextStore.Provider
      value={{
        accessToken: state.accessToken,
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
