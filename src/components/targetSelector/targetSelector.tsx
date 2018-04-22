import React, { Component, ChangeEvent } from 'react';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { withStyles, WithStyles } from 'material-ui/styles';
import { FormLabel, FormControl, FormControlLabel } from 'material-ui/Form';

import { Target, IToggleTargetAction } from '@src/redux_/currencies';
import { styles, ClassNames } from './styles';
import { Container } from '@src/components/container';

export interface ITargetSelectorProps {
  loading: boolean;
  target: Target;
  toggleTarget: (target: Target) => IToggleTargetAction;
}

export class TargetSelectorRaw extends Component<
  ITargetSelectorProps & WithStyles<ClassNames>
> {
  constructor(props: ITargetSelectorProps & WithStyles<ClassNames>) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  public render() {
    const { target, classes } = this.props;

    return (
      <Container>
        <FormControl component={'fieldset'}>
          <FormLabel
            component={'legend'}
            className={classes.legend}
          >
            Target
          </FormLabel>
          <RadioGroup
            className={classes.radiogroup}
            aria-label={'Target'}
            name={'target'}
            value={target}
            onChange={this.handleChange}
          >
            <FormControlLabel
              control={<Radio />}
              label={'USD'}
              value={'USD'}
            />
            <FormControlLabel
              control={<Radio />}
              label={'EUR'}
              value={'EUR'}
            />
          </RadioGroup>
        </FormControl>
      </Container>
    );
  }

  private handleChange(
    e: ChangeEvent<any>,
    target: string,
  ) {
    const { toggleTarget } = this.props;

    toggleTarget(target as Target);
  }
}

export const TargetSelector = withStyles(styles)(TargetSelectorRaw);
