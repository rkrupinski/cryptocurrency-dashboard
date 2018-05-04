import { connect } from 'react-redux';

import { deselectCurrency } from '@src/redux_/currencies';
import { CurrencyMenu } from '.';

const mapStateToProps = () => ({

});

const mapDispatchToProps = {
  deselectCurrency,
};

export const CurrencyMenuConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CurrencyMenu);
