import React, { useContext } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import { ContextStore } from '../ctx';
import axios from '../lib/axios';

const login = async (dispatch) => {
  const {
    data: {
      data: { access_token = '', refresh_token = '' },
    },
  } = await axios.post('/users/login');
  localStorage.setItem('accessToken', access_token);
  localStorage.setItem('refreshToken', refresh_token);

  return dispatch({
    type: 'LOGIN',
    accessToken: access_token,
    direct: true,
    refreshToken: refresh_token,
  });
};

const App = ({ title }) => {
  const { accessToken, dispatch } = useContext(ContextStore);
  return (
    <div className='main'>
      <Head>
        <title>{title}</title>
      </Head>
      <p>{accessToken}</p>
      <button type='submit' onClick={() => login(dispatch)}>
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
