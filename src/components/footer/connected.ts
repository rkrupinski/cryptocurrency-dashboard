import { connect } from 'react-redux';

import { IRootState } from '@src/redux_';
import { selectRefreshRate } from '@src/redux_/refresh/selectors';
import { selectLoading } from '@src/redux_/prices/selectors';
import { Footer } from '.';

const mapStateToProps = (state: IRootState) => ({
  loading: selectLoading(state),
  refreshRate: selectRefreshRate(state),
});

export const FooterConnected = connect(
  mapStateToProps,
)(Footer);
