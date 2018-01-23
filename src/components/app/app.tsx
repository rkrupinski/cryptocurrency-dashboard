import React, { Fragment, PureComponent } from 'react';
import ReactGridLayout, { WidthProvider, Layout } from 'react-grid-layout';
import { withStyles, WithStyles } from 'material-ui/styles';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import 'animate.css';

import { styles, ClassNames } from './styles';
import { ISetTmpLayoutAction, ISyncLayoutAction } from '@src/redux_/layout';
import { Currency, IFetchCurrenciesAction } from '@src/redux_/currencies';
import { CurrencyPickerConnected as CurrencyPicker } from '@src/components/currencyPicker';
import { TargetSelectorConnected as TargetSelector } from '@src/components/targetSelector';
import { ChartModeSelectorConnected as ChartModeSelector } from '@src/components/chartModeSelector';
import { RefreshWidgetConnected as RefreshWidget } from '@src/components/refreshWidget';
import { CurrencyWidgetConnected as CurrencyWidget } from '@src/components/currencyWidget';
import { ToolbarConnected as Toolbar } from '@src/components/toolbar';

interface IAppProps {
  fetchCurrencies: () => IFetchCurrenciesAction;
  setTmpLayout: (layout: Layout[]) => ISetTmpLayoutAction;
  syncLayout: () => ISyncLayoutAction;
  currencies: Currency[];
  layout: Layout[];
}

const GridLayout = WidthProvider(ReactGridLayout);

export class AppRaw extends PureComponent<
  IAppProps & WithStyles<ClassNames>,
  {}
> {
  constructor(props: IAppProps & WithStyles<ClassNames>) {
    super(props);

    this.onLayoutChange = this.onLayoutChange.bind(this);
    this.onDragStop = this.onDragStop.bind(this);
  }

  public componentDidMount() {
    this.props.fetchCurrencies();
  }

  public render() {
    const { currencies, layout, classes } = this.props;

    const renderCurrencies = currencies.map((currency) => {
      const gridData = layout.find(({ i }) => i === currency.id);

      return (
        <div key={currency.id} data-grid={gridData}>
          <CurrencyWidget currency={currency} />
        </div>
      );
    });

    return (
      <Fragment>
        <GridLayout
          className={`layout ${classes.grid}`}
          cols={4}
          draggableHandle={'.handle'}
          isResizable={false}
          layout={layout}
          onLayoutChange={this.onLayoutChange}
          onDragStop={this.onDragStop}
          rowHeight={90}
        >
          <div key={'currency-picker'} style={{ zIndex: 2 }}>
            <CurrencyPicker />
          </div>
          <div key={'target-selector'}>
            <TargetSelector />
          </div>
          <div key={'chart-mode-selector'}>
            <ChartModeSelector />
          </div>
          <div key={'refresh-widget'}>
            <RefreshWidget />
          </div>
          {renderCurrencies}
        </GridLayout>
        <Toolbar />
      </Fragment>
    );
  }

  private onLayoutChange(layout: Layout[]) {
    const { setTmpLayout } = this.props;

    setTmpLayout(layout);
  }

  private onDragStop() {
    const { syncLayout } = this.props;

    setTimeout(syncLayout);
  }
}

export const App = withStyles(styles)(AppRaw);
