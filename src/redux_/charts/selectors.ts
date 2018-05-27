import { createSelector } from 'reselect';

import { Currency } from '@src/redux_/currencies';
import { selectCharts } from '@src/redux_/selectors';

export const selectMode = createSelector(
  selectCharts,
  ({ mode }) => mode,
);

export const selectData = createSelector(
  selectCharts,
  ({ data }) => data,
);

export const selectLoading = createSelector(
  selectCharts,
  ({ loading }) => loading,
);

export const makeSelectChartData = () => createSelector(
  selectData,
  (_: any, currency: Currency) => currency,
  (data, { id }) => data[id],
);

export const makeSelectChartDataLoading = () => createSelector(
  selectLoading,
  (_: any, currency: Currency) => currency,
  (loading, { id }) => loading[id],
);
