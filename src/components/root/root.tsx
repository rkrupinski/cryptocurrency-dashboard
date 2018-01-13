import React, { SFC } from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { IntlProvider } from 'react-intl';
import 'normalize.css';

import { AppConnected as App } from '@src/components/app';

export interface IRootProps {
  store: Store;
}

export const Root: SFC<IRootProps> = ({
  store,
}) => (
  <Provider store={store}>
    <IntlProvider locale={navigator.language}>
      <App />
    </IntlProvider>
  </Provider>
);
