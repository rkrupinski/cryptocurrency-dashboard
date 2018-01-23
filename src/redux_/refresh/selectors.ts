import { createSelector } from 'reselect';

import { selectRefresh } from '@src/redux_/selectors';

export const selectRefreshRate = createSelector(
  selectRefresh,
  ({ rate }) => rate,
);
