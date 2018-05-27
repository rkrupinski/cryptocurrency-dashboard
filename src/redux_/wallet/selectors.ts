import { createSelector } from 'reselect';

import { selectWallet } from '@src/redux_/selectors';

export const selectBalanceByCurrency = createSelector(
  selectWallet,
  ({ balanceByCurrency }) => balanceByCurrency,
);
