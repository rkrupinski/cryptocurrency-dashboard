import React, { Component } from 'react';

export interface IBalanceContext {
  open: boolean;
}

const defaultContextValue: IBalanceContext = {
  open: false,
};

const { Provider, Consumer } = React.createContext(defaultContextValue);

export class BalanceProvider extends Component<{}> {
  public render() {
    const { children } = this.props;

    const providerValue = {
      open: false,
    };

    return (
      <Provider value={providerValue}>
        {children}
      </Provider>
    );
  }
}

export { Consumer as BalanceConsumer };
