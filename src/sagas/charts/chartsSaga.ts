import { all, takeEvery } from 'redux-saga/effects';

import http, { CancelTokenSource } from '@src/common/http';
import {
  ActionTypes as CurrenciesActionTypes,
  ICurrencySelectedAction,
  ICurrencyDeselectedAction,
} from '@src/redux_/currencies';

const pending: { [key: string]: CancelTokenSource } = {};

function* currencySelectedSaga(action: ICurrencySelectedAction) {
  const { id } = action.payload;
  const source = http.CancelToken.source();

  if (pending[id]) {
    pending[id].cancel();
  }

  pending[id] = source;

  yield 'TODO';
}

function* currencyDeselectedSaga(action: ICurrencyDeselectedAction) {
  yield 'TODO';
}

export default function* chartsSaga() {
  yield all([
    takeEvery(CurrenciesActionTypes.CURRENCY_SELECTED, currencySelectedSaga),
    takeEvery(CurrenciesActionTypes.CURRENCY_DESELECTED, currencyDeselectedSaga),
  ]);
}
