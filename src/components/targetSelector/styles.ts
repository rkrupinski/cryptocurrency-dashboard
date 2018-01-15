import { Theme } from 'material-ui/styles';

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
