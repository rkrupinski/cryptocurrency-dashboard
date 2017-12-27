import { all } from 'redux-saga/effects';

import currenciesSaga from './currencies';
import loggerSaga from './logger';

export function* rootSaga() {
  yield all([
    currenciesSaga(),
    loggerSaga(),
  ]);
}
