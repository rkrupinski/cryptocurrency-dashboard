import { connect } from 'react-redux';
import { branch, renderComponent, compose } from 'recompose';

import { CurrencyPicker, ICurrencyPickerProps } from '.';
import { Spinner } from '@src/components/spinner';
import { IRootState } from '@src/redux_';
import { selectRemainingCurrencies, selectLoading, selectCurrency } from '@src/redux_/currencies';

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
  branch<ICurrencyPickerProps>(
    ({ loading }) => loading,
    renderComponent(Spinner),
    renderComponent(CurrencyPicker),
  ),
)(CurrencyPicker);
