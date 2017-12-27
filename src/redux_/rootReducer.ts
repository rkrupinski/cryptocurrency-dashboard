import { combineReducers } from 'redux';

import { reducer as currenciesReducer, IState as CurrenciesState } from './currencies';
import { RootAction } from '.';

export interface IRootState {
  currencies: CurrenciesState;
}

export const rootReducer = combineReducers<IRootState, RootAction>({
  currencies: currenciesReducer,
});
