import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './reducers';


const middleware = applyMiddleware(logger);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, middleware);
  return store;
}
