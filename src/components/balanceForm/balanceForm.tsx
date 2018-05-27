import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import {
  reduxForm,
  Field,
  InjectedFormProps,
  WrappedFieldProps,
} from 'redux-form';

import { Currency } from '@src/redux_/currencies';
import { required, num, positive } from '@src/common/validators';
import { styles, ClassNames } from './styles';

export interface IBalanceFormData {
  balance: number;
}

export interface ICustomBalanceFormProps {
  currency: Currency;
}

export type BalanceFormProps = ICustomBalanceFormProps &
    InjectedFormProps<IBalanceFormData, ICustomBalanceFormProps>;

export class BalanceFormRaw extends Component<
  BalanceFormProps & WithStyles<ClassNames>
> {
  private field?: HTMLInputElement;

  public componentDidUpdate() {
    if (this.field) {
      this.field.focus(); // (☞ﾟ∀ﾟ)☞
    }
  }

  public render() {
    const { currency, handleSubmit } = this.props;

    return (
      <form
        onSubmit={handleSubmit}
        noValidate={true}
      >
        <Field
          name={'balance'}
          component={this.renderBalanceField}
          validate={[required, num, positive]}
        />
      </form>
    );
  }

  private setFieldRef = (field: HTMLInputElement) => this.field = field;

  private renderBalanceField = ({
    input,
    meta: { dirty, error },
  }: WrappedFieldProps) => {
    const { classes, currency } = this.props;

    const inputProps = {
      ['aria-label']: `${currency.name} amount`,
      autoComplete: 'off',
    };

    const renderSymbol = (
      <InputAdornment position={'end'}>{currency.symbol}</InputAdornment>
    );

    const renderError = dirty && error && (
      <FormHelperText>{error}</FormHelperText>
    );

    return (
      <FormControl
        fullWidth={true}
        margin={'normal'}
        error={dirty && !!error}
      >
        <Input
          type={'number'}
          classes={{ input: classes.input }}
          endAdornment={renderSymbol}
          inputProps={inputProps}
          inputRef={this.setFieldRef}
          {...input}
        />
        {renderError}
      </FormControl>
    );
  }
}

export const BalanceForm = reduxForm<IBalanceFormData, ICustomBalanceFormProps>({
  form: 'balance',
})(withStyles(styles)(BalanceFormRaw));
