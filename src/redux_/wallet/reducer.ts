import { combineReducers } from 'redux';

import { ActionTypes, Balance } from '.';
import { RootAction } from '@src/redux_';

export interface IState {
  readonly balanceByCurrency: { [symbol: string]: Balance; };
}

export const reducer = combineReducers<IState, RootAction>({
  balanceByCurrency(state = {}, action) {
    switch (action.type) {
      case ActionTypes.SET_BALANCE:
        {
          const { symbol, balance } = action.payload;

          return {
            ...state,
            [symbol]: balance,
          };
        }

      case ActionTypes.RESET_BALANCE:
        {
          const { symbol } = action.payload;
          const newState = { ...state };

          delete newState[symbol];

          return newState;
        }

      default:
        return state;
    }
  },
});
