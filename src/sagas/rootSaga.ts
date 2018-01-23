import { all } from 'redux-saga/effects';

import loggerSaga from './logger';
import currenciesSaga from './currencies';
import dataSaga from './data';
import pricesSaga from './prices';
import chartsSaga from './charts';
import layoutSaga from './layout';
import refreshSaga from './refresh';

export function* rootSaga() {
  const sagas = [
    process.env.NODE_ENV !== 'production' ? loggerSaga : null,
    currenciesSaga,
    dataSaga,
    pricesSaga,
    chartsSaga,
    layoutSaga,
    refreshSaga,
  ];

  yield all(sagas.filter(Boolean).map((saga) => saga && saga()));
}
