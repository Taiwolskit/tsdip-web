import React, { useContext } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { ContextStore } from '../ctx';

const App = ({ title }) => {
  const { accessToken, dispatch } = useContext(ContextStore);
  return (
    <div className='main'>
      <Head>
        <title>{title}</title>
      </Head>
      <p>{accessToken}</p>
      <button
        type='submit'
        onClick={() => dispatch({
          type: 'LOGIN',
          accessToken: 'test',
          refreshToken: 'test',
          user: {},
        })}
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
  title: 'Login page | Taiwan Street Dance Information Platform',
};

App.propTypes = {
  title: PropTypes.string,
};

export default App;
