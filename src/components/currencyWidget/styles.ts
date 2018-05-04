import { Theme } from 'material-ui/styles';
import { grey } from 'material-ui/colors';

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
    right: 3,
    top: 3,
  },
  price: {
    ...ellipsis,
  },
});
