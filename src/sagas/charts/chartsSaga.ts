import { all, put, call, select, takeEvery } from 'redux-saga/effects';

import http, { CancelTokenSource } from '@src/common/http';
import { chartsUrl } from '@src/common/urls';
import { priceHistory as normalizePriceHistory} from '@src/common/normalize';
import { Currency } from '@src/redux_/currencies';
import {
  ActionTypes,
  IFetchChartDataAction,
  chartDataLoadingStart,
  chartDataLoadingStop,
  setChartData,
 } from '@src/redux_/charts';
import { selectMode } from '@src/redux_/charts/selectors';
import { selectTarget } from '@src/redux_/currencies/selectors';

const pending: { [key: string]: CancelTokenSource } = {};

function* fetchChartDataSaga(action: IFetchChartDataAction) {
  const { id, symbol } = action.payload;
  const source = http.CancelToken.source();
  const mode = yield select(selectMode);
  const target = yield select(selectTarget);

  if (pending[id]) {
    pending[id].cancel();
  }

  pending[id] = source;

  yield put(chartDataLoadingStart(id));

  try {
    const { data } = yield call(
      http.get,
      chartsUrl(mode, symbol, target),
      { cancelToken: source.token },
    );

    yield put(setChartData(id, normalizePriceHistory(data.Data)));
  } catch (err) {
    // (☞ﾟ∀ﾟ)☞
  } finally {
    yield put(chartDataLoadingStop(id));
  }
}

export default function* chartsSaga() {
  yield all([
    takeEvery(ActionTypes.FETCH_CHART_DATA, fetchChartDataSaga),
  ]);
}
