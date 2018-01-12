import { Theme } from 'material-ui/styles';

export type ClassNames =
  | 'container';

export const styles = (theme: Theme) => ({
  container: {
    boxSizing: 'border-box',
    height: '100%',
    padding: theme.spacing.unit * 2,
  },
});
