import { connect } from 'react-redux';

import { CurrencyPicker } from '.';
import { IRootState } from '@src/redux_';

const mapStateToProps = ({ currencies }: IRootState) => ({
  ...currencies,
});

export const CurrencyPickerConnected = connect(
  mapStateToProps,
)(CurrencyPicker);
