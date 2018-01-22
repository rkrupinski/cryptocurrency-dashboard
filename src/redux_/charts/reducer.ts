import { combineReducers } from 'redux';

import { RootAction } from '@src/redux_';
import { ActionTypes, ChartMode, ChartData } from '@src/redux_/charts';

export interface IState {
  readonly data: { [key: string]: ChartData[] };
  readonly loading: { [key: string]: boolean; };
  readonly mode: ChartMode;
}

export const reducer = combineReducers<IState, RootAction>({
  data(state = {}, action) {
    switch (action.type) {
      case ActionTypes.REMOVE_CHART_DATA:
        {
          const newState = { ...state };

          delete newState[action.payload];

          return newState;
        }

      case ActionTypes.SET_CHART_DATA:
        {
          const { id, data } = action.payload;

          return {
            ...state,
            [id]: data,
          };
        }

      default:
        return state;
    }
  },

  loading(state = {}, action) {
    switch (action.type) {
      case ActionTypes.REMOVE_CHART_DATA:
        {
          const newState = { ...state };

          delete newState[action.payload];

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

  mode(state = 'day', action) {
    switch (action.type) {
      case ActionTypes.TOGGLE_CHART_MODE:
        return action.payload;

      default:
        return state;
    }
  },
});
