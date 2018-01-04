import { combineReducers } from 'redux';

import { reducer as currenciesReducer, IState as CurrenciesState } from './currencies';
import { reducer as pricesReducer, IState as PricesState } from './prices';
import { RootAction } from '.';

export interface IRootState {
  readonly currencies: CurrenciesState;
  readonly prices: PricesState;
}

export const rootReducer = combineReducers<IRootState, RootAction>({
  currencies: currenciesReducer,
  prices: pricesReducer,
});
