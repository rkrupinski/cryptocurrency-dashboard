import React, { SFC, Fragment } from 'react';
import InfoIcon from 'material-ui-icons/Info';
import Tooltip from 'material-ui/Tooltip';
import Typography from 'material-ui/Typography';
import { withStyles, WithStyles } from 'material-ui/styles';

import { Currency } from '@src/redux_/currencies';
import { TotalBalance } from '@src/redux_/wallet';
import { WalletDetailsItem } from '@src/components/walletDetailsItem';
import { styles, ClassNames } from './styles';

export interface IWalletDetailsProps {
  allCurrencies: Currency[];
  balance: TotalBalance;
  selectedSymbols: string[];
}

export const WalletDetailsRaw: SFC<
  IWalletDetailsProps & WithStyles<ClassNames>
> = ({
  allCurrencies,
  balance,
  classes,
  selectedSymbols,
}) => {
  const details = allCurrencies
      .filter(({ symbol }) => selectedSymbols.includes(symbol))
      .map(({ id, name, symbol }) => {
        return {
          amount: balance[symbol],
          id,
          name,
        };
      })
      .filter(({ amount }) => !!amount);

  const renderPlaceholder = !details.length && (
    <Typography
      className={classes.placeholder}
      component={'span'}
      variant={'body2'}
    >
      No currency held 😿
    </Typography>
  );

  const renderDetails = !!details.length && (
    <ul className={classes.list}>
      {details.map(({ id, ...rest }) => <WalletDetailsItem key={id} {...rest} />)}
    </ul>
  );

  const renderTitle = (
    <Fragment>
      {renderDetails}
      {renderPlaceholder}
    </Fragment>
  );

  return (
    <span className={classes.container}>
      <Tooltip
        className={classes.container}
        title={renderTitle}
        placement={'top'}
      >
        <InfoIcon className={classes.icon} />
      </Tooltip>
    </span>
  );
};

export const WalletDetails = withStyles(styles)(WalletDetailsRaw);
