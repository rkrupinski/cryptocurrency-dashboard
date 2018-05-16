import { Theme } from 'material-ui/styles';

export type ClassNames =
  | 'tooltip';

export const styles = (theme: Theme) => ({
  tooltip: {
    color: theme.palette.common.white,
  },
});
