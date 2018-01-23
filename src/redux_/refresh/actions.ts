import { RefreshRate } from '.';

export enum ActionTypes {
  SET_REFRESH_RATE = 'SET_REFRESH_RATE',
}

export interface ISetRefreshRateAction {
  payload: RefreshRate;
  type: ActionTypes.SET_REFRESH_RATE;
}

export type Actions =
    | ISetRefreshRateAction;
