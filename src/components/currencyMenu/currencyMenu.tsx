import React, { Fragment, Component, MouseEvent } from 'react';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import DeleteIcon from 'material-ui-icons/DeleteForever';
import WalletIcon from 'material-ui-icons/AccountBalanceWallet';
import Menu, { MenuItem } from 'material-ui/Menu';
import { ListItemIcon, ListItemText } from 'material-ui/List';
import { withStyles, WithStyles } from 'material-ui/styles';

import { Currency, ICurrencyDeselectedAction } from '@src/redux_/currencies';
import { TotalBalance } from '@src/redux_/wallet';
import { styles, ClassNames } from './styles';

interface ICurrencyMenuProps {
  balance: TotalBalance;
  currency: Currency;
  deselectCurrency: (currency: Currency) => ICurrencyDeselectedAction;
  onEditingBalance: (currency: Currency) => void;
}

interface ICurrencyMenuState {
  anchorEl?: HTMLButtonElement;
}

export class CurrencyMenuRaw extends Component<
  ICurrencyMenuProps & WithStyles<ClassNames>,
  ICurrencyMenuState
> {
  public state = {
    anchorEl: undefined,
  };

  public render() {
    const {
      balance,
      classes,
      currency: { id: currencyId, symbol },
    } = this.props;

    const { anchorEl } = this.state;

    return (
      <Fragment>
        <IconButton
          className={classes.button}
          aria-label={'Options'}
          aria-owns={anchorEl ? `options-${currencyId}` : undefined}
          aria-haspopup={'true'}
          onClick={this.showOptions}
        >
          <MoreVertIcon />
        </IconButton>

        <Menu
          id={`options-${currencyId}`}
          anchorEl={anchorEl}
          open={!!anchorEl}
          onClose={this.hideOptions}
        >
          <MenuItem className={classes.placeholder} />
          <MenuItem onClick={this.onEditBalance}>
            <ListItemIcon className={classes.menuIcon}>
              <WalletIcon />
            </ListItemIcon>
            <ListItemText
              primary={'Edit balance'}
              secondary={`Current: ${balance[symbol] || 0}`}
            />
          </MenuItem>
          <MenuItem onClick={this.onDeselect}>
            <ListItemIcon className={classes.menuIcon}>
              <DeleteIcon />
            </ListItemIcon>
            <ListItemText primary={'Remove'} />
          </MenuItem>
        </Menu>
      </Fragment>
    );
  }

  private onDeselect = () => {
    const { deselectCurrency, currency } = this.props;

    this.hideOptions();

    deselectCurrency(currency);
  }

  private onEditBalance = () => {
    const { currency, onEditingBalance } = this.props;

    onEditingBalance(currency);

    this.hideOptions();
  }

  private showOptions = ({
    currentTarget,
  }: MouseEvent<HTMLButtonElement>) => {
    this.setState({
      anchorEl: currentTarget,
    });
  }

  private hideOptions = () => {
    this.setState({
      anchorEl: undefined,
    });
  }
}

export const CurrencyMenu = withStyles(styles)(CurrencyMenuRaw);
