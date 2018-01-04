import { combineReducers } from 'redux';

import { RootAction } from '@src/redux_';
import { ActionTypes as CurrenciesActionTypes } from '@src/redux_/currencies';

export interface IState {
  readonly loading: { [key: string]: boolean };
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
});
