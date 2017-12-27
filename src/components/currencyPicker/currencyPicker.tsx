import React, { StatelessComponent } from 'react';

import { Currency } from '@src/redux_/currencies';

export interface ICurrencyPickerProps {
  all: Currency[];
  loading: boolean;
  selected: string[];
}

export const CurrencyPicker: StatelessComponent<ICurrencyPickerProps> = ({
  all,
}) => (
  <div>Currencies: {all.length}</div>
);
