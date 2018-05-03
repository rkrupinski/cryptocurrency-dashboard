import React, { SFC } from 'react';
import Button from 'material-ui/Button';
import Tooltip from 'material-ui/Tooltip';
import RefreshIcon from 'material-ui-icons/Refresh';

import { IForceRefreshAction } from '@src/redux_/refresh';

interface IRefreshButtonProps {
  forceRefresh: () => IForceRefreshAction;
}

export const RefreshButton: SFC<IRefreshButtonProps> = ({
  forceRefresh,
}) => (
  <Tooltip
    title={'Refresh'}
    placement={'top'}
  >
    <Button
      className={'bounceIn animated'}
      aria-label={'Refresh'}
      color={'primary'}
      onClick={forceRefresh}
      variant={'fab'}
    >
      <RefreshIcon />
    </Button>
  </Tooltip>
);
