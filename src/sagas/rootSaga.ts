import { all } from 'redux-saga/effects';

import loggerSaga from './logger';

export function* rootSaga() {
  yield all([
    loggerSaga(),
  ]);
}
