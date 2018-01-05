import { Actions as CurrenciesActions } from './currencies';
import { Actions as PricesActions } from './prices';

export type RootAction =
    | CurrenciesActions
    | PricesActions;
