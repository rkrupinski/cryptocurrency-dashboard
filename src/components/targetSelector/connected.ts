import { connect } from 'react-redux';
import { compose } from 'recompose';

import { withSpinner } from '@src/components/withSpinner';
import { IRootState } from '@src/redux_';
import { selectTarget, selectLoading, toggleTarget } from '@src/redux_/currencies';
import { TargetSelector, ITargetSelectorProps } from '.';

const mapStateToProps = (state: IRootState) => ({
  loading: selectLoading(state),
  target: selectTarget(state),
});

const mapDispatchToProps = {
  toggleTarget,
};

export const TargetSelectorConnected = compose<ITargetSelectorProps, {}>(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withSpinner<ITargetSelectorProps>(),
)(TargetSelector);
