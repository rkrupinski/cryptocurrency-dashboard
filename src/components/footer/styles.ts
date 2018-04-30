import { Theme } from 'material-ui/styles';

export type ClassNames =
  | 'footer';

export const styles = (theme: Theme) => ({
  footer: {
    bottom: theme.spacing.unit * 2,
    left: theme.spacing.unit * 2,
    position: 'fixed' as 'fixed',
    right: theme.spacing.unit * 2,
  },
});
