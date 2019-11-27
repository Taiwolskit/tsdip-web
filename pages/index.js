import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Header from '../components/Header'
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
    <button type='button' className='btn btn-primary'>
      Primary
    </button>
    <button type='button' class='btn btn-info'>
      Info
    </button>
    <div>Main page</div>
  </div>
);

App.defaultProps = {
  title: "Taiwan Street Dance Information Platform"
};

App.propTypes = {
  title: PropTypes.string
};

export default App;
