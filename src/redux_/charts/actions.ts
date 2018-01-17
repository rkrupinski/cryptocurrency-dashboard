import { ChartMode, ChartData } from '.';

export enum ActionTypes {
  TOGGLE_CHART_MODE = 'TOGGLE_CHART_MODE',
  CHART_DATA_LOADING_START = 'CHART_DATA_LOADING_START',
  CHART_DATA_LOADING_STOP = 'CHART_DATA_LOADING_STOP',
  SET_CHART_DATA = 'SET_CHART_DATA',
}

export interface IToggleChartModeAction {
  payload: ChartMode;
  type: ActionTypes.TOGGLE_CHART_MODE;
}

export interface IChartDataLoadingStartAction {
  type: ActionTypes.CHART_DATA_LOADING_START;
  payload: string;
}

export interface IChartDataLoadingStopAction {
  type: ActionTypes.CHART_DATA_LOADING_STOP;
  payload: string;
}

export interface ISetChartDataAction {
  payload: { id: string, data: ChartData[] };
  type: ActionTypes.SET_CHART_DATA;
}

export type Actions =
  | IToggleChartModeAction
  | IChartDataLoadingStartAction
  | IChartDataLoadingStopAction
  | ISetChartDataAction;
