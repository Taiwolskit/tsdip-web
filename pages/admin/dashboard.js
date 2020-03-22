import Head from 'next/head';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Temp from '../../components/Temp';

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
    <Temp />
  </div>
);

App.defaultProps = {
  title: 'Mange your information'
};

App.propTypes = {
  title: PropTypes.string.isRequired
};

export default App;
