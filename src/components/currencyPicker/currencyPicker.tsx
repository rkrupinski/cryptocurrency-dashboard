import React, { StatelessComponent } from 'react';
import { branch, renderNothing, renderComponent } from 'recompose';
import { CircularProgress } from 'material-ui/Progress';

import { Currency } from '@src/redux_/currencies';
import { Spinner } from '@src/components/spinner';

interface ICurrencyPickerProps {
  all: Currency[];
  loading: boolean;
  selected: string[];
}

const Foo: StatelessComponent<ICurrencyPickerProps> = ({
  all,
}) => (
  <div>Currencies: {all.length}</div>
);

export const CurrencyPicker = branch<ICurrencyPickerProps>(
  ({ loading }) => loading,
  renderComponent(Spinner),
  renderComponent(Foo),
)(Foo);
