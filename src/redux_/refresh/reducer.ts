import { combineReducers } from 'redux';

import { RefreshRate, ActionTypes } from '.';
import { RootAction } from '@src/redux_';

export interface IState {
  readonly rate: RefreshRate;
}

export const reducer = combineReducers<IState, RootAction>({
  rate(state = 60, action) {
    switch (action.type) {
      case ActionTypes.SET_REFRESH_RATE:
        return action.payload;

      default:
        return state;
    }
  },
});
