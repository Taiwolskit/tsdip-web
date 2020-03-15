import Head from 'next/head';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import IndexPage from '../components/IndexPage';

const App = ({ title }) => (
  <div className='main'>
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
    <IndexPage />
  </div>
);

App.defaultProps = {
  title: 'Taiwan Street Dance Information Platform'
};

App.propTypes = {
  title: PropTypes.string.isRequired
};

export default App;
