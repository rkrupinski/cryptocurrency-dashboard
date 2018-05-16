import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import Slide, { SlideProps } from 'material-ui/transitions/Slide';

import {
  BalanceConsumer,
  IBalanceContext,
} from '@src/components/balanceContext';
import { BalanceForm } from '@src/components/balanceForm';

export const BalanceTransition = (props: SlideProps) => (
  <Slide direction={'up'} {...props} />
);

export class BalanceModal extends Component<{}> {
  public render() {
    return (
      <BalanceConsumer>
        {this.renderModal}
      </BalanceConsumer>
    );
  }

  private renderModal = ({
    open,
    currency,
    onDoneEditingBalance,
  }: IBalanceContext) => (
    <Dialog
      open={open}
      onClose={onDoneEditingBalance}
      TransitionComponent={BalanceTransition}
    >
      <BalanceForm
        currency={currency}
        onDoneEditingBalance={onDoneEditingBalance}
      />
    </Dialog>
  )
}
