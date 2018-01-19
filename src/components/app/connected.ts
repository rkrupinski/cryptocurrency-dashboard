import { connect } from 'react-redux';

import { IRootState } from '@src/redux_';
import { fetchCurrencies } from '@src/redux_/currencies';
import { setTmpLayout, syncLayout } from '@src/redux_/layout';
import { selectCurrentLayout } from '@src/redux_/layout/selectors';
import { selectValidCurrencies } from '@src/redux_/currencies/selectors';
import { App } from '.';

const mapStateToProps = (state: IRootState) => ({
  currencies: selectValidCurrencies(state),
  layout: selectCurrentLayout(state),
});

const mapDispatchToProps = {
  fetchCurrencies,
  setTmpLayout,
  syncLayout,
};

export const AppConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
