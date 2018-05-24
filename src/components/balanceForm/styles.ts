import { Theme } from '@material-ui/core/styles';

export type ClassNames =
  | 'input';

export const styles = (theme: Theme) => ({
  input: {
    textAlign: 'right' as 'right',
  },
});
