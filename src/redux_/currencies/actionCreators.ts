import {
  Currency,
  ActionTypes,
  IFetchCurrenciesAction,
  ISetCurrenciesAction,
} from '.';

export const fetchCurrencies = (): IFetchCurrenciesAction => ({
  type: ActionTypes.FETCH_CURRENCIES,
});

export const setCurrencies = (payload: Currency[]): ISetCurrenciesAction => ({
  payload,
  type: ActionTypes.SET_CURRENCIES,
});
