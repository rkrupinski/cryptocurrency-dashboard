import { combineReducers } from 'redux';

import { RootAction } from '@src/redux_';
import { ActionTypes as CurrenciesActionTypes } from '@src/redux_/currencies';
import { ActionTypes, ChartMode } from '@src/redux_/charts';

export interface IState {
  readonly loading: { [key: string]: boolean; };
  readonly mode: ChartMode;
}

export const reducer = combineReducers<IState, RootAction>({
  loading(state = {}, action) {
    switch (action.type) {
      case CurrenciesActionTypes.CURRENCY_DESELECTED:
        {
          const { id } = action.payload;
          const newState = { ...state };

          delete newState[id];

          return newState;
        }
      default:
        return state;
    }
  },

  mode(state = 'hour', action) {
    switch (action.type) {
      case ActionTypes.TOGGLE_CHART_MODE:
        return action.payload;

      default:
        return state;
    }
  },
});
