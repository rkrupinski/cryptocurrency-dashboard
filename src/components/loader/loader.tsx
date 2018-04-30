import React, { SFC, ComponentClass, StatelessComponent } from 'react';
import { withStyles, WithStyles } from 'material-ui/styles';

import { Currency } from '@src/redux_/currencies';
import { styles, ClassNames } from './styles';

interface ILoaderProps {
  currencies: Currency[];
  component: string | ComponentClass<any> | StatelessComponent<any>;
}

const LoaderRaw: SFC<
  ILoaderProps & WithStyles<ClassNames>
> = ({ classes, currencies, component }) => {
  const hasData = !!currencies.length;

  return (
    <div className={`${classes.container} ${!hasData ? classes.loading : ''}`}>
      {React.createElement(component)}
    </div>
  );
};

export const Loader = withStyles(styles)(LoaderRaw);
