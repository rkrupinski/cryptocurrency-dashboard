import { connect } from 'react-redux';

import { IRootState } from '@src/redux_';
import { toggleChartMode } from '@src/redux_/charts';
import { selectMode } from '@src/redux_/charts/selectors';
import { ChartModeSelector } from '.';

const mapStateToProps = (state: IRootState) => ({
  mode: selectMode(state),
});

const mapDispatchToProps = {
  toggleChartMode,
};

export const ChartModeSelectorConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChartModeSelector);
