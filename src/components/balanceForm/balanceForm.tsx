import React, { SFC } from 'react';

import { Currency } from '@src/redux_/currencies';

export interface IBalanceFormProps {
  currency: Currency | null;
  onDoneEditingBalance: () => void;
}

export const BalanceForm: SFC<IBalanceFormProps> = ({ currency }) => (
  <div>{JSON.stringify(currency)}</div>
);
