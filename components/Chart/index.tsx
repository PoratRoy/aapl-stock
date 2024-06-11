import { LinearScale, CategoryScale, PointElement, LineElement, Chart as ChartJs } from "chart.js";
import { initChartData, initChartOptions } from "@/utils/chart";
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import type { ChartData } from "chart.js";
import styles from "./Chart.module.css";
import { StockChartData } from "@/models/types/chart";
import { initDataChart } from "@/models/init/chart";

const Chart = () => {
    ChartJs.register(LinearScale);
    ChartJs.register(CategoryScale);
    ChartJs.register(PointElement);
    ChartJs.register(LineElement);

    const [chartData, setChartData] = useState<StockChartData>(initDataChart);

    return (
        <section className={styles.chartContainer}>
            <Line data={initChartData(chartData)} options={initChartOptions(chartData.data)} />
        </section>
    );
};

export default Chart;
