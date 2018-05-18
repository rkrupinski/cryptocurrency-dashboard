import { connect } from 'react-redux';
import { submit } from 'redux-form';

import { BalanceModal } from '.';
import { IRootState } from '@src/redux_';
import { selectBalanceByCurrency } from '@src/redux_/wallet/selectors';
import { BalanceProvider } from '@src/components/balanceContext';

const mapStateToProps = (state: IRootState) => ({
  balance: selectBalanceByCurrency(state),
});

const mapDispatchToProps = {
  submit: () => submit('balance'),
};

export const BalanceModalConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BalanceModal);
