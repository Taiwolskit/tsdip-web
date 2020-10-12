import React, { useContext } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import { ContextStore } from '../../ctx';
import axios from '../../lib/axios';

const login = async (dispatch) => {
  const {
    data: {
      data: {
        access_token: accessToken = '',
        refresh_token: refreshToken = '',
      },
    },
  } = await axios.post(
    '/managers/login',
    {},
    {
      headers: {
        'x-api-token': process.env.NEXT_PUBLIC_ADMIN_API_KEY,
      },
    }
  );

  return dispatch({
    type: 'LOGIN',
    accessToken,
    refreshToken,
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
