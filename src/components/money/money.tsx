import React, { SFC, ReactNode } from 'react';
import { FormattedNumber } from 'react-intl';

import { Target } from '@src/redux_/currencies';

export interface IMoneyProps {
  amount: number;
  maxDecimals?: number;
  target: Target;
  children: (formatted: string) => ReactNode;
}

export const Money: SFC<IMoneyProps> = ({
  amount,
  maxDecimals = 2,
  target,
  children,
}) => (
  <FormattedNumber
    value={amount}
    maximumFractionDigits={maxDecimals}
    style={'currency'}
    currency={target}
  >
    {children}
  </FormattedNumber>
);
