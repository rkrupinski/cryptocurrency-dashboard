import { createSelector } from 'reselect';

import { selectPrices } from '@src/redux_/selectors';
import { Currency } from '@src/redux_/currencies';

export const selectData = createSelector(
  selectPrices,
  ({ data }) => data,
);

export const makeSelectPrice = () => createSelector(
  [ selectData, (_: any, currency: Currency) => currency],
  (prices, { symbol }) => prices[symbol],
);
