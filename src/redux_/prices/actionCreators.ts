import {
  Price,
  ActionTypes,
  IFetchPricesAction,
  ISetPricesAction,
  IRemovePricesAction,
  IPricesLoadingStartAction,
  IPricesLoadingStopAction,
} from '.';

export const fetchPrices = (): IFetchPricesAction => ({
  type: ActionTypes.FETCH_PRICES,
});

export const setPrices = (
  prices: { [id: string]: Price },
): ISetPricesAction => ({
  payload: prices,
  type: ActionTypes.SET_PRICES,
});

export const removePrices = (symbol: string): IRemovePricesAction => ({
  payload: symbol,
  type: ActionTypes.REMOVE_PRICES,
});

export const pricesLoadingStart = (): IPricesLoadingStartAction => ({
  type: ActionTypes.PRICES_LOADING_START,
});

export const pricesLoadingStop = (): IPricesLoadingStopAction => ({
  type: ActionTypes.PRICES_LOADING_STOP,
});
