import { connect } from 'react-redux';
import { branch, renderComponent, compose } from 'recompose';

import { CurrencyPicker, ICurrencyPickerProps } from '.';
import { Spinner } from '@src/components/spinner';
import { IRootState } from '@src/redux_';

const mapStateToProps = ({ currencies }: IRootState) => ({
  ...currencies,
});

export const CurrencyPickerConnected = compose<ICurrencyPickerProps, {}>(
  connect(
    mapStateToProps,
  ),
  branch<ICurrencyPickerProps>(
    ({ loading }) => loading,
    renderComponent(Spinner),
    renderComponent(CurrencyPicker),
  ),
)(CurrencyPicker);
