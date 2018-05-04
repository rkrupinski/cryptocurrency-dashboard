import { Theme } from 'material-ui/styles';

export type ClassNames =
  | 'button'
  | 'menuIcon'
  | 'placeholder';

export const styles = (theme: Theme) => ({
  button: {},
  menuIcon: {
    marginRight: 0,
  },
  placeholder: {
    display: 'none',
  },
});
