import { connect } from 'react-redux';
import { compose } from 'recompose';

import { withSpinner } from '@src/components/withSpinner';
import { IRootState } from '@src/redux_';
import { toggleTarget } from '@src/redux_/currencies';
import { selectTarget, selectLoading } from '@src/redux_/currencies/selectors';
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
  withSpinner(),
)(TargetSelector);
