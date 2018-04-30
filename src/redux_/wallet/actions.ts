import { Balance } from '.';

export enum ActionTypes {
  SET_BALANCE = 'SET_BALANCE',
}

export interface ISetBalanceAction {
  payload: { symbol: string, balance: Balance };
  type: ActionTypes.SET_BALANCE;
}

export type Actions =
    | ISetBalanceAction;
