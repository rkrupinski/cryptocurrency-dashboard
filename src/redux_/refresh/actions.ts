import { RefreshRate } from '.';

export enum ActionTypes {
  SET_REFRESH_RATE = 'SET_REFRESH_RATE',
  FORCE_REFRESH = 'FORCE_REFRESH',
}

export interface ISetRefreshRateAction {
  payload: RefreshRate;
  type: ActionTypes.SET_REFRESH_RATE;
}

export interface IForceRefreshAction {
  type: ActionTypes.FORCE_REFRESH;
}

export type Actions =
    | ISetRefreshRateAction
    | IForceRefreshAction;
