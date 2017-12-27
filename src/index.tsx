import React, { StatelessComponent } from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { normalize } from 'polished';
import { injectGlobal } from 'styled-components';

import configureStore from '@src/configureStore';
import { rootReducer } from '@src/redux_';
import { Root, IRootProps } from '@src/components/root';

const store = configureStore();
const appRoot = document.querySelector('#app')!;

injectGlobal`${normalize() as any}`; // tslint:disable-line

render(Root);

if (module.hot) {
  module.hot.accept('@src/components/root', () => {
    render(Root);
  });

  module.hot.accept('@src/redux_/rootReducer', () => {
    store.replaceReducer(rootReducer);
  });
}

function render(RootComponent: StatelessComponent<IRootProps>) {
  ReactDOM.render(
    (
      <AppContainer>
        <RootComponent store={store} />
      </AppContainer>
    ),
    appRoot,
  );
}
