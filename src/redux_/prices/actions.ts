import { IPrices } from '.';
import { ActionType } from 'redux-saga/effects';

export enum ActionTypes {
  FETCH_PRICES = 'FETCH_PRICES',
  SET_PRICES = 'SET_PRICES',
  PRICES_LOADING_START = 'PRICES_LOADING_START',
  PRICES_LOADING_STOP = 'PRICES_LOADING_STOP',
}

export interface IFetchPricesAction {
  type: ActionTypes.FETCH_PRICES;
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

export type Actions =
  | IFetchPricesAction
  | ISetPricesAction
  | IPricesLoadingStartAction
  | IPricesLoadingStopAction;
