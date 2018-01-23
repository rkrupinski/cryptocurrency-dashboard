import { IPrices } from '.';
import { ActionType } from 'redux-saga/effects';

export enum ActionTypes {
  FETCH_PRICES = 'FETCH_PRICES',
  SET_PRICES = 'SET_PRICES',
  REMOVE_PRICES = 'REMOVE_PRICES',
  PRICES_LOADING_START = 'PRICES_LOADING_START',
  PRICES_LOADING_STOP = 'PRICES_LOADING_STOP',
}

export interface IFetchPricesAction {
  type: ActionTypes.FETCH_PRICES;
}

export interface ISetPricesAction {
  payload: IPrices;
  type: ActionTypes.SET_PRICES;
}

export interface IRemovePricesAction {
  payload: string;
  type: ActionTypes.REMOVE_PRICES;
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
    | IRemovePricesAction
    | IPricesLoadingStartAction
    | IPricesLoadingStopAction;
