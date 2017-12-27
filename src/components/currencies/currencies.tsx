import React, { PureComponent } from 'react';

import { IFetchCurrenciesAction } from '@src/redux_/currencies';

interface ICurrenciesProps {
  fetchCurrencies: () => IFetchCurrenciesAction;
}

export class Currencies extends PureComponent<ICurrenciesProps, {}> {
  public componentDidMount() {
    this.props.fetchCurrencies();
  }

  public render() {
    return (
      <div>Currencies :)</div>
    );
  }
}
