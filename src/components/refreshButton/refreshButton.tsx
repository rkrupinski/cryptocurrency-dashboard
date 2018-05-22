import React, { SFC } from 'react';
import Button from 'material-ui/Button';
import RefreshIcon from 'material-ui-icons/Refresh';
import Typography from 'material-ui/Typography';
import Zoom from 'material-ui/transitions/Zoom';

import { IForceRefreshAction, RefreshRate } from '@src/redux_/refresh';

interface IRefreshButtonProps {
  forceRefresh: () => IForceRefreshAction;
  refreshRate: RefreshRate;
}

export const RefreshButton: SFC<IRefreshButtonProps> = ({
  forceRefresh,
  refreshRate,
}) => (
  <Zoom
    in={refreshRate === 'manual'}
    unmountOnExit={true}
  >
    <Button
      aria-label={'Refresh'}
      color={'primary'}
      onClick={forceRefresh}
      variant={'fab'}
    >
      <RefreshIcon />
    </Button>
  </Zoom>
);
