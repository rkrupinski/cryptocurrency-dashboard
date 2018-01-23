import { connect } from 'react-redux';
import { compose } from 'recompose';

import { IRootState } from '@src/redux_';
import { withSpinner } from '@src/components/withSpinner';
import { RefreshWidget, IRefreshWidgetProps } from '.';
import { selectLoading } from '@src/redux_/currencies/selectors';
import { setRefreshRate } from '@src/redux_/refresh';
import { selectRefreshRate } from '@src/redux_/refresh/selectors';

const mapStateToProps = (state: IRootState) => ({
  loading: selectLoading(state),
  refreshRate: selectRefreshRate(state),
});

const mapDispatchToProps = {
  setRefreshRate,
};

export const RefreshWidgetConnected = compose<IRefreshWidgetProps, {}>(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withSpinner(),
)(RefreshWidget);
