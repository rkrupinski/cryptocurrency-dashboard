import { connect } from 'react-redux';
import { compose } from 'recompose';

import { withSpinner } from '@src/components/withSpinner';
import { CurrencyPicker, ICurrencyPickerProps } from '.';
import { IRootState } from '@src/redux_';
import { selectCurrency } from '@src/redux_/currencies';
import { selectRemainingCurrencies, selectLoading } from '@src/redux_/currencies/selectors';

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
  withSpinner(),
)(CurrencyPicker);
