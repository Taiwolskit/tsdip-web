import Head from 'next/head';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';
import Footer from '../components/Footer';

const App = ({ title }) => (
  <div className='main'>
    <Head>
      <title>{title}</title>
      <script
        async
        defer
        crossOrigin='anonymous'
        src={`https://connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=${process.env.FB_API_VERSION}&appId=${process.env.FB_APP_ID}&autoLogAppEvents=1`}
      />
      <script async defer src='https://apis.google.com/js/platform.js' />
      <meta
        name='google-signin-client_id'
        content={`${process.env.GOOGLE_CLIENT_ID}.apps.googleusercontent.com`}></meta>
    </Head>
    <Header />
    <LoginPage />
    <Footer />
  </div>
);

App.defaultProps = {
  title: 'Login / Sign Up Taiwan Street Dance Information Platform'
};

App.propTypes = {
  title: PropTypes.string
};

export default App;
