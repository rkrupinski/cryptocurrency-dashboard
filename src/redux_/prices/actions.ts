import { IPrices } from '.';

export enum ActionTypes {
  SET_PRICES = 'SET_PRICES',
  PRICES_LOADING_START = 'PRICES_LOADING_START',
  PRICES_LOADING_STOP = 'PRICES_LOADING_STOP',
  PRICES_LOADED = 'PRICES_LOADED',
}

export interface ISetPricesAction {
  type: ActionTypes.SET_PRICES;
  payload: IPrices;
}

export interface IPricesLoadingStartAction {
  type: ActionTypes.PRICES_LOADING_START;
}

export interface IPricesLoadingStopAction {
  type: ActionTypes.PRICES_LOADING_STOP;
}

export interface IPricesLoadedAction {
  type: ActionTypes.PRICES_LOADED;
}

export type Actions =
  | ISetPricesAction
  | IPricesLoadingStartAction
  | IPricesLoadingStopAction
  | IPricesLoadedAction;
