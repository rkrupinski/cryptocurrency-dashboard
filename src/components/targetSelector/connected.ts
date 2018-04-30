import { connect } from 'react-redux';

import { IRootState } from '@src/redux_';
import { toggleTarget } from '@src/redux_/currencies';
import { selectTarget } from '@src/redux_/currencies/selectors';
import { TargetSelector } from '.';

const mapStateToProps = (state: IRootState) => ({
  target: selectTarget(state),
});

const mapDispatchToProps = {
  toggleTarget,
};

export const TargetSelectorConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TargetSelector);
