"use client";
import React from "react";
import Timeframe from "../Timeframe";
import Chart from "../Chart";
import useSetChartData from "@/hooks/useSetChartData";
import styles from "./OverviewTab.module.css";

const OverviewTab: React.FC = () => {
    const { handleChangeTimeframe, chartData, selectedTimeframe, isLoading } = useSetChartData();

    return (
        <section className={styles.overview}>
            <Chart chartData={chartData} isLoading={isLoading} />
            <Timeframe
                handleChangeTimeframe={handleChangeTimeframe}
                selectedTimeframe={selectedTimeframe}
            />
        </section>
    );
};

export default OverviewTab;
