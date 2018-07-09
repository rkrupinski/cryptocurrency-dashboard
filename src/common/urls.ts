import { ChartMode } from '@src/redux_/charts';

const API_URL = 'https://min-api.cryptocompare.com/data';

const APP_NAME = 'cryptocurrency_dashboard';

const qs = (params: object) => new URLSearchParams({
  extraParams: APP_NAME,
  ...params,
} as any /* (☞ﾟ∀ﾟ)☞ */);

const url = (base: string) => (tail: string, params: object = {}) =>
    `${base + tail}?${params}`;

const apiUrl = url(API_URL);

const chartModes: { [key in ChartMode]: [string, number] } = {
  day: ['histohour', 24 - 1],
  hour: ['histominute', 60 - 1],
  month: ['histoday', 30 - 1],
};

export const currenciesUrl = () => apiUrl('/all/coinlist');

export const pricesUrl = (fsyms: string[], tsyms: string[]) =>
    apiUrl('/pricemulti', qs({ fsyms, tsyms }));

export const chartsUrl = (mode: ChartMode, fsym: string, tsym: string) => {
  const [chartMode, limit] = chartModes[mode];

  return apiUrl(`/${chartMode}`, qs({ fsym, tsym, limit }));
};
