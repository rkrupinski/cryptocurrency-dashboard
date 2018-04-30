import { connect } from 'react-redux';

import { Wallet } from '.';
import { IRootState } from '@src/redux_';
import { selectData } from '@src/redux_/prices/selectors';
import { selectTarget } from '@src/redux_/currencies/selectors';
import { selectBalanceByCurrency } from '@src/redux_/wallet/selectors';

const mapStateToProps = (state: IRootState) => ({
  balance: selectBalanceByCurrency(state),
  prices: selectData(state),
  target: selectTarget(state),
});

export const WalletConnected = connect(
  mapStateToProps,
)(Wallet);
