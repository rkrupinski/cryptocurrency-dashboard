import { connect } from 'react-redux';

import { Loader } from '.';
import { IRootState } from '@src/redux_';
import { selectAllCurrencies } from '@src/redux_/currencies/selectors';

const mapStateToProps = (state: IRootState) => ({
  currencies: selectAllCurrencies(state),
});

export const LoaderConnected = connect(
  mapStateToProps,
)(Loader);
