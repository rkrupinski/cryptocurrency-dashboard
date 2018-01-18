import { combineReducers } from 'redux';

import { RootAction } from '@src/redux_';
import { ActionTypes as CurrenciesActionTypes } from '@src/redux_/currencies';
import { ActionTypes, ChartMode, ChartData } from '@src/redux_/charts';

export interface IState {
  readonly data: { [key: string]: ChartData[] };
  readonly loading: { [key: string]: boolean; };
  readonly mode: ChartMode;
}

export const reducer = combineReducers<IState, RootAction>({
  data(state = {}, action) {
    switch (action.type) {
      case CurrenciesActionTypes.CURRENCY_DESELECTED:
        {
          const { id } = action.payload;
          const newState = { ...state };

          delete newState[id];

          return newState;
        }

      case ActionTypes.SET_CHART_DATA:
        {
          const { id, data } = action.payload;

          return data.length > 1 ? {
            ...state,
            [id]: data,
          } : state;
        }

      default:
        return state;
    }
  },

  loading(state = {}, action) {
    switch (action.type) {
      case CurrenciesActionTypes.CURRENCY_DESELECTED:
        {
          const { id } = action.payload;
          const newState = { ...state };

          delete newState[id];

          return newState;
        }

      case ActionTypes.CHART_DATA_LOADING_START:
        return {
          ...state,
          [action.payload]: true,
        };

      case ActionTypes.CHART_DATA_LOADING_STOP:
        return {
          ...state,
          [action.payload]: false,
        };

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
