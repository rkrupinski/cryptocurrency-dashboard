import React, { StatelessComponent } from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';

import { AppConnected as App } from '@src/components/app';

export interface IRootProps {
  store: Store;
}

export const Root: StatelessComponent<IRootProps> = ({
  store,
}) => (
  <Provider store={store}>
    <App />
  </Provider>
);
