import React, { PureComponent, ChangeEvent } from 'react';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { withStyles, WithStyles } from 'material-ui/styles';
import { FormLabel, FormControl, FormControlLabel } from 'material-ui/Form';

import { ChartMode, IToggleChartModeAction } from '@src/redux_/charts';
import { styles, ClassNames } from './styles';
import { Container } from '@src/components/container';

export interface IChartModeSelectorProps {
  loading: boolean;
  mode: ChartMode;
  toggleChartMode: (mode: ChartMode) => IToggleChartModeAction;
}

export class ChartModeSelectorRaw extends PureComponent<
  IChartModeSelectorProps & WithStyles<ClassNames>
> {
  constructor(props: IChartModeSelectorProps & WithStyles<ClassNames>) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  public render() {
    const { mode, classes } = this.props;

    return (
      <Container>
        <FormControl component={'fieldset'}>
          <FormLabel
            component={'legend'}
            className={classes.legend}
          >
            Charts
          </FormLabel>
          <RadioGroup
            className={classes.radiogroup}
            aria-label={'Charts'}
            name={'mode'}
            value={mode}
            onChange={this.handleChange}
          >
            <FormControlLabel
              control={<Radio />}
              label={'Hour'}
              value={'hour'}
            />
            <FormControlLabel
              control={<Radio />}
              label={'Day'}
              value={'day'}
            />
          </RadioGroup>
        </FormControl>
      </Container>
    );
  }

  private handleChange(
    e: ChangeEvent<any>,
    mode: string,
  ) {
    const { toggleChartMode } = this.props;

    toggleChartMode(mode as ChartMode);
  }
}

export const ChartModeSelector = withStyles(styles)(ChartModeSelectorRaw);
