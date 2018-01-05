import { Target } from '@src/redux_/currencies';

export type Price = {
  [key in Target]: number;
};
