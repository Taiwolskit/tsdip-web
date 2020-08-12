import React, { useReducer, useEffect } from 'react';
import App from 'next/app';
import { appWithTranslation } from '../i18n';
import { ContextStore } from '../ctx';
import '../public/styles.scss';

const authInitState = { accessToken: undefined, refreshToken: undefined };

const authReducers = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem('token', action.accessToken)
      return Object.assign({}, state, { accessToken: action.accessToken });
    default:
      return state;
  }
};

const MyApp = ({ Component, pageProps }) => {
  const [authState, authDispatch] = useReducer(authReducers, authInitState);

  useEffect(() => {
    console.log('Token------');
    if (localStorage) {
      const token = localStorage.getItem('token');
      console.log(`token is ${token}`);
      if (token) authDispatch({type: 'LOGIN', accessToken: token });
    }
  }, []);

  return (
    <ContextStore.Provider
      value={{
        accessToken: authState.accessToken,
        dispatch: authDispatch
      }}
    >
      <Component {...pageProps} />
    </ContextStore.Provider>
  );
};

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default appWithTranslation(MyApp);
