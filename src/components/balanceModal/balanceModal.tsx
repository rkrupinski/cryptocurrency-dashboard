import React, { Fragment, Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Slide, { SlideProps } from '@material-ui/core/Slide';
import { FormAction } from 'redux-form';
import { withStyles, WithStyles } from '@material-ui/core/styles';

import { TotalBalance, ISetBalanceAction } from '@src/redux_/wallet';
import { Currency } from '@src/redux_/currencies';
import { IBalanceContext } from '@src/components/balanceContext';
import { BalanceForm, IBalanceFormData } from '@src/components/balanceForm';
import { styles, ClassNames } from './styles';

export const BalanceTransition = (props: SlideProps) => (
  <Slide direction={'up'} {...props} />
);

export type BalanceModalProps = {
  balance: TotalBalance,
  setBalance: (currency: Currency, balance: number) => ISetBalanceAction;
  submit: () => FormAction;
} & Pick<IBalanceContext, 'open' | 'currency' | 'onDoneEditingBalance'>;

export class BalanceModalRaw extends Component<
  BalanceModalProps & WithStyles<ClassNames>
> {
  public render() {
    const {
      classes,
      currency,
      onDoneEditingBalance,
      open,
      submit,
    } = this.props;

    return (
      <Dialog
        open={open}
        onClose={onDoneEditingBalance}
        TransitionComponent={BalanceTransition}
        aria-labelledby={'balance-modal-title'}
        classes={{ paper: classes.modal }}
      >
        <DialogTitle id={'balance-modal-title'}>Edit balance</DialogTitle>
        <DialogContent>
          {this.renderDialogContent()}
        </DialogContent>
        <DialogActions>
          <Button onClick={onDoneEditingBalance}>Cancel</Button>
          <Button color={'primary'} onClick={submit}>Save</Button>
        </DialogActions>
      </Dialog>
    );
  }

  private renderDialogContent = () => {
    const { currency, balance } = this.props;

    return currency ? (
      <Fragment>
        <DialogContentText>
          How much <strong>{currency.name}</strong> do you hold?
        </DialogContentText>
        <BalanceForm
          currency={currency}
          onSubmit={this.onSubmit}
          initialValues={{ balance: balance[currency.symbol] || 0 }}
        />
      </Fragment>
    ) : (
      <div style={{ height: 80 }} /> // (☞ﾟ∀ﾟ)☞
    );
  }

  private onSubmit = ({ balance }: IBalanceFormData) => {
    const {
      currency,
      onDoneEditingBalance,
      setBalance,
    } = this.props;

    if (currency) {
      setBalance(currency, Number(balance));
    }

    onDoneEditingBalance();
  }
}

export const BalanceModal = withStyles(styles)(BalanceModalRaw);
