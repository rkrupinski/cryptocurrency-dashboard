import { Reducer as ReduxReducer } from 'redux';

import { IRootState, RootAction } from '.';

export type Reducer = ReduxReducer<IRootState, RootAction>;
