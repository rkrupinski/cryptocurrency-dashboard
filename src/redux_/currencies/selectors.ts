import { createSelector } from 'reselect';

import { selectCurrencies } from '@src/redux_/selectors';
import { Currency } from '@src/redux_/currencies';

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

export const selectSelectedCurrencies = createSelector(
  selectCurrencies,
  ({ selected }) => selected,
);

export const selectValidCurrencies = createSelector(
  selectCurrencies,
  ({ all, selected }) => selected.reduce((acc: Currency[], selectedId) => {
    const actual = all.find(({ id }) => id === selectedId);

    return actual ? [...acc, actual] : acc;
  }, []),
);

export const selectSelectedCurrenciesSymbols = createSelector(
  selectValidCurrencies,
  (valid) => valid.map(({ symbol }) => symbol),
);
