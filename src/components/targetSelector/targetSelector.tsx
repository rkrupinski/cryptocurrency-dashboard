import React, { Component, ChangeEvent } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles, WithStyles } from '@material-ui/core/styles';

import { Target, IToggleTargetAction } from '@src/redux_/currencies';
import { styles, ClassNames } from './styles';
import { Container } from '@src/components/container';

export interface ITargetSelectorProps {
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
              control={<Radio color={'primary'} />}
              label={'USD'}
              value={'USD'}
            />
            <FormControlLabel
              control={<Radio color={'primary'} />}
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
