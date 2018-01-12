import React, { SFC } from 'react';
import { CircularProgress, CircularProgressProps } from 'material-ui/Progress';

export interface ISpinnerProps {
  spinnerProps: CircularProgressProps;
}

export const Spinner: SFC<ISpinnerProps> = ({ spinnerProps }) => (
  <CircularProgress {...spinnerProps} />
);
