import React, { StrictMode, SFC } from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { IntlProvider } from 'react-intl';
import CssBaseline from '@material-ui/core/CssBaseline';

import { AppConnected as App } from '@src/components/app';

export interface IRootProps {
  store: Store;
}

export const RootRaw: SFC<IRootProps> = ({
  store,
}) => (
  <Provider store={store}>
    <IntlProvider locale={navigator.language}>
      <StrictMode>
        <CssBaseline />
        <App />
      </StrictMode>
    </IntlProvider>
  </Provider>
);

export const Root = hot(module)(RootRaw);
