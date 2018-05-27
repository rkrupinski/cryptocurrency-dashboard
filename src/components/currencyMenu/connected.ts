import { connect } from 'react-redux';

import { IRootState } from '@src/redux_';
import { deselectCurrency } from '@src/redux_/currencies';
import { selectBalanceByCurrency } from '@src/redux_/wallet/selectors';
import { CurrencyMenu } from '.';

const mapStateToProps = (state: IRootState) => ({
  balance: selectBalanceByCurrency(state),
});

const mapDispatchToProps = {
  deselectCurrency,
};

export const CurrencyMenuConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CurrencyMenu);
