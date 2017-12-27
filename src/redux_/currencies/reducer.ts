import { combineReducers } from 'redux';

import { RootAction } from '@src/redux_';
import { ActionTypes, Currency, setCurrencies } from '.';

export interface IState {
  readonly all: Currency[];
}

export const reducer = combineReducers<IState, RootAction>({
  all(state = [], action) {
    switch (action.type) {
      case ActionTypes.SET_CURRENCIES:
        return action.payload;

      default:
        return state;
    }
  },
});
