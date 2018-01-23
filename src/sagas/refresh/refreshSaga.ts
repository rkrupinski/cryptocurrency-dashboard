import { takeLatest, select, put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import {
  RefreshRate,
  ActionTypes as RefreshActionTypes,
} from '@src/redux_/refresh';
import { selectRefreshRate } from '@src/redux_/refresh/selectors';

function* refreshTimerSaga() {
  const refreshRate: RefreshRate = yield select(selectRefreshRate);

  switch (refreshRate) {
    case 'manual':
      return;

    default:
      yield call(delay, refreshRate * 1000);
  }

  /* tslint:disable */
  console.log('refreshing after:', refreshRate);
  /* tslint:enable */
}

export default function* refreshSaga() {
  yield takeLatest([
    RefreshActionTypes.SET_REFRESH_RATE,
  ], refreshTimerSaga);
}
