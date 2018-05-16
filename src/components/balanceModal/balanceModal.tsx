import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import Slide, { SlideProps } from 'material-ui/transitions/Slide';

import { BalanceConsumer, IBalanceContext } from '@src/components/balanceContext';

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

  private renderModal = ({ open }: IBalanceContext) => (
    <Dialog
      open={open}
      TransitionComponent={BalanceTransition}
      keepMounted={true}
    >
      <h1>TODO!</h1>
    </Dialog>
  )
}
