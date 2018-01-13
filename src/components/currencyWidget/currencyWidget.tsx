import React, { SFC } from 'react';
import Typography from 'material-ui/Typography';
import { FormattedNumber } from 'react-intl';

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
  const renderPrice = price && !priceLoading && (
    <Typography type={'display1'}>
      <FormattedNumber
        value={price[target]}
        style={'currency'}
        currency={target}
        maximumFractionDigits={6}
      />
    </Typography>
  );

  const renderPriceSpinner = priceLoading && (
    <Spinner spinnerProps={{ size: 35 }} />
  );

  return (
    <Container>
      <Typography type={'headline'}>{name}</Typography>
      {renderPrice}
      {renderPriceSpinner}
    </Container>
  );
};
