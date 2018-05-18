import React, { Component, createContext } from 'react';

import { Currency } from '@src/redux_/currencies';
import { noop } from '@src/common/utils';

export interface IBalanceContext {
  currency: Currency | null;
  onDoneEditingBalance: () => void;
  onEditingBalance: (currency: Currency) => void;
  open: boolean;
}

export type BalanceProviderState = Pick<IBalanceContext, 'open' | 'currency'>;

const defaultContextValue: IBalanceContext = {
  currency: null,
  onDoneEditingBalance: noop,
  onEditingBalance: noop,
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
      // TODO: bind once or don't
      onDoneEditingBalance: this.onDoneEditingBalance.bind(this),
      onEditingBalance: this.onEditingBalance.bind(this),
      open,
    };

    return (
      <Provider value={contextValue}>
        {children}
      </Provider>
    );
  }

  private onEditingBalance(currency: Currency) {
    this.setState({
      currency,
      open: true,
    });
  }

  private onDoneEditingBalance() {
    this.setState({
      currency: null,
      open: false,
    });
  }
}

export { Consumer as BalanceConsumer };
