import { createStore, compose, applyMiddleware, GenericStoreEnhancer } from 'redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';

import { rootReducer, IRootState } from '@src/redux_';
import { rootSaga } from '@src/sagas';

// const composeEnhancers = (
  //   process.env.NODE_ENV !== 'production' &&
  //       window &&
  //       window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  // ) || compose;

// https://github.com/zalmoxisus/redux-devtools-extension/issues/430
const composeEnhancers = compose;

const configureStore = (initialState?: IRootState) => {
  const sagaMiddleware = createSagaMiddleware();

  const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware),
  );

  const store = createStore(
    rootReducer,
    initialState!,
    enhancer as GenericStoreEnhancer,
  );

  sagaMiddleware.run(rootSaga);

  return store as any;
};

export default configureStore;
