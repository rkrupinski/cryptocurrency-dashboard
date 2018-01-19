import {
  all,
  takeLatest,
  takeEvery,
  put,
  call,
  cancelled,
  select,
} from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { currenciesUrl } from '@src/common/urls';
import http from '@src/common/http';
import {
  Currency,
  Actions,
  ActionTypes,
  currenciesLoadingStart,
  currenciesLoadingStop,
  setCurrencies,
} from '@src/redux_/currencies';
import { selectValidCurrencies } from '@src/redux_/currencies/selectors';
import { fetchPrices, removePrices } from '@src/redux_/prices';
import { fetchChartData, removeChartData } from '@src/redux_/charts';
import { syncLayout } from '@src/redux_/layout';
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

function* fetchDataSaga(action: Actions) {
  switch (action.type) {
    case ActionTypes.SET_CURRENCIES:
    case ActionTypes.TOGGLE_TARGET:
      {
        const selected: Currency[] = yield select(selectValidCurrencies);

        yield all([
          put(fetchPrices()),
          ...selected.map((currency) => put(fetchChartData(currency))),
        ]);
      }
      break;

    case ActionTypes.CURRENCY_SELECTED:
      yield all([
        put(fetchPrices()),
        put(fetchChartData(action.payload)),
      ]);
      break;

    case ActionTypes.CURRENCY_DESELECTED:
      {
        const { id, symbol } = action.payload;

        yield all([
          put(removeChartData(id)),
          put(removePrices(symbol)),
        ]);
        break;
      }
  }

  yield call(delay, 0);
  yield put(syncLayout());
}

export default function* currenciesSaga() {
  yield all([
    takeLatest(ActionTypes.FETCH_CURRENCIES, fetchCurrenciesSaga),
    takeEvery([
      ActionTypes.SET_CURRENCIES,
      ActionTypes.TOGGLE_TARGET,
      ActionTypes.CURRENCY_SELECTED,
      ActionTypes.CURRENCY_DESELECTED,
    ], fetchDataSaga),
  ]);
}
