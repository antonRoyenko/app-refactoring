import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import saga from '../containers/App/saga';
import createRootReducer from './createRootReducer';

export const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const middlewares = [thunk, sagaMiddleware];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Prevent recomputing reducers for `replaceReducer`
          shouldHotReload: false,
        })
      : compose;

  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(createRootReducer, composeEnhancers(...enhancers));

  sagaMiddleware.run(saga);

  return store;
}
