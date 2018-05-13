import React, { SFC, Fragment } from 'react';
import Typography from 'material-ui/Typography';

import { TotalBalance } from '@src/redux_/wallet';
import { Target } from '@src/redux_/currencies';
import { IPrices } from '@src/redux_/prices';
import { MoneyConnected as Money } from '@src/components/money';

interface IWalletProps {
  balance: TotalBalance;
  prices: IPrices;
  target: Target;
  selectedSymbols: string[];
}

const renderBalance = (f: string) => (
  <Typography component={'span'} variant={'subheading'}>
    Balance: {f}
  </Typography>
);

export const Wallet: SFC<IWalletProps> = ({
  balance,
  prices,
  target,
  selectedSymbols,
}) => {
  const totalBalance: TotalBalance = selectedSymbols
      .reduce((acc, sym) => ({
        ...acc,
        [sym]: balance[sym] || 0,
      }), {});

  const totalAmount = Object.entries(totalBalance)
      .reduce((acc, [sym, bal]) => acc + prices[sym][target] * bal, 0);

  return (
    <Fragment>
      <Money amount={totalAmount}>
        {renderBalance}
      </Money>

      (i)
    </Fragment>
  );
};
