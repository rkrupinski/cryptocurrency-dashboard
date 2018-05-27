import { connect } from 'react-redux';

import { IRootState } from '@src/redux_';
import { selectLoading } from '@src/redux_/prices/selectors';
import { Footer } from '.';

const mapStateToProps = (state: IRootState) => ({
  loading: selectLoading(state),
});

export const FooterConnected = connect(
  mapStateToProps,
)(Footer);
