import { connect } from 'react-redux';

import { makeSelectPrice } from '@src/redux_/prices/selectors';
import { selectTarget } from '@src/redux_/currencies/selectors';
import { IRootState } from '@src/redux_';
import { WalletDetailsItem, IWalletDetailsItemProps } from '.';

const mapStateToProps = (
  state: IRootState,
  ownProps: Pick<IWalletDetailsItemProps, 'currency'>,
) => {
  const selectPrice = makeSelectPrice();
  const { currency } = ownProps;

  return {
    price: selectPrice(state, currency),
    target: selectTarget(state),
  };
};

export const WalletDetailsItemConnected = connect(
  mapStateToProps,
)(WalletDetailsItem);
