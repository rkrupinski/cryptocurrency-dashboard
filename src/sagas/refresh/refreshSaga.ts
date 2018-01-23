import { takeLatest, all, select, put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import {
  forceRefresh,
  RefreshRate,
  ActionTypes as RefreshActionTypes,
} from '@src/redux_/refresh';
import { selectRefreshRate } from '@src/redux_/refresh/selectors';
import { ActionTypes as PricesActionTypes } from '@src/redux_/prices';
import { ActionTypes as ChartsActionTypes } from '@src/redux_/charts';

function* refreshTimerSaga() {
  const refreshRate: RefreshRate = yield select(selectRefreshRate);

  switch (refreshRate) {
    case 'manual':
      return;

    default:
      yield call(delay, refreshRate * 1000);
  }

  yield put(forceRefresh());
}

export default function* refreshSaga() {
  yield takeLatest([
    RefreshActionTypes.SET_REFRESH_RATE,
    PricesActionTypes.SET_PRICES,
    ChartsActionTypes.SET_CHART_DATA,
  ], refreshTimerSaga);
}
