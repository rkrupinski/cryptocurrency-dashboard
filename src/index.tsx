import React, { SFC } from 'react';
import ReactDOM from 'react-dom';

import { load as loadFonts } from '@src/webfonts';
import { Root } from '@src/components/root';
import configureStore from '@src/configureStore';

loadFonts(); // (☞ﾟ∀ﾟ)☞

const store = configureStore();
const appRoot = document.querySelector('#app')!;

ReactDOM.render(<Root store={store} />, appRoot);
