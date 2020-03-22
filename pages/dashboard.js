import Head from 'next/head';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import DashboardPage from '../components/DashboardPage';

const App = ({ title }) => (
  <div className='main'>
    <style jsx global>{`
      #__next .main {
        display: grid;
        grid-template-rows: 56px calc(100% - 56px);
      }
    `}</style>
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
