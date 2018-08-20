import { createStore, applyMiddleware, combineReducers } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSaga from 'redux-saga';
import { createLogger } from 'redux-logger';

import history from './history';
import reducers from 'reducers';
import rootSaga from 'sagas';

const saga = createSaga();
const logger = createLogger({ diff: true });
const router = routerMiddleware(history);

const middlewareEnhancer = (() =>
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(saga, router, logger))
    : applyMiddleware(saga, router))();

export default createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer,
  }),
  undefined,
  middlewareEnhancer,
);

saga.run(rootSaga);
