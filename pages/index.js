import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import '../public/styles.scss';

const App = ({ title }) => (
  <div className='main'>
    <Head>
      <title>{title}</title>
    </Head>
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
