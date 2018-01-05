import { createSelector } from 'reselect';

import { selectCurrencies } from '@src/redux_';

export const selectRemainingCurrencies = createSelector(
  selectCurrencies,
  ({ all, selected }) => all.filter(({ id }) => selected.indexOf(id) === -1),
);

export const selectLoading = createSelector(
  selectCurrencies,
  ({ loading }) => loading,
);

export const selectTarget = createSelector(
  selectCurrencies,
  ({ target }) => target,
);

export const selectSelectedCurrenciesSymbols = createSelector(
  selectCurrencies,
  ({ all, selected }) => all
      .filter(({ id }) => selected.find((selectedId) => selectedId === id))
      .map(({ symbol }) => symbol),
);
