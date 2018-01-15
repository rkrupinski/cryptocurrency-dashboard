import React, { PureComponent } from 'react';
import ReactGridLayout, { WidthProvider, Layout } from 'react-grid-layout';
import { withStyles, WithStyles } from 'material-ui/styles';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

import { styles, ClassNames } from './styles';
import { ISetLayoutAction } from '@src/redux_/layout';
import { Currency, IFetchCurrenciesAction } from '@src/redux_/currencies';
import { CurrencyPickerConnected as CurrencyPicker } from '@src/components/currencyPicker';
import { TargetSelectorConnected as TargetSelector } from '@src/components/targetSelector';
import { CurrencyWidgetConnected as CurrencyWidget } from '@src/components/currencyWidget';

interface IAppProps {
  fetchCurrencies: () => IFetchCurrenciesAction;
  setLayout: (layout: Layout[]) => ISetLayoutAction;
  currencies: Currency[];
  layout: Layout[];
  pricesLoaded: boolean;
}

const GridLayout = WidthProvider(ReactGridLayout);

export class AppRaw extends PureComponent<
  IAppProps & WithStyles<ClassNames>,
  {}
> {
  constructor(props: IAppProps & WithStyles<ClassNames>) {
    super(props);

    this.onLayoutChange = this.onLayoutChange.bind(this);
  }

  public componentDidMount() {
    this.props.fetchCurrencies();
  }

  public render() {
    const { currencies, layout } = this.props;

    const renderCurrencies = currencies.map((currency) => {
      const gridData = layout.find(({ i }) => i === currency.id);

      return (
        <div key={currency.id} data-grid={gridData}>
          <CurrencyWidget currency={currency} />
        </div>
      );
    });

    return (
      <GridLayout
        className={'layout'}
        cols={3}
        draggableHandle={'.handle'}
        isResizable={false}
        layout={layout}
        onLayoutChange={this.onLayoutChange}
        rowHeight={100}
      >
        <div key={'currency-picker'} style={{ zIndex: 2 }}>
          <CurrencyPicker />
        </div>
        <div key={'target-selector'}>
          <TargetSelector />
        </div>
        {renderCurrencies}
      </GridLayout>
    );
  }

  private onLayoutChange(layout: Layout[]) {
    const { setLayout, pricesLoaded } = this.props;

    if (pricesLoaded) {
      setLayout(layout);
    }
  }
}

export const App = withStyles(styles)(AppRaw);
