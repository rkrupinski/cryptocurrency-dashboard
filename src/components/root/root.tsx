import React, { StatelessComponent } from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';

import { CurrenciesConnected as Currencies } from '@src/components/currencies';

export interface IRootProps {
  store: Store;
}

export const Root: StatelessComponent<IRootProps> = ({ store }) => (
  <Provider store={store}>
    <React.Fragment>
      <h1>Hello</h1>
      <Currencies />
    </React.Fragment>
  </Provider>
);
