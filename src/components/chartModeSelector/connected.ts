import { connect } from 'react-redux';
import { compose } from 'recompose';

import { withSpinner } from '@src/components/withSpinner';
import { IRootState } from '@src/redux_';
import { toggleChartMode } from '@src/redux_/charts';
import { selectLoading } from '@src/redux_/currencies/selectors';
import { selectMode } from '@src/redux_/charts/selectors';
import { ChartModeSelector, IChartModeSelectorProps } from '.';

const mapStateToProps = (state: IRootState) => ({
  loading: selectLoading(state),
  mode: selectMode(state),
});

const mapDispatchToProps = {
  toggleChartMode,
};

export const ChartModeSelectorConnected = compose<IChartModeSelectorProps, {}>(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withSpinner<IChartModeSelectorProps>(),
)(ChartModeSelector);
