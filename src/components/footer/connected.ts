import { connect } from 'react-redux';

import { IRootState } from '@src/redux_';
import { selectRefreshRate } from '@src/redux_/refresh/selectors';
import { Footer } from '.';

const mapStateToProps = (state: IRootState) => ({
  refreshRate: selectRefreshRate(state),
});

export const FooterConnected = connect(
  mapStateToProps,
)(Footer);
