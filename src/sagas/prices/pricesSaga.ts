import { takeLatest, put, cancelled, select, call } from 'redux-saga/effects';

import http from '@src/common/http';
import { pricesUrl } from '@src/common/urls';
import {
  selectTarget,
  selectSelectedCurrenciesSymbols,
} from '@src/redux_/currencies/selectors';
import {
  ActionTypes,
  pricesLoadingStart,
  pricesLoadingStop,
  setPrices,
} from '@src/redux_/prices';
import { IRootState } from '@src/redux_';

function* fetchPricesSaga() {
  const source = http.CancelToken.source();
  const target = yield select(selectTarget);
  const selectedSymbols = yield select(selectSelectedCurrenciesSymbols);

  if (!selectedSymbols.length) {
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
  yield takeLatest(ActionTypes.FETCH_PRICES, fetchPricesSaga);
}
