'use client';
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export type GenericBarChartJSProps = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string | string[];
    borderColor?: string | string[];
    borderWidth?: number;
  }[];
  title?: string;
  indexAxis?: 'x' | 'y';
  stacked?: boolean;
  height?: number;
};

export function ChartjsGenericBarChartJS({
  labels,
  datasets,
  title,
  indexAxis = 'x',
  stacked = false,
  height = 400,
}: GenericBarChartJSProps) {
  const data = React.useMemo(
    () => ({ labels, datasets }),
    [labels, datasets]
  );

  const options = React.useMemo(
    () => ({
      indexAxis,
      responsive: true,
      plugins: {
        legend: { position: 'bottom' as const },
        title: {
          display: !!title,
          text: title,
        },
        tooltip: {
          mode: 'index' as const,
          intersect: false,
          backgroundColor: 'grey',
        },
      },
      scales: {
        x: {
          stacked,
          grid: { display: true, color: '#e0e0e0', lineWidth: 1 },
          border: { display: true, dash: [1, 1] },
        },
        y: {
          stacked,
          grid: { display: true, color: '#e0e0e0', lineWidth: 1 },
          border: { display: true, dash: [1, 1] },
        },
      },
    }),
    [indexAxis, stacked, title]
  );

  return (
    <div style={{ height }}>
      <Bar options={options} data={data} />
    </div>
  );
}
