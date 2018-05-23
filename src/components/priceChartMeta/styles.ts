import { Theme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';

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
