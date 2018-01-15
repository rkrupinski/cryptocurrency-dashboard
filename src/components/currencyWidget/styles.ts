import { Theme } from 'material-ui/styles';

export type ClassNames =
  | 'currencyName'
  | 'deselectBtn';

export const styles = (theme: Theme) => ({
  currencyName: {
    cursor: 'move',
  },
  deselectBtn: {
    position: 'absolute' as 'absolute',
    right: '3px',
    top: '3px',
  },
});
