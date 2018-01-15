import { createStore, compose, applyMiddleware, GenericStoreEnhancer } from 'redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import persistState, { mergePersistedState } from 'redux-localstorage';
import adapter from 'redux-localstorage/lib/adapters/localStorage';
import filter from 'redux-localstorage-filter';

import { rootReducer, IRootState, Reducer } from '@src/redux_';
import { rootSaga } from '@src/sagas';

// const composeEnhancers = (
  //   process.env.NODE_ENV !== 'production' &&
  //       window &&
  //       window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  // ) || compose;

// https://github.com/zalmoxisus/redux-devtools-extension/issues/430
const composeEnhancers = compose;

const STORAGE_VERSION = 'v1';

const configureStore = (initialState?: IRootState) => {
  const sagaMiddleware = createSagaMiddleware();

  const reducer = compose<Reducer>(
    mergePersistedState(),
  )(rootReducer);

  const storage = compose(
    filter([
      'currencies.selected',
      'currencies.target',
      'layout.current',
    ]),
  )(adapter(window.localStorage));

  const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware),
    persistState(storage, `cryptocurrency-dashboard-${STORAGE_VERSION}`),
  );

  const store = createStore(
    reducer,
    initialState!,
    enhancer as GenericStoreEnhancer,
  );

  sagaMiddleware.run(rootSaga);

  return store as any;
};

export default configureStore;
