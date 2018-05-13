import { connect } from 'react-redux';

import { deselectCurrency } from '@src/redux_/currencies';
import { CurrencyMenu } from '.';

const mapDispatchToProps = {
  deselectCurrency,
};

export const CurrencyMenuConnected = connect(
  null,
  mapDispatchToProps,
)(CurrencyMenu);
