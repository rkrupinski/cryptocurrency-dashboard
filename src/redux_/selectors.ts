import { IRootState } from '.';

export const selectCurrencies = ({ currencies }: IRootState) => currencies;

export const selectLayout = ({ layout }: IRootState) => layout;

export const selectPrices = ({ prices }: IRootState) => prices;

export const selectCharts = ({ charts }: IRootState) => charts;

export const selectRefresh = ({ refresh }: IRootState) => refresh;

export const selectWallet = ({ wallet }: IRootState) => wallet;
