import React, { Component, createContext } from 'react';

import { Currency } from '@src/redux_/currencies';

export interface IBalanceContext {
  currency: Currency | null;
  onDoneEditingBalance: () => void;
  onEditingBalance: (currency: Currency) => void;
  open: boolean;
}

export type BalanceProviderState = Pick<IBalanceContext, 'open' | 'currency'>;

const defaultContextValue: IBalanceContext = {
  currency: null,
  onDoneEditingBalance: () => {/**/},
  onEditingBalance: () => {/**/},
  open: false,
};

const { Provider, Consumer } = createContext(defaultContextValue);

export class BalanceProvider extends Component<{}, BalanceProviderState> {
  public state = {
    currency: null,
    open: false,
  };

  public render() {
    const { children } = this.props;
    const { currency, open } = this.state;
    const contextValue = {
      currency,
      onDoneEditingBalance: this.onDoneEditingBalance(this),
      onEditingBalance: this.onEditingBalance(this),
      open,
    };

    return (
      <Provider value={contextValue}>
        {children}
      </Provider>
    );
  }

  private onEditingBalance = (ctx: this) => (currency: Currency) => { // (☞ﾟ∀ﾟ)☞
    ctx.setState({
      currency,
      open: true,
    });
  }

  private onDoneEditingBalance = (ctx: this) => () => { // (☞ﾟ∀ﾟ)☞
    ctx.setState({
      currency: null,
      open: false,
    });
  }
}

export { Consumer as BalanceConsumer };
