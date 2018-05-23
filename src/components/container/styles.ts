import { Theme } from '@material-ui/core/styles';

export type ClassNames =
  | 'container';

export const styles = (theme: Theme) => ({
  container: {
    boxSizing: 'border-box' as 'border-box',
    height: '100%',
    padding: theme.spacing.unit * 2,
  },
});
