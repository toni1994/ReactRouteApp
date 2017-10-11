import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './redux/reducers'

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState,history) {

  const middlewares = [
    sagaMiddleware,
    createLogger()
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  const store = createStore(
    rootReducer,
    compose(...enhancers)
  );

  // Create hook for async sagas

  return store;
}