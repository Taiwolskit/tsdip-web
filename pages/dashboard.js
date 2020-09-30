import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import PropTypes from 'prop-types';
import Drawer from '../components/Drawer';
import { ContextStore } from '../ctx';

const App = ({ title }) => {
  const { accessToken, dispatch } = useContext(ContextStore);

  useEffect(() => {
    if (!accessToken) {
      const token = localStorage.getItem('access_token');
      if (!token) {
        Router.push('/');
        return;
      }
      dispatch({
        type: 'LOGIN',
        accessToken: token,
        refreshToken: 'test',
        user: {},
      });
    }
  }, [accessToken]);

  return (
    <div className='main'>
      <Head>
        <title>{title}</title>
      </Head>
      <Drawer />
    </div>
  );
};

App.getInitialProps = () => ({
  namespacesRequired: ['common', 'event', 'profile'],
});

App.defaultProps = {
  title: 'Dashboard | Taiwan Street Dance Information Platform',
};

App.propTypes = {
  title: PropTypes.string,
};

export default App;
