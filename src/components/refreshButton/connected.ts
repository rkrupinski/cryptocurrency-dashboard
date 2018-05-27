import { connect } from 'react-redux';

import { RefreshButton } from '.';
import { IRootState } from '@src/redux_';
import { forceRefresh } from '@src/redux_/refresh';
import { selectRefreshRate } from '@src/redux_/refresh/selectors';

const mapStateToProps = (state: IRootState) => ({
  refreshRate: selectRefreshRate(state),
});

const mapDispatchToProps = {
  forceRefresh,
};

export const RefreshButtonConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RefreshButton);
