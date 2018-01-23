import { connect } from 'react-redux';

import { IRootState } from '@src/redux_';
import { selectRefreshRate } from '@src/redux_/refresh/selectors';
import { Toolbar } from '.';

const mapStateToProps = (state: IRootState) => ({
  refreshRate: selectRefreshRate(state),
});

const mapDispatchToProps = {

};

export const ToolbarConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Toolbar);
