import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './redux/reducers'

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState,history) {

  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history), 
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