import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import EditOrg from '../../components/EditOrg';

const App = ({ title }) => (
  <div style={{ height: '100%' }}>
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
    <main id='edit-page'>
      <EditOrg />
    </main>
  </div>
);

App.getInitialProps = () => ({
  namespacesRequired: ['edit-org'],
});

App.defaultProps = {
  title: 'Edit organization',
};

App.propTypes = {
  title: PropTypes.string,
};

export default App;
