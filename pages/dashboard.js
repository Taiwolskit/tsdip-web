import Head from 'next/head';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import DashboardPage from '../components/DashboardPage';

const App = ({ title }) => (
  <div className='main'>
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
    <DashboardPage />
  </div>
);

App.defaultProps = {
  title: 'Mange your information'
};

App.propTypes = {
  title: PropTypes.string.isRequired
};

export default App;
