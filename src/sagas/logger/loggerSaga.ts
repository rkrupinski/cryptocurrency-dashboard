import { take, select } from 'redux-saga/effects';

export default function* loggerSaga() {
  while (true) {
    const action = yield take('*');
    const state = yield select();

    /* tslint:disable */
    console.group(action.type);
    console.log('%caction', 'font-weight: bold; color: green;', action);
    console.log('%cstate after', 'font-weight: bold; color: blue;', state);
    console.groupEnd();
    /* tslint:enable */
  }
}
