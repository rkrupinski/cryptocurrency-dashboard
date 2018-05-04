import React, { SFC } from 'react';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Grid from 'material-ui/Grid';
import { withStyles, WithStyles } from 'material-ui/styles';
import { FormattedNumber } from 'react-intl';

import { Currency, Target } from '@src/redux_/currencies';
import { Price } from '@src/redux_/prices';
import { ChartData } from '@src/redux_/charts';
import { CurrencyMenuConnected as CurrencyMenu } from '@src/components/currencyMenu';
import { Spinner } from '@src/components/spinner';
import { Container } from '@src/components/container';
import { PriceChart } from '@src/components/priceChart';
import { PriceChartMeta } from '@src/components/priceChartMeta';
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
    <FormattedNumber
      value={price[target]}
      style={'currency'}
      currency={target}
      maximumFractionDigits={6}
    >
      {renderFormattedPrice}
    </FormattedNumber>
  );

  const renderPriceSpinner = priceLoading && (
    <Spinner spinnerProps={{ size: 36 }} />
  );

  const renderChart = shouldRenderChart && (
    <PriceChart data={chartData} />
  );

  const renderChartMeta = shouldRenderChart && (
    <PriceChartMeta data={chartData} />
  );

  const renderChartSpinner = chartDataLoading && (
    <Spinner spinnerProps={{ size: 36 }} />
  );

  return (
    <Container>
      <CurrencyMenu
        classes={{ button: classes.menu }}
        currency={currency}
      />

      <Typography
        className={`handle ${classes.currencyName}`}
        variant={'title'}
        gutterBottom={true}
      >
        {currency.name}
      </Typography>

      {renderPrice}
      {renderPriceSpinner}

      <Divider className={classes.divider} />

      <Grid
        container={true}
        alignItems={'center'}
        spacing={0}
      >
        <Grid
          item={true}
          xs={9}
        >
          {renderChart}
          {renderChartSpinner}
        </Grid>
        <Grid
          item={true}
          xs={3}
        >
          {renderChartMeta}
        </Grid>
      </Grid>
    </Container>
  );
};

export const CurrencyWidget = withStyles(styles)(CurrencyWidgetRaw);
