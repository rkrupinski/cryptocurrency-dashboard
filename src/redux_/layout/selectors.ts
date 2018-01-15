import { createSelector } from 'reselect';

import { selectLayout } from '@src/redux_/selectors';

export const selectCurrentLayout = createSelector(
  selectLayout,
  ({ current }) => current,
);
