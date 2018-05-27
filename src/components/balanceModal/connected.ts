import { connect } from 'react-redux';
import { submit } from 'redux-form';

import { BalanceModal } from '.';
import { IRootState } from '@src/redux_';
import { setBalance } from '@src/redux_/wallet';
import { selectBalanceByCurrency } from '@src/redux_/wallet/selectors';

const mapStateToProps = (state: IRootState) => ({
  balance: selectBalanceByCurrency(state),
});

const mapDispatchToProps = {
  setBalance,
  submit: () => submit('balance'),
};

export const BalanceModalConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BalanceModal);
