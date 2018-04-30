import React, { Component, MouseEvent } from 'react';
import Typography from 'material-ui/Typography';
import DeleteIcon from 'material-ui-icons/DeleteForever';
import WalletIcon from 'material-ui-icons/AccountBalanceWallet';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import { ListItemIcon, ListItemText } from 'material-ui/List';
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

interface ICurrencyWidgetState {
  anchorEl?: HTMLButtonElement;
}

export class CurrencyWidgetRaw extends Component<
  ICurrencyWidgetProps & WithStyles<ClassNames>,
  ICurrencyWidgetState
> {
  public state = {
    anchorEl: undefined,
  };

  public render() {
    const {
      classes,
      currency: { name, id: currencyId },
      price,
      priceLoading,
      chartData,
      chartDataLoading,
      target,
    } = this.props;

    const { anchorEl } = this.state;

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
          aria-label={'Options'}
          aria-owns={anchorEl ? `options-${currencyId}` : null}
          aria-haspopup={'true'}
          className={classes.options}
          onClick={this.showOptions}
        >
          <MoreVertIcon />
        </IconButton>

        <Menu
          id={`options-${currencyId}`}
          anchorEl={anchorEl}
          open={!!anchorEl}
          onClose={this.hideOptions}
        >
          <MenuItem className={classes.placeholder} />
          <MenuItem onClick={this.onSetBalance}>
            <ListItemIcon className={classes.menuIcon}>
              <WalletIcon />
            </ListItemIcon>
            <ListItemText
              primary={'Edit balance'}
              secondary={`Current: ${123.33}`}
            />
          </MenuItem>
          <MenuItem onClick={this.onDeselect}>
            <ListItemIcon className={classes.menuIcon}>
              <DeleteIcon />
            </ListItemIcon>
            <ListItemText primary={'Remove'} />
          </MenuItem>
        </Menu>

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

    this.hideOptions();

    deselectCurrency(currency);
  }

  private onSetBalance = () => {
    this.hideOptions();
  }

  private showOptions = ({
    currentTarget,
  }: MouseEvent<HTMLButtonElement>) => {
    this.setState({
      anchorEl: currentTarget,
    });
  }

  private hideOptions = () => {
    this.setState({
      anchorEl: undefined,
    });
  }
}

export const CurrencyWidget = withStyles(styles)(CurrencyWidgetRaw);
