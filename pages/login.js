import Head from 'next/head';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';
import Footer from '../components/Footer';

const App = ({ title }) => (
  <div className='main'>
    <Head>
      <title>{title}</title>
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
  title: PropTypes.string.isRequired
};

export default App;
