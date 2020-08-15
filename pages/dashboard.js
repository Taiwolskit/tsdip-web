import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import PropTypes from 'prop-types';
import { ContextStore } from '../ctx';

const App = ({ title }) => {
  const { accessToken, dispatch } = useContext(ContextStore);

  useEffect(() => {
    if (!accessToken) {
      const token = localStorage.getItem('token');
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
      <p>{accessToken}</p>
      <button
        type='submit'
        onClick={() => dispatch({ type: 'LOGIN', accessToken: 'test' })}
      >
        Submit
      </button>
      <div>Content</div>
      <footer>Footer</footer>
    </div>
  );
};

App.getInitialProps = () => ({
  namespacesRequired: ['common'],
});

App.defaultProps = {
  title: 'Dashboard | Taiwan Street Dance Information Platform',
};

App.propTypes = {
  title: PropTypes.string,
};

export default App;
