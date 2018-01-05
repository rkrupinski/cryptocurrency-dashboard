import {
  Price,
  ActionTypes,
  ISetPricesAction,
  IPricesLoadingStartAction,
  IPricesLoadingStopAction,
} from '.';

export const setPrices = (
  prices: { [id: string]: Price },
): ISetPricesAction => ({
  payload: prices,
  type: ActionTypes.SET_PRICES,
});

export const pricesLoadingStart = (): IPricesLoadingStartAction => ({
  type: ActionTypes.PRICES_LOADING_START,
});

export const pricesLoadingStop = (): IPricesLoadingStopAction => ({
  type: ActionTypes.PRICES_LOADING_STOP,
});
