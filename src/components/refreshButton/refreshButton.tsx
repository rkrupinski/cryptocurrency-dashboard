import React, { SFC } from 'react';
import Button from 'material-ui/Button';
import Tooltip from 'material-ui/Tooltip';
import RefreshIcon from 'material-ui-icons/Refresh';
import Typography from 'material-ui/Typography';
import { withStyles, WithStyles } from 'material-ui/styles';

import { IForceRefreshAction } from '@src/redux_/refresh';
import { styles, ClassNames } from './styles';

interface IRefreshButtonProps {
  forceRefresh: () => IForceRefreshAction;
}

export const RefreshButtonRaw: SFC<
  IRefreshButtonProps & WithStyles<ClassNames>
> = ({
  classes,
  forceRefresh,
}) => {
  const renderTooltip = (
    <Typography
      className={classes.tooltip}
      component={'span'}
      variant={'body2'}
    >
      Refresh
    </Typography>
  );

  return (
    <Tooltip
      title={renderTooltip}
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
};

export const RefreshButton = withStyles(styles)(RefreshButtonRaw);
