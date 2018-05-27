import { connect } from 'react-redux';

import { IRootState } from '@src/redux_';
import {
  selectValidCurrencies,
  selectSelectedCurrenciesSymbols,
} from '@src/redux_/currencies/selectors';
import { selectBalanceByCurrency } from '@src/redux_/wallet/selectors';
import { WalletDetails } from '.';

const mapStateToProps = (state: IRootState) => ({
  allCurrencies: selectValidCurrencies(state),
  balance: selectBalanceByCurrency(state),
  selectedSymbols: selectSelectedCurrenciesSymbols(state),
});

export const WalletDetailsConnected = connect(
  mapStateToProps,
)(WalletDetails);
