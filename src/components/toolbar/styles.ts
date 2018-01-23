import { Theme } from 'material-ui/styles';

export type ClassNames =
  | 'toolbar';

export const styles = (theme: Theme) => ({
  toolbar: {
    bottom: theme.spacing.unit * 2,
    position: 'fixed' as 'fixed',
    right: theme.spacing.unit * 2,
  },
});
