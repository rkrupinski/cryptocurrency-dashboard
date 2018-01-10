import React, { PureComponent } from 'react';

import { IFetchCurrenciesAction } from '@src/redux_/currencies';
import { CurrencyPickerConnected as CurrencyPicker } from '@src/components/currencyPicker';
import { TargetSelectorConnected as TargetSelector } from '@src/components/targetSelector';
import { CurrencyListConnected as CurrencyList } from '@src/components/currencyList';

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
        <CurrencyPicker />
        <TargetSelector />
        <CurrencyList />
      </React.Fragment>
    );
  }
}
