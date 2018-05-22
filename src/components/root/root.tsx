import React, { Fragment, SFC } from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { IntlProvider } from 'react-intl';
import CssBaseline from 'material-ui/CssBaseline';

import { AppConnected as App } from '@src/components/app';

export interface IRootProps {
  store: Store;
}

export const RootRaw: SFC<IRootProps> = ({
  store,
}) => (
  <Provider store={store}>
    <IntlProvider locale={navigator.language}>
      <Fragment>
        <CssBaseline />
        <App />
      </Fragment>
    </IntlProvider>
  </Provider>
);

export const Root = hot(module)(RootRaw);
