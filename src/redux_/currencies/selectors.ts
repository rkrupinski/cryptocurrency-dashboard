import { createSelector } from 'reselect';

import { IState as CurrenciesState } from '.';

export const availableCurrencies = createSelector(
  ({ all }: CurrenciesState) => all,
  ({ selected }: CurrenciesState) => selected,
  (all, selected) => all.filter(({ id }) => selected.indexOf(id) === -1),
);
