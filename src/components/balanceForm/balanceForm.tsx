import React, { Component } from 'react';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';

import { Currency } from '@src/redux_/currencies';

export interface IBalanceFormData {
  balance: number;
}

export interface ICustomBalanceFormProps {
  currency: Currency;
}

export type BalanceFormProps = ICustomBalanceFormProps &
    InjectedFormProps<IBalanceFormData, ICustomBalanceFormProps>;

export class BalanceFormRaw extends Component<BalanceFormProps> {
  public render() {
    const { currency, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <Field
          component={'input'}
          type={'number'}
          name={'balance'}
          placeholder={currency.symbol}
        />
      </form>
    );
  }
}

export const BalanceForm = reduxForm<IBalanceFormData, ICustomBalanceFormProps>({
  form: 'balance',
})(BalanceFormRaw);
