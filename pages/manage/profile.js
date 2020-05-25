import Head from 'next/head';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import SideBar from '../../containers/SideBar';
import ManageProfile from '../../components/Mange/Profile';

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
    <main id='dashboard' className='dashboard'>
      <SideBar />
      <ManageProfile />
    </main>
  </div>
);

App.defaultProps = {
  title: 'HIP HOP TW | Manga profile',
};

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;
