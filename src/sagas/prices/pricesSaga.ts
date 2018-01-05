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

    /* tslint:disable */
    console.log('data', data);
    /* tslint:enable */
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

// import { takeLatest, put, call, cancelled } from 'redux-saga/effects';

// import { currenciesUrl } from '@src/common/urls';
// import http from '@src/common/http';
// import {
//   ActionTypes,
//   currenciesLoadingStart,
//   currenciesLoadingStop,
//   setCurrencies,
// } from '@src/redux_/currencies';
// import { currencies as normalizeCurrencies } from '@src/common/normalize';

// function* fetchCurrenciesSaga() {
//   const source = http.CancelToken.source();

//   try {
//     const { data } = yield call(http.get, currenciesUrl(), {
//       cancelToken: source.token,
//     });

//     yield put(setCurrencies(normalizeCurrencies(data.Data)));
//   } catch (err) {
//     /* tslint:disable */
//     console.log('fetching failed');
//     /* tslint:enable */

//     // (☞ﾟ∀ﾟ)☞
//   } finally {
//     if (yield cancelled()) {
//       source.cancel();

//       /* tslint:disable */
//       console.log('cancelled');
//       /* tslint:enable */
//     }

//     yield put(currenciesLoadingStop());
//   }
// }

// export default function* currenciesSaga() {
//   yield takeLatest(ActionTypes.FETCH_CURRENCIES, fetchCurrenciesSaga);
// }
