import { Theme } from 'material-ui/styles';

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
