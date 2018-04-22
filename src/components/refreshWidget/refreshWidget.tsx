import React, { Component, ChangeEvent } from 'react';
import Select from 'material-ui/Select';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';

import { RefreshRate, ISetRefreshRateAction } from '@src/redux_/refresh';
import { Container } from '@src/components/container';

export interface IRefreshWidgetProps {
  loading: boolean;
  refreshRate: RefreshRate;
  setRefreshRate: (rate: RefreshRate) => ISetRefreshRateAction;
}

export class RefreshWidget extends Component<IRefreshWidgetProps> {
  public render() {
    const { refreshRate } = this.props;

    return (
      <Container>
        <FormControl fullWidth={true}>
          <InputLabel htmlFor={'refresh-rate'}>Refresh</InputLabel>
          <Select
            value={refreshRate}
            onChange={this.handleChange}
            input={<Input name={'refresh-rate'} id={'refresh-rate'} />}
          >
            <MenuItem value={60}>Every minute</MenuItem>
            <MenuItem value={10}>Every 10 seconds</MenuItem>
            <MenuItem value={'manual'}>Manually</MenuItem>
          </Select>
        </FormControl>
      </Container>
    );
  }

  private handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { setRefreshRate } = this.props;

    setRefreshRate(e.target.value as RefreshRate);
  }
}
