import React, { useEffect, useReducer } from 'react';
import App from 'next/app';
import Router from 'next/router';
import PropTypes from 'prop-types';

import { appWithTranslation } from '../i18n';
import { authInitState, authReducers, ContextStore } from '../ctx';
import '../public/styles.scss';
import 'react-quill/dist/quill.snow.css';

const protectRoute = ['/dashboard'];

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
