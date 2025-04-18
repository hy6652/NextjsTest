import { colors } from '@/app/types/base';
import React from 'react';
import {
  BarChart as ReBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LegendProps,
} from 'recharts';

type GenericBarChartProps<T> = {
  data: T[];
  dataKeys: (keyof T)[];
  xDataKey?: keyof T;
  categoryKey?: keyof T;
  layout?: 'horizontal' | 'vertical';
  stack?: boolean;
  width?: string | number;
  height?: number;
  legendFormatter?: LegendProps['formatter'];
};

export function RechartsGenericBarChart<T extends Record<string, any>>({
  data,
  dataKeys,
  xDataKey,
  categoryKey,
  layout = 'horizontal',
  stack = false,
  width = '100%',
  height = 400,
  legendFormatter,
}: GenericBarChartProps<T>) {
  const isVertical = layout === 'vertical';

  return (
    <ResponsiveContainer width={width} height={height}>
      <ReBarChart
        layout={isVertical ? 'vertical' : 'horizontal'}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        {isVertical ? (
          <>
            <XAxis type="number" />
            <YAxis type="category" dataKey={String(categoryKey)} />
          </>
        ) : (
          <>
            <XAxis dataKey={String(xDataKey)} />
            <YAxis />
          </>
        )}
        <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ backgroundColor: 'grey', border: 'none' }} />
        <Legend
          height={30}
          formatter={legendFormatter}
        />
        {dataKeys.map((key, idx) => (
          <Bar
            key={String(key)}
            dataKey={String(key)}
            fill={colors[idx % colors.length]}
            stackId={stack ? 'a' : undefined}
            barSize={20}
          />
        ))}
      </ReBarChart>
    </ResponsiveContainer>
  );
}