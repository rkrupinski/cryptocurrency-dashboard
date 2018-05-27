import { Theme } from '@material-ui/core/styles';

export type ClassNames =
  | 'legend'
  | 'radiogroup';

export const styles = (theme: Theme) => ({
  legend: {
    fontSize: '.75rem',
  },
  radiogroup: {
    flexDirection: 'row' as 'row',
  },
});
