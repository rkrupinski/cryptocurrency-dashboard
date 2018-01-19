import { all, takeLatest, put, call, cancelled } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { currenciesUrl } from '@src/common/urls';
import http from '@src/common/http';
import {
  ActionTypes,
  currenciesLoadingStart,
  currenciesLoadingStop,
  setCurrencies,
} from '@src/redux_/currencies';
import { currencies as normalizeCurrencies } from '@src/common/normalize';

function* fetchCurrenciesSaga() {
  const source = http.CancelToken.source();

  yield put(currenciesLoadingStart());

  try {
    const { data } = yield call(
      http.get,
      currenciesUrl(),
      { cancelToken: source.token },
    );

    yield put(setCurrencies(normalizeCurrencies(data.Data)));
  } catch (err) {
    // (☞ﾟ∀ﾟ)☞
  } finally {
    yield put(currenciesLoadingStop());

    if (yield cancelled()) {
      source.cancel();
    }
  }
}

export default function* currenciesSaga() {
  yield all([
    takeLatest(ActionTypes.FETCH_CURRENCIES, fetchCurrenciesSaga),
  ]);
}
