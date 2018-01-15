import { Layout } from 'react-grid-layout';

import {
  ActionTypes,
  ISetLayoutAction,
} from '.';

export const setLayout = (layout: Layout[]): ISetLayoutAction => ({
  payload: layout,
  type: ActionTypes.SET_LAYOUT,
});
