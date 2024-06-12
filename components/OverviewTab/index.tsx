"use client";
import React, { useState } from "react";
import Timeframe from "../Timeframe";
import Chart from "../Chart";
import { StockValue } from "@/models/types/stock";
import { StockChartData } from "@/models/types/chart";
import { initDataChart } from "@/models/init/chart";
import { TimeValue } from "@/models/types/time";

const OverviewTab = () => {
    const [chartData, setChartData] = useState<StockChartData>(initDataChart);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleChangeTimeframe = async (timeValue: TimeValue) => {
        try {
            setIsLoading(true);
            const queryString = new URLSearchParams(timeValue).toString();
            const response = await fetch(`/api/stock?${queryString}`, { method: "GET" });
            if (response) {
                const stockValue = (await response.json()) as StockValue[];
                if (stockValue) {
                    const labels = stockValue.map((item) => item.Date);
                    const data = stockValue.map((item) => item.Close);

                    if (data && data.length !== 0 && labels && labels.length !== 0) {
                        const initChartData: StockChartData = { data, labels };
                        setChartData(initChartData);
                        setIsLoading(false);
                    }
                }
            }
        } catch (error) {
            console.log("Error fetching data", error);
            setIsLoading(false);
        }
    };

    return (
        <section>
            <Chart chartData={chartData} isLoading={isLoading} />
            <Timeframe handleChangeTimeframe={handleChangeTimeframe} />
        </section>
    );
};

export default OverviewTab;
