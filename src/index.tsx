import React, { SFC } from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import configureStore from '@src/configureStore';
import { rootReducer } from '@src/redux_';
import { Root, IRootProps } from '@src/components/root';

const store = configureStore();
const appRoot = document.querySelector('#app')!;

render(Root);

if (module.hot) {
  module.hot.accept('@src/components/root', () => {
    render(Root);
  });

  module.hot.accept('@src/redux_/rootReducer', () => {
    store.replaceReducer(rootReducer);
  });
}

function render(RootComponent: SFC<IRootProps>) {
  ReactDOM.render(
    (
      <AppContainer>
        <RootComponent store={store} />
      </AppContainer>
    ),
    appRoot,
  );
}
