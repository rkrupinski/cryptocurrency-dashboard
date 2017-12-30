import { createSelector } from 'reselect';

import { IRootState, selectCurrencies } from '@src/redux_';

export const selectRemainingCurrencies = createSelector(
  (state: IRootState) => selectCurrencies(state),
  ({ all, selected }) => all.filter(({ id }) => selected.indexOf(id) === -1),
);

export const selectLoading = createSelector(
  (state: IRootState) => selectCurrencies(state),
  ({ loading }) => loading,
);
