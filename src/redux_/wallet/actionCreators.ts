import {
  ActionTypes,
  ISetBalanceAction,
  IResetBalanceAction,
  Balance,
} from '.';

import { Currency } from '@src/redux_/currencies';

export const setBalance = ({ symbol }: Currency, balance: Balance): ISetBalanceAction => ({
  payload: { symbol, balance },
  type: ActionTypes.SET_BALANCE,
});

export const resetBalance = ({ symbol }: Currency) => ({
  payload: { symbol },
  type: ActionTypes.RESET_BALANCE,
});
