import { Balance } from '.';

export enum ActionTypes {
  SET_BALANCE = 'SET_BALANCE',
  RESET_BALANCE = 'RESET_BALANCE',
}

export interface ISetBalanceAction {
  payload: { symbol: string, balance: Balance };
  type: ActionTypes.SET_BALANCE;
}

export interface IResetBalanceAction {
  payload: { symbol: string };
  type: ActionTypes.RESET_BALANCE;
}

export type Actions =
    | ISetBalanceAction
    | IResetBalanceAction;
