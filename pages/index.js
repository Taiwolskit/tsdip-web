import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import CardBlock from '../components/CardBlock';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import Header from '../components/Header';

const App = ({ title }) => (
  <div className='main'>
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
    <main id='index-page'>
      <Carousel />
      <CardBlock />
    </main>
    <Footer />
  </div>
);

App.getInitialProps = () => ({
  namespacesRequired: ['common'],
});

App.defaultProps = {
  title: 'Taiwan Street Dance Information Platform',
};

App.propTypes = {
  title: PropTypes.string,
};

export default App;
