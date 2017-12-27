import { connect } from 'react-redux';

import { Currencies } from '.';
import { fetchCurrencies } from '@src/redux_/currencies';

const mapDispatchToProps = {
  fetchCurrencies,
};

export const CurrenciesConnected = connect(
  null,
  mapDispatchToProps,
)(Currencies);
