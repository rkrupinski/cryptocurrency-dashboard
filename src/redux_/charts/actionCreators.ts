import {
  ChartMode,
  ActionTypes,
  IToggleChartModeAction,
} from '.';

export const toggleChartMode = (mode: ChartMode): IToggleChartModeAction => ({
  payload: mode,
  type: ActionTypes.TOGGLE_CHART_MODE,
});
