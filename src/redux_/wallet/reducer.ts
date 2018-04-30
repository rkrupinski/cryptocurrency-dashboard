import { combineReducers } from 'redux';

import { ActionTypes, Balance } from '.';
import { RootAction } from '@src/redux_';

export interface IState {
  readonly balanceByCurrency: { [symbol: string]: Balance; };
}

export const reducer = combineReducers<IState, RootAction>({
  balanceByCurrency(state = {}, action) {
    switch (action.type) {
      default:
        return state;
    }
  },
});
