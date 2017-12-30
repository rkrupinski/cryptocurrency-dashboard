import { connect } from 'react-redux';
import { branch, renderComponent, compose } from 'recompose';

import { CurrencyPicker, ICurrencyPickerProps } from '.';
import { Spinner } from '@src/components/spinner';
import { IRootState } from '@src/redux_';
import { availableCurrencies, selectCurrency } from '@src/redux_/currencies';

const mapStateToProps = ({ currencies }: IRootState) => {
  const { loading } = currencies;

  return {
    currencies: availableCurrencies(currencies),
    loading,
  };
};

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
