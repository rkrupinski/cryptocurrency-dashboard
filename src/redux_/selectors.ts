import { createSelector } from 'reselect';

import { IRootState } from '.';

export const selectCurrencies = createSelector(
  ({ currencies }: IRootState) => currencies,
  (currencies) => currencies,
);
