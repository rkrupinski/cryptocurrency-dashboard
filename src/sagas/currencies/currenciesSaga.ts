import { take, put, call } from 'redux-saga/effects';

import { currenciesUrl } from '@src/common/urls';
import http from '@src/common/http';
import {
  ActionTypes,
  currenciesLoadingStart,
  currenciesLoadingStop,
  setCurrencies,
} from '@src/redux_/currencies';
import { currencies as normalizeCurrencies } from '@src/common/normalize';

export default function* currenciesSaga() {
  while (true) {
    yield take(ActionTypes.FETCH_CURRENCIES);

    yield put(currenciesLoadingStart());

    try {
      const { data } = yield call(http.get, currenciesUrl());

      yield put(setCurrencies(normalizeCurrencies(data.Data)));
    } catch (err) {
      // ¯\_(ツ)_/¯
    } finally {
      yield put(currenciesLoadingStop());
    }
  }
}
