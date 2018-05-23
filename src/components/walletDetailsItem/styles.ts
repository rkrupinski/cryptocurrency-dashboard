import { Theme } from '@material-ui/core/styles';

export type ClassNames =
  | 'amount'
  | 'name';

const sharedStyles = {
  color: 'white',
};

export const styles = (theme: Theme) => ({
  amount: {
    fontWeight: 'bold' as 'bold',
    ...sharedStyles,
  },
  name: {
    marginRight: '.5em',
    ...sharedStyles,
  },
});
