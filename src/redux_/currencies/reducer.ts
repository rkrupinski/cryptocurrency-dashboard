import { combineReducers } from 'redux';

import { RootAction } from '@src/redux_';
import { ActionTypes, Currency, setCurrencies } from '.';

export interface IState {
  readonly all: Currency[];
  readonly loading: boolean;
  readonly selected: string[];
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

  loading(state = false, action) {
    switch (action.type) {
      case ActionTypes.CURRENCIES_LOADING_START:
        return true;

      case ActionTypes.CURRENCIES_LOADING_STOP:
        return false;

      default:
        return state;
    }
  },

  selected(state = [], action) {
    switch (action.type) {
      default:
        return state;
    }
  },
});
