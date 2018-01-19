import { all, takeEvery, select, put } from 'redux-saga/effects';

import { ActionTypes, setLayout } from '@src/redux_/layout';
import { selectTmpLayout } from '@src/redux_/layout/selectors';

function* syncLayoutSaga() {
  const layout = yield select(selectTmpLayout);

  yield put(setLayout(layout));
}

export default function* layoutSaga() {
  yield all([
    takeEvery(ActionTypes.SYNC_LAYOUT, syncLayoutSaga),
  ]);
}
