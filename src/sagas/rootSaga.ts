import { all } from 'redux-saga/effects';

import currenciesSaga from './currencies';
// import pricesSaga from './prices';
import loggerSaga from './logger';

export function* rootSaga() {
  yield all([
    currenciesSaga(),
    // pricesSaga(),
    loggerSaga(),
  ]);
}
