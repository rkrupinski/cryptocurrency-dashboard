import { takeLatest, put, cancelled, select, call } from 'redux-saga/effects';

import http from '@src/common/http';
import { pricesUrl } from '@src/common/urls';
import { ActionTypes as CurrenciesActionTypes } from '@src/redux_/currencies';
import {
  selectTarget,
  selectSelectedCurrenciesSymbols,
} from '@src/redux_/currencies/selectors';
import {
  pricesLoadingStart,
  pricesLoadingStop,
  pricesLoaded,
  setPrices,
} from '@src/redux_/prices';
import { IRootState } from '@src/redux_';

function* fetchPricesSaga() {
  const source = http.CancelToken.source();
  const target = yield select(selectTarget);
  const selectedSymbols = yield select(selectSelectedCurrenciesSymbols);

  if (!selectedSymbols.length) {
    yield put(pricesLoaded());

    return;
  }

  yield put(pricesLoadingStart());

  try {
    const { data } = yield call(
      http.get,
      pricesUrl(selectedSymbols, [target]),
      { cancelToken: source.token },
    );

    yield put(setPrices(data));
    yield put(pricesLoaded());
  } catch (err) {
    // (☞ﾟ∀ﾟ)☞
  } finally {
    yield put(pricesLoadingStop());

    if (yield cancelled()) {
      source.cancel();
    }
  }
}

export default function* pricesSaga() {
  yield takeLatest([
    CurrenciesActionTypes.SET_CURRENCIES,
    CurrenciesActionTypes.TOGGLE_TARGET,
    CurrenciesActionTypes.CURRENCY_SELECTED,
  ], fetchPricesSaga);
}
