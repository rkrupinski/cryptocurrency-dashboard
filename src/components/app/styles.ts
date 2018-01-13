import { Theme } from 'material-ui/styles';
import { blueGrey } from 'material-ui/colors';

export type ClassNames =
  | '@global';

export const styles = (theme: Theme) => ({
  '@global': {
    body: {
      background: blueGrey.A100,
    },
  },
});
