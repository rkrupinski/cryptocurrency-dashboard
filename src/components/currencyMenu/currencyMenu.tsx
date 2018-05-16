import React, { Fragment, Component, MouseEvent } from 'react';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import DeleteIcon from 'material-ui-icons/DeleteForever';
import WalletIcon from 'material-ui-icons/AccountBalanceWallet';
import Menu, { MenuItem } from 'material-ui/Menu';
import { ListItemIcon, ListItemText } from 'material-ui/List';
import { withStyles, WithStyles } from 'material-ui/styles';

import { Currency, ICurrencyDeselectedAction } from '@src/redux_/currencies';
import { styles, ClassNames } from './styles';

interface ICurrencyMenuProps {
  currency: Currency;
  deselectCurrency: (currency: Currency) => ICurrencyDeselectedAction;
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
      classes,
      currency: { id: currencyId },
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
          <MenuItem onClick={this.onSetBalance}>
            <ListItemIcon className={classes.menuIcon}>
              <WalletIcon />
            </ListItemIcon>
            <ListItemText
              primary={'Edit balance'}
              secondary={`Current: ${123.33}`}
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

  private onSetBalance = () => {
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
