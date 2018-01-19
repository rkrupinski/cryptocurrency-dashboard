import { ChartMode, ChartData } from '.';
import { Currency } from '@src/redux_/currencies';

export enum ActionTypes {
  TOGGLE_CHART_MODE = 'TOGGLE_CHART_MODE',
  FETCH_CHART_DATA = 'FETCH_CHART_DATA',
  CHART_DATA_LOADING_START = 'CHART_DATA_LOADING_START',
  CHART_DATA_LOADING_STOP = 'CHART_DATA_LOADING_STOP',
  SET_CHART_DATA = 'SET_CHART_DATA',
  REMOVE_CHART_DATA = 'REMOVE_CHART_DATA',
}

export interface IToggleChartModeAction {
  payload: ChartMode;
  type: ActionTypes.TOGGLE_CHART_MODE;
}

export interface IFetchChartDataAction {
  payload: Currency;
  type: ActionTypes.FETCH_CHART_DATA;
}

export interface IChartDataLoadingStartAction {
  payload: string;
  type: ActionTypes.CHART_DATA_LOADING_START;
}

export interface IChartDataLoadingStopAction {
  payload: string;
  type: ActionTypes.CHART_DATA_LOADING_STOP;
}

export interface ISetChartDataAction {
  payload: { id: string, data: ChartData[] };
  type: ActionTypes.SET_CHART_DATA;
}

export interface IRemoveChartDataAction {
  payload: string;
  type: ActionTypes.REMOVE_CHART_DATA;
}

export type Actions =
  | IToggleChartModeAction
  | IFetchChartDataAction
  | IChartDataLoadingStartAction
  | IChartDataLoadingStopAction
  | ISetChartDataAction
  | IRemoveChartDataAction;
