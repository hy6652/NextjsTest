"use client"

import { ChartjsGenericBarChartJS } from "@/components/ChartjsGenericBarChart"
import { BotUser, botUserData, colors } from "../../types/base"

export default function Chart(){
    const botKeys = Object.keys(botUserData[0])
    .filter((k): k is keyof BotUser => k !== 'date');

  const datasets = botKeys.map((key, idx) => ({
    label: key,
    data: botUserData.map(item => Number(item[key] as any)),
    backgroundColor: colors[idx % colors.length],
    borderColor: colors[idx % colors.length],
    barThickness: 15,
  }));

  const labels = botUserData.map(item => item.date);

  return (
    <div style={{ width: '600px', height: '400px' }}>
      <h2>Bot User Counts</h2>
      <ChartjsGenericBarChartJS
        labels={labels}
        datasets={datasets}
        title="동적 바 차트"
        indexAxis="x"
        stacked={false}
        height={300}
      />
    </div>
  );
};
