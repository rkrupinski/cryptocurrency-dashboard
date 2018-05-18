import React, { Component } from 'react';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import Zoom, { ZoomProps } from 'material-ui/transitions/Zoom';
import { FormAction } from 'redux-form';

import { TotalBalance } from '@src/redux_/wallet';
import { IBalanceContext } from '@src/components/balanceContext';
import { BalanceForm, IBalanceFormData } from '@src/components/balanceForm';

export const BalanceTransition = (props: ZoomProps) => (
  <Zoom {...props} />
);

export type BalanceModalProps = {
  balance: TotalBalance,
  submit: () => FormAction;
} & Pick<IBalanceContext, 'open' | 'currency' | 'onDoneEditingBalance'>;

export class BalanceModal extends Component<BalanceModalProps> {
  public render() {
    const {
      balance,
      currency,
      onDoneEditingBalance,
      open,
      submit,
    } = this.props;

    return currency ? (
      <Dialog
        open={open}
        onClose={onDoneEditingBalance}
        TransitionComponent={BalanceTransition}
        aria-labelledby={'balance-modal-title'}
      >
        <DialogTitle id={'balance-modal-title'}>Edit balance</DialogTitle>
        <DialogContent>
          <DialogContentText>
            How much <strong>{currency.name}</strong> do you hold?
          </DialogContentText>
          <BalanceForm
            currency={currency}
            onSubmit={this.onSubmit}
            initialValues={{ balance: balance[currency.symbol] || 0 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onDoneEditingBalance}>Cancel</Button>
          <Button color={'primary'} onClick={submit}>Save</Button>
        </DialogActions>
      </Dialog>
    ) : null;
  }

  private onSubmit = ({ balance }: IBalanceFormData) => {
    const { onDoneEditingBalance } = this.props;
    /* tslint:disable */
    console.log('onSubmit', balance);
    /* tslint:enable */

    onDoneEditingBalance();
  }
}
