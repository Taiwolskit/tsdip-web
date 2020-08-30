import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import EditEvent from '../../components/EditEvent';

const App = ({ title }) => (
  <div style={{'height': '100%'}}>
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
    <main id='edit-page'>
      <EditEvent />
    </main>
  </div>
);

App.getInitialProps = () => ({
  namespacesRequired: ['edit-event'],
});

App.defaultProps = {
  title: 'Edit event',
};

App.propTypes = {
  title: PropTypes.string,
};

export default App;
