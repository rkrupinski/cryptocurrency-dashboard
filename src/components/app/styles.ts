import { Theme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';

export type ClassNames =
  | '@global'
  | 'grid';

export const styles = (theme: Theme) => ({
  ['@global']: {
    body: {
      background: blueGrey.A100,
    },
  },
  grid: {
    paddingBottom: '100px',
  },
});
