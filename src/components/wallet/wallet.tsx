import React, { SFC } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles, WithStyles } from '@material-ui/core/styles';

import { TotalBalance } from '@src/redux_/wallet';
import { Target } from '@src/redux_/currencies';
import { IPrices } from '@src/redux_/prices';
import { MoneyConnected as Money } from '@src/components/money';
import { WalletDetailsConnected as WalletDetails } from '@src/components/walletDetails';
import { styles, ClassNames } from './styles';

export interface IWalletProps {
  balance: TotalBalance;
  prices: IPrices;
  target: Target;
  selectedSymbols: string[];
}

export const renderBalance = (f: string) => (
  <Typography component={'span'} variant={'subheading'}>
    Balance: {f}
  </Typography>
);

export const WalletRaw: SFC<
  IWalletProps & WithStyles<ClassNames>
> =  ({
  balance,
  prices,
  target,
  selectedSymbols,
  classes,
}) => {
  const totalAmount = Object.entries(balance)
      .reduce((acc, [sym, bal]) => {
        const curr = prices[sym] ? prices[sym][target] * bal : 0;

        return acc + curr;
      }, 0);

  return (
    <Grid container={true}>
      <Grid item={true}>
        <Money amount={totalAmount}>
          {renderBalance}
        </Money>
      </Grid>
      <Grid item={true}>
        <WalletDetails classes={{ container: classes.details }} />
      </Grid>
    </Grid>
  );
};

export const Wallet = withStyles(styles)(WalletRaw);
