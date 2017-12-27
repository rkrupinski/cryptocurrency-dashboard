import { take, put, call } from 'redux-saga/effects';

import { currenciesUrl } from '@src/common/urls';
import http from '@src/common/http';
import {
  Currency,
  ActionTypes,
  currenciesLoadingStart,
  currenciesLoadingStop,
  setCurrencies,
} from '@src/redux_/currencies';

export default function* currenciesSaga() {
  while (true) {
    yield take(ActionTypes.FETCH_CURRENCIES);

    yield put(currenciesLoadingStart());

    try {
      const {
        data: {
          Data: currencies = [],
        },
      } = yield call(http.get, currenciesUrl());

      const normalizedCurrencies = Object.keys(currencies).map((key) => {
        const {
          Id: id,
          CoinName: name,
          Symbol: symbol,
        } = currencies[key];

        return { id, name, symbol };
      });

      yield put(setCurrencies(normalizedCurrencies));
    } catch (err) {
      // ¯\_(ツ)_/¯
    } finally {
      yield put(currenciesLoadingStop());
    }
  }
}
