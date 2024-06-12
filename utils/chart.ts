import { CHART_FILL_COLOR, PRIMARY_COLOR, TEXT_COLOR_SECONDARY } from "@/models/constant/color";
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
                borderColor: PRIMARY_COLOR,
                fill: true,
                backgroundColor: CHART_FILL_COLOR,
                pointRadius: 0,
                borderWidth: 2,
                data: chartData.data,
            },
        ],
    };
};

export const initChartOptions = (data: number[]): ChartOptions<"line"> => {
    return {
        scales: {
            y: {
                beginAtZero: false,
                ticks: { color: TEXT_COLOR_SECONDARY },
                title: { display: false },
            },
            x: {
                ticks: { color: TEXT_COLOR_SECONDARY },
                grid: { display: false },
                title: { display: false },
            },
        },
        plugins: {
            tooltip: {
                enabled: true,
                callbacks: {
                    title: tooltipTitle,
                    label: (context) => {
                        const value = context.parsed.y;
                        return `${value}`;
                    },
                },
            },
            legend: { display: false },
        },
        responsive: true,
        interaction: {
            mode: "index",
            intersect: false,
        },
    };
};
