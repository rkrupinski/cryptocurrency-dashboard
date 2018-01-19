import { combineReducers } from 'redux';

import { RootAction } from '@src/redux_';
import { ActionTypes, IPrices } from '.';

export interface IState {
  readonly loading: boolean;
  readonly data: IPrices;
}

export const reducer = combineReducers<IState, RootAction>({
  loading(state = false, action) {
    switch (action.type) {
      case ActionTypes.PRICES_LOADING_START:
        return true;

      case ActionTypes.PRICES_LOADING_STOP:
        return false;

      default:
        return state;
    }
  },

  data(state = {}, action) {
    switch (action.type) {
      case ActionTypes.SET_PRICES:
        return action.payload;

      case ActionTypes.REMOVE_PRICES:
        {
          const newState = { ...state };

          delete newState[action.payload];

          return newState;
        }

      default:
        return state;
    }
  },
});
