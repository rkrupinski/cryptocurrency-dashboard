import React, { SFC } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { FormattedNumber } from 'react-intl';

import { MoneyConnected as Money } from '@src/components/money';
import { Currency, Target } from '@src/redux_/currencies';
import { Price } from '@src/redux_/prices';
import { identity } from '@src/common/utils';
import { styles, ClassNames } from './styles';

export interface IWalletDetailsItemProps {
  amount: number;
  currency: Currency;
  price: Price;
  target: Target;
}

export const WalletDetailsItemRaw: SFC<
  IWalletDetailsItemProps & WithStyles<ClassNames>
> = ({
    amount,
    classes,
    currency,
    price,
    target,
}) => (
  <Typography
    className={classes.root}
    component={'div'}
    variant={'body2'}
  >
    <Grid container={true} justify={'space-between'}>
      <Grid
        className={classes.name}
        item={true}
      >
        {currency.name}:
      </Grid>
      <Grid item={true}>
        <FormattedNumber
          value={amount}
          maximumFractionDigits={8}
        >
          {identity}
        </FormattedNumber>
        {' '}
        (
          <Money
            amount={amount * price[target]}
            maxDecimals={2}
          >
            {identity}
          </Money>
        )
      </Grid>
    </Grid>
  </Typography>
);

export const WalletDetailsItem = withStyles(styles)(WalletDetailsItemRaw);
