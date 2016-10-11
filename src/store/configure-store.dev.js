import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Perf from 'react-addons-perf';

import reducer from '../reducers';
import DevTools from '../components/DevTools';
import dataFetcherSaga from '../sagas/data-fetcher.saga';


window.Perf = Perf;

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];
  const store = createStore(
    reducer,
    compose(
      applyMiddleware(...middlewares),
      DevTools.instrument()
    )
  );

  sagaMiddleware.run(dataFetcherSaga);

  // Allow direct access to the store, for debugging/testing
  window.store = store;

  return store;
}
