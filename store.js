import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import rootReducer from './reducers';

const configureStore = (preloadedState) => {
  const composeWithDevTools =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;

  const reducer = (state, action) => {
    if (action.type === HYDRATE) {
      return {
        ...state,
        ...action.payload,
      };
    } else {
      return rootReducer(state, action);
    }
  };

  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk, logger))
  );
};

export const wrapper = createWrapper(configureStore);
