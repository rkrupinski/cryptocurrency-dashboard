import { connect } from 'react-redux';

import { CurrencyPicker } from '.';
import { IRootState } from '@src/redux_';
import { selectCurrency } from '@src/redux_/currencies';
import { selectRemainingCurrencies } from '@src/redux_/currencies/selectors';

const mapStateToProps = (state: IRootState) => ({
  currencies: selectRemainingCurrencies(state),
});

const mapDispatchToProps = {
  selectCurrency,
};

export const CurrencyPickerConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CurrencyPicker);
