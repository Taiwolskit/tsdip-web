import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import CardBlock from '../components/CardBlock';
import Footer from '../components/Footer';

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
