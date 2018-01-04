import { Theme } from 'material-ui/styles';

export type ClassNames =
  | 'radiogroup';

export const styles = (theme: Theme) => ({
  radiogroup: {
    display: 'flex',
    flexDirection: 'row' as 'row',
  },
});
