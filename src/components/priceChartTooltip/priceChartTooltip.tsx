import React, { SFC } from 'react';
import { TooltipProps, TooltipPayload } from 'recharts';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { withStyles, WithStyles } from 'material-ui/styles';

import { MoneyConnected as Money } from '@src/components/money';
import { styles, ClassNames } from './styles';

export const renderPrice = (formatted: string) => (
  <Typography component={'span'} variant={'body2'}>
    {formatted}
  </Typography>
);

export const PriceChartTooltipRaw: SFC<
  TooltipProps & WithStyles<ClassNames>
> = ({ payload = [], classes }) => {
  const [data] = payload;

  return (
    <Paper className={classes.container}>
      {data && <Money amount={data.value as number} maxDecimals={6}>{renderPrice}</Money>}
    </Paper>
  );
};

export const PriceChartTooltip = withStyles(styles)(PriceChartTooltipRaw);
