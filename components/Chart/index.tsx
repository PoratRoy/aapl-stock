"use client";
import { LinearScale, CategoryScale, PointElement, LineElement, Chart as ChartJs } from "chart.js";
import { initChartData, initChartOptions } from "@/utils/chart";
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import styles from "./Chart.module.css";
import { StockChartData } from "@/models/types/chart";
import { initDataChart } from "@/models/init/chart";
import { StockValue } from "@/models/types/stock";

const Chart = () => {
    ChartJs.register(LinearScale);
    ChartJs.register(CategoryScale);
    ChartJs.register(PointElement);
    ChartJs.register(LineElement);

    const [chartData, setChartData] = useState<StockChartData>(initDataChart);

    const fetchData = async () => {
        const response = await fetch("/api/stock", { method: "GET" });
        if (response) {
            const stockValue = (await response.json()) as StockValue[];
            if (stockValue) {
                const labels = stockValue.map((item) => item.Date);
                const data = stockValue.map((item) => item.Close);

                if (data && data.length !== 0 && labels && labels.length !== 0) {
                    const initChartData: StockChartData = { data, labels };
                    setChartData(initChartData);
                }
            }
        }
    };

    return (
        <section className={styles.chartContainer}>
            <Line data={initChartData(chartData)} options={initChartOptions(chartData.data)} />
            <button onClick={fetchData}>click</button>
        </section>
    );
};

export default Chart;
