import { connect } from 'react-redux';

import { Money } from '.';
import { IRootState } from '@src/redux_';
import { selectTarget } from '@src/redux_/currencies/selectors';

const mapStateToProps = (state: IRootState) => ({
  target: selectTarget(state),
});

export const MoneyConnected = connect(
  mapStateToProps,
)(Money);
