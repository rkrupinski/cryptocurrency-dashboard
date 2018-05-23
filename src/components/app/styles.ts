import { Theme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';

export type ClassNames =
  | '@global';

export const styles = (theme: Theme) => ({
  ['@global']: {
    body: {
      background: blueGrey.A100,
      paddingBottom: 100,
    },
  },
});
