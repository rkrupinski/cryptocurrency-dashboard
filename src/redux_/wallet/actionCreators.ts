import {
  ActionTypes,
  ISetBalanceAction,
  Balance,
} from '.';

import { Currency } from '@src/redux_/currencies';

export const setBalance = ({ symbol }: Currency, balance: Balance): ISetBalanceAction => ({
  payload: { symbol, balance },
  type: ActionTypes.SET_BALANCE,
});
