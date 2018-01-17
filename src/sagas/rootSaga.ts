import { all } from 'redux-saga/effects';

import currenciesSaga from './currencies';
import pricesSaga from './prices';
import chartsSaga from './charts';
import loggerSaga from './logger';

export function* rootSaga() {
  const sagas = [
    currenciesSaga(),
    pricesSaga(),
    chartsSaga(),
    process.env.NODE_ENV !== 'production' ? loggerSaga() : null,
  ];

  yield all(sagas.filter(Boolean));
}
