import { Currency } from '.';

export enum ActionTypes {
  FETCH_CURRENCIES = 'FETCH_CURRENCIES',
  SET_CURRENCIES = 'SET_CURRENCIES',
}

export interface IFetchCurrenciesAction {
  type: ActionTypes.FETCH_CURRENCIES;
}

export interface ISetCurrenciesAction {
  type: ActionTypes.SET_CURRENCIES;
  payload: Currency[];
}

export type Actions =
  | IFetchCurrenciesAction
  | ISetCurrenciesAction;
