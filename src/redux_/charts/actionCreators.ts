import {
  ChartMode,
  ChartData,
  ActionTypes,
  IToggleChartModeAction,
  IFetchChartDataAction,
  IChartDataLoadingStartAction,
  IChartDataLoadingStopAction,
  ISetChartDataAction,
  IRemoveChartDataAction,
} from '.';
import { Currency } from '@src/redux_/currencies';

export const toggleChartMode = (mode: ChartMode): IToggleChartModeAction => ({
  payload: mode,
  type: ActionTypes.TOGGLE_CHART_MODE,
});

export const fetchChartData = (currency: Currency): IFetchChartDataAction => ({
  payload: currency,
  type: ActionTypes.FETCH_CHART_DATA,
});

export const chartDataLoadingStart = (id: string): IChartDataLoadingStartAction => ({
  payload: id,
  type: ActionTypes.CHART_DATA_LOADING_START,
});

export const chartDataLoadingStop = (id: string): IChartDataLoadingStopAction => ({
  payload: id,
  type: ActionTypes.CHART_DATA_LOADING_STOP,
});

export const setChartData = (id: string, data: ChartData[]): ISetChartDataAction => ({
  payload: { id, data },
  type: ActionTypes.SET_CHART_DATA,
});

export const removeChartData = (id: string): IRemoveChartDataAction => ({
  payload: id,
  type: ActionTypes.REMOVE_CHART_DATA,
});
