import { StockChartData } from "@/models/types/chart";
import type { ChartData, ChartOptions, Point } from "chart.js";
import { TooltipItem } from "chart.js";

export function tooltipTitle(tooltipItems: TooltipItem<"line">[]): string {
    if (tooltipItems.length === 1) {
        return tooltipItems[0].label || ""; 
    }
    return "";
}

export const initChartData = (chartData: StockChartData): ChartData<"line"> => {
    return {
        labels: chartData.labels,
        datasets: [
            {
                borderColor: `#00aeff`,
                fill: true,
                pointRadius: 0,
                borderWidth: 2,
                data: chartData.data,
            },
        ],
    };
};

export const initChartOptions = (data: number[]): ChartOptions<"line"> => {
    let max: number = 300;

    if (data.length != 0) {
        const resMaxTx = Math.max(
            ...data.map((row) => {
                return row;
            }),
        );
        if (resMaxTx !== 0) {
            max = Math.ceil(resMaxTx / 50) * 50;
        }
    }

    return {
        scales: {
            y: {
                min: 0,
                max: max,
                beginAtZero: true,
                ticks: {
                    color: "#c7c7c7",
                },
                title: {
                    display: true,
                    text: "Price",
                    color: "#c7c7c7",
                },
            },
            x: {
                ticks: {
                    color: "#c7c7c7",
                },
                grid: {
                    display: false,
                },
                title: {
                    display: true,
                    text: "Date",
                    color: "#c7c7c7",
                },
            },
        },
        plugins: {
            tooltip: {
                callbacks: {
                    title: tooltipTitle,
                },
            },
            legend: {
                display: false,
            },
        },
        responsive: true,
        interaction: {
            mode: "index",
            intersect: false,
        },
    };
};
