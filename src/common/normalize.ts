import { Currency } from '@src/redux_/currencies';
import { ChartData } from '@src/redux_/charts';

export const currencies = (data: {
  [key: string]: any,
}): Currency[] => Object.keys(data).map((key) => {
  const {
    Id: id,
    CoinName: name,
    Symbol: symbol,
  } = data[key];

  return { id, name, symbol };
});

export const priceHistory = (data: Array<{close: number }>): ChartData[] =>
    data.map(({ close }) => ({ price: close }));
