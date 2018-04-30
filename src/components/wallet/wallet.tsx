import React, { SFC } from 'react';
import Typography from 'material-ui/Typography';
import { FormattedNumber } from 'react-intl';

import { TotalBalance } from '@src/redux_/wallet';
import { Target } from '@src/redux_/currencies';
import { IPrices } from '@src/redux_/prices';

interface IWalletProps {
  balance: TotalBalance;
  target: Target;
  prices: IPrices;
}

const renderBalance = (f: string) => (
  <Typography
    component={'span'}
    type={'subheading'}
  >
    Balance: {f}
  </Typography>
);

export const Wallet: SFC<IWalletProps> = ({ balance, prices, target }) => {
  let total;

  try {
    total = Object.keys(balance)
        .reduce((acc, sym) => acc + balance[sym] * prices[sym][target], 0);
  } catch (err) {
    // (☞ﾟ∀ﾟ)☞
    total = 0;
  }

  return (
    <FormattedNumber
      value={total}
      style={'currency'}
      currency={target}
      maximumFractionDigits={2}
    >
      {renderBalance}
    </FormattedNumber>
  );
};
