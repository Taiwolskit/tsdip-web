import Head from 'next/head';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Header from '../../../components/Header';
import SingleStudioPage from '../../../components/SingleStudioPage';
import Footer from '../../../components/Footer';

const App = ({ title }) => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <div className='main'>
      <Head>
        <title>{title.replace('{}', name)}</title>
      </Head>
      <Header />
      <SingleStudioPage name={name} />
      <Footer />
    </div>
  );
};

App.defaultProps = {
  title: 'Tell me more about this {} dance studio'
};

App.propTypes = {
  title: PropTypes.string.isRequired
};

export default App;
