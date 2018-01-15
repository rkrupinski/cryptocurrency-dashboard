import { createSelector } from 'reselect';

import { IRootState } from '.';

export const selectCurrencies = createSelector(
  ({ currencies }: IRootState) => currencies,
  (currencies) => currencies,
);

export const selectLayout = createSelector(
  ({ layout }: IRootState) => layout,
  (layout) => layout,
);

export const selectPrices = createSelector(
  ({ prices }: IRootState) => prices,
  (prices) => prices,
);
