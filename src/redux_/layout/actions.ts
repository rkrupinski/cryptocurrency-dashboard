import { Layout } from 'react-grid-layout';

export enum ActionTypes {
  SYNC_LAYOUT = 'SYNC_LAYOUT',
  SET_LAYOUT = 'SET_LAYOUT',
  SET_TMP_LAYOUT = 'SET_TMP_LAYOUT',
}

export interface ISyncLayoutAction {
  type: ActionTypes.SYNC_LAYOUT;
}

export interface ISetLayoutAction {
  type: ActionTypes.SET_LAYOUT;
  payload: Layout[];
}

export interface ISetTmpLayoutAction {
  type: ActionTypes.SET_TMP_LAYOUT;
  payload: Layout[];
}

export type Actions =
    | ISyncLayoutAction
    | ISetLayoutAction
    | ISetTmpLayoutAction;
