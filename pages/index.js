import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import '../public/styles.scss';

const App = ({ title }) => (
  <div className='main'>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, shrink-to-fit=no'
      />
    </Head>
    <div>HHHHH </div>
  </div>
);

App.defaultProps = {
  title: "Taiwan Street Dance Information Platform"
};

App.propTypes = {
  title: PropTypes.string
};

export default App;