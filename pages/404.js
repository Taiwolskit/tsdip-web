import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

import Footer from '../components/Footer';
import Header from '../components/Header';

const Custom404 = ({ title }) => (
  <div className='main'>
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
    <main id='404-page'>
      <Typography variant='h1' component='h2' gutterBottom align='center'>
        404 - Page Not Found
      </Typography>
      <Typography variant='subtitle1' gutterBottom align='center'>
        還在施工中 會努力做啦，哪次不努力
      </Typography>
      <CardMedia
        className='custom404-image'
        image='https://ichef.bbci.co.uk/news/976/cpsprodpb/41CF/production/_109474861_angrycat-index-getty3-3.jpg'
        title='404 background image'
      />
    </main>
    <Footer />
  </div>
);

Custom404.defaultProps = {
  namespacesRequired: ['common'],
  title: '404 no page | Taiwan Street Dance Information Platform',
};

Custom404.propTypes = {
  title: PropTypes.string,
};

export default Custom404;
