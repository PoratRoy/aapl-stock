"use client";
import React, { useEffect, useState } from "react";
import Timeframe from "../Timeframe";
import Chart from "../Chart";
import { StockValue } from "@/models/types/stock";
import { StockChartData } from "@/models/types/chart";
import { initDataChart } from "@/models/init/chart";
import { TimeOption } from "@/models/types/time";
import { timeOptions } from "@/models/resource/options";
import Session from "@/utils/sessionStorage";

const OverviewTab = () => {
    const [chartData, setChartData] = useState<StockChartData>(initDataChart);
    const [selectedTimeframe, setSelectedTimeframe] = useState<TimeOption>(timeOptions[0]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        if(chartData.data.length === 0 || chartData.labels.length === 0){
            const stockValue: StockValue[] | undefined = Session.get("stockValue");
            if (stockValue) setData(stockValue);
        }
    }, []);

    const handleChangeTimeframe = async (timeValue: TimeOption) => {
        if (timeValue.label === selectedTimeframe.label) return;
        try {
            setIsLoading(true);
            setSelectedTimeframe(timeValue);
            const queryString = new URLSearchParams(timeValue.value).toString();
            const response = await fetch(`/api/stock?${queryString}`, { method: "GET" });
            if (response) {
                const stockValue = (await response.json()) as StockValue[];
                Session.set("stockValue", stockValue);
                if (stockValue) setData(stockValue);
            }
        } catch (error) {
            console.log("Error fetching data", error);
            setIsLoading(false);
        }
    };

    const setData = (stockValue: StockValue[]) => {
        const labels = stockValue.map((item) => item.date);
        const data = stockValue.map((item) => item.price);

        if (data && data.length !== 0 && labels && labels.length !== 0) {
            const initChartData: StockChartData = { data, labels };
            setChartData(initChartData);
            setIsLoading(false);
        }
    };

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
