import { connect } from 'react-redux';

import { IRootState } from '@src/redux_';
import { makeSelectPrice, selectLoading } from '@src/redux_/prices/selectors';
import { deselectCurrency } from '@src/redux_/currencies';
import { selectTarget } from '@src/redux_/currencies/selectors';
import { makeSelectChartData, makeSelectChartDataLoading } from '@src/redux_/charts/selectors';
import { CurrencyWidget, ICurrencyWidgetProps } from '.';

const mapStateToProps = (state: IRootState, ownProps: Partial<ICurrencyWidgetProps>) => {
  const { currency } = ownProps;
  const selectChartData = makeSelectChartData();
  const selectChartDataLoading = makeSelectChartDataLoading();
  const selectPrice = makeSelectPrice();

  return {
    chartData: selectChartData(state, currency!),
    chartDataLoading: selectChartDataLoading(state, currency!),
    price: selectPrice(state, currency!),
    priceLoading: selectLoading(state),
    target: selectTarget(state),
  };
};

const mapDispatchToProps = {
  deselectCurrency,
};

export const CurrencyWidgetConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CurrencyWidget);
