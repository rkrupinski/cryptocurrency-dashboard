import { connect } from 'react-redux';

import { IRootState } from '@src/redux_';
import { selectTarget, toggleTarget } from '@src/redux_/currencies';
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
