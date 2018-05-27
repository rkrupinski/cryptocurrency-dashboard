import { connect } from 'react-redux';

import { IRootState } from '@src/redux_';
import { RefreshWidget } from '.';
import { setRefreshRate } from '@src/redux_/refresh';
import { selectRefreshRate } from '@src/redux_/refresh/selectors';

const mapStateToProps = (state: IRootState) => ({
  refreshRate: selectRefreshRate(state),
});

const mapDispatchToProps = {
  setRefreshRate,
};

export const RefreshWidgetConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RefreshWidget);
