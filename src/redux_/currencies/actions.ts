import { Currency, Target } from '.';

export enum ActionTypes {
  FETCH_CURRENCIES = 'FETCH_CURRENCIES',
  SET_CURRENCIES = 'SET_CURRENCIES',
  CURRENCIES_LOADING_START = 'CURRENCIES_LOADING_START',
  CURRENCIES_LOADING_STOP = 'CURRENCIES_LOADING_STOP',
  CURRENCY_SELECTED = 'CURRENCY_SELECTED',
  CURRENCY_DESELECTED = 'CURRENCY_DESELECTED',
  TOGGLE_TARGET = 'TOGGLE_TARGET',
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

export interface ICurrencySelectedAction {
  type: ActionTypes.CURRENCY_SELECTED;
  payload: Currency;
}

export interface ICurrencyDeselectedAction {
  type: ActionTypes.CURRENCY_DESELECTED;
  payload: Currency;
}

export interface IToggleTargetAction {
  type: ActionTypes.TOGGLE_TARGET;
  payload: Target;
}

export type Actions =
    | IFetchCurrenciesAction
    | ISetCurrenciesAction
    | ICurrenciesLoadingStartAction
    | ICurrenciesLoadingStopAction
    | ICurrencySelectedAction
    | ICurrencyDeselectedAction
    | IToggleTargetAction;
