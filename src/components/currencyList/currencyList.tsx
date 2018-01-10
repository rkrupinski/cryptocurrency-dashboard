import React, { Fragment, SFC } from 'react';

import { Currency } from '@src/redux_/currencies';
import {
  CurrencyWidgetConnected as CurrencyWidget,
} from '@src/components/currencyWidget';

export interface ICurrencyListProps {
  currencies: Currency[];
}

export const CurrencyList: SFC<ICurrencyListProps> = ({ currencies }) => (
  <Fragment>
    {currencies.map((currency) => <CurrencyWidget key={currency.id} currency={currency} />)}
  </Fragment>
);
