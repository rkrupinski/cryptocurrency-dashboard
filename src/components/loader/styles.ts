import { Theme } from '@material-ui/core/styles';

export type ClassNames =
  | 'container'
  | 'loading';

export const styles = (theme: Theme) => ({
  container: {
    height: '100%',
  },
  loading: {
    opacity: .5,
    pointerEvents: 'none' as 'none',
  },
});
