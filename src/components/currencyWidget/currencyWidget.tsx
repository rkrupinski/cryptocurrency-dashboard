import React, { SFC } from 'react';
import Typography from 'material-ui/Typography';

import { Target, Currency } from '@src/redux_/currencies';
import { Price } from '@src/redux_/prices';
import { Spinner } from '@src/components/spinner';
import { Container } from '@src/components/container';

export interface ICurrencyWidgetProps {
  currency: Currency;
  price: Price;
  priceLoading: boolean;
  target: Target;
}

export const CurrencyWidget: SFC<ICurrencyWidgetProps> = ({
  currency: { name },
  price,
  priceLoading,
  target,
}) => {
  const p = price && price[target];

  const spinnerProps = {
    size: 20,
  };

  return (
    <Container>
      <Typography type={'headline'}>{name}</Typography>
      <p>{p}</p>
      {priceLoading && <Spinner spinnerProps={spinnerProps} />}
    </Container>
  );
};
