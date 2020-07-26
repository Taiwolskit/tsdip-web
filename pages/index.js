import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Cookies from 'js-cookie';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import IndexPage from '../components/IndexPage';
import Footer from '../components/Footer';
import Auth from '../containers/Auth';

const App = ({ title, cc }) => {
  const [count, setCount] = useState();

  // useEffect(() => {
  //   const cookie = Cookies.get('token');
  //   setCount(cookie);
  //   console.log('token------', cookie);
  // });

  return (
    <Auth>
      <div className='main'>
        <Head>
          <title>
            {title}|{count}
          </title>
        </Head>
        <Header />
        <IndexPage />
        <Footer />
      </div>
    </Auth>
  );
}

App.defaultProps = {
  title: 'Taiwan Street Dance Information Platform',
};

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;
