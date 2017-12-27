import { take, select } from 'redux-saga/effects';

export default function* loggerSaga() {
  while (true) {
    const action = yield take('*');
    const state = yield select();

    /* tslint:disable */
    console.group(action.type);
    console.log('action', action);
    console.log('state after', state);
    console.groupEnd();
    /* tslint:enable */
  }
}
