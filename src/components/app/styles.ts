import { Theme } from 'material-ui/styles';
import { blueGrey } from 'material-ui/colors';

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
