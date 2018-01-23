import { createSelector } from 'reselect';

import { IRootState } from '.';
import { identity } from '@src/common/utils';

export const selectCurrencies = createSelector(
  ({ currencies }: IRootState) => currencies,
  identity,
);

export const selectLayout = createSelector(
  ({ layout }: IRootState) => layout,
  identity,
);

export const selectPrices = createSelector(
  ({ prices }: IRootState) => prices,
  identity,
);

export const selectCharts = createSelector(
  ({ charts }: IRootState) => charts,
  identity,
);

export const selectRefresh = createSelector(
  ({ refresh }: IRootState) => refresh,
  identity,
);
