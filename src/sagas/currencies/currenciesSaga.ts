import { all, takeLatest, takeEvery, put, call, cancelled } from 'redux-saga/effects';

import { currenciesUrl } from '@src/common/urls';
import http from '@src/common/http';
import {
  Actions,
  ActionTypes,
  currenciesLoadingStart,
  currenciesLoadingStop,
  setCurrencies,
} from '@src/redux_/currencies';
import { fetchPrices } from '@src/redux_/prices';
import { fetchChartData, removeChartData } from '@src/redux_/charts';
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
    case ActionTypes.CURRENCY_SELECTED:
      yield all([
        put(fetchPrices()),
        put(fetchChartData(action.payload)),
      ]);
      break;

    case ActionTypes.CURRENCY_DESELECTED:
      {
        const { id } = action.payload;

        yield put(removeChartData(id));
        break;
      }
  }
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
