"use client";
import React from "react";
import Timeframe from "../Timeframe";
import Chart from "../Chart";
import useSetChartData from "@/hooks/useSetChartData";

const OverviewTab = () => {
    const { handleChangeTimeframe, chartData, selectedTimeframe, isLoading } = useSetChartData();

    return (
        <section>
            <Chart chartData={chartData} isLoading={isLoading} />
            <Timeframe
                handleChangeTimeframe={handleChangeTimeframe}
                selectedTimeframe={selectedTimeframe}
            />
        </section>
    );
};

export default OverviewTab;
