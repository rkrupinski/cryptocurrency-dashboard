import React, { SFC } from 'react';

import { Target, Currency } from '@src/redux_/currencies';
import { Price } from '@src/redux_/prices';

export interface ICurrencyWidgetProps {
  currency: Currency;
  price: Price;
  target: Target;
}

export const CurrencyWidget: SFC<ICurrencyWidgetProps> = ({
  currency: { name },
  price,
  target,
}) => {
  const p = price && price[target];

  return (
    <div>{name}: {p}</div>
  );
};
