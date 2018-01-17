import {
  ChartMode,
  ChartData,
  ActionTypes,
  IToggleChartModeAction,
  IChartDataLoadingStartAction,
  IChartDataLoadingStopAction,
  ISetChartDataAction,
} from '.';

export const toggleChartMode = (mode: ChartMode): IToggleChartModeAction => ({
  payload: mode,
  type: ActionTypes.TOGGLE_CHART_MODE,
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
