import React, { useReducer } from 'react';
import App from 'next/app';
import { appWithTranslation } from '../i18n';
import { ContextStore } from '../ctx';
import '../public/styles.scss';

const authInitState = { accessToken: false, refreshToken: undefined };

const authReducers = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return Object.assign({}, state, { accessToken: !state.accessToken });
    default:
      return state;
  }
};

const MyApp = ({ Component, pageProps }) => {
  const [authState, authDispatch] = useReducer(authReducers, authInitState);

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
