import { takeEvery, put } from 'redux-saga/effects';

import {
  ActionTypes as CurrenciesActionTypes,
  ICurrencyDeselectedAction,
} from '@src/redux_/currencies';
import { resetBalance } from '@src/redux_/wallet';

function* balanceSaga({ payload: currency }: ICurrencyDeselectedAction) {
  yield put(resetBalance(currency));
}

export default function* walletSaga() {
  yield takeEvery(CurrenciesActionTypes.CURRENCY_DESELECTED, balanceSaga);
}
