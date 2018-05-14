import React, { SFC } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  YAxis,
  Tooltip,
} from 'recharts';
import { withTheme, WithTheme } from 'material-ui/styles';

import { ChartData } from '@src/redux_/charts';
import { PriceChartTooltip } from '@src/components/priceChartTooltip';

export interface IPriceChartProps {
  data: ChartData[];
}

export const PriceChartRaw: SFC<
  IPriceChartProps & WithTheme
> = ({ data, theme }) => (
  <ResponsiveContainer height={70}>
    <LineChart data={data}>
      <Tooltip
        animationDuration={200}
        animationEasing={'ease-out'}
        content={<PriceChartTooltip />}
        cursor={false}
      />
      <YAxis
        type={'number'}
        domain={['dataMin', 'dataMax']}
        hide={true}
      />
      <Line
        type={'monotone'}
        dataKey={'price'}
        dot={false}
        animationDuration={300}
        stroke={theme.palette.primary.main}
      />
    </LineChart>
  </ResponsiveContainer>
);

export const PriceChart = withTheme()(PriceChartRaw);
