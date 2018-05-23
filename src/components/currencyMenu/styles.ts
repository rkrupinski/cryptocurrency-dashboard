import { Theme } from '@material-ui/core/styles';

export type ClassNames =
  | 'button'
  | 'menuIcon'
  | 'placeholder';

export const styles = (theme: Theme) => ({
  button: {
    height: 40,
    width: 40,
  },
  menuIcon: {
    marginRight: 0,
  },
  placeholder: {
    display: 'none',
  },
});
