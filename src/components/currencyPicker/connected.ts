import { connect } from 'react-redux';
import { compose } from 'recompose';

import { withSpinner } from '@src/components/withSpinner';
import { CurrencyPicker, ICurrencyPickerProps } from '.';
import { IRootState } from '@src/redux_';
import {
  selectRemainingCurrencies,
  selectLoading,
  selectCurrency,
} from '@src/redux_/currencies';

const mapStateToProps = (state: IRootState) => ({
  currencies: selectRemainingCurrencies(state),
  loading: selectLoading(state),
});

const mapDispatchToProps = {
  selectCurrency,
};

export const CurrencyPickerConnected = compose<ICurrencyPickerProps, {}>(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withSpinner<ICurrencyPickerProps>(),
)(CurrencyPicker);
