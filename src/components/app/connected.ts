import { connect } from 'react-redux';

import { IRootState } from '@src/redux_';
import { fetchCurrencies } from '@src/redux_/currencies';
import { selectValidCurrencies } from '@src/redux_/currencies/selectors';
import { App } from '.';

const mapStateToProps = (state: IRootState) => ({
  currencies: selectValidCurrencies(state),
});

const mapDispatchToProps = {
  fetchCurrencies,
};

export const AppConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
