import { wrapper } from '../store';
import '../public/styles.scss';

const App = ({ Component, pageProps }) => <Component {...pageProps} />;

export default wrapper.withRedux(App);
