import Error from 'next/error';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ErrorPage = ({ error, statusCode }) => {
  if (process.env.NODE_ENV === 'production' && statusCode === 404) {
    return <Error title='還在開發中，近請期待' statusCode={statusCode} />;
  }
  return <Error title={error} statusCode={statusCode} />;
};

const App = ({ error, statusCode }) => (
  <div className='main'>
    <Head>
      <title>頁面開發中 - Taiwan Street Dance Information Platform</title>
    </Head>
    <Header />
    <ErrorPage error={error} statusCode={statusCode} />
    <Footer />
  </div>
);

App.getInitialProps = ({ err: error, res: { statusCode } }) => ({
  error,
  statusCode
});

App.defaultProps = {
  error: 'This page could not be found',
  statusCode: 404
};

App.propTypes = {
  error: PropTypes.string.isRequired,
  statusCode: PropTypes.number.isRequired
};

export default App;
