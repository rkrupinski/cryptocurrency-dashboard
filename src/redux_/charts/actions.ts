import { ChartMode } from '.';

export enum ActionTypes {
  TOGGLE_CHART_MODE = 'TOGGLE_CHART_MODE',
}

export interface IToggleChartModeAction {
  type: ActionTypes.TOGGLE_CHART_MODE;
  payload: ChartMode;
}

export type Actions =
  | IToggleChartModeAction;
