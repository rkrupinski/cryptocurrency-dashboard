import { Theme } from 'material-ui/styles';

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
