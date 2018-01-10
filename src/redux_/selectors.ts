import { createSelector } from 'reselect';

import { IRootState } from '.';

export const selectCurrencies = createSelector(
  ({ currencies }: IRootState) => currencies,
  (currencies) => currencies,
);

export const selectPrices = createSelector(
  ({ prices }: IRootState) => prices,
  (prices) => prices,
);
