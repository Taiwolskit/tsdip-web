import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import Drawer from '../components/Drawer';

const App = ({ title }) => (
  <div className='main'>
    <Head>
      <title>{title}</title>
    </Head>
    <Drawer />
  </div>
);

App.getInitialProps = () => ({
  namespacesRequired: [
    'common',
    'event',
    'org',
    'profile',
    'request-log',
    'table',
  ],
});

App.defaultProps = {
  title: 'Dashboard | Taiwan Street Dance Information Platform',
};

App.propTypes = {
  title: PropTypes.string,
};

export default App;
