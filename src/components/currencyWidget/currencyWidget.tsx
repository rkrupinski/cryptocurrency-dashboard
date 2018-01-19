import React, { PureComponent } from 'react';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import Divider from 'material-ui/Divider';
import Grid from 'material-ui/Grid';
import { withStyles, WithStyles } from 'material-ui/styles';
import { FormattedNumber } from 'react-intl';

import { Target, Currency, ICurrencyDeselectedAction } from '@src/redux_/currencies';
import { Price } from '@src/redux_/prices';
import { ChartData } from '@src/redux_/charts';
import { Spinner } from '@src/components/spinner';
import { Container } from '@src/components/container';
import { PriceChart } from '@src/components/priceChart';
import { PriceChartMeta } from '@src/components/priceChartMeta';
import { styles, ClassNames } from './styles';

export interface ICurrencyWidgetProps {
  currency: Currency;
  deselectCurrency: (currency: Currency) => ICurrencyDeselectedAction;
  price: Price;
  priceLoading: boolean;
  chartData: ChartData[];
  chartDataLoading: boolean;
  target: Target;
}

export class CurrencyWidgetRaw extends PureComponent<
  ICurrencyWidgetProps & WithStyles<ClassNames>,
  {}
> {
  public render() {
    const {
      classes,
      currency: { name },
      price,
      priceLoading,
      chartData,
      chartDataLoading,
      target,
    } = this.props;

    const shouldRenderChart = chartData && !!chartData.length && !chartDataLoading;

    const renderFormattedPrice = (f: string) => (
      <Typography
        type={'display1'}
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
        <IconButton
          className={classes.deselectBtn}
          aria-label={'Deselect currency'}
          onClick={this.onDeselect}
        >
          <DeleteIcon />
        </IconButton>

        <Typography
          className={`handle ${classes.currencyName}`}
          type={'title'}
          gutterBottom={true}
        >
          {name}
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
  }

  private onDeselect = () => {
    const { deselectCurrency, currency } = this.props;

    deselectCurrency(currency);
  }
}

export const CurrencyWidget = withStyles(styles)(CurrencyWidgetRaw);
