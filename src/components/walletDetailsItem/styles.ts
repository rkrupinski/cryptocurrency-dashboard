import { Theme } from '@material-ui/core/styles';

export type ClassNames =
  | 'name'
  | 'root';

export const styles = (theme: Theme) => ({
  name: {
    marginRight: '.5em',
  },
  root: {
    color: 'white',
  },
});
