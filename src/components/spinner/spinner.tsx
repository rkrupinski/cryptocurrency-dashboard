import React, { SFC } from 'react';
import CircularProgress, { CircularProgressProps } from '@material-ui/core/CircularProgress';

export interface ISpinnerProps {
  spinnerProps?: CircularProgressProps;
}

const Spinner: SFC<ISpinnerProps> = ({ spinnerProps }) => (
  <CircularProgress {...spinnerProps} />
);

Spinner.defaultProps = {
  spinnerProps: {
    size: 36,
  },
};

export { Spinner };
