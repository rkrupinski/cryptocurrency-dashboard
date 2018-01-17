import { ChartMode } from '@src/redux_/charts';

const API_URL = 'https://min-api.cryptocompare.com/data';

const buildUrl = (tail: string) => API_URL + tail;

const chartModes: { [key in ChartMode]: [string, number] } = {
  day: ['histohour', 24],
  hour: ['histominute', 60],
};

export const currenciesUrl = () => buildUrl('/all/coinlist');

export const pricesUrl = (fsyms: string[], tsyms: string[]) =>
    buildUrl(`/pricemulti?fsyms=${fsyms}&tsyms=${tsyms}`);

export const chartsUrl = (mode: ChartMode, fsym: string, tsym: string) => {
  const [chartMode, limit] = chartModes[mode];

  return buildUrl(`/${chartMode}?fsym=${fsym}&tsym=${tsym}&limit=${limit}`);
};
