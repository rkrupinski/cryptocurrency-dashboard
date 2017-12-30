import React, { PureComponent } from 'react';

import { IFetchCurrenciesAction } from '@src/redux_/currencies';
import { CurrencyPickerConnected as CurrencyPicker } from '@src/components/currencyPicker';

interface IAppProps {
  fetchCurrencies: () => IFetchCurrenciesAction;
}

export class App extends PureComponent<IAppProps, {}> {
  public componentDidMount() {
    this.props.fetchCurrencies();
  }

  public render() {
    return (
      <React.Fragment>
        <h1>¯\_(ツ)_/¯</h1>
        <CurrencyPicker />
      </React.Fragment>
    );
  }
}
