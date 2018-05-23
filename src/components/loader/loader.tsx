import React, { SFC, ComponentClass, StatelessComponent } from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';

import { Currency } from '@src/redux_/currencies';
import { styles, ClassNames } from './styles';

interface ILoaderProps<T> {
  currencies: Currency[];
  component: string | ComponentClass<T> | StatelessComponent<T>;
}

const LoaderRaw: SFC<
  ILoaderProps<any> & WithStyles<ClassNames>
> = ({ classes, currencies, component }) => {
  const hasData = !!currencies.length;

  return (
    <div className={`${classes.container} ${!hasData ? classes.loading : ''}`}>
      {React.createElement(component)}
    </div>
  );
};

export const Loader = withStyles(styles)(LoaderRaw);
