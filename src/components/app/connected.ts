import { connect } from 'react-redux';

import { fetchCurrencies } from '@src/redux_/currencies';
import { App } from '.';

const mapDispatchToProps = {
  fetchCurrencies,
};

export const AppConnected = connect(
  null,
  mapDispatchToProps,
)(App);
