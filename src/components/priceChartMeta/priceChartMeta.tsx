import React, { SFC } from 'react';
import { withStyles, WithStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import TrendingUpIcon from 'material-ui-icons/TrendingUp';
import TrendingDownIcon from 'material-ui-icons/TrendingDown';
import TrendingFlatIcon from 'material-ui-icons/TrendingFlat';

import { ChartData } from '@src/redux_/charts';
import { styles, ClassNames } from './styles';

export interface IPriceChartMetaProps {
  data: ChartData[];
}

export const PriceChartMetaRaw: SFC<
  IPriceChartMetaProps & WithStyles<ClassNames>
> = ({ data, classes }) => {
  const [{ price: open }, ...rest] = data;
  const { price: close } = rest.pop()!; // (☞ﾟ∀ﾟ)☞
  const change = (close - open) / open * 100;
  const DECIMAL_PLACES = 2;

  let className;
  let IconComponent;

  switch (true) {
    case change > 0:
      className = classes.trendingUp;
      IconComponent = TrendingUpIcon;
      break;

    case change < 0:
      className = classes.trendingDown;
      IconComponent = TrendingDownIcon;
      break;

    default:
      className = classes.trendingFlat;
      IconComponent = TrendingFlatIcon;
      break;
  }

  return (
    <Grid
      container={true}
      justify={'flex-end'}
      spacing={0}
    >
      <Grid item={true}>
        <IconComponent className={`${className} ${classes.icon}`} />
        <Typography
          className={className}
          component={'span'}
          variant={'body2'}
        >
          {`${change.toFixed(DECIMAL_PLACES)}%`}
        </Typography>
      </Grid>
    </Grid>
  );
};

export const PriceChartMeta = withStyles(styles)(PriceChartMetaRaw);
