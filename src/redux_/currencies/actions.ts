import { Currency } from '.';

export enum ActionTypes {
  FETCH_CURRENCIES = 'FETCH_CURRENCIES',
  SET_CURRENCIES = 'SET_CURRENCIES',
  CURRENCIES_LOADING_START = 'CURRENCIES_LOADING_START',
  CURRENCIES_LOADING_STOP = 'CURRENCIES_LOADING_STOP',
}

export interface IFetchCurrenciesAction {
  type: ActionTypes.FETCH_CURRENCIES;
}

export interface ISetCurrenciesAction {
  type: ActionTypes.SET_CURRENCIES;
  payload: Currency[];
}

export interface ICurrenciesLoadingStartAction {
  type: ActionTypes.CURRENCIES_LOADING_START;
}

export interface ICurrenciesLoadingStopAction {
  type: ActionTypes.CURRENCIES_LOADING_STOP;
}

export type Actions =
  | IFetchCurrenciesAction
  | ISetCurrenciesAction
  | ICurrenciesLoadingStartAction
  | ICurrenciesLoadingStopAction;
