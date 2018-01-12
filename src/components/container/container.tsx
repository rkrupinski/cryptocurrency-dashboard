import React, { SFC } from 'react';
import Paper from 'material-ui/Paper';
import { withStyles, WithStyles } from 'material-ui/styles';

import { styles, ClassNames } from './styles';

export const ContainerRaw: SFC<
  {} & WithStyles<ClassNames>
> = ({
  children,
  classes,
}) => (
  <Paper
    className={classes.container}
    elevation={1}
  >
    {children}
  </Paper>
);

export const Container = withStyles(styles)<{}>(ContainerRaw);
