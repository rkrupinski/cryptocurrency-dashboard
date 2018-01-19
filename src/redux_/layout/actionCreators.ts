import { Layout } from 'react-grid-layout';

import {
  ActionTypes,
  ISyncLayoutAction,
  ISetLayoutAction,
  ISetTmpLayoutAction,
} from '.';

export const syncLayout = (): ISyncLayoutAction => ({
  type: ActionTypes.SYNC_LAYOUT,
});

export const setLayout = (layout: Layout[]): ISetLayoutAction => ({
  payload: layout,
  type: ActionTypes.SET_LAYOUT,
});

export const setTmpLayout = (layout: Layout[]): ISetTmpLayoutAction => ({
  payload: layout,
  type: ActionTypes.SET_TMP_LAYOUT,
});
