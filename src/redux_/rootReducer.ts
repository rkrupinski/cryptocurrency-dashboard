import { combineReducers } from 'redux';

import { reducer as chartsReducer, IState as ChartsState } from './charts';
import { reducer as currenciesReducer, IState as CurrenciesState } from './currencies';
import { reducer as layoutReducer, IState as LayoutState } from './layout';
import { reducer as pricesReducer, IState as PricesState } from './prices';
import { RootAction } from '.';

export interface IRootState {
  readonly charts: ChartsState;
  readonly currencies: CurrenciesState;
  readonly layout: LayoutState;
  readonly prices: PricesState;
}

export const rootReducer = combineReducers<IRootState, RootAction>({
  charts: chartsReducer,
  currencies: currenciesReducer,
  layout: layoutReducer,
  prices: pricesReducer,
});
