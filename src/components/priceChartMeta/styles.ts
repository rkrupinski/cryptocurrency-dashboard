import { Theme } from 'material-ui/styles';
import { green, grey, red } from 'material-ui/colors';

export type ClassNames =
  | 'icon'
  | 'trendingUp'
  | 'trendingFlat'
  | 'trendingDown';

export const styles = (theme: Theme) => ({
  icon: {
    height: 40,
    verticalAlign: 'middle',
    width: 40,
  },
  trendingDown: {
    color: red.A100,
  },
  trendingFlat: {
    color: grey.A200,
  },
  trendingUp: {
    color: green.A700,
  },
});
