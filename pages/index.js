import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../public/styles.scss';

const App = ({ title }) => (
  <div className='main'>
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
    {/*
    <Main /> ---> Carosul, EventBlock
    <Footer /> */}
    <main>Main page</main>
    <Footer />
  </div>
);

App.defaultProps = {
  title: "Taiwan Street Dance Information Platform"
};

App.propTypes = {
  title: PropTypes.string
};

export default App;
