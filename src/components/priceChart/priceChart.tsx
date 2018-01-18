import React, { SFC } from 'react';
import { ResponsiveContainer, LineChart, Line, YAxis } from 'recharts';

import { ChartData } from '@src/redux_/charts';

export interface IPriceChartProps {
  data: ChartData[];
}

export const PriceChart: SFC<IPriceChartProps> = ({ data }) => (
  <ResponsiveContainer height={70}>
    <LineChart data={data}>
      <YAxis
        type={'number'}
        domain={['dataMin', 'dataMax']}
        hide={true}
      />
      <Line
        type={'monotone'}
        dataKey={'price'}
        dot={false}
      />
    </LineChart>
  </ResponsiveContainer>
);
