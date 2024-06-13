"use client";
import { initDataChart } from "@/models/init/chart";
import { timeOptions } from "@/models/resource/options";
import { StockChartData } from "@/models/types/chart";
import { StockValue } from "@/models/types/stock";
import { TimeOption } from "@/models/types/time";
import Session from "@/utils/sessionStorage";
import { useEffect, useRef, useState } from "react";
import useQueryParams from "./useQueryParams";
import { toast } from "react-hot-toast";

const useSetChartData = () => {
    const { getCurrentDate } = useQueryParams();
    const [chartData, setChartData] = useState<StockChartData>(initDataChart);
    const [selectedTimeframe, setSelectedTimeframe] = useState<TimeOption | undefined>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const refLock = useRef(false);

    useEffect(() => {
        if (!refLock.current) {
            refLock.current = true;

            if (!selectedTimeframe) {
                const timeValue = timeOptions.find((option) => option.label === getCurrentDate());
                if (timeValue) {
                    handleChangeTimeframe(timeValue);
                } else {
                    if (chartData.data.length === 0 || chartData.labels.length === 0) {
                        const stockValue: StockValue[] | undefined = Session.get("stockValue");
                        if (stockValue) setData(stockValue);
                        else handleChangeTimeframe();
                    }
                }
            }
        }
    }, [selectedTimeframe]);

    const handleChangeTimeframe = async (timeValue?: TimeOption) => {
        if (timeValue && timeValue.label === selectedTimeframe?.label) return;
        if (!timeValue) timeValue = selectedTimeframe;

        try {
            setIsLoading(true);
            setSelectedTimeframe(timeValue);
            const queryString = new URLSearchParams(timeValue?.value).toString();
            const response = await fetch(`/api/stock?${queryString}`, { method: "GET" });
            if (response) {
                const stockValue = (await response.json()) as StockValue[];
                Session.set("stockValue", stockValue);
                if (stockValue) setData(stockValue);
            }
        } catch (error) {
            console.error("Error fetching data", error);
            toast.error("Error fetching data, Try again later");
            setIsLoading(false);
        } finally {
            refLock.current = false;
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

    return { handleChangeTimeframe, chartData, selectedTimeframe, isLoading };
};

export default useSetChartData;
