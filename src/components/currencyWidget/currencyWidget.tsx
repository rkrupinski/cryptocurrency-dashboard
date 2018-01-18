import React, { PureComponent } from 'react';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import Divider from 'material-ui/Divider';
import { withStyles, WithStyles } from 'material-ui/styles';
import { FormattedNumber } from 'react-intl';

import { Target, Currency, ICurrencyDeselectedAction } from '@src/redux_/currencies';
import { Price } from '@src/redux_/prices';
import { ChartData } from '@src/redux_/charts';
import { Spinner } from '@src/components/spinner';
import { Container } from '@src/components/container';
import { PriceChart } from '@src/components/priceChart';
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

    const renderPrice = price && !priceLoading && (
      <FormattedNumber
        value={price[target]}
        style={'currency'}
        currency={target}
        maximumFractionDigits={6}
      >
        {(f: string) => <Typography type={'display1'} className={classes.price}>{f}</Typography>}
      </FormattedNumber>
    );

    const renderPriceSpinner = priceLoading && (
      <Spinner spinnerProps={{ size: 35 }} />
    );

    const renderChart = chartData && !chartDataLoading && (
      <PriceChart data={chartData} />
    );

    const renderChartSpinner = chartDataLoading && (
      <Spinner spinnerProps={{ size: 35 }} />
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

        {renderChart}
        {renderChartSpinner}
      </Container>
    );
  }

  private onDeselect = () => {
    const { deselectCurrency, currency } = this.props;

    deselectCurrency(currency);
  }
}

export const CurrencyWidget = withStyles(styles)(CurrencyWidgetRaw);
