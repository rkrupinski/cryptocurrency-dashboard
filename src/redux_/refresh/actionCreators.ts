import {
  RefreshRate,
  ActionTypes,
  ISetRefreshRateAction,
} from '.';

export const setRefreshRate = (rate: RefreshRate): ISetRefreshRateAction => ({
  payload: rate,
  type: ActionTypes.SET_REFRESH_RATE,
});
