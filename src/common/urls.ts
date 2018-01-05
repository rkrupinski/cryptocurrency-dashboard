const API_URL = 'https://min-api.cryptocompare.com/data';

const buildUrl = (tail: string) => API_URL + tail;

export const currenciesUrl = () => buildUrl('/all/coinlist');

export const pricesUrl = (fsyms: string[], tsyms: string[]) =>
    buildUrl(`/pricemulti?fsyms=${fsyms}&tsyms=${tsyms}`);
