import React, { SFC } from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { withStyles, WithStyles } from '@material-ui/core/styles';

import { Currency, Target } from '@src/redux_/currencies';
import { Price } from '@src/redux_/prices';
import { ChartData } from '@src/redux_/charts';
import { CurrencyMenuConnected as CurrencyMenu } from '@src/components/currencyMenu';
import { Spinner } from '@src/components/spinner';
import { Container } from '@src/components/container';
import { PriceChart } from '@src/components/priceChart';
import { PriceChartMeta } from '@src/components/priceChartMeta';
import { MoneyConnected as Money } from '@src/components/money';
import { BalanceConsumer, IBalanceContext } from '@src/components/balanceContext';
import { styles, ClassNames } from './styles';

export interface ICurrencyWidgetProps {
  currency: Currency;
  price: Price;
  priceLoading: boolean;
  chartData: ChartData[];
  chartDataLoading: boolean;
  target: Target;
}

export const CurrencyWidgetRaw: SFC<
  ICurrencyWidgetProps & WithStyles<ClassNames>
> = ({
  classes,
  currency,
  price,
  priceLoading,
  chartData,
  chartDataLoading,
  target,
}) => {
  const shouldRenderChart = chartData && !!chartData.length && !chartDataLoading;

  const renderMenu = ({ onEditingBalance }: IBalanceContext) => (
    <CurrencyMenu
      classes={{ button: classes.menu }}
      currency={currency}
      onEditingBalance={onEditingBalance}
    />
  );

  const renderFormattedPrice = (f: string) => (
    <Typography
      variant={'display1'}
      className={classes.price}
      component={'span'}
    >
      {f}
    </Typography>
  );

  const renderPrice = price && !priceLoading && (
    <Money amount={price[target]} maxDecimals={6}>
      {renderFormattedPrice}
    </Money>
  );

  return (
    <Container>
      <BalanceConsumer>
        {renderMenu}
      </BalanceConsumer>

      <Typography
        className={`handle ${classes.currencyName}`}
        variant={'title'}
        gutterBottom={true}
      >
        {currency.name}
      </Typography>

      {renderPrice}
      {priceLoading && <Spinner />}

      <Divider className={classes.divider} />

      <Grid container={true} alignItems={'center'} spacing={0}>
        <Grid item={true} xs={9}>
          {shouldRenderChart && <PriceChart data={chartData} />}
          {chartDataLoading && <Spinner />}
        </Grid>
        <Grid item={true} xs={3}>
          {shouldRenderChart && <PriceChartMeta data={chartData} />}
        </Grid>
      </Grid>
    </Container>
  );
};

export const CurrencyWidget = withStyles(styles)(CurrencyWidgetRaw);
