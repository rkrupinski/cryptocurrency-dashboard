import { Theme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

export type ClassNames =
  | 'currencyName'
  | 'divider'
  | 'menu'
  | 'price';

const ellipsis = {
  overflow: 'hidden' as 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap' as 'nowrap',
};

export const styles = (theme: Theme) => ({
  currencyName: {
    ['&:hover']: {
      outline: `2px dashed ${grey.A100}`,
      outlineOffset: '2px',
    },
    cursor: 'move',
    marginRight: '40px',
    ...ellipsis,
  },
  divider: {
    margin: '10px 0',
  },
  menu: {
    position: 'absolute' as 'absolute',
    right: 8,
    top: 8,
  },
  price: {
    ...ellipsis,
  },
});
