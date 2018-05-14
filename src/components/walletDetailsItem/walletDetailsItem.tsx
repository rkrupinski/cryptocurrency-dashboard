import React, { SFC } from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { withStyles, WithStyles } from 'material-ui/styles';
import { FormattedNumber } from 'react-intl';

import { styles, ClassNames } from './styles';

export interface IWalletDetailsItemProps {
  name: string;
  amount: number;
}

export const WalletDetailsItemRaw: SFC<
  IWalletDetailsItemProps & WithStyles<ClassNames>
> = ({ classes, name, amount }) => {
  const renderAmount = (f: string) => (
    <Typography
      className={classes.amount}
      component={'span'}
      variant={'body2'}
    >
      {f}
    </Typography>
  );

  return (
    <li>
      <Grid container={true} justify={'space-between'}>
        <Grid item={true}>
          <Typography className={classes.name} component={'span'} variant={'body2'}>
            {name}:
          </Typography>
        </Grid>
        <Grid item={true}>
          <FormattedNumber value={amount} maximumFractionDigits={8}>
            {renderAmount}
          </FormattedNumber>
        </Grid>
      </Grid>
    </li>
  );
};

export const WalletDetailsItem = withStyles(styles)(WalletDetailsItemRaw);
