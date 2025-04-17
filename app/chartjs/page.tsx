'use client'

import React from "react";
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartOptions, LineElement, PointElement, ArcElement, ChartData, Filler } from 'chart.js';
import { Bar, Line, Doughnut, Chart } from "react-chartjs-2";
import { colors, botUserData, actionRatioData } from "../types/base";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement, ArcElement, Filler);

export default function Charts(){
    return (
        <div style={{ width: "50%", padding: "30px" }}>
            <BarChart />
            <LineChart />
            <AreaChart />
            <DoughnutChart />
            <ComboChart />
        </div>
    )
}

var botKeys = Object.keys(botUserData[0]).filter(x => x !== "date");

const datasets = botKeys.map((key, index) => ({
    label: key,
    data: botUserData.map(item => Number(item[key as keyof typeof item] as string)),
    backgroundColor: colors[index],
    borderColor: colors[index],
    barThickness: 15,
}))

function BarChart(){
    const data = {
        labels: botUserData.map(x => x.date),
        datasets: datasets,
    };

    const options: ChartOptions<"bar"> = {
        responsive: true,
        // layout: {
        //     padding: {
        //         top: 20,
        //         right: 20,
        //         left: 20,
        //         bottom: 20,
        //     }
        // },
        // indexAxis: "y", // horizontal chart
        plugins: {
            legend: {
                position: "bottom",
            },
            tooltip: {
                backgroundColor: "grey",
                mode: "index", // x축 기준으로 모든 dataset 표시
                intersect: false, // 마우스가 정확히 지점을 찍지 않아도 전체 표시
            },
            title: {
                display: true,
                text: "Simple Bar Chart",
                color: "#ffffff",
            }
        },
        scales: {
            y: {
                border: {
                    display: true,
                    dash: [1, 1] // 숫자가 작을수록 격자가 촘촘해짐
                },
                grid: {
                    display: true,
                    color: '#e0e0e0',
                    lineWidth: 1,
                },
                // stacked: true,
            },
            // x: {
            //     stacked: true,
            //     border: {
            //         display: true,
            //         dash: [1, 1]
            //     },
            //     grid: {
            //         display: true,
            //         color: '#e0e0e0',
            //         lineWidth: 1,
            //     }
            // },
        }
    };

    return (
        <Bar data={data} options={options} />
    );
}

function LineChart(){
    const data = {
        labels: botUserData.map(x => x.date),
        datasets: datasets
    }

    const options: ChartOptions<"line"> = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom",
            },
            tooltip: {
                backgroundColor: "grey",
            },
            title: {
                display: true,
                text: "Line Chart",
                color: "#ffffff",
                font: {
                    size: 15
                }
            }
        },
        scales: {
            y: {
                min: 0,
                border: {
                    display: true,
                    dash: [1, 1] // 숫자가 작을수록 격자가 촘촘해짐
                },
                grid: {
                    display: true,
                    color: '#e0e0e0', 
                    lineWidth: 1,
                },
            },
        },
    }

    return (
        <Line data={data} options={options} />
    )  
}

function AreaChart(){
    const data: ChartData<"line", number[], string>  = {
        labels: botUserData.map(x => x.date),
        datasets: botKeys.map((key, index) => ({
            label: key,
            data: botUserData.map(item => Number(item[key as keyof typeof item] as string)),
            backgroundColor: hexToRgba(colors[index], 0.3),
            borderColor: colors[index],
            fill: "origin",
            tension: 0.4,
        }))
    };

    const options: ChartOptions<"line"> = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom",
            },
            tooltip: {
                backgroundColor: "grey",
            },
            title: {
                display: true,
                text: "Area Chart",
                color: "#ffffff",
                font: {
                    size: 15
                }
            }
        },
        scales: {
            y: {
                min: 0,
                border: {
                    display: true,
                    dash: [1, 1], // 숫자가 작을수록 격자가 촘촘해짐
                },
                grid: {
                    display: true,
                    color: '#e0e0e0',
                    lineWidth: 1,
                },
            },
        },
    };

    return (
        <Line data={data} options={options} />
    )
}

function DoughnutChart(){
    const keys: Array<string> = actionRatioData.map(x => x.name);
    const dataset = {
        label: "Action Ratio",
        data: actionRatioData.map(x => Number(x.value)),
        backgroundColor: colors,
    };

    const data = {
        labels: keys,
        datasets: [dataset]
    };

    const options: ChartOptions<"doughnut"> = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom",
            },
            tooltip: {
                backgroundColor: "grey",
            },
            title: {
                display: true,
                text: "Doughnut Chart",
                color: "#ffffff",
                font: {
                    size: 15
                }
            }
        },
    };

    return (
        <div style={{ width: "60%", height: "60%" }}>
            <Doughnut data={data} options={options} />
        </div>
    )
}

function ComboChart(){
    const botAData: Array<number> = botUserData.map(x => x.botA);
    const botBData: Array<number> = botUserData.map(x => x.botB);
    const botCData: Array<number> = botUserData.map(x => x.botC);

    const data: ChartData<"bar" | "line", number[], string>  = {
        labels: botUserData.map(x => x.date),
        datasets: [
            {
              type: "bar",
              label: "Bot A",
              data: botAData,
              backgroundColor: "#52b963",
              barThickness: 20
            },
            {
              type: "bar",
              label: "Bot B",
              data: botBData,
              backgroundColor: "#ffbf3f",
              barThickness: 20
            },
            {
              type: "line",
              label: "Bot C",
              data: botCData,
              borderColor: "#1f64f7",
              borderWidth: 2,
              fill: true,
            },
        ],
    };

    var options: ChartOptions<"bar" | "line"> = {
        responsive: true,
        plugins: {
            legend: {
              position: "bottom",
            },
            title: {
              display: true,
              text: "Combo Chart",
              font: {
                size: 15
              }
            },
            tooltip: {
                backgroundColor: "grey",
            }
          },
          scales: {
            y: {
              min: 0,
              grid: {
                display: true,
                color: "#e0e0e0",
              },
              border: {
                display: true,
                dash: [1, 1],
              }
            },
        },
    };

    return (
        <Chart type="bar" data={data} options={options} />
    )
}

function hexToRgba(hex: string, alpha: number): string {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }