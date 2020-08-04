import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Header from '../components/Header';

const App = ({ title }) => (
  <div className='main'>
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
  </div>
);

App.defaultProps = {
  title: 'Taiwan Street Dance Information Platform',
};

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;
