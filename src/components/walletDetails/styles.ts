import { Theme } from 'material-ui/styles';

export type ClassNames =
  | 'container'
  | 'icon'
  | 'list'
  | 'placeholder';

export const styles = (theme: Theme) => ({
  container: {},
  icon: {
    color: theme.palette.text.hint,
    cursor: 'help',
  },
  list: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  placeholder: {
    color: theme.palette.common.white,
  },
});
