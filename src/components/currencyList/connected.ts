import { connect } from 'react-redux';

import { IRootState } from '@src/redux_';
import { selectValidCurrencies } from '@src/redux_/currencies/selectors';
import { CurrencyList } from '.';

const mapStateToProps = (state: IRootState) => ({
  currencies: selectValidCurrencies(state),
});

export const CurrencyListConnected = connect(
  mapStateToProps,
)(CurrencyList);
