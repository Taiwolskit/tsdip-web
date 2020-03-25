import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import configureStore from '../store';
import '../public/styles.scss';

// This default export is required in a new `pages/_app.js` file.
const App = ({ Component, pageProps, store }) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

export default withRedux(configureStore)(App);
