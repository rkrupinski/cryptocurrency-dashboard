import { all } from 'redux-saga/effects';

import currenciesSaga from './currencies';
import pricesSaga from './prices';
import chartsSaga from './charts';
import layoutSaga from './layout';
import loggerSaga from './logger';

export function* rootSaga() {
  const sagas = [
    currenciesSaga(),
    pricesSaga(),
    chartsSaga(),
    layoutSaga(),
    process.env.NODE_ENV !== 'production' ? loggerSaga() : null,
  ];

  yield all(sagas.filter(Boolean));
}
