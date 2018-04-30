import { connect } from 'react-redux';

import { RefreshButton } from '.';
import { forceRefresh } from '@src/redux_/refresh';

const mapDispatchToProps = {
  forceRefresh,
};

export const RefreshButtonConnected = connect(
  null,
  mapDispatchToProps,
)(RefreshButton);
