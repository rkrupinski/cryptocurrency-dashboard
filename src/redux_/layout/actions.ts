import { Layout } from 'react-grid-layout';

export enum ActionTypes {
  SET_LAYOUT = 'SET_LAYOUT',
}

export interface ISetLayoutAction {
  type: ActionTypes.SET_LAYOUT;
  payload: Layout[];
}

export type Actions =
  | ISetLayoutAction;
