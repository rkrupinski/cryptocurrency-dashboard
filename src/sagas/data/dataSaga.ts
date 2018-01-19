import { all, takeEvery, put, call, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import {
  Currency,
  Actions as CurrenciesActions,
  ActionTypes as CurrenciesActionTypes,
} from '@src/redux_/currencies';
import {
  Actions as ChartsActions,
  ActionTypes as ChartsActionTypes,
  fetchChartData,
  removeChartData,
} from '@src/redux_/charts';
import { selectValidCurrencies } from '@src/redux_/currencies/selectors';
import { fetchPrices, removePrices } from '@src/redux_/prices';
import { syncLayout } from '@src/redux_/layout';

type Triggers =
    | CurrenciesActions
    | ChartsActions;

function* fetchDataSaga(action: Triggers) {
  switch (action.type) {
    case CurrenciesActionTypes.SET_CURRENCIES:
    case CurrenciesActionTypes.TOGGLE_TARGET:
      {
        const selected: Currency[] = yield select(selectValidCurrencies);

        yield all([
          put(fetchPrices()),
          ...selected.map((currency) => put(fetchChartData(currency))),
        ]);
      }
      break;

    case CurrenciesActionTypes.CURRENCY_SELECTED:
      yield all([
        put(fetchPrices()),
        put(fetchChartData(action.payload)),
      ]);
      break;

    case CurrenciesActionTypes.CURRENCY_DESELECTED:
      {
        const { id, symbol } = action.payload;

        yield all([
          put(removeChartData(id)),
          put(removePrices(symbol)),
        ]);
        break;
      }

    case ChartsActionTypes.TOGGLE_CHART_MODE:
      {
        const selected: Currency[] = yield select(selectValidCurrencies);

        yield all(selected.map((currency) => put(fetchChartData(currency))));
        break;
      }
  }

  yield call(delay, 0);
  yield put(syncLayout());
}

export default function* dataSaga() {
  yield all([
    takeEvery([
      CurrenciesActionTypes.SET_CURRENCIES,
      CurrenciesActionTypes.TOGGLE_TARGET,
      CurrenciesActionTypes.CURRENCY_SELECTED,
      CurrenciesActionTypes.CURRENCY_DESELECTED,
      ChartsActionTypes.TOGGLE_CHART_MODE,
    ], fetchDataSaga),
  ]);
}
