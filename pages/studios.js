import Head from 'next/head';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';

const App = ({ title }) => (
  <div className='main'>
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
    <div>Studio</div>
    <Footer />
  </div>
);

App.defaultProps = {
  title: 'Find Taiwan dance studios'
};

App.propTypes = {
  title: PropTypes.string.isRequired
};

export default App;
