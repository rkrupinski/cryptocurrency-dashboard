import { ChartMode } from '@src/redux_/charts';

const API_URL = 'https://min-api.cryptocompare.com/data';
const APP_NAME = 'cryptocurrency_dashboard';

const buildUrl = (tail: string) => API_URL + tail;

const chartModes: { [key in ChartMode]: [string, number] } = {
  day: ['histohour', 24 - 1],
  hour: ['histominute', 60 - 1],
  month: ['histoday', 30 - 1],
};

export const currenciesUrl = () => buildUrl(`/all/coinlist?extraParams=${APP_NAME}`);

export const pricesUrl = (fsyms: string[], tsyms: string[]) =>
    buildUrl(`/pricemulti?fsyms=${fsyms}&tsyms=${tsyms}&extraParams=${APP_NAME}`);

export const chartsUrl = (mode: ChartMode, fsym: string, tsym: string) => {
  const [chartMode, limit] = chartModes[mode];

  return buildUrl(`/${chartMode}?fsym=${fsym}&tsym=${tsym}&limit=${limit}&extraParams=${APP_NAME}`);
};
