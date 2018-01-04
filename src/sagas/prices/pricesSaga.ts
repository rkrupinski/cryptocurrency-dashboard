import { takeLatest, put, call, cancelled } from 'redux-saga/effects';

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

  try {
    const { data } = yield call(http.get, currenciesUrl(), {
      cancelToken: source.token,
    });

    yield put(setCurrencies(normalizeCurrencies(data.Data)));
  } catch (err) {
    /* tslint:disable */
    console.log('fetching failed');
    /* tslint:enable */

    // (☞ﾟ∀ﾟ)☞
  } finally {
    if (yield cancelled()) {
      source.cancel();

      /* tslint:disable */
      console.log('cancelled');
      /* tslint:enable */
    }

    yield put(currenciesLoadingStop());
  }
}

export default function* currenciesSaga() {
  yield takeLatest(ActionTypes.FETCH_CURRENCIES, fetchCurrenciesSaga);
}
