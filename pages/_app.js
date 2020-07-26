import React, { useEffect, useReducer } from 'react';
import Cookies from 'js-cookie';
import ContextStore from '../ctx';
import loginReducer from '../reducers/login';
import { wrapper } from '../store';
import '../public/styles.scss';

const App = ({ Component, pageProps }) => {
  const [auth, authDispatch] = useReducer(loginReducer, { token: undefined });

  useEffect(() => {
    const token = Cookies.get('token');
    if (token !== auth.token && auth.token === undefined) {
      authDispatch({ type: 'LOGIN', token });
    }
  });

  return (
    <ContextStore.Provider
      value={{
        token: auth.token,
        authDispatch,
      }}>
      <Component {...pageProps} />
    </ContextStore.Provider>
  );
};

export default wrapper.withRedux(App);
