import {
  RefreshRate,
  ActionTypes,
  ISetRefreshRateAction,
  IForceRefreshAction,
} from '.';

export const setRefreshRate = (rate: RefreshRate): ISetRefreshRateAction => ({
  payload: rate,
  type: ActionTypes.SET_REFRESH_RATE,
});

export const forceRefresh = (): IForceRefreshAction => ({
  type: ActionTypes.FORCE_REFRESH,
});
