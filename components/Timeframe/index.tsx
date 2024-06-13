"use client";
import { TimeOption } from "@/models/types/time";
import { timeOptions } from "@/models/resource/options";
import useQueryParams from "@/hooks/useQueryParams";
import styles from "./Timeframe.module.css";
import Link from "next/link";
import React from "react";

type TimeframeProps = {
    selectedTimeframe: TimeOption | undefined;
    handleChangeTimeframe: (timeframe: TimeOption) => Promise<void>;
};

const Timeframe: React.FC<TimeframeProps> = ({ handleChangeTimeframe, selectedTimeframe }) => {
    const { getQueryParams } = useQueryParams();

    const Time = (option: TimeOption) => {
        const searchParams = getQueryParams("tab");
        return (
            <Link
                className={
                    selectedTimeframe?.label === option.label
                        ? styles.timeOptionSelected
                        : styles.timeOption
                }
                onClick={() => handleChangeTimeframe(option)}
                href={{ query: { ...searchParams, date: option.label } }}
            >
                {option.label}
            </Link>
        );
    };

    return (
        <section className={styles.timeframeContainer}>
            {timeOptions.map((option: TimeOption) => (
                <Time key={option.value.startTime} {...option} />
            ))}
        </section>
    );
};

export default Timeframe;
