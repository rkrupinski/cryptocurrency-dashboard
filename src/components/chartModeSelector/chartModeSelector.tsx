import React, { Component, ChangeEvent } from 'react';
import Select from 'material-ui/Select';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';

import { ChartMode, IToggleChartModeAction } from '@src/redux_/charts';
import { Container } from '@src/components/container';

export interface IChartModeSelectorProps {
  mode: ChartMode;
  toggleChartMode: (mode: ChartMode) => IToggleChartModeAction;
}

export class ChartModeSelector extends Component<IChartModeSelectorProps> {
  public render() {
    const { mode } = this.props;

    return (
      <Container>
        <FormControl fullWidth={true}>
          <InputLabel htmlFor={'chart-mode'}>Charts</InputLabel>
          <Select
            value={mode}
            onChange={this.handleChange}
            input={<Input name={'chart-mode'} id={'chart-mode'} />}
          >
            <MenuItem value={'hour'}>Last hour</MenuItem>
            <MenuItem value={'day'}>Last day</MenuItem>
            <MenuItem value={'month'}>Last month</MenuItem>
          </Select>
        </FormControl>
      </Container>
    );
  }

  private handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { toggleChartMode } = this.props;

    toggleChartMode(e.target.value as ChartMode);
  }
}
