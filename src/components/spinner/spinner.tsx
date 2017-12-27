import React, { StatelessComponent } from 'react';
import { CircularProgress } from 'material-ui/Progress';

export const Spinner: StatelessComponent<{}> = () => (
  <CircularProgress />
);
