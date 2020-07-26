import Head from 'next/head';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Auth from '../containers/Auth';
import Sidebar from '../containers/Sidebar';

const App = ({ title, data }) => {
  return (
    <Auth>
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
          {/* <div>{data}</div> */}
          <Sidebar />
          <div id='dashboard-content' className='dashboard-content'></div>
        </main>
      </div>
    </Auth>
  );
}

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`${process.env.API_URL}/hello`);
//   const { text } = await res.json();

//   // Pass data to the page via props
//   return { props: { data: text } };
// }

App.defaultProps = {
  title: 'HIP HOP TW | User dashboard',
};

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;
