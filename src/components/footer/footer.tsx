import React, { SFC } from 'react';
import Grid from 'material-ui/Grid';
import { withStyles, WithStyles } from 'material-ui/styles';

import { WalletConnected as Wallet } from '@src/components/wallet';
import { RefreshButtonConnected as RefreshButton } from '@src/components/refreshButton';
import { styles, ClassNames } from './styles';
import { RefreshRate } from '@src/redux_/refresh';

export interface IFooterProps {
  loading: boolean;
  refreshRate: RefreshRate;
}

export const FooterRaw: SFC<
IFooterProps & WithStyles<ClassNames>
> = ({ classes, refreshRate, loading }) => (
  <footer className={classes.footer}>
    <Grid
      alignItems={'flex-end'}
      container={true}
      justify={'space-between'}
      spacing={0}
    >
      <Grid item={true}>
        {!loading && <Wallet />}
      </Grid>
      <Grid item={true}>
        {refreshRate === 'manual' && <RefreshButton />}
      </Grid>
    </Grid>
  </footer>
);

export const Footer = withStyles(styles)(FooterRaw);
