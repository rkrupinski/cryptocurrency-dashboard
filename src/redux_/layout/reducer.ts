import { combineReducers } from 'redux';
import { Layout } from 'react-grid-layout';

import { RootAction } from '@src/redux_';
import { ActionTypes } from '@src/redux_/layout';

const DEFAULT_LAYOUT = [
  { i: 'currency-picker',     x: 0, y: 0, w: 1, h: 1, static: true },
  { i: 'target-selector',     x: 1, y: 0, w: 1, h: 1, static: true },
  { i: 'chart-mode-selector', x: 2, y: 0, w: 1, h: 1, static: true },
];

export interface IState {
  readonly current: Layout[];
}

export const reducer = combineReducers<IState, RootAction>({
  current(state = DEFAULT_LAYOUT, action) {
    switch (action.type) {
      case ActionTypes.SET_LAYOUT:
        return action.payload.map((item) =>
            item.static ? item : { ...item, h: 2 });

      default:
        return state;
    }
  },
});
