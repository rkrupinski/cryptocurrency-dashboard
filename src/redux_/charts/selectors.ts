import { createSelector } from 'reselect';

import { selectCharts } from '@src/redux_/selectors';

export const selectMode = createSelector(
  selectCharts,
  ({ mode }) => mode,
);
